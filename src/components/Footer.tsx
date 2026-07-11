import { RESUME_URL } from "../data/contact.tsx";

export function Footer() {
  return (
    <footer className="px-4 pb-12 pt-4 md:px-8">
      <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-4 border-t border-ink/8 pt-8 sm:flex-row sm:items-center">
        <p className="font-mono text-xs text-mute">
          &copy; {new Date().getFullYear()} Oluwatobi David. React &amp; Next.js
          for startups.
        </p>
        {RESUME_URL && (
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-accent transition-colors duration-500 ease-fluid hover:text-accent-deep"
          >
            Download resume
          </a>
        )}
      </div>
    </footer>
  );
}
