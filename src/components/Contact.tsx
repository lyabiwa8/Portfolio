"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Instagram, Linkedin } from "lucide-react";

export function Contact() {
  const [formState, setFormState] = useState<{
    submitting: boolean;
    submitted: boolean;
    error: string | null;
  }>({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState({ ...formState, submitting: true });
    
    // Simulate API call
    setTimeout(() => {
      setFormState({ submitting: false, submitted: true, error: null });
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormState(prev => ({ ...prev, submitted: false }));
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-brown-900 text-beige-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-sm uppercase tracking-widest text-accent font-semibold mb-4">Contact</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-8">Travaillons ensemble</h3>
          <p className="text-beige-200 text-lg mb-12 max-w-md">
            Vous avez un projet de communication ou vous souhaitez simplement échanger ? 
            N'hésitez pas à me contacter via le formulaire ou mes coordonnées directes.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/10 rounded-full text-accent">
                <Mail size={24} />
              </div>
              <div>
                <span className="block text-sm text-beige-400 uppercase tracking-wide">Email</span>
                <a href="mailto:lyabiwa8@gmail.com" className="text-xl font-medium hover:text-accent transition-colors">
                  lyabiwa8@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/10 rounded-full text-accent">
                <Phone size={24} />
              </div>
              <div>
                <span className="block text-sm text-beige-400 uppercase tracking-wide">Téléphone</span>
                <a href="tel:0752481056" className="text-xl font-medium hover:text-accent transition-colors">
                  07 52 48 10 56
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/10 rounded-full text-accent">
                <MapPin size={24} />
              </div>
              <div>
                <span className="block text-sm text-beige-400 uppercase tracking-wide">Localisation</span>
                <span className="text-xl font-medium">Île-de-France, France</span>
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-12">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-accent transition-all">
              <Instagram size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-accent transition-all">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 p-8 md:p-12 rounded-3xl backdrop-blur-sm border border-white/10"
        >
          {formState.submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white mb-4">
                <Send size={32} />
              </div>
              <h3 className="text-2xl font-bold">Message envoyé !</h3>
              <p className="text-beige-300">Merci Lya vous répondra dans les plus brefs délais.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-beige-300">Nom complet</label>
                  <input
                    required
                    type="text"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                    placeholder="Jean Dupont"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-beige-300">Email</label>
                  <input
                    required
                    type="email"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                    placeholder="jean@exemple.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-beige-300">Objet</label>
                <input
                  required
                  type="text"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                  placeholder="Collaboration..."
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-beige-300">Message</label>
                <textarea
                  required
                  rows={4}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Dites-moi tout !"
                />
              </div>
              <button 
                disabled={formState.submitting}
                className="w-full py-4 bg-accent text-white rounded-xl font-bold hover:bg-accent/80 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formState.submitting ? "Envoi en cours..." : "Envoyer"} <Send size={20} />
              </button>
            </form>
          )}
        </motion.div>

      </div>

      <footer className="mt-24 pt-12 border-t border-white/10 text-center">
        <p className="text-beige-400 text-sm">
          © {new Date().getFullYear()} Lya Biwa. Réalisé avec passion.
        </p>
      </footer>
    </section>
  );
}



