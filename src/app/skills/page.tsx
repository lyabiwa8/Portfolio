"use client";

import { Skills } from "@/components/Skills";
import { PageWrapper } from "@/components/PageWrapper";
import { motion } from "framer-motion";

const C = {
  text:     "var(--text-primary)",
  muted:    "var(--text-secondary)",
  accent:   "var(--accent-primary)",
  border:   "var(--border-subtle)",
  surface:  "var(--surface)",
  bg:       "var(--bg-main)",
};

export default function SkillsPage() {
  return (
    <PageWrapper>
      <div className="pt-28 md:pt-40">
        <div className="max-w-7xl mx-auto px-6 mb-16 md:mb-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display font-bold leading-[0.9] tracking-tighter"
            style={{ fontSize: "clamp(3.5rem, 12vw, 8rem)", color: C.text }}
          >
            Compétences<span className="text-accent-primary italic">.</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "120px" }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-1.5 bg-accent-primary mt-8 rounded-full"
          />
        </div>
        
        <Skills />

        {/* Additional details for the dedicated page */}
        <section className="py-24 px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight" style={{ color: C.text }}>
              Plus qu'un savoir-faire, <br /> un <span className="text-accent-primary italic">savoir-être.</span>
            </h2>
            <p className="text-lg md:text-xl font-medium leading-relaxed opacity-60" style={{ color: C.text }}>
              Au-delà des outils techniques, mon parcours m'a permis de développer une grande adaptabilité et un sens aigu du détail. Je m'engage à apporter une valeur ajoutée constante à chaque projet, en plaçant l'humain et l'innovation au cœur de ma démarche.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              {["Créativité", "Rigueur", "Adaptabilité", "Esprit d'équipe"].map((soft, i) => (
                <motion.div 
                  key={soft}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 bg-surface/50 rounded-[2rem] border border-border-subtle/20 text-text-primary font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 group hover:border-accent-primary/40 hover:bg-surface transition-all duration-500 soft-shadow"
                >
                  <div className="w-2 h-2 rounded-full bg-accent-primary shadow-sm" />
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
