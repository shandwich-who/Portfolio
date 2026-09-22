/**
 * Helper for custom elements that inject HTML fragments.
 * Keeps all sections consistent and provides lifecycle events.
 */
(function () {
  async function loadFragmentIntoElement(hostEl, url, options = {}) {
    const {
      errorHTML = "<div class='p-4 text-center text-sm text-red-400'>Section failed to load</div>",
      afterLoad,
      fetchOptions,
    } = options;

    try {
      const response = await fetch(url, fetchOptions);
      if (!response.ok) throw new Error(`HTTP ${response.status} for ${url}`);

      const html = await response.text();
      hostEl.innerHTML = html;

      if (typeof afterLoad === "function") afterLoad(hostEl);

      hostEl.dispatchEvent(
        new CustomEvent("fragmentLoaded", {
          bubbles: true,
          detail: { url, element: hostEl },
        })
      );
      document.dispatchEvent(
        new CustomEvent("portfolioFragmentLoaded", {
          detail: { url, element: hostEl },
        })
      );
    } catch (error) {
      console.error(`Error loading fragment (${url}):`, error);
      hostEl.innerHTML = errorHTML;
    }
  }

  window.loadFragmentIntoElement = loadFragmentIntoElement;
})();
