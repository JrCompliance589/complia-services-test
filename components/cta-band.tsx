import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import { contact } from "@/lib/site-data";

export function CtaBand() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-band">
          <div className="cta-grid" aria-hidden="true" />
          <div className="cta-copy">
            <p className="eyebrow eyebrow-light">
              <span aria-hidden="true" /> Start with clarity
            </p>
            <h2>Tell us where your product needs to go.</h2>
            <p>
              Share the product, destination, and timeline. We’ll help you identify
              the likely route and the documents to prepare.
            </p>
          </div>
          <div className="cta-actions">
            <Link href="/contact" className="button button-coral">
              Start an enquiry <ArrowUpRight size={18} />
            </Link>
            <a href={`tel:${contact.phoneHref}`} className="cta-phone">
              <Phone size={18} /> {contact.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
