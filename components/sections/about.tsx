export default function About() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-6 py-32"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Left Card */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <p className="text-blue-400 text-sm mb-4">
            Sobre mí
          </p>

          <h2 className="text-4xl font-bold mb-6">
            Desarrollo soluciones modernas y escalables.
          </h2>

          <p className="text-zinc-400 leading-relaxed mb-4">
            Soy desarrollador full stack con experiencia en
            aplicaciones web, móviles y automatización de procesos
            mediante inteligencia artificial.
          </p>

          <p className="text-zinc-400 leading-relaxed">
            Actualmente trabajo desarrollando bots conversacionales,
            integraciones API y personalización de sistemas CRM
            enfocados en automatización empresarial.
          </p>
        </div>

        {/* Right Side */}
        <div className="flex flex-col gap-8">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <p className="text-blue-400 text-sm mb-4">
              Experiencia
            </p>

            <h3 className="text-2xl font-semibold mb-3">
              Abbita
            </h3>

            <p className="text-zinc-400 leading-relaxed">
              Desarrollo de bots conversacionales,
              automatización de procesos internos,
              integraciones de IA y adaptación de CRM
              para gestión empresarial.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <p className="text-blue-400 text-sm mb-4">
              Tecnologías
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                "React",
                "Angular",
                "Node.js",
                "Flutter",
                "Python",
                "TypeScript",
                "PostgreSQL",
                "Docker",
              ].map((tech) => (
                <div
                  key={tech}
                  className="px-4 py-2 rounded-xl border border-white/10 bg-black/20 text-sm text-zinc-300"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}