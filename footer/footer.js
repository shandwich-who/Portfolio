class FooterSection extends HTMLElement {
    async connectedCallback() {
        await window.loadFragmentIntoElement(this, './footer/footer.html', {
            errorHTML: '<footer>footer failed to load</footer>',
            templateHTML: window.fragmentTemplates?.footer,
            afterLoad: (hostEl) => {
                const yearSpan = hostEl.querySelector('#year');
                if (yearSpan) yearSpan.textContent = String(new Date().getFullYear());
            },
        });
    }
}
customElements.define("footer-section", FooterSection);

