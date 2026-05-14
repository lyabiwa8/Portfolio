"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PageWrapper } from "@/components/PageWrapper";
import { Send, CheckCircle2, Linkedin, Mail } from "lucide-react";

const C = {
  text:     "var(--text-primary)",
  muted:    "var(--text-secondary)",
  accent:   "var(--accent-primary)",
  border:   "var(--border-subtle)",
  surface:  "var(--surface)",
  bg:       "var(--bg-main)",
};

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    
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
        setStatus("success");
      } else {
        throw new Error();
      }
    } catch (error) {
      alert("Une erreur est survenue. Veuillez réessayer ou m'envoyer un mail directement.");
      setStatus("idle");
    }
  };

  return (
    <PageWrapper>
      <div className="max-w-7xl mx-auto px-6 py-28 md:py-40">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-start">
          
          <div className="space-y-12 md:space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 
                className="font-display font-bold leading-[0.9] tracking-tighter mb-8"
                style={{ fontSize: "clamp(3rem, 10vw, 6rem)", color: C.text }}
              >
                Disons-nous <br />
                <span className="text-accent-primary italic">bonjour.</span>
              </h1>
              <p className="text-lg md:text-xl font-medium leading-relaxed max-w-md" style={{ color: C.muted }}>
                Recherche d'une alternance en communication ou d'un projet créatif ? 
                Je suis à votre écoute pour collaborer.
              </p>
            </motion.div>
            
            <div className="grid gap-6">
              {[
                { 
                  icon: <Mail size={20} />, 
                  label: "Email Officiel", 
                  value: "lyabiwa08@gmail.com", 
                  href: "mailto:lyabiwa08@gmail.com" 
                },
                { 
                  icon: <Linkedin size={20} />, 
                  label: "LinkedIn", 
                  value: "Lya Biwa", 
                  href: "https://www.linkedin.com/in/lya-biwa-130832255/" 
                },
                { 
                  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>, 
                  label: "TikTok", 
                  value: "@atnightimbatman", 
                  href: "https://www.tiktok.com/@atnightimbatman" 
                }
              ].map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i + 0.3 }}
                  className="group flex items-center gap-6 p-6 rounded-[2rem] bg-surface/40 backdrop-blur-sm border border-border-subtle/20 hover:border-accent-primary/30 transition-all duration-500 soft-shadow"
                >
                  <div className="w-12 h-12 rounded-2xl bg-accent-primary text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-500">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-1" style={{ color: C.text }}>{item.label}</p>
                    <p className="text-base md:text-lg font-bold group-hover:text-accent-primary transition-colors" style={{ color: C.text }}>{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-surface p-8 md:p-14 rounded-[3rem] border border-border-subtle/20 shadow-2xl relative overflow-hidden"
          >
            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-8 py-12">
                <div className="w-24 h-24 rounded-full bg-accent-primary flex items-center justify-center text-white shadow-xl shadow-accent-primary/20">
                  <CheckCircle2 size={48} />
                </div>
                <div className="space-y-3">
                  <h2 className="text-3xl font-display font-bold" style={{ color: C.text }}>Message Envoyé !</h2>
                  <p className="font-medium opacity-60" style={{ color: C.text }}>
                    Merci beaucoup. Je vous répondrai <br /> dans les plus brefs délais.
                  </p>
                </div>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-accent-primary font-bold hover:underline tracking-widest text-xs uppercase"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
               <form 
                action="https://formsubmit.co/lyabiwa08@gmail.com" 
                method="POST"
                className="space-y-8"
              >
                {/* Configuration FormSubmit */}
                <input type="hidden" name="_next" value="https://lyabiwa8.github.io/Portfolio/contact" />
                <input type="hidden" name="_subject" value="Nouveau message depuis le Portfolio !" />
                <input type="hidden" name="_captcha" value="false" />

                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] ml-6 opacity-50" style={{ color: C.text }}>Nom Complet</label>
                  <input
                    name="name"
                    required
                    type="text"
                    placeholder="Jean Dupont"
                    className="w-full bg-bg-main/50 border border-border-subtle/30 rounded-2xl px-8 py-5 outline-none focus:border-accent-primary transition-all font-medium text-text-primary placeholder:opacity-30"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] ml-6 opacity-50" style={{ color: C.text }}>Email</label>
                  <input
                    name="email"
                    required
                    type="email"
                    placeholder="jean@exemple.com"
                    className="w-full bg-bg-main/50 border border-border-subtle/30 rounded-2xl px-8 py-5 outline-none focus:border-accent-primary transition-all font-medium text-text-primary placeholder:opacity-30"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] ml-6 opacity-50" style={{ color: C.text }}>Message</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Dites-moi tout..."
                    className="w-full bg-bg-main/50 border border-border-subtle/30 rounded-[2.5rem] px-8 py-6 outline-none focus:border-accent-primary transition-all font-medium text-text-primary placeholder:opacity-30 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary py-6 rounded-full font-bold text-sm flex items-center justify-center gap-3 shadow-xl transition-all active:scale-[0.98]"
                >
                  Envoyer le message
                  <Send size={18} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
}
