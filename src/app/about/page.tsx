"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PageWrapper } from "@/components/PageWrapper";
import { Download, GraduationCap, Briefcase, MapPin, Globe, Mail, Car } from "lucide-react";
import { getAssetPath } from "@/utils/imageLoader";

const education = [
  {
    year: "2024 — 2026",
    title: "BTS Communication",
    institution: "Lycée Jacques Brel, La Courneuve",
    desc: "Stratégie de communication, création de contenu et production audiovisuelle.",
    icon: <GraduationCap size={17} />,
  },
  {
    year: "2021 — 2024",
    title: "Baccalauréat STMG (Mercatique)",
    institution: "Lycée Jean Jacques Rousseau, Sarcelles",
    desc: "Spécialisation marketing, analyse de marché et gestion commerciale.",
    icon: <GraduationCap size={17} />,
  },
];

const experience = [
  {
    year: "Mai — Juin 2025",
    title: "Assistante Communication",
    sub: "Stage",
    institution: "Women's Forum, Publicis Groupe · Paris",
    desc: "Plans de communication multicanaux, coordination d'actions, analyse de la demande.",
    icon: <Briefcase size={17} />,
  },
  {
    year: "Sept. 2024 — Présent",
    title: "Agent d'accueil & d'animation",
    sub: "",
    institution: "AASS Gym · Sarcelles",
    desc: "Encadrement d'équipes, organisation d'événements internes et externes.",
    icon: <Briefcase size={17} />,
  },
  {
    year: "Juil. — Août 2025",
    title: "Serveuse",
    sub: "",
    institution: "Mister Garden, Anjou · Paris",
    desc: "Service client, gestion des encaissements, organisation des espaces.",
    icon: <Briefcase size={17} />,
  },
];

const C = {
  bg:       "#020617",
  text:     "#F8FAFC",
  muted:    "rgba(226,232,240,0.60)",
  accent:   "#9F1239",
  accentLt: "#BE123C",
  border:   "rgba(255,255,255,0.08)",
  card:     "#111827",
};

