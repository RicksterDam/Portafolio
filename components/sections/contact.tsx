export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-4xl mx-auto px-6 py-32 text-center"
    >
      <p className="text-blue-400 text-sm mb-4">
        Contacto
      </p>

      <h2 className="text-5xl font-bold mb-6">
        Construyamos algo increíble.
      </h2>

      <p className="text-zinc-400 text-lg mb-10">
        Estoy disponible para oportunidades,
        colaboraciones y proyectos freelance.
      </p>

      <div className="flex flex-wrap justify-center gap-4">

        <a
          href="mailto:ricardogonzalez040103@gmail.com"
          className="bg-white text-black px-6 py-3 rounded-2xl font-medium hover:opacity-90 transition"
        >
          Enviar correo
        </a>

        <a
          href="https://github.com/"
          target="_blank"
          className="border border-white/10 px-6 py-3 rounded-2xl hover:bg-white/10 transition"
        >
          GitHub
        </a>

        <a
          href="#"
          className="border border-white/10 px-6 py-3 rounded-2xl hover:bg-white/10 transition"
        >
          LinkedIn
        </a>

      </div>
    </section>
  );
}