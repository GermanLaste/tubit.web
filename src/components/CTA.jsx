import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";

export default function CTA() {
  return (

<section className="py-20 px-4 bg-transparent relative">      
      {/* Fondo con degradado "Nuclear" */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] to-blue-900/10"></div>
      
      {/* Círculo de luz de fondo */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
        >
          ¿Tu PC pide ayuda a gritos?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-slate-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
        >
          No dejes que un equipo lento frene tu trabajo o tus partidas. 
          Diagnóstico rápido, solución profesional y garantía en Villa Adelina.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="https://wa.link/ic1rvt" target="_blank" className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-black font-bold text-lg rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300">
             <span className="mr-2">Agendar mi turno ahora</span>
             <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}