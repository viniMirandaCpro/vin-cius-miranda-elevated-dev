import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import {
  SiFlutter,
  SiDart,
  SiReact,
  SiVuedotjs,
  SiLaravel,
  SiPhp,
  SiMysql,
  SiSupabase,
  SiPostgresql,
  SiFirebase,
  SiDocker,
  SiGit,
  SiGooglegemini,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaRobot } from "react-icons/fa";

type TechItem = {
  name: string;
  icon: React.ReactNode;
};

type Group = {
  label: string;
  items: TechItem[];
};

const groups: Group[] = [
  {
    label: "Mobile",
    items: [
      { name: "Flutter", icon: <SiFlutter className="text-[#54C5F8]" /> },
      { name: "Dart", icon: <SiDart className="text-[#0175C2]" /> },
    ],
  },
  {
    label: "Frontend",
    items: [
      { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
      { name: "Vue.js", icon: <SiVuedotjs className="text-[#42B883]" /> },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Laravel", icon: <SiLaravel className="text-[#FF2D20]" /> },
      { name: "PHP", icon: <SiPhp className="text-[#777BB4]" /> },
    ],
  },
  {
    label: "Database",
    items: [
      { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
      { name: "Supabase", icon: <SiSupabase className="text-[#3ECF8E]" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-[#336791]" /> },
      { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
    ],
  },
  {
    label: "Tools",
    items: [
      { name: "Docker", icon: <SiDocker className="text-[#2496ED]" /> },
      { name: "Inertia.js", icon: <TbBrandFramerMotion className="text-[#9553E9]" /> },
      { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
    ],
  },
  {
    label: "AI / Workflow",
    items: [
      { name: "Claude", icon: <FaRobot className="text-[#D97757]" /> },
      { name: "Gemini", icon: <SiGooglegemini className="text-[#4285F4]" /> },
    ],
  },
];

export default function TechStackSection() {
  const { t } = useI18n();

  return (
    <section id="stack" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-3xl font-bold font-display md:text-4xl"
        >
          <span className="gradient-text">{t.stack.title}</span>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-2 h-1 w-20 origin-left rounded-full"
            style={{ background: "linear-gradient(90deg, var(--glow), var(--glow-secondary))" }}
          />
        </motion.h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, gi) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: gi * 0.1, duration: 0.5 }}
              className="glass-card glow-border-hover p-6 transition-all duration-300"
            >
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-muted-foreground">{g.label}</h3>
              <div className="flex flex-col gap-3">
                {g.items.map((item, ii) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: gi * 0.1 + ii * 0.07 + 0.2, duration: 0.4 }}
                    className="group"
                  >
                    <div className="inline-flex items-center gap-1.5 text-sm font-medium">
                      <span className="text-base leading-none">{item.icon}</span>
                      {item.name}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
