import type { Metadata } from "next";
import Image from "next/image";
import {
  CalendarCheck2,
  Check,
  FileBadge2,
  Scale,
  ShieldCheck,
} from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { CertificationInformation, CertificationOverview } from "@/components/certification-information";
import { PageHero } from "@/components/page-hero";
import { PublicDocuments } from "@/components/public-documents";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Accreditation",
  description:
    "Review Complia’s NABCB accreditation (PC 050), certification scheme, fees and funding, client rights, mark-use rules, and complaints and appeals procedure.",
  alternates: { canonical: "/accreditation" },
  openGraph: {
    url: "/accreditation",
    title: "Accreditation | Complia",
    description:
      "Verify Complia’s NABCB accreditation and review its certification process, financial support, fees, client rights, and complaints and appeals procedure.",
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
        title="Accreditation"
        text="Complia Regulatory Services Private Limited is accredited by NABCB to ISO/IEC 17065:2012 as a Conformity Assessment Body and Certification Body for Product Certification."
        action={{ label: "Verify with NABCB", href: "https://nabcb.qci.org.in" }}
      />

      <CertificationOverview local />

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
              title="NABCB-accredited product certification."
            />
            <p className="body-large">
              Complia Regulatory Services Private Limited is accredited by NABCB to
              ISO/IEC 17065:2012 as a Conformity Assessment Body and Certification Body
              for Product Certification.
            </p>
            <p>
              This accreditation authorizes us to issue globally recognized product
              certifications, ensuring that manufacturers, exporters, and importers can
              access international markets with confidence, while maintaining the highest
              standards of quality and compliance.
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
              title="Our accreditation journey."
              text="The certificate and its schedules set out the full scope as accredited, including all normative documents and the offices covered."
            />
          </div>
          <div className="scope-card">
            <div><span>IAF scope</span><strong>18 — Machinery and Equipment</strong></div>
            <div><span>Certification scheme</span><strong>CQS-01 (KSA SALEEM) Type 1a as per ISO/IEC Guide 17067, or SASO SALEEM Scheme (Type 1a assessment as per ISO 17067:2013)</strong></div>
            <div><span>Certification activity</span><strong>Product Certification</strong></div>
            <div><span>Accredited office</span><strong>H. No. 9, Second Floor, Paschim Vihar Extn., Paschim Vihar, West Delhi, New Delhi – 110063, India</strong></div>
          </div>
        </div>
      </section>

      <section className="section notification-section">
        <div className="container notification-card">
          <div className="notification-status"><span /> In progress</div>
          <div>
            <p className="eyebrow eyebrow-light"><span /> SASO notification</p>
            <h2>Progressing toward SASO notification.</h2>
            <p>
              Building on our ISO/IEC 17065 accreditation, Complia is progressing toward
              recognition as an official SASO-notified Certification Body. Our NABCB scope
              already covers the SASO SALEEM Scheme (Type 1a, ISO/IEC Guide 17067)—the
              prerequisite for issuing the SASO Certificate of Conformity for products
              imported to Saudi Arabia against the standards set by the Saudi Standards,
              Metrology, and Quality Organization (SASO).
            </p>
          </div>
        </div>
      </section>

      <CertificationInformation />

      <PublicDocuments includeVerification />

      <CtaBand />
    </>
  );
}
