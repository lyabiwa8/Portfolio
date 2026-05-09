"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-beige-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl"
        >
          <Image
            src="/lya-portfolio/images/photos-presentation/bio-photo.jpg"
            alt="Lya Biwa Portfolio"
            fill
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm uppercase tracking-widest text-accent font-semibold mb-4">À mon sujet</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-brown-900 mb-6 leading-tight">
            Créative, Rêveuse & Communicante
          </h3>
          <p className="text-lg text-brown-700 leading-relaxed mb-6">
            Étudiante en BTS Communication, je me définis comme une personne créative et passionnée. 
            Mon univers gravite autour de la mode, de la lecture, de l'écriture et du cinéma. 
            J'aime capturer l'éphémère à travers la photographie, car comme je le dis souvent : 
            <span className="italic block mt-2 text-brown-900 font-medium">
              "Les vagues de la mer étaient un plaisir à capturer car à chaque angle que je choisissais, il y avait toujours un nouveau motif à observer."
            </span>
          </p>
          <p className="text-lg text-brown-700 leading-relaxed mb-8">
            Mon parcours est marqué par une curiosité constante pour le monde qui m'entoure, 
            du Japon (langue que j'apprends) à la gymnastique que je pratique et enseigne. 
            Mon objectif ? Apporter une vision fraîche et audacieuse dans chaque projet de communication.
          </p>

          <div className="grid grid-cols-2 gap-6">
            <div className="p-4 bg-white/50 rounded-xl border border-brown-100">
              <span className="block text-2xl font-display font-bold text-brown-900">BTS</span>
              <span className="text-sm text-brown-500 uppercase tracking-wide">Communication</span>
            </div>
            <div className="p-4 bg-white/50 rounded-xl border border-brown-100">
              <span className="block text-2xl font-display font-bold text-brown-900">C1</span>
              <span className="text-sm text-brown-500 uppercase tracking-wide">Niveau Anglais</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}




