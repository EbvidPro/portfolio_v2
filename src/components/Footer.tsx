import { RESUME_URL } from "../data/contact.tsx";

export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto text-center text-zinc-400 space-y-1">
        <p>
          &copy; {new Date().getFullYear()} Oluwatobi David. Built with care.
        </p>
        {RESUME_URL && (
          <p>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400/90 hover:text-cyan-400 underline underline-offset-2"
            >
              Download resume
            </a>
          </p>
        )}
      </div>
    </footer>
  );
}
