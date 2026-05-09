"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { getAssetPath } from "@/utils/imageLoader";

const photos = [
  { id: 1, src: "/images/photographie/Photo Jey Uso photographie par moi.jpg", alt: "Jey Uso" },
  { id: 2, src: "/images/photographie/Photo John Cena photographie par moi.jpg", alt: "John Cena" },
  { id: 3, src: "/images/photographie/Photo hôtel Égypte photographie par moi.jpg", alt: "Hôtel Égypte" },
  { id: 4, src: "/images/photographie/Photo îles canaris photographie par moi.jpg", alt: "Îles Canaris" },
];

export function Photography() {
  return (
    <section id="photography" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-accent font-semibold mb-4">Capturer l'instant</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-brown-900">Photographie</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-square rounded-2xl overflow-hidden group shadow-md"
            >
              <Image
                src={getAssetPath(photo.src)}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-brown-600 italic">"Bientôt plus de clichés à venir..."</p>
        </div>
      </div>
    </section>
  );
}
