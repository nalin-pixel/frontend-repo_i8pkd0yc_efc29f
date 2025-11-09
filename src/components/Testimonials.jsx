import React from 'react';

const testimonials = [
  {
    name: 'Sarah Nguyen',
    role: 'Founder, Bloom Studio',
    quote: 'Alex delivered a beautiful site that loads fast and converts. Communication was effortless from start to finish.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'James Parker',
    role: 'CMO, NorthPeak',
    quote: 'Thoughtful design, clean code, and measurable SEO wins. Our organic traffic grew 42% in 3 months.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Elena Rossi',
    role: 'Product Lead, Nova',
    quote: 'Pixel-perfect implementation and a joy to collaborate with. Highly recommend for Webflow/WordPress work.',
    image: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-16">
      <h2 className="text-center font-manrope text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Testimonials</h2>
      <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">Kind words from clients and collaborators.</p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <div key={t.name} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="flex items-center gap-3">
              <img src={t.image} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
              <div>
                <p className="font-semibold text-slate-900">{t.name}</p>
                <p className="text-sm text-slate-500">{t.role}</p>
              </div>
            </div>
            <p className="mt-4 text-slate-700">“{t.quote}”</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
