"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Linkedin } from "lucide-react";

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
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formsubmit.co/ajax/lyabiwa08@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setFormState({ submitting: false, submitted: true, error: null });
        // Reset after 3s
        setTimeout(() => setFormState(prev => ({ ...prev, submitted: false })), 3000);
      } else {
        throw new Error();
      }
    } catch (error) {
      alert("Une erreur est survenue. Veuillez réessayer.");
      setFormState({ submitting: false, submitted: false, error: "Erreur" });
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-transparent relative z-10 text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-sm uppercase tracking-widest text-[#9F1239] font-semibold mb-4">Contact</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-8 text-white">Travaillons ensemble</h3>
          <p className="text-white/70 text-lg mb-12 max-w-md">
            Vous avez un projet de communication ou vous souhaitez simplement échanger ? 
            N'hésitez pas à m'envoyer un mail.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-[#111827] rounded-2xl text-[#9F1239] border border-white/5 shadow-xl">
                <Mail size={28} />
              </div>
              <div>
                <span className="block text-sm text-white/40 uppercase tracking-widest mb-1">Email Officiel</span>
                <a href="mailto:lyabiwa08@gmail.com" className="text-2xl md:text-3xl font-display font-bold hover:text-[#9F1239] transition-colors">
                  lyabiwa08@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Social Links - LinkedIn Only */}
          <div className="flex gap-4 mt-16">
            <a 
              href="https://www.linkedin.com/in/lya-biwa-130832255/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 px-6 py-4 bg-[#111827] rounded-2xl hover:bg-[#9F1239] transition-all border border-white/5 group shadow-lg"
            >
              <Linkedin size={24} className="text-[#9F1239] group-hover:text-white transition-colors" />
              <span className="font-display font-bold text-white group-hover:text-white">LinkedIn</span>
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#111827] p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#9F1239]/5 blur-3xl -mr-16 -mt-16" />
          
          {formState.submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
              <div className="w-16 h-16 bg-[#9F1239] rounded-full flex items-center justify-center text-white mb-4">
                <Send size={32} />
              </div>
              <h3 className="text-2xl font-bold">Message envoyé !</h3>
              <p className="text-white/60">Merci, Lya vous répondra dans les plus brefs délais.</p>
            </div>
          ) : (
            <form 
              action="https://formsubmit.co/lyabiwa08@gmail.com" 
              method="POST"
              className="space-y-6 relative z-10"
            >
              {/* Configuration FormSubmit */}
              <input type="hidden" name="_next" value="https://lyabiwa8.github.io/Portfolio/" />
              <input type="hidden" name="_subject" value="Nouveau message depuis la page d'accueil !" />
              <input type="hidden" name="_captcha" value="false" />

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#E2E8F0]/60">Nom complet</label>
                  <input
                    name="name"
                    required
                    type="text"
                    className="w-full bg-[#0F172A] border border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#9F1239] transition-colors"
                    placeholder="Jean Dupont"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#E2E8F0]/60">Email</label>
                  <input
                    name="email"
                    required
                    type="email"
                    className="w-full bg-[#0F172A] border border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#9F1239] transition-colors"
                    placeholder="jean@exemple.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#E2E8F0]/60">Objet</label>
                <input
                  name="subject"
                  required
                  type="text"
                  className="w-full bg-[#0F172A] border border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#9F1239] transition-colors"
                  placeholder="Collaboration..."
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#E2E8F0]/60">Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-[#0F172A] border border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#9F1239] transition-colors resize-none"
                  placeholder="Dites-moi tout !"
                />
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-[#9F1239] text-white rounded-xl font-bold hover:bg-[#BE123C] transition-all flex items-center justify-center gap-2 shadow-xl shadow-[#9F1239]/20"
              >
                Envoyer <Send size={20} />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
