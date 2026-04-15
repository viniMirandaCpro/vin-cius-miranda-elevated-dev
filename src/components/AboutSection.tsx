import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { Rocket, Code2, Globe } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6 } }),
};

export default function AboutSection() {
  const { t } = useI18n();

  const stats = [
    { icon: Rocket, label: t.about.stat1 },
    { icon: Code2, label: t.about.stat2 },
    { icon: Globe, label: t.about.stat3 },
  ];

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
        </motion.h2>

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-muted-foreground leading-relaxed text-lg">{t.about.text}</p>
          </motion.div>

          <div className="flex flex-col gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="glass-card glow-border-hover flex items-center gap-4 p-5 transition-all duration-300"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg" style={{ background: "linear-gradient(135deg, var(--glow), var(--glow-secondary))" }}>
                  <s.icon size={22} className="text-primary-foreground" />
                </div>
                <span className="font-semibold font-display">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
