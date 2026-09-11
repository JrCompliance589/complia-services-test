import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Boxes,
  Building2,
  CarFront,
  Cpu,
  Factory,
  FlaskConical,
  HeartPulse,
  Landmark,
  Zap,
} from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { industryGroups } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Product certification and conformity support across machinery, electronics, chemicals, construction, energy, transport, healthcare, and consumer products.",
  alternates: { canonical: "/industries" },
  openGraph: {
    url: "/industries",
    title: "Industries | Complia",
    description:
      "Certification and conformity support across machinery, electronics, chemicals, construction, energy, transport, healthcare, and consumer products.",
  },
};

const icons = [FlaskConical, Factory, Zap, HeartPulse, Landmark, CarFront, Cpu];

export default function IndustriesPage() {
  const total = industryGroups.reduce((sum, group) => sum + group.items.length, 0);

  return (
    <>
      <PageHero
        eyebrow="Industry expertise"
        title="Certification grounded in the product itself."
        text="Our portfolio spans industrial, consumer, energy, mobility, healthcare, and technology categories—each approached through its applicable evidence and standard."
        action={{ label: "Discuss your product", href: "/contact" }}
      />

      <section className="section industries-index">
        <div className="container">
          <div className="section-heading-row">
            <SectionHeading
              eyebrow="Portfolio"
              title={`${total}+ product and industry segments.`}
              text="This portfolio reflects the sectors represented on Complia's previous website. Final scope and service availability are confirmed for each request."
            />
            <div className="industry-total"><Boxes size={22} /><strong>{industryGroups.length}</strong><span>industry groups</span></div>
          </div>
          <div className="industry-groups-grid">
            {industryGroups.map((group, index) => {
              const Icon = icons[index] ?? Building2;
              return (
                <article key={group.title} className="industry-group-card">
                  <div className="industry-group-head">
                    <span><Icon size={23} /></span>
                    <small>0{index + 1}</small>
                  </div>
                  <h2>{group.title}</h2>
                  <div className="industry-item-list">
                    {group.items.map((item) => <p key={item}>{item}</p>)}
                  </div>
                  <Link href="/contact#enquiry" className="text-link">
                    Ask about this sector <ArrowUpRight size={17} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section product-first-section">
        <div className="container product-first-grid">
          <div className="product-first-number">01</div>
          <div>
            <p className="eyebrow eyebrow-light"><span /> Product first</p>
            <h2>Your category starts the conversation. Your exact model defines the work.</h2>
          </div>
          <p>
            Small changes in materials, rating, intended use, model family, or destination
            can change the evidence required. We scope from the technical facts up.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
