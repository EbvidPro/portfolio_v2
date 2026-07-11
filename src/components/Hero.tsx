import { motion, useReducedMotion } from "motion/react";
import { IslandButton } from "./IslandButton";

type HeroProps = {
  scrollToSection: (sectionId: string) => void;
};

const ease = [0.32, 0.72, 0, 1] as const;

export function Hero({ scrollToSection }: HeroProps) {
  const reduce = useReducedMotion();

  return (
    <section
      id="home"
      className="relative z-10 flex min-h-[100dvh] items-center overflow-hidden px-4 pb-16 pt-28 md:px-8 md:pb-24 md:pt-24"
    >
      <div className="relative mx-auto grid w-full max-w-[1400px] items-center gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="mb-6 inline-flex rounded-full bg-accent-soft px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-accent-deep ring-1 ring-accent/15"
          >
            React &amp; Next.js Developer
          </motion.p>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.08, ease }}
            className="font-display text-[clamp(2.75rem,8vw,6.5rem)] font-extrabold leading-[0.95] tracking-[-0.04em] text-ink"
          >
            Oluwatobi
            <br />
            <span className="relative inline-block text-accent">
              David
              <motion.span
                className="absolute -bottom-1 left-0 h-[3px] origin-left rounded-full bg-accent/70 md:-bottom-2"
                initial={reduce ? { scaleX: 1 } : { scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.9, delay: 0.55, ease }}
                style={{ width: "100%" }}
              />
            </span>
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22, ease }}
            className="mt-6 max-w-[46ch] font-mono text-base leading-relaxed text-mute md:text-lg"
          >
            I build scalable dashboards and high-performance landing pages for
            startups, with clean, maintainable frontend architecture.
          </motion.p>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28, ease }}
            className="mt-4 font-mono text-xs text-mute"
          >
            Open to full-time and contract roles
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.34, ease }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <IslandButton onClick={() => scrollToSection("projects")}>
              View work
            </IslandButton>
            <IslandButton
              variant="ghost"
              showArrow={false}
              onClick={() => scrollToSection("contact")}
            >
              Start a conversation
            </IslandButton>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 48, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.18, ease }}
          className="lg:col-span-5"
        >
          <motion.div
            className="double-bezel shadow-ambient"
            animate={reduce ? undefined : { y: [0, -8, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: [0.32, 0.72, 0, 1] }}
          >
            <div className="double-bezel-inner relative aspect-[4/5] overflow-hidden md:aspect-[5/6]">
              <img
                src="/hero/code-desk.png"
                alt="Developer workspace representing React and Next.js product work"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p className="font-display text-2xl font-semibold leading-tight text-white md:text-3xl">
                  Dashboards &amp;
                  <br />
                  landing pages
                </p>
                <p className="mt-2 font-mono text-xs text-white/70">
                  Built for startups that need to ship
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
