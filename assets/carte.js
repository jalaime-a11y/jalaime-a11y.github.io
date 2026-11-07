/* Carte des thèmes de la page Articles.
   Les cinq thèmes sont des pôles disposés en cercle. Chaque article est un point placé
   autour de son thème principal, puis attiré vers son thème secondaire (trait pointillé).
   Un clic sur un thème (pôle ou bouton) filtre la liste ; un clic sur un point ouvre l'article.
   Le filtre est repris dans l'adresse (#theme=…) pour pouvoir être partagé. */
(function () {
  "use strict";
  var SVG = "http://www.w3.org/2000/svg";
  var donneesEl = document.getElementById("donnees-carte");
  var svg = document.getElementById("carte");
  if (!donneesEl || !svg) return;
  var D = JSON.parse(donneesEl.textContent);
  var cadre = document.getElementById("carte-cadre");
  var bulle = document.getElementById("infobulle");
  var etat = document.getElementById("filtre-etat");
  var boutons = Array.prototype.slice.call(document.querySelectorAll(".filtre"));
  var cartes = Array.prototype.slice.call(document.querySelectorAll(".carte[data-themes]"));
  var annees = Array.prototype.slice.call(document.querySelectorAll(".annee"));
  var reduit = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var parSlug = {};
  D.themes.forEach(function (th, i) { th.i = i; parSlug[th.slug] = th; });
  // Un article sans thème connu n'apparaît pas sur la carte (il reste dans la liste).
  D.articles = D.articles.filter(function (a) { return parSlug[a.theme]; });
  D.articles.forEach(function (a) { if (!parSlug[a.secondaire]) a.secondaire = null; });
  var choix = "";
  var visible = true;

  function el(nom, attrs, parent) {
    var e = document.createElementNS(SVG, nom);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  }
  function hachage(s) {
    var h = 2166136261;
    for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
    return (h >>> 0) / 4294967296;
  }

  // ---------- Construction ----------
  var gLiens = el("g", {}, svg), gPoints = el("g", {}, svg), gPoles = el("g", {}, svg);
  D.articles.forEach(function (a) {
    a.phase = hachage(a.url) * Math.PI * 2;
    a.liens = [];
    a.liens.push(el("line", { "class": "lien", stroke: parSlug[a.theme].couleur }, gLiens));
    if (a.secondaire) a.liens.push(el("line", { "class": "lien sec", stroke: parSlug[a.secondaire].couleur }, gLiens));
    var lienA = el("a", { href: a.url, "aria-label": a.titre + " (" + parSlug[a.theme].nom + ")" }, gPoints);
    a.noeud = lienA;
    a.halo = el("circle", { "class": "halo", r: 11 }, lienA);
    a.point = el("circle", { "class": "point", r: 5, fill: parSlug[a.theme].couleur }, lienA);
    function montrer() { info(a.titre, a); }
    lienA.addEventListener("mouseenter", montrer);
    lienA.addEventListener("focus", montrer);
    lienA.addEventListener("mouseleave", cacher);
    lienA.addEventListener("blur", cacher);
  });
  D.themes.forEach(function (th) {
    var g = el("g", { "class": "pole", role: "button", tabindex: "0", "aria-label": "Filtrer : " + th.nom }, gPoles);
    th.cible = el("circle", { r: 20, "class": "cible" }, g); // zone cliquable élargie
    th.cercle = el("circle", { r: 7, fill: th.couleur }, g);
    th.anneau = el("circle", { r: 13, "class": "anneau", stroke: th.couleur }, g);
    th.texte = el("text", { "class": "etiquette-pole" }, g);
    th.texte.textContent = th.nom;
    th.g = g;
    g.addEventListener("click", function () { filtrer(choix === th.slug ? "" : th.slug, true); });
    g.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); filtrer(choix === th.slug ? "" : th.slug, true); }
    });
    g.addEventListener("mouseenter", function () { info(th.nom + " — " + th.description, th); });
    g.addEventListener("mouseleave", cacher);
  });

  // ---------- Disposition ----------
  var W = 0, H = 0, etroit = false;
  function disposer() {
    W = cadre.clientWidth;
    etroit = W < 560;
    H = Math.round(Math.max(260, Math.min(380, W * (etroit ? 0.82 : 0.36))));
    svg.setAttribute("viewBox", "0 0 " + W + " " + H);
    svg.setAttribute("height", H);
    // Un pentagone pointe vers le haut : sa hauteur vaut 1,81 fois son rayon, et son centre
    // n'est pas au milieu. On le cale entre une marge haute (étiquette du pôle du haut)
    // et une marge basse.
    var haut = etroit ? 34 : 52, bas = etroit ? 30 : 44;
    var ry = (H - haut - bas) / 1.809, cy = haut + ry;
    var cx = W / 2, rx = W * (etroit ? 0.34 : 0.3);
    var n = D.themes.length;
    D.themes.forEach(function (th, i) {
      var ang = -Math.PI / 2 + (i * 2 * Math.PI) / n;
      th.x = cx + rx * Math.cos(ang);
      th.y = cy + ry * Math.sin(ang);
      th.cercle.setAttribute("cx", th.x); th.cercle.setAttribute("cy", th.y);
      th.cible.setAttribute("cx", th.x); th.cible.setAttribute("cy", th.y);
      th.anneau.setAttribute("cx", th.x); th.anneau.setAttribute("cy", th.y);
      var t = th.texte, dx = th.x - cx;
      var ancre = Math.abs(dx) < W * 0.05 ? "middle" : dx < 0 ? "end" : "start";
      t.setAttribute("text-anchor", ancre);
      t.setAttribute("x", th.x + (ancre === "start" ? 18 : ancre === "end" ? -18 : 0));
      t.setAttribute("y", th.y + (ancre === "middle" ? -20 : 5));
      t.style.display = etroit ? "none" : "";
    });
    // Articles : en arc autour de leur pôle, du côté intérieur de la carte (les étiquettes
    // restent libres à l'extérieur), puis légèrement attirés vers leur thème secondaire.
    var groupes = {};
    D.articles.forEach(function (a) { (groupes[a.theme] = groupes[a.theme] || []).push(a); });
    Object.keys(groupes).forEach(function (slug) {
      var g = groupes[slug], th = parSlug[slug], n = g.length;
      var rayon = (etroit ? 30 : 46) + n * (etroit ? 3 : 4);
      var interieur = Math.atan2(cy - th.y, cx - th.x);
      var ouverture = Math.min(Math.PI * 1.1, 0.5 * n);
      g.forEach(function (a, k) {
        var ang = interieur + (n > 1 ? (k / (n - 1) - 0.5) * ouverture : 0);
        var x = th.x + rayon * Math.cos(ang), y = th.y + rayon * Math.sin(ang);
        if (a.secondaire) {
          var s = parSlug[a.secondaire];
          x += (s.x - x) * 0.22; y += (s.y - y) * 0.22;
        }
        a.x = Math.max(10, Math.min(W - 10, x));
        a.y = Math.max(10, Math.min(H - 10, y));
      });
    });
    dessiner(0);
  }

  function dessiner(t) {
    var amp = reduit ? 0 : (etroit ? 2 : 3);
    D.articles.forEach(function (a) {
      var x = a.x + Math.sin(t * 0.6 + a.phase) * amp;
      var y = a.y + Math.cos(t * 0.5 + a.phase * 1.3) * amp;
      a.cx = x; a.cy = y;
      a.point.setAttribute("cx", x); a.point.setAttribute("cy", y);
      a.halo.setAttribute("cx", x); a.halo.setAttribute("cy", y);
      var cibles = [parSlug[a.theme]].concat(a.secondaire ? [parSlug[a.secondaire]] : []);
      a.liens.forEach(function (l, i) {
        l.setAttribute("x1", x); l.setAttribute("y1", y);
        l.setAttribute("x2", cibles[i].x); l.setAttribute("y2", cibles[i].y);
      });
    });
  }

  // ---------- Infobulle ----------
  function info(texte, o) {
    bulle.textContent = texte;
    bulle.hidden = false;
    var x = o.cx !== undefined ? o.cx : o.x, y = o.cy !== undefined ? o.cy : o.y;
    var bw = bulle.offsetWidth;
    bulle.style.left = Math.max(4, Math.min(W - bw - 4, x - bw / 2)) + "px";
    bulle.style.top = (y > H * 0.5 ? y - bulle.offsetHeight - 16 : y + 16) + "px";
  }
  function cacher() { bulle.hidden = true; }

  // ---------- Filtre ----------
  function filtrer(slug, majAdresse) {
    choix = parSlug[slug] ? slug : "";
    var th = parSlug[choix];
    boutons.forEach(function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-theme") === choix ? "true" : "false"); });
    var n = 0;
    cartes.forEach(function (c) {
      var ok = !choix || (" " + c.getAttribute("data-themes") + " ").indexOf(" " + choix + " ") >= 0;
      c.hidden = !ok; if (ok) n++;
    });
    annees.forEach(function (s) { s.hidden = !s.querySelector(".carte:not([hidden])"); });
    D.articles.forEach(function (a) {
      var ok = !choix || a.theme === choix || a.secondaire === choix;
      a.noeud.classList.toggle("eteint", !ok);
      a.liens.forEach(function (l, i) {
        var cible = i === 0 ? a.theme : a.secondaire;
        l.classList.toggle("eteint", !!choix && cible !== choix);
      });
    });
    D.themes.forEach(function (t) {
      t.g.classList.toggle("eteint", !!choix && t.slug !== choix);
      t.g.setAttribute("aria-pressed", t.slug === choix ? "true" : "false");
    });
    etat.textContent = th ? n + " article" + (n > 1 ? "s" : "") + " · " + th.nom + " : " + th.description + "." : "";
    if (majAdresse && window.history && history.replaceState) {
      history.replaceState(null, "", choix ? "#theme=" + choix : location.pathname + location.search);
    }
  }
  boutons.forEach(function (b) {
    b.addEventListener("click", function () { filtrer(b.getAttribute("data-theme"), true); });
  });
  function lireAdresse() {
    var m = /theme=([a-z]+)/.exec(location.hash);
    filtrer(m ? m[1] : "", false);
  }
  window.addEventListener("hashchange", lireAdresse);

  // ---------- Démarrage ----------
  disposer();
  lireAdresse();
  var attente;
  window.addEventListener("resize", function () { clearTimeout(attente); attente = setTimeout(disposer, 120); });
  if (reduit) return;
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (e) { visible = e[0].isIntersecting; }).observe(svg);
  }
  var dernier = 0;
  function boucle(ts) {
    if (visible && ts - dernier > 33) { dernier = ts; dessiner(ts / 1000); }
    requestAnimationFrame(boucle);
  }
  requestAnimationFrame(boucle);
})();
