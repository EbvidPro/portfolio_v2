import { CONTACT_ITEMS, RESUME_URL } from "../data/contact.tsx";
import { FileText } from "lucide-react";

type ContactProps = {
  onMouseEnter: (variant: string) => void;
  onMouseLeave: () => void;
};

const EMAIL = "davidebenezer93@gmail.com";

export function Contact({ onMouseEnter, onMouseLeave }: ContactProps) {
  return (
    <section id="contact" className="py-20 px-6 bg-zinc-900/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
          Let's Work Together
        </h2>

        <p className="text-lg text-zinc-300 mb-2 max-w-2xl mx-auto">
          Ready to bring your next project to life? I'm open to full-time roles and
          contract work—let's talk.
        </p>
        <p className="text-sm text-zinc-500 mb-12 max-w-xl mx-auto">
          Available for new opportunities. Reach out for projects, collabs, or a chat.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {CONTACT_ITEMS.map((contact, index) => (
            <a
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              onMouseEnter={() => onMouseEnter("hover")}
              onMouseLeave={onMouseLeave}
              className="p-6 bg-zinc-800/50 rounded-xl border border-zinc-700 hover:border-cyan-400/50 transition-all duration-200 hover:scale-105 cursor-pointer"
            >
              <div className="text-cyan-400 mb-2 flex items-center justify-center">
                {contact.icon}
              </div>
              <div className="text-sm text-zinc-400 mb-1">{contact.label}</div>
              <div className="text-white">{contact.value}</div>
            </a>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={`mailto:${EMAIL}`}
            onMouseEnter={() => onMouseEnter("hover")}
            onMouseLeave={onMouseLeave}
            className="px-12 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-lg font-semibold text-lg hover:scale-105 transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 inline-block"
          >
            Start a Conversation
          </a>
          {RESUME_URL && (
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => onMouseEnter("hover")}
              onMouseLeave={onMouseLeave}
              className="inline-flex items-center gap-2 px-8 py-4 border border-zinc-600 rounded-lg font-semibold hover:border-cyan-400 hover:text-cyan-400 transition-all"
            >
              <FileText size={20} />
              Resume
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
