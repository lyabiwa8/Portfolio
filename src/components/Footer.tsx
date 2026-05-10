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
                  src={getAssetPath("/images/logos/logo lya final.png")} 
                  alt="Logo" 
                  fill 
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">LYA BIWA</span>
                <p className="text-[10px] uppercase tracking-[0.4em] text-[#9F1239] font-bold mt-1">Portfolio 2026</p>
              </div>
            </Link>
            <p className="text-[#E2E8F0]/40 text-lg font-light leading-relaxed mb-10 max-w-sm">
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
