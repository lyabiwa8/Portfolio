"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PageWrapper } from "@/components/PageWrapper";
import { Download, GraduationCap, Briefcase } from "lucide-react";

const education = [
  {
    year: "2024 — 2026",
    title: "BTS Communication",
    institution: "Lycée Jacques Brel, La Courneuve",
    desc: "Apprentissage des fondamentaux de la communication, stratégie et création publicitaire.",
    icon: <GraduationCap size={20} />
  },
  {
    year: "2021 — 2024",
    title: "Baccalauréat STMG (Mercatique)",
    institution: "Lycée Jean Jacques Rousseau, Sarcelles",
    desc: "Spécialisation marketing, analyse de marché et gestion commerciale.",
    icon: <GraduationCap size={20} />
  }
];

const experience = [
  {
    year: "Mai 2025 — Juin 2025",
    title: "Assistante Communication (Stage)",
    institution: "Women's Forum, Publicis Groupe | Paris",
    desc: "Analyse de la demande, élaboration de plans de com multicanaux et coordination opérationnelle.",
    icon: <Briefcase size={20} />
  },
  {
    year: "Sept. 2024 — Présent",
    title: "Agent d'accueil et d'animation",
    institution: "AASS Gym | Sarcelles",
    desc: "Encadrement d'équipes, organisation d'événements internes et gestion de la relation client.",
    icon: <Briefcase size={20} />
  },
  {
    year: "Juil. 2025 — Août 2025",
    title: "Serveuse",
    institution: "Mister Garden, Anjou | Paris",
    desc: "Gestion de l'accueil, du service et des encaissements complexes en période de flux.",
    icon: <Briefcase size={20} />
  }
];

export default function About() {
  return (
    <PageWrapper>
      <div className="max-w-7xl mx-auto px-6 pt-24 md:pt-32">
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-[8px] md:border-[12px] border-white/60 rotate-[-2deg] max-w-[400px] mx-auto lg:max-w-none"
          >
            <Image
              src="/images/photos-presentation/bio-photo.jpg"
              alt="Portrait de Lya"
              fill
              className="object-cover"
            />
          </motion.div>
          
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 px-4 py-2 rounded-full mb-6 md:mb-8"
            >
              <span className="text-[10px] md:text-xs font-bold text-accent uppercase tracking-widest">En recherche d'alternance</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-7xl font-display font-bold text-brown-900 mb-6 md:mb-10 leading-tight tracking-tighter"
            >
              Étudiante en <span className="text-accent italic">Communication.</span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6 md:space-y-8 text-lg md:text-xl text-brown-700 leading-relaxed font-medium"
            >
              <p>
                Future étudiante en <span className="text-brown-900 font-bold">Licence de Communication</span>, je me passionne pour l'événementiel, le luxe et la mode.
              </p>
              <p>
                Je suis actuellement à la recherche d'une <span className="text-brown-900 font-bold underline decoration-accent/30 decoration-4">alternance d'un an</span> à partir de <span className="text-accent italic font-bold">septembre 2026</span>.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-10 md:mt-12 flex flex-wrap gap-4 md:gap-6"
            >
              <a
                href="/cv/cv-lya.pdf"
                download
                className="inline-flex items-center gap-3 px-10 py-5 bg-brown-900 text-white rounded-full font-bold hover:bg-accent transition-all shadow-xl shadow-brown-900/10"
              >
                Télécharger mon CV <Download size={20} />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Parcours Section */}
        <div className="bg-beige-100/60 backdrop-blur-md -mx-6 px-6 py-32 border-t border-brown-100">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
            <div>
              <h3 className="text-3xl font-display font-bold text-brown-900 mb-16 flex items-center gap-4">
                <span className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-accent shadow-sm">
                  <GraduationCap size={28} />
                </span>
                Formation
              </h3>
              <div className="space-y-12 relative before:absolute before:left-[27px] before:top-2 before:bottom-2 before:w-px before:bg-brown-200">
                {education.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="pl-20 relative"
                  >
                    <div className="absolute left-0 top-0 w-14 h-14 rounded-full bg-white border border-brown-100 flex items-center justify-center text-brown-400 z-10 shadow-sm">
                      {item.icon}
                    </div>
                    <span className="text-sm font-bold text-accent mb-2 block">{item.year}</span>
                    <h4 className="text-2xl font-display font-bold text-brown-900 mb-2">{item.title}</h4>
                    <p className="text-brown-700 font-bold mb-3">{item.institution}</p>
                    <p className="text-brown-500 text-base leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-display font-bold text-brown-900 mb-16 flex items-center gap-4">
                <span className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-accent shadow-sm">
                  <Briefcase size={28} />
                </span>
                Expérience
              </h3>
              <div className="space-y-12 relative before:absolute before:left-[27px] before:top-2 before:bottom-2 before:w-px before:bg-brown-200">
                {experience.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="pl-20 relative"
                  >
                    <div className="absolute left-0 top-0 w-14 h-14 rounded-full bg-white border border-brown-100 flex items-center justify-center text-brown-400 z-10 shadow-sm">
                      {item.icon}
                    </div>
                    <span className="text-sm font-bold text-accent mb-2 block">{item.year}</span>
                    <h4 className="text-2xl font-display font-bold text-brown-900 mb-2">{item.title}</h4>
                    <p className="text-brown-700 font-bold mb-3">{item.institution}</p>
                    <p className="text-brown-500 text-base leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
