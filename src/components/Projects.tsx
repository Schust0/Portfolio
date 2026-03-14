"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Application IFTTT",
    description:
      "Application d'automatisation d'actions inspirée d'IFTTT. Connexion de services entre eux avec des triggers et des actions personnalisables.",
    tags: ["React", "Next.js", "Node.js", "REST API"],
    link: "https://github.com",
  },
  {
    title: "Plateforme de réservation",
    description:
      "Développement d'une plateforme complète de réservation pour salon de coiffure avec gestion des créneaux, des clients et des prestations.",
    tags: ["React", "JavaScript", "HTML/CSS", "Node.js"],
    link: "https://github.com",
  },
  {
    title: "Serveur avec IA",
    description:
      "Développement d'un serveur en C/C++ avec intégration d'intelligence artificielle. Protocole réseau personnalisé et communication bas-niveau.",
    tags: ["C", "C++", "Réseau", "IA"],
    link: "https://github.com",
  },
  {
    title: "Gestion d'incubateur",
    description:
      "Site de gestion pour incubateur de start-up permettant le suivi des projets, des équipes et de l'avancement des différentes initiatives.",
    tags: ["Vue.js", "JavaScript", "HTML/CSS"],
    link: "https://github.com",
  },
  {
    title: "Refonte site CNP",
    description:
      "Refonte complète du site internet de l'entreprise CNP (sœur de PLCD) pendant mon stage de 2ème année. Modernisation du design et de l'expérience utilisateur.",
    tags: ["Web", "HTML/CSS", "Stage PLCD"],
    link: "https://github.com",
  },
  {
    title: "Programmes mathématiques",
    description:
      "Suite de programmes en Python : calcul de matrices, rotations, déplacements, et encodeur/décodeur de texte en matrice.",
    tags: ["Python", "Maths", "Algorithmes"],
    link: "https://github.com",
  },
];

export default function Projects() {
  return (
    <section id="projets" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-16"
        >
          Projets
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-800 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <ExternalLink
                  size={18}
                  className="text-gray-500 group-hover:text-blue-400 transition-colors mt-1 shrink-0"
                />
              </div>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 bg-gray-700/50 text-gray-300 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
