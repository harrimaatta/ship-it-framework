import type { ReactNode } from "react";
import BrandMark from "@/components/BrandMark";

const footerCopy = {
  title: "Ship It!",
  subtitle: "The minimal software delivery framework.",
  developerTitle: "Developer",
  developerItems: [
    {
      label: "GitHub Repository",
      value: "https://github.com/cuhmwxee/ship-it-framework",
      href: "https://github.com/cuhmwxee/ship-it-framework",
      external: true,
    },
    { label: "MIT License", value: "MIT License." },
    { label: "Version", value: "Version 0.1." },
  ],
};

function FooterSection({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-16 sm:px-10 lg:flex-row lg:items-end lg:justify-between lg:px-12">
      {children}
    </div>
  );
}

function FooterBrand() {
  return (
    <div className="max-w-xl space-y-3">
      <div className="flex items-center gap-3">
        <BrandMark width={28} height={28} className="h-7 w-7 shrink-0" />
        <p className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
          {footerCopy.title}
        </p>
      </div>
      <p className="text-base leading-relaxed text-zinc-400 sm:text-lg">
        {footerCopy.subtitle}
      </p>
    </div>
  );
}

function FooterMeta() {
  return (
    <div className="flex flex-col gap-8 text-sm text-zinc-400 sm:flex-row sm:gap-10">
      <div>
        <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
          {footerCopy.developerTitle}
        </h2>
        <dl className="flex flex-col gap-3">
          {footerCopy.developerItems.map((item) => (
            <div key={item.label}>
              <dt className="sr-only">{item.label}</dt>
              <dd className="font-medium text-zinc-300">
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 transition-opacity duration-200 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
                  >
                    <span>{item.value}</span>
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5 fill-current">
                      <path d="M14.22 4.22h5.56v5.56h-1.5V6.56l-7.47 7.47-1.06-1.06 7.47-7.47H14.22V4.22ZM6 5.25h5.5v1.5H7.5v10.5h10.5v-4h1.5v5.5H6V5.25Z" />
                    </svg>
                  </a>
                ) : (
                  item.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-background">
      <FooterSection>
        <FooterBrand />
        <FooterMeta />
      </FooterSection>
    </footer>
  );
}
