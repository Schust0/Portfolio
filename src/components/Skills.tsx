"use client";

import { motion } from "framer-motion";

const categories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: "react/react-original" },
      { name: "Next.js", icon: "nextjs/nextjs-original" },
      { name: "Vue.js", icon: "vuejs/vuejs-original" },
      { name: "JavaScript", icon: "javascript/javascript-original" },
      { name: "TypeScript", icon: "typescript/typescript-original" },
      { name: "HTML/CSS", icon: "html5/html5-original" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "C", icon: "c/c-original" },
      { name: "C++", icon: "cplusplus/cplusplus-original" },
      { name: "Python", icon: "python/python-original" },
      { name: "Node.js", icon: "nodejs/nodejs-original" },
    ],
  },
  {
    title: "Outils / DevOps",
    skills: [
      { name: "Git", icon: "git/git-original" },
      { name: "GitHub", icon: "github/github-original" },
      { name: "Docker", icon: "docker/docker-original" },
      { name: "Linux", icon: "linux/linux-original" },
      { name: "VS Code", icon: "vscode/vscode-original" },
      { name: "PostgreSQL", icon: "postgresql/postgresql-original" },
    ],
  },
];

const DEVICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

export default function Skills() {
  return (
    <section id="competences" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-16"
        >
          Compétences
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-10">
          {categories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.15 }}
              className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50"
            >
              <h3 className="text-lg font-semibold text-blue-400 mb-6 text-center">
                {category.title}
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: catIdx * 0.1 + i * 0.05,
                    }}
                    className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-gray-700/50 transition-colors group"
                  >
                    <img
                      src={`${DEVICON_BASE}/${skill.icon}.svg`}
                      alt={skill.name}
                      width={40}
                      height={40}
                      className="group-hover:scale-110 transition-transform duration-200"
                    />
                    <span className="text-xs text-gray-400 text-center group-hover:text-gray-200 transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
