"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { getAssetPath } from "@/utils/imageLoader";

const passions = [
  {
    title: "Gymnastique",
    image: "/images/photos-presentation/gymnastique-life.jpg",
  },
  {
    title: "Cinéma",
    image: "/images/photos-presentation/cinema-life.jpg",
  },
  {
    title: "Musique",
    image: "/images/photos-presentation/what-music-represent-to-me.jpg",
  },
  {
    title: "Voyages",
    image: "/images/photos-presentation/photo-plage.jpg",
  },
  {
    title: "Événementiel",
    image: "/images/photos-presentation/photo-mode-musee.jpg",
  },
  {
    title: "Acting",
    image: "/images/photos-presentation/acting-life.jpg",
  },
  {
    title: "Mode & Runway",
    image: "/images/photos-presentation/photo-runway-mode.jpg",
  },
  {
    title: "Lifestyle",
    image: "/images/photos-presentation/vogue-lifestyle.jpg",
  },
  {
    title: "Pop Culture",
    image: "/images/photos-presentation/goku.jpg",
  },
  {
    title: "Arts Martiaux",
    image: "/images/photos-presentation/arts-martiaux.jpg",
  },
];

export function Passions() {
  // Double the array for seamless infinite scroll
  const doubledPassions = [...passions, ...passions];

  return (
    <section id="passions" className="py-32 bg-transparent overflow-hidden relative z-10">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent-primary mb-4"
        >
          Inspirations
        </motion.h2>
        <motion.h3 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-7xl font-display font-bold text-text-primary leading-[0.9] tracking-tighter"
        >
          PASSIONS <span className="text-accent-primary italic">& VIBES.</span>
        </motion.h3>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem]">
          {/* Infinite Marquee Container */}
          <motion.div 
            className="flex gap-4 md:gap-6"
            animate={{ 
              x: ["0%", "-50%"] 
            }}
            transition={{ 
              duration: 15, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {doubledPassions.map((passion, index) => (
              <div
                key={index}
                className="relative w-[280px] md:w-[350px] aspect-[4/5] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden soft-shadow border border-white/5 flex-shrink-0 group"
              >
                <Image
                  src={getAssetPath(passion.image)}
                  alt={passion.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
                />
                {/* Overlay with Title */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-100 flex flex-col justify-end p-6 md:p-8">
                  <h4 className="text-lg md:text-2xl font-display font-bold text-white tracking-tight uppercase italic">{passion.title}</h4>
                  <div className="mt-4 w-10 h-1 bg-accent-primary rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              </div>
            ))}
          </motion.div>

          {/* Fade Gradients for cleaner edges */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#F2F4E8] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#F2F4E8] to-transparent z-10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}






