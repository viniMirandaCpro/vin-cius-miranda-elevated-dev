import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { Rocket, Code2, Globe, Wifi, Globe2, Smartphone, Sparkles } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6 } }),
};

const serviceIcons = [Globe2, Smartphone, Rocket, Sparkles];

export default function AboutSection() {
  const { t } = useI18n();

  const stats = [
    { icon: Rocket, label: t.about.stat1 },
    { icon: Code2, label: t.about.stat2 },
    { icon: Globe, label: t.about.stat3 },
    { icon: Wifi, label: t.about.stat4 },
  ];

  const services = t.about.services as unknown as { title: string; desc: string }[];

  return (
    <section id="about" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold font-display md:text-4xl"
        >
          <span className="gradient-text">{t.about.title}</span>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-2 h-1 w-20 origin-left rounded-full"
            style={{ background: "linear-gradient(90deg, var(--glow), var(--glow-secondary))" }}
          />
        </motion.h2>

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-muted-foreground leading-relaxed text-lg">{t.about.text}</p>

            {/* Stats grid */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="glass-card glow-border-hover flex items-center gap-3 p-4 transition-all duration-300"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg" style={{ background: "linear-gradient(135deg, var(--glow), var(--glow-secondary))" }}>
                    <s.icon size={18} className="text-primary-foreground" />
                  </div>
                  <span className="text-sm font-semibold font-display leading-tight">{s.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
            >
              {t.about.servicesLabel}
            </motion.p>
            {services.map((s, i) => {
              const Icon = serviceIcons[i] ?? Rocket;
              return (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="glass-card glow-border-hover group flex items-start gap-4 p-5 transition-all duration-300"
                >
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-all duration-300 group-hover:scale-110"
                    style={{ background: "linear-gradient(135deg, var(--glow), var(--glow-secondary))" }}
                  >
                    <Icon size={20} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-bold font-display text-sm">{s.title}</h4>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
