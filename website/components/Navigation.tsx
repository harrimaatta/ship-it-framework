'use client';

import { useEffect, useMemo, useState } from "react";
import BrandMark from "@/components/BrandMark";

const navItems = [
  { id: "framework", label: "Framework" },
  { id: "principles", label: "Principles" },
  { id: "faq", label: "FAQ" },
  { id: "manifesto", label: "Manifesto" },
];

function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (!element) return;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  element.scrollIntoView({
    behavior: prefersReducedMotion ? "auto" : "smooth",
    block: "start",
  });
}

export default function Navigation() {
  const [isNavigationVisible, setIsNavigationVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("framework");
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const motto = useMemo(() => ["Build.", "Validate.", "Ship."], []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleMotionPreference = () => setPrefersReducedMotion(mediaQuery.matches);

    handleMotionPreference();
    mediaQuery.addEventListener("change", handleMotionPreference);

    return () => mediaQuery.removeEventListener("change", handleMotionPreference);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");
      if (!hero) {
        setIsNavigationVisible(false);
        return;
      }

      const heroTop = hero.offsetTop;
      const heroHeight = hero.offsetHeight;
      const threshold = heroTop + heroHeight * 0.6;
      setIsNavigationVisible(window.scrollY > threshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0.2, 0.4, 0.6],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 motion-reduce:transition-none ${
        isNavigationVisible
          ? "border-zinc-800/70 bg-zinc-950/70 backdrop-blur-xl"
          : "border-transparent bg-transparent backdrop-blur-none"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6 sm:px-10 lg:px-12">
        <a
          href="#top"
          className="flex items-center gap-3 rounded-full text-zinc-50 transition-colors hover:text-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
          onClick={(event) => {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
          }}
        >
          <BrandMark width={24} height={24} className="h-6 w-6 shrink-0" />
          <span className="text-lg font-semibold tracking-tight">Ship It!</span>
        </a>

        <div className="flex items-center gap-5 sm:gap-6">
          <nav
            aria-label="Section navigation"
            className={`flex items-center gap-2 transition-all duration-300 motion-reduce:transition-none sm:gap-4 ${
              isNavigationVisible
                ? "translate-y-0 opacity-100"
                : "pointer-events-none -translate-y-1 opacity-0"
            }`}
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`rounded-full px-2 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 sm:px-3 ${
                    isActive
                      ? "text-zinc-50"
                      : "text-zinc-400 hover:text-zinc-200"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                  onClick={(event) => {
                    event.preventDefault();
                    scrollToSection(item.id);
                  }}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <p
            aria-hidden="true"
            className={`hidden font-mono text-sm uppercase tracking-[0.22em] text-zinc-500 transition-all duration-300 motion-reduce:transition-none sm:block ${
              isNavigationVisible
                ? "translate-y-0 opacity-100"
                : "pointer-events-none -translate-y-1 opacity-0"
            }`}
          >
            {motto.join(" ")}
          </p>
        </div>
      </div>
    </header>
  );
}
