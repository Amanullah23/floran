export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  accent: "maroon" | "green" | "gold";
  gradient: string;
};

export const projects: Project[] = [
  {
    id: "project-one",
    title: "Project name",
    category: "Web platform",
    description:
      "A full-stack platform built for scale, with a custom admin dashboard and real-time data.",
    tags: ["Next.js", "Supabase", "TypeScript"],
    accent: "maroon",
    gradient: "from-maroon/25 via-maroon/5 to-transparent",
  },
  {
    id: "project-two",
    title: "Project name",
    category: "Mobile app",
    description:
      "A native-feel iOS and Android app taken from first sketch to app store launch in 10 weeks.",
    tags: ["Flutter", "Firebase"],
    accent: "green",
    gradient: "from-green/25 via-green/5 to-transparent",
  },
  {
    id: "project-three",
    title: "Project name",
    category: "AI product",
    description:
      "An AI-powered assistant integrated directly into an existing product, not bolted on as an afterthought.",
    tags: ["Python", "OpenAI", "FastAPI"],
    accent: "gold",
    gradient: "from-gold/35 via-gold/10 to-transparent",
  },
  {
    id: "project-four",
    title: "Project name",
    category: "Web platform",
    description:
      "A booking and logistics system with live tracking, built for a growing operations team.",
    tags: ["Next.js", "PostgreSQL"],
    accent: "maroon",
    gradient: "from-maroon/25 via-maroon/5 to-transparent",
  },
  {
    id: "project-five",
    title: "Project name",
    category: "Mobile app",
    description:
      "A cross-platform finance tracker with offline support and real-time sync.",
    tags: ["Flutter", "Supabase"],
    accent: "green",
    gradient: "from-green/25 via-green/5 to-transparent",
  },
  {
    id: "project-six",
    title: "Project name",
    category: "UI/UX design",
    description:
      "A full visual redesign and design system for a client's existing web app.",
    tags: ["Figma", "Design system"],
    accent: "gold",
    gradient: "from-gold/35 via-gold/10 to-transparent",
  },
];
