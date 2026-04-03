"use client";

import { motion, useReducedMotion } from "framer-motion";

interface BubbleData {
  text: string;
  time: string;
  avatar: string;
  sent?: boolean;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  delay: number;
  floatDuration: number;
  avatarSide?: "left" | "right";
}

const desktopBubbles: BubbleData[] = [
  {
    text: "Qual o horário de funcionamento? 🕐",
    time: "09:12",
    avatar: "/images/testimonial-2.jpg",
    top: "14%",
    left: "3%",
    delay: 0,
    floatDuration: 9,
    avatarSide: "left",
  },
  {
    text: "Vocês atendem aos sábados?",
    time: "10:47",
    avatar: "/images/testimonial-3.png",
    top: "12%",
    right: "4%",
    delay: 0.4,
    floatDuration: 8.5,
    avatarSide: "right",
  },
  {
    text: "Quero agendar um atendimento 📅",
    time: "11:15",
    avatar: "/images/testimonial-7.png",
    sent: true,
    top: "44%",
    left: "1%",
    delay: 0.7,
    floatDuration: 10,
    avatarSide: "left",
  },
  {
    text: "Quanto custa o serviço?",
    time: "14:22",
    avatar: "/images/testimonial-8.jpg",
    top: "46%",
    right: "2%",
    delay: 1.0,
    floatDuration: 9,
    avatarSide: "right",
  },
  {
    text: "Onde fica a unidade mais próxima? 📍",
    time: "15:45",
    avatar: "/images/testimonial-5.png",
    bottom: "10%",
    left: "5%",
    delay: 1.3,
    floatDuration: 10,
    avatarSide: "left",
  },
];

const mobileBubbles: BubbleData[] = [
  {
    text: "Vocês atendem aos sábados?",
    time: "09:12",
    avatar: "/images/testimonial-2.jpg",
    top: "10%",
    left: "2%",
    delay: 0,
    floatDuration: 10,
    avatarSide: "left",
  },
  {
    text: "Qual a localização? 📍",
    time: "10:20",
    avatar: "/images/testimonial-8.jpg",
    top: "15%",
    right: "2%",
    delay: 0.2,
    floatDuration: 11,
    avatarSide: "right",
  },
  {
    text: "Vocês estão abertos agora?",
    time: "11:15",
    avatar: "/images/testimonial-5.png",
    bottom: "15%",
    left: "2%",
    delay: 0.5,
    floatDuration: 10,
    avatarSide: "left",
  },
  {
    text: "Qual o valor do serviço?",
    time: "15:45",
    avatar: "/images/testimonial-7.png",
    bottom: "10%",
    right: "2%",
    delay: 0.7,
    floatDuration: 11,
    avatarSide: "right",
  },
];

function WhatsAppBubble({ bubble, small }: { bubble: BubbleData; small?: boolean }) {
  const isRight = bubble.avatarSide === "right";
  const isSent = bubble.sent;

  const avatarSize = small ? 34 : 44;
  const fontSize = small ? "12.5px" : "14px";
  const timeFontSize = small ? "9px" : "11px";
  const paddingX = small ? "10px" : "12px";
  const paddingY = small ? "6px" : "7px";
  const bgColor = isSent ? "#D9FDD3" : "#ffffff";

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        gap: "8px",
        flexDirection: isRight ? "row-reverse" : "row",
      }}
    >
      {/* Avatar */}
      <img
        src={bubble.avatar}
        alt=""
        width={avatarSize}
        height={avatarSize}
        style={{
          width: avatarSize,
          height: avatarSize,
          borderRadius: "50%",
          objectFit: "cover",
          flexShrink: 0,
          boxShadow: "0 1px 4px rgba(0,0,0,0.15)",
        }}
        loading="lazy"
      />

      {/* Bubble */}
      <div
        style={{
          background: bgColor,
          borderRadius: "12px",
          padding: `${paddingY} ${paddingX}`,
          boxShadow: "0 1px 2px rgba(11,20,26,0.12), 0 2px 8px rgba(0,0,0,0.06)",
          display: "flex",
          alignItems: "baseline",
          gap: "6px",
          whiteSpace: "nowrap",
        }}
      >
        <span
          style={{
            fontSize,
            color: "#111B21",
            lineHeight: 1.35,
            fontWeight: 400,
          }}
        >
          {bubble.text}
        </span>
        <span
          style={{
            fontSize: timeFontSize,
            color: "#667781",
            lineHeight: 1,
            flexShrink: 0,
          }}
        >
          {bubble.time}
        </span>
        {isSent && (
          <svg
            style={{ width: "16px", height: "11px", flexShrink: 0, color: "#53BDEB", fill: "currentColor" }}
            viewBox="0 0 16 11"
          >
            <path d="M11.071.653a.457.457 0 0 0-.304-.102.493.493 0 0 0-.381.178l-6.19 7.636-2.011-2.095a.463.463 0 0 0-.336-.153.457.457 0 0 0-.344.158.43.43 0 0 0-.117.34c.003.12.048.229.117.316l2.396 2.498a.47.47 0 0 0 .349.161.467.467 0 0 0 .358-.165l6.571-8.102a.478.478 0 0 0-.108-.67z" />
            <path d="M14.071.653a.457.457 0 0 0-.304-.102.493.493 0 0 0-.381.178l-6.19 7.636-1.2-1.25-.313.39 1.467 1.529a.47.47 0 0 0 .349.161.467.467 0 0 0 .358-.165l6.571-8.102a.478.478 0 0 0-.108-.67z" opacity=".75" />
          </svg>
        )}
      </div>
    </div>
  );
}

