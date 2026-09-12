"use client";

import Link from "next/link";
import { ArrowUpRight, CheckCircle2, MessageCircle } from "lucide-react";
import { FormEvent, useState } from "react";
import { contact } from "@/lib/site-data";

export function InquiryForm() {
  const [continued, setContinued] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const firstName = String(form.get("firstName") || "");
    const lastName = String(form.get("lastName") || "");
    const organisation = String(form.get("organisation") || "");
    const email = String(form.get("email") || "");
    const phone = String(form.get("phone") || "");
    const service = String(form.get("service") || "General enquiry");
    const message = String(form.get("message") || "");
    const text = [
      "Hello Complia, I'd like to discuss a compliance requirement.",
      `Name: ${firstName} ${lastName}`.trim(),
      organisation ? `Organisation: ${organisation}` : "",
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Service: ${service}`,
      message ? `Message: ${message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    setContinued(true);
    window.open(
      `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <form id="enquiry" className="inquiry-form" onSubmit={handleSubmit}>
      <div className="form-heading">
        <span><MessageCircle size={18} /></span>
        <div>
          <p>Product enquiry</p>
          <small>Usually takes under two minutes</small>
        </div>
      </div>

      <div className="form-row">
        <label>
          Full Name <span>*</span>
          <input name="firstName" type="text" autoComplete="given-name" required placeholder="Full Name" />
        </label>
        <label>
          Last Name <span>*</span>
          <input name="lastName" type="text" autoComplete="family-name" required placeholder="Last Name" />
        </label>
      </div>

      <label>
        Organization Name <span>*</span>
        <input name="organisation" type="text" autoComplete="organization" required placeholder="Organization Name" />
      </label>

      <div className="form-row">
        <label>
          Email <span>*</span>
          <input name="email" type="email" autoComplete="email" required placeholder="Email Address" />
        </label>
        <label>
          Phone/Mobile <span>*</span>
          <input name="phone" type="tel" autoComplete="tel" required placeholder="Mobile Number" />
        </label>
      </div>

      <label>
        What Certification do you need? <span>*</span>
        <select name="service" required defaultValue="">
          <option value="" disabled>What Certification do you need?</option>
          <option value="SASO- SABER: PCoC (Product Certificate of Conformity)">SASO- SABER: PCoC (Product Certificate of Conformity)</option>
          <option value="SASO/ SABER- SCoC (Shipment Certificate of Conformity)">SASO/ SABER- SCoC (Shipment Certificate of Conformity)</option>
          <option value="SASO- IECEE">SASO- IECEE</option>
          <option value="SASO- EER">SASO- EER</option>
          <option value="Others, please specify below.">Others, please specify below.</option>
        </select>
      </label>

      <label>
        Your Message <span>*</span>
        <textarea
          name="message"
          rows={4}
          required
          placeholder="Your Message"
        />
      </label>

      <label className="consent-row">
        <input type="checkbox" required />
        <span>
          I consent to have this website use my submitted information so the Complia team
          can respond to my inquiry. See the <Link href="/legal/privacy-policy">Privacy Policy</Link>.
        </span>
      </label>

      <button type="submit" className="button button-primary form-submit">
        Continue on WhatsApp <ArrowUpRight size={18} />
      </button>
      <p className="form-note">
        {continued ? (
          <><CheckCircle2 size={15} /> Your WhatsApp conversation is opening in a new tab.</>
        ) : (
          "We use WhatsApp to hand your enquiry to the New Delhi team—no form data is stored on this website."
        )}
      </p>
    </form>
  );
}
