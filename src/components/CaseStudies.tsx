import { CASE_STUDIES } from "../data/caseStudies";
import { CaseStudyCard } from "./CaseStudyCard";
import { CaseStudyModal } from "./CaseStudyModal";
import { Reveal } from "./Reveal";

type CaseStudiesProps = {
  selectedIndex: number | null;
  setSelectedIndex: (index: number | null) => void;
};

export function CaseStudies({
  selectedIndex,
  setSelectedIndex,
}: CaseStudiesProps) {
  return (
    <>
      <section id="projects" className="px-4 py-24 md:px-8 md:py-40">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <h2 className="font-display text-4xl font-bold tracking-tight text-ink md:text-6xl">
              Selected work
            </h2>
            <p className="mt-4 max-w-[48ch] font-mono text-base leading-relaxed text-mute">
              Landing pages, role-based product UI, and admin dashboards for
              startups. Some client work stays under NDA.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
            {CASE_STUDIES.map((study, index) => (
              <Reveal key={study.title} delay={index * 0.08}>
                <CaseStudyCard
                  study={study}
                  index={index}
                  onSelect={setSelectedIndex}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {selectedIndex !== null && CASE_STUDIES[selectedIndex] && (
        <CaseStudyModal
          study={CASE_STUDIES[selectedIndex]}
          onClose={() => setSelectedIndex(null)}
        />
      )}
    </>
  );
}
