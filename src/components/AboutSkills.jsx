import { motion } from 'framer-motion';
import { Cpu, Code2, Brain, Globe2 } from 'lucide-react';

const SectionTitle = ({ overline, title, id }) => (
  <div className="mx-auto mb-10 max-w-3xl text-center" id={id}>
    <div className="mb-3 text-xs uppercase tracking-widest text-indigo-300/80">{overline}</div>
    <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
  </div>
);

export default function AboutSkills() {
  const skills = [
    { name: 'C++', level: 85, icon: <Cpu className="h-4 w-4" /> },
    { name: 'Python', level: 90, icon: <Brain className="h-4 w-4" /> },
    { name: 'Web Dev (React, Tailwind)', level: 88, icon: <Code2 className="h-4 w-4" /> },
    { name: 'Machine Learning', level: 70, icon: <Brain className="h-4 w-4" /> },
    { name: 'DSA', level: 80, icon: <Cpu className="h-4 w-4" /> },
    { name: 'APIs & Cloud', level: 65, icon: <Globe2 className="h-4 w-4" /> },
  ];

  return (
    <section className="relative isolate">
      {/* background accents */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute left-1/2 top-[-10%] h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute right-[10%] top-[30%] h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl px-6 py-20">
        <SectionTitle overline="About" title="A bit about me" id="about" />
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="order-2 md:order-1">
            <p className="text-white/80">
              I'm a Computer Science & Engineering student passionate about building performant, user-centric software. I love solving complex problems, exploring system design, and experimenting with ML. When I'm not coding, you'll find me reading about new tech, contributing to open-source, or polishing UI micro-interactions.
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-3 text-white/80 sm:grid-cols-2">
              <li className="rounded-lg border border-white/10 bg-white/5 p-4">
                • Academic focus: Algorithms, Systems, AI
              </li>
              <li className="rounded-lg border border-white/10 bg-white/5 p-4">
                • Interests: Full-stack, DevTools, HCI
              </li>
              <li className="rounded-lg border border-white/10 bg-white/5 p-4">
                • Hackathons, coding contests (Codeforces, LeetCode)
              </li>
              <li className="rounded-lg border border-white/10 bg-white/5 p-4">
                • Open-source contributor and tech blogger
              </li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="order-1 md:order-2">
            <div className="relative mx-auto aspect-square w-64 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-600/40 via-purple-600/30 to-cyan-600/30 p-1 shadow-xl">
              <div className="flex h-full w-full items-center justify-center rounded-2xl bg-[#0c1126]">
                <span className="text-5xl font-bold tracking-tight text-white/80">YN</span>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
            </div>
          </motion.div>
        </div>

        <SectionTitle overline="Skills" title="Tech stack & tools" id="skills" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => (
            <motion.div key={s.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.05 }} className="group rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-5 shadow-sm backdrop-blur">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-white/90">
                  <span className="grid h-7 w-7 place-items-center rounded-md bg-white/10 text-indigo-200">
                    {s.icon}
                  </span>
                  <span className="font-medium">{s.name}</span>
                </div>
                <span className="text-xs text-white/60">{s.level}%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 transition-all duration-500 group-hover:scale-x-105" style={{ width: `${s.level}%` }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
