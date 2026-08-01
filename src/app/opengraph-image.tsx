import { ImageResponse } from "next/og";

export const alt = "Nayan Patidar — CS @ IIT Jodhpur";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#14171C",
          padding: "72px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 88,
            height: 88,
            border: "1px solid #C9A24B",
            color: "#C9A24B",
            fontSize: 36,
            fontFamily: "Georgia, serif",
            letterSpacing: "-0.02em",
          }}
        >
          NP
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              color: "#EDE9DF",
              fontSize: 64,
              fontFamily: "Georgia, serif",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
            }}
          >
            Nayan Patidar
          </div>
          <div
            style={{
              color: "#EDE9DF",
              opacity: 0.65,
              fontSize: 28,
              fontFamily: "Helvetica, Arial, sans-serif",
              maxWidth: 820,
              lineHeight: 1.35,
            }}
          >
            CS undergrad, IIT Jodhpur — builder of full-stack systems that ship
            and scale
          </div>
          <div
            style={{
              marginTop: 12,
              color: "#C9A24B",
              fontSize: 16,
              fontFamily: "monospace",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            Foundation → Ascent
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
