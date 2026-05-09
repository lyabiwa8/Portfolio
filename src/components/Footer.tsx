"use client";

import Link from "next/link";
import { Mail, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="relative z-10 mt-4"
      style={{ borderTop: "1px solid rgba(30,18,8,0.09)", background: "rgba(247,241,232,0.60)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">

          {/* Brand */}
          <div>
            <Link href="/"
              className="font-display text-xl font-bold tracking-tight transition-colors hover:text-accent"
              style={{ color: "#1E1208" }}
            >
              LYA BIWA
            </Link>
            <p className="text-[11px] mt-0.5 font-medium tracking-wide" style={{ color: "rgba(45,27,14,0.45)" }}>
              Communication · Événementiel · Création
            </p>
          </div>

          {/* Nav */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: "Accueil",  href: "/" },
              { label: "À propos", href: "/about" },
              { label: "Projets",  href: "/projects" },
              { label: "Contact",  href: "/contact" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium transition-colors"
                style={{ color: "rgba(45,27,14,0.50)" }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 btn-primary text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-full self-start md:self-auto"
          >
            <Mail size={13} />
            Me contacter
          </Link>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderTop: "1px solid rgba(30,18,8,0.07)", paddingTop: "1.5rem" }}
        >
          <span className="text-[11px] font-medium tracking-wider uppercase"
            style={{ color: "rgba(45,27,14,0.35)" }}
          >
            © {new Date().getFullYear()} Lya Biwa — Tous droits réservés.
          </span>
          <div className="flex items-center gap-2.5">
            {[
              { icon: <Instagram size={13} />, label: "Instagram" },
              { icon: <Linkedin  size={13} />, label: "LinkedIn" },
            ].map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="w-8 h-8 flex items-center justify-center rounded-full transition-all"
                style={{ border: "1px solid rgba(30,18,8,0.14)", color: "rgba(45,27,14,0.45)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#A8703F"; (e.currentTarget as HTMLElement).style.color = "white"; (e.currentTarget as HTMLElement).style.borderColor = "#A8703F"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = ""; (e.currentTarget as HTMLElement).style.color = "rgba(45,27,14,0.45)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(30,18,8,0.14)"; }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}





