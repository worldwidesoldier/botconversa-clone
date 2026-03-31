import Image from "next/image";
import { MetaIcon } from "@/components/icons";

export function HeroSection() {
  return (
    <section
      style={{
        backgroundColor: "#f7faff",
        paddingTop: "120px",
        minHeight: "700px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "880px",
          width: "100%",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "0 24px",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Meta Business Partner badge */}
        <div
          style={{
            background: "radial-gradient(43% 75% at 50% 100%, #d6e6ff 0%, #c1c1c3 100%)",
            borderRadius: "28px",
            padding: "8px 12px",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "32px",
          }}
        >
          <MetaIcon />
          <span style={{ fontSize: "13px", fontWeight: 500, color: "#212327" }}>
            Meta Business Partner
          </span>
        </div>

        <h1
          style={{
            fontSize: "clamp(36px, 4.5vw, 64px)",
            fontWeight: 700,
            lineHeight: 1.0,
            color: "#18191c",
            textAlign: "center",
            maxWidth: "700px",
            margin: "0 0 24px",
          }}
        >
          Automate your WhatsApp chats with AI Assistants
        </h1>

        <p
          style={{
            fontSize: "20px",
            fontWeight: 400,
            lineHeight: 1.4,
            color: "#6d6f74",
            textAlign: "center",
            maxWidth: "600px",
            margin: "0 0 40px",
          }}
        >
          Create in minutes. No programming needed. Scale your conversations without increasing your team.
        </p>

        <a
          href="#"
          style={{
            background: "linear-gradient(180deg, #6ea8ff 0%, #2b76e5 100%)",
            borderRadius: "8px",
            padding: "0 32px",
            height: "48px",
            fontSize: "14px",
            fontWeight: 700,
            letterSpacing: "0.08em",
            color: "#fff",
            textTransform: "uppercase",
            display: "inline-flex",
            alignItems: "center",
            textDecoration: "none",
            border: "none",
          }}
        >
          Start Now
        </a>

        <p style={{ fontSize: "13px", color: "#6d6f74", marginTop: "24px" }}>
          Over 45,000 companies are multiplying their results with BotConversa
        </p>
      </div>

      {/* Hero product image */}
      <div style={{ marginTop: "60px", width: "100%", maxWidth: "900px", padding: "0 24px", position: "relative", zIndex: 1 }}>
        <Image
          src="/images/hero-image.png"
          alt="BotConversa platform"
          width={900}
          height={560}
          priority
          style={{ width: "100%", height: "auto" }}
        />
      </div>

      {/* Decorative concentric ellipses */}
      <svg
        viewBox="0 0 1440 400"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "100%", height: "400px", zIndex: 0, pointerEvents: "none" }}
      >
        {Array.from({ length: 12 }, (_, i) => {
          const t = i / 11;
          return (
            <ellipse key={i} cx="720" cy="400" rx={100 + t * 1100} ry={40 + t * 440} fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth="1" />
          );
        })}
      </svg>
    </section>
  );
}
