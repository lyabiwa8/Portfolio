"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Accueil", href: "/" },
  { name: "À propos", href: "/about" },
  { name: "Projets", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const total = document.body.scrollHeight - window.innerHeight;
      setScrolled(scrollY > 20);
      setProgress(total > 0 ? (scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-[60]">
        <motion.div
          className="h-full bg-gradient-to-r from-accent to-brown-400"
          style={{ width: `${progress}%` }}
          transition={{ ease: "linear" }}
        />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
        <div className="px-4 md:px-6 pt-4 md:pt-5">
          <div
            className={cn(
              "max-w-7xl mx-auto pointer-events-auto flex justify-between items-center px-5 md:px-8 py-3 rounded-full transition-all duration-500",
              scrolled
                ? "bg-white/80 backdrop-blur-2xl border border-white/60 shadow-xl shadow-brown-900/8"
                : "bg-white/50 backdrop-blur-xl border border-white/30 shadow-lg shadow-brown-900/5"
            )}
          >
            {/* Logo */}
            <Link
              href="/"
              className="font-display font-bold text-brown-900 tracking-tighter text-lg md:text-xl transition-all duration-300 hover:text-accent"
            >
              LYA BIWA
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-[13px] font-semibold tracking-wide transition-all duration-300 relative group py-1",
                    pathname === item.href
                      ? "text-accent"
                      : "text-brown-600 hover:text-brown-900"
                  )}
                >
                  {item.name}
                  <span
                    className={cn(
                      "absolute -bottom-0.5 left-0 h-[1.5px] bg-accent transition-all duration-300 group-hover:w-full",
                      pathname === item.href ? "w-full" : "w-0"
                    )}
                  />
                </Link>
              ))}

              <Link
                href="/contact"
                className="ml-2 bg-brown-900 text-white text-[12px] font-bold uppercase tracking-widest px-5 py-2.5 rounded-full hover:bg-accent transition-all duration-300 hover:scale-105"
              >
                Me contacter
              </Link>
            </div>

            {/* Mobile Burger */}
            <button
              className="md:hidden w-9 h-9 flex flex-col justify-center items-center gap-[5px] group"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              <span
                className={cn(
                  "block w-5 h-[1.5px] bg-brown-900 transition-all duration-300 origin-center",
                  isMenuOpen && "rotate-45 translate-y-[6.5px]"
                )}
              />
              <span
                className={cn(
                  "block w-5 h-[1.5px] bg-brown-900 transition-all duration-300",
                  isMenuOpen && "opacity-0 scale-x-0"
                )}
              />
              <span
                className={cn(
                  "block w-5 h-[1.5px] bg-brown-900 transition-all duration-300 origin-center",
                  isMenuOpen && "-rotate-45 -translate-y-[6.5px]"
                )}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-brown-900/30 backdrop-blur-sm md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="fixed top-20 left-4 right-4 z-50 md:hidden"
            >
              <div className="bg-white/95 backdrop-blur-2xl border border-brown-100/50 rounded-3xl p-8 shadow-2xl shadow-brown-900/15">
                <div className="flex flex-col gap-6">
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "block text-2xl font-display font-bold transition-colors",
                          pathname === item.href
                            ? "text-accent"
                            : "text-brown-800 hover:text-accent"
                        )}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                  <div className="pt-4 border-t border-brown-100">
                    <Link
                      href="/contact"
                      className="block w-full text-center bg-brown-900 text-white font-bold py-3.5 rounded-full hover:bg-accent transition-all"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Me contacter
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
