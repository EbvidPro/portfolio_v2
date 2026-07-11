import { NAV_LINKS } from "../data/navigation";

type NavProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
};

export function Nav({
  isMenuOpen,
  setIsMenuOpen,
  activeSection,
  scrollToSection,
}: NavProps) {
  return (
    <>
      <nav className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-5 md:pt-6">
        <div
          className="pointer-events-auto flex w-max max-w-full items-center gap-1 rounded-full bg-surface/70 p-1.5 shadow-soft ring-1 ring-ink/5 backdrop-blur-2xl"
          style={{ backdropFilter: "blur(24px)" }}
        >
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="rounded-full px-4 py-2 font-display text-sm font-semibold tracking-tight text-ink transition-colors duration-500 ease-fluid hover:text-accent"
          >
            thatTobi.dev
          </button>

          <div className="mx-1 hidden h-5 w-px bg-ink/10 md:block" />

          <div className="hidden items-center gap-0.5 md:flex">
            {NAV_LINKS.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => scrollToSection(id)}
                className={`rounded-full px-3.5 py-2 font-mono text-[12px] transition-all duration-500 ease-fluid ${
                  activeSection === id
                    ? "bg-ink text-canvas"
                    : "text-mute hover:bg-ink/5 hover:text-ink"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="relative ml-1 flex h-10 w-10 items-center justify-center rounded-full bg-ink/5 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Menu</span>
            <span
              className={`absolute h-[1.5px] w-4 bg-ink transition-all duration-500 ease-fluid ${
                isMenuOpen ? "translate-y-0 rotate-45" : "-translate-y-[4px]"
              }`}
            />
            <span
              className={`absolute h-[1.5px] w-4 bg-ink transition-all duration-500 ease-fluid ${
                isMenuOpen ? "opacity-0 scale-x-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute h-[1.5px] w-4 bg-ink transition-all duration-500 ease-fluid ${
                isMenuOpen ? "translate-y-0 -rotate-45" : "translate-y-[4px]"
              }`}
            />
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 transition-all duration-700 ease-fluid md:hidden ${
          isMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-canvas/90 backdrop-blur-3xl" />
        <div className="relative flex min-h-[100dvh] flex-col justify-center px-8">
          {[{ id: "home", label: "Home" }, ...NAV_LINKS].map(
            ({ id, label }, i) => (
              <button
                key={id}
                type="button"
                onClick={() => scrollToSection(id)}
                className={`border-b border-ink/10 py-5 text-left font-display text-4xl font-semibold tracking-tight text-ink transition-all duration-700 ease-fluid ${
                  isMenuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
                style={{
                  transitionDelay: isMenuOpen ? `${100 + i * 60}ms` : "0ms",
                }}
              >
                {label}
              </button>
            )
          )}
        </div>
      </div>
    </>
  );
}
