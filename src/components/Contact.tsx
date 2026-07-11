import { CONTACT_ITEMS, RESUME_URL, FileText } from "../data/contact.tsx";
import { IslandButton } from "./IslandButton";
import { Reveal } from "./Reveal";

const EMAIL = "davidebenezer93@gmail.com";

export function Contact() {
  return (
    <section id="contact" className="px-4 py-24 md:px-8 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <div className="double-bezel shadow-ambient">
          <div className="double-bezel-inner overflow-hidden bg-inverse px-6 py-16 text-on-inverse md:px-14 md:py-24">
            <Reveal>
              <h2 className="max-w-[16ch] font-display text-4xl font-bold tracking-tight md:text-6xl">
                Let&apos;s build your next frontend
              </h2>
              <p className="mt-5 max-w-[44ch] font-mono text-base leading-relaxed text-on-inverse/60">
                Need a dashboard, a high-performance landing page, or custom
                React &amp; Next.js work for your startup? Open to full-time and
                contract roles.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="mt-12 grid gap-4 sm:grid-cols-3">
              {CONTACT_ITEMS.map((contact) => {
                const Icon = contact.icon;
                return (
                  <a
                    key={contact.label}
                    href={contact.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-on-inverse/5 p-5 ring-1 ring-on-inverse/10 transition-all duration-700 ease-fluid hover:-translate-y-1 hover:bg-on-inverse/10"
                  >
                    <Icon weight="light" size={22} className="text-accent" />
                    <div className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-on-inverse/40">
                      {contact.label}
                    </div>
                    <div className="mt-1 truncate font-mono text-sm text-on-inverse">
                      {contact.value}
                    </div>
                  </a>
                );
              })}
            </Reveal>

            <Reveal delay={0.18} className="mt-12 flex flex-wrap gap-3">
              <IslandButton href={`mailto:${EMAIL}`} variant="inverse">
                Start a conversation
              </IslandButton>
              {RESUME_URL && (
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-mono text-sm font-medium text-on-inverse/80 ring-1 ring-on-inverse/15 transition-all duration-700 ease-fluid hover:bg-on-inverse/5 hover:text-on-inverse active:scale-[0.98]"
                >
                  <FileText weight="light" size={18} />
                  Resume
                </a>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
