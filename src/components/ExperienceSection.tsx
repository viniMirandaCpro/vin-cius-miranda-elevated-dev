import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { Briefcase, GraduationCap, Code2, Lightbulb } from "lucide-react";

const entryMeta = [
  { icon: Briefcase, color: "oklch(0.65 0.28 290)", tags: ["React", "Supabase", "Flutter", "AI"] },
  { icon: Code2, color: "oklch(0.7 0.2 220)", tags: ["Laravel", "Vue.js", "Docker", "MySQL", "Inertia.js"] },
  { icon: Lightbulb, color: "oklch(0.7 0.25 160)", tags: ["Flutter", "Dart", "Python"] },
  { icon: GraduationCap, color: "oklch(0.75 0.18 80)", tags: ["Informática"] },
];

export default function ExperienceSection() {
  const { t } = useI18n();

  const entries = [t.experience.saasFounder, t.experience.freelance, t.experience.studies, t.experience.ifrn];

  return (
    <section id="experience" className="section-padding">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-3xl font-bold font-display md:text-4xl"
        >
          <span className="gradient-text">{t.experience.title}</span>
        </motion.h2>

        <div className="relative mt-12 ml-4 border-l-2 border-glass-border pl-8">
          {/* Animated line overlay */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute top-0 left-[-1px] w-0.5 rounded-full"
            style={{ background: "linear-gradient(180deg, var(--glow), var(--glow-secondary))" }}
          />

          {entries.map((entry, i) => {
            const meta = entryMeta[i];
            const Icon = meta.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15, duration: 0.4 }}
                className="relative mb-12 last:mb-0"
              >
                {/* Dot with icon */}
                <div
                  className="absolute -left-[calc(2rem+10px)] top-0 flex h-5 w-5 items-center justify-center rounded-full"
                  style={{ background: `linear-gradient(135deg, ${meta.color}, var(--glow-secondary))` }}
                >
                  <Icon size={11} className="text-white" />
                </div>

                <div className="glass-card glow-border-hover p-5 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-bold font-display">{entry.role}</h3>
                      <p className="text-sm text-muted-foreground">{entry.company}</p>
                    </div>
                    <span
                      className="rounded-full px-3 py-1 text-xs font-semibold"
                      style={{ background: `${meta.color}20`, color: meta.color, border: `1px solid ${meta.color}40` }}
                    >
                      {entry.period}
                    </span>
                  </div>

                  {/* Tech tags */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {meta.tags.map((tag) => (
                      <span key={tag} className="rounded-md bg-secondary px-2 py-0.5 text-[11px] font-medium text-secondary-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <ul className="mt-4 space-y-2">
                    {entry.highlights.map((h, hi) => (
                      <motion.li
                        key={hi}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: i * 0.15 + hi * 0.06 + 0.2, duration: 0.35 }}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: meta.color }} />
                        {h}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
