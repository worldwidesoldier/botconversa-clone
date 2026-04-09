"use client";

import { useState, useEffect } from "react";
import { ApexMindLogo } from "@/components/icons";

const NAV_LINKS = [
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Setores", href: "#setores" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
      if (window.scrollY > 80) setMenuOpen(false);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on link click
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav
      style={{
        position: "fixed",
        top: "16px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 100,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          width: scrolled ? "640px" : "900px",
          maxWidth: "calc(100vw - 24px)",
          borderRadius: menuOpen ? "24px" : scrolled ? "16px" : "40px",
          backgroundColor: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          border: "1px solid rgba(0,0,0,0.07)",
          transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
          pointerEvents: "auto",
          overflow: "hidden",
        }}
      >
        {/* Main bar */}
        <div
          style={{
            padding: "10px 12px 10px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo — left */}
          <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
            <a href="#" onClick={handleLinkClick}>
              <ApexMindLogo />
            </a>
          </div>

          {/* Nav links — desktop only, truly centered */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                style={{
                  color: "#212327",
                  fontSize: "14px",
                  fontWeight: 500,
                  padding: "6px 14px",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                  transition: "opacity 0.15s",
                  fontFamily: "var(--font-nunito-sans), sans-serif",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.55")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Right side — CTA + hamburger */}
          <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "10px" }}>
            <a
              href="https://wa.me/18625761010"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                height: "36px",
                padding: "0 20px",
                fontSize: "14px",
                fontWeight: 700,
                color: "#fff",
                background: "linear-gradient(135deg, #2B5CE6 0%, #8847E8 100%)",
                borderRadius: "10px",
                textDecoration: "none",
                whiteSpace: "nowrap",
                flexShrink: 0,
                fontFamily: "var(--font-nunito-sans), sans-serif",
              }}
            >
              <span className="hidden sm:inline">Fale Conosco</span>
              <span className="sm:hidden">Contato</span>
            </a>

            {/* Hamburger — mobile only */}
            <button
              className="md:hidden"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Menu"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "36px",
                height: "36px",
                gap: "5px",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "4px",
                borderRadius: "8px",
              }}
            >
              <span style={{
                display: "block", width: "20px", height: "2px",
                background: "#212327", borderRadius: "2px",
                transition: "all 0.25s",
                transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
              }} />
              <span style={{
                display: "block", width: "20px", height: "2px",
                background: "#212327", borderRadius: "2px",
                transition: "all 0.25s",
                opacity: menuOpen ? 0 : 1,
              }} />
              <span style={{
                display: "block", width: "20px", height: "2px",
                background: "#212327", borderRadius: "2px",
                transition: "all 0.25s",
                transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
              }} />
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        <div
          className="md:hidden"
          style={{
            maxHeight: menuOpen ? "300px" : "0px",
            overflow: "hidden",
            transition: "max-height 0.35s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          <div style={{ padding: "4px 16px 16px", display: "flex", flexDirection: "column", gap: "2px" }}>
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={handleLinkClick}
                style={{
                  color: "#212327",
                  fontSize: "16px",
                  fontWeight: 600,
                  padding: "12px 8px",
                  textDecoration: "none",
                  borderRadius: "8px",
                  transition: "background 0.15s",
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  borderBottom: "1px solid rgba(0,0,0,0.05)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(43,92,230,0.06)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
