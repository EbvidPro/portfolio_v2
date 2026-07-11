import { motion, useReducedMotion } from "motion/react";

/**
 * Soft Structuralism atmosphere: architectural grid + drifting accent mesh.
 * Fixed layers only — no blur on scrolling content.
 */
export function Atmosphere() {
  const reduce = useReducedMotion();

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Structural grid — developer vernacular */}
      <div className="absolute inset-0 site-grid opacity-[0.55]" />

      {/* Soft mesh orbs */}
      <motion.div
        className="absolute -left-[20%] top-[-10%] h-[55vmax] w-[55vmax] rounded-full bg-accent/[0.09] blur-3xl"
        animate={
          reduce
            ? undefined
            : {
                x: [0, 40, -20, 0],
                y: [0, 30, 10, 0],
                scale: [1, 1.08, 0.96, 1],
              }
        }
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: [0.45, 0.05, 0.55, 0.95],
        }}
      />
      <motion.div
        className="absolute -right-[15%] top-[20%] h-[45vmax] w-[45vmax] rounded-full bg-ink/[0.05] blur-3xl"
        animate={
          reduce
            ? undefined
            : {
                x: [0, -30, 20, 0],
                y: [0, 40, -15, 0],
                scale: [1, 0.94, 1.06, 1],
              }
        }
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: [0.45, 0.05, 0.55, 0.95],
        }}
      />
      <motion.div
        className="absolute bottom-[-20%] left-[30%] h-[40vmax] w-[40vmax] rounded-full bg-accent/[0.05] blur-3xl"
        animate={
          reduce
            ? undefined
            : {
                x: [0, 25, -35, 0],
                y: [0, -20, 15, 0],
              }
        }
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: [0.45, 0.05, 0.55, 0.95],
        }}
      />

      {/* Top fade so hero stays clean */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-canvas via-canvas/80 to-transparent" />
    </div>
  );
}
