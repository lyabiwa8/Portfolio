"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PageWrapper } from "@/components/PageWrapper";
import { Play, FileText, ImageIcon } from "lucide-react";
import { useState } from "react";
import { getAssetPath } from "@/utils/imageLoader";

const categories = ["Tous", "Vidéo", "Design", "Rédaction"];

const projects = [
  {
    title: "Ogilvy / Candy'Up",
    category: "Vidéo",
    type: "video",
    src: "/images/creations/projet-ogilvy.mov",
    thumb: "/images/logos/ogilvy-logo-agence.jpg",
    desc: "Campagne digitale pour Ogilvy Paris. Storytelling visuel et montage dynamique."
  },
  {
    title: "Article Touristy",
    category: "Rédaction",
    type: "pdf",
    src: "/images/creations/article-touristy.pdf",
    thumb: "/images/creations/touristy-thumb.png",
    desc: "Rédaction d'un article de voyage premium pour le magazine Touristy."
  },
  {
    title: "Starz Communication",
    category: "Design",
    type: "pdf",
    src: "/images/creations/starz.pdf",
    thumb: "/images/creations/event-affiche-perso.png",
    desc: "Dossier complet de stratégie de communication et identité visuelle pour Starz."
  },
  {
    title: "TikTok Edit Schiaparelli",
    category: "Vidéo",
    type: "video",
    src: "/images/creations/edit-schiaparelli.mp4",
    thumb: "/images/photos-presentation/photo-runway-mode.jpg",
    desc: "Montage court format (Short/Reel) axé sur la haute couture Schiaparelli."
  },
  {
    title: "Newsletter Suisse Normande",
    category: "Rédaction",
    type: "pdf",
    src: "/images/creations/newsletter-suisse-normande.pdf",
    thumb: "/images/creations/newsletter-thumb.png",
    desc: "Mise en page et rédaction de la newsletter culturelle Suisse Normande."
  },
  {
    title: "Affiche Événementielle RS",
    category: "Design",
    type: "image",
    src: "/images/creations/event-affiche-rs.png",
    thumb: "/images/creations/event-affiche-rs.png",
    desc: "Conception graphique d'une affiche pour les réseaux sociaux."
  },
  {
    title: "Édit Batman Concept",
    category: "Vidéo",
    type: "video",
    src: "/images/creations/edit-batman-jeu.mov",
    thumb: "/images/creations/batman-thumb.png",
    desc: "Motion design et montage autour de l'univers de Batman."
  },
  {
    title: "Faux Article Mode",
    category: "Rédaction",
    type: "pdf",
    src: "/images/creations/faux-article.pdf",
    thumb: "/images/creations/faux-article-thumb.png",
    desc: "Exercice de rédaction journalistique et mise en page éditoriale."
  },
  {
    title: "Invitation Événement",
    category: "Design",
    type: "image",
    src: "/images/creations/invitation-event.png",
    thumb: "/images/creations/invitation-event.png",
    desc: "Design minimaliste et élégant pour une invitation événementielle."
  },
  {
    title: "Edit VS / Mode",
    category: "Vidéo",
    type: "video",
    src: "/images/creations/edit-vs.mov",
    thumb: "/images/photos-presentation/vogue-lifestyle.jpg",
    desc: "Comparaison visuelle et montage rythmé sur les tendances mode."
  },
  {
    title: "Scrapbook Créatif",
    category: "Design",
    type: "image",
    src: "/images/creations/scrapbook-mode.jpg",
    thumb: "/images/creations/scrapbook-mode.jpg",
    desc: "Composition artistique type scrapbook mêlant photos et typographies."
  },
  {
    title: "Édit YSL Heritage",
    category: "Vidéo",
    type: "video",
    src: "/images/creations/edit-ysl.mp4",
    thumb: "/images/photos-presentation/photo-runway-mode-2.jpg",
    desc: "Montage hommage à l'univers esthétique d'Yves Saint Laurent."
  }
];

export default function Projects() {
  const [filter, setFilter] = useState("Tous");

  const filteredProjects = projects.filter(p => filter === "Tous" || p.category === filter);

  return (
    <PageWrapper>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-16 md:mb-20 bg-[#020617]/50 py-16 md:py-24 rounded-[2rem] md:rounded-[4rem] border border-white/5 shadow-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-9xl font-display font-bold text-white mb-8 md:mb-12 tracking-tighter"
          >
            PROJETS
          </motion.h1>
          
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 px-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "px-6 md:px-10 py-2.5 md:py-3.5 rounded-full text-[10px] md:text-xs font-bold transition-all border uppercase tracking-[0.2em]",
                  filter === cat 
                    ? "bg-[#9F1239] text-white border-[#9F1239] shadow-lg shadow-[#9F1239]/30" 
                    : "bg-white/5 text-[#E2E8F0]/60 border-white/10 hover:border-[#9F1239] hover:text-white"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-24"
        >
          {filteredProjects.map((project, i) => (
            <motion.div
              layout
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="group relative aspect-[3/4] rounded-[2rem] overflow-hidden bg-[#111827] border border-white/5 shadow-2xl"
            >
              <Image
                src={getAssetPath(project.thumb)}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                <div className="translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[#9F1239] text-[10px] font-bold uppercase tracking-[0.2em] mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-display font-bold text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-[#E2E8F0]/60 text-sm mb-6 line-clamp-2 italic">
                    {project.desc}
                  </p>
                  
                  <div className="flex gap-4">
                    <a
                      href={getAssetPath(project.src)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-[#9F1239] text-white rounded-full hover:bg-[#BE123C] transition-all shadow-lg"
                    >
                      {project.type === "video" ? <Play size={20} fill="currentColor" /> : 
                       project.type === "pdf" ? <FileText size={20} /> : <ImageIcon size={20} />}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </PageWrapper>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}
