import { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { ExternalLink, ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import alochegouLogo from "@/assets/alo-chegou.png";
import vitoolLogo from "@/assets/vitool.png";
import owemoneyLogo from "@/assets/owemoney_logo.png";
import alochegou1 from "@/assets/alochegou-1.png";
import alochegou2 from "@/assets/alochegou-2.png";
import alochegou3 from "@/assets/alochegou-3.png";
import alochegou4 from "@/assets/alochegou-4.png";
import dashboardImg from "@/assets/dashboard-mockup.png";
import owemoneyHome from "@/assets/owemoney-home.png";
import owemoneyDetails from "@/assets/owemoney-details.png";

function ImageModal({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  return createPortal(
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.85, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="relative"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={src}
            alt={alt}
            className="rounded-xl shadow-2xl"
            style={{ maxHeight: "90vh", maxWidth: "min(90vw, 420px)", width: "auto", height: "auto", display: "block" }}
          />
          <button
            onClick={onClose}
            className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-background text-foreground shadow-lg transition hover:bg-secondary"
          >
            <X size={16} />
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}

function Carousel({ images, projectName }: { images: string[]; projectName: string }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [modalSrc, setModalSrc] = useState<string | null>(null);

  const go = (dir: number) => {
    setDirection(dir);
    setIndex((i) => (i + dir + images.length) % images.length);
  };

  return (
    <>
      <div className="relative flex h-full min-h-[220px] items-center justify-center overflow-hidden rounded-lg bg-black/20">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.img
            key={index}
            src={images[index]}
            alt={`${projectName} screenshot ${index + 1}`}
            custom={direction}
            initial={{ opacity: 0, x: direction * 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -60 }}
            transition={{ duration: 0.3 }}
            className="h-full max-h-[280px] w-auto cursor-zoom-in object-contain"
            onClick={() => setModalSrc(images[index])}
          />
        </AnimatePresence>

        {/* Zoom hint */}
        <div className="pointer-events-none absolute top-2 right-2 flex items-center gap-1 rounded-md bg-black/50 px-2 py-1 text-[10px] text-white/70 backdrop-blur-sm">
          <ZoomIn size={10} /> ampliar
        </div>

        <button
          onClick={() => go(-1)}
          className="absolute left-2 flex h-7 w-7 items-center justify-center rounded-full bg-background/70 text-foreground backdrop-blur-sm transition hover:bg-background"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          onClick={() => go(1)}
          className="absolute right-2 flex h-7 w-7 items-center justify-center rounded-full bg-background/70 text-foreground backdrop-blur-sm transition hover:bg-background"
        >
          <ChevronRight size={16} />
        </button>

        <div className="absolute bottom-2 flex gap-1">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
              className="h-1.5 w-1.5 rounded-full transition-all"
              style={{ background: i === index ? "var(--glow)" : "var(--glass-border)" }}
            />
          ))}
        </div>
      </div>

      {modalSrc && (
        <ImageModal src={modalSrc} alt={projectName} onClose={() => setModalSrc(null)} />
      )}
    </>
  );
}

function SingleImage({ src, alt }: { src: string; alt: string }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div
        className="relative overflow-hidden rounded-lg border border-glass-border bg-secondary/50 w-full cursor-zoom-in group"
        onClick={() => setModalOpen(true)}
      >
        <img src={src} alt={alt} className="h-full w-full object-cover object-top transition duration-300 group-hover:scale-[1.02]" />
        <div className="pointer-events-none absolute top-2 right-2 flex items-center gap-1 rounded-md bg-black/50 px-2 py-1 text-[10px] text-white/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition">
          <ZoomIn size={10} /> ampliar
        </div>
      </div>

      {modalOpen && (
        <ImageModal src={src} alt={alt} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
}

export default function ProjectsSection() {
  const { t } = useI18n();

  const projects = [
    {
      name: "AlôChegou",
      url: "https://alochegou.com.br",
      tag: t.projects.alochegou.tag,
      live: true,
      desc: t.projects.alochegou.desc,
      stack: ["React", "Supabase", "PostgreSQL", "WhatsApp API", "Gemini Vision", "Docker"],
      logo: alochegouLogo,
      screenshots: [alochegou1, alochegou2, alochegou3, alochegou4],
    },
    {
      name: "OweMoney",
      url: "https://github.com/viniMirandaCpro/OweMoney",
      tag: t.projects.owemoney.tag,
      live: false,
      desc: t.projects.owemoney.desc,
      stack: ["Flutter", "Dart", "Drift", "SQLite", "Material 3"],
      logo: owemoneyLogo,
      screenshots: [owemoneyHome, owemoneyDetails],
    },
    {
      name: "Vitool Finance",
      url: "https://demo.vitoolfinance.com.br",
      tag: t.projects.vitool.tag,
      live: true,
      desc: t.projects.vitool.desc,
      stack: ["React", "Supabase"],
      logo: vitoolLogo,
      screenshots: [dashboardImg],
    },
    {
      name: "Equipment Management SaaS",
      url: null,
      tag: t.projects.equipment.tag,
      live: false,
      desc: t.projects.equipment.desc,
      stack: ["Laravel", "Vue.js", "Inertia.js", "MySQL", "Docker"],
      logo: null,
      screenshots: [],
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
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
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              whileHover={{ y: -4 }}
              className="glass-card glow-border-hover overflow-hidden transition-all duration-300"
            >
              <div className={`grid gap-6 p-6 md:p-8 ${p.screenshots.length > 0 ? "md:grid-cols-[1fr_300px]" : ""}`}>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg overflow-hidden"
                      style={p.logo ? { background: "transparent" } : { background: "linear-gradient(135deg, var(--glow), var(--glow-secondary))" }}
                    >
                      {p.logo ? (
                        <img src={p.logo} alt={`${p.name} logo`} className="h-full w-full object-contain" />
                      ) : (
                        <span className="font-display font-bold text-sm text-primary-foreground">{p.name.charAt(0)}</span>
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-display">{p.name}</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium text-muted-foreground">{p.tag}</span>
                        {p.live && (
                          <span className="flex items-center gap-1 text-xs font-semibold text-emerald-400">
                            <span className="relative flex h-2 w-2">
                              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                            </span>
                            Live
                          </span>
                        )}
                      </div>
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

                {p.screenshots.length > 0 && (
                  <div className="flex items-center justify-center">
                    {p.screenshots.length === 1 ? (
                      <SingleImage src={p.screenshots[0]} alt={p.name} />
                    ) : (
                      <div className="w-full">
                        <Carousel images={p.screenshots} projectName={p.name} />
                      </div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
