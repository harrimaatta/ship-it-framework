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
  title: "Ship It! | The Minimal Software Delivery Framework",
  description:
    "Build. Validate. Ship. A minimal software delivery framework created by developers, for developers.",
  icons: {
    icon: [{ url: "/brand/shipit-icon.png", type: "image/png" }],
  },

  openGraph: {
    title: "Ship It!",
    description:
      "Build. Validate. Ship. A minimal software delivery framework.",
    url: "https://www.shipitframe.work",
    siteName: "Ship It!",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ship It!",
    description:
      "Build. Validate. Ship. A minimal software delivery framework.",
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
