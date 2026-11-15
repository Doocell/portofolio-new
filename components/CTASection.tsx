export default function CTASection() {
  return (
    <section id="contact" className="w-full bg-secondary-container py-14 lg:py-24 text-on-secondary border-b-[3px] border-on-surface relative overflow-hidden">
      {/* Background Sparkles */}
      <div className="absolute inset-0 pointer-events-none opacity-30 select-none">
        <span className="absolute top-10 left-20 text-4xl">✨</span>
        <span className="absolute bottom-12 left-1/3 text-4xl">⭐</span>
        <span className="absolute top-16 right-28 text-5xl">⚡</span>
      </div>

      {/* MOBILE VIEW (< lg) */}
      <div className="w-full px-5 py-8 relative z-10 flex flex-col items-center text-center lg:hidden">
        <div className="inline-flex items-center gap-1.5 bg-surface-container-lowest text-on-surface px-3 py-1 rounded-full border-[2px] border-on-surface shadow-[3px_3px_0px_#111111] mb-4 -rotate-2">
          <span className="material-symbols-outlined text-xs">waving_hand</span>
          <span className="font-headline-sm text-xs uppercase tracking-wider">HAVE A PROJECT IN MIND?</span>
        </div>
        <h2 className="font-display text-3xl leading-tight text-surface-container-lowest select-none">
          LET&apos;S BUILD SOMETHING<br />
          <span className="text-tertiary-fixed underline decoration-on-surface decoration-wavy decoration-2">AWESOME TOGETHER</span>
        </h2>
        <p className="font-body-md text-xs text-secondary-fixed mt-3 max-w-xs leading-relaxed">
          Got an idea, a redesign project, or want to collaborate? Feel free to reach out anytime!
        </p>
        <div className="mt-6 flex flex-col w-full max-w-xs items-center gap-3">
          <a
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-surface-container-lowest text-on-surface font-headline-sm text-sm rounded-full border-[3px] border-on-surface shadow-[4px_4px_0px_#111111] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all uppercase"
            href="mailto:danyrizkya@gmail.com"
          >
            LET&apos;S CHAT →
          </a>
          <span className="font-label-md text-xs text-secondary-fixed">danyrizkya@gmail.com ⚡</span>
        </div>
        <div className="mt-8 flex justify-center">
          <div className="w-44 h-44 bg-tertiary-fixed rounded-full border-[3px] border-on-surface shadow-[6px_6px_0px_#111111] flex flex-col items-center justify-center text-on-surface rotate-3">
            <span className="text-4xl mb-1">☎️</span>
            <span className="font-headline-sm text-sm uppercase font-bold">OPEN FOR WORK</span>
            <span className="font-body-sm text-[10px] font-bold bg-surface-container-lowest px-2 py-0.5 rounded-full border border-on-surface mt-1.5 shadow-[1.5px_1.5px_0px_#111111]">
              FREELANCE / FULL-TIME
            </span>
          </div>
        </div>
      </div>

      {/* DESKTOP VIEW (>= lg) */}
      <div className="hidden lg:block max-w-[1440px] mx-auto px-margin-mobile lg:px-margin relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-space-xl">
          {/* Left Side: Big Bold Copy with Floating Stickers */}
          <div className="max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-surface-container-lowest text-on-surface px-4 py-1.5 rounded-full border-[2.5px] border-on-surface shadow-[4px_4px_0px_#111111] mb-6 -rotate-2">
              <span className="material-symbols-outlined text-sm">waving_hand</span>
              <span className="font-headline-sm text-label-md uppercase tracking-wider">HAVE A PROJECT IN MIND?</span>
            </div>
            <h2 className="font-display text-display leading-none text-surface-container-lowest select-none">
              LET&apos;S BUILD SOMETHING <br />
              <span className="text-tertiary-fixed underline decoration-on-surface decoration-wavy decoration-4">AWESOME TOGETHER</span>
            </h2>
            <p className="font-body-lg text-body-lg text-secondary-fixed mt-6 max-w-lg">
              Got an idea, a web application project, or looking for a Front-End &amp; UI/UX developer? Drop me a message and let&apos;s talk!
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a href="mailto:danyrizkya@gmail.com" className="inline-flex items-center gap-3 px-8 py-4 bg-surface-container-lowest text-on-surface font-headline-sm text-headline-sm rounded-full border-[3px] border-on-surface shadow-[6px_6px_0px_#111111] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0px_#111111] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all uppercase">
                LET&apos;S CHAT →
              </a>
              <span className="font-label-md text-label-md text-secondary-fixed">danyrizkya@gmail.com ⚡</span>
            </div>
          </div>

          {/* Right Side: Retro Doodle Badge */}
          <div className="relative flex items-center justify-center">
            <div className="w-64 h-64 bg-tertiary-fixed rounded-full border-[3.5px] border-on-surface shadow-[8px_8px_0px_#111111] flex flex-col items-center justify-center text-on-surface rotate-6 hover:rotate-12 transition-transform">
              <span className="text-6xl mb-2">☎️</span>
              <span className="font-headline-sm text-headline-sm uppercase">OPEN FOR WORK</span>
              <span className="font-body-sm text-label-sm font-bold bg-surface-container-lowest px-3 py-1 rounded-full border-[2px] border-on-surface mt-2 shadow-[2px_2px_0px_#111111]">
                FREELANCE &amp; FULL-TIME
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

