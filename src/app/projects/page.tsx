"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PageWrapper } from "@/components/PageWrapper";
import { Play, FileText, ImageIcon, ExternalLink } from "lucide-react";
import { useState } from "react";
import { getAssetPath } from "@/utils/imageLoader";

const categories = ["Tous", "Vidéo", "Design", "Rédaction"];

const projects = [
  {
    title: "Article Touristy",
    category: "Rédaction",
    type: "pdf",
    src: "/images/creations/article-touristy.pdf",
    thumb: "/images/photos-presentation/vogue-lifestyle.jpg",
    desc: "Rédaction d'un article de voyage pour le magazine Touristy."
  },
  {
    title: "Starz Communication",
    category: "Design",
    type: "pdf",
    src: "/images/creations/starz.pdf",
    thumb: "/images/creations/event-affiche-perso.png",
    desc: "Identité visuelle et plan de communication pour le projet Starz."
  },
  {
    title: "Newsletter Suisse Normande",
    category: "Rédaction",
    type: "pdf",
    src: "/images/creations/newsletter-suisse-normande.pdf",
    thumb: "/images/photos-presentation/photo-mode-musee.jpg",
    desc: "Conception et rédaction d'une newsletter régionale."
  },
  {
    title: "Affiche Événementielle",
    category: "Design",
    type: "image",
    src: "/images/creations/event-affiche-rs.png",
    thumb: "/images/creations/event-affiche-rs.png",
    desc: "Création graphique pour les réseaux sociaux."
  },
  {
    title: "Montage Vidéo ISCOM",
    category: "Vidéo",
    type: "video",
    src: "/images/creations/edit-schiaparelli.mp4",
    thumb: "/images/photos-presentation/mode-lifestyle.jpg",
    desc: "Vidéo promotionnelle réalisée pour un projet d'école."
  },
  {
    title: "Scrapbook Mode",
    category: "Design",
    type: "image",
    src: "/images/creations/scrapbook-mode.jpg",
    thumb: "/images/creations/scrapbook-mode.jpg",
    desc: "Travail sur la typographie et la composition mode."
  },
  {
    title: "Invitation Event",
    category: "Design",
    type: "image",
    src: "/images/creations/invitation-event.png",
    thumb: "/images/creations/invitation-event.png",
    desc: "Design d'invitation pour un événement privé."
  }
];

export default function Projects() {
  const [filter, setFilter] = useState("Tous");

  const filteredProjects = projects.filter(p => filter === "Tous" || p.category === filter);

  return (
    <PageWrapper>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-20 bg-beige-100 py-16 md:py-20 rounded-[2rem] md:rounded-[3rem] border border-brown-100">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-9xl font-display font-bold text-brown-900 mb-8 md:mb-10 tracking-tighter"
          >
            PROJETS
          </motion.h1>
          
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 px-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "px-6 md:px-8 py-2 md:py-3 rounded-full text-[10px] md:text-xs font-bold transition-all border uppercase tracking-widest",
                  filter === cat 
                    ? "bg-brown-900 text-white border-brown-900 shadow-lg" 
                    : "bg-white text-brown-600 border-brown-200 hover:border-accent hover:text-accent"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, i) => (
            <motion.div
              layout
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="group relative aspect-[3/4] rounded-[2rem] overflow-hidden bg-brown-50"
            >
              <Image
                src={getAssetPath(project.thumb)}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-brown-950/80 via-brown-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                <div className="translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-accent text-xs font-bold uppercase tracking-widest mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-display font-bold text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-beige-200 text-sm mb-6 line-clamp-2">
                    {project.desc}
                  </p>
                  
                  <div className="flex gap-4">
                    <a
                      href={getAssetPath(project.src)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white text-brown-900 rounded-full hover:bg-accent hover:text-white transition-colors"
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





