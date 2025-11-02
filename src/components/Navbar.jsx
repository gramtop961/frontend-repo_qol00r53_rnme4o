import React from 'react';
import { Rocket } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="group inline-flex items-center gap-2">
            <span className="inline-flex items-center justify-center rounded-md bg-gradient-to-tr from-indigo-500 to-cyan-400 p-2 text-slate-900">
              <Rocket className="h-4 w-4" />
            </span>
            <span className="text-sm font-semibold tracking-wide text-slate-100 group-hover:text-white transition">Coder Portfolio</span>
          </a>

          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#home" className="text-slate-300 hover:text-white transition">Home</a>
            <a href="#projects" className="text-slate-300 hover:text-white transition">Projects</a>
            <a href="#contact" className="text-slate-300 hover:text-white transition">Contact</a>
            <a
              href="#projects"
              className="ml-2 inline-flex items-center rounded-md bg-gradient-to-r from-indigo-500 to-cyan-400 px-3 py-2 text-xs font-semibold text-slate-900 shadow hover:opacity-95 transition"
            >
              Hire Me
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
