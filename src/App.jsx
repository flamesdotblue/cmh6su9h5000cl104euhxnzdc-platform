import { useEffect } from 'react';
import Hero from './components/Hero';
import AboutSkills from './components/AboutSkills';
import Projects from './components/Projects';
import TimelineContact from './components/TimelineContact';

export default function App() {
  useEffect(() => {
    // Enable smooth scrolling for internal links
    const handler = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;
      const id = target.getAttribute('href');
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#070915] text-white selection:bg-indigo-500/30 selection:text-white">
      <Hero />
      <AboutSkills />
      <Projects />
      <TimelineContact />
      <footer className="border-t border-white/10 py-10 text-center text-sm text-white/60">
        <div className="container mx-auto px-6">
          <p>
            © {new Date().getFullYear()} Your Name — Built with React, Tailwind, and a touch of neon.
          </p>
        </div>
      </footer>
    </div>
  );
}
