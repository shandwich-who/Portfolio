// Mobile menu toggle + scroll reveal + active nav tracking
let menuToggleInitialized = false;

function setExpanded(isExpanded) {
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  if (!menuBtn || !mobileMenu) return;

  menuBtn.setAttribute("aria-expanded", String(isExpanded));
  mobileMenu.classList.toggle("hidden", !isExpanded);
  menuBtn.setAttribute("aria-label", isExpanded ? "Close menu" : "Open menu");

  const hamburgerPath = document.getElementById("hamburgerPath");
  const closeMenuPath = document.getElementById("closeMenuPath");
  if (hamburgerPath && closeMenuPath) {
    hamburgerPath.classList.toggle("hidden", isExpanded);
    closeMenuPath.classList.toggle("hidden", !isExpanded);
  }
}

function tryInitMenuToggle() {
  if (menuToggleInitialized) return true;

  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  if (!menuBtn || !mobileMenu) return false;

  if (!menuBtn.getAttribute("aria-expanded")) menuBtn.setAttribute("aria-expanded", "false");
  setExpanded(menuBtn.getAttribute("aria-expanded") === "true");

  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const isExpanded = menuBtn.getAttribute("aria-expanded") === "true";
    setExpanded(!isExpanded);
  });

  // Close mobile menu on navigation link click
  mobileMenu.addEventListener("click", (e) => {
    const target = e.target.closest("a, button");
    if (target) setExpanded(false);
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", (e) => {
    if (menuBtn.getAttribute("aria-expanded") === "true") {
      const header = document.querySelector("header");
      if (header && !header.contains(e.target)) {
        setExpanded(false);
      }
    }
  });

  menuToggleInitialized = true;
  return true;
}

// Scroll reveal (works for injected HTML)
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
    { threshold: 0.12 }
  );
}

function observeReveal(el) {
  if (!el || el.nodeType !== 1) return;
  if (revealElsObserved.has(el)) return;
  revealElsObserved.add(el);

  if (revealObserver) {
    revealObserver.observe(el);
  } else {
    el.classList.add("is-visible");
  }
}

function scanAndObserveReveals(root = document) {
  root.querySelectorAll?.(".reveal")?.forEach(observeReveal);
}

// Initial scan
scanAndObserveReveals();

// Active nav highlight on scroll
function updateActiveNav() {
  const sections = ["home", "projects", "about", "skills", "contact"];
  const scrollPos = window.scrollY + 120;
  let activeId = "home";

  for (const id of sections) {
    const el = document.getElementById(id);
    if (el) {
      const top = el.offsetTop;
      const height = el.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        activeId = id;
        break;
      }
    }
  }

  const navLinks = document.querySelectorAll("[data-nav-link]");
  navLinks.forEach((link) => {
    const target = link.getAttribute("data-nav-link");
    if (target === activeId) {
      link.classList.add("text-white", "font-semibold");
      link.classList.remove("text-white/70");
    } else {
      link.classList.remove("text-white", "font-semibold");
      link.classList.add("text-white/70");
    }
  });
}

window.addEventListener("scroll", updateActiveNav, { passive: true });

// Observe future injected nodes
const domObserver = new MutationObserver((mutations) => {
  if (!menuToggleInitialized) tryInitMenuToggle();

  for (const mutation of mutations) {
    for (const node of mutation.addedNodes) {
      if (!node || node.nodeType !== 1) continue;

      if (node.matches?.(".reveal")) observeReveal(node);
      scanAndObserveReveals(node);

      const yearEl =
        (node.matches?.("#year") ? node : null) || node.querySelector?.("#year");
      if (yearEl && !yearEl.textContent.trim()) {
        yearEl.textContent = String(new Date().getFullYear());
      }
    }
  }
});

if (document.body) {
  domObserver.observe(document.body, { childList: true, subtree: true });
} else {
  window.addEventListener("DOMContentLoaded", () => {
    domObserver.observe(document.body, { childList: true, subtree: true });
  });
}

tryInitMenuToggle();
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// Back to top button
const toTop = document.getElementById("toTop");
if (toTop) {
  window.addEventListener("scroll", () => {
    const show = window.scrollY > 400;
    toTop.classList.toggle("hidden", !show);
    toTop.classList.toggle("flex", show);
  }, { passive: true });

  toTop.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" })
  );
}

// Make hero content visible promptly
setTimeout(() => {
  const topReveals = Array.from(document.querySelectorAll(".reveal")).slice(0, 10);
  for (const el of topReveals) {
    if (el.getBoundingClientRect().top < window.innerHeight * 0.95) {
      el.classList.add("is-visible");
      if (revealObserver) revealObserver.unobserve(el);
    }
  }
  updateActiveNav();
}, 150);
