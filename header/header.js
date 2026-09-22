class HeaderSection extends HTMLElement {
  async connectedCallback() {
    await window.loadFragmentIntoElement(this, './header/header.html', {
      errorHTML: '<header class="p-4 text-center text-xs text-white/50">Header unavailable</header>',
      afterLoad: () => {
        if (typeof window.tryInitMenuToggle === "function") {
          window.tryInitMenuToggle();
        }
      },
    });
  }
}
customElements.define("header-section", HeaderSection);
