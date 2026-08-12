import { motion } from "framer-motion";
import { Briefcase, Award, Sparkles } from "lucide-react";
import { experience, certifications, strengths } from "../data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-28 md:py-40 overflow-hidden border-t border-white/10"
    >
      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="h-px w-12 bg-accent/40" />
          <span className="font-mono text-xs tracking-widest text-white/60 uppercase">
            Experience
          </span>
        </motion.div>

        <div className="grid grid-cols-12 gap-6">
          {/* Experience card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
            className="group chip-corners col-span-12 md:col-span-8 p-8 md:p-10 rounded-3xl glass relative overflow-hidden"
          >
            <div className="glass-edge rounded-3xl" />
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-signal/10 blur-3xl group-hover:bg-accent/15 transition-colors duration-700" />
            <div className="relative">
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase size={14} className="text-accent" />
                    <span className="font-mono text-[11px] tracking-widest text-white/40 uppercase">
                      Internship
                    </span>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl text-white font-medium">
                    {experience.role}
                  </h3>
                  <p className="mt-1 text-white/60 text-sm">
                    @ {experience.company}
                  </p>
                </div>
                <div className="px-3 py-1.5 rounded-full bg-emerald-400/10 border border-emerald-400/30 text-emerald-300 text-[11px] font-mono">
                  COMPLETED
                </div>
              </div>

              <ul className="space-y-3 mt-6">
                {experience.bullets.map((b, j) => (
                  <motion.li
                    key={j}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + j * 0.1, duration: 0.6 }}
                    className="flex items-start gap-3 text-white/65 text-sm leading-relaxed"
                  >
                    <span className="mt-2 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                    <span>{b}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Certifications card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
            className="group chip-corners relative col-span-12 md:col-span-4 p-8 rounded-3xl glass overflow-hidden"
          >
            <div className="glass-edge rounded-3xl" />
            <div className="flex items-center gap-2 mb-5">
              <Award size={14} className="text-accent" />
              <span className="font-mono text-[11px] tracking-widest text-white/40 uppercase">
                Certifications
              </span>
            </div>
            <ul className="space-y-3">
              {certifications.map((c) => (
                <li
                  key={c}
                  className="flex items-start gap-2 text-white/75 text-sm"
                >
                  <span className="text-accent mt-1">&#8250;</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Strengths */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative col-span-12 p-8 md:p-10 rounded-3xl glass overflow-hidden"
          >
            <div className="glass-edge rounded-3xl" />
            <div className="flex items-center gap-2 mb-6">
              <Sparkles size={14} className="text-accent" />
              <span className="font-mono text-[11px] tracking-widest text-white/40 uppercase">
                Strengths
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {strengths.map((s, i) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i, duration: 0.5 }}
                  whileHover={{ y: -3, scale: 1.04 }}
                  className="px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-white/80 text-sm hover:border-accent/50 hover:text-accent hover:bg-accent/10 hover:shadow-[0_0_24px_-8px_rgba(69,240,221,0.6)] transition-all cursor-default"
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
