import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useRef, type MouseEvent } from "react";
import { ArrowDown, ArrowUpRight, Sparkles, Cpu, MapPin } from "lucide-react";
import { personal, marqueeItems } from "../data";

function PortraitModule() {
  const cardRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const sx = useSpring(mx, { stiffness: 120, damping: 20 });
  const sy = useSpring(my, { stiffness: 120, damping: 20 });

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(((e.clientX - rect.left) / rect.width) * 100);
    my.set(((e.clientY - rect.top) / rect.height) * 100);
  };

  const spotlight = useTransform([sx, sy], ([x, y]) =>
    `radial-gradient(320px circle at ${x}% ${y}%, rgba(69,240,221,0.16), transparent 65%)`
  );

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="relative mx-auto w-full max-w-[420px] aspect-[4/5]"
    >
      {/* Outer glow — the color the glass module will refract */}
      <div className="absolute -inset-6 rounded-[2.25rem] bg-gradient-to-br from-accent/25 via-signal/10 to-transparent blur-3xl opacity-70" />

      {/* Glass module frame */}
      <div
        ref={cardRef}
        onMouseMove={handleMove}
        className="chip-corners relative h-full w-full rounded-[1.75rem] overflow-hidden glass-strong"
      >
        {/* Portrait */}
        <motion.img
          src="/ashwath-portrait.jpg"
          alt={personal.name}
          className="h-full w-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Cursor-tracked glass spotlight */}
        <motion.div
          className="absolute inset-0 pointer-events-none mix-blend-screen"
          style={{ background: spotlight }}
        />

        {/* Scan sweep — a thin line of "signal" travels the module */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-accent/25 via-accent/5 to-transparent animate-scan pointer-events-none" />

        {/* Bottom gradient for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent" />

        {/* Top-left status */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inset-0 rounded-full bg-accent pulse-ring" />
            <span className="relative rounded-full h-2 w-2 bg-accent" />
          </span>
          <span className="font-mono text-[10px] tracking-widest text-white/80 uppercase">
            Available
          </span>
        </div>

        {/* Bottom info */}
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
          <div>
            <div className="font-display text-white text-sm font-medium">
              {personal.name}
            </div>
            <div className="font-mono text-[10px] tracking-widest text-white/60 uppercase flex items-center gap-1 mt-0.5">
              <MapPin size={9} />
              {personal.location}
            </div>
          </div>
          <div className="px-2.5 py-1 rounded-full bg-accent text-ink font-mono text-[10px] font-bold tracking-wider">
            ECE '26
          </div>
        </div>
      </div>

      {/* Floating decorative tag — top right */}
      <motion.div
        initial={{ opacity: 0, x: 20, y: -10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="absolute -top-4 -right-4 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full glass"
      >
        <Cpu size={12} className="text-accent" />
        <span className="font-mono text-[10px] tracking-widest text-white/80 uppercase">
          Robotics
        </span>
      </motion.div>

      {/* Floating decorative tag — bottom left */}
      <motion.div
        initial={{ opacity: 0, x: -20, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="absolute -bottom-3 -left-3 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-accent to-signal text-ink shadow-2xl"
      >
        <Sparkles size={12} />
        <span className="font-mono text-[10px] tracking-widest font-bold uppercase">
          Automation
        </span>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-screen w-full flex items-center overflow-hidden pt-28 pb-12"
    >
      <div className="relative z-10 max-w-7xl w-full mx-auto px-5 md:px-8">
        <motion.div
          style={{ y, opacity }}
          className="grid grid-cols-12 gap-4 md:gap-8"
        >
          {/* Top row: status */}
          <div className="col-span-12 flex items-center justify-between mb-8">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex items-center gap-2"
              >
                <span className="h-px w-8 bg-accent/40" />
                <span className="font-mono text-[11px] tracking-[0.2em] text-white/60 uppercase">
                  Open to opportunities
                </span>
              </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="hidden sm:flex items-center gap-2 font-mono text-[11px] tracking-widest text-white/40"
            >
              ECE · ROBOTICS · AUTOMATION
            </motion.div>
          </div>

          {/* Left column: text */}
          <div className="col-span-12 md:col-span-7 flex flex-col justify-center order-2 md:order-1">
            {/* Main name */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1.1,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.1,
                }}
                className="font-display font-bold text-[clamp(2.8rem,11vw,8.5rem)] leading-[0.9] tracking-tight"
              >
                <span className="block text-white">S Ashwath</span>
              </motion.h1>
            </div>
            <div className="overflow-hidden mt-2">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1.1,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.25,
                }}
                className="flex items-center gap-3"
              >
                <span className="text-accent text-[clamp(1.2rem,3.5vw,2.5rem)] font-display font-medium">
                  /
                </span>
                <span className="text-white/70 text-[clamp(1rem,2.4vw,1.6rem)] font-display font-light">
                  Engineer. Builder. Executor.
                </span>
              </motion.div>
            </div>

            {/* Description + CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-8 max-w-lg space-y-5"
            >
              <p className="text-white/60 text-base md:text-lg leading-relaxed">
                Final-year ECE student building robots, embedded systems, and
                industrial automation prototypes. Currently seeking an{" "}
                <span className="text-white">
                  Installation Engineer Trainee
                </span>{" "}
                role in robotics & automation.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#work"
                  className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-accent to-accent-soft text-ink font-medium text-sm hover:shadow-[0_0_40px_-8px_rgba(69,240,221,0.6)] transition-shadow"
                >
                  View Projects
                  <ArrowUpRight
                    size={16}
                    className="group-hover:rotate-45 transition-transform"
                  />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full glass text-white text-sm hover:border-accent/50 hover:text-accent transition-colors"
                >
                  Contact Me
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right column: portrait */}
          <div className="col-span-12 md:col-span-5 flex items-center justify-center order-1 md:order-2">
            <PortraitModule />
          </div>

          {/* Bottom row */}
          <div className="col-span-12 mt-10 grid grid-cols-12 gap-4 md:gap-6 items-end order-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.8 }}
              className="col-span-12 md:col-span-5 md:col-start-8"
            >
              <div className="relative p-5 rounded-2xl glass">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[10px] tracking-widest text-white/40 uppercase">
                    Currently
                  </span>
                  <Sparkles size={12} className="text-accent" />
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  Final-year B.E. ECE at VCET Puttur · Building autonomous
                  robots & industrial automation projects.
                </p>
                <div className="mt-4 flex items-center gap-2 text-[11px] text-white/50 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  4th Year · CGPA 6.44
                </div>
              </div>
            </motion.div>
          </div>

          {/* Scroll cue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="col-span-12 mt-12 flex items-center justify-between order-4"
          >
            <div className="flex items-center gap-2 text-white/40 text-xs font-mono tracking-widest">
              <ArrowDown size={12} className="animate-bounce" />
              SCROLL TO EXPLORE
            </div>
            <div className="hidden md:flex items-center gap-2 text-white/40 text-xs font-mono tracking-widest">
              <span>{personal.email}</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom marquee */}
      <div className="absolute bottom-0 left-0 right-0 border-y border-white/10 bg-ink/40 backdrop-blur-md overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap py-3">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-6 px-6 text-white/50 font-display text-sm"
            >
              {item}
              <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
