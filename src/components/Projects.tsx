import { motion } from "framer-motion";
import { ArrowUpRight, Cpu, Zap } from "lucide-react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="work" className="relative py-28 md:py-40 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-between mb-12"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-12 bg-accent/40" />
            <span className="font-mono text-xs tracking-widest text-white/60 uppercase">
              Selected Work
            </span>
          </div>
          <h2 className="hidden md:block font-display text-2xl text-white/60">
            Projects & Systems
          </h2>
        </motion.div>

        <div className="space-y-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
                delay: i * 0.1,
              }}
              whileHover={{ y: -4 }}
              className="group chip-corners relative grid grid-cols-12 gap-6 p-6 md:p-10 rounded-3xl glass hover:border-accent/40 transition-colors duration-500"
            >
              <div className="glass-edge rounded-3xl" />

                <div className="relative col-span-12 md:col-span-3 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] tracking-widest text-white/40 uppercase">
                    {p.year}
                  </span>
                </div>
                <div className="font-display text-5xl md:text-7xl font-bold text-white leading-none">
                  {p.name}
                </div>
                <div className="text-white/50 text-sm">{p.fullName}</div>
                <div className="pt-2 flex items-center gap-2 text-[11px] text-white/50 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {p.tag}
                </div>
                <div className="hidden md:flex items-center gap-1.5 text-[11px] text-white/40 font-mono pt-2">
                  {p.year}
                </div>
              </div>

              <div className="relative col-span-12 md:col-span-6 space-y-4">
                <p className="text-white text-lg md:text-xl leading-relaxed">
                  {p.description}
                </p>
                <ul className="space-y-2.5 pt-2">
                  {p.bullets.map((b, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-white/55 text-sm leading-relaxed"
                    >
                      <span className="mt-2 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative col-span-12 md:col-span-3 flex flex-col justify-between gap-6">
                <div>
                  <span className="font-mono text-[10px] tracking-widest text-white/40 uppercase">
                    Stack
                  </span>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] text-white/70"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-end">
                  <div className="relative w-12 h-12 grid place-items-center rounded-full border border-white/15 group-hover:border-accent group-hover:bg-accent group-hover:text-ink transition-all duration-500">
                    {i === 0 ? <Cpu size={16} /> : <Zap size={16} />}
                    <ArrowUpRight
                      size={12}
                      className="absolute -top-1 -right-1 text-white/40 group-hover:text-accent"
                    />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
