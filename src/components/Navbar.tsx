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
  const basePath = "/lya-portfolio";

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
        style={{ background: "rgba(168,112,63,0.10)" }}>
        <motion.div
          className="h-full"
          style={{ width: `${progress}%`, background: "#A8703F" }}
          transition={{ duration: 0.1 }}
        />
      </div>

      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={scrolled
          ? { background: "rgba(237,217,190,0.88)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", borderBottom: "1px solid rgba(30,18,8,0.10)", boxShadow: "0 2px 16px -2px rgba(30,18,8,0.10)" }
          : { background: "transparent" }
        }
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-16 md:h-[70px]">
          {/* Logo */}
          <Link href="/"
            className="font-display font-bold text-lg md:text-xl tracking-tight transition-colors"
            style={{ color: scrolled ? "#1E1208" : "white" }}
          >
            LYA BIWA
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
                  style={{ color: scrolled ? (active ? "#A8703F" : "rgba(30,18,8,0.65)") : (active ? "white" : "rgba(255,255,255,0.75)") }}
                >
                  {l.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-[1.5px] rounded-full"
                      style={{ background: scrolled ? "#A8703F" : "white" }}
                    />
                  )}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="text-sm font-semibold px-5 py-2 rounded-full transition-all"
              style={scrolled
                ? { background: "#1E1208", color: "#F7F1E8" }
                : { background: "rgba(255,255,255,0.18)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.35)", color: "white" }
              }
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
                className="block h-[1.5px] w-5 origin-center"
                style={{ background: scrolled ? "#1E1208" : "white" }}
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
            className="fixed inset-x-0 top-0 z-40 pt-20 pb-8 px-6 md:hidden"
            style={{ background: "rgba(247,241,232,0.97)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", borderBottom: "1px solid rgba(30,18,8,0.08)" }}
          >
            <nav className="flex flex-col gap-2">
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={l.href}
                    className="block py-3 text-xl font-display font-bold transition-colors"
                    style={{ color: pathname === l.href ? "#A8703F" : "#1E1208", borderBottom: "1px solid rgba(30,18,8,0.06)" }}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-4"
              >
                <Link href="/contact"
                  className="block text-center btn-primary text-sm font-semibold px-6 py-3.5 rounded-full"
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





