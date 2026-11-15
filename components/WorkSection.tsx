export default function WorkSection() {
  const projects = [
    {
      title: "Neo-Brutalist Portfolio",
      category: "Front-End & UI/UX",
      badge: "PORTFOLIO",
      bg: "#FF9EC4",
      textColor: "#111111",
      tag: "-rotate-3",
    },
    {
      title: "Modern E-Commerce Store",
      category: "Next.js & TypeScript",
      badge: "WEB APP",
      bg: "#1F3FD1",
      textColor: "#ffffff",
      tag: "rotate-2",
    },
    {
      title: "Interactive Analytics Dashboard",
      category: "React & Tailwind CSS",
      badge: "SAAS UI",
      bg: "#FFD21F",
      textColor: "#111111",
      tag: "-rotate-2",
    },
    {
      title: "Design System & Prototyping",
      category: "Figma & UI/UX Case Study",
      badge: "DESIGN SYSTEM",
      bg: "#E8402F",
      textColor: "#ffffff",
      tag: "rotate-3",
    },
  ];

  return (
    <section id="work" className="w-full bg-surface-container-lowest py-14 lg:py-20 border-b-[3px] border-on-surface relative">
      {/* MOBILE VIEW (< md) */}
      <div className="w-full px-4 py-8 relative z-10 md:hidden">
        <div className="flex flex-col items-start gap-2 mb-6">
          <div className="inline-flex items-center gap-1.5 bg-on-surface text-surface px-3 py-1 rounded-full border-[2px] border-on-surface shadow-[2px_2px_0px_#111111]">
            <span className="font-headline-sm text-xs uppercase tracking-wider">SELECTED WORK</span>
            <span className="material-symbols-outlined text-xs">stars</span>
          </div>
          <div className="flex items-center justify-between w-full">
            <h2 className="font-display text-xl text-on-surface">Things I&apos;ve Built &amp; Shipped</h2>
            <a
              className="inline-flex items-center px-2.5 py-1 bg-secondary-container text-on-secondary font-headline-sm text-[10px] rounded-full border-[2px] border-on-surface shadow-[2px_2px_0px_#111111] uppercase"
              href="https://github.com/Doocell"
              target="_blank"
              rel="noreferrer"
            >
              VIEW ALL →
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-surface p-3 rounded-[24px] border-[3px] border-[#111111] shadow-[6px_6px_0px_#111111] flex flex-col justify-between"
              style={{ border: "3px solid rgb(17, 17, 17)", borderRadius: "24px", boxShadow: "rgb(17, 17, 17) 6px 6px 0px" }}
            >
              <div
                className="relative w-full h-24 rounded-xl border-[2px] border-[#111111] overflow-hidden flex items-center justify-center p-2"
                style={{ backgroundColor: project.bg }}
              >
                <div className="w-full h-full border-2 border-dashed border-[#111111] rounded-lg flex items-center justify-center">
                  <span
                    className="text-[9px] font-mono font-bold uppercase tracking-wider text-center"
                    style={{ color: project.textColor }}
                  >
                    {project.badge}
                  </span>
                </div>
                <div className={`absolute top-1 left-1 bg-surface-container-lowest text-on-surface px-1.5 py-0.5 rounded-full border border-on-surface font-headline-sm text-[8px] ${project.tag} shadow-[1.5px_1.5px_0px_#111111]`}>
                  {project.badge}
                </div>
              </div>
              <div className="mt-2.5 flex-1 flex flex-col justify-between">
                <span className="font-label-md text-[9px] uppercase tracking-wider text-on-surface-variant font-bold block truncate">
                  {project.category}
                </span>
                <h3 className="font-headline-sm text-sm text-on-surface font-bold leading-tight mt-0.5">
                  {project.title}
                </h3>
                <div className="mt-2 pt-1.5 border-t border-surface-container flex items-center justify-between text-[9px] text-on-surface font-semibold">
                  <span>Case Study</span>
                  <a
                    href="https://github.com/Doocell"
                    target="_blank"
                    rel="noreferrer"
                    className="w-5 h-5 rounded-full bg-on-surface text-surface flex items-center justify-center text-[10px] hover:bg-tertiary-fixed hover:text-on-surface transition-colors"
                  >
                    ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DESKTOP VIEW (>= md) */}
      <div className="hidden md:block max-w-[1440px] mx-auto px-margin-mobile lg:px-margin relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-14">
          <div>
            <div className="inline-flex items-center gap-2 bg-on-surface text-surface px-4 py-1.5 rounded-full border-[2px] border-on-surface shadow-[3px_3px_0px_#111111] mb-3">
              <span className="font-headline-sm text-label-md uppercase tracking-wider">SELECTED WORK</span>
              <span className="material-symbols-outlined text-sm">stars</span>
            </div>
            <h2 className="font-display text-headline-lg text-on-surface">
              Things I&apos;ve Built &amp; Shipped
            </h2>
          </div>
          <a
            href="https://github.com/Doocell"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-secondary-container text-on-secondary font-headline-sm text-body-sm rounded-full border-[2.5px] border-on-surface shadow-[4px_4px_0px_#111111] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#111111] transition-all uppercase"
          >
            VIEW ALL ON GITHUB →
          </a>
        </div>

        {/* 4 Project Cards (2x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-xl">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-surface p-6 rounded-[1.5rem] border-[3px] border-on-surface shadow-[6px_6px_0px_#111111] flex flex-col justify-between group hover:-translate-y-1 transition-transform"
              style={{ border: "3px solid rgb(17, 17, 17)", borderRadius: "24px", boxShadow: "rgb(17, 17, 17) 6px 6px 0px" }}
            >
              <div>
                {/* Colored Thumbnail Area */}
                <div
                  className="relative w-full h-64 rounded-2xl border-[3px] border-on-surface overflow-hidden flex items-center justify-center p-6 shadow-inner"
                  style={{ backgroundColor: project.bg }}
                >
                  {/* Sticker Tag */}
                  <div className={`absolute top-4 left-4 bg-surface-container-lowest text-on-surface px-3 py-1 rounded-full border-[2px] border-on-surface font-headline-sm text-label-sm shadow-[2px_2px_0px_#111111] ${project.tag} z-10`}>
                    🏷️ {project.badge}
                  </div>
                  {/* Dashed Image Placeholder */}
                  <div className="w-full h-full border-2 border-dashed border-[#111111] rounded-xl flex items-center justify-center bg-surface-container-lowest/40 backdrop-blur-sm">
                    <span className="font-mono font-bold text-base tracking-wider uppercase" style={{ color: project.textColor }}>
                      {project.title}
                    </span>
                  </div>
                </div>
                {/* Details */}
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <span className="font-label-md text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">
                      {project.category}
                    </span>
                    <h3 className="font-headline-md text-headline-md text-on-surface mt-1">
                      {project.title}
                    </h3>
                  </div>
                  <a
                    href="https://github.com/Doocell"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-on-surface text-surface flex items-center justify-center text-sm font-bold shadow-[2px_2px_0px_#111111] hover:bg-tertiary-fixed hover:text-on-surface transition-all"
                  >
                    ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

