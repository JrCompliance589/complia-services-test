import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/lib/site-data";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="service-card">
      <div className="service-card-top">
        <span className="service-number">{service.index}</span>
        <div className="service-art">
          <Image
            src={service.image}
            alt=""
            width={104}
            height={128}
            className="service-image"
          />
        </div>
      </div>
      <p className="service-kicker">{service.kicker}</p>
      <h3>{service.shortTitle}</h3>
      <p>{service.summary}</p>
      <Link href={`/services/${service.slug}`} className="text-link">
        Explore service <ArrowUpRight size={17} />
      </Link>
    </article>
  );
}
