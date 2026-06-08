export default function Navbar() {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex items-center gap-1 border border-white/10 bg-white/5 backdrop-blur-xl rounded-2xl px-2 py-2 shadow-2xl">
        <a
          href="#"
          className="px-4 py-2 rounded-xl text-sm text-white hover:bg-white/10 transition"
        >
          Inicio
        </a>

        <a
          href="#about"
          className="px-4 py-2 rounded-xl text-sm text-zinc-400 hover:text-white hover:bg-white/10 transition"
        >
          Sobre mí
        </a>

        <a
          href="#projects"
          className="px-4 py-2 rounded-xl text-sm text-zinc-400 hover:text-white hover:bg-white/10 transition"
        >
          Proyectos
        </a>

         <a
          href="#experience"
          className="px-4 py-2 rounded-xl text-sm text-zinc-400 hover:text-white hover:bg-white/10 transition"
        >
          Experiencia
        </a>

        <a
          href="#contact"
          className="px-4 py-2 rounded-xl text-sm text-zinc-400 hover:text-white hover:bg-white/10 transition"
        >
          Contacto
        </a>
      </nav>
    </header>
  );
}