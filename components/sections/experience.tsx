"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image, { type StaticImageData } from "next/image";

import hackatecImg from "@/lib/img/hackatec.jpg";
import abbitaImg from "@/lib/img/abbita.png";

type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
  image: StaticImageData;
  // Logo: se muestra completo sobre su color de fondo. Foto: llena el recuadro.
  imageFit: "logo" | "photo";
  imageBg?: string;
};

const experiences: Experience[] = [
  {
    company: "Abbita Inmobiliaria",
    role: "Automation & AI Developer",
    period: "Nov. 2025 - Actualidad",
    description:
      "Desarrollo del sitio web y panel administrativo, bots conversacionales con IA para WhatsApp, automatización de procesos e integraciones con el CRM Kommo.",
    image: abbitaImg,
    imageFit: "logo",
    imageBg: "#033448",
  },
  {
    company: "HackaTec · Innova TecNM",
    role: "Participante nacional",
    period: "2024",
    description:
      "Desarrollo de Jatik, un proyecto de turismo inteligente basado en inteligencia artificial y experiencia de usuario.",
    image: hackatecImg,
    imageFit: "photo",
  },
];

export default function Experience() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % experiences.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [paused]);

  const exp = experiences[current];

  return (
    <section
      id="experience"
      className="max-w-6xl mx-auto px-6 py-24 md:py-32"
    >
      <div className="mb-16">
        <p className="text-blue-400 text-sm mb-4">Experiencia</p>

        <h2 className="text-4xl md:text-5xl font-bold">
          Experiencia profesional.
        </h2>
      </div>

      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8 hover:bg-white/[0.05] hover:border-white/20 transition-colors duration-300"
          >
            {/* IMAGEN: proporción 3:2, igual que la foto, para no recortarla */}
            <div
              className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl border border-white/10"
              style={exp.imageBg ? { backgroundColor: exp.imageBg } : undefined}
            >
              <Image
                src={exp.image}
                alt={exp.company}
                fill
                sizes="(min-width: 1024px) 520px, 100vw"
                className={
                  exp.imageFit === "logo"
                    ? "object-contain p-10"
                    : "object-cover"
                }
              />
            </div>

            {/* TEXTO */}
            <div>
              <p className="text-zinc-500 text-sm mb-3">{exp.period}</p>

              <h3 className="text-3xl font-semibold">{exp.company}</h3>

              <p className="text-blue-400 text-lg mt-2 mb-6">{exp.role}</p>

              <p className="text-zinc-400 leading-relaxed text-lg">
                {exp.description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* INDICADORES */}
        <div className="flex items-center justify-center gap-3 mt-8">
          {experiences.map((item, index) => (
            <button
              key={item.company}
              type="button"
              aria-label={`Ver ${item.company}`}
              aria-current={current === index}
              onClick={() => setCurrent(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                current === index ? "w-10 bg-white" : "w-2 bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
