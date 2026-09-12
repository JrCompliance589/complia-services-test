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
        eyebrow="Get in touch"
        title="We Are Connected To Help Your Business!"
        text="Want professional help or advice for your business? Our experts are ready to help you. Get in touch with us to discuss your requirements."
      />

      <section className="section contact-section">
        <div className="container contact-grid">
          <div className="contact-details">
            <p className="eyebrow"><span /> Contact Complia</p>
            <h2>If You Need Any Help Contact Us</h2>
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
