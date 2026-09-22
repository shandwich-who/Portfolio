const FOOTER_FRAGMENT_HTML = `<footer class="border-t border-white/5">
  <div
    class="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-10 md:flex-row md:items-center md:justify-between"
  >
    <p class="text-sm text-white/60">
      Copyright <span id="year"></span> All rights reserved.
    </p>
    <div class="flex items-center gap-4 text-sm">
      <a class="text-white/60 hover:text-white transition" href="#home">Top</a>
      <a class="text-white/60 hover:text-white transition" href="#projects"
        >Work</a
      >
      <a class="text-white/60 hover:text-white transition" href="#contact"
        >Contact</a
      >
    </div>
  </div>
</footer>
`;

class FooterSection extends HTMLElement {
  connectedCallback() {
    window.renderFragmentIntoElement(this, FOOTER_FRAGMENT_HTML, {
      errorHTML: '<footer class="border-t border-white/5 py-8 text-center text-xs text-white/40">Footer unavailable</footer>',
      source: 'footer/footer.html',
      afterLoad: (hostEl) => {
        const yearSpan = hostEl.querySelector('#year');
        if (yearSpan) yearSpan.textContent = String(new Date().getFullYear());
      },
    });
  }
}
customElements.define("footer-section", FooterSection);
