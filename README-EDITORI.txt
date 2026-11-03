FotoNetworkSrb editorski panel — Cloudflare Workers + R2
======================================================

U ovom commitu su dodati admin.html, admin.js, gallery.js i worker/worker.js.
Panel nije spreman za javni rad dok ne podesiš Cloudflare resurse i URL Worker-a.

1) Cloudflare R2
- Cloudflare Dashboard → R2 Object Storage → Create bucket
- Naziv bucket-a: fotonetworksrb-photos

2) Cloudflare KV
- Workers & Pages → KV → Create namespace
- Naziv: FNS_SESSIONS
- Kopiraj namespace ID u wrangler.toml umesto REPLACE_WITH_KV_NAMESPACE_ID

3) Deploy Worker
- Napravi Worker (ili deploy preko Wrangler-a) iz worker/worker.js.
- Poveži R2 binding PHOTOS sa bucket-om fotonetworksrb-photos.
- Poveži KV binding SESSIONS sa kreiranim namespace-om.
- Dodaj secret ADMIN_PASSWORD (duga, jedinstvena editorska šifra).
- U admin.js i gallery.js zameni API promenljivu sa URL-om Worker-a, npr. https://fotonetworksrb-api.TVOJ-NALOG.workers.dev
- Worker koristi HttpOnly Secure session cookie i ograničava broj neuspešnih pokušaja po IP adresi.

4) GitHub Pages
- Objavi admin.html, admin.js, gallery.js i worker.js/wrangler.toml zajedno sa postojećim fajlovima.
- Otvori /admin.html za editorski panel.
- Javna galerija preuzima fotografije sa Worker API-ja. Dok API nije podešen, postojeće demo slike ostaju vidljive.

Napomena: ne stavljaj editorsku šifru u HTML/JS niti u javni GitHub repozitorijum. ADMIN_PASSWORD postavi kao Cloudflare Worker secret.
