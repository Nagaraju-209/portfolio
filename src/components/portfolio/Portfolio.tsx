import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  Download,
  FolderGit2,
  ArrowUp,
  Menu,
  X,
  ExternalLink,
  Sparkles,
  Rocket,
  GraduationCap,
  Award,
  Briefcase,
  MapPin,
  Calendar,
  ChevronRight,
  BookOpen,
  Workflow as WorkflowIcon,
  Send,
} from "lucide-react";
import heroImg from "@/assets/hero-devops.jpg";

function Github({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.97 3.22 9.18 7.69 10.67.56.1.77-.24.77-.54v-1.9c-3.13.68-3.79-1.34-3.79-1.34-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.63 1.22 3.28.93.1-.73.39-1.22.71-1.5-2.5-.29-5.13-1.25-5.13-5.57 0-1.23.44-2.24 1.16-3.03-.12-.29-.5-1.44.11-3.01 0 0 .95-.3 3.11 1.16.9-.25 1.87-.38 2.83-.38.96 0 1.93.13 2.83.38 2.16-1.46 3.11-1.16 3.11-1.16.61 1.57.23 2.72.11 3.01.72.79 1.16 1.8 1.16 3.03 0 4.33-2.64 5.28-5.15 5.56.4.35.76 1.03.76 2.08v3.08c0 .3.2.65.78.54 4.47-1.49 7.68-5.7 7.68-10.67C23.25 5.48 18.27.5 12 .5Z" />
    </svg>
  );
}

function Linkedin({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5.001ZM3 9h4v12H3V9Zm7 0h3.83v1.64h.06c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.32c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.81V21h-4V9Z" />
    </svg>
  );
}
import { Activity } from "lucide-react";
import type { Project } from "./data";
import {
  NAV_LINKS,
  TYPING_WORDS,
  STATS,
  ABOUT_HIGHLIGHTS,
  SKILL_GROUPS,
  DEVOPS_FOCUS_FLOW,
  DEVOPS_FOCUS_TOOLS,
  PROJECTS,
  WORKFLOW_STEPS,
  EXPERIENCE,
  CERTIFICATIONS,
  CURRENTLY_LEARNING,
  CONTACT,
} from "./data";

/* ---------- Reusable primitives ---------- */

function GradientText({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
      {children}
    </span>
  );
}

function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-14 max-w-2xl text-center"
    >
      <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs font-medium uppercase tracking-widest text-cyan-300">
        <Sparkles className="h-3 w-3" /> {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
        <GradientText>{title}</GradientText>
      </h2>
      {subtitle ? <p className="mt-4 text-base text-slate-400">{subtitle}</p> : null}
    </motion.div>
  );
}

/* ---------- Background ---------- */

function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#05070d]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.15),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.18),transparent_50%),radial-gradient(circle_at_50%_90%,rgba(14,165,233,0.12),transparent_55%)]" />
      <motion.div
        className="absolute -left-40 top-20 h-[520px] w-[520px] rounded-full bg-cyan-500/20 blur-[120px]"
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-40 top-1/3 h-[480px] w-[480px] rounded-full bg-blue-600/20 blur-[120px]"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
    </div>
  );
}

function Particles() {
  const dots = Array.from({ length: 28 });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((_, i) => {
        const size = 2 + (i % 4);
        const left = (i * 37) % 100;
        const top = (i * 53) % 100;
        const dur = 6 + (i % 6);
        return (
          <motion.span
            key={i}
            className="absolute rounded-full bg-cyan-300/60"
            style={{ width: size, height: size, left: `${left}%`, top: `${top}%` }}
            animate={{ y: [0, -20, 0], opacity: [0.2, 0.9, 0.2] }}
            transition={{ duration: dur, repeat: Infinity, delay: i * 0.15 }}
          />
        );
      })}
    </div>
  );
}

