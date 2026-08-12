import { motion } from "framer-motion";
import { skillGroups } from "../data";

export default function Skills() {
  return (
    <section
      id="skills"
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
            Expertise
          </span>
        </motion.div>

        <div className="grid grid-cols-12 gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 md:col-span-5 font-display text-4xl md:text-6xl leading-[1.05] tracking-tight text-white"
          >
            Skills <span className="text-white/40">& capabilities</span>
          </motion.h2>

          <div className="col-span-12 md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {skillGroups.map((g, i) => (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -3 }}
                className="group p-5 rounded-2xl glass hover:border-accent/40 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/60 group-hover:bg-accent transition" />
                </div>
                <h3 className="font-display text-lg text-white font-medium mb-4">
                  {g.title}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {g.items.map((it) => (
                    <span
                      key={it}
                      className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-[11px] text-white/70 hover:text-accent hover:border-accent/30 transition"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
