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
    <section id="proceso" className="py-24 px-4 bg-[#050505] relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        {/* Encabezado */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            ¿Cómo trabajamos?
          </h2>
          <p className="text-slate-400 text-lg">
            Un proceso simple, transparente y sin vueltas.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* La Línea Vertical Central (Fondo) */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent -translate-x-1/2 md:translate-x-0 opacity-30 z-0"></div>

          <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-[1fr_auto_1fr] md:gap-y-16 relative z-10">
            {steps.map((step, index) => {
              const isEven = index % 2 !== 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`flex md:contents ${isEven ? "flex-row-reverse md:flex-row" : ""}`}
                >
                  {/* CONTENIDO IZQUIERDA (Solo en pasos impares 1 y 3) */}
                  <div className={`flex-1 hidden md:flex items-center ${isEven ? "justify-start" : "justify-end"}`}>
                    {!isEven && (
                      <div className="text-right pr-8">
                        <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                        <p className="text-slate-400 leading-relaxed">{step.desc}</p>
                      </div>
                    )}
                  </div>

                  {/* ÍCONO CENTRAL Y LÍNEA CONECTORA */}
                  <div className="relative flex items-center justify-center mx-4 md:mx-0">
                    {/* Línea conectora horizontal (Desktop) */}
                    <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-px w-8 bg-white/20 ${isEven ? "left-full" : "right-full"}`}></div>
                    
                    {/* El Ícono */}
                    <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#0a0a0a] border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)] z-10 group hover:scale-110 transition-transform duration-300 shrink-0">
                      <div className="absolute inset-0 bg-white/5 rounded-full blur-md group-hover:bg-white/10 transition-colors"></div>
                      {step.icon}
                    </div>
                  </div>

                  {/* CONTENIDO DERECHA (Solo en pasos pares 2 y 4) */}
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