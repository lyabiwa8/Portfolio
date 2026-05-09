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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[90%] max-w-5xl rounded-full px-8 py-4",
        isScrolled ? "glass shadow-xl py-3" : "bg-transparent"
      )}
    >
      <div className="flex justify-between items-center">
        <Link href="/" className="text-xl font-display font-bold text-brown-900 tracking-tighter">
          LYA BIWA
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-all duration-300 relative group",
                pathname === item.href ? "text-accent" : "text-brown-700 hover:text-brown-900"
              )}
            >
              {item.name}
              <span className={cn(
                "absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full",
                pathname === item.href && "w-full"
              )} />
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-brown-900 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 mt-4 glass rounded-3xl p-8 flex flex-col space-y-6 shadow-2xl"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-2xl font-display font-bold transition-colors",
                  pathname === item.href ? "text-accent" : "text-brown-700 hover:text-accent"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
