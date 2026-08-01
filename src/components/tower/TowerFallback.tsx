import { navFloors } from "@/data/content";

/** Static flat tower for viewports under 768px — nav bar handles real navigation. */
export function TowerFallback() {
  const n = navFloors.length;
  const slabH = 24;
  const gap = 5;
  const totalH = n * slabH + (n - 1) * gap;
  const width = 180;
  const height = totalH + 48;
  const postX = [28, width - 28];

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="mx-auto h-auto w-full max-w-[220px]"
      role="img"
      aria-label="The Tower — eight floors from Foundation to Basecamp"
    >
      {/* Plinth */}
      <rect
        x={18}
        y={height - 18}
        width={width - 36}
        height={12}
        fill="#14171C"
        stroke="#8A7035"
        strokeWidth={1}
      />
      {/* Guide posts */}
      {postX.map((x) => (
        <rect
          key={x}
          x={x - 1}
          y={14}
          width={2}
          height={height - 32}
          fill="#8A7035"
        />
      ))}
      {/* Spine */}
      <rect
        x={width / 2 - 1.5}
        y={10}
        width={3}
        height={height - 28}
        fill="#C9A24B"
      />
      {/* Finial */}
      <rect
        x={width / 2 - 10}
        y={6}
        width={20}
        height={6}
        fill="#C9A24B"
        stroke="#C9A24B"
      />

      {navFloors.map((floor, i) => {
        const y = height - 22 - (i + 1) * slabH - i * gap;
        const w = 118 - i * 7;
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
            <rect
              x={x - 1}
              y={y - 2}
              width={w + 2}
              height={3}
              fill="#8A7035"
            />
            <text
              x={width / 2}
              y={y + slabH / 2 + 3}
              textAnchor="middle"
              fill="#EDE9DF"
              opacity={0.75}
              style={{
                fontFamily: "var(--font-ibm-plex-mono), monospace",
                fontSize: 7,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              {String(i + 1).padStart(2, "0")} · {floor.navLabel}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
