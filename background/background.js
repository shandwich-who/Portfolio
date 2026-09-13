class BackgroundEffects extends HTMLElement {
    async connectedCallback() {
        await window.loadFragmentIntoElement(this, './background/background.html', {
            errorHTML: '<div>background failed to load</div>',
            templateHTML: window.fragmentTemplates?.background,
        });
    }
}
customElements.define('background-effects', BackgroundEffects);
