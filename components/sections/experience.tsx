"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import hackatecImg from "@/lib/img/hackatec.jpg";
import abbitaImg from "@/lib/img/abbita.png";

const experiences = [
  {
    company: "Abbita",
    role: "Automation & AI Developer",
    period: "2024 - Actualidad",

    description:
      "Desarrollo de bots conversacionales, automatización de procesos empresariales, integraciones IA y personalización de CRM.",

    image: abbitaImg,
  },

  {
    company: "HackaTec",
    role: "Participante Nacional",
    period: "2024",

    description:
      "Desarrollo de proyecto de turismo inteligente basado en inteligencia artificial y experiencia de usuario.",

    image: hackatecImg,
  },
];

export default function Experience() {

  const [current, setCurrent] =
    useState(0);

  useEffect(() => {

    const interval =
      setInterval(() => {

        setCurrent((prev) =>
          prev === experiences.length - 1
            ? 0
            : prev + 1
        );

      }, 5000);

    return () =>
      clearInterval(interval);

  }, []);

  return (

    <section
      id="experience"
      className="h-full px-6 py-24 md:py-32"
    >

      <div className="mb-16">

        <p className="text-blue-400 text-sm mb-4">
          Experiencia
        </p>

        <h2 className="text-5xl font-bold leading-tight">
          Experiencia profesional.
        </h2>

      </div>

      <div className="relative overflow-hidden h-full flex flex-col justify-between">

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
            className="min-h-[435px] rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300"
          >

            <div className="flex flex-col md:flex-row items-center justify-between gap-8 h-full">

              {/* TEXTO */}
              <div className="flex-1 w-full">

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">

                  <div>

                    <h3 className="text-3xl font-semibold">
                      {experiences[current].company}
                    </h3>

                    <p className="text-zinc-400 text-lg mt-2">
                      {experiences[current].role}
                    </p>

                  </div>

                  <div className="text-zinc-500 text-sm whitespace-nowrap">
                    {experiences[current].period}
                  </div>

                </div>

                <p className="text-zinc-400 leading-relaxed text-lg">
                  {experiences[current].description}
                </p>

              </div>

              {/* IMAGEN */}
              <div className="relative w-full md:w-[220px] h-[260px] rounded-2xl overflow-hidden border border-white/10 flex-shrink-0">

                <Image
                  src={experiences[current].image}
                  alt={experiences[current].company}
                  fill
                  className="object-cover"
                />

              </div>

            </div>

          </motion.div>

        </AnimatePresence>

        {/* INDICADORES */}

        <div className="flex items-center justify-center gap-3 mt-8">

          {experiences.map((_, index) => (

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
  );
}