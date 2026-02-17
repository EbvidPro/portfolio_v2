import { SKILL_CATEGORIES } from "../data/skills.tsx";

type SkillsProps = {
  onMouseEnter: (variant: string) => void;
  onMouseLeave: () => void;
};

export function Skills({ onMouseEnter, onMouseLeave }: SkillsProps) {
  return (
    <section id="skills" className="py-20 px-6 bg-zinc-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category, index) => (
            <div
              key={index}
              onMouseEnter={() => onMouseEnter("hover")}
              onMouseLeave={onMouseLeave}
              className="bg-zinc-800/50 p-8 rounded-2xl border border-zinc-700 hover:border-cyan-400/50 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <div className="text-cyan-400 mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="text-zinc-300 flex items-center"
                  >
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
