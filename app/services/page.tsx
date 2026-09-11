import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, FileCheck2, ScanSearch, Ship, Waypoints } from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Certification Services",
  description:
    "Explore Complia's SASO/SABER, PCoC, SCoC, energy-efficiency, and IECEE recognition support services.",
  alternates: { canonical: "/services" },
  openGraph: {
    url: "/services",
    title: "Product Certification Services | Complia",
    description:
      "SASO/SABER, PCoC, SCoC, energy-efficiency, and IECEE recognition support for regulated market access.",
  },
};

const capabilities = [
  { icon: ScanSearch, title: "Regulatory scoping", text: "Map the product, destination, and applicable technical route." },
  { icon: FileCheck2, title: "Technical-file review", text: "Check reports, labels, declarations, manuals, and specifications." },
  { icon: Waypoints, title: "Application coordination", text: "Keep evidence, stakeholders, and platform stages aligned." },
  { icon: Ship, title: "Shipment readiness", text: "Prepare consignment-level records for the final conformity stage." },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Certification services"
        title="From requirement to ready—with fewer unknowns."
        text="Complia turns product regulations into a structured path: what applies, what evidence is needed, and what happens next."
        action={{ label: "Discuss your requirement", href: "/contact" }}
      />

      <section className="section services-index">
        <div className="container">
          <div className="section-heading-row">
            <SectionHeading
              eyebrow="Core solutions"
              title="Focused expertise for Saudi product compliance."
              text="Select a service to see the typical scope, evidence, and sequence. Exact requirements are confirmed for each product."
            />
            <div className="scope-note">
              <CheckCircle2 size={20} />
              <span>Every route begins with product classification.</span>
            </div>
          </div>
          <div className="service-grid service-grid-large">
            {services.map((service) => <ServiceCard key={service.slug} service={service} />)}
          </div>
        </div>
      </section>

      <section className="section capabilities-section">
        <div className="container capabilities-grid">
          <div className="capabilities-intro">
            <p className="eyebrow eyebrow-light"><span /> Across every service</p>
            <h2>Technical coordination that keeps the whole file together.</h2>
            <p>
              Certification is rarely one document or one decision. We help teams see
              the full evidence chain and manage it deliberately.
            </p>
            <Link href="/contact" className="button button-coral">
              Start with your product <ArrowUpRight size={18} />
            </Link>
          </div>
          <div className="capability-list">
            {capabilities.map((item, index) => {
              const Icon = item.icon;
              return (
                <article key={item.title}>
                  <span className="capability-number">0{index + 1}</span>
                  <Icon size={23} />
                  <div><h3>{item.title}</h3><p>{item.text}</p></div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
