/* =============================================================
   THAI·USA — interactions & rendering
   ============================================================= */
(function () {
  "use strict";
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const esc = (str) =>
    String(str).replace(/[&<>"']/g, (m) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m])
    );

  /* ---------- populate site text (null-safe) ---------- */
  const text = (sel, val) => { const el = $(sel); if (el) el.textContent = val; };
  const html = (sel, val) => { const el = $(sel); if (el) el.innerHTML = val; };
  const attr = (sel, name, val) => { const el = $(sel); if (el) el.setAttribute(name, val); };

  function fillSite() {
    const s = window.SITE;
    text("#aboutText", s.about);
    text("#footerTag", s.tagline + ".");

    const addr = `${s.address.line1}, ${s.address.line2}`;
    html("#addrText", `${esc(s.address.line1)}<br>${esc(s.address.line2)}<br>${esc(s.address.country)}`);
    html("#footerAddr", `${esc(addr)}<br>${esc(s.phone)}`);
    attr("#mapsLink", "href", s.address.maps);

    const phone = $("#phoneLink");
    if (phone) { phone.textContent = "Phone · " + s.phone; phone.href = s.phoneHref; }

    attr("#igLink", "href", s.social.instagram);
    attr("#fbLink", "href", s.social.facebook);
    text("#year", new Date().getFullYear());

    // hours (highlight today)
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const today = days[new Date().getDay()];
    html("#hoursList", s.hours.map((h) => {
      const cls = [h.closed ? "closed" : "", h.day === today ? "today" : ""].filter(Boolean).join(" ");
      return `<li class="${cls}"><span>${esc(h.day)}</span><span>${esc(h.time)}</span></li>`;
    }).join(""));

    // notes
    html("#menuNotes", s.notes.map((n) => `<li>${esc(n)}</li>`).join(""));
  }

  /* ---------- render menu ---------- */
  function renderMenu() {
    const cats = window.CATEGORIES;
    const menu = window.MENU;

    // chips
    $("#catBarInner").innerHTML = cats
      .map(
        (c, i) =>
          `<button class="cat-chip${i === 0 ? " active" : ""}" data-target="cat-${c.id}">${esc(c.name)}</button>`
      )
      .join("");

    // sections
    $("#menuSections").innerHTML = cats
      .map((c) => {
        const items = menu[c.id] || [];
        const twoCol = items.length > 6 ? " two-col" : "";
        const rows = items
          .map((it) => {
            const isMarket = /market/i.test(it.price);
            const priceCls = "menu-row-price" + (isMarket ? " market" : "");
            const price = it.price ? `<span class="${priceCls}">${esc(it.price)}</span>` : "";
            const veg = it.veg ? `<span class="veg-tag" title="Vegetarian option available">Veg ✓</span>` : "";
            const desc = it.description ? `<p class="menu-row-desc">${esc(it.description)}</p>` : "";
            return `
              <div class="menu-row">
                <div class="menu-row-top">
                  <span class="menu-row-name">${esc(it.name)}${veg}</span>
                  <span class="menu-row-leader"></span>
                  ${price}
                </div>
                ${desc}
              </div>`;
          })
          .join("");
        return `
          <section class="menu-section" id="cat-${c.id}">
            <div class="menu-section-head">
              <h3>${esc(c.name)} <span class="thai">${esc(c.thai)}</span></h3>
              <span class="menu-section-count">${items.length} dishes</span>
            </div>
            <div class="menu-list${twoCol}">${rows}</div>
          </section>`;
      })
      .join("");
  }

  /* ---------- category chip behaviour ---------- */
  function wireCats() {
    const chips = $$(".cat-chip");
    chips.forEach((chip) => {
      chip.addEventListener("click", () => {
        const el = document.getElementById(chip.dataset.target);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });

    // active chip on scroll
    const sections = $$(".menu-section");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const id = e.target.id;
            chips.forEach((c) => c.classList.toggle("active", c.dataset.target === id));
            const active = chips.find((c) => c.dataset.target === id);
            if (active) active.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => io.observe(s));
  }

  /* ---------- reveal on scroll ---------- */
  function wireReveal() {
    const els = $$(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((e) => e.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((e) => io.observe(e));
  }

  /* ---------- header + progress ---------- */
  function wireScroll() {
    const header = $(".site-header");
    const bar = $(".scroll-progress span");
    let ticking = false;
    const onScroll = () => {
      const y = window.scrollY;
      header.classList.toggle("scrolled", y > 40);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (bar) bar.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
      ticking = false;
    };
    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          window.requestAnimationFrame(onScroll);
          ticking = true;
        }
      },
      { passive: true }
    );
    onScroll();
  }

  /* ---------- mobile nav ---------- */
  function wireNav() {
    const toggle = $(".nav-toggle");
    const close = () => {
      document.body.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
      $("#mobileNav").setAttribute("aria-hidden", "true");
    };
    toggle.addEventListener("click", () => {
      const open = document.body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", String(open));
      $("#mobileNav").setAttribute("aria-hidden", String(!open));
    });
    $$("#mobileNav a").forEach((a) => a.addEventListener("click", close));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });
  }

  /* ---------- init ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    fillSite();
    renderMenu();
    wireCats();
    wireReveal();
    wireScroll();
    wireNav();
    // re-observe newly rendered .reveal-less menu rows? not needed.
  });
})();
