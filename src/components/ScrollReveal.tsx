import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

interface ScrollRevealProps {
  children: ReactNode;
  /** Pin the section while it animates in (Cluely-style) */
  pinned?: boolean;
  /** Distance the content slides from (px) */
  offset?: number;
  className?: string;
}

/**
 * Cluely-style scroll-driven section.
 * - When `pinned`, the inner content sticks to the viewport while the outer
 *   wrapper continues scrolling, giving the "story-frame" feel.
 * - Content fades + slides in based on viewport progress and fades out as
 *   the section leaves, so each section has a clear "moment".
 */
export const ScrollReveal = ({
  children,
  pinned = false,
  offset = 60,
  className = "",
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);

  // Track this section's progress through the viewport.
  // 0 = section just entered bottom, 1 = section just left top.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Fade in from 0→0.25, hold, fade out from 0.75→1
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [offset, 0, 0, -offset / 2]);
  const scale = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.96, 1, 1, 0.98]);

  if (pinned) {
    return (
      <section ref={ref} className={`relative ${className}`} style={{ minHeight: "150vh" }}>
        <div className="sticky top-0 flex min-h-screen items-center justify-center">
          <motion.div style={{ opacity, y, scale }} className="w-full">
            {children}
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <motion.section
      ref={ref}
      style={{ opacity, y }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

/** Hook variant for callers who want raw progress values */
export const useSectionProgress = (
  ref: React.RefObject<HTMLElement>
): MotionValue<number> => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  return scrollYProgress;
};
