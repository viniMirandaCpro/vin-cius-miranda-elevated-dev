import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TechStackSection from "@/components/TechStackSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vinícius Miranda — Full Stack Developer & SaaS Builder" },
      { name: "description", content: "Portfólio de Vinícius Miranda, desenvolvedor full stack, criador de SaaS e freelancer." },
      { property: "og:title", content: "Vinícius Miranda — Full Stack Developer" },
      { property: "og:description", content: "Full stack developer, SaaS builder, and freelancer." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <I18nProvider>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <TechStackSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <footer className="relative py-10 border-t border-glass-border overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "linear-gradient(var(--glow) 1px, transparent 1px), linear-gradient(90deg, var(--glow) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />
        <div className="relative z-10 flex flex-col items-center gap-4">
          <span className="gradient-text font-display font-bold text-lg">Vinícius Miranda</span>
          <p className="text-xs text-muted-foreground">Full Stack Developer · SaaS Builder · Freelancer</p>
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} · Feito com React + Framer Motion</p>
        </div>
      </footer>
      <Toaster richColors position="top-right" />
    </I18nProvider>
  );
}
