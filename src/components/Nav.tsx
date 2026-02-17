import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../data/navigation";

type NavProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
  onMouseEnter: (variant: string) => void;
  onMouseLeave: () => void;
};

export function Nav({
  isMenuOpen,
  setIsMenuOpen,
  activeSection,
  scrollToSection,
  onMouseEnter,
  onMouseLeave,
}: NavProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div
            className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent cursor-pointer"
            onMouseEnter={() => onMouseEnter("hover")}
            onMouseLeave={onMouseLeave}
            onClick={() => scrollToSection("home")}
          >
            thatTobi.dev
          </div>

          <div className="hidden md:flex space-x-8">
            {NAV_LINKS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                onMouseEnter={() => onMouseEnter("hover")}
                onMouseLeave={onMouseLeave}
                className={`transition-colors duration-200 ${
                  activeSection === id
                    ? "text-cyan-400"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            onMouseEnter={() => onMouseEnter("hover")}
            onMouseLeave={onMouseLeave}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-menu-slide">
            {NAV_LINKS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="block w-full text-left text-zinc-400 hover:text-white transition-colors"
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
