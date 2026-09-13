class MainSection extends HTMLElement {
    async connectedCallback() {
        await window.loadFragmentIntoElement(this, './main/main.html', {
            errorHTML: '<main>main failed to load</main>',
            templateHTML: window.fragmentTemplates?.main,
            afterLoad: (hostEl) => {
                const modal = hostEl.querySelector("#project-overview-modal");
                const dialog = hostEl.querySelector("[role='dialog']");
                const emailBtn = hostEl.querySelector("#emailBtn");
                const titleEl = hostEl.querySelector("#projectOverviewTitle");
                const typeEl = hostEl.querySelector("#projectOverviewType");
                const descriptionEl = hostEl.querySelector("#projectOverviewDescription");
                const featuresEl = hostEl.querySelector("#projectOverviewFeatures");
                const extraEl = hostEl.querySelector("#projectOverviewExtra");
                const closeBtn = hostEl.querySelector("[data-project-close]");
                const overviewButtons = hostEl.querySelectorAll("[data-project-overview]");
                let lastFocusedElement = null;

                if (
                    !modal ||
                    !dialog ||
                    !emailBtn ||
                    !titleEl ||
                    !typeEl ||
                    !descriptionEl ||
                    !featuresEl ||
                    !extraEl ||
                    !closeBtn
                ) {
                    return;
                }

                const emailUser = ["sa", ".", "galang02"].join("");
                const emailDomain = ["g", "mail", ".", "com"].join("");
                const emailSubject = ["Portfolio", "Inquiry"].join(" ");
                const emailBody = ["Hi Sean,", "", ""].join("\n");
                const emailAddress = `${emailUser}@${emailDomain}`;
                const params = new URLSearchParams({
                    subject: emailSubject,
                    body: emailBody,
                });
                emailBtn.href = `mailto:${emailAddress}?${params.toString()}`;

                const getFocusableElements = () =>
                    Array.from(
                        modal.querySelectorAll(
                            'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
                        )
                    ).filter((element) => !element.hasAttribute("hidden"));

                const trapFocus = (event) => {
                    if (event.key === "Escape" && modal.getAttribute("aria-hidden") === "false") {
                        event.preventDefault();
                        closeModal();
                        return;
                    }

                    if (event.key !== "Tab" || modal.getAttribute("aria-hidden") !== "false") {
                        return;
                    }

                    const focusableElements = getFocusableElements();
                    if (!focusableElements.length) {
                        event.preventDefault();
                        dialog.focus();
                        return;
                    }

                    const firstElement = focusableElements[0];
                    const lastElement = focusableElements[focusableElements.length - 1];

                    if (event.shiftKey && document.activeElement === firstElement) {
                        event.preventDefault();
                        lastElement.focus();
                    } else if (!event.shiftKey && document.activeElement === lastElement) {
                        event.preventDefault();
                        firstElement.focus();
                    }
                };

                const openModal = (button) => {
                    lastFocusedElement = button;
                    titleEl.textContent = button.dataset.projectTitle || "Project Overview";
                    typeEl.textContent = button.dataset.projectType || "Project";
                    descriptionEl.textContent = button.dataset.projectDescription || "";
                    featuresEl.innerHTML = "";

                    const features = (button.dataset.projectFeatures || "")
                        .split("|")
                        .map((feature) => feature.trim())
                        .filter(Boolean);

                    features.forEach((feature) => {
                        const item = document.createElement("li");
                        item.className = "flex gap-2";
                        item.innerHTML = `
              <span class="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-300"></span>
              <span>${feature}</span>
            `;
                        featuresEl.appendChild(item);
                    });

                    extraEl.innerHTML = "";
                    extraEl.classList.add("hidden");

                    if (button.dataset.projectTemplate) {
                        const template = hostEl.querySelector(`#${button.dataset.projectTemplate}`);
                        if (template && "content" in template) {
                            extraEl.appendChild(template.content.cloneNode(true));
                            extraEl.classList.remove("hidden");
                        }
                    }

                    modal.classList.remove("hidden", "pointer-events-none", "opacity-0");
                    modal.classList.add("flex");
                    modal.setAttribute("aria-hidden", "false");
                    document.body.style.overflow = "hidden";
                    closeBtn.focus();
                };

                const closeModal = () => {
                    modal.classList.add("hidden", "pointer-events-none", "opacity-0");
                    modal.classList.remove("flex");
                    modal.setAttribute("aria-hidden", "true");
                    document.body.style.overflow = "";
                    if (lastFocusedElement instanceof HTMLElement) {
                        lastFocusedElement.focus();
                    }
                };

                overviewButtons.forEach((button) => {
                    button.addEventListener("click", (event) => {
                        event.preventDefault();
                        openModal(button);
                    });
                });

                closeBtn.addEventListener("click", closeModal);

                modal.addEventListener("click", (event) => {
                    if (event.target === modal) {
                        closeModal();
                    }
                });

                dialog.setAttribute("tabindex", "-1");
                document.addEventListener("keydown", trapFocus);
            },
        });
    }
}
customElements.define("main-section", MainSection);
