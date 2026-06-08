import Hero from "@/components/sections/hero";
import Navbar from "@/components/shared/navbar";
import About from "@/components/sections/about";
import Projects from "@/components/sections/projects";
import Experience from "@/components/sections/experience";
import Stack from "@/components/sections/stack";
import Contact from "@/components/sections/contact";
import WhatsAppContact from "@/components/sections/whatsapp-contact";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Stack />
      <WhatsAppContact />
    </main>
  );
}