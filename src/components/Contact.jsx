import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! Your message has been sent.');
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-manrope text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Let’s build something great</h2>
        <p className="mt-3 text-slate-600">Tell me about your project and I’ll get back to you within 1–2 business days.</p>
      </div>

      <form onSubmit={onSubmit} className="mx-auto mt-10 max-w-2xl space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Name</label>
            <input type="text" name="name" required className="w-full rounded-xl border border-slate-200 bg-white/90 px-4 py-3 shadow-sm outline-none transition placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-600" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
            <input type="email" name="email" required className="w-full rounded-xl border border-slate-200 bg-white/90 px-4 py-3 shadow-sm outline-none transition placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-600" />
          </div>
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">Message</label>
          <textarea name="message" rows="5" required className="w-full rounded-xl border border-slate-200 bg-white/90 px-4 py-3 shadow-sm outline-none transition placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-600" />
        </div>

        <div className="flex items-center justify-between">
          <button type="submit" className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:scale-[1.02] hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600">
            <Send className="h-4 w-4" /> Send Message
          </button>
          <p className="text-sm text-green-600">{status}</p>
        </div>
      </form>
    </section>
  );
};

export default Contact;
