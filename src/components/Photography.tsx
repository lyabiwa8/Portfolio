"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { getAssetPath } from "@/utils/imageLoader";
import { useRef } from "react";

const photos = [
  { id: 1, src: "/images/photographie/jey-uso.jpg", alt: "Jey Uso" },
  { id: 2, src: "/images/photographie/john-cena.jpg", alt: "John Cena" },
  { id: 3, src: "/images/photographie/egypte.jpg", alt: "Hôtel Égypte" },
  { id: 4, src: "/images/photographie/canaris.jpg", alt: "Îles Canaris" },
];

export function Photography() {
  const containerRef = useRef(null);

  return (
    <section id="photography" className="py-20 md:py-32 px-6 bg-[#020617]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold text-[#9F1239] mb-4 block"
            >
              Capturer l'instant
            </motion.span>
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="text-3xl md:text-6xl lg:text-7xl font-display font-black text-white tracking-tighter leading-[1.1]"
            >
              LENS & <span className="text-[#9F1239] italic-display">EYE.</span>
            </motion.h3>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/40 text-xs italic max-w-xs text-left md:text-right"
          >
            "La photographie me permet d'immortaliser l'éphémère et de porter un regard unique sur le monde qui nous entoure."
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className="relative aspect-[3/4] rounded-3xl overflow-hidden group shadow-2xl border border-white/5"
            >
              <Image
                src={getAssetPath(photo.src)}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-all duration-500 flex items-end p-8">
                 <span className="text-white font-display italic font-black text-2xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {photo.alt}
                 </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
