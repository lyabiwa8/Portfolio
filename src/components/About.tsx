"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { getAssetPath } from "@/utils/imageLoader";

export function About() {
  return (
    <section id="about" className="py-32 px-6 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 md:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden soft-shadow border border-border-subtle/20"
        >
          <Image
            src={getAssetPath("/images/photos-presentation/bio-photo.jpg")}
            alt="Lya Biwa Portfolio"
            fill
            className="object-cover contrast-[1.05] grayscale-[0.1]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-[10px] uppercase tracking-[0.4em] text-accent-primary font-bold mb-4">À mon sujet</h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold text-text-primary leading-[1.1] tracking-tighter">
              Créative, Rêveuse & <span className="text-accent-primary italic">Communicante.</span>
            </h3>
          </div>
          
          <div className="space-y-6">
            <p className="text-xl text-text-secondary leading-relaxed font-medium opacity-80">
              Étudiante en BTS Communication, je me définis comme une personne créative et passionnée. 
              Mon univers gravite autour de la mode, de la lecture, de l'écriture et du cinéma. 
            </p>
            
            <div className="pl-6 border-l-2 border-accent-primary/20 py-2">
              <span className="italic text-lg md:text-xl text-text-primary font-medium block leading-relaxed">
                "Les vagues de la mer étaient un plaisir à capturer car à chaque angle que je choisissais, il y avait toujours un nouveau motif à observer."
              </span>
            </div>

            <p className="text-lg text-text-secondary leading-relaxed font-medium opacity-60">
              Mon parcours est marqué par une curiosité constante pour le monde qui m'entoure, 
              du Japon (langue que j'apprends) à la gymnastique que je pratique et enseigne. 
              Mon objectif ? Apporter une vision fraîche et audacieuse dans chaque projet de communication.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 pt-6">
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 bg-surface/50 rounded-[2rem] border border-border-subtle/20 soft-shadow"
            >
              <span className="block text-3xl font-display font-bold text-text-primary mb-1">BTS</span>
              <span className="text-[10px] text-accent-primary uppercase tracking-[0.2em] font-bold">Communication</span>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 bg-surface/50 rounded-[2rem] border border-border-subtle/20 soft-shadow"
            >
              <span className="block text-3xl font-display font-bold text-text-primary mb-1">C1</span>
              <span className="text-[10px] text-accent-primary uppercase tracking-[0.2em] font-bold">Anglais Expert</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}





