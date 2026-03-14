"use client";

import { motion } from "framer-motion";
import { GraduationCap, Gamepad2, Brain, Clapperboard } from "lucide-react";

const interests = [
  { icon: Brain, label: "Intelligence artificielle" },
  { icon: Gamepad2, label: "Développement de jeux vidéo" },
  { icon: Clapperboard, label: "Cinéma & Science-fiction" },
];

export default function About() {
  return (
    <section id="a-propos" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-16"
        >
          À propos
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-300 leading-relaxed mb-4">
              Étudiant en 3ème année à <strong className="text-white">EPITECH Nancy</strong>,
              je me forme au développement logiciel à travers une pédagogie
              active basée sur des projets concrets, en autonomie et en équipe.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Mon parcours m&apos;a permis de travailler sur des projets variés :
              serveurs réseau en C/C++, applications web avec React et Next.js,
              ou encore des programmes de calcul scientifique en Python.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Je recherche actuellement un <strong className="text-blue-400">stage en développement
              informatique</strong> du 1er avril au 31 août 2026 pour approfondir
              mes compétences en entreprise.
            </p>
          </motion.div>

          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-4"
          >
            {/* Education card */}
            <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700/50">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <GraduationCap size={20} className="text-blue-400" />
                </div>
                <h3 className="font-semibold text-white">Formation</h3>
              </div>
              <p className="text-sm text-gray-300">
                EPITECH Nancy — 2022 à 2028
              </p>
              <p className="text-sm text-gray-400">
                Bac Général Maths & Sciences de l&apos;Ingénieur — Lycée Cormontaigne, Metz
              </p>
            </div>

            {/* Interests */}
            <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700/50">
              <h3 className="font-semibold text-white mb-3">
                Centres d&apos;intérêt
              </h3>
              <div className="flex flex-wrap gap-3">
                {interests.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 text-sm text-gray-300 bg-gray-700/40 px-3 py-1.5 rounded-full"
                  >
                    <item.icon size={14} className="text-blue-400" />
                    {item.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700/50">
              <h3 className="font-semibold text-white mb-3">Langues</h3>
              <div className="flex gap-4 text-sm text-gray-300">
                <span>🇬🇧 Anglais — B1</span>
                <span>🇩🇪 Allemand — A1</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
