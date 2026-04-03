import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ApexMind — Assistentes de IA para WhatsApp";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0d1117",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Top glow */}
        <div
          style={{
            position: "absolute",
            top: -100,
            left: "50%",
            transform: "translateX(-50%)",
            width: 800,
            height: 500,
            borderRadius: "50%",
            background: "rgba(43,92,230,0.3)",
            filter: "blur(120px)",
          }}
        />

        {/* Logo + name */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 36 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: "50%",
              background: "linear-gradient(135deg,#2B5CE6,#8847E8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 32,
            }}
          >
            🧠
          </div>
          <span
            style={{
              fontSize: 44,
              fontWeight: 800,
              color: "white",
              letterSpacing: "-1px",
            }}
          >
            ApexMind
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 56,
            fontWeight: 800,
            color: "white",
            textAlign: "center",
            maxWidth: 900,
            lineHeight: 1.1,
            letterSpacing: "-1.5px",
            marginBottom: 24,
          }}
        >
          Automatize seu WhatsApp{" "}
          <span style={{ color: "#a78bfa" }}>com IA</span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 24,
            color: "rgba(255,255,255,0.55)",
            textAlign: "center",
            maxWidth: 680,
            lineHeight: 1.5,
            marginBottom: 48,
          }}
        >
          Atendimento 24h · Respostas automáticas · Handoff inteligente
        </div>

        {/* Pills */}
        <div style={{ display: "flex", gap: 12 }}>
          {["Feito sob medida", "Sem código", "Suporte via WhatsApp"].map((t) => (
            <div
              key={t}
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 40,
                padding: "8px 20px",
                color: "rgba(255,255,255,0.75)",
                fontSize: 18,
                fontWeight: 500,
              }}
            >
              {t}
            </div>
          ))}
        </div>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: 36,
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#25D366",
            }}
          />
          <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 18 }}>
            apexmindcorp.com
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
