export default function Navbar() {
  return (
    <header className="fixed bottom-5 left-1/2 z-50 w-[92%] max-w-md -translate-x-1/2 md:top-6 md:bottom-auto md:w-auto md:max-w-none">
      <nav className="flex items-center justify-between gap-1 rounded-2xl border border-white/10 bg-[#111]/80 px-2 py-2 shadow-2xl backdrop-blur-xl md:justify-center">
        <a href="#" className="rounded-xl px-3 py-2 text-xs text-white transition hover:bg-white/10 md:px-4 md:text-sm">
          Inicio
        </a>

        <a href="#about" className="rounded-xl px-3 py-2 text-xs text-zinc-400 transition hover:bg-white/10 hover:text-white md:px-4 md:text-sm">
          Sobre mí
        </a>

        <a href="#projects" className="rounded-xl px-3 py-2 text-xs text-zinc-400 transition hover:bg-white/10 hover:text-white md:px-4 md:text-sm">
          Proyectos
        </a>

        <a href="#experience" className="hidden rounded-xl px-3 py-2 text-xs text-zinc-400 transition hover:bg-white/10 hover:text-white sm:block md:px-4 md:text-sm">
          Experiencia
        </a>

        <a href="#contact" className="rounded-xl px-3 py-2 text-xs text-zinc-400 transition hover:bg-white/10 hover:text-white md:px-4 md:text-sm">
          Contacto
        </a>
      </nav>
    </header>
  );
}