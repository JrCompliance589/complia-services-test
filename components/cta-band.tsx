import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import { contact } from "@/lib/site-data";

export function CtaBand({ compact = false }: { compact?: boolean }) {
  return (
    <section className={compact ? "cta-section cta-section-compact" : "cta-section"}>
      <div className="container">
        <div className="cta-band">
          <div className="cta-grid" aria-hidden="true" />
          <div className="cta-copy">
            <p className="eyebrow eyebrow-light">
              <span aria-hidden="true" /> Get in touch
            </p>
            <h2>We Are Connected To Help Your Business!</h2>
            <p>
              Need expert advice or tailored solutions for your business? We&apos;re here
              to guide you every step of the way.
            </p>
          </div>
          <div className="cta-actions">
            <Link href="/contact" className="button button-coral">
              Request a Call Back <ArrowUpRight size={18} />
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
