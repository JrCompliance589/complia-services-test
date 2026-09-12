import type { Metadata } from "next";
import Image from "next/image";
import {
  Compass,
  Leaf,
  ShieldCheck,
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
    title: "Quality and Safety",
    text: "We commit to meeting top-quality and safety regulations, ensure compliance, exceed customer expectations, and drive continuous improvement.",
  },
  {
    icon: Compass,
    title: "Exploring Possibilities",
    text: "We aim to be a catalyst for our clients' businesses by helping them venture into and unlock new markets.",
  },
  {
    icon: Target,
    title: "Strategic Growth",
    text: "Driving success through target driven strategies and compliance-driven solutions.",
  },
  {
    icon: Leaf,
    title: "Sustainability Initiative",
    text: "We aim to promote sustainable practices among our clients, particularly manufacturers and producers, by helping them achieve certifications that serve as an added step towards building a sustainable future.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Complia"
        title="About Us"
        text="Complia Regulatory Services Private Limited was founded in November 2024 with a clear vision to become a trusted global partner in product certification and regulatory compliance."
        action={{ label: "Our Services", href: "/services" }}
      />

      <section className="section story-section">
        <div className="container story-grid">
          <div className="story-copy">
            <SectionHeading
              eyebrow="About Us"
              title="Your Compliance Partner for Success"
            />
            <p className="body-large">
              Complia Regulatory Services Private Limited was founded in November 2024
              with a clear vision to become a trusted global partner in product
              certification and regulatory compliance. Now accredited by NABCB to
              ISO/IEC 17065:2012 (Certificate No. PC 050), Complia operates as a
              Conformity Assessment Body (CAB) that delivers impartial, competent, and
              internationally recognized certification services.
            </p>
            <p>
              At Complia, we believe that compliance should not be a barrier to innovation
              or market access—it should be an enabler. Our mission is to help
              manufacturers, importers, and exporters navigate complex regulatory
              frameworks with confidence and clarity. From product evaluation to final
              certification, we aim to guide the path to compliance with precision, while
              upholding the highest standards of technical accuracy, integrity, and
              transparency.
            </p>
            <p>
              With a team of experienced professionals and deep regulatory insight, we
              serve a broad spectrum of industries offering product conformity
              certification, inspection, and other technical services aligned with global
              best practices. Backed by accreditation, our services are recognized for
              facilitating access to regulated markets, ensuring that products meet
              applicable safety, quality, and performance requirements.
            </p>
            <p>
              As we grow, Complia remains focused on building a culture of trust,
              independence, and excellence—becoming not just a certifying body, but a
              long-term partner in your journey toward regulatory success.
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

      <section className="section goals-section">
        <div className="container">
          <SectionHeading
            eyebrow="Our Goals"
            title="Our Goals"
            text="Quality, new possibilities, strategic growth, and sustainability guide our work."
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

      <CtaBand />
    </>
  );
}
