"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { getAssetPath } from "@/utils/imageLoader";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md"
      >
        <h1 className="font-display font-bold text-6xl md:text-8xl mb-6" style={{ color: "#1E1208" }}>
          404
        </h1>
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-4" style={{ color: "#6B3E20" }}>
          Page introuvable
        </h2>
        <p className="text-lg mb-10" style={{ color: "rgba(30,18,8,0.6)" }}>
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Link 
          href="/" 
          className="btn-primary px-8 py-4 rounded-full font-bold inline-block"
        >
          Retour à l'accueil
        </Link>
      </motion.div>
    </div>
  );
}
