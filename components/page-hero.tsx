import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  text: string;
  parent?: { label: string; href: string };
  action?: { label: string; href: string };
};

export function PageHero({ eyebrow, title, text, parent, action }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero-grid" aria-hidden="true" />
      <div className="page-orbit page-orbit-one" aria-hidden="true" />
      <div className="page-orbit page-orbit-two" aria-hidden="true" />
      <div className="container page-hero-inner">
        <div className="page-hero-content">
          {parent && (
            <Link href={parent.href} className="back-link">
              <ArrowLeft size={15} /> {parent.label}
            </Link>
          )}
          <p className="eyebrow eyebrow-light">
            <span aria-hidden="true" /> {eyebrow}
          </p>
          <h1>{title}</h1>
          <p>{text}</p>
          {action && (
            <Link href={action.href} className="button button-coral">
              {action.label} <ArrowUpRight size={18} />
            </Link>
          )}
        </div>
        <div className="page-hero-mark" aria-hidden="true">
          <span>C</span>
          <small>Clear paths.<br />Confident markets.</small>
        </div>
      </div>
    </section>
  );
}
