"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { getAssetPath } from "@/utils/imageLoader";

const photos = [
  { id: 1, src: "/images/photographie/jey-uso.jpg", alt: "Jey Uso" },
  { id: 2, src: "/images/photographie/john-cena.jpg", alt: "John Cena" },
  { id: 3, src: "/images/photographie/egypte.jpg", alt: "Hôtel Égypte" },
  { id: 4, src: "/images/photographie/canaris.jpg", alt: "Îles Canaris" },
];

export function Photography() {
  return (
    <section id="photography" className="py-24 px-6 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-[#9F1239] font-semibold mb-4">Capturer l'instant</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-[#F8FAFC]">Photographie</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden group shadow-2xl border border-white/5"
            >
              <Image
                src={getAssetPath(photo.src)}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#0F172A]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <span className="text-white font-display italic text-lg">{photo.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-[#E2E8F0]/60 italic font-light tracking-wide">"Chaque cliché raconte une histoire unique."</p>
        </div>
      </div>
    </section>
  );
}
