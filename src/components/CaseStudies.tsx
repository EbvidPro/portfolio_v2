import { CASE_STUDIES } from "../data/caseStudies";
import { CaseStudyCard } from "./CaseStudyCard";
import { CaseStudyModal } from "./CaseStudyModal";

type CaseStudiesProps = {
  selectedIndex: number | null;
  setSelectedIndex: (index: number | null) => void;
  onMouseEnter: (variant: string) => void;
  onMouseLeave: () => void;
};

export function CaseStudies({
  selectedIndex,
  setSelectedIndex,
  onMouseEnter,
  onMouseLeave,
}: CaseStudiesProps) {
  return (
    <>
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-2">
            <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Case Studies
            </h2>

            <p className="text-lg text-zinc-300 max-w-2xl mx-auto mb-12">
              Selected work showing problem, approach, and impact. Many projects
              are under NDA—here are a few I can share in detail.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {CASE_STUDIES.map((study, index) => (
              <CaseStudyCard
                key={index}
                study={study}
                index={index}
                onSelect={setSelectedIndex}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              />
            ))}
          </div>
          <div className="flex flex-col items-center justify-center w-full gap-2">
            <a
              target="_blank"
              href="https://oluwatobidavid.netlify.app/#portfolio"
              rel="noopener noreferrer"
            >
              <button
                onMouseEnter={() => onMouseEnter("hover")}
                onMouseLeave={onMouseLeave}
                className="px-12 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-lg font-semibold text-lg hover:scale-105 transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                View More Work
              </button>
            </a>
            <p className="text-sm text-zinc-500">
              Additional projects on my previous portfolio site.
            </p>
          </div>
        </div>
      </section>

      {selectedIndex !== null && CASE_STUDIES[selectedIndex] && (
        <CaseStudyModal
          study={CASE_STUDIES[selectedIndex]}
          onClose={() => setSelectedIndex(null)}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      )}
    </>
  );
}
