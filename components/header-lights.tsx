import type { CSSProperties } from "react";

const WIDTH = 1440;
const BASE_Y = 20;
const AMPLITUDE = 14;
const WAVELENGTH = 160;
const BULB_COUNT = 18;

const BULB_PALETTE = [
  { on: "#ff4136", off: "#3a100d" },
  { on: "#ffc93c", off: "#3a2c08" },
  { on: "#2ecc71", off: "#0c2c18" },
  { on: "#3b82f6", off: "#0d1f3d" },
  { on: "#a855f7", off: "#2a1140" },
];

function wireY(x: number) {
  return BASE_Y + AMPLITUDE * Math.sin((x / WAVELENGTH) * Math.PI * 2);
}

function buildWirePath() {
  const samples = 96;
  const points = Array.from({ length: samples + 1 }, (_, i) => {
    const x = (i / samples) * WIDTH;
    return `${x.toFixed(1)},${wireY(x).toFixed(1)}`;
  });
  return `M${points.join(" L")}`;
}

const BULBS = Array.from({ length: BULB_COUNT }, (_, i) => {
  const x = ((i + 0.5) / BULB_COUNT) * WIDTH;
  const wy = wireY(x);
  const drop = 14 + (i % 3) * 5;
  const palette = BULB_PALETTE[i % BULB_PALETTE.length];
  return {
    x,
    wy,
    y: wy + drop,
    on: palette.on,
    off: palette.off,
    delay: (i * 0.37) % 3.2,
    duration: 2.4 + (i % 5) * 0.3,
  };
});

const WIRE_PATH = buildWirePath();

export function HeaderLights() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-full -mt-1 h-12 overflow-visible sm:h-14"
    >
      <svg
        viewBox={`0 0 ${WIDTH} 56`}
        preserveAspectRatio="none"
        className="h-full w-full overflow-visible"
      >
        <g className="hl-wire-wrap">
          <path
            d={WIRE_PATH}
            fill="none"
            stroke="#52525b"
            strokeWidth={1.5}
            strokeLinecap="round"
            opacity={0.4}
          />
          {BULBS.map((b) => (
            <g key={b.x} className="hl-hanger">
              <line
                x1={b.x}
                y1={b.wy}
                x2={b.x}
                y2={b.y - 3}
                stroke="#52525b"
                strokeWidth={1.25}
                opacity={0.4}
              />
              <ellipse
                className="hl-bulb"
                cx={b.x}
                cy={b.y}
                rx={4.5}
                ry={5.5}
                fill={b.off}
                style={
                  {
                    "--on": b.on,
                    "--off": b.off,
                    "--dur": `${b.duration}s`,
                    "--delay": `${b.delay}s`,
                  } as unknown as CSSProperties
                }
              />
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}
