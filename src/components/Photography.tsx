"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { getAssetPath } from "@/utils/imageLoader";
import { useRef, useState } from "react";
import { X } from "lucide-react";

const photos = [
  { id: 1, src: "/images/photographie/jey-uso.jpg", alt: "Jey Uso" },
  { id: 2, src: "/images/photographie/john-cena.jpg", alt: "John Cena" },
  { id: 3, src: "/images/photographie/egypte.jpg", alt: "Hôtel Égypte" },
  { id: 4, src: "/images/photographie/canaris.jpg", alt: "Îles Canaris" },
];

export function Photography() {
  const containerRef = useRef(null);
  const [selectedPhoto, setSelectedPhoto] = useState<null | typeof photos[0]>(null);

  return (
    <section id="photography" className="py-20 md:py-40 px-6 bg-bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold text-accent-primary mb-4 block"
            >
              Capturer l'instant
            </motion.span>
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-8xl font-display font-bold text-text-primary tracking-tighter leading-[1] break-words"
            >
              LENS & <span className="text-accent-primary italic-display">EYE.</span>
            </motion.h3>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-text-secondary text-xs italic max-w-xs text-left md:text-right font-medium leading-relaxed"
          >
            "La photographie me permet d'immortaliser l'éphémère et de porter un regard unique sur le monde qui nous entoure."
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 1, ease: [0.23, 1, 0.32, 1] }}
              className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden group soft-shadow border border-border-subtle/20 cursor-pointer"
              onClick={() => setSelectedPhoto(photo)}
            >
              <Image
                src={getAssetPath(photo.src)}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-end p-8">
                 <span className="text-white font-display italic font-bold text-2xl translate-y-6 group-hover:translate-y-0 transition-transform duration-700 delay-100">
                    {photo.alt}
                 </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-bg-main/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-10 right-10 text-text-secondary hover:text-accent-primary transition-colors z-[210] p-4"
              onClick={() => setSelectedPhoto(null)}
            >
              <X size={40} strokeWidth={1.5} />
            </motion.button>
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="relative w-full h-full max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
                <Image
                  src={getAssetPath(selectedPhoto.src)}
                  alt={selectedPhoto.alt}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="absolute -bottom-16 left-0 right-0 text-center">
                <span className="text-text-primary font-display font-bold text-2xl md:text-4xl uppercase tracking-tighter">
                  {selectedPhoto.alt}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>

  );
}
