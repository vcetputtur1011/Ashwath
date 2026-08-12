import { motion } from "framer-motion";
import { GraduationCap, MapPin, Award } from "lucide-react";
import { objective, education } from "../data";

const stats = [
  { label: "Projects Built", value: "2+" },
  { label: "Internships", value: "1" },
  { label: "Certifications", value: "3" },
  { label: "Year", value: "4th" },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-40 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="h-px w-12 bg-accent/40" />
          <span className="font-mono text-xs tracking-widest text-white/60 uppercase">
            About
          </span>
        </motion.div>

        <div className="grid grid-cols-12 gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 md:col-span-7 font-display text-4xl md:text-6xl leading-[1.05] tracking-tight text-white"
          >
            Engineer by training.{" "}
            <span className="text-white/40">
              Builder by habit. Curious by default.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="col-span-12 md:col-span-5 text-white/60 text-base md:text-lg leading-relaxed"
          >
            {objective}
          </motion.p>
        </div>

        {/* Education card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 grid grid-cols-12 gap-6"
        >
          <div className="group chip-corners col-span-12 md:col-span-7 p-8 rounded-3xl glass relative overflow-hidden">
            <div className="glass-edge rounded-3xl" />
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-accent/10 blur-3xl group-hover:bg-accent/20 transition" />
            <div className="relative">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap size={16} className="text-accent" />
                <span className="font-mono text-[11px] tracking-widest text-white/40 uppercase">
                  Education
                </span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl text-white font-medium leading-tight">
                {education.degree}
              </h3>
              <p className="mt-3 text-white/60 text-sm md:text-base">
                {education.school}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/70">
                  <MapPin size={12} />
                  {education.year}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-xs text-accent">
                  <Award size={12} />
                  {education.cgpa}
                </span>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-5 grid grid-cols-2 gap-3">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                whileHover={{ y: -4 }}
                className="p-5 rounded-2xl glass flex flex-col justify-between aspect-square transition-shadow hover:shadow-[0_0_40px_-14px_rgba(69,240,221,0.5)]"
              >
                <span className="font-mono text-[10px] tracking-widest text-white/40 uppercase">
                  {s.label}
                </span>
                <span className="font-display text-4xl md:text-5xl font-medium text-white">
                  {s.value}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
