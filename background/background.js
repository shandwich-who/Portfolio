class BackgroundEffects extends HTMLElement {
  async connectedCallback() {
    await window.loadFragmentIntoElement(this, './background/background.html', {
      errorHTML: '<div class="pointer-events-none"></div>',
    });
  }
}
customElements.define('background-effects', BackgroundEffects);
