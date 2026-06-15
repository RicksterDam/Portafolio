"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import Image from "next/image";

import jatikImg from "@/lib/img/jatik.png";
import hackatecImg from "@/lib/img/hackatec.jpg";

const projects = [
  {
    title: "Sistema CRM con IA",

    description:
      "Automatización de atención al cliente mediante bots conversacionales e integraciones inteligentes.",

    longDescription:
      "Sistema CRM desarrollado para automatizar procesos de atención al cliente mediante inteligencia artificial, integraciones API y gestión empresarial.",

    stack: [
      "React",
      "Node.js",
      "OpenAI",
      "PostgreSQL",
    ],

    image: hackatecImg,
  },

  {
    title: "HackaTec Turismo Inteligente",

    description:
      "Proyecto basado en inteligencia artificial enfocado en turismo inteligente y experiencia de usuario.",

    longDescription:
      "Proyecto tecnológico presentado en HackaTec enfocado en turismo inteligente utilizando IA para mejorar recomendaciones y experiencia de usuario.",

    stack: [
      "Angular",
      "Python",
      "AI",
    ],

    image: jatikImg,
  },

  {
    title: "Aplicación móvil multiplataforma",

    description:
      "Aplicación desarrollada con Flutter e integración de APIs REST para gestión de datos en tiempo real.",

    longDescription:
      "Aplicación móvil multiplataforma desarrollada con Flutter para administración de información y sincronización en tiempo real mediante APIs REST.",

    stack: [
      "Flutter",
      "Dart",
      "REST API",
    ],

    image: jatikImg,
  },
];

export default function Projects() {

  const [selectedProject, setSelectedProject] =
    useState<null | (typeof projects)[0]>(
      null
    );

  const [current, setCurrent] =
    useState(0);

  useEffect(() => {

    const interval =
      setInterval(() => {

        setCurrent((prev) =>
          prev === projects.length - 1
            ? 0
            : prev + 1
        );

      }, 5000);

    return () =>
      clearInterval(interval);

  }, []);

  return (
    <>
      <section
        id="projects"
        className="h-full px-6 py-24 md:py-32"
>

        <div className="mb-16">

          <p className="text-blue-400 text-sm mb-4">
            Proyectos
          </p>

          <h2 className="text-5xl font-bold">
            Algunos proyectos destacados.
          </h2>

        </div>

        <div className="relative overflow-hidden">

          <AnimatePresence mode="wait">

            <motion.div
              key={current}
              initial={{
                opacity: 0,
                x: 80,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -80,
              }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
              }}
              onClick={() =>
                setSelectedProject(
                  projects[current]
                )
              }
              className="h-full min-h-[435px] flex flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.03] p-8 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300"            >

              {/* IMAGEN */}

              <div className="relative h-56 rounded-2xl overflow-hidden mb-8 border border-white/5">

                {projects[current].image ? (

                  <Image
                    src={
                      projects[current].image
                    }
                    alt={
                      projects[current].title
                    }
                    fill
                    className="object-cover"
                  />

                ) : (

                  <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800" />

                )}

              </div>

              <h3 className="text-3xl font-semibold mb-4">
                {projects[current].title}
              </h3>

              <p className="text-zinc-400 leading-relaxed text-lg mb-8 max-w-3xl">
                {projects[current].description}
              </p>

              <div className="flex flex-wrap gap-3">

                {projects[current].stack.map(
                  (tech) => (

                    <div
                      key={tech}
                      className="px-4 py-2 rounded-xl bg-black/30 border border-white/10 text-zinc-300"
                    >
                      {tech}
                    </div>

                  )
                )}

              </div>

            </motion.div>

          </AnimatePresence>

          {/* INDICADORES */}

          <div className="flex items-center justify-center gap-3 mt-8">

            {projects.map((_, index) => (

              <button
                key={index}
                onClick={() =>
                  setCurrent(index)
                }
                className={`h-2 rounded-full transition-all duration-300 ${
                  current === index
                    ? "w-10 bg-white"
                    : "w-2 bg-white/20"
                }`}
              />

            ))}

          </div>

        </div>

      </section>

      {/* MODAL */}

      <AnimatePresence>

        {selectedProject && (

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
            }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md px-6 overflow-y-auto py-10"
            onClick={() =>
              setSelectedProject(null)
            }
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
              onClick={(e) =>
                e.stopPropagation()
              }
              className="relative w-full max-w-3xl rounded-3xl border border-white/10 bg-[#0f0f0f] p-8 shadow-2xl"
            >

              <button
                onClick={() =>
                  setSelectedProject(null)
                }
                className="absolute top-6 right-6 text-zinc-500 hover:text-white transition"
              >
                <X />
              </button>

              {/* IMAGEN MODAL */}

              <div className="relative h-64 rounded-2xl overflow-hidden mb-8 border border-white/5">

                {selectedProject.image ? (

                  <Image
                    src={
                      selectedProject.image
                    }
                    alt={
                      selectedProject.title
                    }
                    fill
                    className="object-cover"
                  />

                ) : (

                  <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800" />

                )}

              </div>

              <h3 className="text-4xl font-bold mb-6">
                {selectedProject.title}
              </h3>

              <p className="text-zinc-400 leading-relaxed text-lg mb-8">
                {
                  selectedProject.longDescription
                }
              </p>

              <div className="flex flex-wrap gap-3 mb-8">

                {selectedProject.stack.map(
                  (tech) => (

                    <div
                      key={tech}
                      className="px-4 py-2 rounded-xl border border-white/10 bg-black/20 text-zinc-300"
                    >
                      {tech}
                    </div>

                  )
                )}

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