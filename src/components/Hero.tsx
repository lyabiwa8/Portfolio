"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { getAssetPath } from "@/utils/imageLoader";

export function Hero() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden bg-main">
      <div className="absolute inset-0 z-0">
        <Image
          src={getAssetPath("/images/photos-presentation/mode-lifestyle.jpg")}
          alt="Lya Biwa Background"
          fill
          className="object-cover opacity-[0.07] grayscale contrast-125"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-main via-transparent to-bg-main" />
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-accent-primary font-bold tracking-[0.3em] uppercase mb-8 text-xs md:text-sm"
        >
          Portfolio Editorial 2026
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-7xl md:text-[10rem] font-display font-bold text-text-primary mb-8 leading-[0.85] tracking-tighter"
        >
          Lya Biwa<span className="text-accent-primary italic">.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-3xl text-text-secondary font-medium mb-14 italic max-w-2xl mx-auto opacity-80"
        >
          "I believe, I can fly"
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <a
            href="#portfolio"
            className="group relative px-10 py-5 bg-accent-primary text-white rounded-full font-bold overflow-hidden transition-all duration-500 hover:scale-105 soft-shadow"
          >
            <span className="relative z-10">Explorer l'univers</span>
            <div className="absolute inset-0 bg-accent-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>
          <a
            href="#contact"
            className="px-10 py-5 border-2 border-border-subtle text-text-primary rounded-full font-bold hover:bg-text-primary hover:text-white transition-all duration-500"
          >
            Parlons de vos projets
          </a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-accent-primary/30 rounded-full flex justify-center p-1.5 shadow-sm">
          <motion.div 
            animate={{ height: [4, 8, 4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 bg-accent-primary rounded-full" 
          />
        </div>
      </motion.div>
    </section>
  );
}





