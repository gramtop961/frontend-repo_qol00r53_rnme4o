import React from 'react';
import Spline from '@splinetool/react-spline';
import { Github, Mail, ExternalLink } from 'lucide-react';

export default function Hero3D() {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* soft glow gradient, non-blocking */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.25),transparent_45%),radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.18),transparent_40%)]" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            Full‑Stack Developer
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            I design and build production‑ready web apps end‑to‑end — from UX and pixel‑perfect UIs to scalable APIs
            and databases. Explore case studies that break down design decisions, architecture, and code.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-indigo-500 to-cyan-400 px-5 py-2.5 font-semibold text-slate-900 shadow hover:opacity-95 transition"
            >
              View Projects
              <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href="https://github.com" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-slate-700/60 bg-slate-900/50 px-4 py-2.5 text-slate-200 hover:bg-slate-800/70 transition"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-slate-700/60 bg-slate-900/50 px-4 py-2.5 text-slate-200 hover:bg-slate-800/70 transition"
            >
              <Mail className="h-4 w-4" /> Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
