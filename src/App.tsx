import { useEffect, useState } from "react";
import {
  Cursor,
  Nav,
  Hero,
  About,
  Skills,
  CaseStudies,
  Contact,
  Footer,
} from "./components";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<number | null>(null);
  const [customCursorVisible, setCustomCursorVisible] = useState(false);

  useEffect(() => {
    const prefersFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setCustomCursorVisible(prefersFinePointer && !prefersReducedMotion);
    const onChange = () => {
      const fine = window.matchMedia("(pointer: fine)").matches;
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      setCustomCursorVisible(fine && !reduced);
    };
    window.matchMedia("(pointer: fine)").addEventListener("change", onChange);
    window.matchMedia("(prefers-reduced-motion: reduce)").addEventListener("change", onChange);
    return () => {
      window.matchMedia("(pointer: fine)").removeEventListener("change", onChange);
      window.matchMedia("(prefers-reduced-motion: reduce)").removeEventListener("change", onChange);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("custom-cursor-active", customCursorVisible);
    return () => document.body.classList.remove("custom-cursor-active");
  }, [customCursorVisible]);

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
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const viewportMid = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const id = sections[i];
        const el = document.getElementById(id);
        if (el && viewportMid >= el.offsetTop) {
          setActiveSection(id);
          break;
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
      <Cursor position={cursorPosition} variant={cursorVariant} visible={customCursorVisible} />

      <Nav
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />

      <Hero
        scrollToSection={scrollToSection}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />

      <About onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />

      <Skills onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />

      <CaseStudies
        selectedIndex={selectedCaseStudy}
        setSelectedIndex={setSelectedCaseStudy}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />

      <Contact onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />

      <Footer />
    </div>
  );
}

export default App;
