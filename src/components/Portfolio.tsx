"use client";

import { motion } from "framer-motion";
import { ExternalLink, Play, FileText, Camera } from "lucide-react";
import Image from "next/image";
import { getAssetPath } from "@/utils/imageLoader";

const projects = [
  {
    title: "Ogilvy / Candy'Up",
    category: "Vidéo & Campagne",
    type: "video",
    thumbnail: "/images/creations/ogilvy-thumb.png",
    link: "/images/creations/projet-ogilvy.mov",
    icon: <Play size={20} />,
  },
  {
    title: "Starz Communication",
    category: "Design & Stratégie",
    type: "pdf",
    thumbnail: "/images/creations/event-affiche-perso.png",
    link: "/images/creations/starz.pdf",
    icon: <FileText size={20} />,
  },
  {
    title: "Article Touristy",
    category: "Rédaction & PAO",
    type: "pdf",
    thumbnail: "/images/creations/touristy-thumb.png",
    link: "/images/creations/article-touristy.pdf",
    icon: <FileText size={20} />,
  },
  {
    title: "Édit Batman Concept",
    category: "Motion Design",
    type: "video",
    thumbnail: "/images/creations/batman-thumb.png",
    link: "/images/creations/edit-batman-jeu.mov",
    icon: <Play size={20} />,
  },
  {
    title: "TikTok Schiaparelli",
    category: "Vidéo / Short",
    type: "video",
    thumbnail: "/images/photos-presentation/photo-runway-mode.jpg",
    link: "/images/creations/edit-schiaparelli.mp4",
    icon: <Play size={20} />,
  },
  {
    title: "Newsletter Suisse",
    category: "Rédaction & PAO",
    type: "pdf",
    thumbnail: "/images/creations/newsletter-thumb.png",
    link: "/images/creations/newsletter-suisse-normande.pdf",
    icon: <FileText size={20} />,
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6 bg-beige-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-sm uppercase tracking-widest text-accent font-semibold mb-4">Mes Créations</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-brown-900">Portfolio</h3>
          </div>
          <p className="max-w-md text-brown-700 text-lg italic">
            "Chaque création est une fenêtre ouverte sur mon imaginaire et mes compétences techniques."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-brown-100 shadow-xl"
            >
              <Image
                src={getAssetPath(project.thumbnail)}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-brown-900/90 via-brown-900/20 to-transparent flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-accent text-sm font-semibold uppercase tracking-wider mb-2">
                  {project.category}
                </span>
                <h4 className="text-2xl font-display font-bold text-beige-50 mb-4">
                  {project.title}
                </h4>
                
                <a
                  href={getAssetPath(project.link)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-beige-50 font-medium border-b border-beige-50/30 pb-1 hover:border-accent transition-colors w-fit"
                >
                  {project.icon}
                  <span>Voir le projet</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}





