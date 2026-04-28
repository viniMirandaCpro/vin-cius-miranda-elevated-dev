import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { ChevronDown, Github, Linkedin, MessageCircle, Mail, MapPin } from "lucide-react";
import fotoPortfolio from "@/assets/foto-portfolio.jpeg";

function TypingText({ texts }: { texts: string[] }) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[index];
    if (!deleting) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setDeleting(true), 2000);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
        return () => clearTimeout(t);
      } else {
        setDeleting(false);
        setIndex((i) => (i + 1) % texts.length);
      }
    }
  }, [displayed, deleting, index, texts]);

  return (
    <span className="gradient-text">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
}

const socials = [
  { icon: Github, href: "https://github.com/viniMirandaCpro", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/vinícius-miranda", label: "LinkedIn" },
  { icon: Mail, href: "mailto:vinimirandapro220@gmail.com", label: "Email" },
];

export default function HeroSection() {
  const { t } = useI18n();

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      {/* Aurora background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: "linear-gradient(-45deg, oklch(0.3 0.2 290), oklch(0.15 0.15 220), oklch(0.2 0.18 260), oklch(0.1 0.1 320))",
          backgroundSize: "400% 400%",
          animation: "aurora 15s ease infinite",
        }}
      />
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(var(--glow) 1px, transparent 1px), linear-gradient(90deg, var(--glow) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full opacity-20 blur-[100px]"
        style={{ background: "var(--glow)", animation: "float 6s ease-in-out infinite" }} />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full opacity-15 blur-[120px]"
        style={{ background: "var(--glow-secondary)", animation: "float 8s ease-in-out infinite 2s" }} />
      <div className="absolute top-1/2 left-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-[80px]"
        style={{ background: "oklch(0.7 0.25 160)", animation: "float 10s ease-in-out infinite 4s" }} />

      <div className="relative z-10 flex flex-col items-center w-full max-w-5xl">
        {/* Photo + text row */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10 w-full">
          {/* Profile photo */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative shrink-0 pb-4 sm:pb-0"
          >
            <div
              className="h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 rounded-2xl glow-border p-[3px]"
              style={{ background: "linear-gradient(135deg, var(--glow), var(--glow-secondary))" }}
            >
              <div className="h-full w-full rounded-2xl overflow-hidden">
                <img
                  src={fotoPortfolio}
                  alt="Vinícius Miranda"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              className="absolute -bottom-3 -right-3 flex items-center gap-1.5 rounded-full border border-glass-border bg-background/90 px-3 py-1.5 text-xs font-semibold backdrop-blur-sm"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400" style={{ animation: "pulse-glow 2s ease-in-out infinite" }} />
              {t.hero.available}
            </motion.div>
          </motion.div>

          {/* Text info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-3 flex items-center gap-1.5 text-xs text-muted-foreground"
            >
              <MapPin size={12} />
              <span>Rio Grande do Norte, Brasil</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl font-bold tracking-tight md:text-7xl font-display"
            >
              <span className="gradient-text">Vinícius Miranda</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-4 h-10 text-xl font-medium md:text-2xl font-display"
            >
              <TypingText texts={t.hero.roles as unknown as string[]} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-6 max-w-xl text-muted-foreground leading-relaxed"
            >
              {t.hero.bio}
            </motion.p>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.85 }}
              className="mt-5 flex items-center gap-3"
            >
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-glass-border bg-secondary/60 text-muted-foreground transition-all duration-300 hover:border-primary hover:text-foreground hover:shadow-[0_0_15px_oklch(0.65_0.28_290_/_30%)]"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })} className="btn-glow">
            {t.hero.cta1}
          </button>
          <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="btn-outline-glow">
            {t.hero.cta2}
          </button>
        </motion.div>

        {/* Quick stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-8"
        >
          {(t.hero.stats as unknown as { value: string; label: string }[]).map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-2xl font-bold font-display gradient-text">{stat.value}</span>
              <span className="mt-1 text-xs text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7, duration: 1 }}
          className="absolute -bottom-20 left-1/2 -translate-x-1/2"
        >
          <ChevronDown size={28} className="text-muted-foreground animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
