import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container">
        <span>404</span>
        <p className="eyebrow eyebrow-light"><span /> Page not found</p>
        <h1>This route is outside the map.</h1>
        <p>The page may have moved during the WordPress migration.</p>
        <Link href="/" className="button button-coral"><ArrowLeft size={17} /> Return home</Link>
      </div>
    </section>
  );
}
