/**
 * Helper for custom elements that inject HTML fragments.
 * Keeps all sections consistent and provides lifecycle events.
 *
 * NOTE: Fragments are rendered from an inline HTML string (renderFragmentIntoElement)
 * rather than fetch()'d from a URL. Browsers block fetch()/XHR against the file://
 * protocol for security reasons, so a fetch-based loader only works when the site is
 * served over http(s) (e.g. via a local dev server or a real host) and shows
 * "X unavailable" / "X failed to load" for every section the moment someone just
 * double-clicks index.html. Rendering inline HTML works identically over file://
 * and http(s), and also avoids the extra network round-trip per fragment.
 *
 * loadFragmentIntoElement(url) is kept around as a fallback for anyone who still
 * wants to fetch a fragment from a URL when running over http(s).
 */
(function () {
  function renderFragmentIntoElement(hostEl, html, options = {}) {
    const {
      errorHTML = "<div class='p-4 text-center text-sm text-red-400'>Section failed to load</div>",
      afterLoad,
      source = "inline",
    } = options;

    try {
      if (typeof html !== "string") throw new Error("No fragment HTML provided");
      hostEl.innerHTML = html;

      if (typeof afterLoad === "function") afterLoad(hostEl);

      hostEl.dispatchEvent(
        new CustomEvent("fragmentLoaded", {
          bubbles: true,
          detail: { url: source, element: hostEl },
        })
      );
      document.dispatchEvent(
        new CustomEvent("portfolioFragmentLoaded", {
          detail: { url: source, element: hostEl },
        })
      );
    } catch (error) {
      console.error(`Error rendering fragment (${source}):`, error);
      hostEl.innerHTML = errorHTML;
    }
  }

  async function loadFragmentIntoElement(hostEl, url, options = {}) {
    const { errorHTML, afterLoad, fetchOptions } = options;

    try {
      const response = await fetch(url, fetchOptions);
      if (!response.ok) throw new Error(`HTTP ${response.status} for ${url}`);
      const html = await response.text();
      renderFragmentIntoElement(hostEl, html, { errorHTML, afterLoad, source: url });
    } catch (error) {
      console.error(`Error loading fragment (${url}):`, error);
      hostEl.innerHTML =
        errorHTML ||
        "<div class='p-4 text-center text-sm text-red-400'>Section failed to load</div>";
    }
  }

  window.renderFragmentIntoElement = renderFragmentIntoElement;
  window.loadFragmentIntoElement = loadFragmentIntoElement;
})();
