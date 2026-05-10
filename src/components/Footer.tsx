"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Linkedin, ArrowUpRight } from "lucide-react";
import { getAssetPath } from "@/utils/imageLoader";
import { motion } from "framer-motion";

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative mt-20 pt-20 pb-12 px-6 md:px-12 lg:px-24 bg-[#020617] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 md:gap-24 mb-20">
          
          {/* Brand Info */}
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center gap-4 group mb-8">
              <div className="relative w-10 h-10 md:w-12 md:h-12">
                <Image 
                  src={getAssetPath("/images/logos/logo-lya-final.png")} 
                  alt="Logo" 
                  fill 
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">LYA BIWA</span>
                <div className="flex items-center gap-2 mt-1">
                  <p className="text-[10px] uppercase tracking-[0.4em] text-[#9F1239] font-bold">Portfolio 2026</p>
                  <div className="w-4 h-4 text-[#9F1239]/40 group-hover:text-[#9F1239] transition-colors duration-500">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 4.5C11 4.5 10.2 5.5 9.5 5.5C8.8 5.5 8 4.5 7 4.5C5 4.5 3 6.5 3 9.5C3 12.5 5.5 16.5 12 20.5C18.5 16.5 21 12.5 21 9.5C21 6.5 19 4.5 17 4.5C16 4.5 15.2 5.5 14.5 5.5C13.8 5.5 13 4.5 12 4.5Z" opacity="0" />
                      {/* Stylized Bat Logo */}
                      <path d="M12 6c.5 0 1 .5 1.5 1.5.5-1 1-1.5 2-1.5 1.5 0 2.5 1 2.5 2.5 0 1.5-1.5 3.5-6 6.5-4.5-3-6-5-6-6.5 0-1.5 1-2.5 2.5-2.5 1 0 1.5.5 2 1.5.5-1 1-1.5 1.5-1.5z" opacity="0" />
                      <path d="M12 18s-4.5-2.5-7-5.5c-1-1.5-1.5-3-1.5-4.5C3.5 5.5 5 4.5 6.5 4.5c1 0 2 .5 2.5 1.5.5-1 1.5-1.5 2.5-1.5.5 0 1 .1 1.5.3.5-.2 1-.3 1.5-.3 1 0 2 .5 2.5 1.5.5-1 1.5-1.5 2.5-1.5 1.5 0 3 1 3 3.5 0 1.5-.5 3-1.5 4.5-2.5 3-7 5.5-7 5.5zM12 6c-.5 0-1 .5-1.5 1.5-.5-1-1-1.5-2-1.5-1 0-1.5.5-2 1.5-1.5-1-2.5-1.5-4 0-.5 1-.5 2 0 3 1 2 4 4 9 7 5-3 8-5 9-7 .5-1 .5-2 0-3-1.5-1.5-2.5-1-4 0-.5-1-1-1.5-2-1.5-1 0-1.5.5-2 1.5-.5-1-1-.5-1.5-1.5z" opacity="0" />
                      {/* Minimalist Bat Wing Shape */}
                      <path d="M12 18.5c-3-2-6-4.5-6-7.5 0-2 1.5-3.5 3.5-3.5 1 0 1.5.5 2 1.5.5-1 1-1.5 2-1.5s1.5.5 2 1.5c.5-1 1-1.5 2-1.5 2 0 3.5 1.5 3.5 3.5 0 3-3 5.5-6 7.5z" opacity="0" />
                      {/* Actual Stylized Batwing */}
                      <path d="M12 6c.5 0 1 .5 1.5 1 0-1 .5-2 1.5-2s1.5.5 2 1c.5-.5 1-1 2-1s2 1 2 2.5c0 2-3 5-7.5 8C8.5 12.5 5.5 9.5 5.5 7.5c0-1.5 1-2.5 2-2.5s1.5.5 2 1c.5-.5 1-1 2-1s1.5 1 1.5 2c.5-.5 1-1 1-1z" opacity="0" />
                      {/* Simple Bat Signal */}
                      <path d="M12 6c.5 0 1.5 1 1.5 2.5S11.5 12 12 12s-1.5-1-1.5-3.5S11.5 6 12 6z" opacity="0" />
                      {/* The real logo path */}
                      <path d="M21 7.2c-.3-.2-.6-.4-1-.5-1.2-.4-2.5.1-3.5.7-.1-1.2-1.2-2.3-2.5-2.4-1.3-.1-2.4 1-2.5 2.3-.1-1.3-1.2-2.4-2.5-2.3-1.3.1-2.4 1.2-2.5 2.4-1-.6-2.3-1.1-3.5-.7-.4.1-.7.3-1 .5 0 0 1.5 4.5 10 9.8 8.5.2 10-9.8 10-9.8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
            <p className="text-[#E2E8F0]/60 text-base font-display font-medium leading-relaxed mb-10 max-w-sm tracking-wide">
              Concevoir des événements immersifs et des stratégies de communication qui marquent l'identité des marques.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/lya-biwa-130832255/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-white hover:bg-[#9F1239] hover:border-[#9F1239] transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://www.tiktok.com/@atnightimbatman" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-white hover:bg-[#9F1239] hover:border-[#9F1239] transition-all duration-300"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
              <a 
                href="mailto:lyabiwa8@gmail.com" 
                className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-white hover:bg-[#9F1239] hover:border-[#9F1239] transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#9F1239]">Navigation</h4>
              <ul className="space-y-4">
                {["Accueil", "À propos", "Compétences", "Projets"].map((link) => (
                  <li key={link}>
                    <Link 
                      href={link === "Accueil" ? "/" : `/${link.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} 
                      className="text-white/60 hover:text-[#9F1239] transition-colors text-sm font-medium inline-flex items-center gap-2 group"
                    >
                      {link} <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#9F1239]">Contact</h4>
              <ul className="space-y-4">
                <li>
                  <a href="mailto:lyabiwa8@gmail.com" className="text-white/60 hover:text-[#9F1239] transition-colors text-sm font-medium">
                    Email Officiel
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/lya-biwa-130832255/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#9F1239] transition-colors text-sm font-medium">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://www.tiktok.com/@atnightimbatman" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#9F1239] transition-colors text-sm font-medium">
                    TikTok
                  </a>
                </li>
              </ul>
            </div>

            <div className="hidden md:block space-y-6">
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#9F1239]">Location</h4>
              <p className="text-white/60 text-sm font-medium">Île-de-France, France</p>
              <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mt-4 italic">Ouverte à la mobilité</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold">
            © 2026 Lya Biwa — Tous droits réservés
          </p>
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-[10px] text-[#9F1239] uppercase tracking-[0.4em] font-bold hover:text-white transition-colors"
          >
            Back to Top
            <div className="w-8 h-8 rounded-full border border-[#9F1239]/30 flex items-center justify-center group-hover:border-white transition-colors">
              <ArrowUpRight size={14} className="-rotate-45" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
