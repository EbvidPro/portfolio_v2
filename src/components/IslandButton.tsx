import { ArrowUpRight } from "@phosphor-icons/react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type IslandButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "ghost" | "inverse";
  href?: string;
  showArrow?: boolean;
};

const base =
  "group inline-flex items-center gap-3 rounded-full px-6 py-3 font-mono text-sm font-medium transition-all duration-700 ease-fluid active:scale-[0.98]";

const variants = {
  primary: "bg-ink text-canvas hover:bg-accent hover:text-on-inverse",
  ghost:
    "bg-surface/70 text-ink ring-1 ring-ink/10 hover:bg-surface hover:ring-ink/20",
  inverse: "bg-surface text-ink hover:bg-accent hover:text-on-inverse",
};

export function IslandButton({
  children,
  variant = "primary",
  href,
  showArrow = true,
  className = "",
  ...props
}: IslandButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  const arrowTone =
    variant === "primary"
      ? "bg-canvas/15"
      : "bg-ink/5 group-hover:bg-on-inverse/20";

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <span
          className={`flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-700 ease-fluid group-hover:translate-x-1 group-hover:-translate-y-[1px] group-hover:scale-105 ${arrowTone}`}
        >
          <ArrowUpRight weight="light" size={16} />
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={
          href.startsWith("http") || href.startsWith("mailto")
            ? "_blank"
            : undefined
        }
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {content}
    </button>
  );
}
