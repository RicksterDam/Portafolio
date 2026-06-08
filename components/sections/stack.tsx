
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaReact,
  FaAngular,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaPython,
  FaPhp,
} from "react-icons/fa";

import {
  SiFlutter,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiIonic,
  SiAndroidstudio,
  SiPostgresql,
  SiMysql,
  SiSqlite,
  SiMongodb,
  SiPostman,
} from "react-icons/si";

const stack = {
  Frontend: [
    {
      name: "React",
      icon: <FaReact />,
    },
    {
      name: "Angular",
      icon: <FaAngular />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
    },
    {
      name: "TailwindCSS",
      icon: <SiTailwindcss />,
    },
  ],

  Backend: [
    {
      name: "Node.js",
      icon: <FaNodeJs />,
    },
    {
      name: "Express",
      icon: <SiExpress />,
    },
    {
      name: "PHP",
      icon: <FaPhp />,
    },
    {
      name: "Python",
      icon: <FaPython />,
    },
  ],

  Mobile: [
    {
      name: "Flutter",
      icon: <SiFlutter />,
    },
    {
      name: "Ionic",
      icon: <SiIonic />,
    },
    {
      name: "Android Studio",
      icon: <SiAndroidstudio />,
    },
  ],

  Database: [
    {
      name: "PostgreSQL",
      icon: <SiPostgresql />,
    },
    {
      name: "MySQL",
      icon: <SiMysql />,
    },
    {
      name: "SQLite",
      icon: <SiSqlite />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
    },
  ],

  Tools: [
    {
      name: "Git",
      icon: <FaGitAlt />,
    },
    {
      name: "Docker",
      icon: <FaDocker />,
    },
    {
      name: "Postman",
      icon: <SiPostman />,
    },
  ],
};

const categories = Object.entries(stack);

export default function Stack() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === categories.length - 1 ? 0 : prev + 1
      );
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const [category, techs] = categories[current];

  return (
    <section className="max-w-6xl mx-auto px-6 py-24 md:py-32">

      <div className="mb-16">
        <p className="text-blue-400 text-sm mb-4">
          Stack
        </p>

        <h2 className="text-5xl font-bold">
          Tecnologías que utilizo.
        </h2>
      </div>

      <div className="relative overflow-hidden">

        <AnimatePresence mode="wait">

          <motion.div
            key={category}
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
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300"
          >

            <h3 className="text-3xl font-semibold mb-10">
              {category}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              {techs.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 px-5 py-5 text-zinc-300 hover:bg-white/[0.03] transition"
                >

                  <div className="text-3xl">
                    {tech.icon}
                  </div>

                  <span className="font-medium text-lg">
                    {tech.name}
                  </span>

                </div>
              ))}

            </div>

          </motion.div>

        </AnimatePresence>

        <div className="flex items-center justify-center gap-3 mt-8">

          {categories.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
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

