export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Dany's ability to turn complex Figma designs into responsive, pixel-perfect Next.js code is incredible. Highly recommended!",
      name: "Alex Rivera",
      role: "Product Manager • TechCorp",
      initials: "AR",
      avatarBg: "bg-tertiary-fixed",
      hover: "hover:-rotate-1",
    },
    {
      quote:
        "Working with Dany was a game-changer. The micro-interactions and performance optimization made our web app feel blazing fast.",
      name: "Sarah Chen",
      role: "Lead Designer • Studio Bloom",
      initials: "SC",
      avatarBg: "bg-secondary-fixed-dim",
      hover: "hover:rotate-1",
    },
    {
      quote:
        "Exceptional attention to detail, proactive communication, and clean TypeScript code. Dany delivered our project ahead of schedule.",
      name: "Marcus Vance",
      role: "Founder • LaunchPad",
      initials: "MV",
      avatarBg: "bg-primary-fixed",
      hover: "hover:-rotate-1",
    },
  ];

  return (
    <section className="w-full bg-primary-container py-14 lg:py-20 text-on-primary border-b-[3px] border-on-surface relative">
      {/* MOBILE VIEW (< md) */}
      <div className="w-full px-5 py-8 text-on-primary relative z-10 md:hidden">
        <div className="text-center max-w-sm mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 bg-on-surface text-surface px-3 py-1 rounded-full border-[2px] border-surface-container-lowest shadow-[2px_2px_0px_#111111] mb-2">
            <span className="font-headline-sm text-xs uppercase tracking-wider text-surface">WHAT PEOPLE SAY</span>
            <span>💬</span>
          </div>
          <h2 className="font-display text-2xl text-on-primary leading-tight">
            Kind words from folks I&apos;ve worked with
          </h2>
        </div>

        <div className="flex flex-col gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative bg-surface-container-lowest text-on-surface p-5 rounded-[24px] border-[3px] border-[#111111] shadow-[6px_6px_0px_#111111]"
              style={{ border: "3px solid rgb(17, 17, 17)", borderRadius: "24px", boxShadow: "rgb(17, 17, 17) 6px 6px 0px" }}
            >
              <div className="flex items-center gap-1 text-tertiary-fixed-dim text-sm mb-2">
                {[...Array(5)].map((_, s) => (
                  <span key={s}>★</span>
                ))}
              </div>
              <p className="font-body-md text-xs text-on-surface leading-relaxed italic">
                &quot;{t.quote}&quot;
              </p>
              <div className="mt-4 pt-3 border-t-[2px] border-surface-container flex items-center gap-2.5">
                <div className={`w-9 h-9 rounded-full ${t.avatarBg} border-[2px] border-on-surface shadow-[2px_2px_0px_#111111] flex items-center justify-center font-bold text-xs text-on-surface`}>
                  {t.initials}
                </div>
                <div>
                  <h4 className="font-headline-sm text-xs leading-tight">{t.name}</h4>
                  <p className="font-body-sm text-[10px] text-on-surface-variant">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DESKTOP VIEW (>= md) */}
      <div className="hidden md:block max-w-[1440px] mx-auto px-margin-mobile lg:px-margin relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-on-surface text-surface px-4 py-1.5 rounded-full border-[2px] border-surface-container-lowest shadow-[3px_3px_0px_#111111] mb-3">
            <span className="font-headline-sm text-label-md uppercase tracking-wider text-surface">WHAT PEOPLE SAY</span>
            <span>💬</span>
          </div>
          <h2 className="font-display text-headline-lg text-on-primary">
            Kind words from folks I&apos;ve worked with
          </h2>
        </div>

        {/* 3 Speech-Bubble Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-xl">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`relative bg-surface-container-lowest text-on-surface p-8 rounded-[1.5rem] border-[3px] border-on-surface shadow-[6px_6px_0px_#111111] flex flex-col justify-between ${t.hover} transition-transform`}
              style={{ border: "3px solid rgb(17, 17, 17)", borderRadius: "24px", boxShadow: "rgb(17, 17, 17) 6px 6px 0px" }}
            >
              {/* Speech bubble tail */}
              <div className="absolute -bottom-3.5 left-12 w-6 h-6 bg-surface-container-lowest border-r-[3px] border-b-[3px] border-on-surface rotate-45"></div>

              <div>
                {/* Stars */}
                <div className="flex items-center gap-1 text-tertiary-fixed-dim text-lg mb-4">
                  {[...Array(5)].map((_, s) => (
                    <span key={s}>★</span>
                  ))}
                </div>
                <p className="font-body-md text-body-md text-on-surface leading-relaxed italic">
                  &quot;{t.quote}&quot;
                </p>
              </div>

              {/* Footer with Avatar */}
              <div className="mt-8 pt-4 border-t-[2px] border-surface-container flex items-center gap-3">
                <div className={`w-12 h-12 rounded-full ${t.avatarBg} border-[2px] border-on-surface shadow-[2px_2px_0px_#111111] flex items-center justify-center font-headline-sm text-body-md text-on-surface`}>
                  {t.initials}
                </div>
                <div>
                  <h4 className="font-headline-sm text-body-md leading-tight">{t.name}</h4>
                  <p className="font-body-sm text-label-sm text-on-surface-variant">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

