import { navFloors } from "@/data/content";

/** Static flat tower for viewports under 768px — nav bar handles real navigation. */
export function TowerFallback() {
  const n = navFloors.length;
  const slabH = 22;
  const gap = 6;
  const totalH = n * slabH + (n - 1) * gap;
  const width = 160;
  const height = totalH + 24;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="mx-auto h-auto w-full max-w-[200px]"
      role="img"
      aria-label="The Tower — eight floors from Foundation to Basecamp"
    >
      {navFloors.map((floor, i) => {
        const y = height - 12 - (i + 1) * slabH - i * gap;
        const w = 120 - i * 8;
        const x = (width - w) / 2;
        return (
          <g key={floor.id}>
            <rect
              x={x}
              y={y}
              width={w}
              height={slabH}
              fill="#2B2F36"
              stroke="#C9A24B"
              strokeWidth={1}
            />
            <text
              x={width / 2}
              y={y + slabH / 2 + 3}
              textAnchor="middle"
              fill="#EDE9DF"
              opacity={0.7}
              style={{
                fontFamily: "var(--font-ibm-plex-mono), monospace",
                fontSize: 7,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              {floor.navLabel}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
