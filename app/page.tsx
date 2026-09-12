import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  BadgeCheck,
  Check,
  CheckCircle2,
  ClipboardCheck,
  Globe2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { industryGroups, marketGroups, services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Product Certification & Global Market Access",
  description:
    "Complia helps manufacturers, exporters, and importers navigate product certification, SASO/SABER requirements, and conformity assessment.",
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: "Complia — Clear paths to compliant markets",
    description:
      "Product certification and conformity assessment for confident access to regulated global markets.",
  },
};

const process = [
  {
    icon: ShieldCheck,
    number: "01",
    title: "Quality Control",
    text: "Complia excels in delivering conformity certifications. We ensure your product passes all major checkpoints and is at par with the safety and quality standards.",
  },
  {
    icon: ClipboardCheck,
    number: "02",
    title: "Conformity Assessment",
    text: "Complia is accredited by NABCB to ISO/IEC 17065:2012 as a Product Certification Body under certificate PC 050.",
  },
  {
    icon: Sparkles,
    number: "03",
    title: "Continuous Improvements",
    text: "We are committed to drive continuous improvement in our supply chain through innovation, data analysis, and iterative refinements.",
  },
];

export default function Home() {
  const countryCount = marketGroups.reduce((total, group) => total + group.countries.length, 0);
  const industryCount = industryGroups.reduce((total, group) => total + group.items.length, 0);

  return (
    <>
      <section className="home-hero">
        <Image
          src="/assets/complia-hero.webp"
          alt="An inspection gateway checking a product package before global shipment"
          fill
          priority
          sizes="100vw"
          className="home-hero-image"
        />
        <div className="home-hero-overlay" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="container home-hero-inner">
          <div className="hero-copy">
            <div className="hero-status">
              <BadgeCheck size={17} />
              <span>NABCB accredited</span>
              <small>ISO/IEC 17065:2012 · PC 050</small>
            </div>
            <h1>
              Grow Your Business<br />
              <em>More Efficiently.</em>
            </h1>
            <p>
              Helping your products reach Global Markets with Compliance!
            </p>
            <div className="hero-actions">
              <Link href="/services" className="button button-ghost-light">
                Our Services <ArrowDown size={17} />
              </Link>
              <Link href="/contact" className="button button-coral">
                Get Started With Us <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
          <div className="hero-side-note">
            <span aria-hidden="true" />
            <p>Compliance for safer products<br />and global market access</p>
          </div>
        </div>
        <div className="container hero-metrics">
          <div>
            <strong>{countryCount}</strong>
            <span>Markets represented</span>
          </div>
          <div>
            <strong>{industryCount}+</strong>
            <span>Industry segments</span>
          </div>
          <div>
            <strong>PC 050</strong>
            <span>NABCB certificate</span>
          </div>
          <div>
            <strong>2028</strong>
            <span>Accreditation valid through</span>
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="container trust-strip-inner">
          <div className="trust-mark">
            <Image src="/assets/nabcb.png" alt="NABCB" width={68} height={68} />
            <div>
              <small>Accredited by</small>
              <strong>National Accreditation Board for Certification Bodies</strong>
            </div>
          </div>
          <div className="trust-divider" />
          <p>
            Product certification body accredited to <strong>ISO/IEC 17065:2012</strong>
          </p>
          <Link href="/accreditation" className="text-link">
            View our status <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

      <section className="section about-preview">
        <div className="container about-preview-grid">
          <div className="about-visual">
            <div className="about-image-wrap">
              <Image
                src="/assets/compliance-partner.webp"
                alt="Business professionals beginning a compliance partnership"
                fill
                sizes="(max-width: 900px) 100vw, 45vw"
                className="about-image"
              />
            </div>
            <div className="about-float-card">
              <ShieldCheck size={26} />
              <div>
                <strong>Compliance Expertise</strong>
                <span>Conformity Assurance</span>
              </div>
            </div>
            <span className="about-index">C / 01</span>
          </div>

          <div className="about-preview-copy">
            <SectionHeading
              eyebrow="Who We Are?"
              title="Your Compliance Partner for Success"
              text="Complia Regulatory Services Private Limited was founded in November 2024 with a clear vision to become a trusted global partner in product certification and regulatory compliance."
            />
            <p className="body-large">
              At Complia, we believe that compliance should not be a barrier to innovation
              or market access—it should be an enabler. Our mission is to help manufacturers,
              importers, and exporters navigate complex regulatory frameworks with confidence
              and clarity.
            </p>
            <div className="check-grid">
              {["Compliance Expertise", "International Presence", "Conformity Assurance", "24x7 Hours Customer Support"].map((item) => (
                <div key={item}><CheckCircle2 size={18} /> {item}</div>
              ))}
            </div>
            <Link href="/about" className="button button-outline">
              About Us <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section services-preview">
        <div className="container">
          <div className="section-heading-row">
            <SectionHeading
              eyebrow="Our Services"
              title="Our Dedicated Services"
              text="We believe in providing clear and transparent solutions, making compliance a straightforward and positive experience."
            />
            <Link href="/services" className="button button-outline desktop-only-button">
              What We Do <ArrowUpRight size={18} />
            </Link>
          </div>
          <div className="service-grid">
            {services.map((service) => <ServiceCard key={service.slug} service={service} />)}
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="process-orbit" aria-hidden="true" />
        <div className="container">
          <SectionHeading
            eyebrow="Enhancing quality"
            title="Enhancing Quality Through Control, Assessment, Improvement"
            text="Complia makes sure in attaining excellence through diligent control, assessment, and ongoing improvement in methodologies applied."
            light
          />
          <div className="process-grid">
            {process.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.number} className="process-card">
                  <div className="process-card-head">
                    <span>{item.number}</span>
                    <Icon size={24} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
          <div className="process-promise">
            <Sparkles size={19} />
            <p><strong>Accuracy, reliability, and regulatory compliance.</strong> We guide you through every step of the certification process.</p>
          </div>
        </div>
      </section>

      <section className="section markets-preview">
        <div className="container markets-preview-grid">
          <div>
            <SectionHeading
              eyebrow="Global programmes"
              title="Local requirements. One clear point of coordination."
              text="Explore the destination markets represented in Complia's conformity-assessment portfolio. Programme availability is confirmed against the exact product and current regulation."
            />
            <Link href="/markets" className="button button-primary">
              Explore markets <ArrowUpRight size={18} />
            </Link>
          </div>
          <div className="market-board">
            <div className="market-board-top">
              <span><Globe2 size={19} /> Market coverage</span>
              <small>{countryCount} destinations</small>
            </div>
            {marketGroups.map((group, groupIndex) => (
              <div className="market-row" key={group.region}>
                <span>0{groupIndex + 1}</span>
                <strong>{group.region}</strong>
                <p>{group.countries.slice(0, 5).join(" · ")}{group.countries.length > 5 ? " · + more" : ""}</p>
                <ArrowUpRight size={18} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section industries-preview">
        <div className="container">
          <div className="section-heading-row">
            <SectionHeading
              eyebrow="Industry reach"
              title="Built for products across the real economy."
              text="From industrial machinery to consumer electronics, we organise compliance around the product in front of us."
            />
            <Link href="/industries" className="text-link">
              See all industries <ArrowUpRight size={17} />
            </Link>
          </div>
          <div className="industry-marquee" aria-label="Selected industries">
            {["Machinery", "Electrical", "Chemicals", "Construction", "Energy", "Automotive", "Medical devices", "Textiles", "Food", "Lighting"].map((item, index) => (
              <span key={item}><small>{String(index + 1).padStart(2, "0")}</small>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section accreditation-preview">
        <div className="container accreditation-card">
          <div className="accreditation-badge">
            <Image src="/assets/nabcb.png" alt="NABCB accreditation mark" width={112} height={112} />
            <span><Check size={14} /> Accredited</span>
          </div>
          <div className="accreditation-copy">
            <p className="eyebrow"><span aria-hidden="true" /> Verified foundation</p>
            <h2>Progressing Toward SASO Notification</h2>
            <p>
              Building on our ISO/IEC 17065 accreditation, Complia is progressing toward
              recognition as an official SASO-notified Certification Body. Our NABCB scope
              already covers the SASO SALEEM Scheme (Type 1a, ISO/IEC Guide 17067).
            </p>
            <div className="accreditation-links">
              <Link href="/accreditation" className="button button-primary">
                Accreditation details <ArrowUpRight size={18} />
              </Link>
              <a href="https://nabcb.qci.org.in" target="_blank" rel="noreferrer" className="text-link">
                Visit NABCB <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
