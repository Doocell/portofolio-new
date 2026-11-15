export default function ServicesSection() {
  const services = [
    {
      bg: "bg-primary-container",
      text: "text-on-primary",
      iconColor: "text-tertiary-fixed-dim",
      icon: "laptop_mac",
      title: "WEB DEVELOPMENT",
      desc: "Building modern, scalable web apps with React, Next.js, TypeScript, and clean code architecture.",
      descColor: "text-primary-fixed",
      category: "React • Next.js • TS",
      borderColor: "border-on-primary-container",
      iconHover: "group-hover:rotate-6",
    },
    {
      bg: "bg-secondary-container",
      text: "text-on-secondary",
      iconColor: "text-secondary-container",
      icon: "draw",
      title: "UI/UX DESIGN",
      desc: "Designing intuitive interfaces, high-fidelity prototypes, and cohesive design systems using Figma.",
      descColor: "text-secondary-fixed",
      category: "Figma • Prototype • Design",
      borderColor: "border-surface-container-lowest/30",
      iconHover: "group-hover:-rotate-6",
    },
    {
      bg: "bg-tertiary-fixed",
      text: "text-on-tertiary-fixed",
      iconColor: "text-primary-container",
      icon: "lightbulb",
      title: "INTERACTIVE UI",
      desc: "Crafting engaging micro-interactions, bold neo-brutalist aesthetics, and seamless user experiences.",
      descColor: "text-on-surface-variant",
      category: "Tailwind • Motion • UX",
      borderColor: "border-on-surface/20",
      iconHover: "group-hover:rotate-12",
    },
    {
      bg: "bg-primary-container",
      text: "text-on-primary",
      iconColor: "text-secondary",
      icon: "verified",
      title: "RESPONSIVE OPTIMIZATION",
      desc: "Ensuring lightning-fast load times, SEO best practices, and flawless responsiveness across all screens.",
      descColor: "text-primary-fixed",
      category: "Performance • Mobile • SEO",
      borderColor: "border-on-primary-container",
      iconHover: "group-hover:-rotate-12",
    },
  ];

  return (
    <section id="services" className="w-full bg-surface py-14 lg:py-20 border-b-[3px] border-on-surface relative">
      {/* MOBILE VIEW (< md) */}
      <div className="w-full px-5 py-8 relative z-10 md:hidden">
        <div className="flex flex-col items-start gap-2 mb-8">
          <div className="inline-flex items-center gap-1.5 bg-on-surface text-surface px-3 py-1 rounded-full border-[2px] border-on-surface shadow-[2px_2px_0px_#111111]">
            <span className="font-headline-sm text-xs uppercase tracking-wider">WHAT I DO</span>
            <span className="material-symbols-outlined text-xs">build</span>
          </div>
          <h2 className="font-display text-2xl text-on-surface">Services &amp; Capabilities</h2>
          <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
            Every project gets end-to-end craft, from the first napkin doodle to production code.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {services.map((service, i) => (
            <div
              key={i}
              className={`${service.bg} ${service.text} p-5 rounded-[24px] border-[3px] border-[#111111] shadow-[6px_6px_0px_#111111] flex flex-col justify-between`}
            >
              <div className="flex items-start gap-3.5 mb-3">
                <div className="w-11 h-11 flex-shrink-0 bg-surface-container-lowest text-on-surface rounded-xl border-[2px] border-on-surface shadow-[2px_2px_0px_#111111] flex items-center justify-center">
                  <span
                    className={`material-symbols-outlined text-xl ${service.iconColor}`}
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {service.icon}
                  </span>
                </div>
                <div>
                  <h3 className="font-headline-sm text-base uppercase tracking-wide">{service.title}</h3>
                  <p className={`font-body-md text-xs ${service.descColor} leading-snug mt-1`}>{service.desc}</p>
                </div>
              </div>
              <div className={`pt-2 border-t-[2px] ${service.borderColor} flex items-center justify-between text-xs font-label-md`}>
                <span className="text-[11px]">Service • Scope • Deliverables</span>
                <span className="material-symbols-outlined text-sm">east</span>
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
              <span className="font-headline-sm text-label-md uppercase tracking-wider">WHAT I DO</span>
              <span className="material-symbols-outlined text-sm">build</span>
            </div>
            <h2 className="font-display text-headline-lg text-on-surface">
              Services &amp; Capabilities
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            Every project gets end-to-end craft, from the first napkin doodle to responsive, production-tested code.
          </p>
        </div>

        {/* 4 Equal Neo-Brutalist Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
          {services.map((service, i) => (
            <div
              key={i}
              className={`${service.bg} ${service.text} p-7 rounded-[1.5rem] border-[3px] border-on-surface shadow-[6px_6px_0px_#111111] flex flex-col justify-between hover:-translate-y-1 transition-transform group`}
              style={{ border: "3px solid rgb(17, 17, 17)", borderRadius: "24px", boxShadow: "rgb(17, 17, 17) 6px 6px 0px" }}
            >
              <div>
                <div className={`w-14 h-14 bg-surface-container-lowest text-on-surface rounded-2xl border-[2.5px] border-on-surface shadow-[3px_3px_0px_#111111] flex items-center justify-center mb-6 ${service.iconHover} transition-transform`}>
                  <span className={`material-symbols-outlined text-headline-md ${service.iconColor}`} style={{ fontVariationSettings: "'FILL' 1" }}>
                    {service.icon}
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm uppercase tracking-wide mb-3">{service.title}</h3>
                <p className={`font-body-md text-body-sm ${service.descColor} leading-relaxed`}>{service.desc}</p>
              </div>
              <div className={`mt-8 pt-4 border-t-[2px] ${service.borderColor} flex items-center justify-between text-body-sm font-label-md`}>
                <span>{service.category}</span>
                <span className="material-symbols-outlined text-base">east</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

