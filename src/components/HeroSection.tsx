import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { ChevronDown } from "lucide-react";
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

export default function HeroSection() {
  const { t } = useI18n();

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
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

      <div className="relative z-10 flex flex-col items-center w-full max-w-5xl">
        {/* Photo + text row */}
        <div className="flex flex-col md:flex-row items-center md:items-center gap-10 w-full">
          {/* Profile photo */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="shrink-0 h-64 w-64 rounded-2xl glow-border p-[3px]"
            style={{ background: "linear-gradient(135deg, var(--glow), var(--glow-secondary))" }}
          >
            <div className="h-full w-full rounded-2xl overflow-hidden">
              <img
                src={fotoPortfolio}
                alt="Vinícius Miranda"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </motion.div>

          {/* Text info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
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
          </div>
        </div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })} className="btn-glow">
            {t.hero.cta1}
          </button>
          <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="btn-outline-glow">
            {t.hero.cta2}
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute -bottom-20 left-1/2 -translate-x-1/2"
        >
          <ChevronDown size={28} className="text-muted-foreground animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
