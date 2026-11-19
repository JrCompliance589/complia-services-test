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
      </div>
    </section>
  );
}
