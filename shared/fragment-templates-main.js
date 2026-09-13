window.fragmentTemplates = window.fragmentTemplates || {};
window.fragmentTemplates.main = `
<main id="home" class="relative">
  <section class="mx-auto max-w-6xl px-4 pt-16 md:pt-24">
    <div class="grid items-center gap-10 md:grid-cols-12">
      <div class="md:col-span-7">
        <div class="reveal">
          <p class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75">
            <span class="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            Available for freelance + internships + full time
          </p>
        </div>
        <h1 class="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-6xl reveal">
          Entry-level developer.
          <span class="block bg-gradient-to-r from-indigo-300 via-fuchsia-300 to-cyan-200 bg-clip-text text-transparent">
            Ready to build and support.
          </span>
        </h1>
        <p class="mt-4 max-w-xl text-white/70 leading-relaxed reveal">
          I am an IT fresh graduate focused on Flutter, Java, and Visual Basic projects, with a growing foundation in troubleshooting, system support, and practical software development.
        </p>
        <div class="mt-7 flex flex-col gap-3 sm:flex-row reveal">
          <a href="#projects" class="inline-flex items-center justify-center rounded-xl bg-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-soft ring-1 ring-indigo-400/30 hover:bg-indigo-400 transition">View projects</a>
          <a href="#contact" class="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 transition">Contact me</a>
        </div>
        <div class="mt-9 grid grid-cols-3 gap-3 max-w-md reveal">
          <div class="rounded-2xl border border-white/10 bg-white/5 p-4"><p class="text-lg font-semibold">3+</p><p class="text-xs text-white/60">Projects</p></div>
          <div class="rounded-2xl border border-white/10 bg-white/5 p-4"><p class="text-lg font-semibold">Fast</p><p class="text-xs text-white/60">Learner and problem-solver</p></div>
          <div class="rounded-2xl border border-white/10 bg-white/5 p-4"><p class="text-lg font-semibold">Hands-on</p><p class="text-xs text-white/60">Projects and support skills</p></div>
        </div>
      </div>
      <div class="md:col-span-5">
        <div class="reveal">
          <div class="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-soft">
            <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/10 to-cyan-400/10"></div>
            <div class="relative p-6">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <span class="h-2.5 w-2.5 rounded-full bg-red-400/90"></span>
                  <span class="h-2.5 w-2.5 rounded-full bg-amber-400/90"></span>
                  <span class="h-2.5 w-2.5 rounded-full bg-emerald-400/90"></span>
                </div>
                <span class="text-xs text-white/60">Preview</span>
              </div>
              <div class="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4">
                <div class="flex items-center justify-between">
                  <p class="text-sm font-semibold">Developer Snapshot</p>
                  <span class="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70">Portfolio</span>
                </div>
                <div class="mt-4 grid gap-3">
                  <div class="rounded-xl border border-white/10 bg-white/5 p-3 floaty"><div class="h-2 w-2/3 rounded bg-white/30"></div><div class="mt-3 h-2 w-1/2 rounded bg-white/20"></div></div>
                  <div class="rounded-xl border border-white/10 bg-white/5 p-3 floaty" style="animation-delay: 140ms"><div class="h-2 w-3/5 rounded bg-white/30"></div><div class="mt-3 h-2 w-2/3 rounded bg-white/20"></div></div>
                </div>
              </div>
              <div class="mt-4 flex items-center gap-3 text-xs text-white/60">
                <span class="inline-flex items-center gap-2"><span class="h-1.5 w-1.5 rounded-full bg-indigo-300"></span>Flutter projects</span>
                <span class="inline-flex items-center gap-2"><span class="h-1.5 w-1.5 rounded-full bg-fuchsia-300"></span>Java systems</span>
                <span class="inline-flex items-center gap-2"><span class="h-1.5 w-1.5 rounded-full bg-cyan-300"></span>IT support ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="projects" class="mx-auto max-w-6xl px-4 pt-16">
    <div class="reveal"><div class="flex items-end justify-between gap-6"><div><h2 class="text-2xl font-semibold tracking-tight">Projects</h2><p class="mt-2 text-sm text-white/70">A few clean, focused builds.</p></div><a class="text-sm text-white/70 hover:text-white transition" href="#contact">Let&apos;s build yours</a></div></div>
    <div class="mt-8 grid gap-5 md:grid-cols-3">
      <article class="reveal flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/8 hover:border-white/15">
        <div class="flex items-start justify-between gap-3"><div><h3 class="text-lg font-semibold">Classkit</h3><p class="mt-2 text-sm text-white/70">A Flutter-based Android point-of-sale (POS) application for school supply stores, built to handle purchases, inventory, and a simple checkout flow.</p></div><span class="rounded-full bg-indigo-500/20 px-3 py-1 text-xs text-indigo-200 ring-1 ring-indigo-400/20">Mobile</span></div>
        <ul class="mt-4 flex-1 space-y-2 text-sm text-white/70"><li class="flex gap-2"><span class="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-300"></span>Supports student and teacher purchase transactions</li><li class="flex gap-2"><span class="mt-1.5 h-1.5 w-1.5 rounded-full bg-fuchsia-300"></span>Manages notebooks, pens, uniforms, and other school items</li><li class="flex gap-2"><span class="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-300"></span>Includes a simple shopping cart and checkout process</li></ul>
        <div class="mt-5 flex flex-wrap items-center gap-3 pt-2"><a class="text-sm font-semibold text-white/90 hover:text-white transition" href="#project-overview-modal" data-project-overview data-project-title="Classkit" data-project-type="Flutter Application" data-project-description="Classkit is a Flutter-based Android point-of-sale application for school supply stores. It helps cashiers process student and teacher purchases, manage inventory, and complete checkout through a simple shopping cart flow." data-project-features="Student and teacher purchase handling|Inventory management for school supplies|Simple shopping cart and checkout experience">Project overview</a><span class="text-xs text-white/40">|</span><a class="text-sm font-semibold text-white/90 hover:text-white transition" href="#contact">Ask for code</a></div>
      </article>
      <article class="reveal flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/8 hover:border-white/15">
        <div class="flex items-start justify-between gap-3"><div><h3 class="text-lg font-semibold">Games</h3><p class="mt-2 text-sm text-white/70">A collection of Visual Basic desktop games featuring chance, strategy, card, and slot-style mechanics with score tracking and interactive UI elements.</p></div><span class="rounded-full bg-fuchsia-500/20 px-3 py-1 text-xs text-fuchsia-200 ring-1 ring-fuchsia-400/20">Desktop</span></div>
        <ul class="mt-4 flex-1 space-y-2 text-sm text-white/70"><li class="flex gap-2"><span class="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-300"></span>Includes Coin Toss, Jack Enpoy, Slot Machine, and Lucky Nine</li><li class="flex gap-2"><span class="mt-1.5 h-1.5 w-1.5 rounded-full bg-fuchsia-300"></span>Uses randomness, scoring, and decision-based game logic</li><li class="flex gap-2"><span class="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-300"></span>Built with buttons, labels, picture boxes, and timers</li></ul>
        <div class="mt-5 flex flex-wrap items-center gap-3 pt-2"><a class="text-sm font-semibold text-white/90 hover:text-white transition" href="#project-overview-modal" data-project-overview data-project-title="Visual Basic Games" data-project-type="Desktop Game Project" data-project-description="A collection of Visual Basic desktop games that explore probability, player choice, scoring, and simple but engaging interface design." data-project-features="Gameplay logic and scoring systems|Keyboard and button-based interactions|Simple and engaging desktop interface" data-project-template="vb-games-details">Game details</a><span class="text-xs text-white/40">|</span><a class="text-sm font-semibold text-white/90 hover:text-white transition" href="#contact">Contact</a></div>
      </article>
      <article class="reveal flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/8 hover:border-white/15">
        <div class="flex items-start justify-between gap-3"><div><h3 class="text-lg font-semibold">POS & Inventory</h3><p class="mt-2 text-sm text-white/70">Point-of-sale and inventory system built in Java to manage sales, stock monitoring, and product records.</p></div><span class="rounded-full bg-cyan-500/20 px-3 py-1 text-xs text-cyan-200 ring-1 ring-cyan-400/20">System</span></div>
        <ul class="mt-4 flex-1 space-y-2 text-sm text-white/70"><li class="flex gap-2"><span class="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-300"></span>Sales transaction and receipt handling</li><li class="flex gap-2"><span class="mt-1.5 h-1.5 w-1.5 rounded-full bg-fuchsia-300"></span>Inventory tracking and stock updates</li><li class="flex gap-2"><span class="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-300"></span>Organized product and record management</li></ul>
        <div class="mt-5 flex flex-wrap items-center gap-3 pt-2"><a class="text-sm font-semibold text-white/90 hover:text-white transition" href="#project-overview-modal" data-project-overview data-project-title="Java POS and Inventory" data-project-type="Java System" data-project-description="A Java-based point-of-sale and inventory system built to manage sales transactions, stock monitoring, and product records in one workflow." data-project-features="Sales transaction and receipt handling|Inventory tracking and stock updates|Organized product and record management">System summary</a><span class="text-xs text-white/40">|</span><a class="text-sm font-semibold text-white/90 hover:text-white transition" href="#contact">Build similar</a></div>
      </article>
    </div>
    <div id="project-overview-modal" class="pointer-events-none fixed inset-0 z-50 hidden items-center justify-center overflow-y-auto bg-black/70 px-4 py-6 opacity-0 transition duration-200 sm:py-8" aria-hidden="true">
      <div class="modal-scroll w-full max-w-2xl rounded-3xl border border-white/10 bg-zinc-950 p-5 shadow-2xl ring-1 ring-white/10 max-h-[90vh] overflow-y-auto sm:p-6" role="dialog" aria-modal="true" aria-labelledby="projectOverviewTitle" aria-describedby="projectOverviewDescription">
        <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between"><div><p id="projectOverviewType" class="text-xs font-semibold uppercase tracking-[0.24em] text-indigo-300">Project</p><h3 id="projectOverviewTitle" class="mt-2 text-2xl font-semibold">Project Overview</h3></div><button type="button" data-project-close class="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white sm:w-auto">Close</button></div>
        <p id="projectOverviewDescription" class="mt-4 text-sm leading-relaxed text-white/70">Select a project to read its overview.</p>
        <div class="mt-6"><p class="text-sm font-semibold text-white/90">Key features</p><ul id="projectOverviewFeatures" class="mt-3 space-y-2 text-sm text-white/70"></ul></div>
        <div id="projectOverviewExtra" class="mt-6 hidden border-t border-white/10 pt-6"></div>
        <template id="vb-games-details"><div class="space-y-5 text-sm text-white/70"><div><h4 class="font-semibold text-white/90">Coin Toss</h4><p class="mt-1">A chance-based game where the player predicts whether a virtual coin will land on heads or tails, while the program tracks wins and losses.</p></div><div><h4 class="font-semibold text-white/90">Jack Enpoy (Rock-Paper-Scissors)</h4><p class="mt-1">A one-player game against the computer where the player selects rock, paper, or scissors and the program compares both choices to determine the winner and update the score.</p></div><div><h4 class="font-semibold text-white/90">Slot Machine</h4><p class="mt-1">A luck-based reel game where the player spins three random symbols and earns rewards based on matching combinations such as cherries, bells, or 7s.</p></div><div><h4 class="font-semibold text-white/90">Lucky Nine</h4><p class="mt-1">A card game where the player and computer draw two cards and compare hand values, trying to get as close to 9 as possible without going over.</p></div></div></template>
      </div>
    </div>
  </section>
  <section id="about" class="mx-auto max-w-6xl px-4 pt-16">
    <div class="grid gap-8 md:grid-cols-12 md:items-start">
      <div class="reveal md:col-span-5">
        <h2 class="text-2xl font-semibold tracking-tight">About</h2>
        <p class="mt-3 text-sm leading-relaxed text-white/70">I am an IT fresh graduate seeking an entry-level opportunity in IT Support or Software Development. I want to contribute my programming, troubleshooting, and system support skills while continuing to grow through real-world experience.</p>
        <div class="mt-5 rounded-3xl border border-white/10 bg-white/5 p-6"><p class="text-sm font-semibold">Quick facts</p><div class="mt-4 grid gap-3"><div class="flex items-center justify-between text-sm"><span class="text-white/70">Focus</span><span class="font-semibold text-white/90">Software Development / IT Support</span></div><div class="flex items-center justify-between text-sm"><span class="text-white/70">Strengths</span><span class="font-semibold text-white/90">Problem-solving + adaptability</span></div><div class="flex items-center justify-between text-sm"><span class="text-white/70">Tools</span><span class="font-semibold text-white/90">Flutter, Java, Visual Basic</span></div></div></div>
      </div>
      <div class="reveal md:col-span-7">
        <div class="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div class="flex items-center justify-between gap-3"><h3 class="text-lg font-semibold">What I can help with</h3><span class="rounded-full bg-white/5 px-3 py-1 text-xs text-white/65">Skills in action</span></div>
          <div class="mt-5 grid gap-3 sm:grid-cols-2">
            <div class="rounded-2xl border border-white/10 bg-black/20 p-4"><p class="text-sm font-semibold">Mobile and desktop projects</p><p class="mt-2 text-sm text-white/70">Developing reliable, user-friendly apps tailored for mobile and desktop workflows.</p></div>
            <div class="rounded-2xl border border-white/10 bg-black/20 p-4"><p class="text-sm font-semibold">Troubleshooting support</p><p class="mt-2 text-sm text-white/70">Diagnosing and resolving software issues, setup problems, and day-to-day technical concerns.</p></div>
            <div class="rounded-2xl border border-white/10 bg-black/20 p-4"><p class="text-sm font-semibold">Inventory and POS systems</p><p class="mt-2 text-sm text-white/70">Building streamlined systems for sales, inventory tracking, and record management.</p></div>
            <div class="rounded-2xl border border-white/10 bg-black/20 p-4"><p class="text-sm font-semibold">Continuous learning</p><p class="mt-2 text-sm text-white/70">Constantly improving through real projects to deliver better, faster, and more effective solutions.</p></div>
          </div>
          <div class="mt-6 flex flex-col gap-3 sm:flex-row"><a href="#contact" class="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 transition">Hire / collaborate</a><a href="#projects" class="inline-flex items-center justify-center rounded-xl bg-indigo-500 px-5 py-3 text-sm font-semibold text-white ring-1 ring-indigo-400/30 hover:bg-indigo-400 transition">See my work</a></div>
        </div>
      </div>
    </div>
  </section>
  <section id="skills" class="mx-auto max-w-6xl px-4 pt-16 pb-14">
    <div class="reveal"><div class="flex items-end justify-between gap-6"><div><h2 class="text-2xl font-semibold tracking-tight">Skills</h2><p class="mt-2 text-sm text-white/70">A clean set of tools I use.</p></div></div></div>
    <div class="skills-grid reveal mt-8 grid gap-4 md:grid-cols-2">
      <article class="skills-card rounded-[1.9rem] border border-amber-300/15 p-5 shadow-soft md:p-6"><div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between"><div><p class="text-[11px] font-medium uppercase tracking-[0.28em] text-amber-200/85">Code</p><h3 class="mt-3 text-xl font-semibold text-white">Programming Languages</h3><p class="mt-3 max-w-sm text-sm leading-relaxed text-white/65">Core languages I use for web pages, app development, and general programming.</p></div><span class="self-start whitespace-nowrap rounded-full border border-amber-300/25 bg-amber-400/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-amber-100">9 items</span></div><div class="mt-6 flex flex-wrap gap-2.5"><span class="rounded-2xl border border-amber-300/15 bg-amber-400/10 px-3 py-2 text-sm text-amber-50">HTML</span><span class="rounded-2xl border border-amber-300/15 bg-amber-400/10 px-3 py-2 text-sm text-amber-50">CSS</span><span class="rounded-2xl border border-amber-300/15 bg-amber-400/10 px-3 py-2 text-sm text-amber-50">JavaScript</span><span class="rounded-2xl border border-amber-300/15 bg-amber-400/10 px-3 py-2 text-sm text-amber-50">Dart</span><span class="rounded-2xl border border-amber-300/15 bg-amber-400/10 px-3 py-2 text-sm text-amber-50">Java</span><span class="rounded-2xl border border-amber-300/15 bg-amber-400/10 px-3 py-2 text-sm text-amber-50">Kotlin</span><span class="rounded-2xl border border-amber-300/15 bg-amber-400/10 px-3 py-2 text-sm text-amber-50">C#</span><span class="rounded-2xl border border-amber-300/15 bg-amber-400/10 px-3 py-2 text-sm text-amber-50">Python</span><span class="rounded-2xl border border-amber-300/15 bg-amber-400/10 px-3 py-2 text-sm text-amber-50">VB</span></div></article>
      <article class="skills-card rounded-[1.9rem] border border-sky-300/15 p-5 shadow-soft md:p-6"><div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between"><div><p class="text-[11px] font-medium uppercase tracking-[0.28em] text-sky-200/85">Build</p><h3 class="mt-3 text-lg font-semibold text-white">Frameworks &amp; Libraries</h3><p class="mt-3 max-w-sm text-sm leading-relaxed text-white/65">Libraries and UI tools I use to build responsive and mobile-first interfaces.</p></div><span class="self-start whitespace-nowrap rounded-full border border-sky-300/25 bg-sky-400/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-sky-100">2 tools</span></div><div class="mt-6 flex flex-wrap gap-2.5"><span class="rounded-2xl border border-sky-300/15 bg-sky-400/10 px-3 py-2 text-sm text-sky-50">Flutter</span><span class="rounded-2xl border border-sky-300/15 bg-sky-400/10 px-3 py-2 text-sm text-sky-50">Tailwind CSS</span></div></article>
      <article class="skills-card rounded-[1.9rem] border border-emerald-300/15 p-5 shadow-soft md:p-6"><div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between"><div><p class="text-[11px] font-medium uppercase tracking-[0.28em] text-emerald-200/85">Data</p><h3 class="mt-3 text-lg font-semibold text-white">Databases</h3><p class="mt-3 max-w-sm text-sm leading-relaxed text-white/65">Data and backend services I use for storage, authentication, and app integration.</p></div><span class="self-start whitespace-nowrap rounded-full border border-emerald-300/25 bg-emerald-400/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-emerald-100">1 tool</span></div><div class="mt-6 flex flex-wrap gap-2.5"><span class="rounded-2xl border border-emerald-300/15 bg-emerald-400/10 px-3 py-2 text-sm text-emerald-50">Firebase</span></div></article>
      <article class="skills-card rounded-[1.9rem] border border-rose-300/15 p-5 shadow-soft md:p-6"><div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between"><div><p class="text-[11px] font-medium uppercase tracking-[0.28em] text-rose-200/85">Workspace</p><h3 class="mt-3 text-lg font-semibold text-white">Tools &amp; Platforms</h3><p class="mt-3 max-w-sm text-sm leading-relaxed text-white/65">Main platforms and workspace tools I use for building, versioning, and design work.</p></div><span class="self-start whitespace-nowrap rounded-full border border-rose-300/25 bg-rose-400/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-rose-100">4 tools</span></div><div class="mt-6 flex flex-wrap gap-2.5"><span class="rounded-2xl border border-rose-300/15 bg-rose-400/10 px-3 py-2 text-sm text-rose-50">Android Studio</span><span class="rounded-2xl border border-rose-300/15 bg-rose-400/10 px-3 py-2 text-sm text-rose-50">GitHub</span><span class="rounded-2xl border border-rose-300/15 bg-rose-400/10 px-3 py-2 text-sm text-rose-50">VS Code</span><span class="rounded-2xl border border-rose-300/15 bg-rose-400/10 px-3 py-2 text-sm text-rose-50">Figma</span></div></article>
    </div>
  </section>
  <section id="contact" class="mx-auto max-w-6xl px-4 pb-20">
    <div class="reveal rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10">
      <div class="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div><h2 class="text-2xl font-semibold tracking-tight">Contact</h2><p class="mt-3 max-w-xl text-sm leading-relaxed text-white/70">If you are looking for an entry-level developer or IT support assistant who is ready to learn and contribute, feel free to reach out.</p></div>
        <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
          <a id="emailBtn" href="#contact" class="inline-flex items-center justify-center rounded-xl bg-indigo-500 px-5 py-3 text-sm font-semibold text-white ring-1 ring-indigo-400/30 hover:bg-indigo-400 transition">Email me</a>
          <a href="#projects" class="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 transition">Review projects</a>
        </div>
      </div>
      <div class="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p class="text-sm text-white/70">Socials</p>
        <div class="flex flex-wrap gap-2">
          <a href="https://www.facebook.com/andreisantos70" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/10 transition">Facebook</a>
          <a href="https://github.com/sleepy-shan" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/10 transition">GitHub</a>
          <a href="https://www.linkedin.com/in/shanandrey/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/10 transition">LinkedIn</a>
        </div>
      </div>
      <div class="mt-7 grid gap-4 sm:grid-cols-3">
        <div class="rounded-2xl border border-white/10 bg-black/20 p-4"><p class="text-xs text-white/60">Response time</p><p class="mt-1 text-sm font-semibold">Usually 24-48h</p></div>
        <div class="rounded-2xl border border-white/10 bg-black/20 p-4"><p class="text-xs text-white/60">Location</p><p class="mt-1 text-sm font-semibold">Capas, Tarlac, Philippines</p></div>
        <div class="rounded-2xl border border-white/10 bg-black/20 p-4"><p class="text-xs text-white/60">Specialty</p><p class="mt-1 text-sm font-semibold">Software development and IT support</p></div>
      </div>
    </div>
  </section>
</main>`;
