import { Github, Linkedin, Mail } from "lucide-react";

type AboutProps = {
  onMouseEnter: (variant: string) => void;
  onMouseLeave: () => void;
};

export function About({ onMouseEnter, onMouseLeave }: AboutProps) {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 flex items-center justify-center border border-zinc-700/50">
              <span className="text-6xl font-bold text-cyan-400/90 tracking-tight" aria-hidden="true">
                OD
              </span>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-zinc-300 leading-relaxed">
              I'm a frontend and mobile developer with over 5 years of experience
              building web and React Native apps. I focus on React, TypeScript,
              and modern tooling—turning product and design into clear, maintainable
              interfaces that users actually enjoy.
            </p>

            <p className="text-lg text-zinc-300 leading-relaxed">
              I care about business impact as much as code quality: I've shipped
              public sites, admin dashboards, and in-product features for
              fintech, edtech, and agri-tech. When I'm not coding, I'm reading
              about scaling and product—and I like to give back in tech communities
              when I can.
            </p>

            <div className="flex space-x-6 pt-4">
              <a
                target="_blank"
                href="https://github.com/EbvidPro"
                rel="noopener noreferrer"
                onMouseEnter={() => onMouseEnter("hover")}
                onMouseLeave={onMouseLeave}
                className="text-zinc-400 hover:text-cyan-400 transition-colors duration-200"
              >
                <Github size={24} />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/david-tobi/"
                rel="noopener noreferrer"
                onMouseEnter={() => onMouseEnter("hover")}
                onMouseLeave={onMouseLeave}
                className="text-zinc-400 hover:text-cyan-400 transition-colors duration-200"
              >
                <Linkedin size={24} />
              </a>
              <a
                target="_blank"
                href="mailto:davidebenezer93@gmail.com"
                onMouseEnter={() => onMouseEnter("hover")}
                onMouseLeave={onMouseLeave}
                className="text-zinc-400 hover:text-cyan-400 transition-colors duration-200"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
