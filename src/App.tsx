import React, { useEffect, useState } from "react";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Zap,
  Smartphone,
} from "lucide-react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const handleMouseEnter = (variant: string) => setCursorVariant(variant);
  const handleMouseLeave = () => setCursorVariant("default");

  return (
    <div className="bg-zinc-950 text-white min-h-screen relative overflow-x-hidden">
      {/* Custom Cursor */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-50 transition-all duration-75 ease-out ${
          cursorVariant === "hover" ? "w-12 h-12" : "w-3 h-3"
        }`}
        style={{
          transform: `translate(${
            cursorPosition.x - (cursorVariant === "hover" ? 24 : 6)
          }px, ${cursorPosition.y - (cursorVariant === "hover" ? 24 : 6)}px)`,
        }}
      >
        <div
          className={`w-full h-full rounded-full transition-all duration-150 ease-out ${
            cursorVariant === "hover"
              ? "border-2 border-cyan-400 bg-cyan-400/20 scale-100"
              : "bg-white scale-100"
          }`}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div
              className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent cursor-pointer"
              onMouseEnter={() => handleMouseEnter("hover")}
              onMouseLeave={handleMouseLeave}
              onClick={() => scrollToSection("home")}
            >
              thatTobi.dev
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "skills", "projects", "contact"].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    onMouseEnter={() => handleMouseEnter("hover")}
                    onMouseLeave={handleMouseLeave}
                    className={`capitalize transition-colors duration-200 ${
                      activeSection === section
                        ? "text-cyan-400"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    {section}
                  </button>
                )
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              onMouseEnter={() => handleMouseEnter("hover")}
              onMouseLeave={handleMouseLeave}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4">
              {["home", "about", "skills", "projects", "contact"].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="block w-full text-left capitalize text-zinc-400 hover:text-white transition-colors"
                  >
                    {section}
                  </button>
                )
              )}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
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
              <span className="typewriter">
                Frontend Developer & Mobile Developer
              </span>
            </div>
          </div>

          <p className="text-lg text-zinc-300 max-w-2xl mx-auto mb-12 animate-fade-in-delay-2">
            I craft beautiful, responsive web and mobile experiences with modern
            technologies. I love crafting clean, responsive interfaces and
            constantly exploring new tech.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-3">
            <button
              onClick={() => scrollToSection("projects")}
              onMouseEnter={() => handleMouseEnter("hover")}
              onMouseLeave={handleMouseLeave}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-lg font-semibold hover:scale-105 transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              onMouseEnter={() => handleMouseEnter("hover")}
              onMouseLeave={handleMouseLeave}
              className="px-8 py-4 border border-zinc-700 rounded-lg font-semibold hover:border-cyan-400 hover:scale-105 transition-all duration-200"
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="floating-element-1 absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-float" />
          <div className="floating-element-2 absolute top-1/3 right-1/3 w-1 h-1 bg-emerald-400 rounded-full animate-float-delay" />
          <div className="floating-element-3 absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-float-slow" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center">
                <div className="w-72 h-72 bg-zinc-900 rounded-xl flex items-center justify-center">
                  <Code size={80} className="text-cyan-400" />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-zinc-300 leading-relaxed">
                I'm a passionate frontend developer with over 5 years of
                experience crafting digital experiences that blend beautiful
                design with clean, functional code. I specialize in React,
                TypeScript, and modern CSS frameworks, turning ideas into
                interfaces that feel smooth, intuitive, and engaging.
              </p>

              <p className="text-lg text-zinc-300 leading-relaxed">
                Outside of coding, I'm an avid reader with a curiosity for
                business growth and scaling strategies. I love exploring how
                technology can solve real-world problems and help companies
                reach new heights. You'll often find me engaging in tech
                communities—sharing knowledge, collaborating on projects, and
                supporting others on their tech journeys.
              </p>

              <div className="flex space-x-6 pt-4">
                <a
                  target="_blank"
                  href="https://github.com/EbvidPro"
                  onMouseEnter={() => handleMouseEnter("hover")}
                  onMouseLeave={handleMouseLeave}
                  className="text-zinc-400 hover:text-cyan-400 transition-colors duration-200"
                >
                  <Github size={24} />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/david-tobi/"
                  onMouseEnter={() => handleMouseEnter("hover")}
                  onMouseLeave={handleMouseLeave}
                  className="text-zinc-400 hover:text-cyan-400 transition-colors duration-200"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  target="_blank"
                  href="mailto:davidebenezer93@gmail.com"
                  onMouseEnter={() => handleMouseEnter("hover")}
                  onMouseLeave={handleMouseLeave}
                  className="text-zinc-400 hover:text-cyan-400 transition-colors duration-200"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-zinc-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
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
            ].map((category, index) => (
              <div
                key={index}
                onMouseEnter={() => handleMouseEnter("hover")}
                onMouseLeave={handleMouseLeave}
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

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-2">
            <h2 className="text-4xl md:text-5xl font-bold text-center  bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>

            <p className="text-lg text-zinc-300 max-w-2xl mx-auto mb-12 animate-fade-in-delay-2">
              I can't showcase most of the projects I've worked on due to NDAs
              I've signed. However, here are a few others I can share:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {[
              {
                title: "Unifaires",
                description:
                  "An educational platform where users take courses, businesses create and manage courses, and admins oversee subscriptions.",
                tech: [
                  "Next.js",
                  "Axios",
                  "Tailwind CSS",
                  "Redux",
                  "Ant Design",
                ],
                image:
                  "https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=800",
                url: "https://tryunifaires.com/",
              },
              {
                title: "Axstron",
                description:
                  "A modern financial platform for cross-border transactions, multi-currency wallets, and smart business tools.",
                tech: [
                  "Next.js",
                  "Vite",
                  "Tailwind CSS",
                  "ShadCN UI",
                  "Zustand",
                ],
                image:
                  "https://images.pexels.com/photos/4968633/pexels-photo-4968633.jpeg?auto=compress&cs=tinysrgb&w=800",
                url: "https://axstron.com/",
              },
              {
                title: "Zoke",
                description:
                  "A product management tool where clients register projects and track their progress in real time.",
                tech: [
                  "Next.js",
                  "Vite",
                  "Tailwind CSS",
                  "ShadCN UI",
                  "Local Storage",
                ],
                image:
                  "https://images.pexels.com/photos/3184634/pexels-photo-3184634.jpeg?auto=compress&cs=tinysrgb&w=800",
                url: "https://dev.zokeet.com/",
              },
            ].map((project, index) => (
              <div
                key={index}
                onMouseEnter={() => handleMouseEnter("hover")}
                onMouseLeave={handleMouseLeave}
                className="group bg-zinc-800/50 rounded-2xl overflow-hidden border border-zinc-700 hover:border-cyan-400/50 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 mb-4 text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-zinc-700 text-cyan-400 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <button className="flex items-center text-zinc-400 hover:text-cyan-400 transition-colors">
                      <Github size={16} className="mr-1" />
                      Code
                    </button>
                    <a href={project.url} target="_blank">
                      <button className="flex items-center text-zinc-400 hover:text-emerald-400 transition-colors">
                        <ExternalLink size={16} className="mr-1" />
                        Live Demo
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center w-full">
            <a
              target="_blank"
              href="https://oluwatobidavid.netlify.app/#portfolio"
            >
              <button
                onMouseEnter={() => handleMouseEnter("hover")}
                onMouseLeave={handleMouseLeave}
                className="px-12 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-lg font-semibold text-lg hover:scale-105 transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                View More
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-zinc-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>

          <p className="text-lg text-zinc-300 mb-12 max-w-2xl mx-auto">
            Ready to bring your next project to life? I'm always interested in
            discussing new opportunities and creative challenges.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <Mail size={24} />,
                label: "Email",
                value: "davidebenezer93@gmail.com",
                url: "mailto:davidebenezer93@gmail.com",
              },
              {
                icon: <Github size={24} />,
                label: "GitHub",
                value: "@EbvidPro",
                url: "https://github.com/EbvidPro",
              },
              {
                icon: <Linkedin size={24} />,
                label: "LinkedIn",
                value: "/in/david-tobi",
                url: "https://www.linkedin.com/in/david-tobi/",
              },
            ].map((contact, index) => (
              <a
                href={contact.url}
                target="_blank"
                key={index}
                onMouseEnter={() => handleMouseEnter("hover")}
                onMouseLeave={handleMouseLeave}
                className="p-6 bg-zinc-800/50 rounded-xl border border-zinc-700 hover:border-cyan-400/50 transition-all duration-200 hover:scale-105 cursor-pointer"
              >
                <div className="text-cyan-400 mb-2 flex items-center justify-center">
                  {contact.icon}
                </div>
                <div className="text-sm text-zinc-400 mb-1">
                  {contact.label}
                </div>
                <div className="text-white">{contact.value}</div>
              </a>
            ))}
          </div>

          <button
            onMouseEnter={() => handleMouseEnter("hover")}
            onMouseLeave={handleMouseLeave}
            className="px-12 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-lg font-semibold text-lg hover:scale-105 transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            Start a Conversation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto text-center text-zinc-400">
          <p>&copy; 2024 Oluwatobi David. Crafted with passion and purpose.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
