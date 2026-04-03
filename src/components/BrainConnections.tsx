"use client";

import { motion, useReducedMotion } from "framer-motion";

// ── Desktop: viewBox 1440×900 ───────────────────────────────────────────────
const BRAIN_D = { x: 720, y: 178 };
const ANCHORS_D = [
  { x: 215,  y: 152 },
  { x: 1230, y: 135 },
  { x: 185,  y: 408 },
  { x: 1255, y: 424 },
  { x: 230,  y: 730 },
];

// ── Mobile: viewBox 400×900 (≈1:1 on 390 px phones) ────────────────────────
const BRAIN_M = { x: 200, y: 222 };
const ANCHORS_M = [
  { x: 100, y:  90 },   // top-left   left:2% top:10%
  { x: 300, y: 135 },   // top-right  right:2% top:15%
  { x: 100, y: 765 },   // btm-left   left:2% bottom:15%
  { x: 300, y: 810 },   // btm-right  right:2% bottom:10%
];

const LINE_COLOR = "rgba(107,143,255,0.28)";
const DOT_OUT    = "#8847E8";
const DOT_IN     = "#2B5CE6";

interface TravelDotProps {
  from: { x: number; y: number };
  to:   { x: number; y: number };
  duration: number;
  delay: number;
  color: string;
  reverse?: boolean;
  glowId: string;
}

function TravelDot({ from, to, duration, delay, color, reverse, glowId }: TravelDotProps) {
  const s = reverse ? to   : from;
  const e = reverse ? from : to;
  return (
    <motion.circle
      r={3}
      fill={color}
      filter={`url(#${glowId})`}
      initial={{ cx: s.x, cy: s.y, opacity: 0 }}
      animate={{ cx: [s.x, e.x], cy: [s.y, e.y], opacity: [0, 1, 1, 0] }}
      transition={{ duration, delay, repeat: Infinity, repeatDelay: duration * 0.55, ease: "easeInOut" }}
    />
  );
}

function BrainIcon() {
  return (
    <g>
      <path
        d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08A2.5 2.5 0 0 0 12 19.5a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 12 4.5"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m15.7 10.4-.9.4M13 11.75l1.8-1.3M11.2 10.4l.9.4M9 11.75l-1.8-1.3M8 13.5v-2M10 10.75V9M14 10.75V9M16 13.5v-2"
        fill="none"
        stroke="rgba(167,139,250,0.9)"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
}

interface BrainSvgProps {
  brain:        { x: number; y: number };
  anchors:      { x: number; y: number }[];
  viewBox:      string;
  shouldReduce: boolean;
  className?:   string;
  /** Unique prefix to avoid SVG ID collisions between desktop and mobile */
  p:            string;
  /** Hub circle radius. Desktop: 34 | Mobile: 20 */
  hubR:         number;
}

function BrainSvg({ brain, anchors, viewBox, shouldReduce, className, p, hubR }: BrainSvgProps) {
  const glowR   = Math.round(hubR * 1.65);   // outer glow halo
  const pulse1  = Math.round(hubR * 1.18);   // first pulse ring start
  const pulse1e = Math.round(hubR * 1.82);   // first pulse ring end
  const pulse2e = Math.round(hubR * 2.3);    // second pulse ring end
  // Brain icon: 24×24 viewbox, scale to fill hub nicely
  const iconSize = hubR * 1.3;
  const iconScale = iconSize / 24;

  return (
    <svg
      aria-hidden="true"
      viewBox={viewBox}
      preserveAspectRatio="xMidYMid meet"
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 2,
        overflow: "visible",
      }}
    >
      <defs>
        <filter id={`${p}-glow`} x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id={`${p}-hub-glow`} x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="9" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id={`${p}-hub-bg`} cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#2B5CE6" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#8847E8" stopOpacity="0.05" />
        </radialGradient>
        <linearGradient id={`${p}-brain-stroke`} x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6B8FFF" />
          <stop offset="1" stopColor="#c084fc" />
        </linearGradient>
      </defs>

      {/* Connection lines */}
      {anchors.map((b, i) => (
        <line
          key={i}
          x1={brain.x} y1={brain.y}
          x2={b.x}     y2={b.y}
          stroke={LINE_COLOR}
          strokeWidth={0.8}
          strokeDasharray="4 8"
        />
      ))}

      {/* Travelling dots: brain → bubble */}
      {!shouldReduce && anchors.map((b, i) => (
        <TravelDot key={`o${i}`} from={brain} to={b}
          duration={2.4 + i * 0.28} delay={i * 0.65}
          color={DOT_OUT} glowId={`${p}-glow`} />
      ))}
      {/* Travelling dots: bubble → brain */}
      {!shouldReduce && anchors.map((b, i) => (
        <TravelDot key={`r${i}`} from={brain} to={b}
          duration={2.1 + i * 0.22} delay={i * 0.65 + 1.5}
          color={DOT_IN} reverse glowId={`${p}-glow`} />
      ))}

      {/* Outer glow halo */}
      <circle cx={brain.x} cy={brain.y} r={glowR}
        fill={`url(#${p}-hub-bg)`}
        filter={`url(#${p}-hub-glow)`} />

      {/* Pulse rings */}
      {!shouldReduce && <>
        <motion.circle cx={brain.x} cy={brain.y} r={pulse1} fill="none"
          stroke="rgba(107,143,255,0.22)" strokeWidth={1.2}
          animate={{ r: [pulse1, pulse1e, pulse1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeOut" }} />
        <motion.circle cx={brain.x} cy={brain.y} r={pulse1} fill="none"
          stroke="rgba(136,71,232,0.14)" strokeWidth={0.8}
          animate={{ r: [pulse1, pulse2e, pulse1], opacity: [0.4, 0, 0.4] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeOut", delay: 1.1 }} />
      </>}

      {/* Hub circle */}
      <circle cx={brain.x} cy={brain.y} r={hubR}
        fill="rgba(13,17,23,0.92)"
        stroke="rgba(107,143,255,0.5)" strokeWidth={1.2} />

      {/* Brain icon — scaled to fill hub */}
      <g
        transform={`translate(${brain.x - iconSize / 2}, ${brain.y - iconSize / 2}) scale(${iconScale})`}
        stroke={`url(#${p}-brain-stroke)`}
      >
        <BrainIcon />
      </g>
    </svg>
  );
}

export function BrainConnections() {
  const shouldReduce = useReducedMotion();
  const sr = shouldReduce ?? false;

  return (
    <>
      {/* Desktop — 1440×900, hub r=34 */}
      <BrainSvg
        brain={BRAIN_D} anchors={ANCHORS_D}
        viewBox="0 0 1440 900"
        shouldReduce={sr}
        className="hidden md:block"
        p="bc-d" hubR={34}
      />

      {/* Mobile — 400×900 ≈1:1 on 390 px, hub r=20 (visually balanced) */}
      <BrainSvg
        brain={BRAIN_M} anchors={ANCHORS_M}
        viewBox="0 0 400 900"
        shouldReduce={sr}
        className="block md:hidden"
        p="bc-m" hubR={20}
      />
    </>
  );
}
