import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay to improve contrast without blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/90" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 text-center sm:pt-36">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm text-slate-600 shadow-sm ring-1 ring-slate-200 backdrop-blur">
          <Rocket className="h-4 w-4 text-indigo-600" />
          <span>Available for freelance projects</span>
        </div>

        <h1 className="mt-6 font-manrope text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
          Hi, I’m <span className="text-indigo-600">Alex Carter</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
          Building fast, modern, and SEO-friendly websites. I craft clean UIs, performant code, and delightful digital experiences.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a href="#portfolio" className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:scale-[1.02] hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600">
            View Work
          </a>
          <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:scale-[1.02] hover:bg-slate-50">
            Let’s Talk
          </a>
        </div>

        <a href="#about" className="mt-12 hidden items-center gap-2 text-slate-500 sm:inline-flex">
          <ArrowDown className="h-4 w-4" />
          <span>Scroll</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
