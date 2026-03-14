"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-white mb-6"
        >
          Contact
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-400 text-lg mb-10"
        >
          Intéressé par mon profil ? N&apos;hésitez pas à me contacter pour
          discuter d&apos;un stage ou d&apos;une opportunité.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <a
            href="mailto:arthur.schuster@epitech.eu"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors"
          >
            <Mail size={20} />
            arthur.schuster@epitech.eu
          </a>
          <a
            href="tel:+33651910005"
            className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
          >
            <Phone size={20} />
            06 51 91 00 05
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center gap-4 mt-6"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-lg transition-colors"
          >
            <Github size={22} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-lg transition-colors"
          >
            <Linkedin size={22} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
