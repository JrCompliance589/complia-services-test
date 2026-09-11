import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check, CheckCircle2 } from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { services } from "@/lib/site-data";

type ServicePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return {
    title: service.shortTitle,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      url: `/services/${service.slug}`,
      title: `${service.shortTitle} | Complia`,
      description: service.summary,
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  return (
    <>
      <PageHero
        eyebrow={service.kicker}
        title={service.title}
        text={service.summary}
        parent={{ label: "All services", href: "/services" }}
        action={{ label: "Ask about this service", href: "/contact#enquiry" }}
      />

      <section className="section service-intro-section">
        <div className="container service-intro-grid">
          <div className="service-intro-copy">
            <p className="eyebrow"><span /> Service overview</p>
            <h2>A practical route through the requirement.</h2>
            <p className="body-large">{service.intro}</p>
            <div className="best-for">
              <h3>Well suited for</h3>
              {service.bestFor.map((item) => (
                <p key={item}><CheckCircle2 size={18} /> {item}</p>
              ))}
            </div>
          </div>
          <div className="service-detail-art">
            <span className="service-detail-index">{service.index}</span>
            <div className="service-detail-image-wrap">
              <Image
                src={service.image}
                alt={service.imageAlt}
                width={269}
                height={333}
                className="service-detail-image"
              />
            </div>
            <div className="service-fact-grid">
              {service.facts.map((fact) => (
                <div key={fact.label}><strong>{fact.value}</strong><span>{fact.label}</span></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section service-steps-section">
        <div className="container">
          <div className="compact-heading">
            <p className="eyebrow eyebrow-light"><span /> Typical sequence</p>
            <h2>Four stages. One connected file.</h2>
          </div>
          <div className="service-steps">
            {service.steps.map((step, index) => (
              <article key={step.title}>
                <span>0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section service-content-section">
        <div className="container service-content-grid">
          <div className="service-content-main">
            {service.sections.map((section) => (
              <article key={section.title} className="service-copy-block">
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets && (
                  <ul>
                    {section.bullets.map((bullet) => <li key={bullet}><Check size={16} /> {bullet}</li>)}
                  </ul>
                )}
              </article>
            ))}
          </div>
          <aside className="service-aside">
            <p className="eyebrow"><span /> Need a clear answer?</p>
            <h3>Start with the product and destination.</h3>
            <p>We’ll help identify the likely route and the evidence worth preparing first.</p>
            <Link href="/contact#enquiry" className="button button-primary">
              Discuss this service <ArrowUpRight size={18} />
            </Link>
            <small>Requirements are confirmed against current official regulations.</small>
          </aside>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container faq-grid">
          <div>
            <p className="eyebrow"><span /> Common questions</p>
            <h2>Useful context before you begin.</h2>
          </div>
          <div className="faq-list">
            {service.faq.map((item, index) => (
              <details key={item.question} open={index === 0}>
                <summary>{item.question}<span>+</span></summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
