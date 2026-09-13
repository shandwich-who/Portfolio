class HeaderSection extends HTMLElement {
  async connectedCallback() {
      await window.loadFragmentIntoElement(this, './header/header.html', {
          errorHTML: '<header>header failed to load</header>',
          templateHTML: window.fragmentTemplates?.header,
      });
  }
}
customElements.define("header-section", HeaderSection);
