/* ==========================================================================
   شهربان · Shahrban — digital card (FA / EN / AR)
   اطلاعات تماس را در contactInfo و متن‌ها را در I18N ویرایش کنید.
   ========================================================================== */
const contactInfo = {
  phoneDisplay: "+964 773 777 7039",
  phone: "+9647737777039",
  whatsapp: "9647737777039",
  instagram: "https://instagram.com/shhrbn694",
  tiktok: "https://www.tiktok.com/@user86712321300015",   // ← اگر آیدی تیک‌تاک اشتباه بود اینجا اصلاح کنید
};

const I18N = {
  fa: {
    dir: "rtl", title: "شهربان | مرکز تأمین و توزیع میوه و سبزیجات",
    desc: "کارت ویزیت دیجیتال شهربان — مرکز تأمین و توزیع میوه و سبزیجات تازه؛ تماس، خدمات و ذخیره مخاطب در یک صفحه.",
    tagline: "مرکز تأمین و توزیع میوه و سبزیجات", headline: "تازه از باغ، تا سفره شما",
    subA: "میوه و سبزیجات تازه", subB: "فروش عمده و توزیع",
    cname: "واحد فروش شهربان", crole: "سفارش و مشاوره خرید",
    f1: "فروش عمده و خرده", f2: "کیفیت درجه‌یک و تازه", f3: "ارسال سریع با زنجیره سرد", f4: "بسته‌بندی بهداشتی",
    qOrder: "سفارش در واتساپ", qShare: "اشتراک‌گذاری", shareOk: "لینک کپی شد", waMsg: "سلام، برای ثبت سفارش میوه و سبزیجات پیام می‌دهم.", aTiktok: "تیک‌تاک", save: "ذخیره مخاطب", saveDone: "مخاطب ذخیره شد",
    toast: "فایل مخاطب دانلود شد",
    note1: "ثبت سفارش و ارسال در همان روز", note2: "تضمین کیفیت و تازگی",
    ftag: "از باغ تا سفره، همیشه تازه", fsub: "تازه · به‌موقع · قابل‌اعتماد", qr: "اسکن کنید",
    aContact: "اطلاعات تماس", aCall: "تماس تلفنی", aInsta: "اینستاگرام", aWa: "واتساپ", aServices: "خدمات", aLinks: "راه‌های ارتباطی",
    org: "شهربان", fn: "واحد فروش شهربان",
  },
  en: {
    dir: "ltr", title: "Shahrban | Fresh Fruit & Vegetable Wholesale and Distribution Hub",
    desc: "Shahrban digital business card — a fresh fruit and vegetable supply and distribution hub. Contact, services and save-contact in one page.",
    tagline: "Fruit & Vegetable Supply and Distribution Hub", headline: "Farm-fresh, to your table",
    subA: "FRESH FRUIT & VEGETABLES", subB: "WHOLESALE & DISTRIBUTION",
    cname: "Shahrban Sales", crole: "Orders & advice",
    f1: "Wholesale & Retail", f2: "Premium Quality", f3: "Cold-Chain Delivery", f4: "Hygienic Packaging",
    qOrder: "WhatsApp Order", qShare: "Share", shareOk: "Link copied", waMsg: "Hello, I would like to place a fruit and vegetable order.", aTiktok: "TikTok", save: "Save Contact", saveDone: "Contact Saved",
    toast: "Contact file downloaded",
    note1: "Same-day order & dispatch", note2: "Freshness guaranteed",
    ftag: "Fresh from farm to table", fsub: "FRESH · ON TIME · TRUSTED", qr: "SCAN ME",
    aContact: "Contact details", aCall: "Call", aInsta: "Instagram", aWa: "WhatsApp", aServices: "Services", aLinks: "Quick links",
    org: "Shahrban", fn: "Shahrban Sales",
  },
  ar: {
    dir: "rtl", title: "شهربان | مركز توريد وتوزيع الفواكه والخضروات",
    desc: "بطاقة شهربان الرقمية — مركز لتوريد وتوزيع الفواكه والخضروات الطازجة؛ التواصل والخدمات وحفظ جهة الاتصال في صفحة واحدة.",
    tagline: "مركز توريد وتوزيع الفواكه والخضروات", headline: "طازج من المزرعة إلى مائدتكم",
    subA: "فواكه وخضروات طازجة", subB: "بيع بالجملة وتوزيع",
    cname: "قسم مبيعات شهربان", crole: "الطلبات والاستشارة",
    f1: "بيع بالجملة والمفرد", f2: "جودة ممتازة وطازجة", f3: "توصيل سريع بسلسلة التبريد", f4: "تغليف صحي",
    qOrder: "اطلب عبر واتساب", qShare: "مشاركة", shareOk: "تم نسخ الرابط", waMsg: "مرحبًا، أودّ تقديم طلب فواكه وخضروات.", aTiktok: "تيك توك", save: "حفظ جهة الاتصال", saveDone: "تم حفظ جهة الاتصال",
    toast: "تم تنزيل ملف جهة الاتصال",
    note1: "تسجيل الطلب والشحن في اليوم نفسه", note2: "ضمان الجودة والطزاجة",
    ftag: "طازج من المزرعة إلى المائدة", fsub: "طازج · في الموعد · موثوق", qr: "امسح للمزيد",
    aContact: "معلومات التواصل", aCall: "اتصال هاتفي", aInsta: "إنستغرام", aWa: "واتساب", aServices: "الخدمات", aLinks: "روابط التواصل",
    org: "شهربان", fn: "قسم مبيعات شهربان",
  },
};

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
let lang = "fa";
const t = k => I18N[lang][k];

