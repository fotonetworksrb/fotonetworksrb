const json = (data, status=200, headers={}) => new Response(JSON.stringify(data), { status, headers: { "Content-Type":"application/json; charset=utf-8", "Cache-Control":"no-store", ...headers } });
const COOKIE = "fns_editor";
const cookieValue = (request) => (request.headers.get("Cookie") || "").split(";").map(x=>x.trim()).find(x=>x.startsWith(COOKIE+"="))?.slice(COOKIE.length+1);
const validSession = async (request, env) => { const token=cookieValue(request); return token ? await env.SESSIONS.get("session:"+token) : null; };
const cors = (request) => ({ "Access-Control-Allow-Origin": request.headers.get("Origin") || "*", "Access-Control-Allow-Credentials":"true", "Vary":"Origin" });
export default {
 async fetch(request, env) {
  const url=new URL(request.url), path=url.pathname, headers=cors(request);
  if(request.method==="OPTIONS") return new Response(null,{headers:{...headers,"Access-Control-Allow-Methods":"GET,POST,DELETE,OPTIONS","Access-Control-Allow-Headers":"Content-Type"}});
  if(path==="/api/login" && request.method==="POST") {
   const ip=request.headers.get("CF-Connecting-IP")||"unknown", body=await request.json().catch(()=>({}));
   const attempts=Number(await env.SESSIONS.get("attempts:"+ip)||"0");
   if(attempts>=8) return json({error:"Previše pokušaja. Pokušaj kasnije."},429,headers);
   if(!env.ADMIN_PASSWORD || body.password!==env.ADMIN_PASSWORD) { await env.SESSIONS.put("attempts:"+ip,String(attempts+1),{expirationTtl:900}); return json({error:"Pogrešna šifra."},401,headers); }
   await env.SESSIONS.delete("attempts:"+ip);
   const token=crypto.randomUUID()+crypto.randomUUID();
   await env.SESSIONS.put("session:"+token,"editor",{expirationTtl:28800});
   return json({ok:true},200,{...headers,"Set-Cookie":COOKIE+"="+token+"; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=28800"});
  }
  if(path==="/api/logout" && request.method==="POST") { const token=cookieValue(request); if(token) await env.SESSIONS.delete("session:"+token); return json({ok:true},200,{...headers,"Set-Cookie":COOKIE+"=; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=0"}); }
  if(path==="/api/photos" && request.method==="GET") {
   const listed=await env.PHOTOS.list({limit:500});
   const photos=listed.objects.map(o=>({key:o.key, name:o.customMetadata?.name||o.key, category:o.customMetadata?.category||"ostalo", url:"/api/photo/"+encodeURIComponent(o.key), uploaded:o.uploaded?.toISOString?.()||null}));
   return json({photos},200,headers);
  }
  if(path.startsWith("/api/photo/") && request.method==="GET") {
   const key=decodeURIComponent(path.slice("/api/photo/".length)); if(!key || key.includes("..")) return new Response("Not found",{status:404});
   const obj=await env.PHOTOS.get(key); if(!obj) return new Response("Not found",{status:404});
   return new Response(obj.body,{headers:{"Content-Type":obj.httpMetadata?.contentType||"application/octet-stream","Cache-Control":"public, max-age=3600","ETag":obj.httpEtag}});
  }
  const session=await validSession(request,env);
  if(!session) return json({error:"Niste prijavljeni."},401,headers);
  if(path==="/api/upload" && request.method==="POST") {
   const form=await request.formData(), file=form.get("photo"), category=String(form.get("category")||"ostalo"), name=String(form.get("name")||file?.name||"Fotografija");
   if(!(file instanceof File) || !file.type.startsWith("image/")) return json({error:"Izaberite fotografiju."},400,headers);
   if(file.size>12*1024*1024) return json({error:"Fotografija može imati najviše 12 MB."},400,headers);
   const ext=(file.name.split(".").pop()||"jpg").toLowerCase().replace(/[^a-z0-9]/g,"")||"jpg";
   const key=crypto.randomUUID()+"."+ext;
   await env.PHOTOS.put(key,file.stream(),{httpMetadata:{contentType:file.type},customMetadata:{name:name.slice(0,100),category:category.slice(0,40)}});
   return json({ok:true,key},201,headers);
  }
  if(path.startsWith("/api/photo/") && request.method==="DELETE") {
   const key=decodeURIComponent(path.slice("/api/photo/".length)); if(!key || key.includes("..")) return json({error:"Neispravan naziv."},400,headers);
   await env.PHOTOS.delete(key); return json({ok:true},200,headers);
  }
  return json({error:"Nije pronađeno."},404,headers);
 }
};