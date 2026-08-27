import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/animation/SmoothScroll";
import NodeNetworkCanvas from "@/components/animation/NodeNetworkCanvas";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Cretivra — Engineering Intelligence. Building the Future with AI.",
    template: "%s | Cretivra",
  },
  description:
    "Cretivra builds and manages autonomous AI agents that replace manual business processes — sales enquiries, customer support, lead qualification — for growing companies worldwide.",
  metadataBase: new URL("https://cretivra.com"),
  keywords: [
    "AI automation agency India",
    "AI agent development company",
    "agentic AI implementation partner",
    "AI managed services for SMEs",
    "WhatsApp sales AI agent",
    "multi-agent systems enterprise",
  ],
  authors: [{ name: "Cretivra Engineering Team" }],
  openGraph: {
    title: "Cretivra — Engineering Intelligence. Building the Future with AI.",
    description:
      "We build and manage AI agents that replace manual business processes for growing companies worldwide.",
    url: "https://cretivra.com",
    siteName: "Cretivra",
    images: [
      {
        url: "https://cretivra.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cretivra Logo & AI Agent Architecture",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cretivra — Engineering Intelligence",
    description: "Autonomous AI agents and implementation partner for growing companies.",
    images: ["https://cretivra.com/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} dark scroll-smooth`}>
      <body className="bg-[#070A1E] text-slate-100 min-h-screen relative font-sans">
        <SmoothScroll>
          <NodeNetworkCanvas />
          <div className="relative z-10">{children}</div>
        </SmoothScroll>
      </body>
    </html>
  );
}
