import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <div className="scroll-smooth bg-white text-slate-900">
      {/* Simple top nav */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="font-manrope text-lg font-bold tracking-tight">
            Alex <span className="text-indigo-600">Carter</span>
          </a>
          <div className="hidden gap-6 text-sm text-slate-700 sm:flex">
            <a href="#about" className="hover:text-indigo-600">About</a>
            <a href="#skills" className="hover:text-indigo-600">Skills</a>
            <a href="#portfolio" className="hover:text-indigo-600">Work</a>
            <a href="#testimonials" className="hover:text-indigo-600">Testimonials</a>
            <a href="#contact" className="rounded-lg bg-slate-900 px-4 py-2 font-medium text-white hover:bg-slate-800">Contact</a>
          </div>
        </nav>
      </header>

      <main className="pt-16">
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>

      <footer className="border-t border-slate-200 py-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Alex Carter. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <a href="#home" className="hover:text-indigo-600">Top</a>
            <a href="#portfolio" className="hover:text-indigo-600">Portfolio</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
