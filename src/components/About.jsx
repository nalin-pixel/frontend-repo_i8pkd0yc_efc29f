import React from 'react';
import { User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative mx-auto max-w-6xl scroll-mt-20 px-6 py-20">
      <div className="grid items-center gap-10 md:grid-cols-2">
        {/* Headshot */}
        <div className="order-2 md:order-1">
          <div className="relative mx-auto h-72 w-72 overflow-hidden rounded-3xl ring-1 ring-slate-200 shadow-lg">
            {/* Placeholder avatar block; can be replaced with a real headshot */}
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-sky-100">
              <User className="h-16 w-16 text-indigo-500" />
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="order-1 md:order-2">
          <h2 className="font-manrope text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">About Me</h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            I’m a web developer focused on crafting clean, performant, and accessible websites. With experience across design, development, and SEO, I build modern interfaces, optimize Core Web Vitals, and ship projects that deliver results. I’ve worked with startups, agencies, and entrepreneurs to launch websites that look great and load fast.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {['Responsive Design', 'Performance', 'Accessibility', 'SEO Strategy'].map((pill) => (
              <span key={pill} className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700 ring-1 ring-slate-200">{pill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
