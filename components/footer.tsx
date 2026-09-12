import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock3, MapPin, Phone } from "lucide-react";
import { contact, services } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-lead">
          <Link href="/" className="footer-brand" aria-label="Complia home">
            <Image
              src="/assets/complia-logo-white-red.png"
              alt="Complia"
              width={178}
              height={48}
              className="footer-logo"
            />
          </Link>
          <p>
            COMPLIA was established with the aim to “deliver unmatched quality” services.
            We are an NABCB-accredited ISO/IEC 17065 certification body (PC 050), helping
            clients ensure regulatory compliance for safe, secure access to global markets.
          </p>
          <Link href="/contact" className="footer-enquiry">
            Discuss your product <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="footer-column">
          <p className="footer-label">Explore</p>
          <Link href="/about">About Complia</Link>
          <Link href="/services">Services</Link>
          <Link href="/markets">Markets</Link>
          <Link href="/industries">Industries</Link>
          <Link href="/accreditation">Accreditation</Link>
        </div>

        <div className="footer-column">
          <p className="footer-label">Core services</p>
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`}>
              {service.shortTitle}
            </Link>
          ))}
        </div>

        <div className="footer-column footer-contact">
          <p className="footer-label">New Delhi office</p>
          <a href={`tel:${contact.phoneHref}`}>
            <Phone size={15} /> {contact.phoneDisplay}
          </a>
          <p>
            <Clock3 size={15} /> {contact.hours}
          </p>
          <p>
            <MapPin size={15} /> {contact.address}
          </p>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Complia Regulatory Services Private Limited.</p>
        <div>
          <Link href="/legal/privacy-policy">Privacy</Link>
          <Link href="/legal/terms-and-conditions">Terms</Link>
          <Link href="/legal/regulatory-disclaimer">Regulatory disclaimer</Link>
        </div>
      </div>
    </footer>
  );
}
