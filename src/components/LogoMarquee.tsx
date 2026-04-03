const sectors = [
  "Casas de Câmbio",
  "Clínicas & Saúde",
  "Imobiliárias",
  "Restaurantes",
  "E-commerce",
  "Escritórios de Advocacia",
  "Escolas & Cursos",
  "Lojas de Varejo",
  "Academias",
  "Seguradoras",
  "Consultórios",
  "Financeiras",
];

function Track({ hidden }: { hidden?: boolean }) {
  return (
    <div
      className="animate-marquee"
      aria-hidden={hidden}
      style={{ display: "flex", alignItems: "center", gap: "48px", flexShrink: 0 }}
    >
      {sectors.map((name) => (
        <span
          key={name}
          style={{
            flexShrink: 0,
            fontWeight: 600,
            fontSize: "14px",
            color: "rgba(255,255,255,0.45)",
            whiteSpace: "nowrap",
            letterSpacing: "0.02em",
          }}
        >
          {name}
        </span>
      ))}
    </div>
  );
}

export function LogoMarquee() {
  return (
    <section
      style={{
        backgroundColor: "#0d1117",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        padding: "40px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "24px",
      }}
    >
      <p style={{ fontSize: "13px", fontWeight: 500, color: "rgba(255,255,255,0.35)", textAlign: "center", padding: "0 24px", letterSpacing: "0.06em", textTransform: "uppercase" }}>
        Atendemos empresas em todos os segmentos
      </p>
      <div
        style={{
          width: "100%",
          overflow: "hidden",
          maskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
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
