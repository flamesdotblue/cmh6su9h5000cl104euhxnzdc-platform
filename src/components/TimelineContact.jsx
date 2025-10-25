import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Mail, Github, Linkedin } from 'lucide-react';
import { useCallback } from 'react';

const timeline = [
  {
    type: 'education',
    icon: GraduationCap,
    title: 'B.Tech in Computer Science & Engineering',
    org: 'Your University',
    period: '2022 — Present',
    detail: 'CGPA: 8.9/10. Coursework: DSA, Operating Systems, DBMS, ML, Networks.'
  },
  {
    type: 'experience',
    icon: Briefcase,
    title: 'Software Engineering Intern',
    org: 'Tech Company',
    period: 'May 2024 — Aug 2024',
    detail: 'Built internal dashboards, optimized APIs, and improved CI/CD reliability.'
  },
  {
    type: 'experience',
    icon: Briefcase,
    title: 'Open Source Contributor',
    org: 'Various Projects',
    period: '2023 — Present',
    detail: 'Contributed bug fixes and features to React/Tailwind ecosystem tools.'
  }
];

export default function TimelineContact() {
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const email = form.get('email');
    const message = form.get('message');
    const subject = encodeURIComponent(`Portfolio Contact — ${name}`);
    const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`);
    window.location.href = `mailto:you@example.com?subject=${subject}&body=${body}`;
  }, []);

  return (
    <section className="relative">
      <div className="container mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div id="timeline">
            <div className="mx-auto mb-10 max-w-xl">
              <div className="mb-3 text-xs uppercase tracking-widest text-indigo-300/80">Experience & Education</div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">My journey so far</h2>
            </div>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-white/30 via-white/10 to-transparent" />
              <div className="space-y-8">
                {timeline.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="relative pl-12">
                      <div className="absolute left-0 top-1 grid h-8 w-8 place-items-center rounded-lg border border-white/20 bg-white/10 text-white/90">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h3 className="font-medium text-white/90">{item.title}</h3>
                          <span className="text-xs text-white/60">{item.period}</span>
                        </div>
                        <div className="mt-1 text-sm text-indigo-200/90">{item.org}</div>
                        <p className="mt-2 text-sm leading-relaxed text-white/75">{item.detail}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          <div id="contact">
            <div className="mx-auto mb-10 max-w-xl">
              <div className="mb-3 text-xs uppercase tracking-widest text-indigo-300/80">Contact</div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Let's build something great</h2>
              <p className="mt-2 text-white/70">Have an idea, project, or opportunity? Drop a message — I usually reply within a day.</p>
            </div>

            <form onSubmit={handleSubmit} className="max-w-xl space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-white/80">Name</label>
                  <input required name="name" type="text" className="w-full rounded-md border border-white/15 bg-white/5 px-3 py-2 text-white placeholder-white/40 outline-none ring-0 transition focus:border-indigo-400/40" placeholder="Ada Lovelace" />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-white/80">Email</label>
                  <input required name="email" type="email" className="w-full rounded-md border border-white/15 bg-white/5 px-3 py-2 text-white placeholder-white/40 outline-none ring-0 transition focus:border-indigo-400/40" placeholder="you@example.com" />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm text-white/80">Message</label>
                <textarea required name="message" rows={5} className="w-full resize-none rounded-md border border-white/15 bg-white/5 px-3 py-2 text-white placeholder-white/40 outline-none ring-0 transition focus:border-indigo-400/40" placeholder="Tell me about your project or inquiry..." />
              </div>
              <div className="flex items-center gap-3">
                <button type="submit" className="rounded-md bg-gradient-to-r from-indigo-500 to-cyan-500 px-5 py-2.5 font-medium text-white shadow-lg shadow-cyan-500/20 transition hover:shadow-cyan-500/30">Send Message</button>
                <div className="ml-2 flex items-center gap-2">
                  <a aria-label="GitHub" href="https://github.com/" target="_blank" rel="noreferrer" className="rounded-md border border-white/10 bg-white/5 p-2 text-white/80 hover:text-white hover:border-white/20 transition">
                    <Github className="h-5 w-5" />
                  </a>
                  <a aria-label="LinkedIn" href="https://linkedin.com/" target="_blank" rel="noreferrer" className="rounded-md border border-white/10 bg-white/5 p-2 text-white/80 hover:text-white hover:border-white/20 transition">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a aria-label="Email" href="mailto:you@example.com" className="rounded-md border border-white/10 bg-white/5 p-2 text-white/80 hover:text-white hover:border-white/20 transition">
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
