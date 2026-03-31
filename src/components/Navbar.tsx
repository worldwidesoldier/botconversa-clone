"use client";

import { useState, useEffect } from "react";
import { BotConversaLogo } from "@/components/icons";

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
          height: "48px",
          borderRadius: scrolled ? "16px" : "40px",
          backgroundColor: scrolled ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0)",
          backdropFilter: scrolled ? "blur(10px)" : "blur(0px)",
          WebkitBackdropFilter: scrolled ? "blur(10px)" : "blur(0px)",
          border: scrolled ? "1px solid rgba(255,255,255,0.6)" : "1px solid rgba(117,115,114,0)",
          padding: "8px 8px 8px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
          pointerEvents: "auto",
        }}
      >
        <BotConversaLogo />

        <div className="hidden md:flex items-center">
          {["Resources", "Prices", "Testimonials", "Frequently Asked Questions"].map((label) => (
            <a
              key={label}
              href="#"
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
          href="#"
          style={{
            display: "inline-flex",
            alignItems: "center",
            height: "32px",
            padding: "0 20px",
            fontSize: "14px",
            fontWeight: 500,
            color: "#212327",
            background: "transparent",
            border: "1px solid rgba(0,0,0,0.12)",
            borderRadius: "8px",
            textDecoration: "none",
            whiteSpace: "nowrap",
            transition: "background 0.15s",
            flexShrink: 0,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0.04)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
        >
          Log In
        </a>
      </div>
    </nav>
  );
}
