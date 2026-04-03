import { WhatsAppBubbles } from "@/components/WhatsAppBubbles";
import { NeuralBackground } from "@/components/NeuralBackground";
import { BrainConnections } from "@/components/BrainConnections";

export function HeroSection() {
  return (
    <section
      className="pt-[285px] md:pt-[240px]"
      style={{
        backgroundColor: "#0d1117",
        paddingBottom: "120px",
        minHeight: "900px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Neural network canvas background */}
      <NeuralBackground />

      {/* Brain hub + connection lines to bubbles */}
      <BrainConnections />

      {/* Floating WhatsApp bubbles */}
      <WhatsAppBubbles />

      {/* Subtle radial glow center */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "0",
          left: "50%",
          transform: "translateX(-50%)",
          width: "700px",
          height: "500px",
          background: "radial-gradient(ellipse, rgba(43,92,230,0.12) 0%, rgba(136,71,232,0.08) 40%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        style={{
          maxWidth: "780px",
          width: "100%",
          padding: "0 24px",
          position: "relative",
          zIndex: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* Badge */}
        <div
          style={{
            background: "rgba(255,255,255,0.06)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            border: "1px solid rgba(107,143,255,0.3)",
            borderRadius: "28px",
            padding: "8px 18px",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "20px",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              stroke="#6B8FFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span style={{ fontSize: "13px", fontWeight: 600, color: "#a5b4fc", letterSpacing: "0.01em" }}>
            O atendente que nunca dorme e nunca falta
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontSize: "clamp(38px, 5vw, 68px)",
            fontWeight: 800,
            lineHeight: 1.05,
            color: "#ffffff",
            margin: "0 0 16px",
            letterSpacing: "-0.02em",
          }}
        >
          Automatize seu WhatsApp{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #6B8FFF 0%, #c084fc 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              display: "block",
            }}
          >
            com Assistentes de IA
          </span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "18px",
            fontWeight: 400,
            lineHeight: 1.6,
            color: "rgba(255,255,255,0.55)",
            margin: "0 0 32px",
            maxWidth: "520px",
          }}
        >
          Responda automaticamente, qualifique seus clientes e transfira para o atendente certo — sem perder nenhuma conversa.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
          <a
            href="https://wa.me/18625761010"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "linear-gradient(135deg, #2B5CE6 0%, #8847E8 100%)",
              borderRadius: "10px",
              padding: "0 28px",
              height: "52px",
              fontSize: "15px",
              fontWeight: 700,
              color: "#fff",
              display: "inline-flex",
              alignItems: "center",
              textDecoration: "none",
              gap: "8px",
              boxShadow: "0 8px 32px rgba(136,71,232,0.4)",
            }}
          >
            <svg viewBox="0 0 24 24" fill="white" width="17" height="17">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Falar com a ApexMind
          </a>

          <a
            href="#como-funciona"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "10px",
              padding: "0 28px",
              height: "52px",
              fontSize: "15px",
              fontWeight: 600,
              color: "rgba(255,255,255,0.8)",
              display: "inline-flex",
              alignItems: "center",
              textDecoration: "none",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
            }}
          >
            Ver como funciona
          </a>
        </div>
      </div>
    </section>
  );
}
