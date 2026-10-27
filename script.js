// FotoNetworkSrb — language switch, light/dark theme, mobile navigation and contact form
(() => {
  const translations = {
    sr: {
      topline:"Profesionalno fotografisanje posebnih trenutaka",locationShort:"Beograd i okolina",bookingOpen:"Rezervacije u toku",
      navHome:"Početna",navServices:"Usluge",navGallery:"Galerija",navAbout:"O nama",navContact:"Kontakt",bookNow:"Zakaži fotografisanje",
      darkMode:"Tamna tema",lightMode:"Svetla tema",heroEyebrow:"Fotografija koja čuva emocije",heroTitle:"Trenuci prođu.<br><em>Uspomene ostaju.</em>",
      heroText:"Od najvažnijeg „da“ do porodičnih okupljanja — beležimo iskrene emocije, sitne detalje i priče kojima ćete se vraćati čitavog života.",
      heroCta:"Rezerviši svoj datum",viewGallery:"Pogledaj galeriju",proofTitle:"Vaša priča, naš objektiv",proofSub:"Pažnja prema svakom detalju",imageTagTitle:"Priče vredne čuvanja",imageTagSub:"Fotografije sa dušom",heroBottom:"SVAKI TRENUTAK JE VAŽAN",
      introEyebrow:"Dobro došli u FotoNetworkSrb",introTitle:"Ne samo fotografije.<br><em>Vaša životna priča.</em>",introText:"Verujemo da najbolje fotografije nisu samo lepe — one vraćaju osećaj trenutka. Naš pristup je nenametljiv, pažljiv i usmeren na ono što je zaista važno: ljude, emocije i detalje.",introLink:"Upoznajte naš pristup",
      servicesEyebrow:"Naše usluge",servicesTitle:"Za svaki dan koji<br><em>želite da pamtite.</em>",servicesIntro:"Prilagođavamo se vašoj proslavi i stvaramo galeriju koja priča celu priču.",
      weddings:"Venčanja",weddingsText:"Od priprema i ceremonije do prvog plesa i poslednje pesme — svaki važan detalj ostaje sa vama.",
      baptisms:"Krštenja",baptismsText:"Nežne, svečane i spontane fotografije porodičnog dana koji zauzima posebno mesto u srcu.",
      birthdays:"Rođendani",birthdaysText:"Osmesi, torta, dekoracija i ljudi koji čine slavlje nezaboravnim — uhvaćeni u pravom trenutku.",
      graduations:"Mature",graduationsText:"Elegantni portreti, društvo i atmosfera večeri koja označava kraj jednog i početak novog poglavlja.",
      newborns:"Rođenja beba",newbornsText:"Prvi dani, mali detalji i veliki osećaji — uspomene na početak jedne posebne porodične priče.",
      familyEvents:"Porodične proslave",familyEventsText:"Slave, godišnjice i okupljanja — fotografije koje čuvaju bliskost i zajedničke trenutke.",requestQuote:"Zatraži ponudu",
      aboutEyebrow:"Naš potpis",aboutTitle:"Prisutni u trenutku.<br><em>Posvećeni uspomeni.</em>",aboutText:"Najlepši trenuci često se dogode spontano. Zato posmatramo, osećamo ritam događaja i beležimo ono što se ne može ponoviti — iskren pogled, zagrljaj, suzu radosnicu i smeh.",
      feature1:"Prirodan i nenametljiv pristup",feature2:"Osećaj za atmosferu i detalje",feature3:"Dogovor prilagođen vašim željama",feature4:"Pažljivo obrađene fotografije",talkCta:"Hajde da razgovaramo",
      galleryEyebrow:"Izdvojeni trenuci",galleryTitle:"Priče ispričane<br><em>kroz fotografije.</em>",galleryIntro:"Svaki događaj ima svoj ritam, svetlo i emociju. Ovo je mali uvid u atmosferu koju želimo da sačuvamo.",
      galleryLove:"01 / LJUBAV",galleryFamily:"02 / PORODICA",galleryJoy:"03 / RADOST",galleryTogether:"04 / DRUŽENJE",galleryCloseness:"05 / BLISKOST",graduationParty:"Mature i proslave",familyMemories:"Porodične uspomene",
      galleryNote:"Napomena: fotografije su demonstracione. Zameni ih sopstvenim radovima pre javnog objavljivanja.",
      processEyebrow:"Jednostavno i bez stresa",processTitle:"Od prvog razgovora<br><em>do vaših uspomena.</em>",step1Title:"Javite nam se",step1Text:"Recite nam datum, lokaciju i kakav događaj planirate.",step2Title:"Dogovaramo detalje",step2Text:"Usklađujemo želje, trajanje fotografisanja i ponudu.",step3Title:"Uživajte u danu",step3Text:"Mi beležimo trenutke dok vi stvarate uspomene.",step4Title:"Čuvajte priču",step4Text:"Dobijate pažljivo obrađene fotografije za ceo život.",
      ctaEyebrow:"Vaš datum je važan",ctaTitle:"Imate razlog za slavlje?<br><em>Mi ćemo sačuvati trenutke.</em>",checkAvailability:"Proveri dostupnost",
      contactEyebrow:"Kontakt i rezervacije",contactTitle:"Hajde da sačuvamo<br><em>vašu priču.</em>",contactIntro:"Pošaljite nam nekoliko detalja i javićemo vam se kako bismo dogovorili sve što je potrebno.",
      phoneLabel:"TELEFON",emailLabel:"E-MAIL",locationLabel:"LOKACIJA",locationFull:"Beograd i okolina · po dogovoru",formTitle:"Pošaljite upit",requiredNote:"Polja označena * su obavezna.",
      nameLabel:"Ime i prezime *",namePlaceholder:"Vaše ime",formPhone:"Telefon *",phonePlaceholder:"+381 ...",eventLabel:"Vrsta događaja *",selectEvent:"Izaberite događaj",dateLabel:"Datum događaja",eventLocation:"Lokacija događaja",locationPlaceholder:"Grad, restoran ili sala",messageLabel:"Recite nam nešto više",messagePlaceholder:"Trajanje, želje, posebni detalji...",submitButton:"Pripremi upit",
      formNote:"Klikom na dugme otvoriće se vaša e-mail aplikacija sa pripremljenim upitom. Za automatsko slanje potrebno je povezati formu sa servisom za e-mail.",
      footerTagline:"Vaši najlepši trenuci. Zauvek sačuvani.",rights:"Sva prava zadržana.",backTop:"Nazad na vrh ↑",other:"Drugo",
      heroImageAlt:"Mladenci na romantičnom venčanju",cameraAlt:"Fotoaparat i fotografska oprema",weddingDetailAlt:"Detalj sa venčanja",galleryWeddingAlt:"Romantični trenutak sa venčanja",galleryBaptismAlt:"Elegantna svečana proslava",galleryBirthdayAlt:"Šarena rođendanska proslava",galleryPartyAlt:"Prijatelji na proslavi",galleryFamilyMomentAlt:"Porodični trenutak",
      mailSubject:"Upit za fotografisanje",mailEvent:"Vrsta događaja",mailDate:"Datum",mailLocation:"Lokacija",mailMessage:"Poruka",noDate:"Nije naveden",noLocation:"Nije navedena",noMessage:"Nema dodatne poruke",
      emailNotSet:"Pre objavljivanja promeni CONTACT_EMAIL u script.js na svoju stvarnu e-mail adresu.",mailReady:"Pripremljen je upit. Ako se e-mail aplikacija nije otvorila, proveri podešavanja uređaja.",eventNames:{wedding:"Venčanje",baptism:"Krštenje",birthday:"Rođendan",graduation:"Matura",newborn:"Rođenje bebe",family:"Porodična proslava",other:"Drugo"}
    },
    en: {
      topline:"Professional photography for life's special moments",locationShort:"Belgrade & surroundings",bookingOpen:"Bookings open",
      navHome:"Home",navServices:"Services",navGallery:"Gallery",navAbout:"About",navContact:"Contact",bookNow:"Book a session",
      darkMode:"Dark mode",lightMode:"Light mode",heroEyebrow:"Photography that preserves emotion",heroTitle:"Moments pass.<br><em>Memories stay.</em>",
      heroText:"From the most important “I do” to family gatherings, we capture genuine emotions, little details and stories you'll revisit for a lifetime.",
      heroCta:"Reserve your date",viewGallery:"Explore the gallery",proofTitle:"Your story, through our lens",proofSub:"Every detail matters",imageTagTitle:"Stories worth keeping",imageTagSub:"Photography with soul",heroBottom:"EVERY MOMENT MATTERS",
      introEyebrow:"Welcome to FotoNetworkSrb",introTitle:"More than photographs.<br><em>Your life story.</em>",introText:"We believe the best photographs do more than look beautiful — they bring you back to how a moment felt. Our approach is thoughtful, unobtrusive and focused on what matters: people, emotions and details.",introLink:"Discover our approach",
      servicesEyebrow:"Our services",servicesTitle:"For every day you<br><em>want to remember.</em>",servicesIntro:"We tailor our work to your celebration and create a gallery that tells the whole story.",
      weddings:"Weddings",weddingsText:"From getting ready and the ceremony to the first dance and final song, every meaningful detail stays with you.",
      baptisms:"Baptisms",baptismsText:"Tender, elegant and candid photographs of a family day that holds a special place in your heart.",
      birthdays:"Birthdays",birthdaysText:"Smiles, cake, decorations and the people who make the celebration unforgettable, captured at just the right moment.",
      graduations:"Graduations",graduationsText:"Elegant portraits, friends and the atmosphere of a night marking the end of one chapter and the start of another.",
      newborns:"Newborn arrivals",newbornsText:"First days, tiny details and big feelings — memories of the beginning of a special family story.",
      familyEvents:"Family celebrations",familyEventsText:"Family gatherings, anniversaries and celebrations — photographs that preserve closeness and shared moments.",requestQuote:"Request a quote",
      aboutEyebrow:"Our signature",aboutTitle:"Present in the moment.<br><em>Dedicated to the memory.</em>",aboutText:"The most beautiful moments often happen spontaneously. We observe the rhythm of your event and capture what cannot be repeated — a genuine look, an embrace, a happy tear and laughter.",
      feature1:"Natural, unobtrusive approach",feature2:"An eye for atmosphere and detail",feature3:"A plan tailored to your wishes",feature4:"Carefully edited photographs",talkCta:"Let's talk",
      galleryEyebrow:"Selected moments",galleryTitle:"Stories told<br><em>through photographs.</em>",galleryIntro:"Every event has its own rhythm, light and emotion. Here's a glimpse of the atmosphere we love to preserve.",
      galleryLove:"01 / LOVE",galleryFamily:"02 / FAMILY",galleryJoy:"03 / JOY",galleryTogether:"04 / TOGETHER",galleryCloseness:"05 / CONNECTION",graduationParty:"Graduations & parties",familyMemories:"Family memories",
      galleryNote:"Note: these are sample photographs. Replace them with your own work before publishing the website.",
      processEyebrow:"Simple and stress-free",processTitle:"From the first conversation<br><em>to memories that last.</em>",step1Title:"Get in touch",step1Text:"Tell us the date, location and type of event you're planning.",step2Title:"Plan the details",step2Text:"We'll align your wishes, coverage time and quote.",step3Title:"Enjoy your day",step3Text:"We capture the moments while you make the memories.",step4Title:"Keep the story",step4Text:"Receive carefully edited photographs to treasure for years.",
      ctaEyebrow:"Your date matters",ctaTitle:"Planning a celebration?<br><em>We'll preserve the moments.</em>",checkAvailability:"Check availability",
      contactEyebrow:"Contact & bookings",contactTitle:"Let's preserve<br><em>your story.</em>",contactIntro:"Share a few details and we'll get back to you to discuss everything you need.",
      phoneLabel:"PHONE",emailLabel:"EMAIL",locationLabel:"LOCATION",locationFull:"Belgrade & surroundings · by arrangement",formTitle:"Send an enquiry",requiredNote:"Fields marked * are required.",
      nameLabel:"Full name *",namePlaceholder:"Your name",formPhone:"Phone *",phonePlaceholder:"+381 ...",eventLabel:"Event type *",selectEvent:"Choose an event",dateLabel:"Event date",eventLocation:"Event location",locationPlaceholder:"City, venue or restaurant",messageLabel:"Tell us more",messagePlaceholder:"Duration, wishes, special details...",submitButton:"Prepare enquiry",
      formNote:"Clicking the button opens your email app with a prepared enquiry. To send messages automatically, connect the form to an email service.",
      footerTagline:"Your most beautiful moments. Preserved forever.",rights:"All rights reserved.",backTop:"Back to top ↑",other:"Other",
      heroImageAlt:"A couple at a romantic wedding",cameraAlt:"Camera and photography equipment",weddingDetailAlt:"A wedding detail",galleryWeddingAlt:"A romantic wedding moment",galleryBaptismAlt:"An elegant celebration",galleryBirthdayAlt:"A colourful birthday celebration",galleryPartyAlt:"Friends celebrating",galleryFamilyMomentAlt:"A family moment",
      mailSubject:"Photography enquiry",mailEvent:"Event type",mailDate:"Date",mailLocation:"Location",mailMessage:"Message",noDate:"Not provided",noLocation:"Not provided",noMessage:"No additional message",
      emailNotSet:"Before publishing, change CONTACT_EMAIL in script.js to your real email address.",mailReady:"Your enquiry is ready. If your email app did not open, check your device settings.",eventNames:{wedding:"Wedding",baptism:"Baptism",birthday:"Birthday",graduation:"Graduation",newborn:"Newborn arrival",family:"Family celebration",other:"Other"}
    }
  };

  const root = document.documentElement;
  let currentLang = 'sr';
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('navLinks');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      document.body.classList.toggle('menu-open', open);
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open'); toggle.setAttribute('aria-expanded','false'); document.body.classList.remove('menu-open');
    }));
  }

  function applyLanguage(lang) {
    currentLang = translations[lang] ? lang : 'sr';
    const dict = translations[currentLang];
    root.lang = currentLang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.dataset.i18nHtml;
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
      const key = el.dataset.i18nAlt;
      if (dict[key] !== undefined) el.alt = dict[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      if (dict[key] !== undefined) el.placeholder = dict[key];
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
      const active = btn.dataset.lang === currentLang;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', String(active));
    });
    const themeLabel = document.querySelector('.theme-label');
    if (themeLabel) themeLabel.textContent = root.dataset.theme === 'dark' ? dict.lightMode : dict.darkMode;
    const themeIcon = document.querySelector('.theme-icon');
    if (themeIcon) themeIcon.textContent = root.dataset.theme === 'dark' ? '☀' : '☾';
    document.title = currentLang === 'sr' ? 'FotoNetworkSrb | Vaši najlepši trenuci' : 'FotoNetworkSrb | Your most beautiful moments';
    document.querySelector('meta[name="description"]')?.setAttribute('content', currentLang === 'sr'
      ? 'FotoNetworkSrb — profesionalno fotografisanje venčanja, krštenja, rođendana, matura i porodičnih proslava.'
      : 'FotoNetworkSrb — professional wedding, baptism, birthday, graduation and family event photography.');
  }
  document.querySelectorAll('.lang-btn').forEach(btn => btn.addEventListener('click', () => applyLanguage(btn.dataset.lang)));

  const themeToggle = document.getElementById('themeToggle');
  function applyTheme(theme) {
    root.dataset.theme = theme;
    const dict = translations[currentLang];
    const label = document.querySelector('.theme-label');
    const icon = document.querySelector('.theme-icon');
    if (label) label.textContent = theme === 'dark' ? dict.lightMode : dict.darkMode;
    if (icon) icon.textContent = theme === 'dark' ? '☀' : '☾';
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#101522' : '#2449a8');
  }
  if (themeToggle) themeToggle.addEventListener('click', () => applyTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));

  // EDIT THESE DETAILS BEFORE PUBLISHING.
  const CONTACT_EMAIL = 'fotonetworksrb@gmail.com';
  const CONTACT_PHONE_DISPLAY = '064 978 6665';
  const CONTACT_PHONE_LINK = '+381649786665';
  const INSTAGRAM_URL = '';
  const FACEBOOK_URL = '';

  const emailLink = document.getElementById('emailLink');
  const phoneLink = document.getElementById('phoneLink');
  const instagramLink = document.getElementById('instagramLink');
  const facebookLink = document.getElementById('facebookLink');
  if (emailLink) { emailLink.textContent = CONTACT_EMAIL; emailLink.href = 'mailto:' + CONTACT_EMAIL; }
  if (phoneLink) { phoneLink.textContent = CONTACT_PHONE_DISPLAY; phoneLink.href = 'tel:' + CONTACT_PHONE_LINK; }
  [[instagramLink, INSTAGRAM_URL], [facebookLink, FACEBOOK_URL]].forEach(([el, url]) => {
    if (el && url) { el.href = url; el.target = '_blank'; el.rel = 'noopener noreferrer'; }
    else if (el) el.addEventListener('click', e => { e.preventDefault(); alert(currentLang === 'sr' ? 'Dodaj svoj profil u script.js pre objavljivanja sajta.' : 'Add your profile URL in script.js before publishing.'); });
  });
  document.getElementById('year').textContent = new Date().getFullYear();

  const form = document.getElementById('contactForm');
  if (form) form.addEventListener('submit', event => {
    event.preventDefault();
    const status = document.getElementById('formStatus');
    const dict = translations[currentLang];
    if (!CONTACT_EMAIL) { status.textContent = dict.emailNotSet; return; }
    const data = new FormData(form);
    const eventName = dict.eventNames[data.get('event')] || data.get('event') || '';
    const subject = encodeURIComponent(dict.mailSubject + ' — ' + eventName);
    const body = encodeURIComponent(
      (currentLang === 'sr' ? 'Ime i prezime: ' : 'Full name: ') + data.get('name') + '\n' +
      (currentLang === 'sr' ? 'Telefon: ' : 'Phone: ') + data.get('phone') + '\n' +
      dict.mailEvent + ': ' + eventName + '\n' +
      dict.mailDate + ': ' + (data.get('date') || dict.noDate) + '\n' +
      dict.mailLocation + ': ' + (data.get('location') || dict.noLocation) + '\n\n' +
      dict.mailMessage + ':\n' + (data.get('message') || dict.noMessage)
    );
    window.location.href = 'mailto:' + CONTACT_EMAIL + '?subject=' + subject + '&body=' + body;
    status.textContent = dict.mailReady;
  });

  applyTheme('light');
  applyLanguage('sr');
})();
