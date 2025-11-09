import React from 'react';
import { Code2, Wrench, Search } from 'lucide-react';

const skills = [
  { icon: Code2, title: 'Front‑End', items: ['HTML', 'CSS', 'JavaScript'] },
  { icon: Wrench, title: 'CMS & Back‑End', items: ['WordPress', 'PHP'] },
  { icon: Search, title: 'SEO', items: ['On‑Page', 'Technical', 'Analytics'] },
];

const Skills = () => {
  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-16">
      <h2 className="text-center font-manrope text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Skills</h2>
      <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">A balanced stack across UI, CMS, and search.</p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {skills.map(({ icon: Icon, title, items }) => (
          <div key={title} className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:shadow-md">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-indigo-50 p-3 text-indigo-600">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-slate-900">{title}</h3>
            </div>
            <ul className="mt-4 space-y-2 text-slate-600">
              {items.map((s) => (
                <li key={s} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
