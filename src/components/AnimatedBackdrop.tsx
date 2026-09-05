const sparks = [
  { left: "8%", size: 3, delay: 0, duration: 17 },
  { left: "17%", size: 2, delay: 4, duration: 22 },
  { left: "26%", size: 4, delay: 8, duration: 19 },
  { left: "38%", size: 2, delay: 2, duration: 25 },
  { left: "47%", size: 3, delay: 11, duration: 20 },
  { left: "56%", size: 2, delay: 6, duration: 23 },
  { left: "65%", size: 4, delay: 14, duration: 18 },
  { left: "74%", size: 2, delay: 9, duration: 26 },
  { left: "83%", size: 3, delay: 3, duration: 21 },
  { left: "92%", size: 2, delay: 12, duration: 24 },
];

/** Decorative animated page backdrop: drifting aurora light, moving grid, rising sparks. */
export function AnimatedBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="grid-drift absolute inset-0 opacity-40" />

      <div
        className="aurora-orb"
        style={{
          top: "-12rem",
          left: "-8rem",
          height: "34rem",
          width: "34rem",
          background: "var(--gradient-instrument)",
        }}
      />
      <div
        className="aurora-orb"
        style={{
          top: "18%",
          right: "-10rem",
          height: "30rem",
          width: "30rem",
          background: "var(--gradient-focus)",
          animationDelay: "-7s",
          opacity: 0.28,
        }}
      />
      <div
        className="aurora-orb"
        style={{
          bottom: "-14rem",
          left: "30%",
          height: "36rem",
          width: "36rem",
          background: "var(--gradient-instrument)",
          animationDelay: "-13s",
          opacity: 0.22,
        }}
      />

      {sparks.map((s) => (
        <span
          key={s.left}
          className="spark"
          style={{
            left: s.left,
            bottom: "-2rem",
            height: `${s.size}px`,
            width: `${s.size}px`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
