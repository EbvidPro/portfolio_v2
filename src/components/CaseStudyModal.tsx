import { X, ArrowUpRight } from "@phosphor-icons/react";
import type { ReactNode } from "react";
import type { CaseStudy } from "../data/caseStudies";
import { IslandButton } from "./IslandButton";

type CaseStudyModalProps = {
  study: CaseStudy;
  onClose: () => void;
};

export function CaseStudyModal({ study, onClose }: CaseStudyModalProps) {
  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-ink/40 p-0 backdrop-blur-2xl sm:items-center sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div
        className="double-bezel max-h-[92dvh] w-full max-w-3xl overflow-hidden shadow-ambient"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="double-bezel-inner flex max-h-[92dvh] flex-col overflow-hidden">
          <div className="sticky top-0 z-10 flex items-center justify-between border-b border-ink/5 bg-surface/90 px-6 py-4 backdrop-blur-xl">
            <h3
              id="case-study-title"
              className="font-display text-xl font-semibold tracking-tight text-ink"
            >
              {study.title}
            </h3>
            <button
              type="button"
              onClick={onClose}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-canvas text-mute transition-all duration-500 ease-fluid hover:bg-ink hover:text-canvas"
              aria-label="Close case study"
            >
              <X weight="light" size={20} />
            </button>
          </div>

          <div className="overflow-y-auto p-6 md:p-8">
            <div className="overflow-hidden">
              <img
                src={study.image}
                alt={`${study.title} product screenshot`}
                className="h-44 w-full object-cover object-top"
              />
            </div>

            <p className="mt-8 font-mono text-base leading-relaxed text-ink/80">
              {study.overview}
            </p>

            <Section title="The challenge">
              <p className="font-mono text-sm leading-relaxed text-mute">
                {study.challenge}
              </p>
            </Section>

            <Section title="My role">
              <List items={study.role} />
            </Section>

            <Section title="Approach & solution">
              <List items={study.approach} />
            </Section>

            <Section title="Results & impact">
              <List items={study.results} />
            </Section>

            <Section title="Tech stack">
              <div className="flex flex-wrap gap-2">
                {study.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-canvas px-3 py-1.5 font-mono text-xs text-mute"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Section>

            <div className="mt-10 flex flex-wrap gap-3">
              <IslandButton href={study.url}>View live site</IslandButton>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-mono text-sm font-medium text-mute ring-1 ring-ink/10 transition-all duration-700 ease-fluid hover:text-ink hover:ring-ink/20 active:scale-[0.98]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="mt-8">
      <h4 className="font-display text-lg font-semibold tracking-tight text-ink">
        {title}
      </h4>
      <div className="mt-3">{children}</div>
    </div>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3 font-mono text-sm leading-relaxed text-mute"
        >
          <ArrowUpRight
            weight="light"
            size={14}
            className="mt-1 shrink-0 text-accent"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
