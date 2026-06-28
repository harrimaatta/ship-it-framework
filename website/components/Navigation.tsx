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

        <div className="flex items-center gap-4">
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

          <a
            href="https://github.com/cuhmwxee/ship-it-framework"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open the Ship It! GitHub repository"
            className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-400 transition-opacity duration-200 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-4 w-4 fill-current"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.92.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.69-3.88-1.38-3.88-1.38-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.74 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.55-.29-5.23-1.27-5.23-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.74.8 1.18 1.82 1.18 3.07 0 4.4-2.69 5.37-5.25 5.66.41.35.77 1.04.77 2.1 0 1.52-.01 2.75-.01 3.12 0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
