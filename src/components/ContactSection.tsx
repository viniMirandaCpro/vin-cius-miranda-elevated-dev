import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { Github, Linkedin, Mail } from "lucide-react";

export default function ContactSection() {
  const { t } = useI18n();

  const links = [
    { icon: Github, href: "https://github.com/viniMirandaCpro", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/vinicius-mirandaa", label: "LinkedIn" },
    { icon: Mail, href: "mailto:email@example.com", label: "Email" },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full opacity-15 blur-[150px]"
        style={{ background: "var(--glow)" }} />

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold font-display md:text-4xl"
        >
          <span className="gradient-text">{t.contact.title}</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-muted-foreground"
        >
          {t.contact.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 flex justify-center gap-4"
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card glow-border-hover flex h-14 w-14 items-center justify-center rounded-xl transition-all duration-300 hover:scale-110"
            >
              <l.icon size={22} className="text-muted-foreground" />
            </a>
          ))}
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 glass-card p-6 text-left md:p-8"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-muted-foreground">{t.contact.name}</label>
              <input
                type="text"
                className="w-full rounded-lg border border-glass-border bg-secondary/50 px-4 py-2.5 text-foreground outline-none transition-all focus:border-primary focus:shadow-[0_0_15px_oklch(0.65_0.28_290_/_20%)]"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-muted-foreground">{t.contact.email}</label>
              <input
                type="email"
                className="w-full rounded-lg border border-glass-border bg-secondary/50 px-4 py-2.5 text-foreground outline-none transition-all focus:border-primary focus:shadow-[0_0_15px_oklch(0.65_0.28_290_/_20%)]"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="mb-1.5 block text-sm font-medium text-muted-foreground">{t.contact.message}</label>
            <textarea
              rows={4}
              className="w-full rounded-lg border border-glass-border bg-secondary/50 px-4 py-2.5 text-foreground outline-none transition-all resize-none focus:border-primary focus:shadow-[0_0_15px_oklch(0.65_0.28_290_/_20%)]"
            />
          </div>
          <button type="submit" className="btn-glow mt-6 w-full text-center">
            {t.contact.send}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
