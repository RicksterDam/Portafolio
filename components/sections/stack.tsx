const stack = {
  Frontend: ["React", "Angular", "Next.js", "TailwindCSS"],
  Backend: ["Node.js", "Express", "PHP", "Python"],
  Mobile: ["Flutter", "Ionic", "Android Studio"],
  Database: ["PostgreSQL", "MySQL", "SQLite", "MongoDB"],
  Tools: ["Git", "Docker", "Postman", "REST APIs"],
};

export default function Stack() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-32">
      <div className="mb-16">
        <p className="text-blue-400 text-sm mb-4">
          Stack
        </p>

        <h2 className="text-5xl font-bold">
          Tecnologías que utilizo.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {Object.entries(stack).map(([category, techs]) => (
          <div
            key={category}
            className="rounded-3xl border border-white/10 bg-white/5 p-8"
          >
            <h3 className="text-2xl font-semibold mb-6">
              {category}
            </h3>

            <div className="flex flex-wrap gap-3">
              {techs.map((tech) => (
                <div
                  key={tech}
                  className="px-4 py-2 rounded-xl border border-white/10 bg-black/20 text-zinc-300"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}