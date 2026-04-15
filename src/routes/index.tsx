import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
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
      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-glass-border">
        © {new Date().getFullYear()} Vinícius Miranda. All rights reserved.
      </footer>
    </I18nProvider>
  );
}
