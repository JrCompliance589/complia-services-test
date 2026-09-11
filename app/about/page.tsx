import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Compass,
  Eye,
  Leaf,
  Scale,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Complia Regulatory Services, its mission, ISO/IEC 17065 accreditation, and commitment to accurate, impartial product certification.",
  alternates: { canonical: "/about" },
  openGraph: {
    url: "/about",
    title: "About Complia",
    description:
      "Meet the NABCB-accredited company making product certification clearer, more accountable, and easier to navigate.",
  },
};

const goals = [
  {
    icon: ShieldCheck,
    title: "Quality & safety",
    text: "Meet applicable requirements, strengthen safety, and keep improving the way certification work is delivered.",
  },
  {
    icon: Compass,
    title: "Explore possibilities",
    text: "Help product businesses understand and unlock opportunities in new regulated markets.",
  },
  {
    icon: Target,
    title: "Strategic growth",
    text: "Support market expansion with focused, compliance-led decisions and practical next steps.",
  },
  {
    icon: Leaf,
    title: "Sustainable progress",
    text: "Encourage responsible product and manufacturing practices through credible conformity routes.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Complia"
        title="Built to make compliance a business enabler."
        text="We combine regulatory insight, disciplined evaluation, and plain communication so product businesses can approach complex markets with confidence."
        action={{ label: "Work with our team", href: "/contact" }}
      />

      <section className="section story-section">
        <div className="container story-grid">
          <div className="story-copy">
            <SectionHeading
              eyebrow="Our story"
              title="A young company built on a serious standard."
            />
            <p className="body-large">
              Complia Regulatory Services Private Limited was founded in November 2024
              with a clear vision: to become a trusted global partner in product
              certification and regulatory compliance.
            </p>
            <p>
              Today, Complia is accredited by NABCB to ISO/IEC 17065:2012 as a Product
              Certification Body under certificate PC 050. We help manufacturers,
              importers, and exporters navigate the path from product evaluation to
              certification with precision, integrity, and transparency.
            </p>
            <p>
              We believe compliance should not be a barrier to innovation or market
              access. It should create confidence—inside the business, across the supply
              chain, and in the market where the product arrives.
            </p>
          </div>
          <div className="story-visual">
            <div className="story-image-wrap">
              <Image
                src="/assets/who-we-are.webp"
                alt="A professional looking toward a connected global city"
                fill
                sizes="(max-width: 900px) 100vw, 44vw"
                className="story-image"
              />
            </div>
            <div className="story-year">
              <small>Established</small>
              <strong>2024</strong>
              <span>New Delhi, India</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section purpose-section">
        <div className="container purpose-grid">
          <article>
            <span className="purpose-icon"><Target size={23} /></span>
            <p className="eyebrow eyebrow-light"><span /> Our mission</p>
            <h2>Guide the path to compliance with clarity and technical precision.</h2>
            <p>
              We help clients understand what applies, prepare sound evidence, and make
              informed decisions—without turning a complex process into a black box.
            </p>
          </article>
          <article>
            <span className="purpose-icon"><Eye size={23} /></span>
            <p className="eyebrow eyebrow-light"><span /> Our vision</p>
            <h2>Become a trusted long-term partner for regulated global trade.</h2>
            <p>
              We are building a culture of trust, independence, and excellence around
              certification that supports safe products and confident market entry.
            </p>
          </article>
        </div>
      </section>

      <section className="section goals-section">
        <div className="container">
          <SectionHeading
            eyebrow="What drives us"
            title="Four goals behind every engagement."
            text="The principles carried over from Complia's original mission, sharpened for the work ahead."
            align="center"
          />
          <div className="goal-grid">
            {goals.map((goal, index) => {
              const Icon = goal.icon;
              return (
                <article key={goal.title}>
                  <div className="goal-head">
                    <span><Icon size={22} /></span>
                    <small>0{index + 1}</small>
                  </div>
                  <h3>{goal.title}</h3>
                  <p>{goal.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="container values-grid">
          <div>
            <SectionHeading
              eyebrow="How we work"
              title="Trust is built in the details."
              text="Accreditation provides the framework. The daily discipline of impartial, evidence-led work is what makes it real."
            />
            <Link href="/accreditation" className="button button-outline">
              See our accreditation <ArrowUpRight size={18} />
            </Link>
          </div>
          <div className="value-list">
            <div><span><Scale size={20} /></span><strong>Impartiality</strong><p>Certification decisions remain independent of commercial pressure.</p></div>
            <div><span><Sparkles size={20} /></span><strong>Clarity</strong><p>Requirements, findings, and next steps are communicated plainly.</p></div>
            <div><span><ShieldCheck size={20} /></span><strong>Integrity</strong><p>Claims and status are grounded in the scope and evidence available.</p></div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
