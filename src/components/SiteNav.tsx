import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Briefcase } from "lucide-react";

const navContainerVariants = {
  expanded: {
    width: "auto",
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      damping: 20,
      stiffness: 280,
      staggerChildren: 0.06,
      delayChildren: 0.15,
    },
  },
  collapsed: {
    width: "3rem",
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      damping: 20,
      stiffness: 280,
      when: "afterChildren" as const,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const navItemVariants = {
  expanded: { opacity: 1, x: 0, transition: { type: "spring" as const, damping: 15 } },
  collapsed: { opacity: 0, x: -16, transition: { duration: 0.18 } },
};

const collapsedIconVariants = {
  expanded: { opacity: 0, scale: 0.7, transition: { duration: 0.15 } },
  collapsed: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring" as const, damping: 15, stiffness: 300, delay: 0.12 },
  },
};

export const SiteNav = () => {
  const [isExpanded, setExpanded] = useState(true);
  const lastScrollY = useRef(0);
  const scrollOnCollapse = useRef(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = lastScrollY.current;
    if (isExpanded && latest > prev && latest > 150) {
      setExpanded(false);
      scrollOnCollapse.current = latest;
    } else if (!isExpanded && latest < prev && scrollOnCollapse.current - latest > 80) {
      setExpanded(true);
    }
    lastScrollY.current = latest;
  });

  return (
    <div className="fixed left-1/2 top-5 z-50 -translate-x-1/2">
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={isExpanded ? "expanded" : "collapsed"}
        variants={navContainerVariants}
        whileHover={!isExpanded ? { scale: 1.08 } : {}}
        whileTap={!isExpanded ? { scale: 0.95 } : {}}
        onClick={() => !isExpanded && setExpanded(true)}
        className="relative flex h-11 items-center overflow-hidden rounded-full glass shadow-[var(--shadow-glass)]"
        style={{ minWidth: "3rem", opacity: 1 }}
      >
        {/* Collapsed icon */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <motion.div variants={collapsedIconVariants}>
            <Briefcase className="h-4 w-4 text-foreground" />
          </motion.div>
        </div>

        {/* Logo */}
        <motion.div variants={navItemVariants} className="flex shrink-0 items-center gap-2 pl-4 pr-2">
          <Link to="/" className="group flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-lav-2 transition-transform duration-200 group-hover:scale-105">
              <Briefcase className="h-3 w-3 text-deep" />
            </div>
            <span className="whitespace-nowrap font-display text-sm font-bold tracking-tight text-foreground">
              InternHub
            </span>
          </Link>
        </motion.div>

        {/* Centre links */}
        <motion.div variants={navItemVariants} className="hidden items-center gap-5 px-4 md:flex">
          {[
            { label: "Find Jobs", href: "#why" },
            { label: "For Employers", href: "#path" },
            { label: "Career Advice", href: "#cta" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={(e) => e.stopPropagation()}
              className="whitespace-nowrap text-[13px] text-foreground/55 transition-colors duration-200 hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </motion.div>

        {/* Right actions */}
        <motion.div variants={navItemVariants} className="flex items-center gap-2 pr-3">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={(e) => e.stopPropagation()}
            className="cursor-pointer whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[13px] text-foreground/65 transition-colors duration-200 hover:border-white/20 hover:bg-white/10 hover:text-foreground"
          >
            Sign In
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03, opacity: 0.9 }}
            whileTap={{ scale: 0.97 }}
            onClick={(e) => e.stopPropagation()}
            className="cursor-pointer whitespace-nowrap rounded-full bg-lav-1 px-4 py-1.5 text-[13px] font-semibold text-deep"
          >
            Get Started
          </motion.button>
        </motion.div>
      </motion.nav>
    </div>
  );
};

export default SiteNav;
