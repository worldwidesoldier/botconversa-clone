export function TestimonialsSection() {
  return (
    <section id="depoimentos" style={{ background: "#f7faff", padding: "100px 32px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <div style={{ padding: "0 24px", textAlign: "center" }}>
          <span style={{ display: "inline-block", background: "linear-gradient(135deg, rgba(43,92,230,0.1) 0%, rgba(136,71,232,0.1) 100%)", border: "1px solid rgba(136,71,232,0.2)", color: "#5b42d8", borderRadius: "20px", padding: "4px 14px", fontSize: "12px", fontWeight: 600, marginBottom: "16px" }}>
            Resultados Reais
          </span>
          <h2 style={{ fontSize: "40px", fontWeight: 800, color: "#18191c", textAlign: "center" }}>
            O que nossos clientes dizem
          </h2>
          <p style={{ fontSize: "16px", color: "#6d6f74", textAlign: "center", maxWidth: "500px", margin: "12px auto 0" }}>
            Veja como a ApexMind está transformando o atendimento de empresas como a sua.
          </p>
        </div>

        {/* Video placeholder */}
        <div style={{ marginTop: "48px", display: "grid", gap: "24px", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              style={{
                background: "linear-gradient(135deg, rgba(43,92,230,0.08) 0%, rgba(136,71,232,0.08) 100%)",
                border: "1px solid rgba(136,71,232,0.15)",
                borderRadius: "16px",
                aspectRatio: "9/16",
                maxHeight: "360px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
                cursor: "pointer",
              }}
            >
              {/* Play button */}
              <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "linear-gradient(135deg, #2B5CE6 0%, #8847E8 100%)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 16px rgba(136,71,232,0.4)" }}>
                <svg viewBox="0 0 24 24" fill="white" width="22" height="22">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p style={{ fontSize: "13px", color: "#6d6f74", margin: 0 }}>Depoimento em breve</p>
            </div>
          ))}
        </div>

        <p style={{ textAlign: "center", fontSize: "13px", color: "#9ca3af", marginTop: "24px" }}>
          Em breve — vídeos reais de clientes
        </p>
      </div>
    </section>
  );
}
