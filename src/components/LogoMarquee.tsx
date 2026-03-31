import Image from "next/image";

const imageLogos = [
  { src: "/images/logo-nuvio.png", alt: "Nuvio" },
  { src: "/images/logo-klyra.png", alt: "Klyra" },
  { src: "/images/logo-knot.png", alt: "Knot" },
  { src: "/images/logo-veltix.png", alt: "Veltix" },
];

const textLogos = ["TUNIMED", "ADAPTA", "4COMPANY", "RESERVA"];

function Track({ hidden }: { hidden?: boolean }) {
  return (
    <div
      className="animate-marquee"
      aria-hidden={hidden}
      style={{ display: "flex", alignItems: "center", gap: "48px", flexShrink: 0 }}
    >
      {imageLogos.map((logo) => (
        <div key={logo.alt} style={{ flexShrink: 0, opacity: 0.65 }}>
          <Image src={logo.src} alt={logo.alt} width={120} height={32} style={{ height: "32px", width: "auto", objectFit: "contain" }} />
        </div>
      ))}
      {textLogos.map((label) => (
        <span key={label} style={{ flexShrink: 0, fontWeight: 700, fontSize: "18px", color: "#333", opacity: 0.65, whiteSpace: "nowrap" }}>
          {label}
        </span>
      ))}
    </div>
  );
}

export function LogoMarquee() {
  return (
    <section style={{ backgroundColor: "#f7faff", padding: "48px 0", display: "flex", flexDirection: "column", alignItems: "center", gap: "32px" }}>
      <p style={{ fontSize: "14px", fontWeight: 500, color: "#6d6f74", textAlign: "center", padding: "0 24px" }}>
        Over 45,000 companies are multiplying their results with BotConversa
      </p>
      <div
        style={{
          width: "100%",
          overflow: "hidden",
          maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      >
        <div style={{ display: "flex", width: "max-content" }}>
          <Track />
          <Track hidden />
        </div>
      </div>
    </section>
  );
}
