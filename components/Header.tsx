"use client";

import { useState, useEffect, useRef } from "react";

const navLinks = [
  { href: "#home", label: "Home", path: "home" },
  { href: "#about", label: "About", path: "about" },
  { href: "#services", label: "Services", path: "services" },
  { href: "#work", label: "Work", path: "work" },
  { href: "#process", label: "Process", path: "process" },
  { href: "#contact", label: "Contact", path: "contact" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isManualClickRef = useRef(false);
  const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // The single item that should display the highlight pill (hover overrides active)
  const highlightedSection = hoveredSection || activeSection;

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    e.preventDefault();
    setActiveSection(path);
    setHoveredSection(null);
    isManualClickRef.current = true;

    if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    clickTimeoutRef.current = setTimeout(() => {
      isManualClickRef.current = false;
    }, 1200);

    if (path === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    const target = document.getElementById(path);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const sectionIds = [
      "home",
      "about",
      "services",
      "work",
      "process",
      "contact",
    ];

    const handleScroll = () => {
      if (isManualClickRef.current) return;

      const scrollY =
        window.scrollY || document.documentElement.scrollTop || 0;

      // At top of page
      if (scrollY < 120) {
        setActiveSection("home");
        return;
      }

      // Near bottom of page
      const windowHeight = window.innerHeight;
      const docHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      if (windowHeight + scrollY >= docHeight - 120) {
        setActiveSection("contact");
        return;
      }

      const scrollPosition = scrollY + 160;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const top = el.getBoundingClientRect().top + scrollY;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-primary-container border-b-[2.5px] border-on-surface shadow-[0_4px_0_0_#1c1c17]">
      {/* MOBILE HEADER (< md) */}
      <div className="w-full px-4 h-16 flex md:hidden items-center justify-between">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
          className="inline-flex items-center gap-1.5 bg-surface-container-lowest text-on-surface px-3 py-1.5 rounded-full border-[3px] border-on-surface shadow-[3px_3px_0px_#111111] -rotate-3 hover:rotate-0 transition-transform cursor-pointer"
        >
          <span className="text-secondary font-black text-sm">✦</span>
          <span className="font-headline-sm text-sm tracking-tight">DANY RISKY</span>
          <span className="text-primary-container font-black text-xs">★</span>
        </a>

        <div className="flex items-center gap-2">
          <button
            aria-label="Open Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-11 h-11 bg-tertiary-fixed rounded-2xl border-[3px] border-on-surface shadow-[3px_3px_0px_#111111] flex flex-col items-center justify-center gap-1 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer"
          >
            <span
              className={`w-5 h-[3px] bg-on-surface rounded-full transition-all ${mobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
            />
            <span
              className={`w-5 h-[3px] bg-on-surface rounded-full transition-all ${mobileMenuOpen ? "opacity-0" : ""
                }`}
            />
            <span
              className={`h-[3px] bg-on-surface rounded-full transition-all ${mobileMenuOpen
                  ? "-rotate-45 -translate-y-[7px] w-5 self-center"
                  : "w-3.5 self-start ml-2.5"
                }`}
            />
          </button>
          <div className="w-10 h-10 rounded-full border-[2.5px] border-on-surface shadow-[2px_2px_0px_#111111] overflow-hidden bg-surface-container-lowest flex items-center justify-center font-headline-sm text-xs text-on-surface">
            <img src="/PPputih.png" alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* DESKTOP HEADER (>= md) */}
      <div className="hidden md:flex max-w-[1440px] mx-auto px-margin-mobile lg:px-margin h-20 items-center justify-between gap-space-md">
        {/* Logo Pill + Portfolio Label */}
        <div className="flex items-center gap-space-md flex-shrink-0">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "home")}
            className="px-3 py-1 bg-surface-container-lowest text-on-surface rounded-full border-[2.5px] border-on-surface shadow-[2px_2px_0_0_#1c1c17] transition-transform hover:-rotate-6 font-headline-sm text-sm uppercase tracking-wide cursor-pointer"
          >
            DANY RISKY ARDIANSYAH
          </a>
          <span className="hidden sm:inline-block font-headline-sm text-headline-sm text-on-primary tracking-tight">
            Portfolio
          </span>
        </div>

        {/* Desktop Nav */}
        <nav
          className="flex items-center gap-space-sm"
          onMouseLeave={() => setHoveredSection(null)}
        >
          {navLinks.map((link) => {
            const isHighlighted = highlightedSection === link.path;
            return (
              <a
                key={link.href}
                href={link.href}
                data-path={link.path}
                aria-current={activeSection === link.path ? "page" : undefined}
                onMouseEnter={() => setHoveredSection(link.path)}
                onClick={(e) => handleNavClick(e, link.path)}
                className={`px-space-md py-space-xs rounded-full font-headline-sm text-body-sm transition-all border-[2px] ${isHighlighted
                    ? "bg-tertiary-fixed text-on-tertiary-fixed border-on-surface shadow-[2px_2px_0_0_#1c1c17]"
                    : "border-transparent text-on-primary"
                  }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* CTA + Avatar */}
        <div className="flex items-center gap-space-md flex-shrink-0">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="inline-flex items-center justify-center px-space-lg py-space-xs bg-secondary-container text-on-secondary font-headline-sm text-body-sm rounded-full border-[2.5px] border-on-surface shadow-[4px_4px_0_0_#1c1c17] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#1c1c17] active:translate-x-1 active:translate-y-1 active:shadow-none uppercase tracking-wide"
          >
            LET&apos;S CHAT!
          </a>
          <div className="p-1 bg-surface-container-lowest rounded-full border-[2.5px] border-on-surface shadow-[3px_3px_0_0_#1c1c17] transition-transform hover:scale-105">
            <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center font-headline-sm text-xs text-on-surface font-bold overflow-hidden">
              <img src="/PPputih.png" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-primary-container border-t-[2.5px] border-on-surface shadow-[0_4px_0_0_#1c1c17] pb-5 pt-3">
          <nav className="flex flex-col items-center gap-2.5 px-4">
            {navLinks.map((link) => {
              const isHighlighted = activeSection === link.path;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    handleNavClick(e, link.path);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-center px-4 py-2.5 rounded-full font-headline-sm text-sm transition-all border-[2px] ${isHighlighted
                      ? "bg-tertiary-fixed text-on-tertiary-fixed border-on-surface shadow-[3px_3px_0px_#111111]"
                      : "border-transparent text-on-primary hover:bg-primary/20"
                    }`}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={(e) => {
                handleNavClick(e, "contact");
                setMobileMenuOpen(false);
              }}
              className="w-full mt-2 inline-flex items-center justify-center px-6 py-3 bg-secondary-container text-on-secondary font-headline-sm text-sm rounded-full border-[2.5px] border-on-surface shadow-[4px_4px_0px_#111111] uppercase tracking-wide"
            >
              LET&apos;S CHAT!
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
