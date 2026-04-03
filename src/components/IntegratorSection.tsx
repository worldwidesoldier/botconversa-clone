const leftCards = [
  { title: "Finanças & Câmbio", tags: ["Casas de Câmbio", "Corretoras", "Fintechs", "Bancos Digitais"] },
  { title: "Saúde & Bem-Estar", tags: ["Clínicas", "Dentistas", "Psicólogos", "Academias"] },
];
const rightCards = [
  { title: "Educação & Serviços", tags: ["Escolas", "Cursos Online", "Escritórios", "Consultorias"] },
  { title: "Varejo & Gastronomia", tags: ["E-commerce", "Lojas Físicas", "Restaurantes", "Imobiliárias"] },
];

function CategoryCard({ title, tags }: { title: string; tags: string[] }) {
  return (
    <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: "12px", padding: "20px", border: "1px solid rgba(255,255,255,0.08)", marginBottom: "14px" }}>
      <p style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.35)", marginBottom: "12px" }}>
        {title}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {tags.map((tag) => (
          <span key={tag} style={{ background: "rgba(255,255,255,0.07)", borderRadius: "20px", padding: "5px 12px", fontSize: "12px", color: "rgba(255,255,255,0.65)", fontWeight: 500 }}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export function IntegratorSection() {
  return (
    <section id="setores" style={{ background: "#18191c", padding: "100px 32px" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "64px" }}>
        <span style={{ display: "inline-block", background: "rgba(136,71,232,0.15)", color: "#a78bfa", borderRadius: "20px", padding: "5px 16px", fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "16px" }}>
          Setores
        </span>
        <h2 style={{ fontSize: "clamp(28px,3.5vw,42px)", fontWeight: 800, color: "#fff", maxWidth: "640px", margin: "0 auto", lineHeight: 1.15, letterSpacing: "-0.02em" }}>
          Atendemos o seu segmento
        </h2>
        <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.5)", maxWidth: "480px", margin: "14px auto 0", lineHeight: 1.6 }}>
          Se seu negócio recebe perguntas repetitivas no WhatsApp, a ApexMind tem uma solução pra você.
        </p>
      </div>

      {/* Hub visual — desktop */}
      <div className="hidden md:grid" style={{ gridTemplateColumns: "1fr auto 1fr", gap: "40px", alignItems: "center", maxWidth: "1000px", margin: "0 auto" } as React.CSSProperties}>
        <div>{leftCards.map((c) => <CategoryCard key={c.title} {...c} />)}</div>

        {/* Center hub */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
          <div style={{
            background: "rgba(136,71,232,0.12)",
            borderRadius: "24px",
            width: "176px",
            height: "176px",
            boxShadow: "0 0 60px rgba(136,71,232,0.35), 0 0 100px rgba(43,92,230,0.15)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            border: "1px solid rgba(136,71,232,0.3)",
          }}>
            <img
              src="/images/apexmind-logo-final.png"
              alt="ApexMind"
              width={58}
              height={58}
              style={{ objectFit: "contain" }}
            />
            <p style={{
              fontWeight: 800,
              fontSize: "15px",
              margin: 0,
              background: "linear-gradient(135deg,#6B8FFF,#c084fc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              ApexMind
            </p>
          </div>
        </div>

        <div>{rightCards.map((c) => <CategoryCard key={c.title} {...c} />)}</div>
      </div>

      {/* Mobile: stacked cards */}
      <div className="md:hidden" style={{ maxWidth: "480px", margin: "0 auto" }}>
        {[...leftCards, ...rightCards].map((c) => <CategoryCard key={c.title} {...c} />)}
      </div>

      {/* Bottom CTA */}
      <div style={{ textAlign: "center", marginTop: "52px" }}>
        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.4)", marginBottom: "16px" }}>
          Não viu seu segmento? Fale com a gente.
        </p>
        <a
          href="https://wa.me/18625761010"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "linear-gradient(135deg,#2B5CE6,#8847E8)",
            borderRadius: "8px",
            padding: "12px 28px",
            color: "#fff",
            fontSize: "14px",
            fontWeight: 700,
            textDecoration: "none",
            boxShadow: "0 6px 20px rgba(136,71,232,0.3)",
          }}
        >
          Falar pelo WhatsApp
        </a>
      </div>
    </section>
  );
}
