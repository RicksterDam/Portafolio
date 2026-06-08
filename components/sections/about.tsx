
import {
  FaReact,
  FaAngular,
  FaNodeJs,
  FaPython,
  FaDocker,
} from "react-icons/fa";

import {
  SiFlutter,
  SiTypescript,
  SiPostgresql,
} from "react-icons/si";

const technologies = [
  {
    name: "React",
    icon: <FaReact />,
  },
  {
    name: "Angular",
    icon: <FaAngular />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
  },
  {
    name: "Flutter",
    icon: <SiFlutter />,
  },
  {
    name: "Python",
    icon: <FaPython />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql />,
  },
  {
    name: "Docker",
    icon: <FaDocker />,
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-6 py-24 md:py-32"
    >

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl hover:bg-white/[0.05] transition-all duration-300">

          <p className="text-blue-400 text-sm mb-4">
            Sobre mí
          </p>

          <h2 className="text-4xl font-bold mb-6">
            Desarrollo soluciones modernas y escalables.
          </h2>

          <p className="text-zinc-400 leading-relaxed mb-4 text-lg">
            Soy desarrollador full stack con experiencia en
            aplicaciones web, móviles y automatización de procesos
            mediante inteligencia artificial.
          </p>

          <p className="text-zinc-400 leading-relaxed text-lg">
            Actualmente trabajo desarrollando bots conversacionales,
            integraciones API y personalización de sistemas CRM
            enfocados en automatización empresarial.
          </p>

        </div>

        <div className="flex flex-col gap-8">

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 hover:bg-white/[0.05] transition-all duration-300">

            <p className="text-blue-400 text-sm mb-4">
              Experiencia
            </p>

            <h3 className="text-2xl font-semibold mb-3">
              Abbita
            </h3>

            <p className="text-zinc-400 leading-relaxed text-lg">
              Desarrollo de bots conversacionales,
              automatización de procesos internos,
              integraciones de IA y adaptación de CRM
              para gestión empresarial.
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 hover:bg-white/[0.05] transition-all duration-300">

            <p className="text-blue-400 text-sm mb-6">
              Tecnologías
            </p>

            <div className="grid grid-cols-2 gap-4">

              {technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-zinc-300 hover:bg-white/[0.03] transition"
                >

                  <div className="text-xl">
                    {tech.icon}
                  </div>

                  <span className="font-medium">
                    {tech.name}
                  </span>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

