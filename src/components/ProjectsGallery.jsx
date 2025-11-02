import React from 'react';
import { Code, ExternalLink, Github, Server, Database, Palette } from 'lucide-react';

const projects = [
  {
    title: 'SaaS Analytics Dashboard',
    blurb:
      'End‑to‑end platform with multi-tenant auth, real‑time charts, and usage‑based billing. Designed with accessibility and dark mode in mind.',
    stack: ['React', 'Tailwind', 'FastAPI', 'MongoDB', 'Stripe'],
    highlights: [
      'Component‑driven UI with design tokens',
      'REST API with role‑based policies',
      'Aggregation pipelines for reporting',
    ],
    links: {
      demo: '#',
      code: '#',
      design: '#',
    },
  },
  {
    title: 'Realtime Chat & Collab',
    blurb:
      'WebSocket powered chat with presence, optimistic updates, and document collaboration. Mobile‑first UI and latency‑aware UX.',
    stack: ['React', 'Tailwind', 'FastAPI', 'MongoDB', 'WebSockets'],
    highlights: ['Cursor sync + OT', 'Offline cache + retry queues', 'Scalable rooms + presence'],
    links: { demo: '#', code: '#', design: '#' },
  },
  {
    title: 'Headless Commerce',
    blurb:
      'Headless storefront with CMS‑driven content, search, and checkout. Focused on performance, a11y, and content workflows.',
    stack: ['React', 'Tailwind', 'FastAPI', 'MongoDB', 'Stripe'],
    highlights: ['Server‑driven UI', 'Edge caching', 'Search with facets & synonyms'],
    links: { demo: '#', code: '#', design: '#' },
  },
];

function Badge({ children }) {
  return (
    <span className="rounded-md border border-slate-700/60 bg-slate-900/60 px-2.5 py-1 text-xs text-slate-300">
      {children}
    </span>
  );
}

function Highlight({ children }) {
  return (
    <li className="flex items-start gap-2 text-sm text-slate-300">
      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" />
      <span>{children}</span>
    </li>
  );
}

export default function ProjectsGallery() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <p className="text-xs uppercase tracking-widest text-cyan-300/80">Case Studies</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white">Selected Full‑Stack Projects</h2>
          <p className="mt-2 max-w-2xl text-slate-300">
            Each card breaks down the design approach, the stack, and the architecture decisions.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/70 to-slate-950/80 shadow-lg"
          >
            <div className="p-6">
              <div className="mb-3 flex items-center gap-2 text-slate-200">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-tr from-indigo-500 to-cyan-400 text-slate-900">
                  <Code className="h-4 w-4" />
                </span>
                <h3 className="text-lg font-semibold">{p.title}</h3>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">{p.blurb}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <Badge key={s}>{s}</Badge>
                ))}
              </div>

              <ul className="mt-4 space-y-2">
                {p.highlights.map((h, i) => (
                  <Highlight key={i}>{h}</Highlight>
                ))}
              </ul>

              <div className="mt-6 flex items-center gap-3">
                <a
                  href={p.links.demo}
                  className="inline-flex items-center gap-1.5 rounded-md bg-slate-800/70 px-3 py-1.5 text-xs text-slate-200 hover:bg-slate-800 transition"
                >
                  <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                </a>
                <a
                  href={p.links.code}
                  className="inline-flex items-center gap-1.5 rounded-md bg-slate-800/70 px-3 py-1.5 text-xs text-slate-200 hover:bg-slate-800 transition"
                >
                  <Github className="h-3.5 w-3.5" /> Source
                </a>
                <a
                  href={p.links.design}
                  className="inline-flex items-center gap-1.5 rounded-md bg-slate-800/70 px-3 py-1.5 text-xs text-slate-200 hover:bg-slate-800 transition"
                >
                  <Palette className="h-3.5 w-3.5" /> Design
                </a>
              </div>
            </div>

            <div className="pointer-events-none absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl" />
          </article>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
        <InfoCard
          icon={<Server className="h-5 w-5" />}
          title="Backend Craftsmanship"
          items={[
            'Secure, well‑typed APIs',
            'Background jobs & queues',
            'Observability & testing',
          ]}
        />
        <InfoCard
          icon={<Database className="h-5 w-5" />}
          title="Data & Scale"
          items={[
            'Schema design & migrations',
            'Indexes and performance',
            'Caching & resiliency',
          ]}
        />
        <InfoCard
          icon={<Palette className="h-5 w-5" />}
          title="Design Systems"
          items={['A11y‑first components', 'Tokens & theming', 'Responsive UX']}
        />
      </div>
    </div>
  );
}

function InfoCard({ icon, title, items }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
      <div className="mb-2 flex items-center gap-2 text-slate-200">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-tr from-indigo-500 to-cyan-400 text-slate-900">
          {icon}
        </span>
        <h4 className="font-semibold">{title}</h4>
      </div>
      <ul className="space-y-1.5 text-sm text-slate-300">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
