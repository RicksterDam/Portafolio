const experiences = [
  {
    company: "Abbita",
    role: "Automation & AI Developer",
    period: "2024 - Actualidad",
    description:
      "Desarrollo de bots conversacionales, automatización de procesos empresariales, integraciones IA y personalización de CRM.",
  },
  {
    company: "HackaTec",
    role: "Participante Nacional",
    period: "2023",
    description:
      "Desarrollo de proyecto de turismo inteligente basado en inteligencia artificial y experiencia de usuario.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="max-w-6xl mx-auto px-6 py-32"
    >
      <div className="mb-16">
        <p className="text-blue-400 text-sm mb-4">
          Experiencia
        </p>

        <h2 className="text-5xl font-bold">
          Experiencia profesional.
        </h2>
      </div>

      <div className="flex flex-col gap-8">

        {experiences.map((exp) => (
          <div
            key={exp.company}
            className="rounded-3xl border border-white/10 bg-white/5 p-8"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

              <div>
                <h3 className="text-2xl font-semibold">
                  {exp.company}
                </h3>

                <p className="text-zinc-400">
                  {exp.role}
                </p>
              </div>

              <div className="text-zinc-500 text-sm">
                {exp.period}
              </div>
            </div>

            <p className="text-zinc-400 leading-relaxed">
              {exp.description}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}