import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Search, Wrench, CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "1. Consulta Gratis",
    desc: "Nos contactás por WhatsApp. Nos contás el problema y te damos un estimado inicial sin compromiso.",
    icon: <MessageCircle className="w-6 h-6 text-blue-400" />,
  },
  {
    title: "2. Diagnóstico Profundo",
    desc: "Recibimos tu equipo en Villa Adelina. Lo revisamos a fondo para detectar la falla real (Hardware o Software).",
    icon: <Search className="w-6 h-6 text-purple-400" />,
  },
  {
    title: "3. Reparación & Mantenimiento",
    desc: "Una vez aprobado el presupuesto, procedemos. Limpieza, cambio de piezas o instalación de sistemas.",
    icon: <Wrench className="w-6 h-6 text-pink-400" />,
  },
  {
    title: "4. Entrega y Garantía",
    desc: "Te devolvemos el equipo optimizado y con garantía sobre el trabajo realizado. ¡A disfrutar!",
    icon: <CheckCircle2 className="w-6 h-6 text-green-400" />,
  },
];

export default function Process() {
  return (
    <section id="proceso" className="py-24 px-4 bg-transparent relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        {/* Título */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Tu Camino a la <span className="text-blue-500">Solución</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-slate-400 text-lg"
          >
            Un proceso simple, transparente y sin vueltas.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Línea Vertical Central */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-transparent -translate-x-1/2 md:translate-x-0 z-0"></div>

          <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-[1fr_auto_1fr] md:gap-y-16 relative z-10">
            {steps.map((step, index) => {
              const isEven = index % 2 !== 0; // false = Izq, true = Der
              
              return (
                <motion.div
                  key={index}
                  // CAMBIO CLAVE: Usamos 'animate' en lugar de 'whileInView'
                  // Como Astro usa client:visible, esto se ejecuta apenas aparece en pantalla.
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }} 
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.2, // Efecto escalera (uno por uno)
                    type: "spring", 
                    bounce: 0.3 
                  }}
                  className={`flex md:contents ${isEven ? "flex-row-reverse md:flex-row" : ""}`}
                >
                  {/* TEXTO IZQUIERDA (Pasos impares) */}
                  <div className={`flex-1 hidden md:flex items-center ${isEven ? "justify-start" : "justify-end"}`}>
                    {!isEven && (
                      <div className="text-right pr-8">
                        <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                        <p className="text-slate-400 leading-relaxed">{step.desc}</p>
                      </div>
                    )}
                  </div>

                  {/* LA BURBUJA (Ícono central) */}
                  <div className="relative flex items-center justify-center mx-4 md:mx-0">
                    <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-px w-8 bg-white/20 ${isEven ? "left-full" : "right-full"}`}></div>
                    
                    <motion.div 
                      // Animación extra para la burbuja: POP (Escala)
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ 
                        delay: index * 0.2 + 0.2, // Aparece un pelín después que el texto empieza a moverse
                        type: "spring", 
                        stiffness: 200, 
                        damping: 15 
                      }}
                      className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#0a0a0a] border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)] z-10 group hover:scale-110 transition-transform duration-300 shrink-0"
                    >
                      <div className="absolute inset-0 bg-white/5 rounded-full blur-md group-hover:bg-white/10 transition-colors"></div>
                      {step.icon}
                    </motion.div>
                  </div>

                  {/* TEXTO DERECHA (Pasos pares) */}
                  <div className={`flex-1 pl-4 md:pl-0 flex items-center ${isEven ? "justify-start" : "justify-end"}`}>
                    <div className={`${isEven ? "md:text-left md:pl-8" : "md:hidden"}`}>
                      <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-slate-400 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}