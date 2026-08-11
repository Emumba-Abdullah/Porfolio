import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site } from "@/lib/data";

const description =
  "Mirza Abdullah Bin Abrar — Full-stack product engineer in Islamabad. Enterprise React & TypeScript, FastAPI, AWS and AI-powered products. Built PostgresHub for Microsoft Build.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description,
  keywords: [
    "Mirza Abdullah Bin Abrar",
    "full-stack engineer",
    "frontend engineer",
    "React developer",
    "Next.js developer",
    "TypeScript",
    "FastAPI",
    "AWS",
    "RAG",
    "Islamabad",
    "Pakistan",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.role}`,
    description,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#08090a",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  email: `mailto:${site.email}`,
  telephone: site.phone,
  url: site.url,
  address: { "@type": "PostalAddress", addressLocality: "Islamabad", addressCountry: "PK" },
  worksFor: { "@type": "Organization", name: "Emumba Pvt. Ltd." },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Bahria University, Islamabad" },
  sameAs: [
    "https://github.com/MABA1001",
    "https://www.linkedin.com/in/mirza-abdullah-bin-abrar/",
  ],
  knowsAbout: [
    "React",
    "TypeScript",
    "Next.js",
    "FastAPI",
    "Node.js",
    "AWS",
    "Docker",
    "Retrieval-Augmented Generation",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
