"use client";

import { ApexMindLogo, WhatsAppIcon, InstagramIcon } from "@/components/icons";

export function Footer() {
  return (
    <>
      {/* CTA banner */}
      <section style={{ background: "#f7faff", padding: "80px 32px 0" }}>
        <div style={{
          background: "linear-gradient(135deg, rgba(43,92,230,0.07) 0%, rgba(136,71,232,0.07) 100%)",
          border: "1px solid rgba(136,71,232,0.14)",
          borderRadius: "24px",
          padding: "72px 48px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          maxWidth: "1120px",
          margin: "0 auto",
        }}>
          {/* Decorative marks */}
          <span aria-hidden style={{ position: "absolute", left: "-24px", top: "50%", transform: "translateY(-50%)", opacity: 0.06, pointerEvents: "none" }}>
            <img src="/images/apexmind-logo-final.png" alt="" width={180} height={180} style={{ objectFit: "contain" }} />
          </span>
          <span aria-hidden style={{ position: "absolute", right: "-16px", top: "50%", transform: "translateY(-50%)", opacity: 0.08, color: "#25D366", pointerEvents: "none" }}>
            <WhatsAppIcon width={160} height={160} />
          </span>

          <h2 style={{ fontSize: "clamp(28px,4vw,46px)", fontWeight: 800, color: "#18191c", maxWidth: "580px", margin: "0 auto", position: "relative", zIndex: 1, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            Transforme conversas em resultados ainda hoje
          </h2>
          <p style={{ fontSize: "16px", color: "#6d6f74", maxWidth: "380px", margin: "12px auto 36px", position: "relative", zIndex: 1, lineHeight: 1.6 }}>
            Responda na hora, engaje seus clientes e converta mais — começando agora
          </p>
          <a
            href="https://wa.me/18625761010"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "linear-gradient(135deg,#2B5CE6,#8847E8)",
              borderRadius: "10px",
              padding: "0 32px",
              height: "52px",
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "0.06em",
              color: "#fff",
              textTransform: "uppercase",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              textDecoration: "none",
              position: "relative",
              zIndex: 1,
              boxShadow: "0 8px 24px rgba(136,71,232,0.3)",
            }}
          >
            <WhatsAppIcon width={17} height={17} />
            Falar com a ApexMind
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "#fff", borderTop: "1px solid rgba(0,0,0,0.06)", padding: "52px 80px 32px" }}>
        <div
          className="grid md:grid-cols-4 gap-10"
          style={{ maxWidth: "1120px", margin: "0 auto" }}
        >
          {/* Brand */}
          <div style={{ gridColumn: "span 1" }}>
            <ApexMindLogo />
            <p style={{ fontSize: "13px", color: "#6d6f74", maxWidth: "210px", marginTop: "12px", lineHeight: 1.6 }}>
              Assistentes de IA para WhatsApp — feitos sob medida para o seu negócio.
            </p>
            <div style={{ marginTop: "16px", display: "flex", gap: "14px", alignItems: "center" }}>
              <a href="https://www.instagram.com/apexmindcorp/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ color: "#6d6f74", display: "flex" }}><InstagramIcon width={18} height={18} /></a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.1em", color: "#9ca3af", fontWeight: 700, marginBottom: "16px" }}>Navegação</h3>
            <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { label: "Como Funciona", href: "#como-funciona" },
                { label: "Diferenciais",  href: "#diferenciais" },
                { label: "Setores",       href: "#setores" },
                { label: "FAQ",           href: "#faq" },
              ].map(l => (
                <a key={l.href} href={l.href} style={{ fontSize: "14px", color: "#374151", textDecoration: "none", transition: "color 0.15s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#8847E8")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#374151")}
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.1em", color: "#9ca3af", fontWeight: 700, marginBottom: "16px" }}>Contato</h3>
            <a
              href="https://wa.me/18625761010"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#25D366", textDecoration: "none", fontWeight: 600 }}
            >
              <WhatsAppIcon width={15} height={15} />
              WhatsApp
            </a>
          </div>

          {/* Tag */}
          <div>
            <h3 style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.1em", color: "#9ca3af", fontWeight: 700, marginBottom: "16px" }}>Cobertura</h3>
            <p style={{ fontSize: "13px", color: "#6d6f74", lineHeight: 1.6 }}>Atendemos empresas em todo o Brasil</p>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(0,0,0,0.06)", marginTop: "40px", paddingTop: "20px", maxWidth: "1120px", margin: "40px auto 0" }}>
          <p style={{ fontSize: "12px", color: "#9ca3af", textAlign: "center" }}>
            © 2025 ApexMind. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp button */}
      <a
        href="https://wa.me/18625761010"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 999,
          background: "#25D366",
          borderRadius: "50%",
          width: "56px",
          height: "56px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 20px rgba(37,211,102,0.45)",
          textDecoration: "none",
          color: "#fff",
        }}
      >
        <WhatsAppIcon width={28} height={28} />
      </a>
    </>
  );
}