export function WhatsAppBubbles() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      {/* Desktop bubbles */}
      {desktopBubbles.map((bubble, i) => (
        <div
          key={i}
          className="pointer-events-none absolute z-[3] hidden md:block"
          style={{
            top: bubble.top,
            left: bubble.left,
            right: bubble.right,
            bottom: bubble.bottom,
            opacity: 0.88,
          }}
        >
          {shouldReduceMotion ? (
            <WhatsAppBubble bubble={bubble} />
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.92 }}
              animate={{
                opacity: 1,
                y: [0, -5, -3, 0, 3, 5, 2, 0],
                x: [0, 0.5, 1, 0.5, 0, -0.5, -1, -0.5, 0],
                scale: 1,
              }}
              transition={{
                opacity: { duration: 0.5, delay: bubble.delay },
                scale: { duration: 0.5, delay: bubble.delay },
                y: {
                  duration: bubble.floatDuration,
                  repeat: Infinity,
                  ease: "linear",
                  delay: bubble.delay + 0.5,
                },
                x: {
                  duration: bubble.floatDuration,
                  repeat: Infinity,
                  ease: "linear",
                  delay: bubble.delay + 0.5,
                },
              }}
              style={{ willChange: "transform" }}
            >
              <WhatsAppBubble bubble={bubble} />
            </motion.div>
          )}
        </div>
      ))}

      {/* Mobile bubbles — animated */}
      {mobileBubbles.map((bubble, i) => (
        <div
          key={`mobile-${i}`}
          className="pointer-events-none absolute z-[4] md:hidden"
          style={{
            top: bubble.top,
            left: bubble.left,
            right: bubble.right,
            bottom: bubble.bottom,
            opacity: 0.88,
          }}
        >
          {shouldReduceMotion ? (
            <WhatsAppBubble bubble={bubble} small />
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.92 }}
              animate={{
                opacity: 1,
                y: [0, -4, -2, 0, 2, 4, 1, 0],
                x: [0, 0.4, 0.8, 0.4, 0, -0.4, -0.8, -0.4, 0],
                scale: 1,
              }}
              transition={{
                opacity: { duration: 0.4, delay: bubble.delay },
                scale: { duration: 0.4, delay: bubble.delay },
                y: {
                  duration: bubble.floatDuration,
                  repeat: Infinity,
                  ease: "linear",
                  delay: bubble.delay + 0.4,
                },
                x: {
                  duration: bubble.floatDuration,
                  repeat: Infinity,
                  ease: "linear",
                  delay: bubble.delay + 0.4,
                },
              }}
              style={{ willChange: "transform" }}
            >
              <WhatsAppBubble bubble={bubble} small />
            </motion.div>
          )}
        </div>
      ))}
    </>
  );
}
