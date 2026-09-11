import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://complia.services"),
  title: {
    default: "Complia — Product Certification & Global Market Access",
    template: "%s | Complia",
  },
  description:
    "NABCB-accredited product certification and conformity assessment support for manufacturers, exporters, and importers entering regulated markets.",
  keywords: [
    "product certification",
    "conformity assessment",
    "SASO certification",
    "SABER certification",
    "PCoC",
    "SCoC",
    "IECEE",
    "energy efficiency rating",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Complia",
    images: [{ url: "/assets/complia-hero.webp", width: 1586, height: 992 }],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#071b2e",
};

const organisationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Complia Regulatory Services Private Limited",
  alternateName: "Complia",
  url: "https://complia.services",
  logo: "https://complia.services/assets/complia-logo.png",
  telephone: "+91-95995-93141",
  foundingDate: "2024-11",
  address: {
    "@type": "PostalAddress",
    streetAddress: "H. No. 9, Second Floor, Paschim Vihar Extn., Paschim Vihar",
    addressLocality: "New Delhi",
    addressRegion: "Delhi",
    postalCode: "110063",
    addressCountry: "IN",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <Script
          id="organisation-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationSchema) }}
        />
      </body>
    </html>
  );
}
