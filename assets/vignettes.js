/* Vignettes d'articles : la silhouette de chaque texte.
   Un point par section (texte avant le premier intertitre, puis chaque intertitre),
   d'autant plus gros que la section est longue. Les points sont reliés dans l'ordre
   de lecture. En ambre : les sections qui contiennent une citation ou un schéma.
   Un point de lecture parcourt le fil ; les sections lues s'allument.
   La structure est calculée à la construction du site (data-structure="mots:marques,…"),
   la seule part de hasard est la hauteur des points, tirée d'une graine propre à l'article. */
(function () {
  "use strict";
  var COUL = { puits: "#0c1416", trait: "#3a4d50", brume: "#93a5a2", verre: "#a9d18e", ambre: "#e3a948" };
  var reduit = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var items = [];

  function hachage(s) {
    var h = 2166136261;
    for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  }
  function alea(graine) {
    var x = graine || 1;
    return function () { x = (Math.imul(x, 1664525) + 1013904223) >>> 0; return x / 4294967296; };
  }

  // Regroupe les blocs en sections, au niveau de structure le plus haut présent :
  // intertitres (H) ; à défaut, paragraphes en gras et filets (T, R) ; à défaut, paragraphes.
  function sections(jetons) {
    var aH = jetons.some(function (j) { return j.t === "H"; });
    var aT = jetons.some(function (j) { return j.t === "T" || j.t === "R"; });
    var coupe = aH ? { H: 1, R: 1 } : aT ? { T: 1, R: 1 } : { P: 1 };
    var out = [], cur = { mots: 0, marques: 0 };
    function clore() { if (cur.mots > 0) out.push(cur); cur = { mots: 0, marques: 0 }; }
    jetons.forEach(function (j) {
      if (coupe[j.t]) { clore(); }
      if (j.t === "Q" || j.t === "C") cur.marques++;
      cur.mots += j.n;
    });
    clore();
    return out;
  }

  function preparer(cv) {
    var jetons = (cv.getAttribute("data-structure") || "").split(",").filter(Boolean).map(function (e) {
      return { t: e.charAt(0), n: parseInt(e.slice(1), 10) || 0 };
    });
    var parts = sections(jetons);
    if (!parts.length) return null;
    var r = alea(hachage(cv.getAttribute("data-graine") || cv.getAttribute("data-structure")));
    parts.forEach(function (p) { p.dy = r() - 0.5; });
    return { cv: cv, ctx: cv.getContext("2d"), parts: parts, on: true, decalage: r() * 3, pts: [] };
  }

  function mesurer(it) {
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var w = it.cv.clientWidth, h = it.cv.clientHeight;
    if (!w || !h) return;
    it.cv.width = Math.round(w * dpr); it.cv.height = Math.round(h * dpr);
    it.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    it.w = w; it.h = h;
    var n = it.parts.length;
    var mx = Math.max(16, h * 0.22);
    var pas = n > 1 ? (w - 2 * mx) / (n - 1) : 0;
    var rmax = Math.min(h * 0.2, n > 1 ? pas * 0.42 : h * 0.2);
    var rmin = Math.max(1.6, rmax * 0.22);
    var maxMots = Math.max.apply(null, it.parts.map(function (p) { return p.mots; }));
    it.pts = it.parts.map(function (p, i) {
      return {
        x: n > 1 ? mx + pas * i : w / 2,
        y: h / 2 + p.dy * (h - 2 * Math.max(rmax, 8) - 8),
        r: rmin + (rmax - rmin) * Math.sqrt(p.mots / maxMots),
        cite: p.marques > 0
      };
    });
  }

  function dessiner(it, t) {
    var c = it.ctx, pts = it.pts, n = pts.length;
    if (!n) return;
    c.clearRect(0, 0, it.w, it.h);
    c.fillStyle = COUL.puits; c.fillRect(0, 0, it.w, it.h);

    // Avancement de la lecture : s va de 0 à n-1, puis un temps de pause, puis on recommence.
    var s;
    if (t === null) { s = n - 1; }
    else {
      var duree = 2.4 + n * 0.45, pause = 1.8;
      var u = ((t + it.decalage) % (duree + pause)) / duree;
      s = Math.min(u, 1) * (n - 1);
    }

    // Le fil : en entier, discret ; la partie lue, plus claire.
    c.lineWidth = 1;
    c.strokeStyle = COUL.trait;
    c.beginPath(); c.moveTo(pts[0].x, pts[0].y);
    for (var i = 1; i < n; i++) c.lineTo(pts[i].x, pts[i].y);
    c.stroke();
    var k = Math.floor(s), f = s - k;
    var lx = pts[k].x, ly = pts[k].y;
    if (k < n - 1) { lx += (pts[k + 1].x - pts[k].x) * f; ly += (pts[k + 1].y - pts[k].y) * f; }
    if (n > 1) {
      c.strokeStyle = COUL.brume; c.globalAlpha = 0.7;
      c.beginPath(); c.moveTo(pts[0].x, pts[0].y);
      for (var j = 1; j <= k; j++) c.lineTo(pts[j].x, pts[j].y);
      c.lineTo(lx, ly); c.stroke(); c.globalAlpha = 1;
    }

    // Les sections : allumées une fois lues.
    pts.forEach(function (p, idx) {
      var lu = idx <= s + 0.001;
      var coul = p.cite ? COUL.ambre : COUL.verre;
      c.globalAlpha = lu ? 0.95 : 0.28;
      c.fillStyle = coul;
      c.beginPath(); c.arc(p.x, p.y, p.r, 0, Math.PI * 2); c.fill();
      if (p.cite) {
        c.globalAlpha = lu ? 0.55 : 0.18;
        c.strokeStyle = coul; c.lineWidth = 1;
        c.beginPath(); c.arc(p.x, p.y, p.r + 3.5, 0, Math.PI * 2); c.stroke();
      }
    });
    c.globalAlpha = 1;

    // Le point de lecture.
    if (t !== null && s < n - 1) {
      var g = c.createRadialGradient(lx, ly, 0, lx, ly, 10);
      g.addColorStop(0, "rgba(232,235,227,0.9)"); g.addColorStop(1, "rgba(232,235,227,0)");
      c.fillStyle = g; c.beginPath(); c.arc(lx, ly, 10, 0, Math.PI * 2); c.fill();
    }
  }

  function toutMesurer() { items.forEach(function (it) { mesurer(it); if (reduit) dessiner(it, null); }); }

  function demarrer() {
    Array.prototype.forEach.call(document.querySelectorAll("canvas.vignette[data-structure]"), function (cv) {
      var it = preparer(cv); if (it) items.push(it);
    });
    if (!items.length) return;
    toutMesurer();
    var attente;
    window.addEventListener("resize", function () { clearTimeout(attente); attente = setTimeout(toutMesurer, 120); });
    if (reduit) return;

    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entrees) {
        entrees.forEach(function (e) { e.target._vignette.on = e.isIntersecting; });
      }, { rootMargin: "80px" });
      items.forEach(function (it) { it.on = false; it.cv._vignette = it; io.observe(it.cv); });
    }
    var dernier = 0;
    function boucle(ts) {
      if (ts - dernier > 33) {
        dernier = ts;
        var t = ts / 1000;
        items.forEach(function (it) { if (it.on && it.w) dessiner(it, t); });
      }
      requestAnimationFrame(boucle);
    }
    requestAnimationFrame(boucle);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", demarrer);
  else demarrer();
})();
