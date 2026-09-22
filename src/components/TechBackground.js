"use client";

// Fixed, decorative dark tech backdrop: dot grid + animated circuit traces +
// floating code snippets. Sits behind all homepage sections (zIndex: 0).
const CODE_SNIPPETS = [
  "<Intern />",
  "const skills = [];",
  "npm run career",
  "{ status: 'hired' }",
  "git commit -m grow",
  "</>",
  "fetch('/opportunities')",
  "01001000 01101001",
  "SELECT * FROM interns",
  "while(learning) grow();",
  "#include <future>",
  "npx create-career",
];

const CIRCUIT_PATHS = [
  { d: "M0 90 H220 V230 H480 V60 H760 V180 H1200", delay: "0s" },
  { d: "M1200 300 H900 V480 H620 V620 H300 V500 H0", delay: "1.4s" },
  { d: "M0 560 H160 V700 H520 V600 H900 V740 H1200", delay: "2.6s" },
];

const CIRCUIT_NODES = [
  [220, 90], [480, 230], [760, 60], [900, 300], [620, 480],
  [300, 620], [160, 560], [520, 700], [900, 740],
];

export default function TechBackground() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {/* base gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(160deg, #050b16 0%, #0a1628 45%, #0c1a30 100%)",
        }}
      />

      {/* dot grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(rgba(34,197,94,0.16) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* glow blobs */}
      <div
        style={{
          position: "absolute",
          top: "-12%",
          left: "-6%",
          width: 460,
          height: 460,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(34,197,94,0.18) 0%, transparent 70%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "15%",
          right: "-10%",
          width: 420,
          height: 420,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(59,130,246,0.14) 0%, transparent 70%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-10%",
          left: "25%",
          width: 480,
          height: 480,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(34,197,94,0.12) 0%, transparent 70%)",
        }}
      />

      {/* circuit trace lines */}
      <svg
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
      >
        <g fill="none" stroke="#22C55E" strokeWidth="1.2">
          {CIRCUIT_PATHS.map((p, i) => (
            <path
              key={i}
              d={p.d}
              className="tbg-circuit-path"
              style={{ animationDelay: p.delay }}
            />
          ))}
        </g>
        {CIRCUIT_NODES.map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r="3.5"
            fill="#22C55E"
            className="tbg-circuit-node"
            style={{ animationDelay: `${i * 0.3}s` }}
          />
        ))}
      </svg>

      {/* floating code chips */}
      {CODE_SNIPPETS.map((s, i) => (
        <span
          key={s}
          className="tbg-chip"
          style={{
            position: "absolute",
            top: `${(i * 137 + 8) % 92}%`,
            left: `${(i * 233 + 4) % 90}%`,
            fontFamily:
              "'JetBrains Mono', 'Fira Code', ui-monospace, monospace",
            fontSize: 11 + (i % 3) * 2,
            fontWeight: 600,
            color: i % 2 === 0 ? "rgba(34,197,94,0.24)" : "rgba(148,163,184,0.2)",
            whiteSpace: "nowrap",
            animationDelay: `${i * 0.45}s`,
            animationDuration: `${8 + (i % 4)}s`,
          }}
        >
          {s}
        </span>
      ))}

      <style jsx>{`
        .tbg-circuit-path {
          stroke-dasharray: 1600;
          stroke-dashoffset: 1600;
          opacity: 0;
          animation: tbgDraw 7s ease-in-out infinite;
        }
        @keyframes tbgDraw {
          0% {
            stroke-dashoffset: 1600;
            opacity: 0;
          }
          15% {
            opacity: 0.35;
          }
          55% {
            stroke-dashoffset: 0;
            opacity: 0.35;
          }
          85% {
            opacity: 0.1;
          }
          100% {
            stroke-dashoffset: -1600;
            opacity: 0;
          }
        }
        .tbg-circuit-node {
          opacity: 0.25;
          animation: tbgPulse 3s ease-in-out infinite;
        }
        @keyframes tbgPulse {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.85;
          }
        }
        .tbg-chip {
          animation-name: tbgFloat;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
        @keyframes tbgFloat {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-16px);
          }
        }
      `}</style>
    </div>
  );
}
