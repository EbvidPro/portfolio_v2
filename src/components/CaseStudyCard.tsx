import { useState } from "react";
import { ArrowUpRight, ArrowRight } from "@phosphor-icons/react";
import type { CaseStudy } from "../data/caseStudies";

type CaseStudyCardProps = {
  study: CaseStudy;
  index: number;
  onSelect: (index: number) => void;
};

export function CaseStudyCard({ study, index, onSelect }: CaseStudyCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <article className="double-bezel group h-full shadow-soft transition-transform duration-700 ease-fluid hover:-translate-y-1">
      <div className="double-bezel-inner flex h-full flex-col overflow-hidden">
        <button
          type="button"
          onClick={() => onSelect(index)}
          className="relative aspect-[16/10] overflow-hidden bg-ink/5 text-left"
          aria-label={`Open ${study.title} case study`}
        >
          {imgError ? (
            <div className="flex h-full items-center justify-center font-mono text-sm text-mute">
              {study.title}
            </div>
          ) : (
            <img
              src={study.image}
              alt={`${study.title} product screenshot`}
              className="h-full w-full object-cover object-top transition-transform duration-700 ease-fluid group-hover:scale-[1.04]"
              onError={() => setImgError(true)}
            />
          )}
        </button>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
            {study.title}
          </h3>
          <p className="mt-2 line-clamp-2 font-mono text-sm leading-relaxed text-mute">
            {study.tagline}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {study.tech.slice(0, 3).map((t) => (
              <span
                key={t}
                className="rounded-full bg-canvas px-2.5 py-1 font-mono text-[11px] text-mute"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-auto flex flex-wrap items-center gap-4 pt-6">
            <button
              type="button"
              onClick={() => onSelect(index)}
              className="group/btn inline-flex items-center gap-2 font-mono text-sm font-medium text-ink transition-colors duration-500 ease-fluid hover:text-accent"
            >
              Read case study
              <ArrowRight
                weight="light"
                size={16}
                className="transition-transform duration-500 ease-fluid group-hover/btn:translate-x-1"
              />
            </button>
            <a
              href={study.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-sm text-mute transition-colors duration-500 ease-fluid hover:text-ink"
            >
              Live site
              <ArrowUpRight weight="light" size={14} />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
