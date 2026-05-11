"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { PageWrapper } from "@/components/PageWrapper";
import { Play, FileText, ImageIcon, X, ExternalLink } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { getAssetPath } from "@/utils/imageLoader";

const C = {
  text:     "var(--text-primary)",
  muted:    "var(--text-secondary)",
  accent:   "var(--accent-primary)",
  accentLt: "var(--accent-secondary)",
  border:   "var(--border-subtle)",
  surface:  "var(--surface)",
  bg:       "var(--bg-main)",
};

const categories = ["Tous", "Vidéo", "Design", "Rédaction"];

const projects = [
  {
    title: "Projet Imagine (Hope Power - Scolaire)",
    category: "Vidéo",
    type: "video",
    src: "/images/creations/Évent HopePower(projet scolaire).mp4",
    thumb: "/images/couvertures/projet imagine.png",
    desc: "Création vidéo pour un projet scolaire événementiel."
  },
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
    desc: "Rédaction d'un article de voyage premium pour le magazine Touristy.",
    pages: ["/images/creations/touristy-thumb.png"]
  },
  {
    title: "Starz Communication",
    category: "Design",
    type: "pdf",
    src: "/images/creations/starz.pdf",
    thumb: "/images/couvertures/couverture starz.png",
    desc: "Dossier complet de stratégie de communication et identité visuelle pour Starz.",
    pages: ["/images/couvertures/couverture starz.png"]
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
    desc: "Mise en page et rédaction de la newsletter culturelle Suisse Normande.",
    pages: ["/images/creations/newsletter-thumb.png"]
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
    title: "Event Affiche Perso",
    category: "Design",
    type: "image",
    src: "/images/creations/event-affiche-perso.png",
    thumb: "/images/creations/event-affiche-perso.png",
    desc: "Projet personnel de design graphique pour un événement privé."
  },
  {
    title: "Édit Batman Jeu",
    category: "Vidéo",
    type: "video",
    src: "/images/creations/edit-batman-jeu.mov",
    thumb: "/images/creations/batman-thumb.png",
    desc: "Motion design et montage autour de l'univers de Batman."
  },
  {
    title: "Faux Article (Projet Scolaire)",
    category: "Rédaction",
    type: "pdf",
    src: "/images/creations/faux-article.pdf",
    thumb: "/images/couvertures/couverture faux article.png",
    desc: "Exercice de rédaction journalistique et mise en page éditoriale.",
    pages: ["/images/creations/faux-article-thumb.png"]
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
    title: "Edit Mode",
    category: "Vidéo",
    type: "video",
    src: "/images/creations/edit mode.mov",
    thumb: "/images/photos-presentation/photo-runway-mode.jpg",
    desc: "Montage créatif axé sur les défilés et l'univers de la mode."
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

type Project = typeof projects[0];

function MediaModal({ project, onClose }: { project: Project; onClose: () => void }) {
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
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[1000] flex items-center justify-center p-4 pt-24 md:p-8"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-[#2B2118]/80 backdrop-blur-xl" />

        {/* Modal box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-4xl bg-surface rounded-[2.5rem] overflow-hidden border border-border-subtle/20 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-8 py-6 border-b border-border-subtle/10 bg-surface/50">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-accent-primary mb-1">{project.category}</p>
              <h3 className="font-display font-bold text-xl md:text-2xl text-text-primary">{project.title}</h3>
            </div>
            <button
              onClick={onClose}
              className="p-3 rounded-full bg-bg-main/50 hover:bg-accent-primary/10 border border-border-subtle/20 text-text-primary/40 hover:text-accent-primary transition-all shadow-sm group"
              aria-label="Fermer"
            >
              <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>

          {/* Content */}
          <div className="relative bg-black min-h-[40vh] flex items-center justify-center overflow-hidden">
            {project.type === "video" && (
              <video
                src={getAssetPath(project.src)}
                controls
                autoPlay
                playsInline
                className="w-full max-h-[70vh] object-contain"
              >
                Votre navigateur ne supporte pas la lecture vidéo.
              </video>
            )}
            
            {project.type === "pdf" && (
              <div className="w-full flex flex-col items-center bg-bg-main">
                {isMobile ? (
                  <div className="p-12 text-center">
                    <div className="relative w-48 h-64 mx-auto mb-8 rounded-[1.5rem] overflow-hidden shadow-2xl border border-border-subtle/20">
                      <Image
                        src={getAssetPath(project.thumb)}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-text-secondary mb-8 text-sm font-medium max-w-xs mx-auto">
                      Ce document PDF est optimisé pour une lecture en plein écran.
                    </p>
                    <a
                      href={getAssetPath(project.src)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-10 py-5 bg-accent-primary text-white rounded-full font-bold text-sm shadow-xl active:scale-95 transition-all"
                    >
                      <FileText size={20} />
                      Ouvrir le PDF
                    </a>
                  </div>
                ) : (
                  <iframe
                    src={getAssetPath(project.src)}
                    className="w-full h-[70vh]"
                    title={project.title}
                  />
                )}
              </div>
            )}

            {project.type === "image" && (
              <div className="relative w-full h-[70vh] bg-bg-main">
                <Image
                  src={getAssetPath(project.src)}
                  alt={project.title}
                  fill
                  className="object-contain"
                />
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-10 py-8 border-t border-border-subtle/10 bg-surface/50 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <p className="text-text-secondary text-sm font-medium leading-relaxed max-w-2xl italic">"{project.desc}"</p>
            {project.type === "pdf" && !isMobile && (
              <a
                href={getAssetPath(project.src)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-primary hover:text-accent-secondary text-[10px] font-bold uppercase tracking-widest border-b border-accent-primary/30 pb-1 flex items-center gap-2 transition-all whitespace-nowrap"
              >
                Plein écran <ExternalLink size={14} />
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("Tous");
  const [selected, setSelected] = useState<Project | null>(null);

  const filteredProjects = projects.filter(p => filter === "Tous" || p.category === filter);
  const closeModal = useCallback(() => setSelected(null), []);

  return (
    <PageWrapper>
      {selected && <MediaModal project={selected} onClose={closeModal} />}

      <div className="max-w-7xl mx-auto px-6 pt-28 md:pt-40 pb-20">
        
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24 space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 
              className="font-display font-bold leading-[0.9] tracking-tighter mb-4"
              style={{ fontSize: "clamp(3.5rem, 12vw, 8rem)", color: C.text }}
            >
              Projets<span className="text-accent-primary italic">.</span>
            </h1>
            <p className="text-lg md:text-xl font-medium opacity-60 max-w-2xl mx-auto" style={{ color: C.text }}>
              Une sélection de mes travaux en communication, design and création de contenu.
            </p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 px-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "px-8 md:px-12 py-3.5 md:py-4 rounded-full text-[10px] md:text-xs font-bold transition-all border uppercase tracking-[0.2em] active:scale-95",
                  filter === cat 
                    ? "bg-accent-primary text-white border-accent-primary shadow-lg shadow-accent-primary/20" 
                    : "bg-surface/50 text-text-secondary border-border-subtle/20 hover:border-accent-primary/50 hover:text-accent-primary"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Section */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 pb-24"
        >
          {filteredProjects.map((project, i) => (
            <motion.div
              layout
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative aspect-[3.5/4.5] rounded-[2.5rem] overflow-hidden bg-surface border border-border-subtle/20 shadow-xl cursor-pointer"
              onClick={() => setSelected(project)}
            >
              <Image
                src={getAssetPath(project.thumb)}
                alt={project.title}
                fill
                className="object-cover transition-all duration-1000 group-hover:scale-105 group-hover:brightness-[0.8] brightness-[0.95]"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-12">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                  <span className="text-accent-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-3 block">
                    {project.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-8 leading-tight">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    <div className="flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full group-hover:bg-accent-primary group-hover:border-accent-primary transition-all duration-300 shadow-xl">
                      <div className="text-white group-hover:scale-110 transition-transform">
                        {project.type === "video" ? <Play size={16} fill="currentColor" /> : 
                         project.type === "pdf" ? <FileText size={16} /> : <ImageIcon size={16} />}
                      </div>
                      <span className="text-[10px] text-white font-bold uppercase tracking-widest whitespace-nowrap">
                        {project.type === "video" ? "Regarder" : project.type === "pdf" ? "Découvrir" : "Aperçu"}
                      </span>
                    </div>
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
