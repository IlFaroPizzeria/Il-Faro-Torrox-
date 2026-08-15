(function () {
  "use strict";

  /* ---------- year in footer ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- mobile nav ---------- */
  var burger = document.getElementById("burger");
  var mainNav = document.getElementById("mainNav");
  if (burger && mainNav) {
    burger.addEventListener("click", function () {
      var open = mainNav.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    mainNav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        mainNav.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- language switching ---------- */
  var DEFAULT_LANG = "es";
  var STORAGE_KEY = "ilfaro-lang";

  function detectInitialLang() {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved && I18N[saved]) return saved;

    var browserLang = (navigator.language || "es").slice(0, 2).toLowerCase();
    if (I18N[browserLang]) return browserLang;

    return DEFAULT_LANG;
  }

  function applyLang(lang) {
    if (!I18N[lang]) lang = DEFAULT_LANG;
    var dict = I18N[lang];

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    document.documentElement.setAttribute("lang", lang);
    localStorage.setItem(STORAGE_KEY, lang);

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.classList.toggle("is-active", btn.getAttribute("data-lang") === lang);
    });
  }

  var langSwitch = document.getElementById("langSwitch");
  if (langSwitch) {
    langSwitch.addEventListener("click", function (e) {
      var btn = e.target.closest(".lang-btn");
      if (!btn) return;
      applyLang(btn.getAttribute("data-lang"));
    });
  }

  applyLang(detectInitialLang());

  /* ---------- header shadow / state on scroll (subtle) ---------- */
  var header = document.querySelector(".site-header");
  if (header) {
    var lastY = 0;
    window.addEventListener("scroll", function () {
      var y = window.scrollY;
      header.style.boxShadow = y > 8 ? "0 6px 20px rgba(23,19,16,.4)" : "none";
      lastY = y;
    }, { passive: true });
  }

  /* ---------- reveal-on-scroll for section headers (subtle, respects reduced motion) ---------- */
  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!prefersReduced && "IntersectionObserver" in window) {
    var revealTargets = document.querySelectorAll(".section .eyebrow, .section h2, .carta-badge");
    revealTargets.forEach(function (el) {
      el.style.opacity = "0";
      el.style.transform = "translateY(14px)";
      el.style.transition = "opacity .6s ease, transform .6s ease";
    });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    revealTargets.forEach(function (el) { io.observe(el); });
  }

})();
