import { motion } from "framer-motion";
import {
  GraduationCap,
  Building2,
  Briefcase,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Globe,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import { ScrollReveal } from "@/components/ScrollReveal";

const UNIS = [
  "BUET", "DU", "NSU", "BRAC", "IUT", "AIUB",
  "RUET", "CUET", "SUST", "JU", "RU", "DIU",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* Ambient background glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/4 h-[600px] w-[900px] rounded-full bg-gradient-glow-1 opacity-60 blur-[180px]" />
        <div className="absolute right-[-150px] top-[55%] h-[600px] w-[600px] rounded-full bg-gradient-glow-2 opacity-50 blur-[150px]" />
        <div className="absolute bottom-[-200px] left-[-100px] h-[500px] w-[500px] rounded-full bg-gradient-glow-1 opacity-40 blur-[160px]" />
      </div>

      <SiteNav />

      {/* ─── HERO ─── */}
      <section className="relative flex flex-col items-center px-6 pb-16 pt-28 text-center md:pb-20 md:pt-32">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          custom={0}
          className="mb-7 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-lav-2" />
          <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-foreground/70">
            Bangladesh's #1 Job Platform
          </span>
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="show"
          variants={fadeUp}
          custom={1}
          className="mb-6 font-display font-black leading-[0.93] tracking-[-0.04em]"
          style={{ fontSize: "clamp(52px, 8.5vw, 128px)" }}
        >
          Land your dream
          <br />
          <span className="gradient-word">job.</span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="show"
          variants={fadeUp}
          custom={2}
          className="mb-10 max-w-[480px] text-[17px] leading-relaxed text-foreground/60"
        >
          Connect with top companies, gain real-world experience, and
          kickstart your career — built for Bangladeshi students.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          custom={3}
          className="flex flex-col items-center gap-3 sm:flex-row"
        >
          <button className="cursor-pointer rounded-full bg-lav-2 px-7 py-3 text-[15px] font-semibold text-deep transition-all duration-200 hover:-translate-y-px hover:opacity-85">
            Get Started
          </button>
          <button className="group flex cursor-pointer items-center gap-1.5 rounded-full border border-white/15 px-7 py-3 text-[15px] font-medium text-foreground/80 transition-all duration-200 hover:border-white/30 hover:text-foreground">
            Browse Jobs
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
        </motion.div>

        <motion.p
          initial="hidden"
          animate="show"
          variants={fadeUp}
          custom={4}
          className="mt-10 text-xs tracking-wide text-foreground/40"
        >
          Trusted by students from BUET · DU · NSU · BRAC · IUT &amp; more
        </motion.p>
      </section>

      {/* ─── UNIVERSITY TICKER ─── */}
      <div className="border-t border-white/[0.07] py-5">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 px-6">
          <span className="shrink-0 text-[10px] font-medium uppercase tracking-[0.2em] text-foreground/30">
            Trusted by students from
          </span>
          {UNIS.map((uni) => (
            <span
              key={uni}
              className="cursor-default text-[11px] font-medium uppercase tracking-[0.22em] text-foreground/55 transition-colors duration-200 hover:text-foreground/90"
            >
              {uni}
            </span>
          ))}
        </div>
      </div>

      {/* ─── WHY INTERNHUB (pinned) ─── */}
      <ScrollReveal pinned className="border-t border-white/[0.07]">
        <div id="why" className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="mb-16 text-center">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/40">
              Why InternHub
            </p>
            <h2
              className="font-display font-black leading-none tracking-[-0.04em]"
              style={{ fontSize: "clamp(40px, 5.5vw, 72px)" }}
            >
              Everything you <span className="gradient-word">need.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-sm text-[15px] leading-relaxed text-foreground/50">
              One platform to find, apply, and land your perfect job in Bangladesh.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {[
              { icon: Zap, bg: "bg-lav-1", title: "One-tap Apply", desc: "Upload your resume once. Apply to any job instantly — no repetitive forms, no friction.", tag: "Fast" },
              { icon: Shield, bg: "bg-lav-2", title: "Verified Companies", desc: "Every employer is vetted. No spam, no scams — only genuine opportunities from real companies.", tag: "Trusted" },
              { icon: Globe, bg: "bg-lav-3", title: "Bangladesh-Focused", desc: "Built specifically for Bangladeshi universities, students, and companies.", tag: "Local" },
            ].map(({ icon: Icon, bg, title, desc, tag }) => (
              <div
                key={title}
                className={`project-card flex min-h-[260px] cursor-default flex-col justify-between p-7 transition-transform duration-300 hover:-translate-y-1 ${bg}`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-deep/10">
                    <Icon className="h-5 w-5 text-deep/60" />
                  </div>
                  <span className="rounded-full border border-deep/20 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-deep/40">
                    {tag}
                  </span>
                </div>
                <div>
                  <h3 className="mb-2 font-display text-xl font-bold tracking-[-0.025em] text-deep">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-deep/55">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* ─── STATS ─── */}
      <ScrollReveal className="border-t border-white/[0.07] px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-8 text-center md:grid-cols-4 md:gap-4">
          {[
            { value: "10K+", label: "Active Listings" },
            { value: "5K+", label: "Companies" },
            { value: "50K+", label: "Students" },
            { value: "95%", label: "Success Rate" },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center">
              <div
                className="font-display font-black leading-[0.9] tracking-[-0.05em] text-lav-1"
                style={{ fontSize: "clamp(44px, 6vw, 80px)" }}
              >
                {value}
              </div>
              <div className="mt-3 text-xs font-medium uppercase tracking-wide text-foreground/45">
                {label}
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* ─── CHOOSE YOUR PATH (pinned) ─── */}
      <ScrollReveal pinned className="border-t border-white/[0.07]">
        <div id="path" className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="mb-14 text-center">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/40">
              Get Started
            </p>
            <h2
              className="font-display font-black leading-none tracking-[-0.04em]"
              style={{ fontSize: "clamp(40px, 5.5vw, 72px)" }}
            >
              Choose your <span className="gradient-word">path.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-sm text-[15px] leading-relaxed text-foreground/50">
              Create a free account and unlock everything in seconds.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {/* Student */}
            <div className="group block cursor-pointer">
              <div className="project-card flex min-h-[400px] flex-col justify-between bg-lav-4 p-8 transition-transform duration-300 group-hover:-translate-y-1">
                <div>
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-deep/10">
                    <GraduationCap className="h-6 w-6 text-deep/60" />
                  </div>
                  <h3
                    className="mb-2 font-display font-bold leading-[1.05] tracking-[-0.03em] text-deep"
                    style={{ fontSize: "clamp(24px, 2.5vw, 36px)" }}
                  >
                    I&apos;m a Student
                  </h3>
                  <p className="mb-6 max-w-xs text-sm leading-relaxed text-deep/55">
                    Find jobs, build your profile, and kickstart your professional journey.
                  </p>
                  <ul className="space-y-2.5">
                    {[
                      "Browse hundreds of BD jobs & internships",
                      "Upload and manage your resume",
                      "Apply with one tap",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm text-deep/65">
                        <CheckCircle className="h-3.5 w-3.5 shrink-0 text-deep/40" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8 flex items-center gap-2 font-display text-sm font-semibold text-deep transition-all duration-300 group-hover:gap-4">
                  Sign up as Student
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>

            {/* Employer */}
            <div className="group block cursor-pointer">
              <div className="project-card flex min-h-[400px] flex-col justify-between bg-lav-5 p-8 transition-transform duration-300 group-hover:-translate-y-1">
                <div>
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-deep/10">
                    <Building2 className="h-6 w-6 text-deep/60" />
                  </div>
                  <h3
                    className="mb-2 font-display font-bold leading-[1.05] tracking-[-0.03em] text-deep"
                    style={{ fontSize: "clamp(24px, 2.5vw, 36px)" }}
                  >
                    I&apos;m an Employer
                  </h3>
                  <p className="mb-6 max-w-xs text-sm leading-relaxed text-deep/55">
                    Post job opportunities and discover Bangladesh&apos;s brightest students.
                  </p>
                  <ul className="space-y-2.5">
                    {[
                      "Post job listings for free",
                      "Browse student profiles & resumes",
                      "Connect with top university talent",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm text-deep/65">
                        <CheckCircle className="h-3.5 w-3.5 shrink-0 text-deep/40" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8 flex items-center gap-2 font-display text-sm font-semibold text-deep transition-all duration-300 group-hover:gap-4">
                  Sign up as Employer
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-foreground/40">
            Already have an account?{" "}
            <a
              href="#"
              className="text-foreground/60 underline underline-offset-4 transition-colors duration-200 hover:text-foreground"
            >
              Sign in here
            </a>
          </p>
        </div>
      </ScrollReveal>

      {/* ─── CTA BANNER ─── */}
      <ScrollReveal className="border-t border-white/[0.07] px-6 py-28 md:px-10">
        <div id="cta" className="mx-auto max-w-[1200px] text-center">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/40">
            Ready when you are
          </p>
          <h2
            className="mb-8 font-display font-black leading-none tracking-[-0.04em]"
            style={{ fontSize: "clamp(40px, 5.5vw, 72px)" }}
          >
            Start your journey <span className="gradient-word">today.</span>
          </h2>
          <p className="mx-auto mb-10 max-w-sm text-[15px] leading-relaxed text-foreground/50">
            Join thousands of students and employers already on InternHub.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button className="cursor-pointer rounded-full bg-lav-1 px-8 py-3.5 text-[15px] font-semibold text-deep transition-all duration-200 hover:-translate-y-px hover:opacity-85">
              Find Jobs
            </button>
            <button className="cursor-pointer rounded-full border border-white/15 px-8 py-3.5 text-[15px] font-medium text-foreground/80 transition-all duration-200 hover:border-white/30 hover:text-foreground">
              Post a Job
            </button>
          </div>
        </div>
      </ScrollReveal>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-white/[0.07] px-6 py-8 md:px-10">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-5 md:flex-row">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-lav-2">
              <Briefcase className="h-4 w-4 text-deep" />
            </div>
            <span className="font-display text-sm font-bold text-foreground">InternHub</span>
          </div>

          <div className="flex flex-wrap justify-center gap-7 text-sm text-foreground/40">
            {["About", "Contact", "Privacy Policy", "Terms of Service"].map((link) => (
              <a key={link} href="#" className="transition-colors duration-200 hover:text-foreground/80">
                {link}
              </a>
            ))}
          </div>

          <div className="text-sm text-foreground/30">© 2026 InternHub</div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