/* ---------- Navbar ---------- */

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "border-b border-white/5 bg-[#05070d]/70 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#home" className="flex items-center gap-2 text-white">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 font-black text-slate-950 shadow-lg shadow-cyan-500/30">
            DR
          </span>
          <span className="hidden text-sm font-semibold sm:block">
            Dandu <span className="text-cyan-300">Raju</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3 py-2 text-sm text-slate-300 transition-colors hover:bg-white/5 hover:text-cyan-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-slate-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-slate-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={CONTACT.resume}
            download
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/25 transition-transform hover:scale-[1.03]"
          >
            <Download className="h-4 w-4" /> Resume
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-slate-200 lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/5 bg-[#05070d]/90 backdrop-blur-xl lg:hidden"
          >
            <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-white/5 hover:text-cyan-300"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 flex gap-2">
                <a
                  href={CONTACT.resume}
                  download
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-2 text-sm font-semibold text-slate-950"
                >
                  <Download className="h-4 w-4" /> Resume
                </a>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

/* ---------- Hero ---------- */

function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const current = words[i % words.length];
    const speed = del ? 45 : 90;
    const t = setTimeout(() => {
      const next = del
        ? current.slice(0, Math.max(0, text.length - 1))
        : current.slice(0, text.length + 1);
      setText(next);
      if (!del && next === current) setTimeout(() => setDel(true), 1400);
      else if (del && next === "") {
        setDel(false);
        setI((v) => v + 1);
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i, words]);
  return text;
}

function Hero() {
  const typed = useTypewriter(TYPING_WORDS);
  return (
    <section id="home" className="relative flex min-h-dvh items-center overflow-hidden pt-28">
      <Particles />
      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs font-medium uppercase tracking-widest text-cyan-300">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
            Open to full-time opportunities
          </span>
          <h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Dandu Rama Siva <br />
            <GradientText>Naga Raju</GradientText>
          </h1>
          <p className="mt-4 text-lg text-slate-300 sm:text-xl">
            DevOps Engineer <span className="text-slate-500">|</span> Cloud &amp; Automation
          </p>
          <p className="mt-3 flex h-8 items-center text-lg text-cyan-300 sm:text-xl">
            <span className="font-semibold">{typed}</span>
            <span className="ml-1 inline-block h-6 w-[2px] animate-pulse bg-cyan-300" />
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300">
            Computer Science graduate with hands-on experience building CI/CD pipelines,
            containerized applications, AWS infrastructure, Infrastructure as Code and DevSecOps
            workflows.
          </p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-400">
            Computer Science graduate focused on DevOps, cloud infrastructure, automation, CI/CD and
            reliable software delivery.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-3.5 text-base font-bold text-slate-950 shadow-xl shadow-cyan-500/40 transition-transform hover:scale-[1.04]"
            >
              <FolderGit2 className="h-5 w-5" aria-hidden="true" /> View Projects
            </a>
            <a
              href={CONTACT.resume}
              download
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
            >
              <Download className="h-4 w-4" aria-hidden="true" /> Download Resume
            </a>
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-slate-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
            >
              <Github className="h-4 w-4" aria-hidden="true" /> GitHub
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-slate-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" /> LinkedIn
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-slate-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
            >
              <Send className="h-4 w-4" aria-hidden="true" /> Contact Me
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {STATS.map((s, idx) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur"
              >
                <dt className="text-2xl font-black text-white sm:text-3xl">
                  <GradientText>{s.value}</GradientText>
                </dt>
                <dd className="mt-1 text-xs text-slate-400">{s.label}</dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-400/30 to-blue-600/30 blur-3xl" />
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2 backdrop-blur"
          >
            <img
              src={heroImg}
              alt="DevOps engineering visualization"
              width={1600}
              height={1200}
              className="h-auto w-full rounded-[1.6rem] object-cover"
            />
            <div className="pointer-events-none absolute inset-2 rounded-[1.6rem] ring-1 ring-inset ring-white/10" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- About ---------- */

function About() {
  const items = ABOUT_HIGHLIGHTS;
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionTitle
          eyebrow="About Me"
          title="Building reliable cloud infrastructure and delivery pipelines"
        />
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur"
          >
            <p className="text-base leading-relaxed text-slate-300">
              I'm a Computer Science graduate focused on DevOps, cloud infrastructure, automation
              and reliable software delivery. I enjoy turning application code into repeatable
              delivery workflows using CI/CD, containers and Infrastructure as Code.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-400">
              My hands-on projects cover AWS infrastructure, Terraform, Docker, Kubernetes, GitHub
              Actions, Jenkins, DevSecOps, monitoring and Spring Boot applications. I focus on
              building solutions that are repeatable, secure and easier to operate.
            </p>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 gap-3 sm:grid-cols-2"
          >
            {items.map((it) => (
              <li
                key={it}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-slate-300 backdrop-blur transition-colors hover:border-cyan-400/30"
              >
                <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                {it}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- Skills ---------- */

function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionTitle
          eyebrow="Skills"
          title="Tools I work with"
          subtitle="Languages, cloud services, DevOps tooling and platforms used across my hands-on projects."
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {SKILL_GROUPS.map((group, idx) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition-colors hover:border-cyan-400/40"
              >
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 opacity-0 transition-opacity group-hover:opacity-100 group-hover:from-cyan-500/10 group-hover:to-blue-500/10" />
                <div className="mb-4 inline-flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 text-cyan-300 ring-1 ring-inset ring-white/10">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((s) => (
                    <li
                      key={s}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300 transition-colors group-hover:border-cyan-400/30 group-hover:text-cyan-200"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- DevOps Focus ---------- */

function DevOpsFocus() {
  return (
    <section id="focus" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionTitle
          eyebrow="DevOps Focus"
          title="From application code to cloud infrastructure"
        />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur sm:p-8"
        >
          <ol className="flex flex-wrap items-center justify-center gap-x-2 gap-y-3">
            {DEVOPS_FOCUS_FLOW.map((step, i) => (
              <li key={step} className="flex items-center gap-2">
                <span className="rounded-full border border-cyan-400/25 bg-cyan-400/5 px-3 py-1.5 text-xs font-semibold text-cyan-200 sm:text-sm">
                  {step}
                </span>
                {i < DEVOPS_FOCUS_FLOW.length - 1 ? (
                  <ChevronRight className="h-4 w-4 shrink-0 text-cyan-300/50" aria-hidden="true" />
                ) : null}
              </li>
            ))}
          </ol>
          <div className="mt-7 border-t border-white/10 pt-6">
            <p className="mb-3 text-center text-xs font-semibold uppercase tracking-widest text-slate-500">
              Tooling across the lifecycle
            </p>
            <ul className="flex flex-wrap justify-center gap-2">
              {DEVOPS_FOCUS_TOOLS.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs text-slate-300"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- Architecture diagram (reusable) ---------- */

function ArchitectureDiagram({ project }: { project: Project }) {
  return (
    <div className="space-y-5">
      <div className="rounded-2xl border border-white/10 bg-[#05070d]/60 p-5">
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-500">
          Delivery pipeline
        </p>
        <ol className="relative space-y-3 border-l border-cyan-400/20 pl-5">
          {project.timeline.map((step, i) => (
            <li key={step} className="relative">
              <span className="absolute -left-[27px] top-1 grid h-4 w-4 place-items-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 ring-4 ring-[#05070d]">
                <span className="h-1 w-1 rounded-full bg-slate-950" />
              </span>
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-sm font-semibold text-white">{step}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {project.infrastructure ? (
        <div className="rounded-2xl border border-white/10 bg-[#05070d]/60 p-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
            Infrastructure layer
          </p>
          <p className="text-sm font-semibold text-cyan-300">{project.infrastructure.root}</p>
          <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {project.infrastructure.nodes.map((n) => (
              <li
                key={n}
                className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-slate-300"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                {n}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {project.observability ? (
        <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.04] p-5">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
            Observability layer
          </p>
          <p className="flex items-start gap-2 text-sm text-slate-300">
            <Activity className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" aria-hidden="true" />
            {project.observability}
          </p>
        </div>
      ) : null}
    </div>
  );
}

/* ---------- Projects ---------- */

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false);
  const detailsId = `project-details-${index}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className={`group relative overflow-hidden rounded-3xl border backdrop-blur transition-colors sm:p-10 ${
        project.flagship
          ? "border-cyan-400/30 bg-gradient-to-br from-cyan-400/[0.08] to-blue-500/[0.04] p-6 shadow-2xl shadow-cyan-500/10"
          : "border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-6 hover:border-cyan-400/30"
      }`}
    >
      <span
        className={`mb-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest ${
          project.flagship
            ? "border border-cyan-400/40 bg-cyan-400/15 text-cyan-200"
            : "border border-white/10 bg-white/[0.05] text-slate-400"
        }`}
      >
        {project.flagship ? <Rocket className="h-3 w-3" aria-hidden="true" /> : null}
        {project.badge}
      </span>

      <div
        className={`grid grid-cols-1 gap-8 ${project.timeline.length > 0 ? "lg:grid-cols-[1.15fr_1fr]" : ""}`}
      >
        <div className="min-w-0">
          <h3
            className={`font-bold text-white ${project.flagship ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"}`}
          >
            {project.title}
          </h3>
          <p className="mt-3 text-base leading-relaxed text-slate-400">{project.description}</p>

          <div className="mt-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
              Technologies
            </p>
            <ul className="flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 text-xs text-slate-300"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
              Key features
            </p>
            <ul className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
              {(open ? project.features : project.features.slice(0, 6)).map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                  <ChevronRight
                    className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300"
                    aria-hidden="true"
                  />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <AnimatePresence initial={false}>
            {open && project.engineering && project.engineering.length > 0 ? (
              <motion.div
                key="eng"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="mt-6">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
                    Engineering highlights
                  </p>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {project.engineering.map((h) => (
                      <div
                        key={h.title}
                        className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                      >
                        <p className="text-sm font-semibold text-cyan-300">{h.title}</p>
                        <p className="mt-1.5 text-xs leading-relaxed text-slate-400">{h.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-transform hover:scale-[1.03] ${
                project.flagship
                  ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-lg shadow-cyan-500/25"
                  : "border border-white/10 bg-white/5 text-white hover:border-cyan-400/40 hover:text-cyan-300"
              }`}
            >
              <Github className="h-4 w-4" aria-hidden="true" /> View Repository
            </a>
            {project.liveDemo ? (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white hover:border-cyan-400/40 hover:text-cyan-300"
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" /> Live Demo
              </a>
            ) : null}
            {project.timeline.length > 0 || project.engineering ? (
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls={detailsId}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
              >
                <WorkflowIcon className="h-4 w-4" aria-hidden="true" />
                {open ? "Hide engineering details" : "View engineering details"}
              </button>
            ) : null}
          </div>
        </div>

        {project.timeline.length > 0 ? (
          <div id={detailsId}>
            <ArchitectureDiagram project={project} />
          </div>
        ) : null}
      </div>
    </motion.article>
  );
}

function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionTitle
          eyebrow="Projects"
          title="Production-style DevOps builds"
          subtitle="Hands-on work across CI/CD, containers, AWS cloud infrastructure and infrastructure as code."
        />
        <div className="space-y-8">
          {PROJECTS.map((p, idx) => (
            <ProjectCard key={p.title} project={p} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Production DevOps Workflow ---------- */

function Workflow() {
  return (
    <section id="workflow" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionTitle
          eyebrow="Delivery Workflow"
          title="From commit to running service"
          subtitle="The automated delivery flow behind my flagship AWS DevOps platform."
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {WORKFLOW_STEPS.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur transition-colors hover:border-cyan-400/40"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-cyan-400/20 to-blue-500/20 text-xs font-bold text-cyan-300 ring-1 ring-inset ring-white/10">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-sm font-semibold text-white">{step.label}</h3>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-slate-400">{step.detail}</p>
              {i < WORKFLOW_STEPS.length - 1 ? (
                <span className="absolute right-3 top-3 text-cyan-300/60">
                  <ChevronRight className="h-4 w-4" />
                </span>
              ) : null}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Experience ---------- */

function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionTitle eyebrow="Experience" title="Internships & real work" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {EXPERIENCE.map((e, idx) => (
            <motion.div
              key={e.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur transition-colors hover:border-cyan-400/40"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 text-cyan-300 ring-1 ring-inset ring-white/10">
                  <Briefcase className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-white">{e.role}</h3>
                  <p className="text-sm text-cyan-300">{e.company}</p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-400">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" /> {e.period}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" /> {e.location}
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">{e.summary}</p>
              <ul className="mt-4 space-y-2">
                {e.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-slate-300">
                    <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                    {b}
                  </li>
                ))}
              </ul>
              <ul className="mt-5 flex flex-wrap gap-2">
                {e.highlights.map((h) => (
                  <li
                    key={h}
                    className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs text-slate-300"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Certifications ---------- */

function Certifications() {
  return (
    <section id="certifications" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionTitle eyebrow="Certifications" title="Verified credentials" />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATIONS.map((c, idx) => (
            <motion.div
              key={c}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-cyan-500/10 blur-2xl transition-all group-hover:bg-cyan-400/20" />
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 text-slate-950 shadow-lg shadow-cyan-500/30">
                <Award className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-base font-semibold text-white">{c}</h3>
              <p className="mt-1 text-xs text-slate-400">Cloud & DevOps</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Currently Learning ---------- */

function CurrentlyLearning() {
  return (
    <section id="learning" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionTitle
          eyebrow="Currently learning"
          title="Sharpening my DevOps roadmap"
          subtitle="Actively expanding my toolkit with the next wave of cloud-native tooling."
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur"
        >
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 text-slate-950 shadow-lg shadow-cyan-500/30">
              <BookOpen className="h-6 w-6" />
            </span>
            <div>
              <h3 className="text-lg font-bold text-white">Learning roadmap</h3>
              <p className="text-sm text-cyan-300">Next up on my DevOps journey</p>
            </div>
          </div>
          <ul className="mt-6 flex flex-wrap gap-2">
            {CURRENTLY_LEARNING.map((item) => (
              <li
                key={item}
                className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1.5 text-xs font-medium text-cyan-200"
              >
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- Education ---------- */

function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionTitle eyebrow="Education" title="Academic background" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur"
        >
          <div className="flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 text-slate-950 shadow-lg shadow-cyan-500/30">
              <GraduationCap className="h-6 w-6" />
            </span>
            <div className="min-w-0">
              <h3 className="text-xl font-bold text-white">Bachelor of Technology</h3>
              <p className="mt-1 text-cyan-300">Computer Science and Design</p>
              <p className="mt-1 text-sm text-slate-400">SRKR Engineering College</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs text-slate-300">
                  CGPA 7.73
                </span>
                <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                  Graduated 2025
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionTitle
          eyebrow="Contact"
          title="Let's build reliable systems"
          subtitle="Open to Junior DevOps, Cloud and DevOps Engineer opportunities."
        />
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-3">
            {[
              { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
              { icon: Phone, label: "Phone", value: CONTACT.phone, href: `tel:${CONTACT.phone}` },
              {
                icon: Linkedin,
                label: "LinkedIn",
                value: "dandu-rama-siva-naga-raju",
                href: CONTACT.linkedin,
              },
              { icon: Github, label: "GitHub", value: "Nagaraju-209", href: CONTACT.github },
            ].map((c) => {
              const Icon = c.icon;
              return (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur transition-colors hover:border-cyan-400/40"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 text-cyan-300 ring-1 ring-inset ring-white/10">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs uppercase tracking-widest text-slate-500">{c.label}</p>
                    <p className="truncate text-sm font-medium text-white">{c.value}</p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-slate-500 transition-colors group-hover:text-cyan-300" />
                </a>
              );
            })}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const data = new FormData(form);
              const name = String(data.get("name") ?? "");
              const email = String(data.get("email") ?? "");
              const message = String(data.get("message") ?? "");
              const body = encodeURIComponent(`Hi Raju,\n\n${message}\n\n— ${name} (${email})`);
              window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
                `Portfolio contact from ${name}`,
              )}&body=${body}`;
              setSubmitted(true);
            }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur sm:p-8"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-slate-400">
                  Name
                </span>
                <input
                  name="name"
                  required
                  maxLength={100}
                  className="w-full rounded-xl border border-white/10 bg-[#05070d]/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400/50 focus:outline-none"
                  placeholder="Your name"
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-slate-400">
                  Email
                </span>
                <input
                  name="email"
                  type="email"
                  required
                  maxLength={255}
                  className="w-full rounded-xl border border-white/10 bg-[#05070d]/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400/50 focus:outline-none"
                  placeholder="you@company.com"
                />
              </label>
            </div>
            <label className="mt-4 block">
              <span className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-slate-400">
                Message
              </span>
              <textarea
                name="message"
                required
                rows={5}
                maxLength={1000}
                className="w-full resize-none rounded-xl border border-white/10 bg-[#05070d]/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400/50 focus:outline-none"
                placeholder="Tell me about the role or project..."
              />
            </label>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/25"
            >
              <Mail className="h-4 w-4" />
              {submitted ? "Opening your email…" : "Send message"}
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */

function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 sm:flex-row sm:px-8">
        <p className="text-center text-sm text-slate-500 sm:text-left">
          © {new Date().getFullYear()} Dandu Rama Siva Naga Raju. Built with React · TanStack Start
          · TypeScript · Tailwind CSS · Hosted on Vercel.
        </p>
        <div className="flex items-center gap-2">
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-slate-300 hover:border-cyan-400/40 hover:text-cyan-300"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-slate-300 hover:border-cyan-400/40 hover:text-cyan-300"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            aria-label="Email"
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-slate-300 hover:border-cyan-400/40 hover:text-cyan-300"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <AnimatePresence>
      {show ? (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-slate-950 shadow-lg shadow-cyan-500/30 hover:scale-110"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}

/* ---------- Root ---------- */

export default function Portfolio() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });

  return (
    <div className="relative min-h-dvh overflow-x-clip scroll-smooth text-slate-100 antialiased">
      <AnimatedBackground />
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 right-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500"
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <DevOpsFocus />
        <Projects />
        <Workflow />
        <Experience />
        <Certifications />
        <CurrentlyLearning />
        <Education />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
