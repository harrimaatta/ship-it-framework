import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 84px",
          backgroundColor: "#0F172A",
          color: "#F8FAFC",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              color: "#22D3EE",
              fontSize: 24,
              fontWeight: 600,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
            }}
          >
            <div style={{ width: 48, height: 2, backgroundColor: "#22D3EE" }} />
            <div>Ship It!</div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              fontSize: 84,
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
            }}
          >
            <div>Build.</div>
            <div>Validate.</div>
            <div>Ship.</div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: 24,
          }}
        >
          <div
            style={{
              maxWidth: 560,
              fontSize: 30,
              lineHeight: 1.35,
              color: "#E2E8F0",
            }}
          >
            The minimal software delivery framework.
          </div>
          <div
            style={{
              fontSize: 24,
              fontWeight: 600,
              color: "#22D3EE",
              letterSpacing: "0.02em",
            }}
          >
            shipitframe.work
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
