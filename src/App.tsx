import { useEffect, useState } from "react";
import {
  Nav,
  Hero,
  About,
  CaseStudies,
  Contact,
  Footer,
  Atmosphere,
  ScrollProgress,
  ThemeToggle,
} from "./components";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<number | null>(null);

  useEffect(() => {
    if (selectedCaseStudy !== null) {
      document.body.style.overflow = "hidden";
      const onEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") setSelectedCaseStudy(null);
      };
      window.addEventListener("keydown", onEscape);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", onEscape);
      };
    }
  }, [selectedCaseStudy]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const sections = ["home", "about", "projects", "contact"];
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="relative min-h-[100dvh] overflow-x-hidden text-ink">
      <Atmosphere />
      <div className="grain" aria-hidden="true" />
      <ScrollProgress />
      <ThemeToggle />

      <Nav
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      <main className="relative z-10">
        <Hero scrollToSection={scrollToSection} />

        <div className="section-rule">
          <CaseStudies
            selectedIndex={selectedCaseStudy}
            setSelectedIndex={setSelectedCaseStudy}
          />
        </div>

        <div className="section-rule">
          <About />
        </div>

        <Contact />
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}

export default App;
