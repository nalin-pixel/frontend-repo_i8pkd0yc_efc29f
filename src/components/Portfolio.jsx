import React from 'react';

const projects = [
  {
    name: 'SaaS Landing',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop',
    url: '#',
  },
  {
    name: 'Creative Studio',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1600&auto=format&fit=crop',
    url: '#',
  },
  {
    name: 'E‑commerce UI',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1600&auto=format&fit=crop',
    url: '#',
  },
  {
    name: 'Portfolio Redesign',
    image: 'https://images.unsplash.com/photo-1493119508027-2b584f234d6c?q=80&w=1600&auto=format&fit=crop',
    url: '#',
  },
  {
    name: 'Tech Blog',
    image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=1600&auto=format&fit=crop',
    url: '#',
  },
  {
    name: 'Product Microsite',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1600&auto=format&fit=crop',
    url: '#',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-16">
      <h2 className="text-center font-manrope text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Selected Work</h2>
      <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">A few recent projects and experiments.</p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <a key={p.name} href={p.url} className="group block overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:shadow-md">
            <div className="aspect-[16/10] w-full overflow-hidden">
              <img src={p.image} alt={p.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
            </div>
            <div className="flex items-center justify-between p-4">
              <h3 className="font-semibold text-slate-900">{p.name}</h3>
              <span className="text-sm text-indigo-600">View →</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
