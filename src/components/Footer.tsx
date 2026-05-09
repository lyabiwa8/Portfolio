"use client";

import Link from "next/link";
import { Mail, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-brown-100/60 bg-white/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-14">
        {/* Main Row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-10">
          {/* Brand */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="font-display text-2xl font-bold text-brown-900 tracking-tighter hover:text-accent transition-colors"
            >
              LYA BIWA
            </Link>
            <p className="text-brown-500 text-sm mt-1 font-medium">
              Communication · Événementiel · Création
            </p>
          </div>

          {/* Nav Links — horizontal on desktop, hidden on mobile */}
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
                className="text-sm font-medium text-brown-600 hover:text-accent transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-brown-900 text-white text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-full hover:bg-accent transition-all hover:scale-105 self-start md:self-auto"
          >
            <Mail size={14} />
            Me contacter
          </Link>
        </div>

        {/* Divider */}
        <div className="border-t border-brown-100/60 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-[11px] text-brown-400 font-medium tracking-wider uppercase">
            © {new Date().getFullYear()} Lya Biwa — Tous droits réservés.
          </span>
          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="Instagram"
              className="w-8 h-8 flex items-center justify-center rounded-full border border-brown-200 text-brown-500 hover:bg-brown-900 hover:text-white hover:border-brown-900 transition-all"
            >
              <Instagram size={14} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="w-8 h-8 flex items-center justify-center rounded-full border border-brown-200 text-brown-500 hover:bg-brown-900 hover:text-white hover:border-brown-900 transition-all"
            >
              <Linkedin size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
