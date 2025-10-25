import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    name: 'Neon Notes',
    description: 'A fast note-taking app with offline-first sync and keyboard-first UX.',
    tags: ['React', 'IndexedDB', 'PWA'],
    repo: 'https://github.com/',
    demo: '#',
  },
  {
    name: 'Algo Visualizer',
    description: 'Interactive DSA visualizations with step controls and time complexity.',
    tags: ['TypeScript', 'D3', 'Vite'],
    repo: 'https://github.com/',
    demo: '#',
  },
  {
    name: 'ML Playground',
    description: 'Experiment with classical ML models in the browser.',
    tags: ['Python', 'Sklearn', 'Streamlit'],
    repo: 'https://github.com/',
    demo: '#',
  },
  {
    name: 'Dev Portfolio',
    description: 'A slick, responsive portfolio template with 3D hero.',
    tags: ['React', 'Tailwind', 'Spline'],
    repo: 'https://github.com/',
    demo: '#',
  },
  {
    name: 'API Scout',
    description: 'Lightweight API client with collections and env variables.',
    tags: ['Electron', 'Node', 'React'],
    repo: 'https://github.com/',
    demo: '#',
  },
  {
    name: 'Pixel Grid',
    description: 'Generative art tool for creating animated grid patterns.',
    tags: ['Canvas', 'WebGL'],
    repo: 'https://github.com/',
    demo: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>
      <div className="container mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <div className="mb-3 text-xs uppercase tracking-widest text-indigo-300/80">Projects</div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Selected work</h2>
          <p className="mt-3 text-white/70">A mix of experiments, utilities, and full-stack apps. Hover for details.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur"
            >
              {/* Image placeholder */}
              <div className="relative h-40 w-full overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.35),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(34,211,238,0.35),transparent_50%)]" />
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 via-purple-600/10 to-cyan-600/20" />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-white/90">{p.name}</h3>
                  <div className="flex items-center gap-2">
                    <a href={p.repo} target="_blank" rel="noreferrer" className="rounded-md border border-white/10 bg-white/5 p-1.5 text-white/80 transition hover:text-white hover:border-white/20">
                      <Github className="h-4 w-4" />
                    </a>
                    <a href={p.demo} target="_blank" rel="noreferrer" className="rounded-md border border-white/10 bg-white/5 p-1.5 text-white/80 transition hover:text-white hover:border-white/20">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                <p className="mt-2 line-clamp-2 text-sm text-white/70">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xxs text-white/70">{t}</span>
                  ))}
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/0 to-indigo-500/10" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
