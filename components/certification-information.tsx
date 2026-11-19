import Link from "next/link";
import { Check, ChevronDown, Mail } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { certificationDocuments, certificationInformation, certificationLinks } from "@/lib/site-data";

const [scheme, agreement, complaints] = certificationDocuments;

function InformationList({ items }: { items: string[] }) {
  return (
    <ul className="certification-list">
      {items.map((item) => <li key={item}><Check size={17} aria-hidden="true" /><span>{item}</span></li>)}
    </ul>
  );
}

export function CertificationOverview({ local = false }: { local?: boolean }) {
  return (
    <section id="certification-information" className="certification-access-section" aria-label="Certification information">
      <div className="container certification-access">
        <div>
          <p className="eyebrow"><span aria-hidden="true" /> Certification information</p>
          <h2>Know the process. Know your rights.</h2>
          <p>Explore our scheme rules, financial support and fees, client responsibilities, and complaints and appeals process.</p>
        </div>
        <nav className="certification-links" aria-label="Certification information topics">
          {certificationLinks.map((item) => (
            <Link key={item.id} href={`${local ? "" : "/accreditation"}#${item.id}`}>{item.label}</Link>
          ))}
        </nav>
      </div>
    </section>
  );
}

export function CertificationInformation() {
  return (
    <>
      <section id="certification-scheme" className="section certification-section" aria-label="Certification scheme and process">
        <div className="container certification-layout">
          <div className="certification-intro">
            <SectionHeading eyebrow="Scheme and process" title="From application to certification." text="Our CQS-01 SASO SALEEM scheme sets out the requirements for Type 1a product certification and the decisions that can affect a certificate." />
          </div>
          <div className="certification-body">
            <div className="certification-scheme-facts">
              <div><span>Certification scheme</span><strong>CQS-01 · SASO SALEEM · Type 1a</strong></div>
              <div><span>PCoC validity</span><strong>One year · new application after expiry</strong></div>
            </div>
            <div className="certification-rules">
              {certificationInformation.schemeRules.map((rule, index) => (
                <details key={rule.title} open={index === 0}>
                  <summary><span>{rule.title}</span><ChevronDown size={19} aria-hidden="true" /></summary>
                  <div>{rule.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="fees-and-funding" className="section certification-section certification-section-tint" aria-label="Financial support and certification fees">
        <div className="container certification-layout">
          <div className="certification-intro">
            <SectionHeading eyebrow="Fees and funding" title="Clear costs. Informed decisions." text="How our certification activities are supported and how charges are communicated to applicants and clients." />
            <Link href="/contact#enquiry" className="button button-primary">Request a quotation</Link>
          </div>
          <div className="certification-body">
            <div className="certification-funding">
              <h3>How Complia is financially supported</h3>
              {certificationInformation.funding.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <p>For more information on our fee structure or to request a quotation, please <Link href="/contact#enquiry">contact Complia directly</Link>.</p>
            </div>
            <div className="certification-fee-terms">
              {certificationInformation.feeTerms.map((term) => (
                <article key={term.title}><h3>{term.title}</h3><p>{term.text}</p></article>
              ))}
            </div>
            <p className="certification-reference">See the <a href={scheme.href} target="_blank" rel="noopener noreferrer">scheme’s cost-of-services provisions</a> and <a href={agreement.href} target="_blank" rel="noopener noreferrer">Certification Agreement</a> for the full terms.</p>
          </div>
        </div>
      </section>

      <section id="client-rights-and-duties" className="section certification-section" aria-label="Client rights, duties and mark use">
        <div className="container certification-layout">
          <div className="certification-intro">
            <SectionHeading eyebrow="Client rights and duties" title="A clear basis for working together." text="Understand what you can expect from Complia, what certification requires of you, and how to refer to your certification." />
          </div>
          <div className="certification-body">
            <article className="certification-client-block"><h3>Your rights</h3><InformationList items={certificationInformation.rights} /></article>
            <article className="certification-client-block"><h3>Your responsibilities</h3><InformationList items={certificationInformation.duties} /></article>
            <article className="certification-client-block"><h3>Using Complia’s name, mark and certification</h3><InformationList items={certificationInformation.certificationClaims} /></article>
            <article className="certification-mark-note">
              <h3>Using the NABCB accreditation symbol</h3>
              <InformationList items={certificationInformation.nabcbRules} />
              <a href={certificationInformation.nabcbPolicyUrl} className="certification-source" target="_blank" rel="noopener noreferrer">Read NABCB 010 symbol-use conditions (PDF)</a>
            </article>
          </div>
        </div>
      </section>

      <section id="complaints-and-appeals" className="section certification-section certification-section-tint" aria-label="Complaints and appeals procedure">
        <div className="container certification-layout">
          <div className="certification-intro">
            <SectionHeading eyebrow="Complaints and appeals" title="A clear route to be heard." text="Raise a concern about our certification activities or ask us to reconsider a certification decision. The public summary below follows our complaints and appeals procedure." />
            <a href="mailto:feedback@complia.services" className="certification-contact"><Mail size={18} aria-hidden="true" /> feedback@complia.services</a>
          </div>
          <div className="certification-body">
            <div className="certification-complaint-options">
              {certificationInformation.complaints.map((option) => (
                <article key={option.title}>
                  <h3>{option.title}</h3>
                  <p>{option.description}</p>
                  <dl><dt>When to submit</dt><dd>{option.deadline}</dd><dt>Outcome</dt><dd>{option.outcome}</dd></dl>
                </article>
              ))}
            </div>
            <div className="certification-handling">
              <h3>How your submission is handled</h3>
              <ol>{certificationInformation.complaintSteps.map((step) => <li key={step.title}><strong>{step.title}</strong><p>{step.text}</p></li>)}</ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
