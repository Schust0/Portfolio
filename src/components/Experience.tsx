"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Stagiaire 2ème année",
    company: "PLCD",
    period: "Septembre — Décembre 2024",
    tasks: [
      "Mise en place d'un questionnaire de satisfaction client",
      "Refonte du site internet de l'entreprise sœur (CNP)",
      "Vérification des balances et réception de commandes",
    ],
  },
  {
    title: "Employé polyvalent",
    company: "H&M",
    period: "Juillet — Septembre 2023",
    tasks: [
      "Déchargement et mise en rayon des marchandises",
      "Gestion du stock et rangement",
      "Relation clientèle et encaissement",
    ],
  },
  {
    title: "Préparateur de commandes",
    company: "Leroy Merlin",
    period: "Août — Septembre 2022",
    tasks: [
      "Préparation et vérification des commandes",
      "Travail en équipe",
      "Organisation et rigueur",
    ],
  },
];

export default function Experience() {
  return (
    <section id="parcours" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-16"
        >
          Parcours
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gray-700" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative mb-12 pl-12 md:pl-0 md:w-1/2 ${
                i % 2 === 0
                  ? "md:pr-12 md:ml-0"
                  : "md:pl-12 md:ml-auto"
              }`}
            >
              {/* Dot on the timeline */}
              <div
                className={`absolute top-5 left-2.5 w-3 h-3 bg-blue-500 rounded-full ring-4 ring-gray-900 z-10 ${
                  i % 2 === 0
                    ? "md:left-auto md:right-[-6px]"
                    : "md:left-[-7px]"
                }`}
              />

              <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700/50 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-2 mb-1">
                  <Briefcase size={16} className="text-blue-400" />
                  <span className="text-sm text-blue-400 font-medium">
                    {exp.period}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {exp.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3">{exp.company}</p>
                <ul className="space-y-1">
                  {exp.tasks.map((task) => (
                    <li
                      key={task}
                      className="text-sm text-gray-300 flex items-start gap-2"
                    >
                      <span className="text-blue-400 mt-1.5 shrink-0">•</span>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
