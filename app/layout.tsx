import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "2026 State of Enterprise AI Security — Benchmark Report | Aona AI",
  description:
    "The definitive benchmark report on enterprise AI security. Explore shadow AI statistics, AI governance data, and security findings from 500+ enterprises.",
  keywords:
    "AI security benchmark, enterprise AI security report, shadow AI statistics, AI governance, CISO AI report",
  openGraph: {
    title: "2026 State of Enterprise AI Security — Benchmark Report",
    description:
      "73% of employees use AI tools without IT approval. Explore the full benchmark data from 500+ enterprises.",
    type: "website",
    url: "https://aisecuritybenchmark.org",
    images: [
      {
        url: "https://aisecuritybenchmark.org/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "2026 State of Enterprise AI Security Benchmark Report",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "2026 State of Enterprise AI Security — Benchmark Report",
    description:
      "73% of employees use AI tools without IT approval. Explore the full benchmark data from 500+ enterprises.",
    images: ["https://aisecuritybenchmark.org/images/og-image.png"],
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Report",
              name: "2026 State of Enterprise AI Security Benchmark",
              description:
                "Comprehensive benchmark report analyzing AI security practices across 500+ enterprises.",
              author: {
                "@type": "Organization",
                name: "Aona AI",
                url: "https://aona.ai",
              },
              datePublished: "2026-02-01",
              publisher: {
                "@type": "Organization",
                name: "Aona AI",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dataset",
              name: "Enterprise AI Security Benchmark 2026",
              description:
                "Survey data from 500+ enterprises on AI tool usage, shadow AI prevalence, and AI governance maturity.",
              creator: {
                "@type": "Organization",
                name: "Aona AI",
              },
              temporalCoverage: "2025/2026",
              keywords: [
                "AI security",
                "shadow AI",
                "enterprise AI governance",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col overflow-x-hidden">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
