"use client";

import { Skills } from "@/components/Skills";
import { PageWrapper } from "@/components/PageWrapper";
import { motion } from "framer-motion";

export default function SkillsPage() {
  return (
    <PageWrapper>
      <div className="pt-32">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-8xl lg:text-9xl font-display font-bold text-white tracking-tighter break-words"
          >
            COMPÉTENCES
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "100px" }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-1 bg-[#9F1239] mt-4"
          />
        </div>
        <Skills />

        {/* Additional details for the dedicated page */}
        <section className="py-24 px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">
              Plus qu'un savoir-faire, <br /> un <span className="text-[#9F1239]">savoir-être.</span>
            </h2>
            <p className="text-[#E2E8F0]/60 text-lg leading-relaxed mb-12">
              Au-delà des outils techniques, mon parcours m'a permis de développer une grande adaptabilité et un sens aigu du détail. Je m'engage à apporter une valeur ajoutée constante à chaque projet, en plaçant l'humain et l'innovation au cœur de ma démarche.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Créativité", "Rigueur", "Adaptabilité", "Esprit d'équipe"].map((soft, i) => (
                <motion.div 
                  key={soft}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 bg-[#111827] rounded-2xl border border-white/5 text-white font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 group hover:border-[#9F1239]/40 hover:bg-[#9F1239]/5 transition-all duration-300"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#9F1239] shadow-[0_0_8px_#9F1239]" />
                  {soft}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}
