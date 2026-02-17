type CursorProps = {
  position: { x: number; y: number };
  variant: string;
  visible: boolean;
};

export function Cursor({ position, variant, visible }: CursorProps) {
  const isHover = variant === "hover";
  const offset = isHover ? 24 : 6;

  if (!visible) return null;

  return (
    <div
      className={`fixed top-0 left-0 pointer-events-none z-50 transition-all duration-75 ease-out ${
        isHover ? "w-12 h-12" : "w-3 h-3"
      }`}
      style={{
        transform: `translate(${position.x - offset}px, ${position.y - offset}px)`,
      }}
    >
      <div
        className={`w-full h-full rounded-full transition-all duration-150 ease-out ${
          isHover
            ? "border-2 border-cyan-400 bg-cyan-400/20 scale-100"
            : "bg-white scale-100"
        }`}
      />
    </div>
  );
}