export default function About() {
  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto px-4 md:px-6 pt-24 md:pt-32 pb-20">

        {/* ═══ HERO ═══ */}
        <div className="flex flex-col lg:flex-row gap-10 md:gap-16 items-start mb-16 md:mb-24">

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full max-w-[240px] sm:max-w-[290px] lg:max-w-[320px] mx-auto lg:mx-0 flex-shrink-0"
          >
            <div
              className="aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden img-zoom shadow-2xl"
              style={{ boxShadow: "0 24px 64px -12px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)" }}
            >
              <Image
                src={getAssetPath("/images/photos-presentation/bio-photo.jpg")}
                alt="Lya Biwa" fill sizes="320px"
                className="object-cover object-top" priority
              />
            </div>
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-3 -right-3 text-[9px] font-bold uppercase tracking-widest px-3 py-2 rounded-xl rotate-2 bg-[#9F1239] text-white shadow-lg"
            >
              Événementiel
            </motion.div>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -top-3 -left-3 text-[9px] font-bold uppercase tracking-widest px-3 py-2 rounded-xl -rotate-2 bg-[#111827] backdrop-blur-md border border-white/10 text-[#9F1239]"
            >
              BTS Com
            </motion.div>
          </motion.div>

          {/* Text */}
          <div className="flex-1">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="font-display font-bold leading-tight tracking-tight mb-5"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.8rem)", color: C.text }}
            >
              Étudiante en{" "}
              <em className="not-italic text-[#9F1239]">Communication.</em>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.6 }}
              className="space-y-3 text-base md:text-[17px] leading-relaxed mb-7"
              style={{ color: C.muted }}
            >
              <p>
                Future étudiante en licence de communication (spécialisation événementiel luxe, mode ou sport), je recherche une alternance d’un an à partir de septembre 2026 afin d’aider à concevoir et coordonner des événements, tout en optimisant leur visibilité et leur performance.
              </p>
            </motion.div>

            {/* Pills */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {[
                { icon: <MapPin size={11} />, text: "Île-de-France" },
                { icon: <Car    size={11} />, text: "Permis B" },
                { icon: <Mail   size={11} />, text: "lyabiwa8@gmail.com" },
              ].map((p) => (
                <span
                  key={p.text}
                  className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#E2E8F0]/70 backdrop-blur-md"
                >
                  {p.icon}{p.text}
                </span>
              ))}
            </motion.div>

            <motion.a
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38 }}
              href={getAssetPath("/cv/cv_lya_alternance.pdf")}
              download
              className="inline-flex items-center gap-2.5 btn-primary text-sm font-bold px-8 py-4 rounded-full shadow-lg shadow-[#9F1239]/20"
            >
              Télécharger mon CV <Download size={15} />
            </motion.a>
          </div>
        </div>

        {/* ═══ PARCOURS ═══ */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-5 mb-5">
          {/* Formation */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl md:rounded-3xl p-6 md:p-8 bg-[#111827]/70 backdrop-blur-xl border border-white/5 shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-7">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 bg-[#9F1239]/10 border border-[#9F1239]/30 text-[#9F1239]"
              >
                <GraduationCap size={17} />
              </div>
              <h3 className="text-lg md:text-xl font-display font-bold text-white">Formation</h3>
            </div>

            <div className="space-y-7 relative">
              {/* Vertical line decoration */}
              <div className="absolute left-[17px] top-2 bottom-2 w-[1px] bg-gradient-to-b from-[#9F1239]/50 via-[#9F1239]/20 to-transparent" />
              
              {education.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="pl-14 relative group"
                >
                  <div
                    className="absolute left-0 top-1 w-[34px] h-[34px] rounded-full flex items-center justify-center z-10 bg-[#0F172A] border border-[#9F1239]/30 text-[#9F1239] group-hover:scale-110 group-hover:border-[#9F1239] transition-all"
                  >
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest block mb-1 text-[#9F1239]">{item.year}</span>
                  <h4 className="text-base md:text-lg font-display font-black mb-0.5 text-white">{item.title}</h4>
                  <p className="text-xs font-bold mb-2 text-[#E2E8F0]/40 uppercase tracking-tight">{item.institution}</p>
                  <p className="text-sm leading-relaxed text-[#E2E8F0]/60 max-w-md">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Expérience */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="rounded-2xl md:rounded-3xl p-6 md:p-8 bg-[#111827]/70 backdrop-blur-xl border border-white/5 shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-7">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 bg-[#9F1239]/10 border border-[#9F1239]/30 text-[#9F1239]"
              >
                <Briefcase size={17} />
              </div>
              <h3 className="text-lg md:text-xl font-display font-bold text-white">Expérience</h3>
            </div>

            <div className="space-y-7 relative">
              {/* Vertical line decoration */}
              <div className="absolute left-[17px] top-2 bottom-2 w-[1px] bg-gradient-to-b from-[#9F1239]/50 via-[#9F1239]/20 to-transparent" />

              {experience.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="pl-14 relative group"
                >
                  <div
                    className="absolute left-0 top-1 w-[34px] h-[34px] rounded-full flex items-center justify-center z-10 bg-[#0F172A] border border-[#9F1239]/30 text-[#9F1239] group-hover:scale-110 group-hover:border-[#9F1239] transition-all"
                  >
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest block mb-1 text-[#9F1239]">{item.year}</span>
                  <div className="flex items-center gap-2 mb-0.5">
                    <h4 className="text-base md:text-lg font-display font-black text-white">{item.title}</h4>
                    {item.sub && (
                      <span className="text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#9F1239] text-white">
                        {item.sub}
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-bold mb-2 text-[#E2E8F0]/40 uppercase tracking-tight">{item.institution}</p>
                  <p className="text-sm leading-relaxed text-[#E2E8F0]/60 max-w-md">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </PageWrapper>
  );
}
