
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

const projects = [
  {
    title: "Sistema CRM con IA",
    description:
      "Automatización de atención al cliente mediante bots conversacionales e integraciones inteligentes.",

    longDescription:
      "Sistema CRM desarrollado para automatizar procesos de atención al cliente mediante inteligencia artificial, integraciones API y gestión empresarial.",

    stack: ["React", "Node.js", "OpenAI", "PostgreSQL"],
  },

  {
    title: "HackaTec Turismo Inteligente",
    description:
      "Proyecto basado en inteligencia artificial enfocado en turismo inteligente y experiencia de usuario.",

    longDescription:
      "Proyecto tecnológico presentado en HackaTec enfocado en turismo inteligente utilizando IA para mejorar recomendaciones y experiencia de usuario.",

    stack: ["Angular", "Python", "AI"],
  },

  {
    title: "Aplicación móvil multiplataforma",
    description:
      "Aplicación desarrollada con Flutter e integración de APIs REST para gestión de datos en tiempo real.",

    longDescription:
      "Aplicación móvil multiplataforma desarrollada con Flutter para administración de información y sincronización en tiempo real mediante APIs REST.",

    stack: ["Flutter", "Dart", "REST API"],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<
    null | (typeof projects)[0]
  >(null);

  return (
    <>
      <section
        id="projects"
        className="max-w-6xl mx-auto px-6 py-32"
      >
        <div className="mb-16">
          <p className="text-blue-400 text-sm mb-4">
            Proyectos
          </p>

          <h2 className="text-5xl font-bold">
            Algunos proyectos destacados.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {projects.map((project) => (
            <motion.div
              key={project.title}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer text-left rounded-3xl border border-white/10 bg-white/[0.03] p-8 hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300"
            >

              <div className="h-44 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-800 mb-8 border border-white/5" />

              <h3 className="text-2xl font-semibold mb-4">
                {project.title}
              </h3>

              <p className="text-zinc-400 leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <div
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-black/30 border border-white/10 text-sm text-zinc-300"
                  >
                    {tech}
                  </div>
                ))}
              </div>

            </motion.div>
          ))}

        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md px-6 overflow-y-auto py-10"
            onClick={() => setSelectedProject(null)}
          >

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.92,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.92,
                y: 20,
              }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl rounded-3xl border border-white/10 bg-[#0f0f0f] p-8 shadow-2xl"
            >

              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 text-zinc-500 hover:text-white transition"
              >
                <X />
              </button>

              <div className="h-64 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-800 mb-8 border border-white/5" />

              <h3 className="text-4xl font-bold mb-6">
                {selectedProject.title}
              </h3>

              <p className="text-zinc-400 leading-relaxed text-lg mb-8">
                {selectedProject.longDescription}
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {selectedProject.stack.map((tech) => (
                  <div
                    key={tech}
                    className="px-4 py-2 rounded-xl border border-white/10 bg-black/20 text-zinc-300"
                  >
                    {tech}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">

                <button className="bg-white text-black px-5 py-3 rounded-xl font-medium hover:opacity-90 transition hover:scale-[1.03] active:scale-[0.98]">
                  Ver proyecto
                </button>

                <button className="border border-white/10 px-5 py-3 rounded-xl hover:bg-white/10 transition hover:scale-[1.03] active:scale-[0.98]">
                  GitHub
                </button>

              </div>

            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

