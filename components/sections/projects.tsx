"use client";

import { useEffect, useState, type ComponentType } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  ArrowUpRight,
  Bot,
  Calculator,
  Home,
  MessageCircle,
} from "lucide-react";

import Image, { type StaticImageData } from "next/image";

import jatikImg from "@/lib/img/jatik.png";
import misanadiImg from "@/lib/img/misanadi.png";
import abbitaImg from "@/lib/img/abbita.png";

type Project = {
  title: string;
  tag: string;
  description: string;
  longDescription: string;
  highlights: string[];
  stack: string[];
  // Logo: se muestra completo sobre su color de fondo.
  // Foto: llena el recuadro (object-cover).
  image?: StaticImageData;
  imageFit?: "logo" | "photo";
  imageBg?: string;
  // Si no hay imagen, se muestra este ícono sobre un degradado.
  icon: ComponentType<{ size?: number; className?: string }>;
  // Opcionales: si están vacíos, el botón no se muestra.
  demoUrl?: string;
  repoUrl?: string;
};

const projects: Project[] = [
  {
    title: "Abbita Inmobiliaria",
    tag: "Web + Panel administrativo",
    description:
      "Sitio inmobiliario con catálogo de propiedades y un panel de administración completo con roles y permisos.",
    longDescription:
      "Plataforma web para Abbita Inmobiliaria: catálogo público para comprar, rentar y vender propiedades con páginas de detalle y mapa, más un panel administrativo para gestionar propiedades, asesores, banners, zonas y catálogos.",
    highlights: [
      "Catálogo público con filtros y página por propiedad",
      "Panel admin con usuarios, roles y permisos",
      "Carga de imágenes a AWS S3 y geocodificación de ubicaciones",
      "Base de datos MySQL modelada con Prisma",
    ],
    stack: ["Next.js", "TypeScript", "Prisma", "MySQL", "AWS S3", "TailwindCSS", "Zod"],
    image: abbitaImg,
    imageFit: "logo",
    imageBg: "#033448",
    icon: Home,
  },
  {
    title: "IA para Salesbot de Kommo",
    tag: "Automatización con IA",
    description:
      "Asistente con Claude que atiende leads de WhatsApp en Kommo, los califica y los pasa a un asesor.",
    longDescription:
      "Integración serverless para el Salesbot de Kommo de Abbita: la IA responde a los clientes que llegan por anuncios, recoge forma de pago, precalificación, enganche y propósito de compra, y decide cuándo pasar el lead a un asesor.",
    highlights: [
      "Respuestas con Claude (Anthropic) dentro del flujo del Salesbot",
      "Calificación automática del lead: caliente, tibio o frío",
      "Notas y etiquetas automáticas en el CRM",
      "Memoria de conversación con Upstash Redis",
    ],
    stack: ["TypeScript", "Claude API", "Kommo", "Upstash Redis", "Vercel", "Zod"],
    icon: Bot,
  },
  {
    title: "Sistema de Gestión Contable",
    tag: "Aplicación web",
    description:
      "Sistema para un despacho contable: clientes, trabajadores, actividades con evidencias y reportes.",
    longDescription:
      "Aplicación web con sitio público y un sistema interno con roles de supervisor y trabajador para asignar actividades, subir evidencias, gestionar clientes y generar reportes.",
    highlights: [
      "Roles de supervisor y trabajador",
      "Actividades y trabajos extra con evidencias",
      "Autenticación y seguridad por filas (RLS) con Supabase",
      "Interfaz con shadcn/ui y validaciones con Zod",
    ],
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "shadcn/ui", "Zod"],
    icon: Calculator,
  },
  {
    title: "Bot inmobiliario con ChatGPT",
    tag: "Chatbot",
    description:
      "Bot para Kommo que responde por WhatsApp y busca propiedades del catálogo con OpenAI.",
    longDescription:
      "Servidor que conecta Kommo y WhatsApp con la API de OpenAI para responder preguntas de clientes y recomendar propiedades usando búsqueda difusa sobre el catálogo.",
    highlights: [
      "Respuestas generadas con OpenAI",
      "Búsqueda de propiedades con Fuse.js",
      "Integración con Kommo y WhatsApp",
    ],
    stack: ["Node.js", "Express", "OpenAI", "Kommo", "WhatsApp"],
    icon: MessageCircle,
  },
  {
    title: "Jatik · Turismo inteligente",
    tag: "HackaTec",
    description:
      "Proyecto de turismo inteligente con IA presentado en HackaTec (Innova TecNM).",
    longDescription:
      "Proyecto tecnológico presentado en HackaTec enfocado en turismo inteligente, utilizando IA para mejorar las recomendaciones y la experiencia del usuario.",
    highlights: [
      "Recomendaciones turísticas con IA",
      "Enfoque en experiencia de usuario",
    ],
    stack: ["Angular", "Python", "IA"],
    image: jatikImg,
    imageFit: "logo",
    imageBg: "#f7f7f7",
    icon: Bot,
  },
  {
    title: "Misanadi · Mi Salud Nacional Digital",
    tag: "App móvil",
    description:
      "Aplicación móvil multiplataforma con Flutter e integración de APIs REST en tiempo real.",
    longDescription:
      "Aplicación móvil multiplataforma desarrollada con Flutter para la administración de información de salud y su sincronización en tiempo real mediante APIs REST.",
    highlights: [
      "Android e iOS con una sola base de código",
      "Sincronización mediante APIs REST",
    ],
    stack: ["Flutter", "Dart", "REST API"],
    image: misanadiImg,
    imageFit: "logo",
    imageBg: "#faecdb",
    icon: Bot,
  },
];

