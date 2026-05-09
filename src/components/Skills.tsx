"use client";

import { motion } from "framer-motion";

const softwareSkills = [
  { name: "Photoshop", code: "Ps", color: "#001E36", accent: "#31A8FF", level: 85, desc: "Retouche & Création" },
  { name: "Premiere Pro", code: "Pr", color: "#2D0845", accent: "#EA77FF", level: 80, desc: "Montage Vidéo" },
  { name: "InDesign", code: "Id", codeColor: "#FF3366", color: "#49021F", accent: "#FF3366", level: 70, desc: "Mise en page" },
  { name: "Illustrator", code: "Ai", codeColor: "#FF9A00", color: "#330000", accent: "#FF9A00", level: 65, desc: "Vectoriel" },
  { name: "Canva", code: "Cv", color: "#00C4CC", accent: "#FFFFFF", level: 95, desc: "Design Rapide" },
  { name: "CapCut", code: "Cc", color: "#000000", accent: "#FE2C55", level: 90, desc: "Contenu Social" },
];

const languages = [
  { name: "Français", flag: "🇫🇷", level: "Maternel", progress: 100 },
  { name: "Anglais", flag: "🇬🇧", level: "B2 — Intermédiaire", progress: 75 },
  { name: "Espagnol", flag: "🇪🇸", level: "A1 — Débutant", progress: 30 },
];

const expertise = [
  "Stratégie de communication",
  "Organisation événementielle",
  "Gestion des réseaux sociaux",
  "Relations publiques",
  "Rédaction de contenus",
  "Veille concurrentielle",
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-sm uppercase tracking-[0.3em] text-[#9F1239] font-bold mb-4">Expertise</h2>
          <h3 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight">
            Compétences & <br /> Outils Professionnels
          </h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Software Column */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold mb-8 flex items-center gap-2 text-[#E2E8F0]">
              <span className="w-8 h-1 bg-[#9F1239] rounded-full" /> Logiciels Maîtrisés
            </h4>
            <div className="grid sm:grid-cols-2 gap-4">
              {softwareSkills.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#111827] p-5 rounded-2xl border border-white/5 group hover:border-[#9F1239]/30 transition-all shadow-xl"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center font-bold text-xl shadow-lg border"
                      style={{ 
                        backgroundColor: s.color, 
                        borderColor: s.accent + "40",
                        color: s.accent
                      }}
                    >
                      {s.code}
                    </div>
                    <div>
                      <p className="font-bold text-white group-hover:text-[#9F1239] transition-colors">{s.name}</p>
                      <p className="text-xs text-[#E2E8F0]/40">{s.desc}</p>
                    </div>
                  </div>
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: s.accent }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Languages & Expertise Column */}
          <div className="space-y-12">
            {/* Languages */}
            <div>
              <h4 className="text-lg font-bold mb-8 flex items-center gap-2 text-[#E2E8F0]">
                <span className="w-8 h-1 bg-[#9F1239] rounded-full" /> Langues
              </h4>
              <div className="space-y-4">
                {languages.map((l, i) => (
                  <motion.div
                    key={l.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-[#111827] p-4 rounded-xl border border-white/5 flex items-center gap-4"
                  >
                    <span className="text-3xl">{l.flag}</span>
                    <div className="flex-1">
                      <div className="flex justify-between items-end mb-1">
                        <span className="font-bold text-white">{l.name}</span>
                        <span className="text-[10px] text-[#9F1239] font-bold uppercase">{l.level}</span>
                      </div>
                      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${l.progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1 }}
                          className="h-full bg-[#9F1239] rounded-full"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Soft Skills / Expertise list */}
            <div>
              <h4 className="text-lg font-bold mb-6 flex items-center gap-2 text-[#E2E8F0]">
                <span className="w-8 h-1 bg-[#9F1239] rounded-full" /> Savoir-faire
              </h4>
              <div className="flex flex-wrap gap-2">
                {expertise.map((e, i) => (
                  <motion.span
                    key={e}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="px-4 py-2 bg-[#111827] border border-white/10 rounded-full text-xs font-medium text-[#E2E8F0]/70 hover:border-[#9F1239] hover:text-white transition-all cursor-default"
                  >
                    {e}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
