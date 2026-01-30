import React from "react";
import { motion } from "framer-motion";
import { Cpu, ShieldCheck, Zap, Monitor, Wrench, ThermometerSun } from "lucide-react";

// Datos de tus servicios
const services = [
  {
    title: "Armado de PC Gamer",
    description: "Asesoramiento de componentes, ensamblaje profesional y gestión de cables impecable.",
    icon: <Monitor className="w-8 h-8 text-blue-400" />,
    className: "md:col-span-2", // Esta tarjeta ocupa 2 espacios
    gradient: "from-blue-500/20 to-purple-500/20"
  },
  {
    title: "Mantenimiento Pro",
    description: "Limpieza profunda, cambio de pasta térmica de alta conductividad.",
    icon: <ThermometerSun className="w-8 h-8 text-orange-400" />,
    className: "md:col-span-1",
    gradient: "from-orange-500/20 to-red-500/20"
  },
  {
    title: "Optimización Software",
    description: "Windows ligero, drivers actualizados y eliminación de procesos basura.",
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
    className: "md:col-span-1",
    gradient: "from-yellow-500/20 to-amber-500/20"
  },
  {
    title: "Diagnóstico Hardware",
    description: "¿Pantallazos azules? Detectamos la falla exacta con herramientas de testeo.",
    icon: <Wrench className="w-8 h-8 text-green-400" />,
    className: "md:col-span-2", // Esta tarjeta también es ancha
    gradient: "from-green-500/20 to-emerald-500/20"
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 px-4 bg-[#050505] relative overflow-hidden">
      
      {/* Título de la sección */}
      <div className="max-w-6xl mx-auto mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
          Soluciones de <span className="text-blue-500">Alto Rendimiento</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          No solo arreglamos computadoras, optimizamos tu herramienta de trabajo y juego.
        </p>
      </div>

      {/* LA BENTO GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        {services.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className={`
              ${item.className} 
              group relative overflow-hidden rounded-3xl p-8 
              border border-white/10 bg-white/[0.02] 
              hover:border-white/20 transition-all duration-500
            `}
          >
            {/* Efecto de degradado al pasar el mouse (Background Glow) */}
            <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />

            {/* Contenido */}
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="mb-4 p-3 bg-white/5 w-fit rounded-xl border border-white/10 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Decoración tech (esquinas) */}
            <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-white/10 group-hover:bg-white/30 transition-colors" />
          </motion.div>
        ))}
      </div>

    </section>
  );
}