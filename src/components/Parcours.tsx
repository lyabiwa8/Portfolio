"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award } from "lucide-react";

const education = [
  {
    year: "2024 - 2026",
    title: "BTS Communication",
    institution: "Lycée Jacques Brel, La Courneuve",
    description: "Apprentissage des stratégies de communication, média et hors-média.",
  },
  {
    year: "2023 - 2024",
    title: "Baccalauréat STMG Mercatique",
    institution: "Lycée Jean Jacques Rousseau, Sarcelles",
    description: "Spécialisation en marketing et gestion commerciale.",
  },
];

const experience = [
  {
    year: "2025 (Mai - Juin)",
    title: "Assistant Communication (Stagiaire)",
    company: "Women's Forum - Publicis Groupe, Paris",
    description: "Gestion des annonceurs, élaboration et pilotage de plans de communication digitale.",
  },
  {
    year: "2024 - 2025",
    title: "Agent d'accueil et d'animation",
    company: "AASS Gym Sarcelles",
    description: "Entraînement des équipes, organisation d'événements et gestion administrative.",
  },
  {
    year: "2025 (Juillet - Août)",
    title: "Serveuse",
    company: "Mister Garden, Paris",
    description: "Service client, encaissement et gestion de la salle.",
  },
];

export function Parcours() {
  return (
    <section id="parcours" className="py-24 px-6 bg-brown-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-accent font-semibold mb-4">Mon Expérience</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-brown-900">Mon Parcours</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-brown-900 text-beige-50 rounded-lg">
                <GraduationCap size={24} />
              </div>
              <h4 className="text-2xl font-display font-bold text-brown-900">Formation</h4>
            </div>

            <div className="space-y-8 border-l-2 border-brown-200 ml-6 pl-8">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-[41px] top-0 w-4 h-4 bg-accent rounded-full border-4 border-brown-50" />
                  <span className="text-sm font-semibold text-accent mb-1 block">{item.year}</span>
                  <h5 className="text-xl font-bold text-brown-900 mb-1">{item.title}</h5>
                  <p className="text-sm font-medium text-brown-500 mb-2">{item.institution}</p>
                  <p className="text-brown-700 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Professional */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-brown-900 text-beige-50 rounded-lg">
                <Briefcase size={24} />
              </div>
              <h4 className="text-2xl font-display font-bold text-brown-900">Expériences</h4>
            </div>

            <div className="space-y-8 border-l-2 border-brown-200 ml-6 pl-8">
              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-[41px] top-0 w-4 h-4 bg-brown-900 rounded-full border-4 border-brown-50" />
                  <span className="text-sm font-semibold text-accent mb-1 block">{item.year}</span>
                  <h5 className="text-xl font-bold text-brown-900 mb-1">{item.title}</h5>
                  <p className="text-sm font-medium text-brown-500 mb-2">{item.company}</p>
                  <p className="text-brown-700 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}





