"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PageWrapper } from "@/components/PageWrapper";
import { Send, CheckCircle2, Instagram, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setStatus("success");
  };

  return (
    <PageWrapper>
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <div className="py-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-8xl font-display font-bold text-brown-900 mb-10 tracking-tighter leading-none"
          >
            DISONS-NOUS <br/><span className="text-accent italic">BONJOUR.</span>
          </motion.h1>
          
          <div className="grid sm:grid-cols-2 gap-8 mb-16">
            <div className="p-8 rounded-[2rem] bg-beige-100 border border-brown-100 group cursor-pointer hover:bg-brown-900 transition-all duration-500">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                <Mail size={22} />
              </div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-brown-400 font-bold mb-2 group-hover:text-beige-200">Email</p>
              <p className="text-base font-bold text-brown-900 group-hover:text-white break-words">contact@lyabiwa.com</p>
            </div>

            <div className="p-8 rounded-[2rem] bg-beige-100 border border-brown-100 group cursor-pointer hover:bg-brown-900 transition-all duration-500">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                <Instagram size={22} />
              </div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-brown-400 font-bold mb-2 group-hover:text-beige-200">Instagram</p>
              <p className="text-base font-bold text-brown-900 group-hover:text-white">@lyabiwa_com</p>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="glass rounded-[3rem] p-12 shadow-2xl"
        >
          {status === "success" ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12">
              <div className="w-24 h-24 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <CheckCircle2 size={64} />
              </div>
              <h2 className="text-3xl font-display font-bold text-brown-900">Message Envoyé !</h2>
              <p className="text-brown-600">
                Merci pour votre message. Je reviens vers vous très rapidement.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="text-accent font-bold hover:underline"
              >
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <label className="text-sm font-bold text-brown-900 ml-4 uppercase tracking-widest">Nom Complet</label>
                <input
                  required
                  type="text"
                  placeholder="Ex: Jean Dupont"
                  className="w-full bg-brown-50/50 border border-brown-100 rounded-3xl px-8 py-4 outline-none focus:border-accent transition-colors text-brown-900"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-brown-900 ml-4 uppercase tracking-widest">Email</label>
                <input
                  required
                  type="email"
                  placeholder="jean@exemple.com"
                  className="w-full bg-brown-50/50 border border-brown-100 rounded-3xl px-8 py-4 outline-none focus:border-accent transition-colors text-brown-900"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-brown-900 ml-4 uppercase tracking-widest">Message</label>
                <textarea
                  required
                  rows={5}
                  placeholder="Dites-moi tout..."
                  className="w-full bg-brown-50/50 border border-brown-100 rounded-[2rem] px-8 py-4 outline-none focus:border-accent transition-colors text-brown-900 resize-none"
                />
              </div>

              <button
                disabled={status === "sending"}
                type="submit"
                className="w-full bg-brown-900 text-white rounded-full py-5 font-bold hover:bg-brown-800 transition-all shadow-lg flex items-center justify-center gap-3 disabled:opacity-70"
              >
                {status === "sending" ? "Envoi en cours..." : "Envoyer le message"}
                <Send size={20} />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </PageWrapper>
  );
}


