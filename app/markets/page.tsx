import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Globe2, MapPinned } from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { marketGroups } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Markets",
  description:
    "Explore destination markets represented in Complia's product conformity and regulatory support portfolio.",
  alternates: { canonical: "/markets" },
  openGraph: {
    url: "/markets",
    title: "Global Conformity Markets | Complia",
    description:
      "Destination-specific product conformity support across Africa, the Middle East, and Eurasia.",
  },
};

export default function MarketsPage() {
  const total = marketGroups.reduce((sum, group) => sum + group.countries.length, 0);

  return (
    <>
      <PageHero
        eyebrow="Destination markets"
        title="Different borders. Different rules. One clearer route."
        text="We help product teams understand destination-specific conformity programmes and prepare the evidence needed for market entry."
        action={{ label: "Ask about a market", href: "/contact" }}
      />

      <section className="section markets-index">
        <div className="container markets-index-grid">
          <div className="markets-sticky">
            <SectionHeading
              eyebrow="Market coverage"
              title={`${total} destinations represented.`}
              text="Country-programme pages from the previous website have been curated into a cleaner portfolio. Exact service availability is confirmed against the product and current local rules."
            />
            <div className="market-caution">
              <CheckCircle2 size={20} />
              <p><strong>Always current.</strong> Regulations can change; we verify the active programme before defining your route.</p>
            </div>
          </div>

          <div className="region-list">
            {marketGroups.map((group, groupIndex) => (
              <article key={group.region} className="region-card">
                <div className="region-card-head">
                  <div>
                    <span>0{groupIndex + 1}</span>
                    <Globe2 size={21} />
                  </div>
                  <p>{group.countries.length} markets</p>
                </div>
                <h2>{group.region}</h2>
                <p>{group.note}</p>
                <div className="country-list">
                  {group.countries.map((country) => (
                    <span key={country}><MapPinned size={15} /> {country}</span>
                  ))}
                </div>
                <Link href="/contact#enquiry" className="text-link">
                  Discuss a {group.region} requirement <ArrowUpRight size={17} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section programme-note-section">
        <div className="container programme-note">
          <span><MapPinned size={26} /></span>
          <div>
            <p className="eyebrow eyebrow-light"><span /> Programme fit</p>
            <h2>A destination alone doesn’t define the route.</h2>
          </div>
          <p>
            Product classification, risk, applicable standard, importer status, and the
            current national programme all matter. That’s why every engagement starts
            with the product—not a generic country checklist.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
