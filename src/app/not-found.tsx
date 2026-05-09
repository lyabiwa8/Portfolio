"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center bg-[#0F172A]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md"
      >
        <h1 className="font-display font-bold text-6xl md:text-8xl mb-6 text-[#9F1239]">
          404
        </h1>
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 text-[#F8FAFC]">
          Page introuvable
        </h2>
        <p className="text-lg mb-10 text-[#E2E8F0]/60">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Link 
          href="/" 
          className="btn-primary px-8 py-4 rounded-full font-bold inline-block shadow-xl shadow-[#9F1239]/20"
        >
          Retour à l'accueil
        </Link>
      </motion.div>
    </div>
  );
}
