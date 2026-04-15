import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { ExternalLink } from "lucide-react";

export default function ProjectsSection() {
  const { t } = useI18n();

  const projects = [
    {
      name: "AlôChegou",
      url: "https://alochegou.com.br",
      tag: t.projects.alochegou.tag,
      desc: t.projects.alochegou.desc,
      stack: ["React", "Supabase", "PostgreSQL", "WhatsApp API", "Gemini Vision", "Docker"],
    },
    {
      name: "Vitool Finance",
      url: "https://demo.vitoolfinance.com.br",
      tag: t.projects.vitool.tag,
      desc: t.projects.vitool.desc,
      stack: ["React", "Supabase"],
    },
    {
      name: "Equipment Management SaaS",
      url: null,
      tag: t.projects.equipment.tag,
      desc: t.projects.equipment.desc,
      stack: ["Laravel", "Vue.js", "Inertia.js", "MySQL", "Docker"],
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold font-display md:text-4xl"
        >
          <span className="gradient-text">{t.projects.title}</span>
        </motion.h2>

        <div className="mt-12 grid gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="glass-card glow-border-hover overflow-hidden transition-all duration-300"
            >
              <div className="grid gap-6 p-6 md:grid-cols-[1fr_300px] md:p-8">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    {/* Logo placeholder */}
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg font-display font-bold text-sm"
                      style={{ background: "linear-gradient(135deg, var(--glow), var(--glow-secondary))" }}>
                      {p.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-display">{p.name}</h3>
                      <span className="text-xs font-medium text-muted-foreground">{p.tag}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span key={s} className="rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground">{s}</span>
                    ))}
                  </div>
                  {p.url && (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                      style={{ color: "var(--glow)" }}
                    >
                      {t.projects.viewProject} <ExternalLink size={14} />
                    </a>
                  )}
                </div>
                {/* Screenshot placeholder */}
                <div className="flex items-center justify-center rounded-lg border border-glass-border bg-secondary/50 p-4 min-h-[180px]">
                  <span className="text-xs text-muted-foreground font-mono">screenshot</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
