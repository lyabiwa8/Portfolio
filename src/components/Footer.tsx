"use client";

import Link from "next/link";
import { Mail, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-brown-900/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-10 md:py-12">
        {/* Main Row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
          {/* Brand */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="font-display text-xl font-bold text-beige-50 tracking-tighter hover:text-accent transition-colors"
            >
              LYA BIWA
            </Link>
            <p className="text-beige-100/50 text-xs mt-1 font-medium tracking-wide">
              Communication · Événementiel · Création
            </p>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: "Accueil", href: "/" },
              { label: "À propos", href: "/about" },
              { label: "Projets", href: "/projects" },
              { label: "Contact", href: "/contact" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-beige-100/50 hover:text-accent transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent text-white text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-full hover:brightness-110 transition-all hover:scale-105 self-start md:self-auto"
          >
            <Mail size={13} />
            Me contacter
          </Link>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-[11px] text-beige-100/30 font-medium tracking-wider uppercase">
            © {new Date().getFullYear()} Lya Biwa — Tous droits réservés.
          </span>
          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="w-8 h-8 flex items-center justify-center rounded-full border border-white/10 text-beige-100/40 hover:bg-accent hover:text-white hover:border-accent transition-all"
            >
              <Instagram size={13} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="w-8 h-8 flex items-center justify-center rounded-full border border-white/10 text-beige-100/40 hover:bg-accent hover:text-white hover:border-accent transition-all"
            >
              <Linkedin size={13} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
