import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personal } from "../data";

export default function Contact() {
  return (
    <section
      id="contact"
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
            Contact
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[clamp(2.5rem,9vw,8rem)] leading-[0.95] tracking-tight text-white"
        >
          Let's build <br />
          <span className="bg-gradient-to-r from-accent to-signal bg-clip-text text-transparent italic">
            something.
          </span>
        </motion.h2>

        <div className="mt-12 grid grid-cols-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="col-span-12 md:col-span-7 space-y-6"
          >
            <p className="text-white/65 text-lg max-w-xl leading-relaxed">
              Open to opportunities in robotics, industrial automation, and
              field installation engineering. Let's connect if you're working
              on something interesting.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={`mailto:${personal.email}`}
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-accent to-accent-soft text-ink font-medium hover:shadow-[0_0_40px_-8px_rgba(69,240,221,0.6)] transition-shadow"
              >
                <Mail size={16} />
                {personal.email}
                <ArrowUpRight
                  size={16}
                  className="group-hover:rotate-45 transition-transform"
                />
              </a>
              <a
                href={`tel:${personal.phone}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full glass text-white hover:border-accent/50 hover:text-accent transition-colors"
              >
                <Phone size={16} />
                {personal.phone}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="col-span-12 md:col-span-5"
          >
            <div className="relative p-6 rounded-2xl glass space-y-3 overflow-hidden">
              <div className="glass-edge rounded-2xl" />
              <span className="font-mono text-[10px] tracking-widest text-white/40 uppercase">
                Find me on
              </span>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-xl border border-white/10 hover:border-accent/40 hover:bg-white/5 transition-all"
              >
                <div className="flex items-center gap-3">
                  <FaGithub size={18} className="text-white/70" />
                  <div>
                    <div className="text-white text-sm">GitHub</div>
                    <div className="text-white/40 text-xs">
                      @ashwathns7
                    </div>
                  </div>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-white/40 group-hover:text-accent group-hover:rotate-45 transition-all"
                />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-xl border border-white/10 hover:border-accent/40 hover:bg-white/5 transition-all"
              >
                <div className="flex items-center gap-3">
                  <FaLinkedin size={18} className="text-white/70" />
                  <div>
                    <div className="text-white text-sm">LinkedIn</div>
                    <div className="text-white/40 text-xs">S Ashwath</div>
                  </div>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-white/40 group-hover:text-accent group-hover:rotate-45 transition-all"
                />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-28 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 grid place-items-center rounded-lg bg-gradient-to-br from-accent to-signal text-ink font-display font-bold">
              A
            </div>
            <span className="font-display font-semibold text-white">
              {personal.name}
            </span>
          </div>
          <span className="text-white/40 text-xs font-mono tracking-wider">
            © 2026 {personal.name} · Built with webmorph · {personal.location}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
