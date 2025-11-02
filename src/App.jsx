import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero3D from './components/Hero3D.jsx';
import ProjectsGallery from './components/ProjectsGallery.jsx';
import ContactFooter from './components/ContactFooter.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Navbar />

      <main>
        <section id="home" className="relative h-[90vh] sm:h-[85vh]">
          <Hero3D />
        </section>

        <section id="projects" className="py-20 sm:py-24">
          <ProjectsGallery />
        </section>

        <section id="contact" className="py-16">
          <ContactFooter />
        </section>
      </main>
    </div>
  );
}
