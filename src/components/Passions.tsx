"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const passions = [
  {
    title: "Gymnastique",
    description: "Praticienne et coach, une discipline qui m'apprend la rigueur et le dépassement de soi.",
    image: "/images/photos-presentation/gymnastique-life.jpg",
    size: "col-span-2 row-span-2",
  },
  {
    title: "Mode & Lifestyle",
    description: "L'art de s'exprimer sans parler.",
    image: "/images/photos-presentation/mode-lifestyle.jpg",
    size: "col-span-1 row-span-1",
  },
  {
    title: "Cinéma",
    description: "Une source d'inspiration inépuisable pour mes montages.",
    image: "/images/photos-presentation/cinema-life-2.jpg",
    size: "col-span-1 row-span-1",
  },
  {
    title: "Manga & Culture Japonaise",
    description: "Passionnée par l'esthétique et les récits du Japon.",
    image: "/images/photos-presentation/goku.jpg",
    size: "col-span-1 row-span-2",
  },
  {
    title: "Musique",
    description: "La bande sonore de ma créativité.",
    image: "/images/photos-presentation/music-life.jpg",
    size: "col-span-1 row-span-1",
  },
];

export function Passions() {
  return (
    <section id="passions" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-accent font-semibold mb-4">Hors des Médias</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-brown-900">Mes Passions</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {passions.map((passion, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "relative group rounded-3xl overflow-hidden shadow-lg",
                passion.size
              )}
            >
              <Image
                src={passion.image}
                alt={passion.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h4 className="text-xl font-display font-bold text-beige-50 mb-1">{passion.title}</h4>
                <p className="text-beige-100 text-sm leading-relaxed">{passion.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Importing cn here as well to ensure it works if moved
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}





