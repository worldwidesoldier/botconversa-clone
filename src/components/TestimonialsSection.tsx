"use client";

import { useState } from "react";

const cards = [
  { label: "Depoimento em breve" },
  { label: "Depoimento em breve" },
  { label: "Depoimento em breve" },
];

function VideoCard({ label }: { label: string }) {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, rgba(43,92,230,0.08) 0%, rgba(136,71,232,0.08) 100%)",
        border: "1px solid rgba(136,71,232,0.15)",
        borderRadius: "16px",
        aspectRatio: "9/16",
        maxHeight: "360px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "12px",
        cursor: "pointer",
      }}
    >
      <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "linear-gradient(135deg, #2B5CE6 0%, #8847E8 100%)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 16px rgba(136,71,232,0.4)" }}>
        <svg viewBox="0 0 24 24" fill="white" width="22" height="22"><path d="M8 5v14l11-7z" /></svg>
      </div>
      <p style={{ fontSize: "13px", color: "#6d6f74", margin: 0 }}>{label}</p>
    </div>
  );
}

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  return (
    <section id="depoimentos" style={{ background: "#f7faff", padding: "80px 32px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <div style={{ textAlign: "center" }}>
          <span style={{ display: "inline-block", background: "linear-gradient(135deg, rgba(43,92,230,0.1), rgba(136,71,232,0.1))", border: "1px solid rgba(136,71,232,0.2)", color: "#5b42d8", borderRadius: "20px", padding: "5px 16px", fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "16px" }}>
            Resultados Reais
          </span>
          <h2 style={{ fontSize: "clamp(28px,3.5vw,40px)", fontWeight: 800, color: "#18191c", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            O que nossos clientes dizem
          </h2>
          <p style={{ fontSize: "16px", color: "#6d6f74", maxWidth: "480px", margin: "12px auto 0", lineHeight: 1.6 }}>
            Veja como a ApexMind está transformando o atendimento de empresas como a sua.
          </p>
        </div>

        {/* Desktop: 3 cards lado a lado */}
        <div className="hidden md:grid" style={{ gridTemplateColumns: "repeat(3,1fr)", gap: "24px", marginTop: "48px" }}>
          {cards.map((c, i) => <VideoCard key={i} label={c.label} />)}
        </div>

        {/* Mobile: carousel 1 card + setas */}
        <div className="md:hidden" style={{ marginTop: "32px" }}>
          <div style={{ position: "relative", display: "flex", alignItems: "center", gap: "12px" }}>
            {/* Prev */}
            <button
              onClick={() => setCurrent(p => Math.max(0, p - 1))}
              disabled={current === 0}
              style={{ flexShrink: 0, width: "36px", height: "36px", borderRadius: "50%", border: "1px solid rgba(136,71,232,0.25)", background: current === 0 ? "rgba(0,0,0,0.03)" : "white", display: "flex", alignItems: "center", justifyContent: "center", cursor: current === 0 ? "default" : "pointer", opacity: current === 0 ? 0.35 : 1, boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#5b42d8" strokeWidth="2" strokeLinecap="round"><path d="M15 18l-6-6 6-6"/></svg>
            </button>

            {/* Card */}
            <div style={{ flex: 1 }}>
              <VideoCard label={cards[current].label} />
            </div>

            {/* Next */}
            <button
              onClick={() => setCurrent(p => Math.min(cards.length - 1, p + 1))}
              disabled={current === cards.length - 1}
              style={{ flexShrink: 0, width: "36px", height: "36px", borderRadius: "50%", border: "1px solid rgba(136,71,232,0.25)", background: current === cards.length - 1 ? "rgba(0,0,0,0.03)" : "white", display: "flex", alignItems: "center", justifyContent: "center", cursor: current === cards.length - 1 ? "default" : "pointer", opacity: current === cards.length - 1 ? 0.35 : 1, boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#5b42d8" strokeWidth="2" strokeLinecap="round"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>

          {/* Dots */}
          <div style={{ display: "flex", justifyContent: "center", gap: "6px", marginTop: "16px" }}>
            {cards.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} style={{ width: i === current ? "18px" : "6px", height: "6px", borderRadius: "3px", background: i === current ? "#5b42d8" : "#d1d5db", border: "none", padding: 0, cursor: "pointer", transition: "all 0.2s" }} />
            ))}
          </div>
        </div>

        <p style={{ textAlign: "center", fontSize: "13px", color: "#9ca3af", marginTop: "24px" }}>
          Em breve — vídeos reais de clientes
        </p>
      </div>
    </section>
  );
}
