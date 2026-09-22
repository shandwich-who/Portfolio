const BACKGROUND_FRAGMENT_HTML = `<div class="pointer-events-none absolute inset-0">
  <div class="absolute inset-0 bg-grid opacity-60"></div>
  <div
    class="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500/25 via-fuchsia-500/15 to-cyan-500/20 blur-3xl"
  ></div>
  <div class="noise absolute inset-0"></div>
</div>
`;

class BackgroundEffects extends HTMLElement {
  connectedCallback() {
    window.renderFragmentIntoElement(this, BACKGROUND_FRAGMENT_HTML, {
      errorHTML: '<div class="pointer-events-none"></div>',
      source: 'background/background.html',
    });
  }
}
customElements.define('background-effects', BackgroundEffects);
