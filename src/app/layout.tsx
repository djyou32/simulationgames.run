import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { categories, MAIN_SITE_URL, SITE_URL } from "@/lib/categories";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Simulation Games Run - Guides to Online Simulation Games",
    template: "%s | Simulation Games Run",
  },
  description:
    "A focused guide to life, relaxing, driving, farming, job, and scenario simulation games, with direct links to the main Simulation Games collection.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Simulation Games Run",
    description:
      "Explore simulation game categories and continue to the full playable collection on Simulation-Games.com.",
    url: "/",
    siteName: "Simulation Games Run",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <header className="site-header">
            <div className="container header-inner">
              <Link className="brand" href="/">
                Simulation Games Run
              </Link>
              <nav className="nav" aria-label="Main navigation">
                {categories.map((category) => (
                  <Link key={category.slug} href={`/${category.slug}`}>
                    {category.shortName}
                  </Link>
                ))}
                <a href={MAIN_SITE_URL}>Play</a>
              </nav>
            </div>
          </header>
          <main>{children}</main>
          <footer className="site-footer">
            <div className="container">
              <div className="footer-links">
                {categories.map((category) => (
                  <Link key={category.slug} href={`/${category.slug}`}>
                    {category.name}
                  </Link>
                ))}
              </div>
              <p>
                Simulation Games Run is an independent category guide built to
                introduce players to the playable library at{" "}
                <a href={MAIN_SITE_URL}>Simulation-Games.com</a>.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
