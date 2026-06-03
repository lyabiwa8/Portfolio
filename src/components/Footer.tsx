"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Linkedin, ArrowUpRight } from "lucide-react";
import { getAssetPath } from "@/utils/imageLoader";
import { motion } from "framer-motion";
import { Magnetic } from "./Magnetic";

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative mt-20 pt-24 pb-12 px-6 md:px-12 lg:px-24 bg-surface/50 border-t border-border-subtle/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 md:gap-24 mb-20">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-10">
            <Link href="/" className="flex items-center gap-5 group">
              <div className="relative w-12 h-12 md:w-14 md:h-14 bg-white p-2 rounded-2xl soft-shadow transition-transform duration-500 group-hover:scale-105">
                <Image 
                  src={getAssetPath("/images/logos/logo-lya-final.png.png")} 
                  alt="Logo" 
                  width={56}
                  height={56}
                  className="w-full h-full object-contain p-1"
                />
              </div>
              <div>
                <span className="font-display font-bold text-2xl md:text-3xl text-text-primary tracking-tighter">LYA BIWA<span className="text-accent-primary italic">.</span></span>
                <p className="text-[10px] uppercase tracking-[0.4em] text-accent-primary font-bold mt-1">Portfolio 2026</p>
              </div>
            </Link>
            <p className="text-text-secondary text-base font-medium leading-relaxed max-w-sm opacity-70">
              Concevoir des événements immersifs et des stratégies de communication qui marquent l'identité des marques.
            </p>
            <div className="flex gap-5">
              {[
                { 
                  href: "https://www.linkedin.com/in/lya-biwa-130832255/", 
                  icon: <Linkedin size={22} />, 
                  label: "LinkedIn",
                  color: "#0077B5" 
                },
                { 
                  href: "https://www.tiktok.com/@atnightimbatman", 
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                    </svg>
                  ), 
                  label: "TikTok",
                  color: "#000000" 
                },
                { 
                  href: "mailto:lyabiwa08@gmail.com", 
                  icon: <Mail size={22} />, 
                  label: "Email",
                  color: "#D44638" 
                }
              ].map((social, i) => (
                <Magnetic key={i} strength={0.2}>
                  <motion.a 
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5 }}
                    className="relative group w-14 h-14 rounded-3xl bg-white border border-border-subtle/20 flex items-center justify-center text-text-primary transition-all duration-500 soft-shadow overflow-hidden"
                  >
                    {/* Background hover effect */}
                    <div className="absolute inset-0 bg-accent-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Icon */}
                    <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                      {social.icon}
                    </span>
                    
                    {/* Tooltip hint */}
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-text-primary text-white text-[9px] font-bold uppercase tracking-widest rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                      {social.label}
                    </div>
                  </motion.a>
                </Magnetic>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12 pt-4">
            <div className="space-y-8">
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent-primary">Navigation</h4>
              <ul className="space-y-5">
                {["Accueil", "À propos", "Compétences", "Projets"].map((link) => (
                  <li key={link}>
                    <Link 
                      href={link === "Accueil" ? "/" : `/${link.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} 
                      className="text-text-secondary hover:text-accent-primary transition-colors text-sm font-bold inline-flex items-center gap-2 group"
                    >
                      {link} <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-1 translate-x-1" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent-primary">Contact</h4>
              <ul className="space-y-5">
                <li>
                  <a href="mailto:lyabiwa08@gmail.com" className="text-text-secondary hover:text-accent-primary transition-colors text-sm font-bold">
                    Email Officiel
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/lya-biwa-130832255/" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent-primary transition-colors text-sm font-bold">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://www.tiktok.com/@atnightimbatman" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent-primary transition-colors text-sm font-bold">
                    TikTok
                  </a>
                </li>
              </ul>
            </div>

            <div className="hidden md:block space-y-8">
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent-primary">Location</h4>
              <div className="space-y-2">
                <p className="text-text-primary text-sm font-bold">Île-de-France, France</p>
                <p className="text-accent-secondary text-[10px] font-bold uppercase tracking-widest italic opacity-70">Ouverte à la mobilité</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-border-subtle/20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-2 items-center md:items-start">
            <p className="text-[10px] text-text-secondary opacity-75 uppercase tracking-[0.2em] font-bold">
              © 2026 Lya Biwa — Tous droits réservés
            </p>
            <p className="text-[10px] text-text-secondary opacity-75 uppercase tracking-[0.2em] font-bold">
              Réalisé par{" "}
              <a 
                href="https://www.instagram.com/tharsh.studio/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-text-primary hover:text-accent-primary transition-colors duration-300 underline underline-offset-4 decoration-accent-primary/30"
              >
                @tharsh.studio
              </a>
            </p>
          </div>
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-4 text-[10px] text-accent-primary uppercase tracking-[0.4em] font-bold hover:text-text-primary transition-all duration-500"
          >
            Back to Top
            <div className="w-10 h-10 rounded-full border border-accent-primary/20 flex items-center justify-center group-hover:border-accent-primary group-hover:bg-accent-primary group-hover:text-white transition-all duration-500">
              <ArrowUpRight size={16} className="-rotate-45" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
