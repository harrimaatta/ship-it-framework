import type { ReactNode } from "react";
import BrandMark from "@/components/BrandMark";

const footerCopy = {
  title: "Ship It!",
  subtitle: "The minimal software delivery framework.",
  items: [
    { label: "License", value: "MIT License." },
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
    <dl className="flex flex-col gap-4 text-sm text-zinc-400 sm:flex-row sm:gap-8">
      {footerCopy.items.map((item) => (
        <div key={item.label}>
          <dt className="sr-only">{item.label}</dt>
          <dd className="font-medium text-zinc-300">{item.value}</dd>
        </div>
      ))}
    </dl>
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
