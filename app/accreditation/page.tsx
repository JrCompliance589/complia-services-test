import type { Metadata } from "next";
import Image from "next/image";
import {
  CalendarCheck2,
  Check,
  Download,
  ExternalLink,
  FileBadge2,
  Scale,
  ShieldCheck,
} from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Accreditation",
  description:
    "Complia is NABCB-accredited to ISO/IEC 17065:2012 as a Product Certification Body under certificate PC 050, valid through 17 December 2028.",
  alternates: { canonical: "/accreditation" },
  openGraph: {
    url: "/accreditation",
    title: "Accreditation | Complia",
    description:
      "Verify Complia's NABCB accreditation to ISO/IEC 17065:2012 under Product Certification Body certificate PC 050.",
  },
};

const facts = [
  { label: "Accreditation body", value: "NABCB", icon: ShieldCheck },
  { label: "Standard", value: "ISO/IEC 17065:2012", icon: Scale },
  { label: "Certificate", value: "PC 050", icon: FileBadge2 },
  { label: "Validity", value: "18 Dec 2025 — 17 Dec 2028", icon: CalendarCheck2 },
];

export default function AccreditationPage() {
  return (
    <>
      <PageHero
        eyebrow="Accreditation"
        title="Credibility starts with a status you can verify."
        text="Complia Regulatory Services Private Limited is accredited by NABCB to ISO/IEC 17065:2012 for Product Certification under certificate PC 050."
        action={{ label: "Verify with NABCB", href: "https://nabcb.qci.org.in" }}
      />

      <section className="section accreditation-overview">
        <div className="container accreditation-overview-grid">
          <div className="accreditation-seal-panel">
            <div className="seal-ring">
              <Image src="/assets/nabcb.png" alt="NABCB accreditation mark" width={150} height={150} />
            </div>
            <p>Accredited product certification body</p>
            <strong>PC 050</strong>
          </div>
          <div>
            <SectionHeading
              eyebrow="Accreditation at a glance"
              title="An internationally structured foundation for product certification."
            />
            <p className="body-large">
              Accreditation to ISO/IEC 17065:2012 demonstrates that Complia’s product
              certification activities operate within a framework for competence,
              consistency, and impartiality.
            </p>
            <p>
              The certificate and its schedules define the exact normative documents,
              schemes, product scope, and offices covered. Clients should refer to the
              published scope when confirming whether a specific product is included.
            </p>
            <div className="status-callout">
              <Check size={17} />
              <p><strong>Current status:</strong> initially accredited 18 December 2025 and valid until 17 December 2028.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section accreditation-facts-section">
        <div className="container accreditation-facts">
          {facts.map((fact) => {
            const Icon = fact.icon;
            return (
              <article key={fact.label}>
                <Icon size={22} />
                <span>{fact.label}</span>
                <strong>{fact.value}</strong>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section scope-section">
        <div className="container scope-grid">
          <div>
            <SectionHeading
              eyebrow="Published scope"
              title="What the current accreditation covers."
              text="Scope must be read precisely. The following details are drawn from the latest accreditation information on the previous Complia site."
            />
          </div>
          <div className="scope-card">
            <div><span>IAF scope</span><strong>18 — Machinery & Equipment</strong></div>
            <div><span>Certification scheme</span><strong>CQS-01 / KSA SALEEM Type 1a</strong></div>
            <div><span>Certification activity</span><strong>Product Certification</strong></div>
            <div><span>Accredited entity</span><strong>Complia Regulatory Services Private Limited</strong></div>
          </div>
        </div>
      </section>

      <section className="section notification-section">
        <div className="container notification-card">
          <div className="notification-status"><span /> In progress</div>
          <div>
            <p className="eyebrow eyebrow-light"><span /> SASO notification</p>
            <h2>Clear about what is accredited—and what comes next.</h2>
            <p>
              Complia is progressing toward recognition as a SASO-notified Certification
              Body. NABCB accreditation is an important prerequisite, but it is not the
              same as completed SASO notification. Until that process is complete, we do
              not describe Complia as SASO-notified.
            </p>
          </div>
        </div>
      </section>

      <section className="section document-section">
        <div className="container document-grid">
          <div>
            <SectionHeading
              eyebrow="Public documents"
              title="Policies and procedures, ready to review."
            />
          </div>
          <div className="document-list">
            <a href="/assets/documents/certification-agreement.pdf" target="_blank">
              <span><FileBadge2 size={21} /></span>
              <div><strong>Certification Agreement</strong><small>CQF-02 Annex A · PDF</small></div>
              <Download size={19} />
            </a>
            <a href="/assets/documents/complaints-and-appeals.pdf" target="_blank">
              <span><Scale size={21} /></span>
              <div><strong>Complaints & Appeals Procedure</strong><small>CQP-08 · PDF</small></div>
              <Download size={19} />
            </a>
            <a href="https://nabcb.qci.org.in" target="_blank" rel="noreferrer">
              <span><ShieldCheck size={21} /></span>
              <div><strong>NABCB verification</strong><small>External accreditation registry</small></div>
              <ExternalLink size={19} />
            </a>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
