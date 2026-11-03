(() => {
 const login=document.getElementById('login'), loginForm=document.getElementById('loginForm'), loginMessage=document.getElementById('loginMessage'), adminContent=document.getElementById('adminContent'), password=document.getElementById('password');
 const API='/api';
 loginForm.addEventListener('submit',async e=>{
  e.preventDefault(); loginMessage.textContent='Proveravam šifru…';
  try {
   const response=await fetch(API+'/login',{method:'POST',credentials:'include',headers:{'Content-Type':'application/json'},body:JSON.stringify({password:password.value})});
   const data=await response.json().catch(()=>({}));
   if(!response.ok) throw new Error(data.error||'Prijava nije uspela.');
   login.hidden=true; adminContent.hidden=false; loginMessage.textContent=''; password.value='';
  } catch(err) { loginMessage.textContent=err.message==='Failed to fetch'?'Serverska prijava još nije povezana. Potrebno je podesiti Worker.':err.message; }
 });
 document.getElementById('logout').addEventListener('click',async()=>{
  try{await fetch(API+'/logout',{method:'POST',credentials:'include'});}catch(e){}
  adminContent.hidden=true;login.hidden=false;password.value='';
 });
 const picker=document.getElementById('files'), add=document.getElementById('add'), clear=document.getElementById('clear');
 const selection=document.getElementById('selection'), gallery=document.getElementById('gallery'), count=document.getElementById('count'), category=document.getElementById('category');
 let pending=[], photos=[];
 const fmt=n=>n===1?'1 fotografija':n>=2&&n<=4?n+' fotografije':n+' fotografija';
 picker.addEventListener('change',()=>{
  pending=Array.from(picker.files||[]).filter(f=>f.type.startsWith('image/'));
  add.disabled=!pending.length;
  selection.textContent=pending.length?('Izabrano: '+fmt(pending.length)):'Nijedna fotografija nije izabrana.';
 });
 add.addEventListener('click',()=>{
  pending.forEach(file=>photos.push({id:crypto.randomUUID(),file,url:URL.createObjectURL(file),category:category.value}));
  pending=[];picker.value='';add.disabled=true;selection.textContent='Fotografije su dodate u privremeni pregled, nisu sačuvane na serveru.';
  render();
 });
 clear.addEventListener('click',()=>{pending=[];picker.value='';add.disabled=true;selection.textContent='Izbor je očišćen.';});
 function render(){
  count.textContent=fmt(photos.length);
  if(!photos.length){gallery.innerHTML='<div class="empty">Još nema fotografija.<br>Izaberi slike sa računara da bi se prikazale ovde.</div>';return;}
  gallery.replaceChildren();
  photos.forEach(photo=>{
   const card=document.createElement('article');card.className='photo';
   const img=document.createElement('img');img.src=photo.url;img.alt=photo.file.name;
   const info=document.createElement('div');info.className='photo-info';
   const name=document.createElement('div');name.className='photo-name';name.textContent=photo.file.name;
   const cat=document.createElement('div');cat.className='photo-cat';cat.textContent=photo.category;
   const foot=document.createElement('div');foot.className='photo-foot';
   const size=document.createElement('small');size.textContent=(photo.file.size/1024/1024).toFixed(2)+' MB';
   const del=document.createElement('button');del.className='btn danger';del.type='button';del.textContent='Ukloni';
   del.addEventListener('click',()=>{URL.revokeObjectURL(photo.url);photos=photos.filter(p=>p.id!==photo.id);render();});
   foot.append(size,del);info.append(name,cat,foot);card.append(img,info);gallery.append(card);
  });
 }
 window.addEventListener('beforeunload',()=>photos.forEach(p=>URL.revokeObjectURL(p.url)));
})();