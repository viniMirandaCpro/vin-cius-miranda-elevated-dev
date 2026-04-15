import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { Menu, X } from "lucide-react";

const sections = ["about", "stack", "projects", "experience", "contact"] as const;

export default function Navbar() {
  const { t, lang, toggle } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      for (const s of [...sections].reverse()) {
        const el = document.getElementById(s);
        if (el && el.getBoundingClientRect().top < 200) {
          setActive(s);
          return;
        }
      }
      setActive("");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLabels: Record<string, string> = {
    about: t.nav.about,
    stack: t.nav.stack,
    projects: t.nav.projects,
    experience: t.nav.experience,
    contact: t.nav.contact,
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-card border-b border-b-glass-border" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-2xl font-bold font-display">
            <span className="gradient-text">VM</span>
          </button>

          <div className="hidden items-center gap-8 md:flex">
            {sections.map((s) => (
              <button
                key={s}
                onClick={() => scrollTo(s)}
                className={`relative text-sm font-medium transition-colors duration-300 ${
                  active === s ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {navLabels[s]}
                {active === s && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                    style={{ background: "linear-gradient(90deg, var(--glow), var(--glow-secondary))" }}
                  />
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggle}
              className="glass-card px-3 py-1.5 text-xs font-semibold tracking-wider text-muted-foreground transition-colors hover:text-foreground"
            >
              {lang === "pt" ? "EN" : "PT"}
            </button>
            <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-background/95 backdrop-blur-xl md:hidden"
          >
            {sections.map((s) => (
              <button
                key={s}
                onClick={() => scrollTo(s)}
                className="text-2xl font-display font-semibold text-foreground"
              >
                {navLabels[s]}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
