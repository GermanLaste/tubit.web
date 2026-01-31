import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Wrench, ChevronDown, Cpu, ThermometerSun, 
  Zap, Search, Globe, MonitorUp, FileCode2 
} from "lucide-react";

export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
        
        {/* LOGO */}
        <a href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight text-white hover:opacity-80 transition-opacity">
          <Wrench className="w-5 h-5 text-blue-500" />
          <span>tubit.pc</span>
        </a>

        {/* MENÚ CENTRAL */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400 items-center">
          
          {/* MENÚ DESPLEGABLE */}
          <div 
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <a 
              href="/servicios" 
              className="flex items-center gap-1 hover:text-white transition-colors py-4 focus:outline-none cursor-pointer"
            >
              Servicios
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isHovered ? "rotate-180" : ""}`} />
            </a>

            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 5, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
className="absolute top-full left-1/2 -translate-x-1/2 w-[95vw] md:w-[600px] max-w-[600px] ..."                >
                  {/* COLUMNA 1: HARDWARE */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                      <Cpu className="w-4 h-4" /> PC de Escritorio
                    </h4>
                    <ul className="space-y-3">
                      <a href="/servicios#hardware"><DropdownItem title="Limpieza y Mantenimiento" desc="Chau polvo y temperatura" /></a>
                      <a href="/servicios#hardware"><DropdownItem title="Cambio de Pasta Térmica" desc="Mejor rendimiento" /></a>
                      <a href="/servicios#hardware"><DropdownItem title="Diagnóstico" desc="¿No prende? Lo reviso" /></a>
                      <a href="/servicios#hardware"><DropdownItem title="Mejoras (Upgrade)" desc="Más RAM, SSD o Video" /></a>
                    </ul>
                  </div>

                  {/* COLUMNA 2: SOFTWARE */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                      <Zap className="w-4 h-4" /> Sistema y Programas
                    </h4>
                    <ul className="space-y-3">
                      <a href="/servicios#software"><DropdownItem title="Optimización Windows" desc="Que ande rápido" /></a>
                      <a href="/servicios#software"><DropdownItem title="Drivers al día" desc="Para jugar sin errores" /></a>
                      <a href="/servicios#software"><DropdownItem title="Actualización BIOS" desc="Soporte nuevos micros" /></a>
                      <a href="/servicios#software"><DropdownItem title="Instalación Programas" desc="Office, Adobe, etc." /></a>
                    </ul>
                  </div>

                  {/* COLUMNA 3: WEB */}
                  <div className="col-span-2 mt-2 pt-4 border-t border-white/5">
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                      <Globe className="w-4 h-4" /> Proyectos Web
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                        <a href="https://wa.link/ic1rvt" target="_blank" className="group flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer">
                            <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 group-hover:text-blue-300">
                                <MonitorUp className="w-5 h-5" />
                            </div>
                            <div>
                                <h5 className="text-white font-medium text-sm">Asesoramiento</h5>
                                <p className="text-slate-500 text-xs mt-1">Te ayudo a elegir qué comprar.</p>
                            </div>
                        </a>

                        <a href="/servicios#web" className="group flex items-start gap-3 p-3 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/5 hover:border-white/10 transition-colors cursor-pointer">
                            <div className="p-2 bg-purple-500/20 rounded-lg text-purple-300">
                                <FileCode2 className="w-5 h-5" />
                            </div>
                            <div>
                                <h5 className="text-white font-bold text-sm">Tu Página Web</h5>
                                <p className="text-slate-400 text-xs mt-1">Ideal para tu emprendimiento.</p>
                            </div>
                        </a>
                    </div>
                  </div>

                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href="/#proceso" className="hover:text-white transition-colors">Cómo trabajo</a>
          <a href="/servicios" className="hover:text-white transition-colors">Precios</a>
        </div>

        {/* BOTÓN DERECHA */}
        <a 
            href="https://wa.link/ic1rvt" 
            target="_blank"
            className="text-xs font-semibold bg-white text-black px-5 py-2 rounded-full hover:bg-slate-200 transition-transform hover:scale-105"
        >
          Escribime
        </a>
      </div>
    </nav>
  );
}

function DropdownItem({ title, desc }) {
  return (
    <div className="group cursor-pointer">
      <h5 className="text-slate-200 text-sm font-medium group-hover:text-blue-400 transition-colors flex items-center gap-2">
        {title}
      </h5>
      <p className="text-slate-500 text-xs group-hover:text-slate-400 transition-colors">
        {desc}
      </p>
    </div>
  );
}