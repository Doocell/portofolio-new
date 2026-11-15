"use client";

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full bg-surface pt-space-xl pb-20 lg:pb-32 overflow-hidden border-b-[3px] border-on-surface">
      {/* Background Doodles */}
      <div className="absolute inset-0 pointer-events-none opacity-40 select-none">
        <svg className="absolute top-6 right-6 lg:top-12 lg:left-16 w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
        <svg className="absolute bottom-20 left-4 lg:top-1/2 lg:left-10 w-9 h-9 lg:w-12 lg:h-12 text-tertiary-fixed-dim -rotate-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
        <svg className="hidden lg:block absolute top-20 right-1/4 w-10 h-10 text-primary-container rotate-45" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
        <svg className="hidden lg:block absolute bottom-16 right-12 w-14 h-14 text-secondary-container -rotate-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="6" viewBox="0 0 100 100">
          <path d="M10 50 Q 30 10, 50 50 T 90 50" />
        </svg>
      </div>

      {/* MOBILE VIEW (< lg) */}
      <div className="w-full px-5 pt-8 pb-14 flex flex-col items-center text-center relative z-10 lg:hidden">
        <div className="inline-flex items-center gap-2 bg-on-surface text-surface px-3.5 py-1 rounded-full border-[2.5px] border-on-surface shadow-[3px_3px_0px_#111111] -rotate-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-tertiary-fixed"></span>
          <span className="font-headline-sm text-xs tracking-wider uppercase">FRONT-END DEV &amp; UI/UX</span>
        </div>

        <div className="relative w-full my-2">
          <div className="inline-flex items-center gap-1 bg-tertiary-fixed text-on-tertiary-fixed px-2.5 py-0.5 rounded-full border-[2px] border-on-surface shadow-[2px_2px_0px_#111111] rotate-3 text-[10px] font-headline-sm uppercase tracking-wider mb-2">
            <span>✦ 100% FRESH CODE</span>
          </div>
          <h1 className="font-display text-4xl leading-[1.05] tracking-tight text-on-surface select-none">
            <span className="relative inline-block">
              CRAFTING
              <svg className="absolute -top-3 -right-3 w-4 h-4 text-secondary rotate-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"></path>
              </svg>
            </span>
            <br />
            <span className="relative inline-block text-primary-container mt-1">
              CODE &amp;
              <span className="absolute left-0 -bottom-1.5 w-full h-3.5 bg-tertiary-fixed -z-10 rounded-full rotate-[-1deg] border-[2px] border-on-surface shadow-[2px_2px_0px_#111111]"></span>
            </span>
            <br />
            <span className="relative inline-block mt-1">
              <span className="relative inline-block text-secondary-container">
                EXPERIENCES!
                <svg className="absolute -top-5 -right-5 w-7 h-7 text-tertiary-fixed-dim" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"></path>
                </svg>
              </span>
            </span>
          </h1>
        </div>

        <p className="font-body-md text-sm text-on-surface-variant max-w-xs mt-3 leading-relaxed">
          Hi, I'm Dany Risky Ardiansyah. Turning bold ideas into high performance web applications and intuitive interfaces.
        </p>

        <div className="flex flex-col w-full max-w-xs gap-3 pt-5">
          <a
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-container text-on-primary font-headline-sm text-sm rounded-full border-[3px] border-on-surface shadow-[4px_4px_0px_#111111] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all uppercase tracking-wide"
            href="#work"
          >
            <span>VIEW MY WORK</span>
            <span className="material-symbols-outlined text-sm">arrow_downward</span>
          </a>
          <a
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-surface-container-lowest text-on-surface font-headline-sm text-sm rounded-full border-[2.5px] border-on-surface shadow-[3px_3px_0px_#111111] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all uppercase tracking-wide"
            href="#contact"
          >
            GET IN TOUCH
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          <span className="px-2.5 py-0.5 bg-tertiary-fixed text-on-tertiary-fixed font-label-md text-[10px] rounded-full border-[1.5px] border-on-surface shadow-[2px_2px_0px_#111111] rotate-1">React / Next.js</span>
          <span className="px-2.5 py-0.5 bg-surface-container-lowest text-on-surface font-label-md text-[10px] rounded-full border-[1.5px] border-on-surface shadow-[2px_2px_0px_#111111] -rotate-1">UI/UX Design</span>
        </div>

        <div className="relative mt-8 flex justify-center items-center">
          <div className="relative w-64 h-64 bg-primary-container rounded-[42%_58%_70%_30%/45%_45%_55%_55%] p-3 border-[3px] border-on-surface shadow-[6px_6px_0px_#111111] flex items-center justify-center">
            <div className="w-full h-full rounded-[38%_62%_65%_35%/50%_40%_60%_50%] overflow-hidden border-[3.5px] border-surface-container-lowest shadow-inner bg-surface-container flex flex-col items-center justify-center">
              <img
                src="/PPputih.png"
                alt="Profile Photo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-4 -left-3 bg-surface-container-lowest text-on-surface font-headline-sm text-xs px-3 py-1.5 rounded-xl border-[2px] border-on-surface shadow-[3px_3px_0px_#111111] -rotate-6 z-20 flex items-center gap-1">
              <span>✨ Front-End &amp; UI/UX</span>
            </div>
            <div className="absolute -bottom-3 -right-2 w-11 h-11 bg-secondary-container rounded-full border-[2.5px] border-on-surface shadow-[3px_3px_0px_#111111] flex items-center justify-center -rotate-12 z-20">
              <svg className="w-6 h-6 text-surface-container-lowest" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
              </svg>
            </div>
            <div className="absolute -bottom-3 -left-2 bg-tertiary-fixed text-on-tertiary-fixed px-2.5 py-1 rounded-full border-[2px] border-on-surface shadow-[3px_3px_0px_#111111] rotate-3 z-20 font-headline-sm text-[10px] flex items-center gap-1">
              <span>★ OPEN FOR WORK</span>
            </div>
          </div>
        </div>
      </div>

      {/* DESKTOP VIEW (>= lg) */}
      <div className="hidden lg:block max-w-[1440px] mx-auto px-margin-mobile lg:px-margin relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center pt-space-md">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-space-lg">
            {/* "I BUILD" Pill Tag */}
            <div className="inline-flex items-center gap-2 bg-on-surface text-surface px-4 py-1.5 rounded-full border-[2.5px] border-on-surface shadow-[4px_4px_0px_#111111] -rotate-2 transform hover:rotate-0 transition-transform">
              <span className="w-2.5 h-2.5 rounded-full bg-tertiary-fixed"></span>
              <span className="font-headline-sm text-label-md tracking-wider uppercase">FRONT-END DEVELOPER &amp; UI/UX DESIGNER</span>
            </div>

            {/* Giant Display Heading */}
            <div className="relative w-full select-none my-2">
              {/* Floating Doodle 1: Sparkle starburst */}
              <svg className="absolute -top-7 -left-6 sm:-left-8 w-10 h-10 text-tertiary-fixed-dim -rotate-12 pointer-events-none z-10 animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
              </svg>
              {/* Floating Doodle 2: Tiny fresh sticker badge */}
              <div className="absolute -top-6 right-2 sm:right-10 bg-tertiary-fixed text-on-tertiary-fixed px-3 py-0.5 rounded-full border-[2px] border-on-surface shadow-[3px_3px_0px_#111111] rotate-6 text-xs font-headline-sm uppercase tracking-wider flex items-center gap-1 z-20">
                <span>✦ 100% FRESH CODE</span>
              </div>

              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.2rem] leading-[0.95] tracking-tight text-on-surface select-none relative z-10">
                <span className="relative inline-block">
                  CRAFTING
                  <svg className="absolute -top-3 -right-4 w-5 h-5 text-secondary rotate-12 pointer-events-none" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                  </svg>
                </span>
                <br className="hidden sm:inline" />
                <span className="relative inline-block text-primary-container whitespace-nowrap mt-1 sm:mt-2">
                  CODE &amp;
                  <span className="absolute left-0 -bottom-2 sm:-bottom-3 w-full h-4 sm:h-5 bg-tertiary-fixed -z-10 rounded-full rotate-[-1deg] border-[2.5px] border-on-surface shadow-[2px_2px_0px_#111111]"></span>
                  <svg className="absolute -top-4 right-6 w-6 h-6 text-primary-container pointer-events-none rotate-45" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                  </svg>
                </span>
                <br />
                <span className="relative inline-block mt-1 sm:mt-2">
                  <span className="relative inline-block text-secondary-container ml-1">
                    EXPERIENCES!
                    <svg className="absolute -top-7 -right-7 sm:-right-8 w-10 h-10 text-tertiary-fixed-dim animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                    </svg>
                    <svg className="absolute -bottom-3 -left-6 w-7 h-7 text-secondary rotate-12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                    </svg>
                    <div className="absolute -bottom-5 -right-9 w-8 h-8 rounded-full bg-secondary-container border-[2px] border-on-surface shadow-[2px_2px_0px_#111111] flex items-center justify-center rotate-12 hover:scale-110 transition-transform pointer-events-none">
                      <svg className="w-4 h-4 text-surface" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    </div>
                  </span>
                </span>
              </h1>

              {/* Playful squiggle doodle */}
              <svg className="w-36 h-6 text-secondary-container mt-2 -rotate-1 pointer-events-none" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="4" viewBox="0 0 140 24">
                <path d="M4 14 Q 20 4, 36 14 T 68 14 T 100 14 T 132 14" />
              </svg>
            </div>

            {/* Subheading */}
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              Hi, I&apos;m Dany Risky Ardiansyah. Turning bold ideas into high-performance web applications and intuitive interfaces.
            </p>

            {/* Buttons & Doodle Arrow */}
            <div className="flex flex-wrap items-center gap-space-lg pt-space-sm relative">
              <a href="#work" className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary-container text-on-primary font-headline-sm text-body-lg rounded-full border-[3px] border-on-surface shadow-[4px_4px_0px_#111111] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#111111] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all uppercase tracking-wide">
                VIEW MY WORK
                <span className="material-symbols-outlined text-headline-sm">arrow_downward</span>
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-surface-container-lowest text-on-surface font-headline-sm text-body-lg rounded-full border-[3px] border-on-surface shadow-[4px_4px_0px_#111111] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#111111] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all uppercase tracking-wide">
                GET IN TOUCH
              </a>
              {/* Hand-drawn curly doodle arrow */}
              <div className="hidden md:flex absolute -right-24 -top-8 flex-col items-center">
                <span className="font-headline-sm text-label-sm text-primary-container rotate-12">check it out!</span>
                <svg className="w-16 h-12 text-on-surface -rotate-45" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" viewBox="0 0 60 50">
                  <path d="M10,10 C25,5 45,15 35,35 C30,45 20,40 25,30 C30,20 50,35 55,45" />
                  <path d="M48,45 L55,45 L54,38" />
                </svg>
              </div>
            </div>

            {/* Micro Quick Credential Badges */}
            <div className="flex items-center gap-3 pt-space-md">
              <span className="px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed font-label-md text-label-sm rounded-full border-[2px] border-on-surface shadow-[2px_2px_0px_#111111] rotate-1">React / Next.js</span>
              <span className="px-3 py-1 bg-surface-container-lowest text-on-surface font-label-md text-label-sm rounded-full border-[2px] border-on-surface shadow-[2px_2px_0px_#111111] -rotate-1">UI/UX Design</span>
              <span className="px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed font-label-md text-label-sm rounded-full border-[2px] border-on-surface shadow-[2px_2px_0px_#111111] rotate-2">TypeScript</span>
            </div>
          </div>

          {/* Right Column: Visual Portrait Composition */}
          <div className="lg:col-span-5 relative flex justify-center items-center py-6">
            <div className="relative w-[340px] h-[340px] sm:w-[400px] sm:h-[400px] bg-primary-container rounded-[42%_58%_70%_30%/45%_45%_55%_55%] p-4 border-[3.5px] border-on-surface shadow-[8px_8px_0px_#111111] flex items-center justify-center transition-transform hover:rotate-1">
              {/* Die-cut Inner Frame */}
              <div className="w-full h-full rounded-[38%_62%_65%_35%/50%_40%_60%_50%] overflow-hidden border-[4px] border-surface-container-lowest shadow-inner bg-surface flex items-center justify-center">
                <img
                  src="/PPputih.png"
                  alt="Profile Photo"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Sticker 1: Comic Speech Bubble */}
              <div className="absolute -top-7 -left-10 bg-surface-container-lowest text-on-surface font-headline-sm text-body-sm px-4 py-2 rounded-2xl border-[2.5px] border-on-surface shadow-[4px_4px_0px_#111111] -rotate-6 z-20 flex items-center gap-1.5">
                <span>✨ Front-End &amp; UI/UX</span>
                <div className="absolute -bottom-2 left-6 w-3 h-3 bg-surface-container-lowest border-r-[2.5px] border-b-[2.5px] border-on-surface rotate-45"></div>
              </div>

              {/* Floating Sticker 2: Yellow Lightning Bolt */}
              <div className="absolute -top-4 -right-4 w-14 h-14 bg-tertiary-fixed rounded-2xl border-[2.5px] border-on-surface shadow-[4px_4px_0px_#111111] flex items-center justify-center rotate-12 z-20 hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-on-surface" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 2V13H10V22L17 10H13L16 2H7Z" />
                </svg>
              </div>

              {/* Floating Sticker 3: Red Puffy Heart */}
              <div className="absolute -bottom-6 -right-4 w-14 h-14 bg-secondary-container rounded-full border-[2.5px] border-on-surface shadow-[4px_4px_0px_#111111] flex items-center justify-center -rotate-12 z-20 hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-surface-container-lowest" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>

              {/* Floating Sticker 4: Yellow Star Badge */}
              <div className="absolute -bottom-6 -left-6 bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1.5 rounded-full border-[2.5px] border-on-surface shadow-[4px_4px_0px_#111111] rotate-6 z-20 font-headline-sm text-body-sm flex items-center gap-1">
                <span>★ OPEN FOR WORK</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

