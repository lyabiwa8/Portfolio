"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Layers, Target, Zap, BarChart3 } from "lucide-react";

const softwareSkills = [
  { name: "Photoshop", code: "Ps", color: "#001E36", accent: "#31A8FF", level: 85, desc: "Retouche & Création" },
  { name: "Premiere Pro", code: "Pr", color: "#2D0845", accent: "#EA77FF", level: 80, desc: "Montage Vidéo" },
  { name: "InDesign", code: "Id", color: "#49021F", accent: "#FF3366", level: 70, desc: "Mise en page" },
  { name: "Illustrator", code: "Ai", color: "#330000", accent: "#FF9A00", level: 65, desc: "Vectoriel" },
  { name: "Canva", code: "Cv", color: "#00C4CC", accent: "#FFFFFF", level: 95, desc: "Design Rapide" },
  { name: "CapCut", code: "Cc", color: "#000000", accent: "#FFFFFF", level: 90, desc: "Contenu Social (Noir & Blanc)" },
];

const mainExpertise = [
  {
    title: "Créations de contenus",
    desc: "Conceptions de supports digitaux et print, incluant des flyers, visuels et montage vidéo pour campagnes publicitaire.",
    icon: <Layers className="w-6 h-6" />,
  },
  {
    title: "Stratégie marketing",
    desc: "Élaboration de plans de communication multicanaux, storytelling de marque et analyse de performance.",
    icon: <BarChart3 className="w-6 h-6" />,
  },
  {
    title: "Ingéniérie événementielle",
    desc: "Conception de dispositifs immersifs, scénographie et design d’expériences.",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: "Pilotage de projet",
    desc: "Coordination opérationnelle des prestataire, gestion budgétaire et management d’équipes.",
    icon: <Target className="w-6 h-6" />,
  },
];

const languages = [
  { name: "Français", flag: "https://flagcdn.com/w80/fr.png", level: "Maternel", progress: 100 },
  { name: "Anglais", flag: "https://flagcdn.com/w80/gb.png", level: "B2 — Intermédiaire", progress: 75 },
  { name: "Espagnol", flag: "https://flagcdn.com/w80/es.png", level: "A1 — Débutant", progress: 30 },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 px-6 bg-[#020617]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.4em] text-[#9F1239] font-bold mb-4"
          >
            Compétences
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-2xl md:text-6xl lg:text-7xl font-display font-black text-white leading-[1.1] tracking-tighter"
          >
            Expertise & <br className="hidden md:block" /> Vision Stratégique
          </motion.h3>
        </div>

        {/* 4 Detailed Blocks */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {mainExpertise.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-[#0F172A] rounded-3xl border border-white/5 hover:border-[#9F1239]/30 transition-all group"
            >
              <div className="w-12 h-12 bg-[#9F1239]/10 rounded-2xl flex items-center justify-center text-[#9F1239] mb-6 group-hover:scale-110 transition-transform">
                {exp.icon}
              </div>
              <h4 className="text-xl font-display font-black text-white mb-3 group-hover:text-[#9F1239] transition-colors">
                {exp.title}
              </h4>
              <p className="text-white/60 text-xs leading-relaxed">
                {exp.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-16">
          
          {/* Software Column */}
          <div className="lg:col-span-2">
            <h4 className="text-xl font-display font-black mb-8 flex items-center gap-3 text-white">
              <span className="w-10 h-[1px] bg-[#9F1239]" /> Logiciels Maîtrisés
            </h4>
            <div className="grid sm:grid-cols-2 gap-5">
              {softwareSkills.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#0F172A] p-4 rounded-2xl border border-white/5 group hover:border-[#9F1239]/40 transition-all shadow-xl"
                >
                  <div className="flex items-center gap-5 mb-5">
                    <div 
                      className="w-11 h-11 rounded-xl flex items-center justify-center font-bold text-lg shadow-2xl border transition-transform group-hover:rotate-3"
                      style={{ 
                        backgroundColor: s.color, 
                        borderColor: s.accent + "30",
                        color: s.accent
                      }}
                    >
                      {s.code}
                    </div>
                    <div>
                      <p className="font-black text-white text-lg group-hover:text-[#9F1239] transition-colors">{s.name}</p>
                      <p className="text-[8px] md:text-[10px] uppercase tracking-widest text-white/30 font-black">{s.desc}</p>
                    </div>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: s.accent }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Languages Column */}
          <div className="space-y-12">
            <div>
              <h4 className="text-xl font-display font-bold mb-10 flex items-center gap-3 text-[#E2E8F0]">
                <span className="w-10 h-[1px] bg-[#9F1239]" /> Langues
              </h4>
              <div className="space-y-5">
                {languages.map((l, i) => (
                  <motion.div
                    key={l.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-[#0F172A] p-5 rounded-2xl border border-white/5 flex items-center gap-5 shadow-lg group hover:border-[#9F1239]/20 transition-all"
                  >
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10 flex-shrink-0">
                      <Image 
                        src={l.flag} 
                        alt={l.name} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-end mb-2">
                        <span className="font-bold text-white group-hover:text-[#9F1239] transition-colors">{l.name}</span>
                        <span className="text-[9px] text-[#9F1239] font-bold uppercase tracking-widest">{l.level}</span>
                      </div>
                      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${l.progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2 }}
                          className="h-full bg-[#9F1239] rounded-full shadow-[0_0_10px_rgba(159,18,57,0.5)]"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quote / Vision */}
            <div className="p-8 rounded-3xl bg-[#9F1239]/5 border border-[#9F1239]/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Target size={80} />
              </div>
              <p className="text-[#F8FAFC] font-display italic text-lg leading-relaxed relative z-10">
                "Ma vision allie créativité pure et rigueur opérationnelle pour transformer chaque concept en une expérience mémorable."
              </p>
              <div className="mt-6 flex items-center gap-3 relative z-10">
                <div className="w-8 h-[1px] bg-[#9F1239]" />
                <span className="text-[10px] uppercase tracking-widest text-[#9F1239] font-bold">Vision 2026</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
