"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import imageLoader from "@/utils/imageLoader";

export function Hero() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          loader={imageLoader}
          src="/images/photos-presentation/mode-lifestyle.jpg"
          alt="Lya Biwa Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-beige-50/50 via-transparent to-beige-50" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-accent font-medium tracking-widest uppercase mb-4"
        >
          Bienvenue dans mon univers
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-6xl md:text-8xl font-display font-bold text-brown-900 mb-6 leading-tight"
        >
          Lya Biwa
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-brown-700 font-light mb-10 italic"
        >
          "I believe, I can fly"
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <a
            href="#portfolio"
            className="px-8 py-4 bg-brown-900 text-beige-50 rounded-full font-medium hover:bg-brown-800 transition-all shadow-lg hover:shadow-xl"
          >
            Voir mes projets
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-brown-900 text-brown-900 rounded-full font-medium hover:bg-brown-900 hover:text-beige-50 transition-all"
          >
            Me contacter
          </a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-brown-400"
      >
        <div className="w-6 h-10 border-2 border-brown-300 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-brown-300 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}