/* ---------- vCard / toast / links ---------- */
function buildVCard(){
  const d = I18N[lang];
  return ["BEGIN:VCARD","VERSION:3.0",`N:${d.fn};;;;`,`FN:${d.fn}`,`ORG:${d.org}`,`TITLE:${d.tagline}`,
    `TEL;TYPE=CELL:${contactInfo.phone}`,`URL:${contactInfo.instagram}`,`URL:${contactInfo.tiktok}`,"END:VCARD"].join("\r\n");
}
function downloadVCard(){
  const url = URL.createObjectURL(new Blob([buildVCard()], {type:"text/vcard;charset=utf-8"}));
  const a = document.createElement("a"); a.href = url; a.download = "Shahrban.vcf";
  document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(url), 4000);
}
function showToast(msg){
  const el = $("#toast"); el.textContent = msg; el.classList.add("is-visible");
  clearTimeout(showToast._t); showToast._t = setTimeout(() => el.classList.remove("is-visible"), 2400);
}
$("#link-instagram").href = contactInfo.instagram;
$("#link-tiktok").href = contactInfo.tiktok;
$("#link-whatsapp").href = `https://wa.me/${contactInfo.whatsapp}`;
const setOrderLink = () => { $("#link-order").href = `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(t("waMsg"))}`; };

/* Share this card (native sheet on phones, copy-link fallback) */
$("#btn-share").addEventListener("click", async () => {
  const url = location.href.split("#")[0];
  try { if (navigator.share){ await navigator.share({ title: document.title, text: t("tagline"), url }); return; } } catch (e) { if (e && e.name === "AbortError") return; }
  try { await navigator.clipboard.writeText(url); showToast(t("shareOk")); } catch (e) { showToast(url); }
});
$("#link-phone").href = `tel:${contactInfo.phone}`;
$("#txt-phone").textContent = contactInfo.phoneDisplay;

const saveBtn = $("#btn-save");
let saved = false;
function setSaved(on){ saved = on; saveBtn.classList.toggle("is-done", on); $("#save-label").textContent = t(on ? "saveDone" : "save"); }
saveBtn.addEventListener("click", () => {
  downloadVCard(); showToast(t("toast")); if (navigator.vibrate) navigator.vibrate(12);
  setSaved(true); clearTimeout(setSaved._t); setSaved._t = setTimeout(() => setSaved(false), 2600);
});

