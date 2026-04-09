"use client";

import { useState, useEffect } from "react";
import { ApexMindLogo } from "@/components/icons";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
          width: scrolled ? "640px" : "860px",
          maxWidth: "calc(100vw - 32px)",
          height: "52px",
          borderRadius: scrolled ? "16px" : "40px",
          backgroundColor: "rgba(255,255,255,0.88)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          border: "1px solid rgba(0,0,0,0.07)",
          padding: "0 8px 0 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          overflow: "hidden",
          transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
          pointerEvents: "auto",
        }}
      >
        <ApexMindLogo />

        <div className="hidden md:flex items-center">
          {[
            { label: "Como Funciona", href: "#como-funciona" },
            { label: "Diferenciais", href: "#diferenciais" },
            { label: "Setores", href: "#setores" },
            { label: "FAQ", href: "#faq" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              style={{
                color: "#212327",
                fontSize: "14px",
                fontWeight: 500,
                padding: "4px 12px",
                textDecoration: "none",
                whiteSpace: "nowrap",
                transition: "opacity 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.6")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              {label}
            </a>
          ))}
        </div>

        <a
          href="https://wa.me/18625761010"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            height: "32px",
            padding: "0 20px",
            fontSize: "14px",
            fontWeight: 700,
            color: "#fff",
            background: "linear-gradient(135deg, #2B5CE6 0%, #8847E8 100%)",
            border: "none",
            borderRadius: "8px",
            textDecoration: "none",
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          Fale Conosco
        </a>
      </div>
    </nav>
  );
}
