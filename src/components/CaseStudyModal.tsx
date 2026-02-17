import { X, ExternalLink } from "lucide-react";
import type { CaseStudy } from "../data/caseStudies";

type CaseStudyModalProps = {
  study: CaseStudy;
  onClose: () => void;
  onMouseEnter: (variant: string) => void;
  onMouseLeave: () => void;
};

export function CaseStudyModal({
  study,
  onClose,
  onMouseEnter,
  onMouseLeave,
}: CaseStudyModalProps) {
  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-zinc-950/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-zinc-900 border border-zinc-700 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl shadow-cyan-500/10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-zinc-900/95 backdrop-blur border-b border-zinc-700 px-6 py-4 flex items-center justify-between z-10">
          <h3 id="case-study-title" className="text-xl font-bold text-white">{study.title}</h3>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800"
            aria-label="Close case study"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-6 space-y-8">
          <div className="relative rounded-xl overflow-hidden h-44">
            <img
              src={study.image}
              alt={`${study.title} — project preview`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
          </div>
          <p className="text-zinc-300 text-lg leading-relaxed">
            {study.overview}
          </p>

          <div>
            <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-2">
              The Challenge
            </h4>
            <p className="text-zinc-300 leading-relaxed">{study.challenge}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-2">
              My Role
            </h4>
            <ul className="space-y-2">
              {study.role.map((r, i) => (
                <li key={i} className="text-zinc-300 flex gap-2">
                  <span className="text-emerald-400 mt-1.5 shrink-0">•</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-2">
              Approach & Solution
            </h4>
            <ul className="space-y-2">
              {study.approach.map((a, i) => (
                <li key={i} className="text-zinc-300 flex gap-2">
                  <span className="text-emerald-400 mt-1.5 shrink-0">•</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-2">
              Results & Impact
            </h4>
            <ul className="space-y-2">
              {study.results.map((r, i) => (
                <li key={i} className="text-zinc-300 flex gap-2">
                  <span className="text-emerald-400 mt-1.5 shrink-0">•</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-2">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {study.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 bg-zinc-800 text-cyan-400 text-sm rounded-lg border border-zinc-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4 flex flex-wrap gap-4">
            <a
              href={study.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => onMouseEnter("hover")}
              onMouseLeave={onMouseLeave}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-lg font-semibold hover:scale-105 transition-all"
            >
              <ExternalLink size={18} />
              View live site
            </a>
            <button
              onClick={onClose}
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-zinc-600 rounded-lg font-semibold hover:border-cyan-400 hover:text-cyan-400 transition-all"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
