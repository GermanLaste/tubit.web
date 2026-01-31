import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "¿Dónde están ubicados?",
    answer: "Estoy en Villa Adelina (Soldado de Malvinas 561). Podés traerme el equipo o coordinamos para que lo pase a buscar si estás cerca.",
  },
  {
    question: "¿Cuánto tardan en arreglar mi PC?",
    answer: "Trato de ser lo más rápido posible. Un mantenimiento o limpieza suele estar en 24hs. Si hay que pedir repuestos específicos, puede tardar un poquito más, pero te aviso siempre.",
  },
  {
    question: "¿Cobrás el presupuesto?",
    answer: "La consulta por WhatsApp es gratis. Si tengo que desarmar la PC en el taller para encontrar una falla difícil, cobro una revisión mínima que se te descuenta si decidís hacer el arreglo.",
  },
  {
    question: "¿Tengo garantía?",
    answer: "¡Sí, claro! Doy 30 días de garantía sobre mi mano de obra para que te quedes tranquilo. Los componentes nuevos tienen su garantía oficial de fábrica.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (

<section id="faq" className="py-24 px-4 bg-transparent relative">      <div className="max-w-3xl mx-auto">
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