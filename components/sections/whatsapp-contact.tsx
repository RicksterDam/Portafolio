
"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppContact() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleWhatsApp = () => {
    const text = `Hola Ricardo, soy ${name}%0A%0AAsunto:%0A${subject}%0A%0AMensaje:%0A${message}`;

    const phone = "9931526919";

    window.open(
      `https://wa.me/${phone}?text=${text}`,
      "_blank"
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

      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-12">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">

          <div>
            <label className="block text-sm text-zinc-500 uppercase tracking-[0.25em] mb-4">
              Nombre
            </label>

            <input
              type="text"
              placeholder="Tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-black/20 px-6 py-5 outline-none transition focus:border-white/30"
            />
          </div>

          <div>
            <label className="block text-sm text-zinc-500 uppercase tracking-[0.25em] mb-4">
              Asunto
            </label>

            <input
              type="text"
              placeholder="Ej. API, portfolio, landing..."
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-black/20 px-6 py-5 outline-none transition focus:border-white/30"
            />
          </div>

        </div>

        <div className="mb-8">
          <label className="block text-sm text-zinc-500 uppercase tracking-[0.25em] mb-4">
            Mensaje
          </label>

          <textarea
            rows={8}
            placeholder="Cuéntame brevemente qué necesitas..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-black/20 px-6 py-5 outline-none transition resize-none focus:border-white/30"
          />
        </div>

        <button
          onClick={handleWhatsApp}
          className="flex w-full items-center justify-center gap-3 rounded-2xl bg-blue-600 px-6 py-5 text-lg font-medium transition hover:bg-blue-500 hover:scale-[1.01] active:scale-[0.99]"
        >
          <MessageCircle size={22} />
          Enviar por WhatsApp
        </button>

      </div>
    </section>
  );
}

