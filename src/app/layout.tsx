import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  alternates: {
    canonical: "https://cretivra.com",
    languages: {
      "en-in": "https://cretivra.com/in",
      "en-us": "https://cretivra.com/us",
      "en-gb": "https://cretivra.com/uk",
      "en-ae": "https://cretivra.com/ae",
      "en-sg": "https://cretivra.com/sg",
      "x-default": "https://cretivra.com",
    },
  },
  keywords: [
    "AI automation agency India",
    "AI agent development company Bengaluru",
    "AI automation agency Mumbai",
    "agentic AI implementation partner",
    "AI managed services for SMEs",
    "WhatsApp sales AI agent",
    "multi-agent systems enterprise",
    "hire AI developer India",
    "AI automation agency US UAE UK",
    "custom LLM RAG vector memory",
  ],
  authors: [{ name: "Cretivra Engineering Team" }],
  verification: {
    google: "pNaj40awSEDWlQC1j5Y5V6sTyQDoWRDyXU-aaR41PT4",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} dark`}>
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-V3D6MD4H4B"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-V3D6MD4H4B');
          `}
        </Script>
      </head>
      <body className="bg-[#070A1E] text-slate-100 min-h-screen relative font-sans">
        <SmoothScroll>
          <NodeNetworkCanvas />
          <div className="relative z-10">{children}</div>
        </SmoothScroll>
      </body>
    </html>
  );
}
