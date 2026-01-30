import React from "react";
import { motion } from "framer-motion";
import { Wrench, MessageCircle } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.2 } }
};

export default function Hero() {
  return (
    // CAMBIO 1: Quitamos el bg-[#050505] para ver si la imagen carga detrás
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-black">
      
      {/* --- FONDO DE PRUEBA (ESTÁTICO) --- */}
      <div className="absolute inset-0 w-full h-full z-0">
        
        {/* Imagen directa, sin animación, opacidad alta (0.6) */}
        <img 
          src="https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=2070&auto=format&fit=crop" 
          alt="Fondo Hardware" 
          className="absolute w-full h-full object-cover opacity-60"
        />
        
        {/* Degradado suave encima para que el texto se lea */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90"></div>
      </div>

      {/* --- CONTENIDO --- */}
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto"
      >
        
        {/* Badge */}
        <motion.div variants={fadeInUp} className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-xs font-medium text-blue-300 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Villa Adelina
          </div>
        </motion.div>

        {/* Título */}
        <motion.h1 
          variants={fadeInUp}
          className="text-5xl md:text-8xl font-bold tracking-tight mb-6 leading-[1.1]"
        >
          <span className="block text-white drop-shadow-xl">Tu Setup,</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-violet-400 to-blue-400 animate-gradient-x bg-[length:200%_auto]">
            Nivel Ingeniería.
          </span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p variants={fadeInUp} className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium drop-shadow-md">
          Resolvemos lo que te frena: FPS bajos, temperaturas altas y errores críticos.
        </motion.p>

        {/* Botones */}
        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Botón Principal (Glow) - AHORA CON ENLACE */}
<a href="/servicios" className="group relative px-8 py-4 bg-white text-black font-bold rounded-xl overflow-hidden transition-transform active:scale-95 hover:scale-105 inline-flex items-center justify-center">
  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
  <span className="relative flex items-center gap-2">
    <Wrench className="w-5 h-5" />
    Ver Servicios y Precios
  </span>
</a>
          
          {/* Botón WhatsApp con Borde Animado (Border Beam) */}
{/* En src/components/Hero.jsx */}

{/* Reemplaza el bloque del segundo botón por este: */}
<a 
  href="https://wa.link/ic1rvt" 
  target="_blank" 
  rel="noopener noreferrer"
  className="relative inline-flex h-12 overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:scale-105 transition-transform duration-300"
>
  <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2E8F0_0%,#312e81_50%,#E2E8F0_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-[#0a0a0a] px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl">
    <MessageCircle className="w-4 h-4 mr-2 text-blue-400" />
    Consultar por WhatsApp
  </span>
</a>
        </motion.div>

      </motion.div>
    </section>
  );
}