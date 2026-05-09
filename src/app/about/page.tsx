"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PageWrapper } from "@/components/PageWrapper";
import { Download, Calendar, MapPin, GraduationCap, Briefcase } from "lucide-react";

const education = [
  {
    year: "2023 - Présent",
    title: "Bachelor en Communication",
    institution: "ISCOM Paris",
    desc: "Spécialisation en stratégie de marque et création de contenu.",
    icon: <GraduationCap size={20} />
  },
  {
    year: "2022 - 2023",
    title: "Baccalauréat STMG",
    institution: "Lycée Polyvalent",
    desc: "Mention Très Bien. Focus sur le marketing et la gestion.",
    icon: <GraduationCap size={20} />
  }
];

const experience = [
  {
    year: "2024 - Présent",
    title: "Alternante Communication",
    institution: "ALDA France",
    desc: "Gestion des réseaux sociaux, création de visuels et organisation d'événements.",
    icon: <Briefcase size={20} />
  },
  {
    year: "2023",
    title: "Stage Marketing Digital",
    institution: "Agence Créative",
    desc: "Assistance sur les campagnes Ads et rédaction de newsletters.",
    icon: <Briefcase size={20} />
  }
];

export default function About() {
  return (
    <PageWrapper>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/photos-presentation/bio-photo.jpg"
              alt="Portrait de Lya"
              fill
              className="object-cover"
            />
          </motion.div>
          
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm uppercase tracking-[0.3em] text-accent font-bold mb-6"
            >
              À PROPOS DE MOI
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-display font-bold text-brown-900 mb-8 leading-tight"
            >
              Créative par nature, Stratège par passion.
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6 text-lg text-brown-700 leading-relaxed"
            >
              <p>
                Je m'appelle Lya, j'ai 20 ans et je suis actuellement étudiante en 
                communication à l'ISCOM. Ma vision de la communication ? Un mélange 
                subtil de psychologie, de design et de technologie.
              </p>
              <p>
                Passionnée par l'image sous toutes ses formes, je m'efforce de donner 
                une âme à chaque projet que je touche. Qu'il s'agisse de monter une 
                vidéo percutante ou de concevoir une stratégie social media, mon 
                objectif reste le même : raconter une histoire qui résonne.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-10"
            >
              <a
                href="/cv/cv-lya.pdf"
                download
                className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-white rounded-full font-bold hover:bg-brown-900 transition-all shadow-lg hover:shadow-accent/20"
              >
                Télécharger mon CV <Download size={20} />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Parcours Section */}
        <div className="grid md:grid-cols-2 gap-20 py-24 border-t border-brown-100">
          <div>
            <h3 className="text-3xl font-display font-bold text-brown-900 mb-12 flex items-center gap-4">
              <span className="w-12 h-12 rounded-full bg-beige-100 flex items-center justify-center text-accent">
                <GraduationCap size={24} />
              </span>
              Formation
            </h3>
            <div className="space-y-12 relative before:absolute before:left-[23px] before:top-2 before:bottom-2 before:w-px before:bg-brown-100">
              {education.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="pl-16 relative"
                >
                  <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-white border border-brown-100 flex items-center justify-center text-brown-400 z-10">
                    {item.icon}
                  </div>
                  <span className="text-sm font-bold text-accent mb-2 block">{item.year}</span>
                  <h4 className="text-xl font-display font-bold text-brown-900 mb-2">{item.title}</h4>
                  <p className="text-brown-600 font-medium mb-2">{item.institution}</p>
                  <p className="text-brown-500 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-display font-bold text-brown-900 mb-12 flex items-center gap-4">
              <span className="w-12 h-12 rounded-full bg-beige-100 flex items-center justify-center text-accent">
                <Briefcase size={24} />
              </span>
              Expérience
            </h3>
            <div className="space-y-12 relative before:absolute before:left-[23px] before:top-2 before:bottom-2 before:w-px before:bg-brown-100">
              {experience.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="pl-16 relative"
                >
                  <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-white border border-brown-100 flex items-center justify-center text-brown-400 z-10">
                    {item.icon}
                  </div>
                  <span className="text-sm font-bold text-accent mb-2 block">{item.year}</span>
                  <h4 className="text-xl font-display font-bold text-brown-900 mb-2">{item.title}</h4>
                  <p className="text-brown-600 font-medium mb-2">{item.institution}</p>
                  <p className="text-brown-500 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
