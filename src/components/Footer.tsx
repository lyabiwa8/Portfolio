"use client";

import Link from "next/link";
import Image from "next/image";
import { getAssetPath } from "@/utils/imageLoader";

export function Footer() {
  return (
    <footer
      className="relative z-10 mt-4"
      style={{ 
        borderTop: "1px solid rgba(255,255,255,0.06)", 
        background: "rgba(15, 23, 42, 0.95)", // Explicit Navy
        backdropFilter: "blur(20px)", 
        WebkitBackdropFilter: "blur(20px)" 
      }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">

          {/* Brand */}
          <div>
            <Link href="/"
              className="flex items-center gap-3 group mb-2"
            >
              <div className="relative w-8 h-8 md:w-10 md:h-10">
                <Image 
                  src={getAssetPath("/images/logos/logo lya final.png")} 
                  alt="Logo Lya Biwa" 
                  fill 
                  className="object-contain"
                />
              </div>
              <span 
                className="font-display text-xl font-bold tracking-tight transition-colors hover:text-[#9F1239]"
                style={{ color: "#F8FAFC" }}
              >
                LYA BIWA
              </span>
            </Link>
            <p className="text-[11px] mt-0.5 font-medium tracking-wide uppercase" style={{ color: "rgba(226,232,240,0.4)" }}>
              Communication · Événementiel · Création
            </p>
          </div>

          {/* Nav */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: "Accueil",     href: "/" },
              { label: "À propos",    href: "/about" },
              { label: "Compétences", href: "/skills" },
              { label: "Projets",     href: "/projects" },
              { label: "Contact",     href: "/contact" },
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
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] px-8 py-4 rounded-full transition-all shadow-2xl shadow-[#9F1239]/20"
            style={{ 
              backgroundColor: "#9F1239", 
              color: "#FFFFFF",
              border: "1px solid rgba(255,255,255,0.1)"
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#BE123C"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#9F1239"; }}
          >
            <Mail size={14} />
            Me contacter
          </Link>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "2rem" }}
        >
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase"
            style={{ color: "rgba(226,232,240,0.3)" }}
          >
            © {new Date().getFullYear()} Lya Biwa — Tous droits réservés.
          </span>

          <div className="flex items-center gap-4">
            <a
              href="mailto:lyabiwa8@gmail.com"
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-colors hover:text-[#9F1239]"
              style={{ color: "rgba(226,232,240,0.5)" }}
            >
              <Mail size={14} /> Mail
            </a>
            <div className="w-[1px] h-3 bg-white/10" />
            <a
              href="https://www.linkedin.com/in/lya-biwa-130832255/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-colors hover:text-[#9F1239]"
              style={{ color: "rgba(226,232,240,0.5)" }}
            >
              <Linkedin size={14} /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
