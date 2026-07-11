import { GithubLogo, LinkedinLogo, EnvelopeSimple } from "@phosphor-icons/react";
import { OUTCOMES } from "../data/outcomes";
import { Reveal } from "./Reveal";

const socials = [
  {
    href: "https://github.com/EbvidPro",
    label: "GitHub",
    icon: GithubLogo,
  },
  {
    href: "https://www.linkedin.com/in/david-tobi/",
    label: "LinkedIn",
    icon: LinkedinLogo,
  },
  {
    href: "mailto:davidebenezer93@gmail.com",
    label: "Email",
    icon: EnvelopeSimple,
  },
];

export function About() {
  return (
    <section id="about" className="px-4 py-24 md:px-8 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="double-bezel h-full shadow-soft">
              <div className="double-bezel-inner overflow-hidden">
                <div className="aspect-[4/5] overflow-hidden bg-ink/5">
                  <img
                    src="/about/me.jpeg"
                    alt="Oluwatobi David, React and Next.js developer"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
                    About
                  </h2>
                  <p className="mt-2 font-mono text-sm text-mute">
                    React &amp; Next.js developer
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col justify-center lg:col-span-7">
            <Reveal delay={0.1}>
              <p className="max-w-[55ch] font-mono text-base leading-relaxed text-ink/80 md:text-lg">
                I help startups ship production-ready frontend: high-performance
                landing pages that convert, and scalable dashboards ops teams can
                actually run day to day.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-[55ch] font-mono text-base leading-relaxed text-mute md:text-lg">
                My focus is React, Next.js, and TypeScript, with clean,
                maintainable architecture so products stay easy to extend as the
                team and roadmap grow. I also build React Native when the product
                needs a mobile surface.
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <p className="mt-6 max-w-[55ch] font-mono text-base leading-relaxed text-mute md:text-lg">
                Over 5+ years I have delivered custom software for fintech,
                edtech, and agri-tech, from public marketing sites to internal
                admin tools. I also build with{" "}
                <a
                  href="https://rscbyte.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink underline decoration-accent/40 underline-offset-4 transition-colors duration-500 ease-fluid hover:text-accent"
                >
                  RSC Byte
                </a>
                . Growing up I thought I would become a surgeon. I ended up
                shipping interfaces instead, and I still care about precision.
              </p>
            </Reveal>

            <Reveal delay={0.28} className="mt-10 flex gap-3">
              {socials.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-surface ring-1 ring-ink/8 transition-all duration-700 ease-fluid hover:-translate-y-0.5 hover:bg-accent-soft hover:text-accent hover:shadow-soft"
                >
                  <Icon weight="light" size={22} />
                </a>
              ))}
            </Reveal>
          </div>
        </div>

        <div className="mt-16 border-t border-ink/8 pt-12 md:mt-20 md:pt-16">
          <Reveal>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-mute">
              What I deliver
            </p>
          </Reveal>
          <div className="mt-8 grid gap-8 md:grid-cols-3 md:gap-10">
            {OUTCOMES.map((item, index) => (
              <Reveal key={item.title} delay={0.06 * index}>
                <div className="border-l border-accent/40 pl-5">
                  <h3 className="font-display text-xl font-semibold tracking-tight text-ink md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 font-mono text-sm leading-relaxed text-mute">
                    {item.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
