import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, ClipboardCheck, ShieldCheck, Sparkles } from "lucide-react";
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
  {
    icon: ShieldCheck,
    title: "Quality Control",
    text: "Complia excels in delivering conformity certifications. We ensure your product passes all major checkpoints and is at par with the safety and quality standards.",
  },
  {
    icon: ClipboardCheck,
    title: "Conformity Assessment",
    text: "Complia is accredited by NABCB to ISO/IEC 17065:2012 as a Product Certification Body under certificate PC 050.",
  },
  {
    icon: Sparkles,
    title: "Continuous Improvements",
    text: "We are committed to drive continuous improvement in our supply chain through innovation, data analysis, and iterative refinements.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="What We Do"
        text="We believe in providing clear and transparent solutions, making compliance a straightforward and positive experience."
        action={{ label: "Get Started With Us", href: "/contact" }}
      />

      <section className="section services-index">
        <div className="container">
          <div className="section-heading-row">
            <SectionHeading
              eyebrow="Our Services"
              title="Our Dedicated Services"
              text="We believe in providing clear and transparent solutions, making compliance a straightforward and positive experience."
            />
            <div className="scope-note">
              <CheckCircle2 size={20} />
              <span>Helping your products reach Global Markets with Compliance!</span>
            </div>
          </div>
          <div className="service-grid service-grid-large">
            {services.map((service) => <ServiceCard key={service.slug} service={service} />)}
          </div>
        </div>
      </section>

      <section className="section capabilities-section">
        <div className="container">
          <div className="capabilities-heading-row">
            <SectionHeading
              eyebrow="Enhancing quality"
              title="Enhancing Quality Through Control, Assessment, Improvement"
              text="Complia makes sure in attaining excellence through diligent control, assessment, and ongoing improvement in methodologies applied."
              light
            />
          </div>
          <div className="capability-card-grid">
            {capabilities.map((item, index) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="capability-card">
                  <div className="capability-card-head">
                    <span className="capability-number">0{index + 1}</span>
                    <span className="capability-icon"><Icon size={22} /></span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
          <div className="capabilities-footer">
            <Link href="/contact" className="text-link">
              Get Started With Us <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand compact />
    </>
  );
}
