import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.shipitframe.work"),
  title: "Ship It! | The Minimal Software Delivery Framework",
  description:
    "Build. Validate. Ship. A minimal software delivery framework created by developers, for developers.",
  icons: {
    icon: [{ url: "/brand/shipit-icon.png", type: "image/png" }],
    shortcut: "/brand/shipit-icon.png",
    apple: "/brand/shipit-icon.png",
  },

  openGraph: {
    title: "Ship It!",
    description:
      "Build. Validate. Ship. A minimal software delivery framework.",
    url: "https://www.shipitframe.work",
    siteName: "Ship It!",
    locale: "en_US",
    type: "website",
    images: [{ url: "/brand/shipit-icon.png", width: 1200, height: 630, alt: "Ship It!" }],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ship It!",
    description:
      "Build. Validate. Ship. A minimal software delivery framework.",
    images: [{ url: "/brand/shipit-icon.png", width: 1200, height: 630, alt: "Ship It!" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
