"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Music2, Linkedin } from "lucide-react";

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
    <section id="contact" className="py-24 px-6 bg-[#0F172A] text-[#E2E8F0]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-sm uppercase tracking-widest text-[#9F1239] font-semibold mb-4">Contact</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-8 text-[#F8FAFC]">Travaillons ensemble</h3>
          <p className="text-[#E2E8F0]/70 text-lg mb-12 max-w-md">
            Vous avez un projet de communication ou vous souhaitez simplement échanger ? 
            N'hésitez pas à me contacter via le formulaire ou mes coordonnées directes.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#111827] rounded-full text-[#9F1239] border border-white/5">
                <Mail size={24} />
              </div>
              <div>
                <span className="block text-sm text-[#E2E8F0]/40 uppercase tracking-wide">Email</span>
                <a href="mailto:lyabiwa8@gmail.com" className="text-xl font-medium hover:text-[#9F1239] transition-colors">
                  lyabiwa8@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#111827] rounded-full text-[#9F1239] border border-white/5">
                <Phone size={24} />
              </div>
              <div>
                <span className="block text-sm text-[#E2E8F0]/40 uppercase tracking-wide">Téléphone</span>
                <a href="tel:0752481056" className="text-xl font-medium hover:text-[#9F1239] transition-colors">
                  07 52 48 10 56
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#111827] rounded-full text-[#9F1239] border border-white/5">
                <MapPin size={24} />
              </div>
              <div>
                <span className="block text-sm text-[#E2E8F0]/40 uppercase tracking-wide">Localisation</span>
                <span className="text-xl font-medium">Île-de-France, France</span>
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-12">
            <a href="https://www.tiktok.com/@atnightimbatman" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#111827] rounded-full hover:bg-[#9F1239] transition-all border border-white/5 group">
              <Music2 size={20} className="group-hover:text-white" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#111827] rounded-full hover:bg-[#9F1239] transition-all border border-white/5 group">
              <Linkedin size={20} className="group-hover:text-white" />
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#111827] p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl"
        >
          {formState.submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
              <div className="w-16 h-16 bg-[#9F1239] rounded-full flex items-center justify-center text-white mb-4">
                <Send size={32} />
              </div>
              <h3 className="text-2xl font-bold">Message envoyé !</h3>
              <p className="text-[#E2E8F0]/60">Merci Lya vous répondra dans les plus brefs délais.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#E2E8F0]/60">Nom complet</label>
                  <input
                    required
                    type="text"
                    className="w-full bg-[#0F172A] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#9F1239] transition-colors"
                    placeholder="Jean Dupont"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#E2E8F0]/60">Email</label>
                  <input
                    required
                    type="email"
                    className="w-full bg-[#0F172A] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#9F1239] transition-colors"
                    placeholder="jean@exemple.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#E2E8F0]/60">Objet</label>
                <input
                  required
                  type="text"
                  className="w-full bg-[#0F172A] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#9F1239] transition-colors"
                  placeholder="Collaboration..."
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#E2E8F0]/60">Message</label>
                <textarea
                  required
                  rows={4}
                  className="w-full bg-[#0F172A] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#9F1239] transition-colors resize-none"
                  placeholder="Dites-moi tout !"
                />
              </div>
              <button 
                disabled={formState.submitting}
                className="w-full py-4 bg-[#9F1239] text-white rounded-xl font-bold hover:bg-[#BE123C] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#9F1239]/20"
              >
                {formState.submitting ? "Envoi en cours..." : "Envoyer"} <Send size={20} />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
