
// Mobile menu toggle + scroll reveal
// NOTE: This page injects header/main/footer via fetch() inside custom elements.
// That means #menuBtn/#mobileMenu/#year may not exist at script load time.
let menuToggleInitialized = false;

function setExpanded(isExpanded) {
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  if (!menuBtn || !mobileMenu) return;

  menuBtn.setAttribute("aria-expanded", String(isExpanded));
  mobileMenu.classList.toggle("hidden", !isExpanded);
  menuBtn.setAttribute("aria-label", isExpanded ? "Close menu" : "Open menu");
}

function tryInitMenuToggle() {
  if (menuToggleInitialized) return true;

  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  if (!menuBtn || !mobileMenu) return false;

  // Initialize current expanded state if it exists; otherwise default to closed.
  if (!menuBtn.getAttribute("aria-expanded")) menuBtn.setAttribute("aria-expanded", "false");
  setExpanded(menuBtn.getAttribute("aria-expanded") === "true");

  menuBtn.addEventListener("click", () => {
    const isExpanded = menuBtn.getAttribute("aria-expanded") === "true";
    setExpanded(!isExpanded);
  });

  // Close mobile menu on navigation
  mobileMenu.addEventListener("click", (e) => {
    const target = e.target;
    if (target && target.tagName === "A") setExpanded(false);
  });

  menuToggleInitialized = true;
  return true;
}

// Scroll reveal (must also work for injected HTML)
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let revealObserver = null;
const revealElsObserved = new WeakSet();

if (!prefersReducedMotion && "IntersectionObserver" in window) {
  revealObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.15 }
  );
}

function observeReveal(el) {
  if (!el || el.nodeType !== 1) return;
  if (revealElsObserved.has(el)) return;
  revealElsObserved.add(el);

  if (revealObserver) {
    revealObserver.observe(el);
  } else {
    // If reduced motion or unsupported, show immediately.
    el.classList.add("is-visible");
  }
}

function scanAndObserveReveals(root = document) {
  root.querySelectorAll?.(".reveal")?.forEach(observeReveal);
}

// Initial scan for any content already present.
scanAndObserveReveals();

// Observe future injected nodes so reveal works after fetch() completes.
const domObserver = new MutationObserver((mutations) => {
  if (!menuToggleInitialized) tryInitMenuToggle();

  for (const mutation of mutations) {
    for (const node of mutation.addedNodes) {
      if (!node || node.nodeType !== 1) continue;

      if (node.matches?.(".reveal")) observeReveal(node);
      scanAndObserveReveals(node);

      // Footer year: set as soon as the footer fragment is injected.
      const yearEl =
        (node.matches?.("#year") ? node : null) || node.querySelector?.("#year");
      if (yearEl && !yearEl.textContent.trim()) {
        yearEl.textContent = String(new Date().getFullYear());
      }
    }
  }
});

// Start observing.
if (document.body) {
  domObserver.observe(document.body, { childList: true, subtree: true });
} else {
  window.addEventListener("DOMContentLoaded", () => {
    domObserver.observe(document.body, { childList: true, subtree: true });
  });
}

// One-time attempts if elements already exist.
tryInitMenuToggle();
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// Back to top button
const toTop = document.getElementById("toTop");
if (toTop) {
  window.addEventListener("scroll", () => {
    const show = window.scrollY > 500;
    toTop.classList.toggle("hidden", !show);
  });

  toTop.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" })
  );
}

// Make hero content visible quickly (helps perceived performance)
setTimeout(() => {
  const topReveals = Array.from(document.querySelectorAll(".reveal")).slice(0, 8);
  for (const el of topReveals) {
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) {
      el.classList.add("is-visible");
      if (revealObserver) revealObserver.unobserve(el);
    }
  }
}, 150);
