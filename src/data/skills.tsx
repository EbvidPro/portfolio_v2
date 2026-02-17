import { Code, Zap, Smartphone } from "lucide-react";

export const SKILL_CATEGORIES = [
  {
    icon: <Code size={32} />,
    title: "Frontend Development",
    skills: [
      "React & Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Vue.js",
      "GraphQL",
    ],
  },
  {
    icon: <Smartphone size={32} />,
    title: "Mobile Development",
    skills: [
      "React Native",
      "Expo",
      "TypeScript",
      "Redux & Zustand",
      "API Integration (REST & GraphQL)",
    ],
  },
  {
    icon: <Zap size={32} />,
    title: "Performance & Tools",
    skills: [
      "Webpack & Vite",
      "Testing (Jest, Cypress)",
      "Git & CI/CD",
      "Web Optimization",
      "Accessibility",
    ],
  },
];
