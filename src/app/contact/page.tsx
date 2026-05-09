"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PageWrapper } from "@/components/PageWrapper";
import { Send, CheckCircle2, Linkedin, Mail } from "lucide-react";

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
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center min-h-[85vh]">
        <div className="py-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-9xl font-display font-bold text-white mb-12 tracking-tighter leading-none"
          >
            DISONS-NOUS <br/><span className="text-[#9F1239] italic">BONJOUR.</span>
          </motion.h1>
          
          <div className="grid sm:grid-cols-2 gap-6 mb-16">
            {/* Mail Block */}
            <div className="p-8 rounded-[2rem] bg-[#111827] border border-white/5 group transition-all duration-500 hover:border-[#9F1239]/30">
              <div className="w-12 h-12 rounded-2xl bg-[#9F1239]/10 flex items-center justify-center text-[#9F1239] mb-6 group-hover:bg-[#9F1239] group-hover:text-white transition-all">
                <Mail size={22} />
              </div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#E2E8F0]/30 font-bold mb-3">Email Officiel</p>
              <a href="mailto:lyabiwa8@gmail.com" className="text-lg font-bold text-white hover:text-[#9F1239] transition-colors break-words">
                lyabiwa8@gmail.com
              </a>
            </div>

            {/* LinkedIn Block */}
            <div className="p-8 rounded-[2rem] bg-[#111827] border border-white/5 group transition-all duration-500 hover:border-[#9F1239]/30">
              <div className="w-12 h-12 rounded-2xl bg-[#9F1239]/10 flex items-center justify-center text-[#9F1239] mb-6 group-hover:bg-[#9F1239] group-hover:text-white transition-all">
                <Linkedin size={22} />
              </div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#E2E8F0]/30 font-bold mb-3">LinkedIn</p>
              <a 
                href="https://www.linkedin.com/in/lya-biwa-130832255/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-lg font-bold text-white hover:text-[#9F1239] transition-colors"
              >
                Lya Biwa
              </a>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-[#111827] rounded-[3rem] p-10 md:p-14 border border-white/5 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#9F1239]/5 blur-[100px] -mr-32 -mt-32" />
          
          {status === "success" ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12 relative z-10">
              <div className="w-20 h-20 rounded-full bg-[#9F1239] flex items-center justify-center text-white shadow-2xl shadow-[#9F1239]/40">
                <CheckCircle2 size={40} />
              </div>
              <h2 className="text-3xl font-display font-bold text-white">Message Envoyé !</h2>
              <p className="text-[#E2E8F0]/60 max-w-xs mx-auto">
                Merci pour votre message. Je reviens vers vous très rapidement.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="text-[#9F1239] font-bold hover:underline tracking-widest text-xs uppercase"
              >
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="space-y-3">
                <label className="text-[10px] font-bold text-[#E2E8F0]/40 uppercase tracking-[0.2em] ml-4">Nom Complet</label>
                <input
                  required
                  type="text"
                  placeholder="Jean Dupont"
                  className="w-full bg-[#0F172A] border border-white/5 rounded-2xl px-8 py-4.5 outline-none focus:border-[#9F1239] transition-colors text-white"
                />
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-bold text-[#E2E8F0]/40 uppercase tracking-[0.2em] ml-4">Email</label>
                <input
                  required
                  type="email"
                  placeholder="jean@exemple.com"
                  className="w-full bg-[#0F172A] border border-white/5 rounded-2xl px-8 py-4.5 outline-none focus:border-[#9F1239] transition-colors text-white"
                />
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-bold text-[#E2E8F0]/40 uppercase tracking-[0.2em] ml-4">Message</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Dites-moi tout..."
                  className="w-full bg-[#0F172A] border border-white/5 rounded-[2rem] px-8 py-4.5 outline-none focus:border-[#9F1239] transition-colors text-white resize-none"
                />
              </div>

              <button
                disabled={status === "sending"}
                type="submit"
                className="w-full bg-[#9F1239] text-white rounded-full py-5 font-bold hover:bg-[#BE123C] transition-all shadow-xl shadow-[#9F1239]/20 flex items-center justify-center gap-3 disabled:opacity-70"
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
