"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { getAssetPath } from "@/utils/imageLoader";
import { useRef } from "react";

const passionImages = [
  // Column 1
  { src: "/images/photos-presentation/arts-martiaux.jpg", title: "Arts Martiaux", size: "large", parallax: 0.1 },
  { src: "/images/photos-presentation/acting-life.jpg", title: "Théâtre", size: "small", parallax: -0.05 },
  { src: "/images/photos-presentation/gymnastique-life.jpg", title: "Gymnastique", size: "medium", parallax: 0.15 },
  { src: "/images/photos-presentation/photo-mode-work.jpg", title: "Creative Process", size: "small", parallax: -0.1 },
  
  // Column 2
  { src: "/images/photos-presentation/photo-runway-mode.jpg", title: "Runway", size: "medium", parallax: 0.05 },
  { src: "/images/photos-presentation/cinema-life-2.jpg", title: "Cinéma", size: "large", parallax: 0.2 },
  { src: "/images/photos-presentation/arts-martiaux-3.jpg", title: "Discipline", size: "small", parallax: -0.08 },
  { src: "/images/photos-presentation/what-music-represent-to-me.jpg", title: "Inspiration", size: "medium", parallax: 0.12 },

  // Column 3
  { src: "/images/photos-presentation/acting-life-2.jpg", title: "Performance", size: "small", parallax: -0.15 },
  { src: "/images/photos-presentation/photo-runway-mode-2.jpg", title: "Haute Couture", size: "medium", parallax: 0.08 },
  { src: "/images/photos-presentation/gymnast-mode.jpg", title: "Équilibre", size: "large", parallax: 0.25 },
  { src: "/images/photos-presentation/acting-life-3.jpg", title: "Expression", size: "small", parallax: -0.05 },

  // Column 4
  { src: "/images/photos-presentation/vogue-lifestyle.jpg", title: "Editorial", size: "large", parallax: 0.18 },
  { src: "/images/photos-presentation/cinema-life-3.jpg", title: "Vision", size: "small", parallax: -0.12 },
  { src: "/images/photos-presentation/goku.jpg", title: "Pop Culture", size: "medium", parallax: 0.1 },
  { src: "/images/photos-presentation/music-life-3.jpg", title: "Rythme", size: "small", parallax: -0.06 },
  
  // Extra items
  { src: "/images/photos-presentation/music-life-2.jpg", title: "Mélodie", size: "medium", parallax: 0.14 },
  { src: "/images/photos-presentation/arts-martiaux-2.jpg", title: "Force", size: "small", parallax: -0.09 },
  { src: "/images/photos-presentation/acting-passion.jpg", title: "Passion", size: "small", parallax: -0.1 },
  { src: "/images/photos-presentation/photo-mode-musee.jpg", title: "Muse", size: "medium", parallax: 0.11 },
  { src: "/images/photos-presentation/music-life.jpg", title: "Vibration", size: "small", parallax: -0.04 },
  { src: "/images/photos-presentation/dragon-ball.jpg", title: "Manga", size: "medium", parallax: 0.07 },
];

function PassionCard({ image, index }: { image: any, index: number }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  // Parallax effect based on the image's specific parallax speed
  const y = useTransform(scrollYProgress, [0, 1], [0, image.parallax * 400]);

  const getSizeClass = (size: string) => {
    switch(size) {
      case 'large': return 'row-span-2 col-span-2 md:col-span-1 h-[400px] md:h-[600px]';
      case 'medium': return 'row-span-1 col-span-2 md:col-span-1 h-[300px] md:h-[400px]';
      case 'small': return 'row-span-1 col-span-1 h-[200px] md:h-[280px]';
      default: return 'h-[300px]';
    }
  };

  return (
    <motion.div
      ref={cardRef}
      style={{ y }}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: { 
          duration: 1, 
          ease: [0.16, 1, 0.3, 1],
          delay: (index % 4) * 0.1 
        } 
      }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? 1 : -1 }}
      className={`relative rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl group ${getSizeClass(image.size)}`}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={getAssetPath(image.src)}
          alt={image.title}
          fill
          className="object-cover transition-transform duration-[2s] cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-110"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
      </div>
      
      {/* Dynamic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-accent-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
      
      {/* Title Tag */}
      <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 z-10">
        <motion.span 
          whileHover={{ scale: 1.1 }}
          className="inline-block px-4 py-2 rounded-full glass-accent text-[10px] font-black uppercase tracking-widest text-text-primary shadow-lg"
        >
          {image.title}
        </motion.span>
      </div>

      {/* Floating Sparkle Animation (Optional/Extra) */}
      <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 rounded-[inherit] transition-all duration-700 pointer-events-none" />
    </motion.div>
  );
}

export function Passions() {
  return (
    <section id="passions" className="py-32 bg-transparent relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[10px] uppercase tracking-[0.5em] font-black text-accent-primary mb-6"
            >
              Univers & Inspirations
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-8xl font-display font-bold text-text-primary leading-[0.85] tracking-tighter"
            >
              MON <span className="text-accent-primary italic-display">MOODBOARD.</span>
            </motion.h3>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-text-secondary font-medium max-w-xs text-sm md:text-base opacity-60 leading-relaxed"
          >
            Une collection visuelle de ce qui m'anime, me passionne et définit mon regard sur le monde.
          </motion.p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 auto-rows-min">
          {passionImages.map((image, index) => (
            <PassionCard key={index} image={image} index={index} />
          ))}
        </div>
      </div>

      {/* Background Decorative Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 translate-x-1/3 w-[600px] h-[600px] bg-accent-secondary/5 blur-[150px] rounded-full pointer-events-none" />
    </section>
  );
}
