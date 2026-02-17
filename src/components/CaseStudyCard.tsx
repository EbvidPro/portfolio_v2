import { useState } from "react";
import { ExternalLink, ChevronRight } from "lucide-react";
import type { CaseStudy } from "../data/caseStudies";

type CaseStudyCardProps = {
  study: CaseStudy;
  index: number;
  onSelect: (index: number) => void;
  onMouseEnter: (variant: string) => void;
  onMouseLeave: () => void;
};

export function CaseStudyCard({
  study,
  index,
  onSelect,
  onMouseEnter,
  onMouseLeave,
}: CaseStudyCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      onMouseEnter={() => onMouseEnter("hover")}
      onMouseLeave={onMouseLeave}
      className="group bg-zinc-800/50 rounded-2xl overflow-hidden border border-zinc-700 hover:border-cyan-400/50 transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/10 flex flex-col"
    >
      <div className="relative overflow-hidden h-48 bg-zinc-800">
        {imgError ? (
          <div className="w-full h-full flex items-center justify-center text-zinc-500 text-sm">
            {study.title}
          </div>
        ) : (
          <img
            src={study.image}
            alt={study.title}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
            onError={() => setImgError(true)}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3">
          <span className="text-xs font-medium text-cyan-400 uppercase tracking-wider">
            Case Study
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-semibold mb-1">{study.title}</h3>
        <p className="text-zinc-400 text-sm mb-4 line-clamp-2">
          {study.tagline}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {study.tech.slice(0, 4).map((t, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-zinc-700 text-cyan-400 text-xs rounded-md"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-3">
          <button
            onClick={() => onSelect(index)}
            className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-medium text-sm"
          >
            Read case study
            <ChevronRight size={16} />
          </button>
          <a
            href={study.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-zinc-400 hover:text-emerald-400 text-sm"
          >
            <ExternalLink size={14} />
            Live site
          </a>
        </div>
      </div>
    </div>
  );
}
