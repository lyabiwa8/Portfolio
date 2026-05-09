"use client";

import Link from "next/link";
import { Instagram, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-24 px-6 border-t border-brown-100 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16 items-start">
        <div>
          <Link href="/" className="text-3xl font-display font-bold text-brown-900 tracking-tighter">
            LYA BIWA
          </Link>
          <p className="text-brown-500 mt-6 text-lg max-w-xs leading-relaxed">
            Créer des expériences de communication mémorables et impactantes.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-brown-400 font-bold mb-6">Navigation</h4>
            <Link href="/" className="block text-brown-700 hover:text-accent transition-colors font-medium">Accueil</Link>
            <Link href="/about" className="block text-brown-700 hover:text-accent transition-colors font-medium">À propos</Link>
            <Link href="/projects" className="block text-brown-700 hover:text-accent transition-colors font-medium">Projets</Link>
            <Link href="/contact" className="block text-brown-700 hover:text-accent transition-colors font-medium">Contact</Link>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-brown-400 font-bold mb-6">Social</h4>
            <a href="#" className="block text-brown-700 hover:text-accent transition-colors font-medium">Instagram</a>
            <a href="#" className="block text-brown-700 hover:text-accent transition-colors font-medium">LinkedIn</a>
            <a href="#" className="block text-brown-700 hover:text-accent transition-colors font-medium">Behance</a>
          </div>
        </div>

        <div className="bg-beige-50 p-10 rounded-[2rem]">
          <h4 className="text-xl font-display font-bold text-brown-900 mb-4">Un projet ?</h4>
          <p className="text-brown-600 mb-8 text-sm leading-relaxed">
            N'hésitez pas à me contacter pour discuter de vos besoins en communication.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 text-accent font-bold hover:gap-4 transition-all"
          >
            Démarrer la discussion <Mail size={18} />
          </Link>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-brown-50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brown-400 uppercase tracking-widest font-bold">
        <span>© {new Date().getFullYear()} Lya Biwa — Tous droits réservés.</span>
        <div className="flex gap-8">
          <a href="#" className="hover:text-brown-900">Mentions Légales</a>
          <a href="#" className="hover:text-brown-900">Confidentialité</a>
        </div>
      </div>
    </footer>
  );
}
