import React, { useRef } from "react"; // Importamos useRef
import { motion } from "framer-motion";
import { Monitor, ThermometerSun, Zap, Wrench } from "lucide-react";

const services = [
  {
    title: "Armado de PC Gamer",
    description: "Te ayudo a elegir los componentes y la armo súper prolija. Gestión de cables oculta y lista para jugar.",
    icon: <Monitor className="w-8 h-8 text-blue-400" />,
    className: "md:col-span-2", 
  },
  {
    title: "Mantenimiento Térmico",
    description: "Limpieza a fondo y cambio de pasta térmica. Bajamos la temperatura y el ruido de tu equipo.",
    icon: <ThermometerSun className="w-8 h-8 text-orange-400" />,
    className: "md:col-span-1",
  },
  {
    title: "Windows y Programas",
    description: "Formateo, instalación de drivers y optimización. Tu PC vuelve a volar como el primer día.",
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
    className: "md:col-span-1",
  },
  {
    title: "Reparación de Hardware",
    description: "¿No da video? ¿Pantalla azul? Encontramos la falla real y te pasamos un presupuesto honesto.",
    icon: <Wrench className="w-8 h-8 text-green-400" />,
    className: "md:col-span-2", 
  },
];

const Card = ({ item, index }) => {
  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Asignamos variables CSS dinámicas para la posición
    div.style.setProperty("--mouse-x", `${x}px`);
    div.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      // Reemplaza las líneas de clases actuales por estas:
className={`
  ${item.className} 
  group relative overflow-hidden rounded-3xl p-8 
  bg-white/[0.03] backdrop-blur-sm border border-white/10
  hover:border-blue-500/30 transition-all duration-500
`}
    >
      {/* EL SPOTLIGHT (Luz que sigue al mouse) */}
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.06), transparent 40%)`
        }}
      />

      {/* Contenido */}
      <div className="relative z-10 flex flex-col h-full justify-between pointer-events-none">
        <div className="mb-4 p-3 bg-white/5 w-fit rounded-xl border border-white/10 group-hover:scale-110 transition-transform duration-300 group-hover:bg-white/10">
          {item.icon}
        </div>
        
        <div>
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
            {item.title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default function Services() {
  return (
<section id="servicios" className="py-24 px-4 bg-transparent relative overflow-hidden">      
      <div className="absolute top-0 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
          ¿En qué te puedo <span className="text-blue-500">ayudar?</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          Soluciones rápidas y prolijas para que no pierdas tiempo renegando con la tecnología.
        </p>
      </div>

      {/* LA BENTO GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        {services.map((item, index) => (
          <Card key={index} item={item} index={index} />
        ))}
      </div>

    </section>
  );
}