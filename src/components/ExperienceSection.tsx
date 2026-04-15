import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

export default function ExperienceSection() {
  const { t } = useI18n();

  const entries = [t.experience.saasFounder, t.experience.freelance, t.experience.studies, t.experience.ifrn];

  return (
    <section id="experience" className="section-padding">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold font-display md:text-4xl"
        >
          <span className="gradient-text">{t.experience.title}</span>
        </motion.h2>

        <div className="relative mt-12 ml-4 border-l-2 border-glass-border pl-8">
          {/* Animated line overlay */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute top-0 left-[-1px] w-0.5 rounded-full"
            style={{ background: "linear-gradient(180deg, var(--glow), var(--glow-secondary))" }}
          />

          {entries.map((entry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.3, duration: 0.6 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Dot */}
              <div
                className="absolute -left-[calc(2rem+5px)] top-1 h-3 w-3 rounded-full"
                style={{ background: "linear-gradient(135deg, var(--glow), var(--glow-secondary))" }}
              />

              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{entry.period}</span>
              <h3 className="mt-1 text-xl font-bold font-display">{entry.role}</h3>
              <p className="text-sm text-muted-foreground">{entry.company}</p>
              <ul className="mt-4 space-y-2">
                {entry.highlights.map((h, hi) => (
                  <motion.li
                    key={hi}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.3 + hi * 0.1 + 0.3, duration: 0.4 }}
                    className="flex items-start gap-2 text-muted-foreground"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {h}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
