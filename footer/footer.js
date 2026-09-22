class FooterSection extends HTMLElement {
  async connectedCallback() {
    await window.loadFragmentIntoElement(this, './footer/footer.html', {
      errorHTML: '<footer class="border-t border-white/5 py-8 text-center text-xs text-white/40">Footer unavailable</footer>',
      afterLoad: (hostEl) => {
        const yearSpan = hostEl.querySelector('#year');
        if (yearSpan) yearSpan.textContent = String(new Date().getFullYear());
      },
    });
  }
}
customElements.define("footer-section", FooterSection);
