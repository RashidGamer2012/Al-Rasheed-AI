/* ═══════════════════════════════════════════════════════════════
   AL-RASHEED AI — Showcase Site · Motion Engine
   vanilla JS · no dependencies
   ═══════════════════════════════════════════════════════════════ */
(() => {
  "use strict";

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isCoarse = window.matchMedia("(hover: none), (pointer: coarse)").matches;
  const $  = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];

  /* ────────────────────────────────────────────────────────────
     1 · PRELOADER
  ──────────────────────────────────────────────────────────── */
  const preloader = $("#preloader");
  const killPreloader = () => {
    if (!preloader || preloader.classList.contains("done")) return;
    preloader.classList.add("done");
    document.body.classList.add("loaded");
    setTimeout(() => preloader.remove(), 1600);
  };
  window.addEventListener("load", () => setTimeout(killPreloader, 900));
  setTimeout(killPreloader, 3200); // safety net

  /* ────────────────────────────────────────────────────────────
     2 · CUSTOM CURSOR
  ──────────────────────────────────────────────────────────── */
  const cursor = $("#cursor");
  if (cursor && !isCoarse && !prefersReduced) {
    let cx = -100, cy = -100, tx = -100, ty = -100;
    window.addEventListener("pointermove", (e) => {
      tx = e.clientX; ty = e.clientY;
      cursor.classList.add("on");
    }, { passive: true });
    (function loop() {
      cx += (tx - cx) * 0.16;
      cy += (ty - cy) * 0.16;
      cursor.style.transform = `translate(${cx}px,${cy}px) translate(-50%,-50%)`;
      requestAnimationFrame(loop);
    })();
    const hotSel = "a, button, .tile, .magnetic";
    document.addEventListener("pointerover", (e) => {
      if (e.target.closest(hotSel)) cursor.classList.add("hot");
    });
    document.addEventListener("pointerout", (e) => {
      if (e.target.closest(hotSel)) cursor.classList.remove("hot");
    });
  }

  /* ────────────────────────────────────────────────────────────
     3 · SCROLL PROGRESS + NAV STATE
  ──────────────────────────────────────────────────────────── */
  const progress = $("#scrollProgress");
  const nav = $("#nav");
  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? y / max : 0;
      if (progress) progress.style.transform = `scaleX(${p})`;
      if (nav) nav.classList.toggle("scrolled", y > 40);
      ticking = false;
    });
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ────────────────────────────────────────────────────────────
     4 · MOBILE DRAWER
  ──────────────────────────────────────────────────────────── */
  const burger = $("#burger");
  const drawer = $("#drawer");
  const scrim = $("#drawerScrim");
  const setDrawer = (open) => {
    burger?.classList.toggle("open", open);
    drawer?.classList.toggle("open", open);
    scrim?.classList.toggle("open", open);
    burger?.setAttribute("aria-expanded", String(open));
    drawer?.setAttribute("aria-hidden", String(!open));
    document.body.style.overflow = open ? "hidden" : "";
  };
  burger?.addEventListener("click", () => setDrawer(!drawer.classList.contains("open")));
  scrim?.addEventListener("click", () => setDrawer(false));
  $$(".drawer nav a").forEach(a => a.addEventListener("click", () => setDrawer(false)));

  /* ────────────────────────────────────────────────────────────
     5 · WORD SPLIT (manifesto)
  ──────────────────────────────────────────────────────────── */
  $$("[data-split]").forEach(el => {
    const words = el.textContent.trim().split(/\s+/);
    el.innerHTML = words.map((w, i) => `<span class="w" style="--wi:${i}">${w}</span>`).join(" ");
  });

  /* ────────────────────────────────────────────────────────────
     6 · REVEALS (IntersectionObserver)
  ──────────────────────────────────────────────────────────── */
  const revealables = $$(".reveal, .line-mask__inner, [data-split]");
  if ("IntersectionObserver" in window && !prefersReduced) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          en.target.classList.add("in-view");
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.18, rootMargin: "0px 0px -8% 0px" });
    revealables.forEach(el => io.observe(el));
  } else {
    revealables.forEach(el => el.classList.add("in-view"));
  }

  /* ────────────────────────────────────────────────────────────
     7 · VIDEO LAZY-PLAY ENGINE
     Only the hero autoplays. Everything else mounts its source
     when near the viewport and plays only while visible.
  ──────────────────────────────────────────────────────────── */
  const lazyVideos = $$("video[data-src]");
  const makeSource = (v) => {
    const src = v.dataset.src;
    if (!src || v.dataset.mounted) return;
    v.dataset.mounted = "1";
    const s = document.createElement("source");
    s.src = src; s.type = "video/mp4";
    v.appendChild(s);
    v.load();
  };
  if ("IntersectionObserver" in window) {
    const vio = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        const v = en.target;
        if (en.isIntersecting) {
          makeSource(v);
          v.classList.add("playing");
          const pr = v.play();
          if (pr && pr.catch) pr.catch(() => { /* autoplay blocked; poster remains */ });
        } else {
          v.classList.remove("playing");
          if (!v.paused) v.pause();
        }
      });
    }, { threshold: 0.25, rootMargin: "160px" });
    lazyVideos.forEach(v => vio.observe(v));
  } else {
    lazyVideos.forEach(v => { makeSource(v); v.classList.add("playing"); });
  }

  /* ────────────────────────────────────────────────────────────
     8 · COUNT-UP NUMBERS
  ──────────────────────────────────────────────────────────── */
  const counters = $$("[data-count]");
  const runCounter = (el) => {
    const target = parseInt(el.dataset.count, 10) || 0;
    const dur = 1900;
    const t0 = performance.now();
    const fmt = (n) => n.toLocaleString("en-US");
    const step = (t) => {
      const p = Math.min(1, (t - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 4);
      el.textContent = fmt(Math.round(target * eased));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  if ("IntersectionObserver" in window && !prefersReduced) {
    const cio = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) { runCounter(en.target); cio.unobserve(en.target); }
      });
    }, { threshold: 0.6 });
    counters.forEach(el => cio.observe(el));
  } else {
    counters.forEach(el => { el.textContent = (parseInt(el.dataset.count, 10) || 0).toLocaleString("en-US"); });
  }

  /* ────────────────────────────────────────────────────────────
     9 · MAGNETIC BUTTONS
  ──────────────────────────────────────────────────────────── */
  if (!isCoarse && !prefersReduced) {
    $$(".magnetic").forEach(el => {
      const strength = 0.28;
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        el.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
      });
      el.addEventListener("pointerleave", () => { el.style.transform = ""; });
    });
  }

  /* ────────────────────────────────────────────────────────────
     10 · PARALLAX (hero phone)
  ──────────────────────────────────────────────────────────── */
  const pxEls = $$("[data-parallax]");
  if (pxEls.length && !isCoarse && !prefersReduced) {
    let sy = window.scrollY;
    window.addEventListener("scroll", () => { sy = window.scrollY; }, { passive: true });
    (function px() {
      pxEls.forEach(el => {
        const speed = parseFloat(el.dataset.parallax) || 0.2;
        el.style.transform = `translateY(${sy * -speed}px)`;
      });
      requestAnimationFrame(px);
    })();
  }

  /* ────────────────────────────────────────────────────────────
     11 · TILT (phone + tiles)
  ──────────────────────────────────────────────────────────── */
  if (!isCoarse && !prefersReduced) {
    $$("[data-tilt]").forEach(el => {
      let raf = null;
      el.addEventListener("pointermove", (e) => {
        if (raf) return;
        raf = requestAnimationFrame(() => {
          const r = el.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width - 0.5;
          const py = (e.clientY - r.top) / r.height - 0.5;
          const max = el.classList.contains("phone") ? 7 : 3;
          el.style.transform = `perspective(1100px) rotateY(${px * max}deg) rotateX(${-py * max}deg)`;
          raf = null;
        });
      });
      el.addEventListener("pointerleave", () => {
        el.style.transform = "";
      });
    });
  }

  /* ────────────────────────────────────────────────────────────
     12 · AI PINNED CHAPTER — scroll-driven steps
  ──────────────────────────────────────────────────────────── */
  const aiSection = $("#ai");
  const aiBar = $("#aiProgressBar");
  const aiPoints = $$(".ai-point");
  if (aiSection && aiPoints.length && !prefersReduced) {
    const onAiScroll = () => {
      const r = aiSection.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      const p = Math.min(1, Math.max(0, -r.top / total));
      if (aiBar) aiBar.style.width = `${p * 100}%`;
      const step = Math.min(aiPoints.length - 1, Math.floor(p * aiPoints.length + 0.0001));
      aiPoints.forEach((pt, i) => pt.classList.toggle("active", i <= step));
    };
    window.addEventListener("scroll", onAiScroll, { passive: true });
    onAiScroll();
  }

  /* ────────────────────────────────────────────────────────────
     13 · MARQUEE — duplicate track for seamless loop
  ──────────────────────────────────────────────────────────── */
  const mq = $("[data-marquee]");
  if (mq) mq.innerHTML += mq.innerHTML;

})();
