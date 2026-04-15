import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

const groups = [
  { label: "Mobile", items: ["Flutter"] },
  { label: "Frontend", items: ["React", "Vue.js"] },
  { label: "Backend", items: ["Laravel (PHP)"] },
  { label: "Database", items: ["MySQL", "Supabase", "PostgreSQL"] },
  { label: "Tools", items: ["Docker", "Inertia.js", "Git", "n8n"] },
  { label: "AI / Workflow", items: ["Claude", "Gemini", "Lovable"] },
];

export default function TechStackSection() {
  const { t } = useI18n();

  return (
    <section id="stack" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold font-display md:text-4xl"
        >
          <span className="gradient-text">{t.stack.title}</span>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-2 h-1 w-20 origin-left rounded-full"
            style={{ background: "linear-gradient(90deg, var(--glow), var(--glow-secondary))" }}
          />
        </motion.h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, gi) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.1, duration: 0.5 }}
              className="glass-card p-6"
            >
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">{g.label}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item, ii) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: gi * 0.1 + ii * 0.05 + 0.2, duration: 0.4 }}
                    className="inline-block rounded-lg border border-glass-border bg-secondary px-3 py-1.5 text-sm font-medium transition-all duration-300 hover:border-primary hover:shadow-[0_0_15px_oklch(0.65_0.28_290_/_25%)] cursor-default"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
