"use client";

const socials = [
  { label: "GH", url: "https://github.com/Doocell", hoverBg: "hover:bg-tertiary-fixed" },
  { label: "IN", url: "https://www.linkedin.com/in/danyriskyardiansyah/", hoverBg: "hover:bg-primary-container hover:text-on-primary" },
  { label: "IG", url: "https://www.instagram.com/dnyysides/", hoverBg: "hover:bg-secondary-container hover:text-on-secondary" },
  { label: "ML", url: "mailto:danyrizkya@gmail.com", hoverBg: "hover:bg-tertiary-fixed" },
];

export function DarkFooterSection() {
  return (
    <section className="w-full bg-[#111111] text-surface py-12 md:py-16 relative">
      {/* MOBILE VIEW (< md) */}
      <div className="w-full px-5 py-6 flex flex-col space-y-8 md:hidden">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-tertiary-fixed text-on-surface px-3 py-1.5 rounded-full border-[2px] border-surface shadow-[2px_2px_0px_#ffffff] -rotate-2">
            <span className="text-secondary-container font-black text-xs">✦</span>
            <span className="font-headline-sm text-xs text-on-surface">DANY RISKY</span>
            <span className="text-primary-container font-black text-xs">★</span>
          </div>
          <p className="font-body-md text-xs text-outline-variant leading-relaxed">
            Front-End Developer &amp; UI/UX Designer crafting joyful digital experiences.
          </p>
        </div>

        <div>
          <h4 className="font-headline-sm text-xs text-surface uppercase tracking-wider mb-3">
            QUICK LINKS
          </h4>
          <div className="grid grid-cols-2 gap-2 font-body-md text-xs text-outline-variant">
            <a className="hover:text-tertiary-fixed transition-colors" href="#home">Home</a>
            <a className="hover:text-tertiary-fixed transition-colors" href="#about">About</a>
            <a className="hover:text-tertiary-fixed transition-colors" href="#services">Services</a>
            <a className="hover:text-tertiary-fixed transition-colors" href="#work">Work</a>
            <a className="hover:text-tertiary-fixed transition-colors" href="#process">Process</a>
            <a className="hover:text-tertiary-fixed transition-colors" href="#contact">Contact</a>
          </div>
        </div>

        <div>
          <h4 className="font-headline-sm text-xs text-surface uppercase tracking-wider mb-3">
            LET&apos;S CONNECT
          </h4>
          <div className="flex items-center gap-2.5">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-surface text-on-surface flex items-center justify-center font-bold text-xs border border-surface shadow-[2px_2px_0px_#ffffff] hover:bg-tertiary-fixed transition-colors"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-headline-sm text-xs text-surface uppercase tracking-wider mb-2.5">
            STAY IN THE LOOP
          </h4>
          <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              className="px-3 py-2 bg-[#222222] text-surface rounded-xl border border-outline-variant text-xs focus:outline-none focus:border-tertiary-fixed shadow-[2px_2px_0px_#ffffff]"
              placeholder="your@email.com"
              type="email"
            />
            <button
              className="px-3 py-2 bg-tertiary-fixed text-on-tertiary-fixed font-headline-sm text-xs rounded-xl border border-surface shadow-[2px_2px_0px_#ffffff] uppercase"
              type="submit"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>

        <div className="pt-4 border-t border-[#333333] flex flex-col items-center text-center text-xs text-outline-variant gap-2">
          <span>© 2026 Dany Risky Ardiansyah. All Rights Reserved.</span>
          <div className="flex items-center gap-3 text-[10px]">
            <span>Privacy</span>
            <span>•</span>
            <span>Credits</span>
            <span>•</span>
            <span>Cookies</span>
          </div>
        </div>
      </div>

      {/* DESKTOP VIEW (>= md) */}
      <div className="hidden md:block max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl pb-12 border-b border-[#333333]">
          {/* Col 1: Logo & Mission */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-tertiary-fixed text-on-surface px-4 py-2 rounded-full border-[2.5px] border-surface shadow-[3px_3px_0px_#ffffff] -rotate-2">
              <span className="text-secondary-container font-black">✦</span>
              <span className="font-headline-sm text-headline-sm text-on-surface">DANY RISKY A</span>
              <span className="text-primary-container font-black">★</span>
            </div>
            <p className="font-body-md text-body-sm text-outline-variant leading-relaxed">
              Front-End Developer &amp; UI/UX Designer crafting code &amp; memorable digital experiences.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-headline-sm text-body-md text-surface uppercase tracking-wider mb-4">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 font-body-md text-body-sm text-outline-variant">
              <li><a className="hover:text-tertiary-fixed transition-colors hover:underline" href="#home">Home</a></li>
              <li><a className="hover:text-tertiary-fixed transition-colors hover:underline" href="#about">About</a></li>
              <li><a className="hover:text-tertiary-fixed transition-colors hover:underline" href="#services">Services</a></li>
              <li><a className="hover:text-tertiary-fixed transition-colors hover:underline" href="#work">Work &amp; Case Studies</a></li>
              <li><a className="hover:text-tertiary-fixed transition-colors hover:underline" href="#process">Process</a></li>
              <li><a className="hover:text-tertiary-fixed transition-colors hover:underline" href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Col 3: Let's Connect */}
          <div>
            <h4 className="font-headline-sm text-body-md text-surface uppercase tracking-wider mb-4">
              LET&apos;S CONNECT
            </h4>
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-10 h-10 rounded-full bg-surface text-on-surface flex items-center justify-center font-bold border-[2px] border-surface ${social.hoverBg} transition-colors shadow-[2px_2px_0px_#ffffff]`}
                >
                  {social.label}
                </a>
              ))}
            </div>
            <div className="mt-6 inline-block bg-primary-container text-on-primary px-3 py-1 rounded-lg border-[2px] border-surface shadow-[3px_3px_0px_#ffffff] rotate-2 text-xs font-headline-sm uppercase tracking-wider">
              CRAFTING CODE &amp; EXPERIENCES
            </div>
          </div>

          {/* Col 4: Stay in the Loop */}
          <div>
            <h4 className="font-headline-sm text-body-md text-surface uppercase tracking-wider mb-4">
              STAY IN THE LOOP
            </h4>
            <p className="font-body-sm text-body-sm text-outline-variant mb-3">
              Get occasional updates on web experiments, design tools, and projects.
            </p>
            <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@email.com"
                className="px-4 py-2 bg-[#222222] text-surface rounded-xl border-[2px] border-outline-variant text-sm focus:outline-none focus:border-tertiary-fixed shadow-[3px_3px_0px_#ffffff]"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-tertiary-fixed text-on-tertiary-fixed font-headline-sm text-body-sm rounded-xl border-[2px] border-surface shadow-[3px_3px_0px_#ffffff] hover:-translate-y-0.5 transition-transform uppercase"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-body-sm text-outline-variant gap-4">
          <span>© 2026 Dany Risky Ardiansyah. All Rights Reserved.</span>
          <div className="flex items-center gap-4 text-xs">
            <span className="hover:underline cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:underline cursor-pointer">Design Credits</span>
            <span>•</span>
            <span className="hover:underline cursor-pointer">Cookie Preferences</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FooterBar() {
  return (
    <footer className="hidden md:block w-full bg-surface-container-high border-t-[2.5px] border-on-surface py-space-xl">
      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin flex flex-col md:flex-row items-center justify-between gap-space-lg">
        <div className="flex items-center gap-space-md">
          <div className="px-3 py-1 bg-surface-container-lowest rounded-full border-[2px] border-on-surface shadow-[2px_2px_0_0_#1c1c17] font-headline-sm text-sm uppercase">
            DANY RISKY
          </div>
          <span className="font-headline-sm text-headline-sm text-on-surface">
            Designed &amp; Crafted by Dany Risky Ardiansyah
          </span>
        </div>
        <div className="flex items-center gap-space-md font-label-md text-label-md text-on-surface-variant">
          <span className="px-space-md py-space-xs bg-tertiary-fixed text-on-tertiary-fixed rounded-full border-[2px] border-on-surface shadow-[2px_2px_0_0_#1c1c17]">
            FRONT-END &amp; UI/UX
          </span>
          <span>© 2026 All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
}

export default function Footer() {
  return (
    <>
      <DarkFooterSection />
      <FooterBar />
    </>
  );
}
