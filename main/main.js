const MAIN_FRAGMENT_HTML = `<main id="home" class="relative">
  <!-- Hero -->
  <section class="mx-auto max-w-6xl px-4 pt-16 md:pt-24">
    <div class="grid items-center gap-10 md:grid-cols-12">
      <div class="md:col-span-7">
        <div class="reveal">
          <p
            class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75"
          >
            <span class="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            Available for Freelance + Part Time + Full Time
          </p>
        </div>
        <h1
          class="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-6xl reveal"
        >
          Entry-level developer.
          <span
            class="block bg-gradient-to-r from-indigo-300 via-fuchsia-300 to-cyan-200 bg-clip-text text-transparent"
          >
            Ready to build and ship.
          </span>
        </h1>
        <p class="mt-4 max-w-xl text-white/70 leading-relaxed reveal">
          IT graduate with hands-on project delivery across Flutter, Java, and Visual Basic applications, backed by strong fundamentals in object-oriented programming, databases, and clean software design.
        </p>
        <div class="mt-7 flex flex-wrap gap-3 reveal">
          <a
            href="#projects"
            class="inline-flex items-center justify-center rounded-xl bg-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-soft ring-1 ring-indigo-400/30 hover:bg-indigo-400 transition"
          >
            View projects
          </a>
          <button
            type="button"
            data-open-resume
            class="inline-flex items-center justify-center gap-2 rounded-xl border border-indigo-400/30 bg-indigo-500/10 px-5 py-3 text-sm font-semibold text-indigo-300 hover:bg-indigo-500/20 hover:text-white transition"
          >
            <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            <span>View CV / Resume</span>
          </button>
          <a
            href="#contact"
            class="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 transition"
          >
            Contact me
          </a>
        </div>
        <div class="mt-9 grid grid-cols-2 gap-3 max-w-md sm:grid-cols-3 reveal">
          <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p class="text-lg font-semibold">3+</p>
            <p class="text-xs text-white/60">Projects</p>
          </div>
          <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p class="text-lg font-semibold">Fast</p>
            <p class="text-xs text-white/60">Learner and problem-solver</p>
          </div>
          <div class="col-span-2 rounded-2xl border border-white/10 bg-white/5 p-4 sm:col-span-1">
            <p class="text-lg font-semibold">Hands-on</p>
            <p class="text-xs text-white/60">Practical coding experience</p>
          </div>
        </div>
      </div>
      <div class="md:col-span-5">
        <div class="reveal">
          <div
            class="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-soft"
          >
            <div
              class="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/10 to-cyan-400/10"
            ></div>
            <div class="relative p-6">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <span class="h-2.5 w-2.5 rounded-full bg-red-400/90"></span>
                  <span class="h-2.5 w-2.5 rounded-full bg-amber-400/90"></span>
                  <span
                    class="h-2.5 w-2.5 rounded-full bg-emerald-400/90"
                  ></span>
                </div>
                <span class="text-xs text-white/60">Preview</span>
              </div>
              <div
                class="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4"
              >
                <div class="flex items-center justify-between">
                  <p class="text-sm font-semibold">Developer Snapshot</p>
                  <span
                    class="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70"
                    >Portfolio</span
                  >
                </div>
                <div class="mt-4 grid gap-3">
                  <div
                    class="rounded-xl border border-white/10 bg-white/5 p-3 floaty"
                  >
                    <div class="h-2 w-2/3 rounded bg-white/30"></div>
                    <div class="mt-3 h-2 w-1/2 rounded bg-white/20"></div>
                  </div>
                  <div
                    class="rounded-xl border border-white/10 bg-white/5 p-3 floaty"
                    style="animation-delay: 140ms"
                  >
                    <div class="h-2 w-3/5 rounded bg-white/30"></div>
                    <div class="mt-3 h-2 w-2/3 rounded bg-white/20"></div>
                  </div>
                </div>
              </div>
              <div class="mt-4 flex flex-wrap items-center gap-3 text-xs text-white/60">
                <span class="inline-flex items-center gap-2">
                  <span class="h-1.5 w-1.5 rounded-full bg-indigo-300"></span>
                  Android Developer
                </span>
                <span class="inline-flex items-center gap-2">
                  <span class="h-1.5 w-1.5 rounded-full bg-fuchsia-300"></span>
                  Web Developer
                </span>
                <span class="inline-flex items-center gap-2">
                  <span class="h-1.5 w-1.5 rounded-full bg-cyan-300"></span>
                  Desktop Developer
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Projects -->
  <section id="projects" class="mx-auto max-w-6xl px-4 pt-16">
    <div class="reveal">
      <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 class="text-2xl font-semibold tracking-tight">Projects</h2>
          <p class="mt-2 text-sm text-white/70">A few clean, focused builds.</p>
        </div>
        <a
          class="text-sm text-white/70 hover:text-white transition self-start sm:self-auto"
          href="#contact"
          >Let&apos;s build yours</a
        >
      </div>

      <!-- Project Category Filter Tabs -->
      <div class="mt-6 flex flex-wrap items-center gap-2" role="tablist" aria-label="Project category filter">
        <span class="text-xs text-white/50 mr-1">Filter:</span>
        <button
          type="button"
          data-project-filter="all"
          class="project-filter-btn rounded-xl bg-indigo-500 px-3.5 py-1.5 text-xs font-semibold text-white shadow-soft transition"
          aria-pressed="true"
        >
          All Projects (3)
        </button>
        <button
          type="button"
          data-project-filter="mobile"
          class="project-filter-btn rounded-xl border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/70 hover:bg-white/10 hover:text-white transition"
          aria-pressed="false"
        >
          Mobile / Flutter (1)
        </button>
        <button
          type="button"
          data-project-filter="desktop"
          class="project-filter-btn rounded-xl border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/70 hover:bg-white/10 hover:text-white transition"
          aria-pressed="false"
        >
          Desktop (.NET &amp; Java) (2)
        </button>
      </div>
    </div>
    <div id="projectCardsGrid" class="mt-8 grid gap-5 md:grid-cols-3">
      <!-- Card 1: Classkit -->
      <article
        data-project-card="mobile"
        class="project-card-item reveal flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/8 hover:border-white/15"
      >
        <div class="flex items-start justify-between gap-3">
          <div>
            <h3 class="text-lg font-semibold">Classkit</h3>
            <p class="mt-2 text-sm text-white/70">
              A Flutter-based Android point-of-sale (POS) application for
              school supply stores, built to handle purchases, inventory, and a
              simple checkout flow.
            </p>
          </div>
          <span
            class="rounded-full bg-indigo-500/20 px-3 py-1 text-xs text-indigo-200 ring-1 ring-indigo-400/20"
          >
            Mobile
          </span>
        </div>

        <!-- Interactive Screen Preview Banner -->
        <button
          type="button"
          data-project-overview
          data-project-id="classkit"
          class="group mt-4 relative block w-full overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-2.5 text-left transition hover:border-indigo-400/50 hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          aria-label="Open Classkit screen design carousel"
        >
          <div class="flex items-center justify-between mb-2 px-1">
            <span class="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-300">
              <span class="h-1.5 w-1.5 rounded-full bg-indigo-400"></span>
              18 Screens Carousel
            </span>
            <span class="text-[11px] text-white/50 group-hover:text-white transition">Click to view &rarr;</span>
          </div>
          <div class="flex items-center justify-center rounded-xl bg-zinc-900/80 p-2 h-44 overflow-hidden">
            <img
              src="image/classkit sd/11.png"
              alt="Classkit POS Screen Preview"
              class="h-full object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        </button>

        <ul class="mt-4 flex-1 space-y-2 text-sm text-white/70">
          <li class="flex gap-2">
            <span class="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-300"></span>
            Supports student and teacher purchase transactions
          </li>
          <li class="flex gap-2">
            <span class="mt-1.5 h-1.5 w-1.5 rounded-full bg-fuchsia-300"></span>
            Manages notebooks, pens, uniforms, and other school items
          </li>
          <li class="flex gap-2">
            <span class="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-300"></span>
            Includes a simple shopping cart and checkout process
          </li>
        </ul>
        <div class="mt-5 flex flex-wrap items-center gap-3 pt-2">
          <a
            class="text-sm font-semibold text-indigo-300 hover:text-indigo-200 transition inline-flex items-center gap-1"
            href="#project-overview-modal"
            data-project-overview
            data-project-id="classkit"
            >Project overview &rarr;</a
          >
          <span class="text-xs text-white/40">|</span>
          <a
            class="text-sm font-semibold text-white/90 hover:text-white transition"
            href="#contact"
            data-project-inquire="classkit"
            >Ask for code</a
          >
        </div>
      </article>

      <!-- Card 2: Games -->
      <article
        data-project-card="desktop"
        class="project-card-item reveal flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/8 hover:border-white/15"
      >
        <div class="flex items-start justify-between gap-3">
          <div>
            <h3 class="text-lg font-semibold">Games</h3>
            <p class="mt-2 text-sm text-white/70">
              A collection of Visual Basic desktop games featuring chance,
              strategy, card, and slot-style mechanics with score tracking and
              interactive UI elements.
            </p>
          </div>
          <span
            class="rounded-full bg-fuchsia-500/20 px-3 py-1 text-xs text-fuchsia-200 ring-1 ring-fuchsia-400/20"
          >
            Desktop
          </span>
        </div>

        <!-- Interactive Screen Preview Banner -->
        <button
          type="button"
          data-project-overview
          data-project-id="games"
          class="group mt-4 relative block w-full overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-2.5 text-left transition hover:border-fuchsia-400/50 hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
          aria-label="Open Visual Basic Games screen design carousel"
        >
          <div class="flex items-center justify-between mb-2 px-1">
            <span class="inline-flex items-center gap-1.5 text-xs font-medium text-fuchsia-300">
              <span class="h-1.5 w-1.5 rounded-full bg-fuchsia-400"></span>
              9 Screens Carousel
            </span>
            <span class="text-[11px] text-white/50 group-hover:text-white transition">Click to view &rarr;</span>
          </div>
          <div class="flex items-center justify-center rounded-xl bg-zinc-900/80 p-2 h-44 overflow-hidden">
            <img
              src="image/game sd/1.png"
              alt="Visual Basic Games Menu Preview"
              class="h-full object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        </button>

        <ul class="mt-4 flex-1 space-y-2 text-sm text-white/70">
          <li class="flex gap-2">
            <span class="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-300"></span>
            Includes Coin Toss, Jack Enpoy, Slot Machine, and Lucky Nine
          </li>
          <li class="flex gap-2">
            <span class="mt-1.5 h-1.5 w-1.5 rounded-full bg-fuchsia-300"></span>
            Uses randomness, scoring, and decision-based game logic
          </li>
          <li class="flex gap-2">
            <span class="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-300"></span>
            Built with buttons, labels, picture boxes, and timers
          </li>
        </ul>
        <div class="mt-5 flex flex-wrap items-center gap-3 pt-2">
          <a
            class="text-sm font-semibold text-fuchsia-300 hover:text-fuchsia-200 transition inline-flex items-center gap-1"
            href="#project-overview-modal"
            data-project-overview
            data-project-id="games"
            >Game details &rarr;</a
          >
          <span class="text-xs text-white/40">|</span>
          <a
            class="text-sm font-semibold text-white/90 hover:text-white transition"
            href="#contact"
            data-project-inquire="games"
            >Contact</a
          >
        </div>
      </article>

      <!-- Card 3: POS & Inventory -->
      <article
        data-project-card="desktop"
        class="project-card-item reveal flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/8 hover:border-white/15"
      >
        <div class="flex items-start justify-between gap-3">
          <div>
            <h3 class="text-lg font-semibold">POS &amp; Inventory</h3>
            <p class="mt-2 text-sm text-white/70">
              Point-of-sale and inventory system built in Java to manage sales,
              stock monitoring, and product records.
            </p>
          </div>
          <span
            class="rounded-full bg-cyan-500/20 px-3 py-1 text-xs text-cyan-200 ring-1 ring-cyan-400/20"
          >
            System
          </span>
        </div>

        <!-- Interactive Screen Preview Banner -->
        <button
          type="button"
          data-project-overview
          data-project-id="pos"
          class="group mt-4 relative block w-full overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-2.5 text-left transition hover:border-cyan-400/50 hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          aria-label="Open Java POS and Inventory screen design carousel"
        >
          <div class="flex items-center justify-between mb-2 px-1">
            <span class="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-300">
              <span class="h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
              5 Screens Carousel
            </span>
            <span class="text-[11px] text-white/50 group-hover:text-white transition">Click to view &rarr;</span>
          </div>
          <div class="flex items-center justify-center rounded-xl bg-zinc-900/80 p-2 h-44 overflow-hidden">
            <img
              src="image/pos sd/2.png"
              alt="Java POS Register Preview"
              class="h-full object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        </button>

        <ul class="mt-4 flex-1 space-y-2 text-sm text-white/70">
          <li class="flex gap-2">
            <span class="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-300"></span>
            Sales transaction and receipt handling
          </li>
          <li class="flex gap-2">
            <span class="mt-1.5 h-1.5 w-1.5 rounded-full bg-fuchsia-300"></span>
            Inventory tracking and stock updates
          </li>
          <li class="flex gap-2">
            <span class="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-300"></span>
            Organized product and record management
          </li>
        </ul>
        <div class="mt-5 flex flex-wrap items-center gap-3 pt-2">
          <a
            class="text-sm font-semibold text-cyan-300 hover:text-cyan-200 transition inline-flex items-center gap-1"
            href="#project-overview-modal"
            data-project-overview
            data-project-id="pos"
            >System summary &rarr;</a
          >
          <span class="text-xs text-white/40">|</span>
          <a
            class="text-sm font-semibold text-white/90 hover:text-white transition"
            href="#contact"
            data-project-inquire="pos"
            >Build similar</a
          >
        </div>
      </article>
    </div>

    <!-- Refactored Project Overview Modal with Screen Carousel -->
    <div
      id="project-overview-modal"
      class="pointer-events-none fixed inset-0 z-50 hidden items-center justify-center overflow-y-auto bg-black/80 backdrop-blur-md p-3 sm:p-5 md:p-8 opacity-0 transition duration-300"
      aria-hidden="true"
    >
      <div
        class="modal-scroll relative w-full max-w-5xl rounded-3xl border border-white/10 bg-zinc-950 p-4 sm:p-7 md:p-8 shadow-2xl ring-1 ring-white/10 max-h-[92vh] overflow-y-auto overflow-x-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="projectOverviewTitle"
        aria-describedby="projectOverviewDescription"
      >
        <!-- Ambient radial glow -->
        <div class="pointer-events-none absolute -top-24 -right-24 -z-10 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl"></div>
        <div class="pointer-events-none absolute -bottom-24 -left-24 -z-10 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl"></div>

        <!-- Modal Top Bar -->
        <div class="flex items-start justify-between gap-3 border-b border-white/10 pb-5">
          <div class="min-w-0 flex-1 space-y-1.5">
            <div class="flex flex-wrap items-center gap-2">
              <span
                id="projectOverviewBadge"
                class="inline-flex items-center gap-1.5 rounded-full border border-indigo-400/30 bg-indigo-500/15 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-indigo-300 sm:text-xs sm:tracking-[0.2em]"
              >
                Mobile Application
              </span>
              <span
                id="projectOverviewPlatform"
                class="rounded-full bg-white/5 px-2.5 py-0.5 text-xs text-white/60"
              >
                Android / Flutter
              </span>
            </div>
            <h3
              id="projectOverviewTitle"
              class="break-words text-2xl font-bold tracking-tight text-white sm:text-3xl"
            >
              Classkit
            </h3>
            <p
              id="projectOverviewSubtitle"
              class="text-sm text-white/65"
            >
              Flutter Point-of-Sale &amp; Inventory App
            </p>
          </div>

          <div class="flex shrink-0 items-center gap-2">
            <!-- Project Switcher Tabs -->
            <div class="hidden md:flex items-center rounded-xl border border-white/10 bg-white/5 p-1 gap-1">
              <button
                type="button"
                data-switch-project="classkit"
                class="rounded-lg px-2.5 py-1 text-xs font-medium text-white/70 hover:text-white hover:bg-white/10 transition"
              >
                Classkit
              </button>
              <button
                type="button"
                data-switch-project="games"
                class="rounded-lg px-2.5 py-1 text-xs font-medium text-white/70 hover:text-white hover:bg-white/10 transition"
              >
                Games
              </button>
              <button
                type="button"
                data-switch-project="pos"
                class="rounded-lg px-2.5 py-1 text-xs font-medium text-white/70 hover:text-white hover:bg-white/10 transition"
              >
                POS &amp; Inventory
              </button>
            </div>

            <!-- Close Button -->
            <button
              type="button"
              data-project-close
              class="inline-flex h-10 w-10 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white sm:h-auto sm:w-auto sm:px-3.5 sm:py-2"
              aria-label="Close project modal"
            >
              <span class="hidden font-mono text-[11px] text-white/40 uppercase sm:inline-block border border-white/15 px-1.5 py-0.5 rounded">ESC</span>
              <span class="hidden sm:inline">Close</span>
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Main Content Area: 2 Columns on Desktop -->
        <div class="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8 items-start">
          
          <!-- LEFT COLUMN: CAROUSEL SHOWCASE (7 Cols) -->
          <div class="min-w-0 lg:col-span-7 flex flex-col gap-4">
            
            <!-- Carousel Display Stage -->
            <div
              id="carouselStage"
              class="relative flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-black/60 px-3 pt-14 pb-16 sm:p-6 min-h-[380px] sm:min-h-[460px] overflow-hidden group select-none"
            >
              <!-- Subtle stage grid pattern -->
              <div class="absolute inset-0 bg-grid opacity-30 pointer-events-none"></div>

              <!-- Top floating stage controls -->
              <div class="absolute top-3 left-3 right-3 z-30 flex items-center justify-between pointer-events-none">
                <button
                  type="button"
                  id="carouselZoomBtn"
                  class="pointer-events-auto inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/75 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur hover:bg-white/20 hover:text-white transition shadow-md"
                  title="Enlarge screen preview"
                >
                  <svg class="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"/>
                  </svg>
                  <span>Enlarge</span>
                </button>

                <div
                  id="carouselCounter"
                  class="pointer-events-auto inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/75 px-3 py-1 font-mono text-xs font-semibold text-indigo-200 backdrop-blur shadow-md"
                >
                  Screen 1 of 18
                </div>
              </div>

              <!-- Left / Right Navigation Buttons -->
              <button
                type="button"
                id="carouselPrevBtn"
                class="absolute bottom-3 left-3 translate-y-0 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 z-30 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-white/20 bg-black/80 text-white backdrop-blur transition hover:bg-indigo-600 hover:border-indigo-400 hover:scale-105 active:scale-95 shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                aria-label="Previous screen"
              >
                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"/>
                </svg>
              </button>

              <button
                type="button"
                id="carouselNextBtn"
                class="absolute bottom-3 right-3 translate-y-0 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 z-30 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-white/20 bg-black/80 text-white backdrop-blur transition hover:bg-indigo-600 hover:border-indigo-400 hover:scale-105 active:scale-95 shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                aria-label="Next screen"
              >
                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/>
                </svg>
              </button>

              <!-- Device Mockup Viewports -->
              
              <!-- 1. Mobile Phone Frame (Classkit) -->
              <div
                id="carouselMobileWrapper"
                class="relative mx-auto my-auto transition-all duration-300 flex flex-col items-center"
              >
                <div class="phone-mockup-frame relative rounded-[2.3rem] border-[3px] border-zinc-700 bg-zinc-900 p-2 shadow-2xl ring-1 ring-white/15 max-w-[240px] sm:max-w-[270px]">
                  <!-- Camera pill -->
                  <div class="mx-auto mb-1.5 h-3 w-16 rounded-full bg-black/90 flex items-center justify-center">
                    <span class="h-1.5 w-1.5 rounded-full bg-zinc-800"></span>
                  </div>
                  <!-- Mobile Screen Image -->
                  <img
                    id="carouselMobileImg"
                    src="image/classkit sd/1.png"
                    alt="Classkit Screen"
                    class="rounded-[1.6rem] object-contain w-full max-h-[360px] sm:max-h-[410px] cursor-zoom-in transition-opacity duration-200"
                    loading="lazy"
                  />
                </div>
              </div>

              <!-- 2. Desktop Window Frame (Games & Java POS) -->
              <div
                id="carouselDesktopWrapper"
                class="hidden relative w-full max-w-[540px] mx-auto my-auto transition-all duration-300"
              >
                <div class="desktop-mockup-frame rounded-2xl border border-zinc-700/80 bg-zinc-900 shadow-2xl ring-1 ring-white/15 overflow-hidden">
                  <!-- Desktop Window Titlebar -->
                  <div class="flex items-center justify-between border-b border-white/10 bg-zinc-950/80 px-3 py-2 sm:px-4 sm:py-2.5">
                    <div class="flex shrink-0 items-center gap-2">
                      <span class="h-2.5 w-2.5 rounded-full bg-red-500/80"></span>
                      <span class="h-2.5 w-2.5 rounded-full bg-amber-500/80"></span>
                      <span class="h-2.5 w-2.5 rounded-full bg-emerald-500/80"></span>
                    </div>
                    <span
                      id="carouselDesktopTitlebar"
                      class="min-w-0 flex-1 truncate px-2 text-center font-mono text-[10px] text-white/50 sm:text-[11px]"
                    >
                      Desktop Application Window
                    </span>
                    <div class="hidden w-8 shrink-0 sm:block"></div>
                  </div>
                  <!-- Desktop Screen Image -->
                  <div class="bg-black/60 p-1.5 sm:p-2 flex items-center justify-center min-h-[160px] sm:min-h-[320px]">
                    <img
                      id="carouselDesktopImg"
                      src="image/game sd/1.png"
                      alt="Desktop Screen"
                      class="rounded-lg object-contain w-full max-h-[320px] sm:max-h-[380px] cursor-zoom-in transition-opacity duration-200"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

            </div>

            <!-- Active Screen Caption Card -->
            <div class="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <div class="flex items-start justify-between gap-3">
                <h4
                  id="carouselScreenTitle"
                  class="min-w-0 text-sm font-semibold text-white"
                >
                  01. Screen Title
                </h4>
                <span
                  id="carouselScreenBadge"
                  class="shrink-0 whitespace-nowrap rounded-full bg-indigo-500/20 px-2.5 py-0.5 text-[11px] font-mono text-indigo-300 ring-1 ring-indigo-400/20"
                >
                  Slide 1
                </span>
              </div>
              <p
                id="carouselScreenCaption"
                class="mt-1 text-xs sm:text-sm leading-relaxed text-white/70"
              >
                Screen description goes here.
              </p>
            </div>

            <!-- Thumbnails Scrubber -->
            <div class="rounded-2xl border border-white/10 bg-white/5 p-3.5">
              <div class="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-xs text-white/60 mb-2.5">
                <span class="font-semibold uppercase tracking-wider text-white/80">All Screen Designs</span>
                <span id="carouselThumbCount" class="text-[11px] text-white/50">18 screens • Click to select</span>
              </div>
              <div
                id="carouselThumbnails"
                class="grid min-w-0 grid-cols-4 gap-2 p-1 select-none sm:grid-cols-6"
              >
                <!-- Dynamically generated thumbnails -->
              </div>
            </div>

          </div>

          <!-- RIGHT COLUMN: PROJECT DETAILS & SPECIFICATIONS (5 Cols) -->
          <div class="min-w-0 lg:col-span-5 flex flex-col gap-6">
            
            <!-- Quick Stats -->
            <div class="grid grid-cols-2 gap-2.5 sm:gap-3">
              <div class="min-w-0 rounded-2xl border border-white/10 bg-white/5 p-3.5">
                <p class="text-[11px] uppercase tracking-wider text-white/50">Platform</p>
                <p id="statPlatform" class="break-words mt-1 text-sm font-semibold text-white">Android</p>
              </div>
              <div class="min-w-0 rounded-2xl border border-white/10 bg-white/5 p-3.5">
                <p class="text-[11px] uppercase tracking-wider text-white/50">Architecture</p>
                <p id="statArchitecture" class="break-words mt-1 text-sm font-semibold text-white">Flutter / Dart</p>
              </div>
              <div class="min-w-0 rounded-2xl border border-white/10 bg-white/5 p-3.5">
                <p class="text-[11px] uppercase tracking-wider text-white/50">Screens</p>
                <p id="statScreens" class="break-words mt-1 text-sm font-semibold text-indigo-300">18 Screens</p>
              </div>
              <div class="min-w-0 rounded-2xl border border-white/10 bg-white/5 p-3.5">
                <p class="text-[11px] uppercase tracking-wider text-white/50">Type</p>
                <p id="statType" class="break-words mt-1 text-sm font-semibold text-white">POS Application</p>
              </div>
            </div>

            <!-- Overview Description -->
            <div>
              <h4 class="text-sm font-semibold uppercase tracking-wider text-white/90">
                Project Overview
              </h4>
              <p
                id="projectOverviewDescription"
                class="mt-2 text-sm leading-relaxed text-white/70"
              >
                Comprehensive overview text.
              </p>
            </div>

            <!-- Tech Stack Pills -->
            <div>
              <h4 class="text-sm font-semibold uppercase tracking-wider text-white/90">
                Technologies &amp; Tools
              </h4>
              <div id="projectOverviewTechStack" class="mt-2.5 flex flex-wrap gap-2">
                <!-- Tech pills injected here -->
              </div>
            </div>

            <!-- Key Features -->
            <div>
              <h4 class="text-sm font-semibold uppercase tracking-wider text-white/90">
                Key Features
              </h4>
              <ul
                id="projectOverviewFeatures"
                class="mt-3 space-y-2.5 text-sm text-white/70"
              >
                <!-- Features injected here -->
              </ul>
            </div>

            <!-- Deep Dive Modules / Game Details / System Breakdown -->
            <div>
              <h4
                id="projectDeepDiveHeading"
                class="text-sm font-semibold uppercase tracking-wider text-white/90"
              >
                System Details &amp; Highlights
              </h4>
              <div id="projectOverviewDeepDive" class="mt-3 space-y-3">
                <!-- Deep dive modules injected here -->
              </div>
            </div>

            <!-- Action Bar -->
            <div class="flex flex-col gap-3 pt-2 sm:flex-row">
              <a
                id="projectModalContactBtn"
                href="#contact"
                class="inline-flex flex-1 items-center justify-center rounded-xl bg-indigo-500 px-4 py-3 text-sm font-semibold text-white shadow-soft ring-1 ring-indigo-400/30 hover:bg-indigo-400 transition"
              >
                Inquire about this project
              </a>
              <button
                type="button"
                data-project-close
                class="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/80 hover:bg-white/10 hover:text-white transition"
              >
                Close
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>

    <!-- Lightbox Modal for Fullscreen Image Zoom -->
    <div
      id="screen-lightbox-modal"
      class="pointer-events-none fixed inset-0 z-[60] hidden items-center justify-center overflow-y-auto bg-black/90 backdrop-blur-lg p-4 opacity-0 transition duration-200"
      aria-hidden="true"
    >
      <div class="relative flex flex-col items-center justify-center max-h-full max-w-full">
        <!-- Close button -->
        <button
          type="button"
          id="lightboxCloseBtn"
          class="fixed top-3 right-3 sm:top-4 sm:right-4 z-[70] flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/80 text-white hover:bg-white/20 transition"
          aria-label="Close fullscreen view"
        >
          <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        <!-- Lightbox Prev / Next -->
        <button
          type="button"
          id="lightboxPrevBtn"
          class="fixed left-2 sm:left-4 top-1/2 -translate-y-1/2 z-[70] flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white/20 bg-black/80 text-white hover:bg-indigo-600 transition shadow-xl"
          aria-label="Previous screen"
        >
          <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>

        <button
          type="button"
          id="lightboxNextBtn"
          class="fixed right-2 sm:right-4 top-1/2 -translate-y-1/2 z-[70] flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white/20 bg-black/80 text-white hover:bg-indigo-600 transition shadow-xl"
          aria-label="Next screen"
        >
          <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/>
          </svg>
        </button>

        <!-- Lightbox Image -->
        <img
          id="lightboxImg"
          src=""
          alt="Enlarged Screen Design"
          class="max-h-[58vh] sm:max-h-[75vh] max-w-[90vw] object-contain rounded-2xl border border-white/10 shadow-2xl"
        />

        <!-- Lightbox Caption Bar -->
        <div class="mt-4 text-center max-w-xl px-4">
          <p id="lightboxTitle" class="text-base font-semibold text-white"></p>
          <p id="lightboxCaption" class="mt-1 text-xs sm:text-sm text-white/70"></p>
        </div>
      </div>
    </div>

    <!-- Accessible CV / Resume Modal -->
    <div
      id="resume-modal"
      class="pointer-events-none fixed inset-0 z-50 hidden items-center justify-center overflow-y-auto bg-black/80 backdrop-blur-md p-3 sm:p-5 md:p-8 opacity-0 transition duration-300"
      aria-hidden="true"
    >
      <div
        class="resume-printable modal-scroll relative w-full max-w-4xl rounded-3xl border border-white/10 bg-zinc-950 p-4 sm:p-8 md:p-10 shadow-2xl ring-1 ring-white/10 max-h-[92vh] overflow-y-auto overflow-x-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="resumeModalTitle"
      >
        <!-- Ambient radial glow -->
        <div class="no-print pointer-events-none absolute -top-24 -right-24 -z-10 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl"></div>
        <div class="no-print pointer-events-none absolute -bottom-24 -left-24 -z-10 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl"></div>

        <!-- Resume Modal Header -->
        <div class="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-start sm:justify-between">
          <div class="min-w-0">
            <div class="flex flex-wrap items-center gap-2">
              <span class="inline-flex items-center gap-1.5 rounded-full border border-indigo-400/30 bg-indigo-500/15 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-indigo-300 sm:text-xs sm:tracking-[0.2em]">
                Curriculum Vitae
              </span>
              <span class="rounded-full bg-emerald-500/15 border border-emerald-400/30 px-2.5 py-0.5 text-xs font-medium text-emerald-300">
                Available for Hire
              </span>
            </div>
            <h3 id="resumeModalTitle" class="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Sean Andrei Galang
            </h3>
            <p class="text-sm font-medium text-indigo-300/90 mt-0.5">
              Junior Software Developer
            </p>
            <div class="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-white/60">
              <span class="inline-flex min-w-0 max-w-full items-center gap-1 break-words">
                <svg class="h-3.5 w-3.5 shrink-0 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                San Jose, Capas, Tarlac, Philippines
              </span>
              <span class="inline-flex min-w-0 max-w-full items-center gap-1 break-words">
                <svg class="h-3.5 w-3.5 shrink-0 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                sa.galang02@outlook.com
              </span>
              <span class="inline-flex min-w-0 max-w-full items-center gap-1 break-words">
                <svg class="h-3.5 w-3.5 shrink-0 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
                github.com/shandwich-who
              </span>
            </div>
          </div>

          <!-- Top Action Controls -->
          <div class="no-print flex items-center gap-2 self-start sm:self-auto">
            <button
              type="button"
              id="resumePrintBtn"
              class="inline-flex items-center gap-1.5 rounded-xl border border-white/15 bg-white/5 px-3.5 py-2 text-xs font-semibold text-white/90 hover:bg-white/10 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-indigo-400"
              title="Print or save PDF copy"
            >
              <svg class="h-4 w-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/>
              </svg>
              <span>Print / PDF</span>
            </button>
            <button
              type="button"
              data-resume-close
              class="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-medium text-white/80 hover:bg-white/10 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-indigo-400"
              aria-label="Close resume modal"
            >
              <span class="hidden font-mono text-[10px] text-white/40 uppercase sm:inline-block border border-white/15 px-1 rounded">ESC</span>
              <span>Close</span>
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Resume Body -->
        <div class="mt-6 min-w-0 space-y-6 break-words text-sm text-white/80">
          
          <!-- Professional Summary -->
          <section>
            <h4 class="text-xs font-semibold uppercase tracking-wider text-indigo-300">
              Professional Summary
            </h4>
            <p class="mt-2 text-sm leading-relaxed text-white/70">
              Bachelor of Science in Information Technology graduate with demonstrated project delivery across mobile applications (Flutter/Dart) and desktop systems (Java Swing, Visual Basic .NET). Possesses strong fundamentals in object-oriented programming, database integration, and UI/UX implementation. Strong team collaborator eager to deliver reliable, high-performance software.
            </p>
          </section>

          <!-- Core Competencies -->
          <section>
            <h4 class="text-xs font-semibold uppercase tracking-wider text-indigo-300">
              Core Competencies
            </h4>
            <div class="mt-2.5 grid gap-3 sm:grid-cols-2">
              <div class="rounded-2xl border border-white/10 bg-white/5 p-3.5">
                <p class="font-semibold text-white">Mobile Application Engineering</p>
                <p class="mt-1 text-xs text-white/65 leading-relaxed">
                  Cross-platform mobile UI design, touch gesture workflows, state management, offline-first local data, and Firebase authentication.
                </p>
              </div>
              <div class="rounded-2xl border border-white/10 bg-white/5 p-3.5">
                <p class="font-semibold text-white">Desktop &amp; Systems Architecture</p>
                <p class="mt-1 text-xs text-white/65 leading-relaxed">
                  Java Swing MVC desktop systems, Visual Basic WinForms, event-driven timers, database records, and POS invoice processing.
                </p>
              </div>
              <div class="rounded-2xl border border-white/10 bg-white/5 p-3.5">
                <p class="font-semibold text-white">Database &amp; Backend Integration</p>
                <p class="mt-1 text-xs text-white/65 leading-relaxed">
                  Firebase Firestore &amp; Authentication, relational data modeling with MySQL, REST API consumption, and CRUD operation design.
                </p>
              </div>
              <div class="rounded-2xl border border-white/10 bg-white/5 p-3.5">
                <p class="font-semibold text-white">Modern Frontend &amp; UI Design</p>
                <p class="mt-1 text-xs text-white/65 leading-relaxed">
                  Clean HTML5/CSS3 semantics, Tailwind CSS utility styling, responsive layouts, accessibility best practices, and Figma prototyping.
                </p>
              </div>
            </div>
          </section>

          <!-- Key Projects Showcase -->
          <section>
            <h4 class="text-xs font-semibold uppercase tracking-wider text-indigo-300">
              Featured Projects
            </h4>
            <div class="mt-2.5 space-y-3">
              <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 sm:gap-3">
                  <div class="flex flex-wrap items-center gap-x-2 gap-y-1.5">
                    <h5 class="min-w-0 font-semibold text-white">Classkit — POS &amp; Inventory Mobile App</h5>
                    <span class="shrink-0 whitespace-nowrap rounded-full bg-indigo-500/20 px-2 py-0.5 text-[10px] font-mono text-indigo-300">Flutter • Android</span>
                  </div>
                  <span class="text-xs text-white/50">18 Screen UI Designs</span>
                </div>
                <p class="mt-1.5 text-xs leading-relaxed text-white/70">
                  Engineered a point-of-sale Android application for campus kiosks and stationery stores. Implemented real-time item search, quantity steppers, shopping cart totals, cash tender change computation, digital receipt generation, and gesture-driven inventory editing.
                </p>
              </div>

              <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 sm:gap-3">
                  <div class="flex flex-wrap items-center gap-x-2 gap-y-1.5">
                    <h5 class="min-w-0 font-semibold text-white">Arcade Suite — Desktop Game Collection</h5>
                    <span class="shrink-0 whitespace-nowrap rounded-full bg-fuchsia-500/20 px-2 py-0.5 text-[10px] font-mono text-fuchsia-300">VB.NET • WinForms</span>
                  </div>
                  <span class="text-xs text-white/50">4 Games • 9 Screens</span>
                </div>
                <p class="mt-1.5 text-xs leading-relaxed text-white/70">
                  Developed a 4-game desktop suite (Coin Toss, Jak En Poy, 3-Reel Slot Machine, Lucky Nine) exploring probability modeling, random number generation, game state control, player bankroll balance tracking, and custom sound/animation timers.
                </p>
              </div>

              <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 sm:gap-3">
                  <div class="flex flex-wrap items-center gap-x-2 gap-y-1.5">
                    <h5 class="min-w-0 font-semibold text-white">Java POS &amp; Inventory Management System</h5>
                    <span class="shrink-0 whitespace-nowrap rounded-full bg-cyan-500/20 px-2 py-0.5 text-[10px] font-mono text-cyan-300">Java Swing • MVC</span>
                  </div>
                  <span class="text-xs text-white/50">Retail Management • 5 Screens</span>
                </div>
                <p class="mt-1.5 text-xs leading-relaxed text-white/70">
                  Built a retail point-of-sale workstation with JTable invoice models, tiered customer discounts (Student, Senior, Employee), automated low-stock re-order thresholds, stock-in replenishment logging, and formatted receipt printing.
                </p>
              </div>
            </div>
          </section>

          <!-- Technical Skills Matrix -->
          <section>
            <h4 class="text-xs font-semibold uppercase tracking-wider text-indigo-300">
              Technical Skills Matrix
            </h4>
            <div class="mt-2.5 grid gap-3 sm:grid-cols-2 text-xs">
              <div class="min-w-0 break-words rounded-xl border border-white/10 bg-black/20 p-3">
                <span class="font-semibold text-white/90">Languages:</span>
                <span class="text-white/70 ml-1">Dart, Java, Visual Basic .NET, Kotlin, C#, Python, JavaScript, HTML5, CSS3</span>
              </div>
              <div class="min-w-0 break-words rounded-xl border border-white/10 bg-black/20 p-3">
                <span class="font-semibold text-white/90">Frameworks &amp; Tools:</span>
                <span class="text-white/70 ml-1">Flutter, Tailwind CSS, Java Swing, Android Studio, VS Code, Git, GitHub, Figma</span>
              </div>
              <div class="min-w-0 break-words rounded-xl border border-white/10 bg-black/20 p-3">
                <span class="font-semibold text-white/90">Database &amp; Cloud:</span>
                <span class="text-white/70 ml-1">Firebase (Authentication, Firestore), Local Data Modeling</span>
              </div>
              <div class="min-w-0 break-words rounded-xl border border-white/10 bg-black/20 p-3">
                <span class="font-semibold text-white/90">Software Practices:</span>
                <span class="text-white/70 ml-1">OOP, Data Structures &amp; Algorithms, SDLC, Version Control (Git)</span>
              </div>
            </div>
          </section>

          <!-- Education -->
          <section>
            <h4 class="text-xs font-semibold uppercase tracking-wider text-indigo-300">
              Education &amp; Credentials
            </h4>
            <div class="mt-2.5 rounded-2xl border border-white/10 bg-white/5 p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <div>
                <p class="font-semibold text-white">Bachelor of Science in Information Technology (BSIT)</p>
                <p class="text-xs text-white/65 mt-0.5">Focus in Software Development &amp; Systems Design</p>
              </div>
              <span class="text-xs text-indigo-300/80 font-medium">Graduate</span>
            </div>
          </section>

        </div>

        <!-- Modal Bottom Bar -->
        <div class="no-print mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:justify-between">
          <a
            href="#contact"
            data-resume-contact
            class="inline-flex items-center justify-center rounded-xl bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-400 transition"
          >
            Contact Sean
          </a>
          <div class="flex items-center gap-2">
            <button
              type="button"
              id="resumePrintBtnBottom"
              class="inline-flex items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white/90 hover:bg-white/10 transition"
            >
              <svg class="h-4 w-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/>
              </svg>
              <span>Print / PDF</span>
            </button>
            <button
              type="button"
              data-resume-close
              class="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white/70 hover:bg-white/10 hover:text-white transition"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  </section>
  <!-- About -->
  <section id="about" class="mx-auto max-w-6xl px-4 pt-16">
    <div class="grid gap-8 md:grid-cols-12 md:items-start">
      <div class="reveal md:col-span-5">
        <h2 class="text-2xl font-semibold tracking-tight">About</h2>
        <p class="mt-3 text-sm leading-relaxed text-white/70">
          IT graduate with hands-on experience in software development across mobile, desktop, and web platforms. Eager to apply strong analytical and problem-solving skills to build efficient, reliable, and user-friendly software solutions.
        </p>
        <div class="mt-5 rounded-3xl border border-white/10 bg-white/5 p-6">
          <p class="text-sm font-semibold">Quick facts</p>
          <div class="mt-4 grid gap-3">
            <div class="flex items-center justify-between text-sm">
              <span class="text-white/70">Focus</span>
              <span class="font-semibold text-white/90"
                >Software Development</span
              >
            </div>
            <div class="flex items-center justify-between text-sm">
              <span class="text-white/70">Strengths</span>
              <span class="font-semibold text-white/90"
                >Problem-solving + adaptability</span
              >
            </div>
            <div class="flex items-center justify-between text-sm">
              <span class="text-white/70">Tools</span>
              <span class="font-semibold text-white/90"
                >Flutter, Java, Visual Basic</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="reveal md:col-span-7">
        <div class="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div class="flex items-center justify-between gap-3">
            <h3 class="text-lg font-semibold">What I can help with</h3>
            <span
              class="rounded-full bg-white/5 px-3 py-1 text-xs text-white/65"
              >Skills in action</span
            >
          </div>
          <div class="mt-5 grid gap-3 sm:grid-cols-2">
            <div class="rounded-2xl border border-white/10 bg-black/20 p-4">
              <p class="text-sm font-semibold">Mobile and desktop projects</p>
              <p class="mt-2 text-sm text-white/70">
                Developing reliable, user-friendly apps tailored for mobile and
                desktop workflows.
              </p>
            </div>
            <div class="rounded-2xl border border-white/10 bg-black/20 p-4">
              <p class="text-sm font-semibold">Debugging &amp; problem-solving</p>
              <p class="mt-2 text-sm text-white/70">
                Diagnosing and resolving bugs, logic errors, and edge cases to
                keep applications running smoothly.
              </p>
            </div>
            <div class="rounded-2xl border border-white/10 bg-black/20 p-4">
              <p class="text-sm font-semibold">Inventory and POS systems</p>
              <p class="mt-2 text-sm text-white/70">
                Building streamlined systems for sales, inventory tracking, and
                record management.
              </p>
            </div>
            <div class="rounded-2xl border border-white/10 bg-black/20 p-4">
              <p class="text-sm font-semibold">Continuous learning</p>
              <p class="mt-2 text-sm text-white/70">
                Constantly improving through real projects to deliver better,
                faster, and more effective solutions.
              </p>
            </div>
          </div>
          <div class="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              class="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 transition"
            >
              Hire / collaborate
            </a>
            <a
              href="#projects"
              class="inline-flex items-center justify-center rounded-xl bg-indigo-500 px-5 py-3 text-sm font-semibold text-white ring-1 ring-indigo-400/30 hover:bg-indigo-400 transition"
            >
              See my work
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Skills -->
  <section id="skills" class="mx-auto max-w-6xl px-4 pt-16 pb-14">
    <div class="reveal">
      <div class="flex items-end justify-between gap-6">
        <div>
          <h2 class="text-2xl font-semibold tracking-tight">Skills</h2>
          <p class="mt-2 text-sm text-white/70">A clean set of tools I use.</p>
        </div>
      </div>
    </div>
    <div class="skills-grid reveal mt-8 grid gap-4 md:grid-cols-2">
      <article
        class="skills-card rounded-[1.9rem] border border-amber-300/15 p-5 shadow-soft md:p-6"
      >
        <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p class="text-[11px] font-medium uppercase tracking-[0.28em] text-amber-200/85">
              Code
            </p>
            <h3 class="mt-3 text-xl font-semibold text-white">Programming Languages</h3>
            <p class="mt-3 max-w-sm text-sm leading-relaxed text-white/65">
              Core languages I use for web pages, app development, and general programming.
            </p>
          </div>
          <span
            class="self-start whitespace-nowrap rounded-full border border-amber-300/25 bg-amber-400/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-amber-100"
            >9 items</span
          >
        </div>
        <div class="mt-6 flex flex-wrap gap-2.5">
          <span class="rounded-2xl border border-amber-300/15 bg-amber-400/10 px-3 py-2 text-sm text-amber-50">HTML</span>
          <span class="rounded-2xl border border-amber-300/15 bg-amber-400/10 px-3 py-2 text-sm text-amber-50">CSS</span>
          <span class="rounded-2xl border border-amber-300/15 bg-amber-400/10 px-3 py-2 text-sm text-amber-50">JavaScript</span>
          <span class="rounded-2xl border border-amber-300/15 bg-amber-400/10 px-3 py-2 text-sm text-amber-50">Dart</span>
          <span class="rounded-2xl border border-amber-300/15 bg-amber-400/10 px-3 py-2 text-sm text-amber-50">Java</span>
          <span class="rounded-2xl border border-amber-300/15 bg-amber-400/10 px-3 py-2 text-sm text-amber-50">Kotlin</span>
          <span class="rounded-2xl border border-amber-300/15 bg-amber-400/10 px-3 py-2 text-sm text-amber-50">C#</span>
          <span class="rounded-2xl border border-amber-300/15 bg-amber-400/10 px-3 py-2 text-sm text-amber-50">Python</span>
          <span class="rounded-2xl border border-amber-300/15 bg-amber-400/10 px-3 py-2 text-sm text-amber-50">VB</span>
        </div>
      </article>
      <article
        class="skills-card rounded-[1.9rem] border border-sky-300/15 p-5 shadow-soft md:p-6"
      >
        <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p class="text-[11px] font-medium uppercase tracking-[0.28em] text-sky-200/85">
              Build
            </p>
            <h3 class="mt-3 text-lg font-semibold text-white">
              Frameworks &amp; Libraries
            </h3>
            <p class="mt-3 max-w-sm text-sm leading-relaxed text-white/65">
              Libraries and UI tools I use to build responsive and mobile-first interfaces.
            </p>
          </div>
          <span
            class="self-start whitespace-nowrap rounded-full border border-sky-300/25 bg-sky-400/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-sky-100"
            >2 tools</span
          >
        </div>
        <div class="mt-6 flex flex-wrap gap-2.5">
          <span class="rounded-2xl border border-sky-300/15 bg-sky-400/10 px-3 py-2 text-sm text-sky-50">Flutter</span>
          <span class="rounded-2xl border border-sky-300/15 bg-sky-400/10 px-3 py-2 text-sm text-sky-50">Tailwind CSS</span>
        </div>
      </article>
      <article
        class="skills-card rounded-[1.9rem] border border-emerald-300/15 p-5 shadow-soft md:p-6"
      >
        <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p class="text-[11px] font-medium uppercase tracking-[0.28em] text-emerald-200/85">Data</p>
            <h3 class="mt-3 text-lg font-semibold text-white">Databases</h3>
            <p class="mt-3 max-w-sm text-sm leading-relaxed text-white/65">
              Data and backend services I use for storage, authentication, and app integration.
            </p>
          </div>
          <span
            class="self-start whitespace-nowrap rounded-full border border-emerald-300/25 bg-emerald-400/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-emerald-100"
            >1 tool</span
          >
        </div>
        <div class="mt-6 flex flex-wrap gap-2.5">
          <span class="rounded-2xl border border-emerald-300/15 bg-emerald-400/10 px-3 py-2 text-sm text-emerald-50">Firebase</span>
        </div>
      </article>
      <article
        class="skills-card rounded-[1.9rem] border border-rose-300/15 p-5 shadow-soft md:p-6"
      >
        <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p class="text-[11px] font-medium uppercase tracking-[0.28em] text-rose-200/85">Workspace</p>
            <h3 class="mt-3 text-lg font-semibold text-white">
              Tools &amp; Platforms
            </h3>
            <p class="mt-3 max-w-sm text-sm leading-relaxed text-white/65">
              Main platforms and workspace tools I use for building, versioning, and design work.
            </p>
          </div>
          <span
            class="self-start whitespace-nowrap rounded-full border border-rose-300/25 bg-rose-400/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-rose-100"
            >4 tools</span
          >
        </div>
        <div class="mt-6 flex flex-wrap gap-2.5">
          <span class="rounded-2xl border border-rose-300/15 bg-rose-400/10 px-3 py-2 text-sm text-rose-50">Android Studio</span>
          <span class="rounded-2xl border border-rose-300/15 bg-rose-400/10 px-3 py-2 text-sm text-rose-50">GitHub</span>
          <span class="rounded-2xl border border-rose-300/15 bg-rose-400/10 px-3 py-2 text-sm text-rose-50">VS Code</span>
          <span class="rounded-2xl border border-rose-300/15 bg-rose-400/10 px-3 py-2 text-sm text-rose-50">Figma</span>
        </div>
      </article>
    </div>
  </section>
  <!-- Contact -->
  <section id="contact" class="mx-auto max-w-6xl px-4 pb-20">
    <div
      class="reveal rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10"
    >
      <div
        class="flex flex-col gap-8 md:flex-row md:items-center md:justify-between"
      >
        <div>
          <h2 class="text-2xl font-semibold tracking-tight">Contact</h2>
          <p class="mt-3 max-w-xl text-sm leading-relaxed text-white/70">
            If you are looking for an entry-level software developer who is
            ready to learn and contribute, feel free to reach out.
          </p>
        </div>
        <div class="flex flex-wrap items-center gap-3">
          <a
            id="emailBtn"
            href="#contact"
            class="inline-flex items-center justify-center rounded-xl bg-indigo-500 px-5 py-3 text-sm font-semibold text-white ring-1 ring-indigo-400/30 hover:bg-indigo-400 transition"
          >
            Email me
          </a>
          <button
            type="button"
            id="copyEmailBtn"
            class="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 transition focus:outline-none focus:ring-2 focus:ring-indigo-400"
            aria-label="Copy email address to clipboard"
          >
            <svg id="copyEmailIcon" class="h-4 w-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
            </svg>
            <span id="copyEmailText">Copy Email</span>
          </button>
          <a
            href="#projects"
            class="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 transition"
          >
            Review projects
          </a>
        </div>
      </div>
      <div
        class="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
      >
        <p class="text-sm text-white/70">Socials</p>
        <div class="flex flex-wrap gap-2">
          <a
            href="https://www.facebook.com/andreisantos70"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/10 transition"
          >
            Facebook
          </a>
          <a
            href="https://github.com/shandwich-who"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/10 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/shanandrey/"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/10 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <div class="mt-7 grid gap-4 sm:grid-cols-3">
        <div class="rounded-2xl border border-white/10 bg-black/20 p-4">
          <p class="text-xs text-white/60">Response time</p>
          <p class="mt-1 text-sm font-semibold">Usually 24-48h</p>
        </div>
        <div class="rounded-2xl border border-white/10 bg-black/20 p-4">
          <p class="text-xs text-white/60">Location</p>
          <p class="mt-1 text-sm font-semibold">San Jose, Capas, Tarlac, Philippines</p>
        </div>
        <div class="rounded-2xl border border-white/10 bg-black/20 p-4">
          <p class="text-xs text-white/60">Specialty</p>
          <p class="mt-1 text-sm font-semibold">Software Development</p>
        </div>
      </div>
    </div>
  </section>
</main>
`;
class MainSection extends HTMLElement {
    connectedCallback() {
        window.renderFragmentIntoElement(this, MAIN_FRAGMENT_HTML, {
            errorHTML: '<main class="p-8 text-center text-rose-400">Main section failed to load</main>',
            source: 'main/main.html',
            afterLoad: (hostEl) => {
                const modal = hostEl.querySelector("#project-overview-modal");
                const dialog = hostEl.querySelector("[role='dialog']");
                const emailBtn = hostEl.querySelector("#emailBtn");
                const copyEmailBtn = hostEl.querySelector("#copyEmailBtn");
                const copyEmailText = hostEl.querySelector("#copyEmailText");

                // Dynamic email obfuscation and inquiry builder
                const emailUser = ["sa", ".", "galang02"].join("");
                const emailDomain = ["out", "look", ".", "com"].join("");
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
                        badgeEl.className = `inline-flex items-center gap-1.5 rounded-full border px-3 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] sm:text-xs sm:tracking-[0.2em] ${project.badgeClass}`;
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
                                "carousel-thumb-btn group relative aspect-square w-full overflow-hidden rounded-xl border border-white/15 bg-black/60 p-1 opacity-60 hover:opacity-100 hover:scale-105 transition focus:outline-none focus:ring-2 focus:ring-indigo-400";
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
