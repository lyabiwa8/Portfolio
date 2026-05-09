"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/",        label: "Accueil" },
  { href: "/about",   label: "À propos" },
  { href: "/projects",label: "Projets" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [progress, setProgress]   = useState(0);
  const [menuOpen, setMenuOpen]   = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const s = window.scrollY;
      setScrolled(s > 40);
      const total = document.body.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (s / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[2px]"
        style={{ background: "rgba(255,255,255,0.05)" }}>
        <motion.div
          className="h-full"
          style={{ width: `${progress}%`, background: "#9F1239" }}
          transition={{ duration: 0.1 }}
        />
      </div>

      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={scrolled
          ? { background: "rgba(15,23,42,0.85)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 4px 20px -4px rgba(0,0,0,0.4)" }
          : { background: "transparent" }
        }
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-16 md:h-[70px]">
          {/* Logo */}
          <Link href="/"
            className="flex items-center gap-3 group"
          >
            <div className="font-display font-bold text-lg md:text-xl tracking-tighter text-[#9F1239]">
              LB
            </div>
            <span 
              className="font-display font-bold text-lg md:text-xl tracking-tight transition-colors text-[#F8FAFC]"
            >
              LYA BIWA
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => {
              const active = pathname === l.href || (l.href !== "/" && pathname === l.href + "/");
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm font-medium relative transition-colors"
                  style={{ color: active ? "#F8FAFC" : "rgba(226,232,240,0.6)" }}
                >
                  {l.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-[1.5px] rounded-full bg-[#9F1239]"
                    />
                  )}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="text-sm font-semibold px-5 py-2 rounded-full transition-all bg-[#9F1239] text-white hover:bg-[#BE123C] shadow-lg shadow-[#9F1239]/20"
            >
              Me contacter
            </Link>
          </nav>

          {/* Mobile burger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden flex flex-col gap-[5px] p-2 -mr-2"
            aria-label="Menu"
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                animate={menuOpen
                  ? i === 0 ? { rotate: 45, y: 7 }
                  : i === 1 ? { opacity: 0 }
                  : { rotate: -45, y: -7 }
                  : { rotate: 0, y: 0, opacity: 1 }
                }
                transition={{ duration: 0.25 }}
                className="block h-[1.5px] w-5 origin-center bg-white"
              />
            ))}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-0 z-40 pt-20 pb-10 px-6 md:hidden"
            style={{ background: "rgba(15,23,42,0.98)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
          >
            <nav className="flex flex-col gap-2">
              {links.map((l, i) => {
                const active = pathname === l.href || (l.href !== "/" && pathname === l.href + "/");
                return (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <Link
                      href={l.href}
                      className="block py-4 text-2xl font-display font-bold transition-colors"
                      style={{ color: active ? "#9F1239" : "#F8FAFC", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-6"
              >
                <Link href="/contact"
                  className="block text-center bg-[#9F1239] text-white text-base font-semibold px-6 py-4 rounded-full shadow-xl shadow-[#9F1239]/20"
                >
                  Me contacter
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
