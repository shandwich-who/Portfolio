/**
 * Tiny helper for custom elements that inject HTML fragments.
 * Keeps all sections consistent and avoids duplicated try/catch logic.
 */
(function () {
  async function loadFragmentIntoElement(hostEl, url, options = {}) {
    const {
      errorHTML = "<div>section failed to load</div>",
      afterLoad,
      fetchOptions,
      templateHTML,
    } = options;

    const renderTemplateFallback = () => {
      if (!templateHTML) return false;

      hostEl.innerHTML = templateHTML;

      if (typeof afterLoad === "function") afterLoad(hostEl);
      return true;
    };

    try {
      const response = await fetch(url, fetchOptions);
      if (!response.ok) throw new Error(`HTTP ${response.status} for ${url}`);

      const html = await response.text();
      hostEl.innerHTML = html;

      if (typeof afterLoad === "function") afterLoad(hostEl);
    } catch (error) {
      console.error(`Error loading fragment (${url}):`, error);

      if (renderTemplateFallback()) return;

      hostEl.innerHTML = errorHTML;
    }
  }

  window.loadFragmentIntoElement = loadFragmentIntoElement;
})();
