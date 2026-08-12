// Fixed full-page backdrop: animated PCB-style traces + soft color blobs.
// This is what the glass panels blur/refract — the signature visual motif
// tying the "glassmorphism" treatment to Ashwath's field (embedded signal traces).
export default function CircuitField() {
  return (
    <div
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* base wash */}
      <div className="absolute inset-0 bg-ink" />

      {/* drifting color blobs — the "light" the glass will bend */}
      <div className="absolute -top-40 -left-24 w-[520px] h-[520px] rounded-full bg-accent/[0.09] blur-[130px] animate-drift" />
      <div
        className="absolute top-1/3 -right-32 w-[560px] h-[560px] rounded-full bg-signal/[0.10] blur-[150px] animate-drift"
        style={{ animationDelay: "-8s" }}
      />
      <div
        className="absolute bottom-0 left-1/3 w-[460px] h-[460px] rounded-full bg-copper/[0.05] blur-[140px] animate-drift"
        style={{ animationDelay: "-14s" }}
      />

      {/* faint schematic grid */}
      <div className="absolute inset-0 grid-bg opacity-[0.35]" />

      {/* circuit traces with traveling signal */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.22]"
        viewBox="0 0 1440 1600"
        preserveAspectRatio="xMidYMin slice"
        fill="none"
      >
        <path
          d="M-40 120 H300 V300 H620 V80 H980 V420 H1480"
          stroke="#45f0dd"
          strokeWidth="1.4"
          className="circuit-path"
        />
        <path
          d="M-40 520 H220 V680 H540 V560 H860 V820 H1480"
          stroke="#8b7cfa"
          strokeWidth="1.4"
          className="circuit-path"
          style={{ animationDelay: "-6s", animationDuration: "22s" }}
        />
        <path
          d="M-40 940 H360 V1080 H700 V960 H1040 V1220 H1480"
          stroke="#45f0dd"
          strokeWidth="1.4"
          className="circuit-path"
          style={{ animationDelay: "-11s", animationDuration: "26s" }}
        />
        <path
          d="M-40 1340 H260 V1460 H640 V1360 H1020 V1560 H1480"
          stroke="#8b7cfa"
          strokeWidth="1.4"
          className="circuit-path"
          style={{ animationDelay: "-3s", animationDuration: "20s" }}
        />
        {/* junction nodes */}
        {[
          [300, 120], [620, 300], [980, 80],
          [220, 520], [540, 680], [860, 560],
          [360, 940], [700, 1080], [1040, 960],
          [260, 1340], [640, 1460], [1020, 1360],
        ].map(([cx, cy], i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r="3"
            fill={i % 2 === 0 ? "#45f0dd" : "#8b7cfa"}
          />
        ))}
      </svg>

      {/* vignette to keep edges calm */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,#05070d_92%)]" />
    </div>
  );
}