/* ---------- Typewriter (re-runs on every language change) ---------- */
let twToken = 0;
async function typeLines(first){
  const token = ++twToken, lines = $$("[data-type]");
  const text = el => t(el.dataset.i18n);
  if (reduceMotion){ lines.forEach(el => el.textContent = text(el)); return; }
  const parts = lines.map(el => {
    const full = text(el), mk = c => { const s = document.createElement("span"); s.className = c; s.setAttribute("aria-hidden","true"); return s; };
    const sr = document.createElement("span"); sr.className = "sr-only"; sr.textContent = full;
    const done = mk("tw-done"), caret = mk("tw-caret"), rest = mk("tw-rest"); rest.textContent = full;
    el.textContent = ""; el.classList.remove("is-typing"); el.append(sr, done, caret, rest);
    return { el, full, chars: Array.from(full), done, rest };
  });
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  await sleep(first ? 1150 : 350);
  for (const [n, p] of parts.entries()){
    if (token !== twToken) return;
    p.el.classList.add("is-typing");
    for (let i = 1; i <= p.chars.length; i++){
      if (token !== twToken) return;
      p.done.textContent = p.chars.slice(0, i).join(""); p.rest.textContent = p.chars.slice(i).join("");
      const c = p.chars[i - 1];
      await sleep(c === " " || c === "\u200c" ? 55 : 28 + Math.random() * 28);
    }
    if (n < parts.length - 1){ p.el.classList.remove("is-typing"); await sleep(200); }
  }
  await sleep(1200);
  if (token !== twToken) return;
  parts.forEach(p => { p.el.classList.remove("is-typing"); p.el.textContent = p.full; });
}

/* ---------- Language ---------- */
const pill = $(".lang__pill"), langBtns = $$(".lang button");
function applyLang(l, first){
  if (!I18N[l]) l = "fa";
  lang = l; const d = I18N[l], root = document.documentElement;
  root.lang = l; root.dir = d.dir; document.title = d.title; $("#meta-desc").content = d.desc;
  $$("[data-i18n]:not([data-type])").forEach(el => {
    el.textContent = d[el.dataset.i18n];
    if (!first && !reduceMotion){ el.classList.remove("swap"); void el.offsetWidth; el.classList.add("swap"); }
  });
  $$("[data-i18n-aria]").forEach(el => el.setAttribute("aria-label", d[el.dataset.i18nAria]));
  setSaved(saved); setOrderLink();
  langBtns.forEach((b, i) => { const on = b.dataset.lang === l; b.classList.toggle("is-active", on); b.setAttribute("aria-pressed", on);
    if (on) pill.style.setProperty("--i", i); });
  try { localStorage.setItem("shahrban-lang", l); } catch (e) {}
  typeLines(first);
}
langBtns.forEach(b => b.addEventListener("click", () => { if (b.dataset.lang !== lang){ applyLang(b.dataset.lang, false); if (navigator.vibrate) navigator.vibrate(8); } }));
(function init(){
  let l = new URLSearchParams(location.search).get("lang");
  if (!I18N[l]) { try { l = localStorage.getItem("shahrban-lang"); } catch (e) {} }
  if (!I18N[l]) { const n = (navigator.language || "fa").slice(0, 2).toLowerCase(); l = I18N[n] ? n : "fa"; }
  applyLang(l, true);
})();

/* ==========================================================================
   Motion (all skipped for reduced-motion)
   ========================================================================== */
if (!reduceMotion){
  $$(".save-btn, .social-btn, .ring--sm, .lang button").forEach(el => {
    el.classList.add("ripple-host");
    el.addEventListener("pointerdown", e => {
      const r = el.getBoundingClientRect(), dot = document.createElement("span");
      dot.className = "ripple"; dot.style.setProperty("--s", Math.max(r.width, r.height) * 1.6 + "px");
      dot.style.setProperty("--x", e.clientX - r.left + "px"); dot.style.setProperty("--y", e.clientY - r.top + "px");
      el.appendChild(dot); dot.addEventListener("animationend", () => dot.remove());
    });
  });
}

