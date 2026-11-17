
"use client";

import { useState, type FormEvent } from "react";
import { MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export default function WhatsAppContact() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const canSend = name.trim() !== "" && message.trim() !== "";

  const handleWhatsApp = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!canSend) return;

    const lines = [
      `Hola Ricardo, soy ${name.trim()}`,
      subject.trim() && `Asunto:\n${subject.trim()}`,
      `Mensaje:\n${message.trim()}`,
    ].filter(Boolean);

    const text = encodeURIComponent(lines.join("\n\n"));

    window.open(
      `https://wa.me/${site.whatsapp}?text=${text}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-6 py-32"
    >
      <div className="mb-16">
        <p className="text-blue-500 text-sm uppercase tracking-[0.3em] mb-4">
          Contacto
        </p>

        <h2 className="text-5xl font-bold mb-6">
          Generar mensaje para WhatsApp.
        </h2>

        <p className="text-zinc-400 text-lg max-w-2xl">
          Llena los campos y se abrirá WhatsApp
          automáticamente con un mensaje listo para enviar.
        </p>
      </div>

      <form
        onSubmit={handleWhatsApp}
        className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-12"
      >

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">

          <div>
            <label htmlFor="wa-name" className="block text-sm text-zinc-500 uppercase tracking-[0.25em] mb-4">
              Nombre
            </label>

            <input
              id="wa-name"
              type="text"
              required
              placeholder="Tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-black/20 px-6 py-5 outline-none transition focus:border-white/30"
            />
          </div>

          <div>
            <label htmlFor="wa-subject" className="block text-sm text-zinc-500 uppercase tracking-[0.25em] mb-4">
              Asunto
            </label>

            <input
              id="wa-subject"
              type="text"
              placeholder="Ej. API, portfolio, landing..."
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-black/20 px-6 py-5 outline-none transition focus:border-white/30"
            />
          </div>

        </div>

        <div className="mb-8">
          <label htmlFor="wa-message" className="block text-sm text-zinc-500 uppercase tracking-[0.25em] mb-4">
            Mensaje
          </label>

          <textarea
            id="wa-message"
            required
            rows={8}
            placeholder="Cuéntame brevemente qué necesitas..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-black/20 px-6 py-5 outline-none transition resize-none focus:border-white/30"
          />
        </div>

        <button
          type="submit"
          disabled={!canSend}
          className="flex w-full items-center justify-center gap-3 rounded-2xl bg-blue-600 px-6 py-5 text-lg font-medium transition hover:bg-blue-500 hover:scale-[1.01] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-blue-600 disabled:hover:scale-100"
        >
          <MessageCircle size={22} />
          Enviar por WhatsApp
        </button>

      </form>
    </section>
  );
}