function ProjectImage({
  project,
  sizes,
}: {
  project: Project;
  sizes: string;
}) {
  const Icon = project.icon;

  if (!project.image) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-950/60 via-zinc-900 to-zinc-950">
        <Icon size={56} className="text-blue-300/70" />
      </div>
    );
  }

  if (project.imageFit === "logo") {
    return (
      <div
        className="relative h-full w-full"
        style={{ backgroundColor: project.imageBg }}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes={sizes}
          className="object-contain p-6"
        />
      </div>
    );
  }

  return (
    <Image
      src={project.image}
      alt={project.title}
      fill
      sizes={sizes}
      className="object-cover"
    />
  );
}

const MAX_CHIPS = 4;

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  // Cerrar con Escape y bloquear el scroll del fondo mientras el modal está abierto.
  useEffect(() => {
    if (!selected) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [selected]);

  return (
    <>
      <section
        id="projects"
        className="max-w-6xl mx-auto px-6 py-24 md:py-32"
      >
        <div className="mb-16">
          <p className="text-blue-400 text-sm mb-4">Proyectos</p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Algunos proyectos destacados.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const extra = project.stack.length - MAX_CHIPS;

            return (
              <button
                key={project.title}
                type="button"
                onClick={() => setSelected(project)}
                className="group flex flex-col text-left rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:bg-white/[0.05] hover:border-white/20 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/5 mb-5">
                  <ProjectImage
                    project={project}
                    sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                  />
                </div>

                <p className="text-xs uppercase tracking-[0.2em] text-blue-400 mb-2">
                  {project.tag}
                </p>

                <h3 className="text-xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-zinc-400 leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.stack.slice(0, MAX_CHIPS).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-black/30 border border-white/10 text-sm text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}

                  {extra > 0 && (
                    <span className="px-3 py-1 rounded-lg border border-white/10 text-sm text-zinc-500">
                      +{extra}
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-start md:items-center justify-center bg-black/70 backdrop-blur-md px-4 overflow-y-auto py-10"
            onClick={() => setSelected(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl rounded-3xl border border-white/10 bg-[#0f0f0f] p-6 md:p-8 shadow-2xl"
            >
              <button
                type="button"
                autoFocus
                aria-label="Cerrar"
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-10 rounded-full bg-black/60 p-2 text-zinc-400 hover:text-white transition"
              >
                <X size={20} />
              </button>

              <div className="relative aspect-video w-full overflow-hidden rounded-2xl mb-8 border border-white/5">
                <ProjectImage
                  project={selected}
                  sizes="(min-width: 768px) 720px, 100vw"
                />
              </div>

              <p className="text-xs uppercase tracking-[0.2em] text-blue-400 mb-2">
                {selected.tag}
              </p>

              <h3
                id="project-modal-title"
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                {selected.title}
              </h3>

              <p className="text-zinc-400 leading-relaxed text-lg mb-6">
                {selected.longDescription}
              </p>

              <ul className="space-y-2 mb-8">
                {selected.highlights.map((item) => (
                  <li key={item} className="flex gap-3 text-zinc-300">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3 mb-8">
                {selected.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-xl border border-white/10 bg-black/20 text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {(selected.demoUrl || selected.repoUrl) && (
                <div className="flex flex-wrap gap-4">
                  {selected.demoUrl && (
                    <a
                      href={selected.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-white text-black px-5 py-3 rounded-xl font-medium hover:opacity-90 transition"
                    >
                      Ver proyecto
                      <ArrowUpRight size={18} />
                    </a>
                  )}

                  {selected.repoUrl && (
                    <a
                      href={selected.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 border border-white/10 px-5 py-3 rounded-xl hover:bg-white/10 transition"
                    >
                      GitHub
                      <ArrowUpRight size={18} />
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
