import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "2026 State of Enterprise AI Security — Benchmark Report | Aona AI",
  description:
    "A 2026 benchmark of enterprise AI security compiled from published industry research: shadow AI statistics, AI governance data, and key security findings.",
  keywords:
    "AI security benchmark, enterprise AI security report, shadow AI statistics, AI governance, CISO AI report",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "2026 State of Enterprise AI Security — Benchmark Report",
    description:
      "Shadow AI statistics and AI governance benchmarks for 2026, compiled from published industry research.",
    type: "website",
    url: "https://aisecuritybenchmark.com",
    images: [
      {
        url: "https://aisecuritybenchmark.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Security Benchmark 2026 — State of Enterprise AI Security",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "2026 State of Enterprise AI Security — Benchmark Report",
    description:
      "Shadow AI statistics and AI governance benchmarks for 2026, compiled from published industry research.",
    images: ["https://aisecuritybenchmark.com/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-JGVMSZZJ3Z" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-JGVMSZZJ3Z');`,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
