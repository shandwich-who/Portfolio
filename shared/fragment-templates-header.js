window.fragmentTemplates = window.fragmentTemplates || {};
window.fragmentTemplates.header = `
<header
  class="sticky top-0 z-40 border-b border-white/5 bg-black/50 backdrop-blur-md transition-colors"
>
  <div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
    <a href="#home" class="group inline-flex items-center gap-2.5">
      <span
        class="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 transition-transform group-hover:scale-105"
      >
        <!-- simple mark -->
        <span
          class="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-400"
        ></span>
      </span>
      <div class="flex flex-col">
        <span
          class="text-sm font-semibold tracking-wide text-white/90 group-hover:text-white"
          >Sean Andrei Galang</span
        >
        <span class="text-[11px] text-indigo-300/80 font-medium -mt-0.5">Junior Software Developer</span>
      </div>
    </a>

    <!-- Desktop Navigation -->
    <nav class="hidden items-center gap-6 md:flex">
      <a
        class="nav-item text-sm font-medium text-white/70 hover:text-white transition"
        data-nav-link="projects"
        href="#projects"
        >Projects</a
      >
      <a
        class="nav-item text-sm font-medium text-white/70 hover:text-white transition"
        data-nav-link="about"
        href="#about"
        >About</a
      >
      <a
        class="nav-item text-sm font-medium text-white/70 hover:text-white transition"
        data-nav-link="skills"
        href="#skills"
        >Skills</a
      >
      <a
        class="nav-item text-sm font-medium text-white/70 hover:text-white transition"
        data-nav-link="contact"
        href="#contact"
        >Contact</a
      >
      <button
        type="button"
        data-open-resume
        class="inline-flex items-center gap-1.5 rounded-xl border border-indigo-400/30 bg-indigo-500/10 px-3.5 py-1.5 text-xs font-semibold text-indigo-300 hover:bg-indigo-500/20 hover:text-white hover:border-indigo-400/50 transition focus:outline-none focus:ring-2 focus:ring-indigo-400"
      >
        <svg class="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
        </svg>
        <span>CV / Resume</span>
      </button>
    </nav>

    <!-- Mobile Menu Button -->
    <button
      id="menuBtn"
      class="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-white/90 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-400 md:hidden"
      aria-label="Open menu"
      aria-controls="mobileMenu"
      aria-expanded="false"
    >
      <svg
        id="menuIcon"
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <path id="hamburgerPath" stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        <path id="closeMenuPath" class="hidden" stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>

  <!-- Mobile Menu Drawer -->
  <div
    id="mobileMenu"
    class="hidden border-t border-white/5 bg-zinc-950/95 backdrop-blur-xl md:hidden transition-all"
  >
    <div class="mx-auto max-w-6xl px-4 py-3">
      <div class="flex flex-col gap-1.5">
        <a
          class="rounded-xl px-3 py-2.5 text-sm font-medium text-white/70 hover:bg-white/10 hover:text-white transition"
          href="#projects"
          >Projects</a
        >
        <a
          class="rounded-xl px-3 py-2.5 text-sm font-medium text-white/70 hover:bg-white/10 hover:text-white transition"
          href="#about"
          >About</a
        >
        <a
          class="rounded-xl px-3 py-2.5 text-sm font-medium text-white/70 hover:bg-white/10 hover:text-white transition"
          href="#skills"
          >Skills</a
        >
        <a
          class="rounded-xl px-3 py-2.5 text-sm font-medium text-white/70 hover:bg-white/10 hover:text-white transition"
          href="#contact"
          >Contact</a
        >
        <button
          type="button"
          data-open-resume
          class="mt-1 flex items-center justify-center gap-2 rounded-xl border border-indigo-400/30 bg-indigo-500/15 px-3 py-2.5 text-sm font-semibold text-indigo-300 hover:bg-indigo-500/25 hover:text-white transition"
        >
          <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
          </svg>
          <span>View CV / Resume</span>
        </button>
      </div>
    </div>
  </div>
</header>

`;
