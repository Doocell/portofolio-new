export default function ProcessSection() {
  const steps = [
    {
      icon: "search",
      title: "1. DISCOVERY",
      desc: "Understanding project goals, target audience, and key user requirements.",
      circleBg: "bg-tertiary-fixed",
      circleText: "",
    },
    {
      icon: "edit",
      title: "2. UI/UX DESIGN",
      desc: "Creating wireframes, interactive prototypes, and cohesive UI in Figma.",
      circleBg: "bg-secondary-container",
      circleText: "text-surface",
    },
    {
      icon: "grid_view",
      title: "3. DEVELOPMENT",
      desc: "Writing clean, scalable code using React, Next.js, and TypeScript.",
      circleBg: "bg-primary-container",
      circleText: "text-surface",
    },
    {
      icon: "rate_review",
      title: "4. OPTIMIZATION",
      desc: "Testing responsiveness, accessibility, and high performance.",
      circleBg: "bg-tertiary-fixed",
      circleText: "",
    },
    {
      icon: "celebration",
      title: "5. SHIP & LAUNCH",
      desc: "Deploying to production and delivering a polished final product.",
      circleBg: "bg-secondary-container",
      circleText: "text-surface",
    },
  ];

  return (
    <section id="process" className="w-full bg-surface py-14 lg:py-20 border-b-[3px] border-on-surface relative">
      {/* MOBILE VIEW (< md) */}
      <div className="w-full px-5 py-8 relative z-10 md:hidden">
        <div className="text-center max-w-sm mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 bg-on-surface text-surface px-3 py-1 rounded-full border-[2px] border-on-surface shadow-[2px_2px_0px_#111111] mb-2">
            <span className="font-headline-sm text-xs uppercase tracking-wider">MY PROCESS</span>
            <span>⚡</span>
          </div>
          <h2 className="font-display text-2xl text-on-surface">How I Turn Chaos into Magic</h2>
        </div>

        <div className="flex flex-col gap-3">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-surface-container-lowest p-3.5 rounded-[24px] border-[3px] border-[#111111] shadow-[6px_6px_0px_#111111] flex items-center gap-3.5"
              style={{ border: "3px solid rgb(17, 17, 17)", borderRadius: "24px", boxShadow: "rgb(17, 17, 17) 6px 6px 0px" }}
            >
              <div className={`w-11 h-11 flex-shrink-0 rounded-full ${step.circleBg} ${step.circleText} border-[2px] border-on-surface shadow-[2px_2px_0px_#111111] flex items-center justify-center`}>
                <span className="material-symbols-outlined text-lg">{step.icon}</span>
              </div>
              <div>
                <span className="font-headline-sm text-xs text-on-surface uppercase tracking-wide font-bold">{step.title}</span>
                <p className="font-body-sm text-[11px] text-on-surface-variant mt-0.5 leading-snug">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DESKTOP VIEW (>= md) */}
      <div className="hidden md:block max-w-[1440px] mx-auto px-margin-mobile lg:px-margin relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-on-surface text-surface px-4 py-1.5 rounded-full border-[2px] border-on-surface shadow-[3px_3px_0px_#111111] mb-3">
            <span className="font-headline-sm text-label-md uppercase tracking-wider">MY PROCESS</span>
            <span>⚡</span>
          </div>
          <h2 className="font-display text-headline-lg text-on-surface">
            How I Turn Chaos into Magic
          </h2>
        </div>

        {/* 5 Horizontal Steps */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-space-md relative">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-surface-container-lowest p-5 rounded-[1.25rem] border-[2.5px] border-on-surface shadow-[4px_4px_0px_#111111] flex flex-col items-center text-center relative group hover:-translate-y-1 transition-transform"
              style={{ border: "3px solid rgb(17, 17, 17)", borderRadius: "24px", boxShadow: "rgb(17, 17, 17) 6px 6px 0px" }}
            >
              <div className={`w-14 h-14 rounded-full ${step.circleBg} ${step.circleText} border-[2.5px] border-on-surface shadow-[3px_3px_0px_#111111] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <span className="material-symbols-outlined text-headline-sm">{step.icon}</span>
              </div>
              <span className="font-headline-sm text-body-sm text-on-surface uppercase tracking-wide">{step.title}</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-snug">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

