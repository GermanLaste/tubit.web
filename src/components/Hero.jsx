import React from "react";
import { motion } from "framer-motion";
import { Wrench, MessageCircle, ChevronDown } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.2 } }
};

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-transparent">
      
      {/* --- FONDO (Intacto) --- */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img 
          src="https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=2070&auto=format&fit=crop" 
          alt="Fondo Hardware" 
          className="absolute w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90"></div>
      </div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto"
      >
        <motion.div variants={fadeInUp} className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-xs font-mono font-medium text-blue-300 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Soporte Técnico en Villa Adelina
          </div>
        </motion.div>

        <motion.h1 
          variants={fadeInUp}
          className="text-5xl md:text-8xl font-bold tracking-tight mb-6 leading-[1.1]"
        >
          <span className="block text-white drop-shadow-xl">Tu computadora,</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-violet-400 to-blue-400 animate-gradient-x bg-[length:200%_auto]">
            como nueva.
          </span>
        </motion.h1>

        <motion.p variants={fadeInUp} className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium drop-shadow-md leading-relaxed">
          Te ayudamos en revivir equipos, armado de PC Gamer y Soluciones informaticas. 
          Diagnósticos honestos para que dejes de renegar con la tecnología.
        </motion.p>

        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="/servicios" className="group relative px-8 py-4 bg-white text-black font-bold rounded-xl overflow-hidden transition-transform active:scale-95 hover:scale-105 inline-flex items-center justify-center">
            <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/40 to-transparent z-20"></div>
            <span className="relative flex items-center gap-2 z-10">
              <Wrench className="w-5 h-5" />
              ¿Qué necesitas arreglar?
            </span>
          </a>
          
          <a 
            href="https://wa.link/ic1rvt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative inline-flex h-12 overflow-hidden rounded-xl p-[1px] focus:outline-none hover:scale-105 transition-transform duration-300"
          >
            <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2E8F0_0%,#312e81_50%,#E2E8F0_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-[#0a0a0a] px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              <MessageCircle className="w-4 h-4 mr-2 text-blue-400" />
              Presupuesto por WhatsApp
            </span>
          </a>
        </motion.div>

        {/* Flecha indicadora */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1, 
            y: [0, 10, 0] 
          }}
          transition={{ 
            opacity: { delay: 1, duration: 1 },
            y: { repeat: Infinity, duration: 2, ease: "easeInOut" } 
          }}
          className="absolute left-1/2 -translate-x-1/2 bottom-[-10vh] md:bottom-[-15vh] flex flex-col items-center gap-2 cursor-pointer group"
          onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-blue-400 font-mono font-bold opacity-70 group-hover:opacity-100 transition-opacity">
            Explorar
          </span>
          <div className="p-2 rounded-full border border-blue-500/20 bg-blue-500/5 backdrop-blur-sm group-hover:border-blue-500/50 transition-colors">
            <ChevronDown className="w-6 h-6 text-blue-400" />
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}