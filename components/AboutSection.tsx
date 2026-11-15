export default function AboutSection() {
  const skills = [
    "React / Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Figma UI/UX",
  ];

  return (
    <section id="about" className="w-full bg-tertiary-fixed py-14 lg:py-20 border-b-[3px] border-on-surface relative">
      {/* MOBILE VIEW (< lg) */}
      <div className="w-full px-5 py-8 flex flex-col items-center relative z-10 space-y-8 lg:hidden">
        <div className="flex flex-col items-start w-full space-y-3">
          <span className="px-3 py-1 bg-on-surface text-surface rounded-full font-headline-sm text-xs tracking-wider border-[2px] border-on-surface shadow-[2px_2px_0px_#111111] uppercase">
            ABOUT ME
          </span>
          <h2 className="font-headline-lg text-2xl text-on-surface leading-tight">
            Turning ideas into delightful digital realities.
          </h2>
          <p className="font-body-md text-sm text-on-surface leading-relaxed">
            I&apos;m Dany Risky Ardiansyah, a Front-End Developer &amp; UI/UX Designer. I specialize in crafting clean code, engaging user interactions, and robust design systems.
          </p>
          <div className="pt-1">
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-5 py-2 bg-surface-container-lowest text-on-surface font-headline-sm text-xs rounded-full border-[2.5px] border-on-surface shadow-[3px_3px_0px_#111111] transition-all"
            >
              <span>MORE ABOUT ME</span>
              <span className="material-symbols-outlined text-sm">expand_more</span>
            </a>
          </div>
        </div>

        {/* Mobile Avatar Card */}
        <div className="w-full flex justify-center">
          <div
            className="relative bg-surface-container-lowest p-5 rounded-[24px] border-[3px] border-[#111111] shadow-[6px_6px_0px_#111111] flex flex-col items-center"
            style={{ border: "3px solid rgb(17, 17, 17)", borderRadius: "24px", boxShadow: "rgb(17, 17, 17) 6px 6px 0px" }}
          >
            <div className="w-28 h-20 bg-surface-container rounded-xl border-[2.5px] border-on-surface overflow-hidden relative shadow-inner">
              <img src="/PPputih.png" alt="Your Avatar" className="w-full h-full object-cover" />
            </div>
            <div className="mt-3 px-3 py-1 bg-primary-container text-on-primary font-headline-sm text-xs rounded-full border-[2px] border-on-surface shadow-[2px_2px_0px_#111111]">
              HI THERE! 👋
            </div>
          </div>
        </div>

        {/* Mobile Toolbelt Note */}
        <div className="w-full flex justify-center">
          <div
            className="relative w-full max-w-sm bg-surface-container-lowest p-5 rounded-[24px] border-[3px] border-[#111111] shadow-[6px_6px_0px_#111111]"
            style={{ border: "3px solid rgb(17, 17, 17)", borderRadius: "24px", boxShadow: "rgb(17, 17, 17) 6px 6px 0px" }}
          >
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-28 h-6 bg-surface-variant/80 border-[2px] border-on-surface shadow-[2px_2px_0px_#111111] -rotate-2 z-10 flex items-center justify-center">
              <span className="text-[10px] font-mono font-bold tracking-widest text-on-surface">PINNED NOTE</span>
            </div>
            <div className="absolute -top-5 -right-3 w-8 h-8 text-tertiary-fixed-dim rotate-12">
              <svg fill="currentColor" stroke="#1c1c17" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5M19 19C19 19.6 18.6 20 18 20H6C5.4 20 5 19.6 5 19V17H19V19Z" />
              </svg>
            </div>
            <h3 className="font-headline-sm text-base text-on-surface mb-3 pt-1 flex items-center gap-2">
              <span>Core Toolbelt</span>
            </h3>
            <ul className="space-y-2.5 font-headline-sm text-xs text-on-surface">
              {skills.map((skill) => (
                <li key={skill} className="flex items-center gap-2.5 bg-surface-container-low p-2 rounded-xl border border-on-surface">
                  <span className="w-5 h-5 rounded-full bg-secondary-container text-surface flex items-center justify-center text-xs">✓</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
            <div className="mt-3 pt-2.5 flex justify-between items-center border-t-[2px] border-surface-container-highest">
              <span className="font-label-md text-[10px] text-on-surface-variant">READY FOR IMPACT</span>
              <div className="w-7 h-7 rounded-full bg-tertiary-fixed border-[2px] border-on-surface flex items-center justify-center text-xs shadow-[2px_2px_0px_#111111]">
                🌼
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DESKTOP VIEW (>= lg) */}
      <div className="hidden lg:block max-w-[1440px] mx-auto px-margin-mobile lg:px-margin relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
          {/* Col 1: Cartoon Mascot & Speech Bubble */}
          <div className="lg:col-span-3 flex flex-col items-center text-center">
            <div
              className="relative bg-surface-container-lowest p-6 rounded-[2rem] border-[3px] border-on-surface shadow-[6px_6px_0px_#111111] hover:-rotate-2 transition-transform"
              style={{ border: "3px solid rgb(17, 17, 17)", borderRadius: "24px", boxShadow: "rgb(17, 17, 17) 6px 6px 0px" }}
            >
              <div className="w-36 h-28 bg-surface-container rounded-xl border-[2.5px] border-on-surface overflow-hidden relative shadow-inner">
                <img src="/PPputih.png" alt="Your Avatar" className="w-full h-full object-cover" />
              </div>
              <div className="w-12 h-3 bg-on-surface mx-auto mt-2 rounded-sm"></div>
              <div className="w-20 h-2 bg-on-surface mx-auto mt-0.5 rounded-full"></div>
              <div className="mt-4 px-3 py-1 bg-primary-container text-on-primary font-headline-sm text-body-sm rounded-full border-[2px] border-on-surface shadow-[3px_3px_0px_#111111]">
                HI THERE! 👋
              </div>
            </div>
          </div>

          {/* Col 2: Bio & Philosophy */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-space-md">
            <span className="px-3.5 py-1 bg-on-surface text-surface rounded-full font-headline-sm text-label-md tracking-wider border-[2px] border-on-surface shadow-[3px_3px_0px_#111111] uppercase">
              ABOUT ME
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface leading-tight">
              Turning ideas into delightful digital realities.
            </h2>
            <p className="font-body-md text-body-md text-on-surface leading-relaxed">
              I&apos;m Dany Risky Ardiansyah, a Front-End Developer &amp; UI/UX Designer. I specialize in building responsive, accessible, and pixel-perfect web applications using modern technologies.
            </p>
            <div className="pt-2">
              <a href="#services" className="inline-flex items-center gap-2 px-6 py-2.5 bg-surface-container-lowest text-on-surface font-headline-sm text-body-md rounded-full border-[2.5px] border-on-surface shadow-[4px_4px_0px_#111111] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#111111] transition-all">
                MORE ABOUT ME
                <span className="material-symbols-outlined text-headline-sm">expand_more</span>
              </a>
            </div>
          </div>

          {/* Col 3: Torn Paper Note Card with Checklist */}
          <div className="lg:col-span-4 flex justify-center">
            <div
              className="relative w-full max-w-sm bg-surface-container-lowest p-6 rounded-[2rem] border-[3px] border-on-surface shadow-[6px_6px_0px_#111111] rotate-2 hover:rotate-0 transition-transform"
              style={{ border: "3px solid rgb(17, 17, 17)", borderRadius: "24px", boxShadow: "rgb(17, 17, 17) 6px 6px 0px" }}
            >
              {/* Masking Tape Sticker at Top */}
              <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 w-28 h-7 bg-surface-variant/80 border-[2px] border-on-surface shadow-[2px_2px_0px_#111111] -rotate-3 z-10 flex items-center justify-center">
                <span className="text-xs font-mono font-bold tracking-widest text-on-surface">PINNED NOTE</span>
              </div>
              {/* Golden Crown Doodle */}
              <div className="absolute -top-6 -right-4 w-10 h-10 text-tertiary-fixed-dim rotate-12">
                <svg fill="currentColor" stroke="#1c1c17" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5M19 19C19 19.6 18.6 20 18 20H6C5.4 20 5 19.6 5 19V17H19V19Z" />
                </svg>
              </div>

              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4 pt-2 flex items-center gap-2">
                <span>Core Toolbelt</span>
              </h3>

              <ul className="space-y-3 font-headline-sm text-body-md text-on-surface">
                {skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 bg-surface-container-low p-2 rounded-xl border border-on-surface">
                    <span className="w-6 h-6 rounded-full bg-secondary-container text-surface flex items-center justify-center text-sm">✓</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>

              {/* Footer with Smiling Daisy */}
              <div className="mt-4 pt-3 flex justify-between items-center border-t-[2px] border-surface-container-highest">
                <span className="font-label-md text-label-sm text-on-surface-variant">READY FOR IMPACT</span>
                <div className="w-8 h-8 rounded-full bg-tertiary-fixed border-[2px] border-on-surface flex items-center justify-center text-xs shadow-[2px_2px_0px_#111111]">
                  🌼
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

