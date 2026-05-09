"use client";

import Link from "next/link";
import { Mail, Music2, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="relative z-10 mt-4"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)", background: "rgba(17,24,39,0.9)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">

          {/* Brand */}
          <div>
            <Link href="/"
              className="flex items-center gap-3 group mb-2"
            >
              <div className="font-display font-bold text-lg md:text-xl tracking-tighter text-[#9F1239]">
                LB
              </div>
              <span 
                className="font-display text-xl font-bold tracking-tight transition-colors hover:text-[#9F1239]"
                style={{ color: "#F8FAFC" }}
              >
                LYA BIWA
              </span>
            </Link>
            <p className="text-[11px] mt-0.5 font-medium tracking-wide" style={{ color: "rgba(226,232,240,0.4)" }}>
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
                className="text-sm font-medium transition-colors hover:text-[#9F1239]"
                style={{ color: "rgba(226,232,240,0.5)" }}
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
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "1.5rem" }}
        >
          <span className="text-[11px] font-medium tracking-wider uppercase"
            style={{ color: "rgba(226,232,240,0.3)" }}
          >
            © {new Date().getFullYear()} Lya Biwa — Tous droits réservés.
          </span>
          <div className="flex items-center gap-2.5">
            {[
              { icon: <Music2 size={13} />, label: "TikTok", href: "https://www.tiktok.com/@atnightimbatman" },
              { icon: <Linkedin  size={13} />, label: "LinkedIn", href: "#" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full transition-all"
                style={{ border: "1px solid rgba(255,255,255,0.1)", color: "rgba(226,232,240,0.5)" }}
                onMouseEnter={(e) => { 
                  (e.currentTarget as HTMLElement).style.background = "#9F1239"; 
                  (e.currentTarget as HTMLElement).style.color = "white"; 
                  (e.currentTarget as HTMLElement).style.borderColor = "#9F1239"; 
                }}
                onMouseLeave={(e) => { 
                  (e.currentTarget as HTMLElement).style.background = ""; 
                  (e.currentTarget as HTMLElement).style.color = "rgba(226,232,240,0.5)"; 
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"; 
                }}
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
