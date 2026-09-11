import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { legalPages, type LegalSlug } from "@/lib/site-data";

type LegalPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(legalPages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: LegalPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = legalPages[slug as LegalSlug];
  if (!page) return {};
  return {
    title: page.title,
    description: page.intro,
    alternates: { canonical: `/legal/${slug}` },
    openGraph: {
      url: `/legal/${slug}`,
      title: `${page.title} | Complia`,
      description: page.intro,
    },
  };
}

export default async function LegalPage({ params }: LegalPageProps) {
  const { slug } = await params;
  const page = legalPages[slug as LegalSlug];
  if (!page) notFound();

  return (
    <>
      <PageHero eyebrow="Company policy" title={page.title} text={page.intro} />
      <section className="section legal-section">
        <div className="container legal-grid">
          <aside>
            <span>Document status</span>
            <strong>{page.updated}</strong>
            <p>This web version preserves the key policy content from Complia’s previous website.</p>
          </aside>
          <div className="legal-content">
            {page.sections.map((section) => (
              <article key={section.title}>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </article>
            ))}
            <div className="legal-contact-note">
              Questions about this policy can be raised through the contact page. Complaints and appeals may be sent to feedback@complia.services.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
