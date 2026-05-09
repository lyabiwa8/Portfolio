"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { PageWrapper } from "@/components/PageWrapper";
import { ArrowRight, Play, Camera, FileText } from "lucide-react";

export default function Home() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-full max-w-6xl h-[60vh] rounded-[3rem] overflow-hidden mb-12 shadow-2xl"
        >
          <Image
            src="/images/photos-presentation/mode-lifestyle.jpg"
            alt="Lya Biwa"
            fill
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brown-900/10 to-brown-900/40" />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="overflow-hidden"
            >
              <h1 className="text-6xl md:text-9xl font-display font-bold tracking-tighter mb-4">
                LYA BIWA
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-xl md:text-2xl font-light italic opacity-90"
            >
              "I believe, I can fly"
            </motion.p>
          </div>
        </motion.div>

        <div className="max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-brown-900 mb-8 leading-tight"
          >
            Étudiante en Communication & Créative Multi-facettes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-brown-700 leading-relaxed mb-10"
          >
            De la stratégie digitale à la création visuelle, j'accompagne les marques 
            et les projets dans leur communication avec une vision fraîche et audacieuse.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              href="/projects"
              className="px-8 py-4 bg-brown-900 text-beige-50 rounded-full font-medium hover:bg-brown-800 transition-all flex items-center gap-2"
            >
              Voir mon Portfolio <ArrowRight size={18} />
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 border border-brown-900 text-brown-900 rounded-full font-medium hover:bg-brown-900 hover:text-beige-50 transition-all"
            >
              Mon Parcours
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="bg-beige-100 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
            <div>
              <h2 className="text-sm uppercase tracking-widest text-accent font-bold mb-4">Mes Domaines</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-brown-900">Expertise & Création</h3>
            </div>
            <Link href="/projects" className="text-brown-700 font-bold hover:text-accent transition-colors flex items-center gap-2 border-b-2 border-accent/20 pb-1">
              Tous les projets <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { 
                title: "Vidéo & Motion", 
                icon: <Play size={32} />, 
                desc: "Création de contenus dynamiques et montages percutants.",
                color: "bg-white"
              },
              { 
                title: "Design Visuel", 
                icon: <Camera size={32} />, 
                desc: "Identité visuelle, photographie et direction artistique.",
                color: "bg-beige-200"
              },
              { 
                title: "Stratégie Com", 
                icon: <FileText size={32} />, 
                desc: "Élaboration de plans de communication et rédaction.",
                color: "bg-brown-100"
              },
            ].map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={cn("p-12 rounded-[3rem] transition-all duration-500 hover:shadow-2xl group", cat.color)}
              >
                <div className="text-accent mb-8 group-hover:scale-110 transition-transform duration-500">
                  {cat.icon}
                </div>
                <h4 className="text-2xl font-display font-bold text-brown-900 mb-6">{cat.title}</h4>
                <p className="text-brown-700 leading-relaxed text-base">{cat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Quote - Deep Brown */}
      <section className="bg-brown-900 py-32 px-6 text-center">
        <div className="max-w-4xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-9xl font-display absolute -top-16 left-0 opacity-10 text-beige-50">“</span>
            <p className="text-3xl md:text-5xl font-display font-bold text-beige-100 italic leading-tight">
              Les vagues de la mer étaient un plaisir à capturer car à chaque angle que je choisissais, 
              il y avait toujours un nouveau motif à observer.
            </p>
            <div className="w-24 h-1 bg-accent mx-auto mt-12" />
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}
