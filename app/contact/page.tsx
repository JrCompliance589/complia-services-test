import type { Metadata } from "next";
import { Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { InquiryForm } from "@/components/inquiry-form";
import { PageHero } from "@/components/page-hero";
import { contact } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Complia in New Delhi to discuss product certification, SASO/SABER, PCoC, SCoC, energy efficiency, or IECEE requirements.",
  alternates: { canonical: "/contact" },
  openGraph: {
    url: "/contact",
    title: "Contact Complia",
    description:
      "Discuss your product, destination, and certification requirement with Complia's New Delhi team.",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Start an enquiry"
        title="Bring us the product. We'll help clarify the path."
        text="Tell us what you are exporting, where it is going, and when it needs to move. Our New Delhi team will take it from there."
      />

      <section className="section contact-section">
        <div className="container contact-grid">
          <div className="contact-details">
            <p className="eyebrow"><span /> Contact Complia</p>
            <h2>Expert guidance starts with a few practical details.</h2>
            <p>
              Product classification, destination, and available test evidence are a
              useful place to begin. If you do not have everything yet, send what you do
              know—we can help frame the next questions.
            </p>

            <div className="contact-methods">
              <a href={`tel:${contact.phoneHref}`}>
                <span><Phone size={21} /></span>
                <div><small>Call the office</small><strong>{contact.phoneDisplay}</strong></div>
              </a>
              <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer">
                <span><MessageCircle size={21} /></span>
                <div><small>Message the team</small><strong>Open WhatsApp</strong></div>
              </a>
              <a href={`mailto:${contact.feedbackEmail}`}>
                <span><Mail size={21} /></span>
                <div><small>Complaints & appeals</small><strong>{contact.feedbackEmail}</strong></div>
              </a>
            </div>

            <div className="office-card">
              <div><MapPin size={20} /><p><small>Registered office</small>{contact.address}</p></div>
              <div><Clock3 size={20} /><p><small>Business hours</small>{contact.hours}<br />Saturday–Sunday closed</p></div>
            </div>
          </div>

          <InquiryForm />
        </div>
      </section>

      <section className="contact-bottom-note">
        <div className="container">
          <span>Before you send</span>
          <p>Helpful documents include product photos, labels, datasheets, existing test reports, manuals, and the destination importer’s details.</p>
        </div>
      </section>
    </>
  );
}
