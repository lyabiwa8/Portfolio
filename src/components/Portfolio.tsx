"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Play, FileText, X, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getAssetPath } from "@/utils/imageLoader";

const projects = [
  {
    title: "Projet Imagine (Hope Power)",
    category: "Vidéo & Event",
    type: "video",
    thumbnail: "/images/couvertures/projet imagine.png",
    link: "/images/creations/Évent HopePower(projet scolaire).mp4",
    icon: <Play size={20} fill="currentColor" />,
  },
  {
    title: "Ogilvy / Candy'Up",
    category: "Vidéo & Campagne",
    type: "video",
    thumbnail: "/images/logos/ogilvy-logo-agence.jpg",
    link: "/images/creations/projet-ogilvy.mov",
    icon: <Play size={20} fill="currentColor" />,
  },
  {
    title: "Starz Communication",
    category: "Design & Stratégie",
    type: "pdf",
    thumbnail: "/images/couvertures/couverture starz.png",
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
    title: "Édit Batman Jeu",
    category: "Motion Design",
    type: "video",
    thumbnail: "/images/creations/batman-thumb.png",
    link: "/images/creations/edit-batman-jeu.mov",
    icon: <Play size={20} fill="currentColor" />,
  },
  {
    title: "TikTok Schiaparelli",
    category: "Vidéo / Short",
    type: "video",
    thumbnail: "/images/photos-presentation/photo-runway-mode.jpg",
    link: "/images/creations/edit-schiaparelli.mp4",
    icon: <Play size={20} fill="currentColor" />,
  },
  {
    title: "Newsletter Suisse",
    category: "Rédaction & PAO",
    type: "pdf",
    thumbnail: "/images/creations/newsletter-thumb.png",
    link: "/images/creations/newsletter-suisse-normande.pdf",
    icon: <FileText size={20} />,
  },
  {
    title: "Event Affiche Perso",
    category: "Design Graphique",
    type: "image",
    thumbnail: "/images/creations/event-affiche-perso.png",
    link: "/images/creations/event-affiche-perso.png",
    icon: <ExternalLink size={20} />,
  },
  {
    title: "Edit Mode",
    category: "Vidéo & Mode",
    type: "video",
    thumbnail: "/images/photos-presentation/photo-runway-mode.jpg",
    link: "/images/creations/edit mode.mov",
    icon: <Play size={20} fill="currentColor" />,
  },
  {
    title: "Faux Article (Projet Scolaire)",
    category: "Rédaction & PAO",
    type: "pdf",
    thumbnail: "/images/couvertures/couverture faux article.png",
    link: "/images/creations/faux-article.pdf",
    icon: <FileText size={20} />,
  },
];

export function Portfolio() {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section id="portfolio" className="py-24 px-6 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-sm uppercase tracking-widest text-accent-primary font-semibold mb-4">Mes Créations</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-text-primary">Portfolio</h3>
          </div>
          <p className="max-w-md text-text-secondary text-lg italic">
            "Chaque création est une fenêtre ouverte sur mon imaginaire et mes compétences techniques."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.slice(0, 3).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={!isMobile ? { 
                y: -10,
                transition: { duration: 0.4, ease: "easeOut" }
              } : {}}
              onClick={() => setSelectedProject(project)}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-[4/5] rounded-[1.5rem] overflow-hidden bg-surface soft-shadow border border-border-subtle/20 cursor-pointer"
            >
              <Image
                src={getAssetPath(project.thumbnail)}
                alt={project.title}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/40 to-transparent flex flex-col justify-end p-10 pb-14 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <span className="text-accent-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-3">
                  {project.category}
                </span>
                <h4 className="text-2xl md:text-3xl font-display font-bold text-text-primary mb-6">
                  {project.title}
                </h4>
                
                <div className="flex items-center gap-3 px-6 py-3 bg-white/40 backdrop-blur-md border border-white/60 rounded-full group-hover:bg-accent-primary group-hover:border-accent-primary group-hover:text-white transition-all duration-300 shadow-sm w-fit">
                  <div className="text-text-primary group-hover:text-white">
                    {project.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest">Voir le projet</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link href="/projects">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-10 py-5 bg-surface hover:bg-accent-primary border border-border-subtle hover:border-accent-primary text-text-primary hover:text-white rounded-full font-bold text-sm tracking-widest uppercase transition-all duration-300 soft-shadow group"
            >
              Voir tous mes projets
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-2" />
            </motion.div>
          </Link>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <MediaModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function MediaModal({ project, onClose }: { project: any; onClose: () => void }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 z-[2000] flex items-center justify-center p-4 pt-24 md:p-8 overflow-hidden"
      onClick={onClose}
    >
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-bg-main/90 backdrop-blur-xl" 
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative z-10 w-full max-w-4xl bg-surface rounded-[2rem] overflow-hidden border border-border-subtle shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-border-subtle bg-bg-main/50">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-accent-primary font-bold">{project.category}</p>
            <h3 className="text-text-primary font-display font-bold text-xl">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-white/20 hover:bg-accent-primary/10 border border-border-subtle text-text-secondary hover:text-accent-primary transition-all"
          >
            <X size={20} />
          </button>
        </div>

        <div className="relative bg-[#2B2118] min-h-[40vh] flex items-center justify-center">
          {project.type === "video" && (
            <video
              src={getAssetPath(project.link)}
              controls
              autoPlay
              playsInline
              className="w-full max-h-[70vh] object-contain"
            />
          )}
          
          {(project.type === "pdf" || project.type === "image") && (
            <div className="w-full flex flex-col items-center">
              {isMobile || project.type === "image" ? (
                <div className="p-8 text-center">
                  <div className="relative w-full max-w-lg aspect-video md:aspect-[16/9] mx-auto mb-8 rounded-xl overflow-hidden shadow-2xl border border-white/10">
                    <Image
                      src={getAssetPath(project.type === "image" ? project.link : project.thumbnail)}
                      alt={project.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  {project.type === "pdf" && (
                    <a
                      href={getAssetPath(project.link)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-8 py-4 bg-accent-primary text-white rounded-full font-bold text-sm shadow-xl hover:scale-105 transition-transform"
                    >
                      <FileText size={20} />
                      Ouvrir le document PDF
                    </a>
                  )}
                </div>
              ) : (
                <iframe
                  src={getAssetPath(project.link)}
                  className="w-full h-[70vh]"
                  title={project.title}
                />
              )}
            </div>
          )}
        </div>
      </motion.div>
    </div>

  );
}
