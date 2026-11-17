"use client";

import { useEffect, useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Workflow } from "lucide-react";

import {
  FaReact,
  FaAngular,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaPython,
  FaPhp,
  FaAws,
} from "react-icons/fa";

import {
  SiFlutter,
  SiDart,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiShadcnui,
  SiExpress,
  SiPrisma,
  SiZod,
  SiIonic,
  SiAndroidstudio,
  SiPostgresql,
  SiSupabase,
  SiMysql,
  SiSqlite,
  SiMongodb,
  SiRedis,
  SiPostman,
  SiVercel,
  SiAnthropic,
  SiOpenai,
  SiWhatsapp,
} from "react-icons/si";

type Tech = { name: string; icon: ReactNode };

const stack: Record<string, Tech[]> = {
  Frontend: [
    { name: "React", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Angular", icon: <FaAngular /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "TailwindCSS", icon: <SiTailwindcss /> },
    { name: "shadcn/ui", icon: <SiShadcnui /> },
  ],

  Backend: [
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "Python", icon: <FaPython /> },
    { name: "PHP", icon: <FaPhp /> },
    { name: "Prisma", icon: <SiPrisma /> },
    { name: "Zod", icon: <SiZod /> },
  ],

  Mobile: [
    { name: "Flutter", icon: <SiFlutter /> },
    { name: "Dart", icon: <SiDart /> },
    { name: "Ionic", icon: <SiIonic /> },
    { name: "Android Studio", icon: <SiAndroidstudio /> },
  ],

  "Bases de datos": [
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "Supabase", icon: <SiSupabase /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "SQLite", icon: <SiSqlite /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Redis (Upstash)", icon: <SiRedis /> },
  ],

  "IA & Automatización": [
    { name: "Claude API", icon: <SiAnthropic /> },
    { name: "OpenAI API", icon: <SiOpenai /> },
    { name: "Kommo CRM", icon: <Workflow /> },
    { name: "WhatsApp", icon: <SiWhatsapp /> },
  ],

  "Cloud & Herramientas": [
    { name: "Vercel", icon: <SiVercel /> },
    { name: "AWS S3", icon: <FaAws /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "Postman", icon: <SiPostman /> },
  ],
};

const categories = Object.entries(stack);

export default function Stack() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % categories.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [paused]);

  const [category, techs] = categories[current];

  return (
    <section id="stack" className="max-w-6xl mx-auto px-6 py-24 md:py-32">
      <div className="mb-10">
        <p className="text-blue-400 text-sm mb-4">Stack</p>

        <h2 className="text-4xl md:text-5xl font-bold">
          Tecnologías que utilizo.
        </h2>
      </div>

      {/* PESTAÑAS */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map(([name], index) => (
          <button
            key={name}
            type="button"
            onClick={() => setCurrent(index)}
            aria-pressed={current === index}
            className={`rounded-xl px-4 py-2 text-sm transition ${
              current === index
                ? "bg-white text-black"
                : "border border-white/10 text-zinc-400 hover:bg-white/10 hover:text-white"
            }`}
          >
            {name}
          </button>
        ))}
      </div>

      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={category}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-10 hover:bg-white/[0.05] hover:border-white/20 transition-colors duration-300"
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-8">
              {category}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {techs.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 px-5 py-5 text-zinc-300 hover:bg-white/[0.03] transition"
                >
                  <div className="text-3xl">{tech.icon}</div>

                  <span className="font-medium text-lg">{tech.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