/* Hero photo parallax: pointer on desktop, tilt on phones */
(function parallax(){
  if (reduceMotion) return;
  const img = $(".hero__media img"); if (!img) return;
  let tx = 0, ty = 0, cx = 0, cy = 0, raf = 0;
  const loop = () => { cx += (tx - cx) * .08; cy += (ty - cy) * .08;
    img.style.setProperty("--px", cx.toFixed(2) + "px"); img.style.setProperty("--py", cy.toFixed(2) + "px");
    raf = (Math.abs(tx - cx) > .05 || Math.abs(ty - cy) > .05) ? requestAnimationFrame(loop) : 0; };
  window.addEventListener("pointermove", e => { tx = -((e.clientX / innerWidth) - .5) * 14; ty = -((e.clientY / innerHeight) - .5) * 8; if (!raf) raf = requestAnimationFrame(loop); }, {passive:true});
  if (window.DeviceOrientationEvent && typeof DeviceOrientationEvent.requestPermission !== "function")
    window.addEventListener("deviceorientation", e => { if (e.gamma == null) return;
      tx = Math.max(-1, Math.min(1, e.gamma / 25)) * -7; ty = Math.max(-1, Math.min(1, (e.beta - 55) / 30)) * -4; if (!raf) raf = requestAnimationFrame(loop); }, {passive:true});
})();

/* Hero particles: golden sparkles + drifting leaves & citrus petals */
(function particles(){
  const cv = $("#dust"); if (!cv || reduceMotion) return;
  const ctx = cv.getContext("2d"); let W = 0, H = 0, parts = [], running = true, last = 0;
  const COLS = ["255,232,170","255,232,170","160,224,110","110,200,90","255,176,96"];
  function spawn(any){
    const leaf = Math.random() < .45;
    return { leaf, x: Math.random() * W, y: any ? Math.random() * H : H + 12,
      r: leaf ? 3.5 + Math.random() * 3.5 : .5 + Math.random() * 1.5,
      vy: leaf ? 8 + Math.random() * 10 : 5 + Math.random() * 12, vx: -2 - Math.random() * 5,
      ph: Math.random() * 6.28, sp: .6 + Math.random() * 1.2, rot: Math.random() * 6.28, vr: (Math.random() - .5) * 1.4,
      a: leaf ? .35 + Math.random() * .4 : .25 + Math.random() * .55, c: COLS[Math.floor(Math.random() * COLS.length)] };
  }
  function resize(){
    const dpr = Math.min(devicePixelRatio || 1, 2); W = cv.clientWidth; H = cv.clientHeight;
    cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    parts = Array.from({length: Math.round(Math.min(30, Math.max(14, W * H / 11000)))}, () => spawn(true));
  }
  function drawLeaf(p){
    ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot); const s = p.r;
    ctx.beginPath(); ctx.moveTo(0, -s * 1.6);
    ctx.bezierCurveTo(s * 1.3, -s * .6, s * 1.1, s * .9, 0, s * 1.6);
    ctx.bezierCurveTo(-s * 1.1, s * .9, -s * 1.3, -s * .6, 0, -s * 1.6);
    ctx.fillStyle = `rgba(${p.c},1)`; ctx.fill();
    ctx.strokeStyle = "rgba(255,255,255,.35)"; ctx.lineWidth = .6;
    ctx.beginPath(); ctx.moveTo(0, -s * 1.3); ctx.lineTo(0, s * 1.3); ctx.stroke(); ctx.restore();
  }
  function frame(tm){
    if (!running) return;
    const dt = Math.min(.05, (tm - last) / 1000 || .016); last = tm; ctx.clearRect(0, 0, W, H);
    for (const p of parts){
      p.y -= p.vy * dt; p.x += (p.vx + Math.sin(tm / 1000 * p.sp + p.ph) * 8) * dt; p.rot += p.vr * dt;
      if (p.y < -12 || p.x < -12){ Object.assign(p, spawn(false)); p.x = Math.random() * W; }
      const tw = .55 + .45 * Math.sin(tm / 700 * p.sp + p.ph), fade = Math.min(1, p.y / (H * .35), (H - p.y) / 30 + .2);
      ctx.globalAlpha = Math.max(0, p.a * (p.leaf ? 1 : tw) * fade);
      if (p.leaf) drawLeaf(p);
      else { const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 3.2);
        g.addColorStop(0, `rgba(${p.c},1)`); g.addColorStop(1, `rgba(${p.c},0)`); ctx.fillStyle = g;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r * 3.2, 0, 6.2832); ctx.fill(); }
    }
    requestAnimationFrame(frame);
  }
  new ResizeObserver(resize).observe(cv);
  document.addEventListener("visibilitychange", () => { running = !document.hidden; if (running){ last = performance.now(); requestAnimationFrame(frame); } });
  resize(); requestAnimationFrame(frame);
})();
