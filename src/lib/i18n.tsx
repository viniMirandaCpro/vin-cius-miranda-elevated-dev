import { createContext, useContext, useState, type ReactNode } from "react";

type Lang = "pt" | "en";

const translations = {
  pt: {
    nav: { about: "Sobre", stack: "Stack", projects: "Projetos", experience: "Experiência", contact: "Contato" },
    hero: {
      roles: ["Full Stack Developer", "SaaS Builder", "Flutter Developer", "Freelancer"],
      bio: "Desenvolvedor full stack apaixonado por construir produtos reais. Crio SaaS próprios, atuo como freelancer e uso IA no meu fluxo de trabalho.",
      cta1: "Ver Projetos",
      cta2: "Entre em contato",
    },
    about: {
      title: "Sobre mim",
      text: "Vinícius é desenvolvedor full stack e fundador de SaaS, atualmente cursando Informática no IFRN – Instituto Federal do Rio Grande do Norte. Ele constrói seus próprios produtos do zero ao lançamento, trabalha internacionalmente como freelancer e integra IA ativamente em seu fluxo de desenvolvimento para entregar mais rápido e melhor.",
      stat1: "2 SaaS lançados",
      stat2: "3+ anos desenvolvendo",
      stat3: "Experiência internacional",
    },
    stack: { title: "Tech Stack" },
    projects: {
      title: "Projetos",
      viewProject: "Ver projeto",
      alochegou: {
        tag: "SaaS Próprio • Live",
        desc: "Plataforma SaaS para gestão de encomendas em condomínios. OCR com Gemini Vision para leitura automática de etiquetas, notificações via WhatsApp e painel web para síndicos e porteiros.",
      },
      vitool: {
        tag: "SaaS Próprio • Live",
        desc: "Ferramenta de gestão financeira pessoal com controle de despesas, parcelamentos e relatórios.",
      },
      equipment: {
        tag: "Freelance • Internacional • Confidencial",
        desc: "Reconstrução completa de plataforma SaaS multi-tenant de gestão de equipamentos. Migração de Yii2 para Laravel moderno com sistema RBAC implementado em backend e frontend.",
      },
    },
    experience: {
      title: "Experiência",
      saasFounder: {
        role: "SaaS Founder & Full Stack Developer",
        company: "Self-Employed",
        period: "2023 – Presente",
        highlights: [
          "Fundei e publiquei 2 SaaS próprios: AlôChegou e Vitool Finance",
          "Conduzi todo o ciclo de produto — ideação, desenvolvimento, infraestrutura e lançamento",
          "Uso IA (Claude, Gemini) como parte do meu fluxo de desenvolvimento",
        ],
      },
      freelance: {
        role: "Freelancer Full Stack Internacional",
        company: "Freelance | Remoto",
        period: "Mar – Out 2025",
        highlights: [
          "Reconstruí do zero uma plataforma SaaS multi-tenant de gestão de equipamentos — migrei de Yii2 para Laravel + Vue.js de forma independente",
          "Arquitetei o sistema multi-tenant com isolamento completo de dados entre tenants",
          "Implementei RBAC no backend (policies e gates do Laravel) e no frontend (renderização condicional e guards de rota com Vue.js)",
          "Construí uma SPA fluida com Vue.js + Inertia.js, sem necessidade de uma camada de API separada",
          "Conduzi a migração completa do banco de dados (MySQL/PostgreSQL) preservando a integridade dos dados",
          "Containerizei a aplicação com Docker, garantindo consistência entre ambientes",
        ],
      },
      studies: {
        role: "Estudos & Projetos Paralelos",
        company: "Desenvolvimento Pessoal",
        period: "2021 – Presente",
        highlights: [
          "Iniciei estudos em Python — automações, scripts e exploração de dados",
          "Aprendi Flutter e Dart para desenvolvimento mobile multiplataforma",
          "Desenvolvi projetos mobile side-projects com Flutter",
          "Base sólida que culminou no stack atual de desenvolvimento",
        ],
      },
      ifrn: {
        role: "Curso Técnico em Informática",
        company: "IFRN – Instituto Federal do Rio Grande do Norte",
        period: "Em andamento",
        highlights: ["Formação técnica conciliada com projetos reais de mercado"],
      },
    },
    contact: {
      title: "Contato",
      subtitle: "Aberto a oportunidades, freelas e parcerias.",
      name: "Nome",
      email: "Email",
      message: "Mensagem",
      send: "Enviar mensagem",
    },
  },
  en: {
    nav: { about: "About", stack: "Stack", projects: "Projects", experience: "Experience", contact: "Contact" },
    hero: {
      roles: ["Full Stack Developer", "SaaS Builder", "Flutter Developer", "Freelancer"],
      bio: "Full stack developer passionate about building real products. I create my own SaaS, work as a freelancer, and use AI in my development workflow.",
      cta1: "View Projects",
      cta2: "Get in touch",
    },
    about: {
      title: "About me",
      text: "Vinícius is a full stack developer and SaaS founder currently in the Technical Informatics program at IFRN – Instituto Federal do Rio Grande do Norte. He builds his own products from idea to launch, works internationally as a freelancer, and actively integrates AI into his development workflow to ship faster and better.",
      stat1: "2 SaaS launched",
      stat2: "3+ years developing",
      stat3: "International experience",
    },
    stack: { title: "Tech Stack" },
    projects: {
      title: "Projects",
      viewProject: "View project",
      alochegou: {
        tag: "Own SaaS • Live",
        desc: "SaaS platform for package management in condominiums. OCR with Gemini Vision for automatic label reading, WhatsApp notifications, and web dashboard for managers and doormen.",
      },
      vitool: {
        tag: "Own SaaS • Live",
        desc: "Personal finance management tool with expense tracking, installments, and reports.",
      },
      equipment: {
        tag: "Freelance • International • Confidential",
        desc: "Complete rebuild of a multi-tenant equipment management SaaS platform. Migration from Yii2 to modern Laravel with RBAC system implemented in backend and frontend.",
      },
    },
    experience: {
      title: "Experience",
      saasFounder: {
        role: "SaaS Founder & Full Stack Developer",
        company: "Self-Employed",
        period: "2023 – Present",
        highlights: [
          "Founded and launched 2 own SaaS products: AlôChegou and Vitool Finance",
          "Handled the full product cycle — ideation, development, infrastructure, and launch",
          "Use AI (Claude, Gemini) as part of my everyday development workflow",
        ],
      },
      freelance: {
        role: "International Full Stack Freelancer",
        company: "Freelance | Remote",
        period: "Mar – Oct 2025",
        highlights: [
          "Rebuilt from scratch a multi-tenant equipment management SaaS — migrated from Yii2 to Laravel + Vue.js independently",
          "Architected the multi-tenant system with full data isolation between tenants",
          "Implemented RBAC on backend (Laravel policies/gates) and frontend (Vue.js conditional rendering and route guards)",
          "Built a fluid SPA with Vue.js + Inertia.js, with no need for a separate API layer",
          "Led the full database migration (MySQL/PostgreSQL) preserving data integrity",
          "Containerized the app with Docker for consistent dev/prod environments",
        ],
      },
      studies: {
        role: "Studies & Side Projects",
        company: "Self-Directed Learning",
        period: "2021 – Present",
        highlights: [
          "Started Python studies — automations, scripts, and data exploration",
          "Learned Flutter and Dart for cross-platform mobile development",
          "Built mobile side-projects with Flutter",
          "Strong foundation that led to the current development stack",
        ],
      },
      ifrn: {
        role: "Technical Informatics Program",
        company: "IFRN – Instituto Federal do Rio Grande do Norte",
        period: "In progress",
        highlights: ["Technical education combined with real-world market projects"],
      },
    },
    contact: {
      title: "Contact",
      subtitle: "Open to opportunities, freelance work, and partnerships.",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send message",
    },
  },
} as const;

type Translations = (typeof translations)[Lang];

const I18nContext = createContext<{ lang: Lang; t: Translations; toggle: () => void }>({
  lang: "pt",
  t: translations.pt,
  toggle: () => {},
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("pt");
  const toggle = () => setLang((l) => (l === "pt" ? "en" : "pt"));
  return (
    <I18nContext.Provider value={{ lang, t: translations[lang], toggle }}>
      {children}
    </I18nContext.Provider>
  );
}

export const useI18n = () => useContext(I18nContext);
