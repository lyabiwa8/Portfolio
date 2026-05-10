"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { getAssetPath } from "@/utils/imageLoader";
import { Menu, X, ArrowRight, Instagram, Linkedin, Mail } from "lucide-react";
import { Magnetic } from "./Magnetic";
import { LottieAnimation } from "./LottieAnimation";

const links = [
  { href: "/",           label: "Accueil" },
  { href: "/about",       label: "À propos" },
  { href: "/skills",      label: "Compétences" },
  { href: "/projects",    label: "Projets" },
  { href: "/contact",     label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Scrolled state for background change
      setScrolled(currentScrollY > 40);

      // Visibility state for hide on scroll
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setVisible(false); // Scrolling down
      } else {
        setVisible(true); // Scrolling up
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ease-[0.16,1,0.3,1] px-4 md:px-12 py-4 md:py-8 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div 
          className={`max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 rounded-[1.5rem] md:rounded-[2.5rem] px-4 py-2 md:px-10 md:py-5 ${
            scrolled ? "bg-[#020617]/80 backdrop-blur-xl border border-white/5 shadow-2xl" : "bg-transparent border-transparent"
          }`}
        >
          {/* Logo */}
          <Magnetic strength={0.2}>
            <div className="relative group z-[110]">
              <Link href="/" className="flex items-center gap-2 md:gap-4">
                <div className="relative w-7 h-7 md:w-12 md:h-12 transition-transform duration-500 group-hover:rotate-12">
                  <Image 
                    src={getAssetPath("/images/logos/logo-lya-final.png")} 
                    alt="Logo" 
                    fill 
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-display font-black text-sm md:text-2xl tracking-tight text-white leading-none">
                    LYA BIWA
                  </span>
                  <span className="text-[7px] md:text-[10px] uppercase tracking-[0.3em] text-[#9F1239] font-black mt-0.5">Portfolio</span>
                </div>
              </Link>
              
              {/* Spider-Man descending from Logo */}
              <div className="hidden md:block absolute top-full left-1/2 -translate-x-1/2 w-32 h-32 pointer-events-none z-[120]">
                <LottieAnimation className="w-full h-full" />
              </div>
            </div>
          </Magnetic>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-2">
            {links.map((link) => (
              <Magnetic key={link.href} strength={0.1}>
                <Link
                  href={link.href}
                  className="relative px-6 py-3 group overflow-hidden"
                >
                  <span className={`relative z-10 text-[11px] font-black uppercase tracking-[0.2em] transition-colors duration-300 ${
                    (pathname === link.href || pathname === `${link.href}/`) ? "text-[#9F1239]" : "text-white/70 group-hover:text-[#9F1239]"
                  }`}>
                    {link.label}
                  </span>
                  {(pathname === link.href || pathname === `${link.href}/`) && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-[#9F1239]/10 border border-[#9F1239]/20 rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              </Magnetic>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <Magnetic strength={0.15}>
              <Link 
                href="/contact" 
                className="hidden md:flex items-center gap-2 bg-[#9F1239] hover:bg-[#BE123C] text-white px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95"
              >
                Collaborer <ArrowRight size={14} />
              </Link>
            </Magnetic>

            {/* Mobile Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative z-[110] flex flex-col gap-1.5 p-2 group"
              aria-label="Toggle Menu"
            >
              <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
              <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
              <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Menu (Tharsanan Style) */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[120] bg-[#020617]/60 backdrop-blur-md lg:hidden"
            />
            
            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[75%] max-w-[320px] z-[130] bg-[#020617] border-l border-white/5 flex flex-col lg:hidden shadow-[-20px_0_60px_rgba(0,0,0,0.8)]"
            >
              <div className="flex flex-col p-10 pt-32 gap-6 items-start overflow-y-auto flex-1">
                <p className="text-[#9F1239] font-black tracking-[0.3em] uppercase text-[10px] mb-4">Navigation</p>
                {links.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    className="w-full"
                  >
                    <Link
                      href={link.href}
                      className={`text-base md:text-3xl font-display font-black uppercase tracking-tight block transition-all duration-300 ${
                        (pathname === link.href || pathname === `${link.href}/`) ? "text-[#9F1239] translate-x-2" : "text-white hover:text-[#9F1239]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              {/* Footer Part of Sidebar */}
              <div className="p-10 bg-white/[0.02] border-t border-white/5">
                <div className="flex items-center gap-6 mb-8">
                  <a 
                    href="https://www.linkedin.com/in/lya-biwa-130832255/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#9F1239] transition-all hover:scale-110"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a 
                    href="mailto:lyabiwa8@gmail.com" 
                    className="text-white hover:text-[#9F1239] transition-all hover:scale-110"
                  >
                    <Mail size={24} />
                  </a>
                </div>
                <p className="text-[#9F1239] font-black tracking-[0.2em] uppercase text-[10px]">
                  © LYA BIWA 2026
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
