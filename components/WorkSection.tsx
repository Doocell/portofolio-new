export default function WorkSection() {
  interface Project {
    title: string;
    category: string;
    badge: string;
    bg: string;
    textColor: string;
    tag: string;
    image?: string;
    url?: string;
    role?: string;
    description?: string;
    tags?: string[];
    featured?: boolean;
  }

  const featuredProject: Project = {
    title: "Web Interface OSJUR 2025",
    category: "Front-End Development • JavaScript",
    badge: "LIVE PROJECT",
    bg: "#593688",
    textColor: "#ffffff",
    tag: "-rotate-2",
    image: "/interface.png",
    url: "https://interface.himailkomunnes.com/",
    role: "Front-End Developer",
    description:
      "Mengembangkan dan membuat halaman antarmuka web interaktif untuk kegiatan Orientasi Jurusan (OSJUR) @himailkomunnes menggunakan JavaScript murni, struktur responsif, dan styling visual tematik.",
    tags: ["JavaScript (JS)", "HTML5 / CSS", "Web Interface", "@himailkomunnes"],
    featured: true,
  };

  const otherProjects: Project[] = [
    {
      title: "Personal Portfolio Website",
      category: "Front-End & UI/UX Design",
      badge: "PROJEK PRIBADI",
      bg: "#1F3FD1",
      textColor: "#ffffff",
      tag: "-rotate-2",
      image: "/porto.jpg",
      url: "https://danyrizkya-portofolio.vercel.app/",
      role: "Projek Pribadi",
      description: "Website portofolio interaktif pribadi yang menampilkan keahlian, pengalaman, dan karya dengan gaya playful neo-brutalisme.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    },
    {
      title: "PCOSmart",
      category: "Back-End Development • Health Tech",
      badge: "LIVE WEB APP",
      bg: "#6D44B8",
      textColor: "#ffffff",
      tag: "rotate-2",
      image: "/PCOS-beranda.jpeg",
      url: "https://pcossmart.vercel.app/",
      role: "Back-End Developer",
      description:
        "Aplikasi web pelacak kesehatan PCOS dengan check-in harian, asisten AI, dan edukasi bersumber.",
      tags: ["Back-End", "AI Assistant", "Health Tracker", "Vercel"],
    },
  //   {
  //     title: "Interactive Analytics Dashboard",
  //     category: "React & Tailwind CSS",
  //     badge: "SAAS UI",
  //     bg: "#FFD21F",
  //     textColor: "#111111",
  //     tag: "-rotate-2",
  //     url: "https://github.com/Doocell",
  //     role: "UI Engineer",
  //     description: "Dashboard analitik interaktif dengan visualisasi data, komponen modular, dan performa tinggi.",
  //   },
  //   {
  //     title: "Design System & Prototyping",
  //     category: "Figma & UI/UX Case Study",
  //     badge: "DESIGN SYSTEM",
  //     bg: "#E8402F",
  //     textColor: "#ffffff",
  //     tag: "rotate-3",
  //     url: "https://github.com/Doocell",
  //     role: "UI/UX Designer",
  //     description: "Sistem desain komprehensif, arsitektur token warna, tipografi, dan prototipe interaktif.",
  //   },
  // ];

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
              className="inline-flex items-center px-2.5 py-1 bg-secondary-container text-on-secondary font-headline-sm text-[10px] rounded-full border-[2px] border-on-surface shadow-[2px_2px_0px_#111111] uppercase font-bold"
              href="https://github.com/Doocell"
              target="_blank"
              rel="noreferrer"
            >
              GITHUB →
            </a>
          </div>
        </div>

        {/* Featured Live Project Card (Mobile) */}
        <div
          className="w-full bg-surface p-4 rounded-[24px] border-[3px] border-[#111111] shadow-[6px_6px_0px_#111111] flex flex-col mb-6"
          style={{ border: "3px solid rgb(17, 17, 17)", borderRadius: "24px", boxShadow: "rgb(17, 17, 17) 6px 6px 0px" }}
        >
          <div className="relative w-full h-44 rounded-xl border-[2.5px] border-[#111111] overflow-hidden bg-[#593688]">
            <img
              src={featuredProject.image}
              alt={featuredProject.title}
              className="w-full h-full object-cover object-top"
            />
            <div className={`absolute top-2 left-2 bg-tertiary-fixed text-on-surface px-2.5 py-0.5 rounded-full border-[2px] border-on-surface font-headline-sm text-[9px] font-bold ${featuredProject.tag} shadow-[2px_2px_0px_#111111] z-10 flex items-center gap-1`}>
              <span>★</span>
              <span>{featuredProject.badge}</span>
            </div>
          </div>

          <div className="mt-3.5 flex flex-col">
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <span className="font-label-md text-[10px] uppercase tracking-wider text-on-surface-variant font-bold">
                {featuredProject.category}
              </span>
              <span className="px-2 py-0.5 bg-secondary-container text-on-secondary font-headline-sm text-[9px] rounded-full border border-on-surface font-bold">
                {featuredProject.role}
              </span>
            </div>

            <h3 className="font-headline-sm text-base text-on-surface font-bold leading-tight mt-1">
              {featuredProject.title}
            </h3>

            <p className="font-body-md text-xs text-on-surface-variant mt-1.5 leading-relaxed">
              {featuredProject.description}
            </p>

            <div className="flex flex-wrap gap-1.5 mt-2.5">
              {featuredProject.tags?.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 bg-surface-container-low text-on-surface text-[9px] font-mono font-bold rounded-md border border-on-surface"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-3.5 pt-2.5 border-t border-surface-container flex items-center justify-between">
              <span className="text-[10px] font-bold text-on-surface">Live Production Site</span>
              <a
                href={featuredProject.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-on-surface text-surface font-headline-sm text-xs rounded-full border-[2px] border-on-surface shadow-[2px_2px_0px_#111111] active:translate-x-0.5 active:translate-y-0.5"
              >
                <span>BUKA SITUS</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Other Projects 2-col Grid (Mobile) */}
        <div className="grid grid-cols-2 gap-3">
          {otherProjects.map((project, i) => (
            <div
              key={i}
              className="bg-surface p-3 rounded-[24px] border-[3px] border-[#111111] shadow-[6px_6px_0px_#111111] flex flex-col justify-between"
              style={{ border: "3px solid rgb(17, 17, 17)", borderRadius: "24px", boxShadow: "rgb(17, 17, 17) 6px 6px 0px" }}
            >
              <div
                className="relative w-full h-28 rounded-xl border-[2px] border-[#111111] overflow-hidden flex items-center justify-center bg-surface-container"
                style={{ backgroundColor: project.bg }}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <div className="w-full h-full border-2 border-dashed border-[#111111] rounded-lg flex items-center justify-center m-1.5">
                    <span
                      className="text-[9px] font-mono font-bold uppercase tracking-wider text-center"
                      style={{ color: project.textColor }}
                    >
                      {project.badge}
                    </span>
                  </div>
                )}
                <div className={`absolute top-1 left-1 bg-surface-container-lowest text-on-surface px-1.5 py-0.5 rounded-full border border-on-surface font-headline-sm text-[8px] ${project.tag} shadow-[1.5px_1.5px_0px_#111111] z-10`}>
                  {project.badge}
                </div>
              </div>

              <div className="mt-2.5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="font-label-md text-[9px] uppercase tracking-wider text-on-surface-variant font-bold block truncate">
                    {project.category}
                  </span>
                  <h3 className="font-headline-sm text-xs text-on-surface font-bold leading-tight mt-0.5 line-clamp-2">
                    {project.title}
                  </h3>
                </div>

                <div className="mt-2 pt-1.5 border-t border-surface-container flex items-center justify-between gap-1 text-[9px] text-on-surface font-semibold">
                  <span className="truncate">{project.role || (project.url ? "Live Site" : "Case Study")}</span>
                  <a
                    href={project.url || "https://github.com/Doocell"}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Buka ${project.title}`}
                    className="w-6 h-6 rounded-full bg-on-surface text-surface flex items-center justify-center text-[10px] hover:bg-tertiary-fixed hover:text-on-surface transition-colors shrink-0 font-bold"
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
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-12">
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
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-secondary-container text-on-secondary font-headline-sm text-body-sm rounded-full border-[2.5px] border-on-surface shadow-[4px_4px_0px_#111111] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#111111] transition-all uppercase font-bold"
          >
            VIEW ALL ON GITHUB →
          </a>
        </div>

        {/* Featured Project Banner Card (Desktop) */}
        <div
          className="w-full bg-surface p-6 lg:p-8 rounded-[2rem] border-[3px] border-on-surface shadow-[8px_8px_0px_#111111] mb-10 group hover:-translate-y-1 transition-all"
          style={{ border: "3px solid rgb(17, 17, 17)", borderRadius: "28px", boxShadow: "rgb(17, 17, 17) 8px 8px 0px" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Screenshot Thumbnail */}
            <div className="lg:col-span-7">
              <div className="relative w-full h-72 lg:h-96 rounded-2xl border-[3px] border-on-surface overflow-hidden shadow-inner bg-[#593688]">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute top-4 left-4 bg-tertiary-fixed text-on-surface px-3.5 py-1 rounded-full border-[2px] border-on-surface font-headline-sm text-xs shadow-[2px_2px_0px_#111111] ${featuredProject.tag} z-10 flex items-center gap-1.5 font-bold`}>
                  <span>★</span>
                  <span>{featuredProject.badge}</span>
                </div>
              </div>
            </div>

            {/* Content & Metadata */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full py-2">
              <div>
                <div className="flex items-center gap-2.5 flex-wrap mb-2">
                  <span className="font-label-md text-xs uppercase tracking-wider text-on-surface-variant font-bold">
                    {featuredProject.category}
                  </span>
                  <span className="px-3 py-0.5 bg-secondary-container text-on-secondary font-headline-sm text-xs rounded-full border-[1.5px] border-on-surface shadow-[1.5px_1.5px_0px_#111111] font-bold">
                    {featuredProject.role}
                  </span>
                </div>

                <h3 className="font-headline-lg text-2xl lg:text-3xl text-on-surface font-bold leading-tight mt-1">
                  {featuredProject.title}
                </h3>

                <p className="font-body-md text-sm lg:text-base text-on-surface-variant leading-relaxed mt-3">
                  {featuredProject.description}
                </p>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {featuredProject.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-surface-container-low text-on-surface font-mono text-xs font-bold rounded-lg border border-on-surface shadow-[1.5px_1.5px_0px_#111111]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t-[2px] border-surface-container flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-on-surface block">Live Production URL</span>
                  <span className="text-xs font-mono text-on-surface-variant">interface.himailkomunnes.com</span>
                </div>

                <a
                  href={featuredProject.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-container text-on-primary font-headline-sm text-xs rounded-full border-[2.5px] border-on-surface shadow-[3px_3px_0px_#111111] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#111111] transition-all uppercase font-bold"
                >
                  <span>KUNJUNGI WEBSITE</span>
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Additional Project Cards (2x2 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-xl">
          {otherProjects.map((project, i) => (
            <div
              key={i}
              className="bg-surface p-6 rounded-[1.5rem] border-[3px] border-on-surface shadow-[6px_6px_0px_#111111] flex flex-col justify-between group hover:-translate-y-1 transition-transform"
              style={{ border: "3px solid rgb(17, 17, 17)", borderRadius: "24px", boxShadow: "rgb(17, 17, 17) 6px 6px 0px" }}
            >
              <div>
                {/* Colored Thumbnail Area */}
                <div
                  className="relative w-full h-64 rounded-2xl border-[3px] border-on-surface overflow-hidden flex items-center justify-center shadow-inner group/thumb"
                  style={{ backgroundColor: project.bg }}
                >
                  {/* Sticker Tag */}
                  <div className={`absolute top-4 left-4 bg-surface-container-lowest text-on-surface px-3 py-1 rounded-full border-[2px] border-on-surface font-headline-sm text-label-sm shadow-[2px_2px_0px_#111111] ${project.tag} z-10 font-bold`}>
                    🏷️ {project.badge}
                  </div>

                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full border-2 border-dashed border-[#111111] rounded-xl flex items-center justify-center bg-surface-container-lowest/40 backdrop-blur-sm m-6">
                      <span className="font-mono font-bold text-base tracking-wider uppercase" style={{ color: project.textColor }}>
                        {project.title}
                      </span>
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="mt-6 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="font-label-md text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">
                      {project.category}
                    </span>
                    <span className="px-2.5 py-0.5 bg-surface-container-low text-on-surface font-headline-sm text-xs rounded-full border border-on-surface font-bold">
                      {project.role}
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-3 mt-1">
                    <div>
                      <h3 className="font-headline-md text-xl text-on-surface font-bold">
                        {project.title}
                      </h3>
                      <p className="font-body-md text-sm text-on-surface-variant mt-1 line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    <a
                      href={project.url || "https://github.com/Doocell"}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${project.title}`}
                      className="w-10 h-10 shrink-0 rounded-full bg-on-surface text-surface flex items-center justify-center text-sm font-bold shadow-[2px_2px_0px_#111111] hover:bg-tertiary-fixed hover:text-on-surface transition-all"
                    >
                      ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
