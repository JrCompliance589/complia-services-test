"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/markets", label: "Markets" },
  { href: "/industries", label: "Industries" },
  { href: "/accreditation", label: "Accreditation" },
];

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Complia home" onClick={() => setOpen(false)}>
          <Image
            src="/assets/complia-logo-white-red.png"
            alt="Complia"
            width={188}
            height={50}
            priority
            className="brand-logo"
          />
          <span className="brand-rule" aria-hidden="true" />
          <span className="brand-descriptor">Regulatory Services</span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn("nav-link", isActive(pathname, item.href) && "active")}
              aria-current={isActive(pathname, item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="header-cta">
          Start an enquiry <ArrowUpRight size={16} strokeWidth={2.2} />
        </Link>

        <button
          className="menu-button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={cn("mobile-panel", open && "open")}
        aria-hidden={!open}
      >
        <nav className="container mobile-nav" aria-label="Mobile navigation">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn("mobile-nav-link", isActive(pathname, item.href) && "active")}
              aria-current={isActive(pathname, item.href) ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              <span>0{index + 1}</span>
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="button button-primary mobile-contact-link" onClick={() => setOpen(false)}>
            Start an enquiry <ArrowUpRight size={18} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
