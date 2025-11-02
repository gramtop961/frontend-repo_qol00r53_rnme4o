import React from 'react';
import { Mail, Github, ExternalLink } from 'lucide-react';

export default function ContactFooter() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900/70 to-slate-950/80 p-8">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white">Let’s build something great</h3>
            <p className="mt-2 max-w-xl text-slate-300">
              I’m open to full‑time roles and select freelance work. Share your problem space and I’ll propose an
              actionable plan with milestones, architecture, and timelines.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="mailto:you@example.com"
                className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-indigo-500 to-cyan-400 px-4 py-2.5 font-semibold text-slate-900 shadow hover:opacity-95 transition"
              >
                <Mail className="h-4 w-4" /> Email Me
              </a>
              <a
                href="https://github.com" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-slate-700/60 bg-slate-900/50 px-4 py-2.5 text-slate-200 hover:bg-slate-800/70 transition"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-md border border-slate-700/60 bg-slate-900/50 px-4 py-2.5 text-slate-200 hover:bg-slate-800/70 transition"
              >
                <ExternalLink className="h-4 w-4" /> See Work
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5">
            <dl className="space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <dt className="text-slate-400">Location</dt>
                <dd className="text-slate-200">Remote / Worldwide</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-slate-400">Availability</dt>
                <dd className="text-slate-200">Open to opportunities</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-slate-400">Focus</dt>
                <dd className="text-slate-200">Full‑stack web apps</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-6 text-xs text-slate-400 sm:flex-row">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#home" className="hover:text-slate-200 transition">Home</a>
            <a href="#projects" className="hover:text-slate-200 transition">Projects</a>
            <a href="#contact" className="hover:text-slate-200 transition">Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
}
