"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center bg-bg-main">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md"
      >
        <h1 className="font-display font-bold text-6xl md:text-8xl mb-6 text-accent-primary">
          404
        </h1>
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 text-text-primary">
          Page introuvable
        </h2>
        <p className="text-lg mb-10 text-text-secondary/80">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Link 
          href="/" 
          className="btn-primary px-10 py-5 rounded-full font-bold inline-block soft-shadow"
        >
          Retour à l'accueil
        </Link>
      </motion.div>
    </div>
  );
}
