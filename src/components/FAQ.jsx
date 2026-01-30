import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "¿Dónde están ubicados?",
    answer: "Estamos en Villa Adelina. Trabajamos con sistema de recepción de equipos en nuestro taller o podemos coordinar retiro a domicilio en zonas cercanas.",
  },
  {
    question: "¿Cuánto tardan en arreglar mi PC?",
    answer: "Para diagnósticos y mantenimientos simples (limpieza, software), demoramos entre 24 y 48 horas. Reparaciones de hardware dependen de la disponibilidad de repuestos.",
  },
  {
    question: "¿El presupuesto tiene costo?",
    answer: "El presupuesto aproximado por WhatsApp es 100% gratuito. Si necesitamos desarmar el equipo para un diagnóstico profundo en laboratorio, tiene un costo mínimo que se bonifica si aceptás la reparación.",
  },
  {
    question: "¿Dan garantía?",
    answer: "Sí, todos nuestros trabajos de mano de obra tienen 30 días de garantía. Los repuestos nuevos tienen la garantía oficial del fabricante (generalmente 6 a 12 meses).",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 px-4 bg-[#050505]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">
          Preguntas Frecuentes
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-2xl bg-white/[0.02] overflow-hidden hover:border-white/20 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left cursor-pointer focus:outline-none"
              >
                <span className="font-medium text-slate-200">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-blue-400" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}