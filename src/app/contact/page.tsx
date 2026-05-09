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
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-8xl font-display font-bold text-brown-900 mb-8 tracking-tighter"
          >
            DISONS-NOUS BONJOUR.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-brown-600 leading-relaxed mb-12 max-w-md"
          >
            Un projet en tête ? Une question ou simplement envie de discuter communication ? 
            N'hésitez pas à m'envoyer un message.
          </motion.p>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-16 h-16 rounded-full bg-beige-100 flex items-center justify-center text-brown-900 group-hover:bg-brown-900 group-hover:text-white transition-all duration-500">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-brown-400 font-bold mb-1">Email</p>
                <p className="text-xl font-display font-bold text-brown-900">contact@lyabiwa.com</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-16 h-16 rounded-full bg-beige-100 flex items-center justify-center text-brown-900 group-hover:bg-brown-900 group-hover:text-white transition-all duration-500">
                <Instagram size={24} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-brown-400 font-bold mb-1">Instagram</p>
                <p className="text-xl font-display font-bold text-brown-900">@lyabiwa_com</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-16 h-16 rounded-full bg-beige-100 flex items-center justify-center text-brown-900 group-hover:bg-brown-900 group-hover:text-white transition-all duration-500">
                <Linkedin size={24} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-brown-400 font-bold mb-1">LinkedIn</p>
                <p className="text-xl font-display font-bold text-brown-900">Lya Biwa</p>
              </div>
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
