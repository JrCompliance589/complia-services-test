"use client";

import Link from "next/link";
import { ArrowUpRight, CheckCircle2, MessageCircle } from "lucide-react";
import { FormEvent, useState } from "react";
import { contact, services } from "@/lib/site-data";

export function InquiryForm() {
  const [continued, setContinued] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const organisation = String(form.get("organisation") || "");
    const email = String(form.get("email") || "");
    const phone = String(form.get("phone") || "");
    const service = String(form.get("service") || "General enquiry");
    const message = String(form.get("message") || "");
    const text = [
      "Hello Complia, I'd like to discuss a compliance requirement.",
      `Name: ${name}`,
      organisation ? `Organisation: ${organisation}` : "",
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Service: ${service}`,
      message ? `Product / destination: ${message}` : "",
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
          Full name <span>*</span>
          <input name="name" type="text" autoComplete="name" required placeholder="Your name" />
        </label>
        <label>
          Organisation
          <input name="organisation" type="text" autoComplete="organization" placeholder="Company name" />
        </label>
      </div>

      <div className="form-row">
        <label>
          Work email <span>*</span>
          <input name="email" type="email" autoComplete="email" required placeholder="name@company.com" />
        </label>
        <label>
          Phone <span>*</span>
          <input name="phone" type="tel" autoComplete="tel" required placeholder="+91 00000 00000" />
        </label>
      </div>

      <label>
        What do you need help with? <span>*</span>
        <select name="service" required defaultValue="">
          <option value="" disabled>Select a service</option>
          {services.map((service) => (
            <option key={service.slug} value={service.shortTitle}>{service.shortTitle}</option>
          ))}
          <option value="Other conformity programme">Other conformity programme</option>
        </select>
      </label>

      <label>
        Product and destination <span>*</span>
        <textarea
          name="message"
          rows={5}
          required
          placeholder="Tell us about the product, destination market, and target date."
        />
      </label>

      <label className="consent-row">
        <input type="checkbox" required />
        <span>
          I agree that Complia may use these details to respond to my enquiry. See the{" "}
          <Link href="/legal/privacy-policy">Privacy Policy</Link>.
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
