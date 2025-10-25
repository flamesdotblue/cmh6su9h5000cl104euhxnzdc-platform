import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const titles = useMemo(
    () => [
      'CSE Student',
      'Developer',
      'Problem Solver',
    ],
    []
  );
  const [idx, setIdx] = useState(0);
  const [typed, setTyped] = useState('');

  useEffect(() => {
    // Typing effect for rotating titles
    let cancelled = false;
    let char = 0;
    const type = () => {
      if (cancelled) return;
      const full = titles[idx];
      if (char <= full.length) {
        setTyped(full.slice(0, char));
        char++;
        setTimeout(type, 70);
      } else {
        // pause, then delete
        setTimeout(() => erase(), 900);
      }
    };
    const erase = () => {
      if (cancelled) return;
      const full = titles[idx];
      if (char >= 0) {
        setTyped(full.slice(0, char));
        char--;
        setTimeout(erase, 40);
      } else {
        setIdx((p) => (p + 1) % titles.length);
      }
    };
    type();
    return () => {
      cancelled = true;
    };
  }, [idx, titles]);

  return (
    <section id="home" className="relative h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* Subtle gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#070915]/40 via-transparent to-[#070915]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#070915] to-transparent" />

      {/* Top nav */}
      <div className="absolute left-0 right-0 top-0 z-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5">
          <a href="#home" className="group inline-flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400 shadow-lg shadow-cyan-500/20" />
            <span className="text-sm font-semibold tracking-wide text-white/80 group-hover:text-white transition-colors">Your Name</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a href="#about" className="text-white/70 hover:text-white transition-colors">About</a>
            <a href="#skills" className="text-white/70 hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="text-white/70 hover:text-white transition-colors">Projects</a>
            <a href="#timeline" className="text-white/70 hover:text-white transition-colors">Experience</a>
            <a href="#contact" className="rounded-md bg-white/10 px-3 py-1.5 text-white/90 ring-1 ring-white/15 backdrop-blur hover:bg-white/15 transition">Contact</a>
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/70 backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            Available for internships & projects
          </div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Hi, I'm <span className="bg-gradient-to-r from-indigo-300 via-sky-300 to-cyan-300 bg-clip-text text-transparent">Your Name</span>
          </h1>
          <div className="mt-3 text-lg text-white/80 sm:text-xl">
            <span className="text-white">{typed}</span>
            <span className="ml-1 animate-pulse">|</span>
            <span className="ml-3 text-white/70">Crafting efficient, scalable software with clean, modern design.</span>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-indigo-500 to-cyan-500 px-5 py-2.5 font-medium text-white shadow-lg shadow-cyan-500/20 transition hover:shadow-cyan-500/30">
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#contact" className="rounded-md border border-white/15 bg-white/5 px-5 py-2.5 font-medium text-white/90 backdrop-blur transition hover:bg-white/10">Contact Me</a>
            <div className="ml-2 flex items-center gap-2">
              <a aria-label="GitHub" href="https://github.com/" target="_blank" rel="noreferrer" className="rounded-md border border-white/10 bg-white/5 p-2 text-white/80 hover:text-white hover:border-white/20 transition">
                <Github className="h-5 w-5" />
              </a>
              <a aria-label="LinkedIn" href="https://linkedin.com/" target="_blank" rel="noreferrer" className="rounded-md border border-white/10 bg-white/5 p-2 text-white/80 hover:text-white hover:border-white/20 transition">
                <Linkedin className="h-5 w-5" />
              </a>
              <a aria-label="Email" href="#contact" className="rounded-md border border-white/10 bg-white/5 p-2 text-white/80 hover:text-white hover:border-white/20 transition">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
