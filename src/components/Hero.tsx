type HeroProps = {
  scrollToSection: (sectionId: string) => void;
  onMouseEnter: (variant: string) => void;
  onMouseLeave: () => void;
};

export function Hero({ scrollToSection, onMouseEnter, onMouseLeave }: HeroProps) {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-emerald-500/5" />
      <div className="text-center z-10 px-6">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 animate-fade-in">
            <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
              Oluwatobi David
            </span>
          </h1>
          <div className="text-xl md:text-2xl text-zinc-400 animate-fade-in-delay">
            <span className="typewriter-loop">
              Frontend Developer & Mobile Developer
            </span>
          </div>
        </div>

        <p className="text-lg text-zinc-300 max-w-2xl mx-auto mb-12 animate-fade-in-delay-2">
          I build web and mobile products with React and TypeScript—clean interfaces,
          clear architecture, and a focus on what users actually need.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-3">
          <button
            onClick={() => scrollToSection("projects")}
            onMouseEnter={() => onMouseEnter("hover")}
            onMouseLeave={onMouseLeave}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-lg font-semibold hover:scale-105 transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            onMouseEnter={() => onMouseEnter("hover")}
            onMouseLeave={onMouseLeave}
            className="px-8 py-4 border border-zinc-700 rounded-lg font-semibold hover:border-cyan-400 hover:scale-105 transition-all duration-200"
          >
            Get In Touch
          </button>
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-element-1 absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-float" />
        <div className="floating-element-2 absolute top-1/3 right-1/3 w-1 h-1 bg-emerald-400 rounded-full animate-float-delay" />
        <div className="floating-element-3 absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-float-slow" />
      </div>
    </section>
  );
}
