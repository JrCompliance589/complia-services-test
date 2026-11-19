import { BookOpen, Download, ExternalLink, FileBadge2, Scale, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { certificationDocuments } from "@/lib/site-data";

const documentIcons = {
  scheme: BookOpen,
  agreement: FileBadge2,
  complaints: Scale,
  accreditation: ShieldCheck,
};

export function PublicDocuments({ includeVerification = false }: { includeVerification?: boolean }) {
  return (
    <section id="public-documents" className="section document-section" aria-label="Public certification documents">
      <div className="container document-grid">
        <div>
          <SectionHeading
            eyebrow="Public documents"
            title="Policies and procedures, ready to review."
            text="Read the full certification scheme, client agreement and complaints procedure alongside the public information on this page."
          />
        </div>
        <div className="document-list certification-document-list">
          {certificationDocuments.map((document) => {
            const Icon = documentIcons[document.id];
            return (
              <a key={document.id} href={document.href} target="_blank" rel="noopener noreferrer" aria-label={`${document.title} (PDF, opens in a new tab)`}>
                <span><Icon size={21} aria-hidden="true" /></span>
                <div><strong>{document.title}</strong><small>{document.reference}</small></div>
                <Download size={19} aria-hidden="true" />
              </a>
            );
          })}
          {includeVerification && (
            <a href="https://nabcb.qci.org.in" target="_blank" rel="noopener noreferrer" aria-label="NABCB verification (opens in a new tab)">
              <span><ShieldCheck size={21} aria-hidden="true" /></span>
              <div><strong>NABCB verification</strong><small>External accreditation registry</small></div>
              <ExternalLink size={19} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
