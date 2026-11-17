import { Mail, ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section className="min-h-[85vh] flex items-center py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <p className="text-blue-400 font-medium mb-4">
            Full Stack Developer & AI Automation
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6">
            Ricardo González Ramos
          </h1>

          <p className="text-zinc-400 text-lg md:text-xl leading-relaxed md:leading-loose max-w-2xl">
            Desarrollo aplicaciones modernas, automatizaciones
            e integraciones de inteligencia artificial utilizando
            tecnologías frontend, backend y móviles.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            {site.github && (
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white text-black px-5 py-3 rounded-xl font-medium hover:opacity-90 transition"
              >
                GitHub
                <ArrowUpRight size={18} />
              </a>
            )}

            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-2 border border-zinc-800 px-5 py-3 rounded-xl hover:bg-zinc-900 transition"
            >
              <Mail size={18} />
              Contacto
            </a>

            {site.linkedin && (
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-zinc-800 px-5 py-3 rounded-xl hover:bg-zinc-900 transition"
              >
                LinkedIn
                <ArrowUpRight size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}