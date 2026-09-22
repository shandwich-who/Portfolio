class MainSection extends HTMLElement {
    async connectedCallback() {
        await window.loadFragmentIntoElement(this, './main/main.html', {
            errorHTML: '<main class="p-8 text-center text-rose-400">Main section failed to load</main>',
            afterLoad: (hostEl) => {
                const modal = hostEl.querySelector("#project-overview-modal");
                const dialog = hostEl.querySelector("[role='dialog']");
                const emailBtn = hostEl.querySelector("#emailBtn");
                const copyEmailBtn = hostEl.querySelector("#copyEmailBtn");
                const copyEmailText = hostEl.querySelector("#copyEmailText");

                // Dynamic email obfuscation and inquiry builder
                const emailUser = ["sa", ".", "galang02"].join("");
                const emailDomain = ["g", "mail", ".", "com"].join("");
                const emailAddress = `${emailUser}@${emailDomain}`;

                const setEmailInquiry = (subjectText, bodyText) => {
                    if (!emailBtn) return;
                    const params = new URLSearchParams({
                        subject: subjectText || "Portfolio Inquiry",
                        body:
                            bodyText ||
                            "Hi Sean,\n\nI came across your portfolio and would like to connect.\n\nBest regards,",
                    });
                    emailBtn.href = `mailto:${emailAddress}?${params.toString()}`;
                };

                setEmailInquiry();

                // Copy Email to clipboard with feedback state
                if (copyEmailBtn) {
                    copyEmailBtn.addEventListener("click", async () => {
                        try {
                            if (navigator.clipboard && navigator.clipboard.writeText) {
                                await navigator.clipboard.writeText(emailAddress);
                            } else {
                                const tempInput = document.createElement("textarea");
                                tempInput.value = emailAddress;
                                document.body.appendChild(tempInput);
                                tempInput.select();
                                document.execCommand("copy");
                                document.body.removeChild(tempInput);
                            }

                            if (copyEmailText) copyEmailText.textContent = "Copied!";
                            copyEmailBtn.classList.add("border-emerald-400/50", "bg-emerald-500/10", "text-emerald-300");

                            setTimeout(() => {
                                if (copyEmailText) copyEmailText.textContent = "Copy Email";
                                copyEmailBtn.classList.remove(
                                    "border-emerald-400/50",
                                    "bg-emerald-500/10",
                                    "text-emerald-300"
                                );
                            }, 2200);
                        } catch (err) {
                            console.error("Failed to copy email:", err);
                        }
                    });
                }

                if (!modal || !dialog) return;

                // Modal Elements
                const badgeEl = hostEl.querySelector("#projectOverviewBadge");
                const platformEl = hostEl.querySelector("#projectOverviewPlatform");
                const titleEl = hostEl.querySelector("#projectOverviewTitle");
                const subtitleEl = hostEl.querySelector("#projectOverviewSubtitle");
                const descriptionEl = hostEl.querySelector("#projectOverviewDescription");
                const statPlatformEl = hostEl.querySelector("#statPlatform");
                const statArchitectureEl = hostEl.querySelector("#statArchitecture");
                const statScreensEl = hostEl.querySelector("#statScreens");
                const statTypeEl = hostEl.querySelector("#statType");
                const techStackEl = hostEl.querySelector("#projectOverviewTechStack");
                const featuresEl = hostEl.querySelector("#projectOverviewFeatures");
                const deepDiveHeadingEl = hostEl.querySelector("#projectDeepDiveHeading");
                const deepDiveEl = hostEl.querySelector("#projectOverviewDeepDive");
                const contactBtn = hostEl.querySelector("#projectModalContactBtn");

                // Carousel elements
                const carouselStage = hostEl.querySelector("#carouselStage");
                const mobileWrapper = hostEl.querySelector("#carouselMobileWrapper");
                const desktopWrapper = hostEl.querySelector("#carouselDesktopWrapper");
                const mobileImg = hostEl.querySelector("#carouselMobileImg");
                const desktopImg = hostEl.querySelector("#carouselDesktopImg");
                const desktopTitlebar = hostEl.querySelector("#carouselDesktopTitlebar");
                const counterEl = hostEl.querySelector("#carouselCounter");
                const prevBtn = hostEl.querySelector("#carouselPrevBtn");
                const nextBtn = hostEl.querySelector("#carouselNextBtn");
                const zoomBtn = hostEl.querySelector("#carouselZoomBtn");
                const screenTitleEl = hostEl.querySelector("#carouselScreenTitle");
                const screenBadgeEl = hostEl.querySelector("#carouselScreenBadge");
                const screenCaptionEl = hostEl.querySelector("#carouselScreenCaption");
                const thumbnailsContainer = hostEl.querySelector("#carouselThumbnails");
                const thumbCountEl = hostEl.querySelector("#carouselThumbCount");

                // Lightbox elements
                const lightboxModal = hostEl.querySelector("#screen-lightbox-modal");
                const lightboxImg = hostEl.querySelector("#lightboxImg");
                const lightboxTitle = hostEl.querySelector("#lightboxTitle");
                const lightboxCaption = hostEl.querySelector("#lightboxCaption");
                const lightboxCloseBtn = hostEl.querySelector("#lightboxCloseBtn");
                const lightboxPrevBtn = hostEl.querySelector("#lightboxPrevBtn");
                const lightboxNextBtn = hostEl.querySelector("#lightboxNextBtn");

                const closeButtons = hostEl.querySelectorAll("[data-project-close]");
                const overviewButtons = hostEl.querySelectorAll("[data-project-overview]");
                const projectSwitchButtons = hostEl.querySelectorAll("[data-switch-project]");

                // Project Catalog Data
                const PROJECTS_DATA = {
                    classkit: {
                        id: "classkit",
                        title: "Classkit",
                        subtitle: "Point-of-Sale & Inventory Management Android App",
                        badge: "Mobile App • Flutter",
                        badgeClass: "border-indigo-400/30 bg-indigo-500/15 text-indigo-300",
                        platform: "Android / Flutter",
                        deviceType: "mobile",
                        description: "Classkit is an Android point-of-sale (POS) and inventory management mobile application developed with Flutter. Specially crafted for school supply stores, campus kiosks, and stationers, Classkit streamlines cashier workflows when handling purchases for students and teachers. It features intuitive touch gestures, itemized cart management, real-time stock updates, and complete digital receipt generation.",
                        stats: {
                            platform: "Android (Flutter)",
                            architecture: "Stateful / Modular",
                            screens: "18 UI Designs",
                            type: "Mobile POS & Stock",
                        },
                        techStack: [
                            "Flutter",
                            "Dart",
                            "Firebase",
                            "Android Studio",
                            "Material Design 3",
                            "Touch Gestures",
                            "Local State Mgmt",
                        ],
                        features: [
                            "Intuitive Cashier Checkout: Visual supply catalog grid with real-time live search filtering and instant add-to-cart.",
                            "Smart Shopping Cart: Real-time calculation of line-item totals, quantity adjusters, and checkout validation prompt.",
                            "Tender & Change Calculation: Cash payment collection dialog calculating exact change and producing digital receipts.",
                            "Gesture-Driven Inventory: Swipe right to edit items, swipe left to delete items with safety dialogs to prevent mistakes.",
                            "Item Master Catalog: Quick-entry modal for Item ID, Name, Price, and initial Stock levels.",
                            "Authentication & Profile: User account registration, secure sign-in with Google OAuth support, password recovery, and sign-out controls.",
                        ],
                        deepDiveHeading: "Classkit Core Modules & Workflows",
                        deepDive: [
                            {
                                title: "Cashier POS Terminal & Cart Flow",
                                text: "Allows school store cashiers to rapidly browse inventory by category, search by product name, inspect unit prices and stock counts, increment quantities in the shopping cart, and proceed to checkout with instant change calculation.",
                            },
                            {
                                title: "Swipe-Action Inventory Management",
                                text: "Provides store managers with swift mobile-first inventory controls: swiping an item right triggers the Edit Item dialog, while swiping left opens the Confirm Delete prompt to safeguard against accidental record deletion.",
                            },
                            {
                                title: "Authentication, Recovery & Settings",
                                text: "Equipped with a custom splash screen, clean credential authentication, password recovery link dispatch, new user sign-up validation, and account profile controls.",
                            },
                        ],
                        screens: [
                            {
                                src: "image/classkit sd/1.png",
                                title: "01. Splash & Brand Welcome",
                                caption: "Application launch screen featuring minimalist Classkit branding and hourglass loading state.",
                            },
                            {
                                src: "image/classkit sd/2.png",
                                title: "02. Sign In Authentication",
                                caption: "Credential authentication with email/password inputs, forgot password link, and Google Sign-In button.",
                            },
                            {
                                src: "image/classkit sd/3.png",
                                title: "03. Account Password Recovery",
                                caption: "Password reset screen allowing registered users to request recovery links via email.",
                            },
                            {
                                src: "image/classkit sd/4.png",
                                title: "04. User Registration Screen",
                                caption: "New account creation form with email, password fields, password confirmation, and quick sign-in toggle.",
                            },
                            {
                                src: "image/classkit sd/5.png",
                                title: "05. Add Inventory Item Modal",
                                caption: "Popup modal for store managers to add new school supplies with Item ID, Name, Price, and initial Stock.",
                            },
                            {
                                src: "image/classkit sd/6.png",
                                title: "06. Inventory Item Directory",
                                caption: "Live inventory listing showing item prices, quantities in stock, and floating action button (+).",
                            },
                            {
                                src: "image/classkit sd/7.png",
                                title: "07. Swipe-to-Delete Gesture",
                                caption: "Interactive gesture reveal displaying red swipe background and trash icon for rapid item deletion.",
                            },
                            {
                                src: "image/classkit sd/8.png",
                                title: "08. Confirm Delete Dialog",
                                caption: "Safety confirmation dialog ensuring cashiers verify deletion of specific products (e.g. 'Pencil').",
                            },
                            {
                                src: "image/classkit sd/9.png",
                                title: "09. Swipe-to-Edit Gesture",
                                caption: "Interactive touch gesture uncovering blue edit action bar for fast item detail modification.",
                            },
                            {
                                src: "image/classkit sd/10.png",
                                title: "10. Edit Item Properties Dialog",
                                caption: "Update dialog allowing managers to revise item name, unit pricing, and current stock count.",
                            },
                            {
                                src: "image/classkit sd/11.png",
                                title: "11. POS Catalog Home",
                                caption: "Cashier workstation displaying available school supplies (Eraser, Ballpen, Paper, Pencil) in an easy-to-tap grid.",
                            },
                            {
                                src: "image/classkit sd/12.png",
                                title: "12. Live Search Filter & Cart Navigation",
                                caption: "Real-time search filtering supplies instantly, with direct shopping cart badge navigation.",
                            },
                            {
                                src: "image/classkit sd/13.png",
                                title: "13. Item Quick-View Dialog",
                                caption: "Detailed item popup showing unit price, current stock, and instant 'Add to Cart' trigger.",
                            },
                            {
                                src: "image/classkit sd/14.png",
                                title: "14. Shopping Cart Screen",
                                caption: "Cart view with item selection checkboxes, increment/decrement stepper controls, and active checkout button.",
                            },
                            {
                                src: "image/classkit sd/15.png",
                                title: "15. Checkout Confirmation Modal",
                                caption: "Order review dialog validating selected items and prompting cashier to proceed to payment.",
                            },
                            {
                                src: "image/classkit sd/16.png",
                                title: "16. Cash Payment Tender Dialog",
                                caption: "Cash entry modal showing total price and customer tender input field to compute change.",
                            },
                            {
                                src: "image/classkit sd/17.png",
                                title: "17. Itemized Digital Receipt",
                                caption: "Digital purchase summary showing item breakdown, quantity, total price, payment, and change.",
                            },
                            {
                                src: "image/classkit sd/18.png",
                                title: "18. Settings & User Profile",
                                caption: "Settings dashboard displaying the active cashier email and a clean sign-out action.",
                            },
                        ],
                    },
                    games: {
                        id: "games",
                        title: "Arcade Suite",
                        subtitle: "Visual Basic Desktop Games Collection",
                        badge: "Desktop Games • Visual Basic",
                        badgeClass: "border-fuchsia-400/30 bg-fuchsia-500/15 text-fuchsia-300",
                        platform: "Windows Desktop (.NET)",
                        deviceType: "desktop",
                        description: "Arcade Suite is a rich collection of desktop games developed in Visual Basic (.NET WinForms). Exploring core software engineering principles such as probability modeling, randomized number algorithms, state machine control, and virtual chips bankroll tracking, the project delivers 4 complete mini-games with customized loading screens, sound cues, and interactive desktop UI elements.",
                        stats: {
                            platform: "Windows (.NET WinForms)",
                            architecture: "Event-Driven / Timers",
                            screens: "9 UI Designs",
                            type: "Desktop Game Suite",
                        },
                        techStack: [
                            "Visual Basic (.NET)",
                            "Windows Forms",
                            "GDI+ Graphics",
                            "Event Timers",
                            "Random Number Generator",
                            "Bankroll Engine",
                        ],
                        features: [
                            "Arcade Hub Dashboard: Player profile with customizable username, persistent virtual chips balance, and game picker.",
                            "Toss the Coin: Heads-or-tails probability wagering game with bet sizing, card reveals, and automated payout calculations.",
                            "Jak En Poy (Rock-Paper-Scissors): Single-player duel against computer AI with rule comparison matrices and win-loss tallies.",
                            "Slot Machine: 3-reel randomized reel spin mechanics with payline matching and celebratory visual rewards.",
                            "Lucky Nine: Classic Filipino card table game summing card values modulo 10 to compete against dealer hands.",
                            "Custom Themed Transitions: Unique loading screens, timer progress bars, and responsive button feedback for each game.",
                        ],
                        deepDiveHeading: "Featured Games & Mechanics",
                        deepDive: [
                            {
                                title: "Coin Toss — Odds & Prediction",
                                text: "Simulates coin flips with virtual betting. Players choose Heads or Tails, set their wager from their chip balance, and win 1:1 payouts upon successful prediction.",
                            },
                            {
                                title: "Jak En Poy — Player vs Computer AI",
                                text: "Evaluates player choices against randomized CPU moves using classic RPS rule matrices. Features round scoreboards, chip stakes, and instant duel resolution.",
                            },
                            {
                                title: "Slot Machine — 3-Reel Randomized Spins",
                                text: "Employs timer-driven reel spinning animations and evaluates combinations across paylines. Matching symbols yield jackpot payouts credited directly to the player bankroll.",
                            },
                            {
                                title: "Lucky Nine — High-Stakes Card Showdown",
                                text: "Implements standard Lucky Nine rules where card values are summed modulo 10. The player compares hands against the computer dealer, with the score closest to 9 winning.",
                            },
                        ],
                        screens: [
                            {
                                src: "image/game sd/1.png",
                                title: "01. Color Arcade Hub & Main Menu",
                                caption: "Main dashboard displaying player username ('Mahiru Shiina'), chip bankroll (1000 Chips), and game selector menu.",
                            },
                            {
                                src: "image/game sd/2.png",
                                title: "02. Toss the Coin — Loading Screen",
                                caption: "Blue-themed loading screen with retro coin graphics and animated loading progress bar.",
                            },
                            {
                                src: "image/game sd/3.png",
                                title: "03. Toss the Coin — Gameplay Arena",
                                caption: "Interactive wagering console with bet input dropdown, card covers, and result reveal.",
                            },
                            {
                                src: "image/game sd/4.png",
                                title: "04. Jak En Poy — Loading Screen",
                                caption: "Warm orange title screen with rock-paper-scissors hand artwork and animated loading indicator.",
                            },
                            {
                                src: "image/game sd/5.png",
                                title: "05. Jak En Poy — AI Duel Arena",
                                caption: "Round arena comparing player selection against randomized computer choices to decide the winner.",
                            },
                            {
                                src: "image/game sd/6.png",
                                title: "06. Slot Machine — Loading Screen",
                                caption: "Vibrant coral red themed loading screen with classic 777 slot cabinet branding.",
                            },
                            {
                                src: "image/game sd/7.png",
                                title: "07. Slot Machine — 3-Reel Spins",
                                caption: "Interactive 3-reel slot layout with festive garland frame, bet inputs, and spin action trigger.",
                            },
                            {
                                src: "image/game sd/8.png",
                                title: "08. Lucky Nine — Loading Screen",
                                caption: "Rich green casino-table loading screen with vintage playing card illustrations.",
                            },
                            {
                                src: "image/game sd/9.png",
                                title: "09. Lucky Nine — Card Table Arena",
                                caption: "Full card showdown table tracking player cards vs enemy dealer cards with scoring boxes.",
                            },
                        ],
                    },
                    pos: {
                        id: "pos",
                        title: "Java POS & Inventory",
                        subtitle: "Retail Point-of-Sale & Stock Monitoring System",
                        badge: "Desktop System • Java",
                        badgeClass: "border-cyan-400/30 bg-cyan-500/15 text-cyan-300",
                        platform: "Cross-Platform Desktop (JVM)",
                        deviceType: "desktop",
                        description: "A desktop retail management software engineered in Java (Swing) for grocery stores and retail outlets (modeled for Secret Market Express). The application integrates cashier sales processing with a live inventory database, automatic re-order point calculations, customer discount handling, and receipt generation.",
                        stats: {
                            platform: "Cross-Platform (JVM)",
                            architecture: "Java Swing / MVC",
                            screens: "5 UI Designs",
                            type: "Enterprise Retail POS",
                        },
                        techStack: [
                            "Java (SE)",
                            "Java Swing / AWT",
                            "JTable Data Models",
                            "Event Handlers",
                            "Discount Logic",
                            "Receipt Formatter",
                        ],
                        features: [
                            "Dual-Module Dashboard: Single entry point cleanly branching into Point of Sale and Inventory Management.",
                            "Live Sales Register: Cashier terminal supporting invoice generation, item codes, quantity, and line-item totals.",
                            "Customer Discount Engine: Integrated radio buttons for Student (5%), Senior (20%), Regular (10%), and Employee (15%).",
                            "Instant Item Search: Fast popup item lookup with pricing, unit sizes, and current stock status.",
                            "Stock Alerts & Re-order Points: Visual indicators alerting staff of 'High Stocks' or 'Low Stocks' thresholds.",
                            "Formal Payment Receipt: Formatted printable receipt with store name, address, timestamp, tender, and change.",
                        ],
                        deepDiveHeading: "System Capabilities & Workflows",
                        deepDive: [
                            {
                                title: "Cashier Sales Register Terminal",
                                text: "Provides cashiers with an organized JTable showing item codes, product names, unit prices, sizes, and running totals. Supports quick item removal, customer discounts, and payment calculation.",
                            },
                            {
                                title: "Tiered Customer Discounts",
                                text: "Built-in discount engine that accurately recalculates subtotal and taxes based on customer eligibility: Student (5%), Senior Citizen (20%), Regular Customer (10%), and Staff (15%).",
                            },
                            {
                                title: "Inventory Master Ledger & Re-order Logic",
                                text: "Empowers store managers to track incoming shipments (Stock In), add new products, adjust pricing, and automatically identify products falling below critical re-order thresholds.",
                            },
                            {
                                title: "Printable Payment Receipt",
                                text: "Generates formatted paper-style receipts complete with store header ('Secret Market Express'), transaction timestamp, itemized breakdown, tender, and change.",
                            },
                        ],
                        screens: [
                            {
                                src: "image/pos sd/1.png",
                                title: "01. Main System Dashboard",
                                caption: "Minimalist navigation portal providing direct one-click access to Point Of Sale and Inventory modules.",
                            },
                            {
                                src: "image/pos sd/2.png",
                                title: "02. Sales Register Terminal",
                                caption: "Cashier transaction workstation with live invoice item table, quantity inputs, and tiered discount selector.",
                            },
                            {
                                src: "image/pos sd/3.png",
                                title: "03. Item Search & Stock Lookup",
                                caption: "Inventory search window displaying item codes, descriptions, prices, current stocks, and re-order remarks.",
                            },
                            {
                                src: "image/pos sd/4.png",
                                title: "04. Printable Payment Receipt",
                                caption: "Formatted receipt preview for Secret Market Express with date, itemized purchases, tender, and change.",
                            },
                            {
                                src: "image/pos sd/5.png",
                                title: "05. Inventory Master Console",
                                caption: "Central inventory control panel featuring Stock In, item management forms, and full stock ledger.",
                            },
                        ],
                    },
                };

                let currentProjectId = "classkit";
                let currentSlide = 0;
                let lastFocusedElement = null;
                let isLightboxOpen = false;

                // Render Carousel Slide
                const goToSlide = (slideIndex) => {
                    const project = PROJECTS_DATA[currentProjectId];
                    if (!project || !project.screens.length) return;

                    const total = project.screens.length;
                    currentSlide = (slideIndex + total) % total;
                    const screen = project.screens[currentSlide];

                    // Update counter & labels
                    if (counterEl) {
                        counterEl.textContent = `Screen ${currentSlide + 1} of ${total}`;
                    }
                    if (screenTitleEl) {
                        screenTitleEl.textContent = screen.title;
                    }
                    if (screenBadgeEl) {
                        screenBadgeEl.textContent = `Screen ${currentSlide + 1}/${total}`;
                    }
                    if (screenCaptionEl) {
                        screenCaptionEl.textContent = screen.caption;
                    }

                    // Update Image in appropriate device frame
                    if (project.deviceType === "mobile") {
                        if (mobileImg) {
                            mobileImg.style.opacity = "0.7";
                            mobileImg.src = screen.src;
                            mobileImg.alt = screen.title;
                            mobileImg.onload = () => {
                                mobileImg.style.opacity = "1";
                            };
                        }
                    } else {
                        if (desktopImg) {
                            desktopImg.style.opacity = "0.7";
                            desktopImg.src = screen.src;
                            desktopImg.alt = screen.title;
                            desktopImg.onload = () => {
                                desktopImg.style.opacity = "1";
                            };
                        }
                        if (desktopTitlebar) {
                            desktopTitlebar.textContent = `${project.title} — ${screen.title}`;
                        }
                    }

                    // Highlight Active Thumbnail & scroll into center
                    if (thumbnailsContainer) {
                        const thumbButtons = thumbnailsContainer.querySelectorAll(".carousel-thumb-btn");
                        thumbButtons.forEach((btn, idx) => {
                            if (idx === currentSlide) {
                                btn.classList.add("is-active");
                                btn.setAttribute("aria-current", "true");
                                btn.scrollIntoView({
                                    behavior: "smooth",
                                    inline: "center",
                                    block: "nearest",
                                });
                            } else {
                                btn.classList.remove("is-active");
                                btn.removeAttribute("aria-current");
                            }
                        });
                    }

                    // If lightbox is open, sync it too
                    if (isLightboxOpen) {
                        syncLightbox();
                    }
                };

                const nextSlide = () => goToSlide(currentSlide + 1);
                const prevSlide = () => goToSlide(currentSlide - 1);

                // Render Entire Project into Modal
                const renderProject = (projectId, initialSlide = 0) => {
                    const project = PROJECTS_DATA[projectId];
                    if (!project) return;

                    currentProjectId = projectId;

                    // Update Top Badges & Titles
                    if (badgeEl) {
                        badgeEl.textContent = project.badge;
                        badgeEl.className = `inline-flex items-center gap-1.5 rounded-full border px-3 py-0.5 text-xs font-semibold uppercase tracking-[0.2em] ${project.badgeClass}`;
                    }
                    if (platformEl) {
                        platformEl.textContent = project.platform;
                    }
                    if (titleEl) {
                        titleEl.textContent = project.title;
                    }
                    if (subtitleEl) {
                        subtitleEl.textContent = project.subtitle;
                    }
                    if (descriptionEl) {
                        descriptionEl.textContent = project.description;
                    }

                    // Update Stats
                    if (statPlatformEl) statPlatformEl.textContent = project.stats.platform;
                    if (statArchitectureEl) statArchitectureEl.textContent = project.stats.architecture;
                    if (statScreensEl) statScreensEl.textContent = project.stats.screens;
                    if (statTypeEl) statTypeEl.textContent = project.stats.type;

                    // Update Tech Stack
                    if (techStackEl) {
                        techStackEl.innerHTML = "";
                        project.techStack.forEach((tech) => {
                            const pill = document.createElement("span");
                            pill.className =
                                "rounded-xl border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-white/80 transition hover:bg-white/10";
                            pill.textContent = tech;
                            techStackEl.appendChild(pill);
                        });
                    }

                    // Update Features
                    if (featuresEl) {
                        featuresEl.innerHTML = "";
                        project.features.forEach((feat) => {
                            const li = document.createElement("li");
                            li.className = "flex items-start gap-2.5";
                            li.innerHTML = `
                                <span class="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-300 ring-1 ring-indigo-400/30">
                                    <svg class="h-2.5 w-2.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                                    </svg>
                                </span>
                                <span>${feat}</span>
                            `;
                            featuresEl.appendChild(li);
                        });
                    }

                    // Update Deep Dive Section
                    if (deepDiveHeadingEl) {
                        deepDiveHeadingEl.textContent = project.deepDiveHeading || "System Highlights";
                    }
                    if (deepDiveEl) {
                        deepDiveEl.innerHTML = "";
                        if (project.deepDive && project.deepDive.length) {
                            project.deepDive.forEach((item) => {
                                const card = document.createElement("div");
                                card.className = "rounded-2xl border border-white/10 bg-black/30 p-3.5";
                                card.innerHTML = `
                                    <h5 class="text-xs font-semibold text-white/90">${item.title}</h5>
                                    <p class="mt-1 text-xs leading-relaxed text-white/65">${item.text}</p>
                                `;
                                deepDiveEl.appendChild(card);
                            });
                        }
                    }

                    // Update Contact button link prefill
                    if (contactBtn) {
                        contactBtn.href = `#contact`;
                    }

                    // Toggle Device Mockup Frame
                    if (project.deviceType === "mobile") {
                        if (mobileWrapper) mobileWrapper.classList.remove("hidden");
                        if (desktopWrapper) desktopWrapper.classList.add("hidden");
                    } else {
                        if (mobileWrapper) mobileWrapper.classList.add("hidden");
                        if (desktopWrapper) desktopWrapper.classList.remove("hidden");
                    }

                    // Update Project Switcher Active Pills in Modal
                    projectSwitchButtons.forEach((btn) => {
                        const targetId = btn.getAttribute("data-switch-project");
                        if (targetId === projectId) {
                            btn.className =
                                "rounded-lg bg-indigo-500 px-2.5 py-1 text-xs font-semibold text-white shadow-sm transition";
                        } else {
                            btn.className =
                                "rounded-lg px-2.5 py-1 text-xs font-medium text-white/70 hover:text-white hover:bg-white/10 transition";
                        }
                    });

                    // Build Thumbnail Scrubber
                    if (thumbnailsContainer) {
                        thumbnailsContainer.innerHTML = "";
                        if (thumbCountEl) {
                            thumbCountEl.textContent = `${project.screens.length} screens • Click to select`;
                        }

                        project.screens.forEach((scr, idx) => {
                            const btn = document.createElement("button");
                            btn.type = "button";
                            btn.className =
                                "carousel-thumb-btn group relative h-16 w-16 sm:h-20 sm:w-20 shrink-0 overflow-hidden rounded-xl border border-white/15 bg-black/60 p-1 opacity-60 hover:opacity-100 hover:scale-105 transition focus:outline-none focus:ring-2 focus:ring-indigo-400";
                            btn.setAttribute("aria-label", `View screen ${idx + 1}: ${scr.title}`);

                            btn.innerHTML = `
                                <img src="${scr.src}" alt="${scr.title}" class="h-full w-full object-contain rounded-lg pointer-events-none" loading="lazy" />
                                <span class="absolute bottom-1 right-1 rounded-md bg-black/80 px-1 font-mono text-[9px] font-semibold text-white/90 pointer-events-none">
                                    ${idx + 1}
                                </span>
                            `;

                            btn.addEventListener("click", () => {
                                goToSlide(idx);
                            });

                            thumbnailsContainer.appendChild(btn);
                        });
                    }

                    // Render First Slide
                    goToSlide(initialSlide);
                };

                // Open Modal
                const openModal = (projectId = "classkit", initialSlide = 0, triggerButton = null) => {
                    lastFocusedElement = triggerButton;
                    renderProject(projectId, initialSlide);

                    modal.classList.remove("hidden", "pointer-events-none", "opacity-0");
                    modal.classList.add("flex");
                    modal.setAttribute("aria-hidden", "false");
                    document.body.style.overflow = "hidden";

                    const closeBtn = modal.querySelector("[data-project-close]");
                    if (closeBtn) closeBtn.focus();
                };

                // Close Modal
                const closeModal = () => {
                    if (isLightboxOpen) {
                        closeLightbox();
                        return;
                    }
                    modal.classList.add("hidden", "pointer-events-none", "opacity-0");
                    modal.classList.remove("flex");
                    modal.setAttribute("aria-hidden", "true");
                    document.body.style.overflow = "";

                    if (lastFocusedElement instanceof HTMLElement) {
                        lastFocusedElement.focus();
                    }
                };

                // Lightbox Handling
                const syncLightbox = () => {
                    if (!lightboxModal) return;
                    const project = PROJECTS_DATA[currentProjectId];
                    if (!project) return;
                    const screen = project.screens[currentSlide];
                    if (lightboxImg) {
                        lightboxImg.src = screen.src;
                        lightboxImg.alt = screen.title;
                    }
                    if (lightboxTitle) {
                        lightboxTitle.textContent = `${screen.title} (${currentSlide + 1} of ${project.screens.length})`;
                    }
                    if (lightboxCaption) {
                        lightboxCaption.textContent = screen.caption;
                    }
                };

                const openLightbox = () => {
                    if (!lightboxModal) return;
                    isLightboxOpen = true;
                    syncLightbox();
                    lightboxModal.classList.remove("hidden", "pointer-events-none", "opacity-0");
                    lightboxModal.classList.add("flex");
                    lightboxModal.setAttribute("aria-hidden", "false");
                    if (lightboxCloseBtn) lightboxCloseBtn.focus();
                };

                const closeLightbox = () => {
                    if (!lightboxModal) return;
                    isLightboxOpen = false;
                    lightboxModal.classList.add("hidden", "pointer-events-none", "opacity-0");
                    lightboxModal.classList.remove("flex");
                    lightboxModal.setAttribute("aria-hidden", "true");
                    if (zoomBtn) zoomBtn.focus();
                };

                // Carousel Buttons & Gestures
                if (prevBtn) prevBtn.addEventListener("click", prevSlide);
                if (nextBtn) nextBtn.addEventListener("click", nextSlide);
                if (zoomBtn) zoomBtn.addEventListener("click", openLightbox);

                if (mobileImg) mobileImg.addEventListener("click", openLightbox);
                if (desktopImg) desktopImg.addEventListener("click", openLightbox);

                if (lightboxPrevBtn) lightboxPrevBtn.addEventListener("click", prevSlide);
                if (lightboxNextBtn) lightboxNextBtn.addEventListener("click", nextSlide);
                if (lightboxCloseBtn) lightboxCloseBtn.addEventListener("click", closeLightbox);

                // Touch Swipe on Stage
                if (carouselStage) {
                    let touchStartX = 0;
                    let touchStartY = 0;

                    carouselStage.addEventListener(
                        "touchstart",
                        (e) => {
                            if (e.touches.length === 1) {
                                touchStartX = e.touches[0].clientX;
                                touchStartY = e.touches[0].clientY;
                            }
                        },
                        { passive: true }
                    );

                    carouselStage.addEventListener(
                        "touchend",
                        (e) => {
                            if (e.changedTouches.length === 1) {
                                const deltaX = e.changedTouches[0].clientX - touchStartX;
                                const deltaY = e.changedTouches[0].clientY - touchStartY;
                                if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY)) {
                                    if (deltaX < 0) {
                                        nextSlide();
                                    } else {
                                        prevSlide();
                                    }
                                }
                            }
                        },
                        { passive: true }
                    );
                }

                // Touch Swipe on Lightbox
                if (lightboxModal) {
                    let lbTouchStartX = 0;
                    lightboxModal.addEventListener(
                        "touchstart",
                        (e) => {
                            if (e.touches.length === 1) {
                                lbTouchStartX = e.touches[0].clientX;
                            }
                        },
                        { passive: true }
                    );

                    lightboxModal.addEventListener(
                        "touchend",
                        (e) => {
                            if (e.changedTouches.length === 1) {
                                const deltaX = e.changedTouches[0].clientX - lbTouchStartX;
                                if (Math.abs(deltaX) > 40) {
                                    if (deltaX < 0) {
                                        nextSlide();
                                    } else {
                                        prevSlide();
                                    }
                                }
                            }
                        },
                        { passive: true }
                    );

                    lightboxModal.addEventListener("click", (e) => {
                        if (e.target === lightboxModal) {
                            closeLightbox();
                        }
                    });
                }

                // Project Category Filtering
                const filterButtons = hostEl.querySelectorAll("[data-project-filter]");
                const projectCardItems = hostEl.querySelectorAll("[data-project-card]");

                filterButtons.forEach((btn) => {
                    btn.addEventListener("click", () => {
                        const filter = btn.getAttribute("data-project-filter");

                        filterButtons.forEach((b) => {
                            const isActive = b === btn;
                            b.setAttribute("aria-pressed", String(isActive));
                            if (isActive) {
                                b.className =
                                    "project-filter-btn rounded-xl bg-indigo-500 px-3.5 py-1.5 text-xs font-semibold text-white shadow-soft transition";
                            } else {
                                b.className =
                                    "project-filter-btn rounded-xl border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/70 hover:bg-white/10 hover:text-white transition";
                            }
                        });

                        projectCardItems.forEach((card) => {
                            const cardCategory = card.getAttribute("data-project-card");
                            const match = filter === "all" || cardCategory === filter;
                            if (match) {
                                card.classList.remove("is-filtered-out");
                                card.style.opacity = "0";
                                card.style.transform = "translateY(8px)";
                                setTimeout(() => {
                                    card.style.opacity = "1";
                                    card.style.transform = "translateY(0)";
                                }, 30);
                            } else {
                                card.classList.add("is-filtered-out");
                            }
                        });
                    });
                });

                // Project Inquiry Links on Cards
                const projectInquireLinks = hostEl.querySelectorAll("[data-project-inquire]");
                projectInquireLinks.forEach((link) => {
                    link.addEventListener("click", () => {
                        const targetId = link.getAttribute("data-project-inquire");
                        const project = PROJECTS_DATA[targetId];
                        if (project) {
                            setEmailInquiry(
                                `Inquiry regarding ${project.title}`,
                                `Hi Sean,\n\nI am interested in discussing your ${project.title} (${project.platform}) project.\n\nBest regards,`
                            );
                        }
                    });
                });

                // Project Overview Trigger Buttons
                overviewButtons.forEach((button) => {
                    button.addEventListener("click", (event) => {
                        event.preventDefault();
                        const projectId = button.getAttribute("data-project-id") || "classkit";
                        openModal(projectId, 0, button);
                    });
                });

                // In-Modal Project Switcher
                projectSwitchButtons.forEach((button) => {
                    button.addEventListener("click", () => {
                        const targetId = button.getAttribute("data-switch-project");
                        if (targetId && targetId !== currentProjectId) {
                            renderProject(targetId, 0);
                        }
                    });
                });

                // Modal Inquire Contact Button
                if (contactBtn) {
                    contactBtn.addEventListener("click", () => {
                        const project = PROJECTS_DATA[currentProjectId];
                        if (project) {
                            setEmailInquiry(
                                `Inquiry regarding ${project.title}`,
                                `Hi Sean,\n\nI reviewed your ${project.title} project in your portfolio and would like to discuss it.\n\nBest regards,`
                            );
                        }
                        closeModal();
                    });
                }

                // Close Buttons
                closeButtons.forEach((btn) => {
                    btn.addEventListener("click", closeModal);
                });

                // Click outside modal dialog to close
                modal.addEventListener("click", (event) => {
                    if (event.target === modal) {
                        closeModal();
                    }
                });

                // Accessible CV / Resume Modal Controller
                const resumeModal = hostEl.querySelector("#resume-modal");
                const resumeCloseButtons = hostEl.querySelectorAll("[data-resume-close]");
                const resumePrintBtns = [
                    hostEl.querySelector("#resumePrintBtn"),
                    hostEl.querySelector("#resumePrintBtnBottom"),
                ].filter(Boolean);
                const resumeContactBtn = hostEl.querySelector("[data-resume-contact]");

                let isResumeOpen = false;

                const openResumeModal = () => {
                    if (!resumeModal) return;
                    isResumeOpen = true;
                    resumeModal.classList.remove("hidden", "pointer-events-none", "opacity-0");
                    resumeModal.classList.add("flex");
                    resumeModal.setAttribute("aria-hidden", "false");
                    document.body.style.overflow = "hidden";

                    const firstClose = resumeModal.querySelector("[data-resume-close]");
                    if (firstClose) firstClose.focus();
                };

                const closeResumeModal = () => {
                    if (!resumeModal) return;
                    isResumeOpen = false;
                    resumeModal.classList.add("hidden", "pointer-events-none", "opacity-0");
                    resumeModal.classList.remove("flex");
                    resumeModal.setAttribute("aria-hidden", "true");
                    document.body.style.overflow = "";
                };

                // Delegate clicks to any [data-open-resume] on document (desktop header, mobile drawer, hero)
                document.addEventListener("click", (e) => {
                    const trigger = e.target.closest("[data-open-resume]");
                    if (trigger) {
                        e.preventDefault();
                        openResumeModal();
                    }
                });

                resumeCloseButtons.forEach((btn) => {
                    btn.addEventListener("click", closeResumeModal);
                });

                if (resumeModal) {
                    resumeModal.addEventListener("click", (e) => {
                        if (e.target === resumeModal) {
                            closeResumeModal();
                        }
                    });
                }

                resumePrintBtns.forEach((btn) => {
                    btn.addEventListener("click", () => {
                        window.print();
                    });
                });

                if (resumeContactBtn) {
                    resumeContactBtn.addEventListener("click", () => {
                        closeResumeModal();
                    });
                }

                // Focus Trap Helper
                const getFocusableElements = () =>
                    Array.from(
                        modal.querySelectorAll(
                            'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
                        )
                    ).filter((element) => !element.hasAttribute("hidden") && element.offsetParent !== null);

                const trapFocus = (event) => {
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

                // Global Keyboard Navigation (Arrows & Escape)
                const handleKeyDown = (event) => {
                    // Resume modal handles first
                    if (isResumeOpen) {
                        if (event.key === "Escape") {
                            event.preventDefault();
                            closeResumeModal();
                            return;
                        }
                    }

                    // Lightbox handles second
                    if (isLightboxOpen) {
                        if (event.key === "Escape") {
                            event.preventDefault();
                            closeLightbox();
                            return;
                        }
                        if (event.key === "ArrowLeft") {
                            event.preventDefault();
                            prevSlide();
                            return;
                        }
                        if (event.key === "ArrowRight") {
                            event.preventDefault();
                            nextSlide();
                            return;
                        }
                    }

                    // Project overview modal handles third
                    if (modal.getAttribute("aria-hidden") === "false") {
                        if (event.key === "Escape") {
                            event.preventDefault();
                            closeModal();
                            return;
                        }
                        if (event.key === "ArrowLeft") {
                            event.preventDefault();
                            prevSlide();
                            return;
                        }
                        if (event.key === "ArrowRight") {
                            event.preventDefault();
                            nextSlide();
                            return;
                        }
                        trapFocus(event);
                    }
                };

                dialog.setAttribute("tabindex", "-1");
                document.addEventListener("keydown", handleKeyDown);
            },
        });
    }
}
customElements.define("main-section", MainSection);
