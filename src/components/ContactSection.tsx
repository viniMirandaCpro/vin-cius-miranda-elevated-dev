import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { Github, Linkedin, Mail, Send, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const { t } = useI18n();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const links = [
    { icon: Github, href: "https://github.com/viniMirandaCpro", label: "GitHub", color: "#ffffff" },
    { icon: Linkedin, href: "https://linkedin.com/in/vinicius-mirandaa", label: "LinkedIn", color: "#0A66C2" },
    { icon: Mail, href: "mailto:vinimirandapro220@gmail.com", label: "Email", color: "#EA4335" },
  ];

  const onSubmit = async (data: ContactFormData) => {
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          name: data.name,
          email: data.email,
          message: data.message,
        }),
      });
      const json = await res.json();
      if (!json.success) throw new Error(json.message);
      toast.success("Mensagem enviada com sucesso! Entrarei em contato em breve.");
      reset();
    } catch {
      toast.error("Erro ao enviar mensagem. Tente novamente ou entre em contato pelo email.");
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full opacity-10 blur-[160px]"
        style={{ background: "var(--glow)" }} />
      <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full opacity-10 blur-[100px]"
        style={{ background: "var(--glow-secondary)" }} />

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-glass-border bg-secondary/60 px-4 py-1.5 text-xs font-semibold text-muted-foreground"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" style={{ animation: "pulse-glow 2s ease-in-out infinite" }} />
          Disponível agora
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-3xl font-bold font-display md:text-4xl"
        >
          <span className="gradient-text">{t.contact.title}</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-muted-foreground leading-relaxed"
        >
          {t.contact.subtitle}
        </motion.p>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.2 }}
          className="mt-8 flex justify-center gap-3"
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              title={l.label}
              className="group glass-card glow-border-hover flex flex-col items-center gap-1.5 rounded-xl p-4 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            >
              <l.icon size={22} style={{ color: l.color }} className="transition-transform duration-300 group-hover:scale-110" />
              <span className="text-[10px] text-muted-foreground">{l.label}</span>
            </a>
          ))}
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.3 }}
          className="mt-10 glass-card p-6 text-left md:p-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-muted-foreground">{t.contact.name}</label>
              <input
                type="text"
                placeholder="Seu nome"
                {...register("name")}
                className="w-full rounded-lg border border-glass-border bg-secondary/50 px-4 py-2.5 text-foreground placeholder:text-muted-foreground/50 outline-none transition-all focus:border-primary focus:shadow-[0_0_15px_oklch(0.65_0.28_290_/_20%)]"
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
              )}
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-muted-foreground">{t.contact.email}</label>
              <input
                type="email"
                placeholder="seu@email.com"
                {...register("email")}
                className="w-full rounded-lg border border-glass-border bg-secondary/50 px-4 py-2.5 text-foreground placeholder:text-muted-foreground/50 outline-none transition-all focus:border-primary focus:shadow-[0_0_15px_oklch(0.65_0.28_290_/_20%)]"
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
              )}
            </div>
          </div>
          <div className="mt-4">
            <label className="mb-1.5 block text-sm font-medium text-muted-foreground">{t.contact.message}</label>
            <textarea
              rows={5}
              placeholder="Fale sobre seu projeto ou oportunidade..."
              {...register("message")}
              className="w-full rounded-lg border border-glass-border bg-secondary/50 px-4 py-2.5 text-foreground placeholder:text-muted-foreground/50 outline-none transition-all resize-none focus:border-primary focus:shadow-[0_0_15px_oklch(0.65_0.28_290_/_20%)]"
            />
            {errors.message && (
              <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-glow mt-6 w-full flex items-center justify-center gap-2 text-center disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                <Send size={16} />
                {t.contact.send}
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
