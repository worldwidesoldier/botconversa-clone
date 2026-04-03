"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  pulse: number;
}

interface Packet {
  fromIdx: number;
  toIdx: number;
  t: number;
  speed: number;
}

export function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    if (shouldReduce) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isMobile = () => window.innerWidth < 768;
    let animId: number;
    let lastTime = 0;
    const FPS = isMobile() ? 24 : 50;
    const INTERVAL = 1000 / FPS;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const makeNodes = (): Node[] => {
      const count = isMobile() ? 18 : 38;
      return Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        pulse: Math.random() * Math.PI * 2,
      }));
    };

    const makePackets = (nodes: Node[]): Packet[] => {
      const count = isMobile() ? 4 : 9;
      return Array.from({ length: count }, () => ({
        fromIdx: Math.floor(Math.random() * nodes.length),
        toIdx: Math.floor(Math.random() * nodes.length),
        t: Math.random(),
        speed: 0.003 + Math.random() * 0.003,
      }));
    };

    let nodes = makeNodes();
    let packets = makePackets(nodes);
    const CONNECT_DIST = isMobile() ? 130 : 180;

    const draw = (now: number) => {
      animId = requestAnimationFrame(draw);
      const elapsed = now - lastTime;
      if (elapsed < INTERVAL) return;
      lastTime = now - (elapsed % INTERVAL);

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const time = now * 0.001;

      // Move nodes
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
        n.pulse += 0.02;
      });

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECT_DIST) {
            const alpha = (1 - dist / CONNECT_DIST) * 0.18;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(91, 66, 216, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach((n) => {
        const r = 1.8 + Math.sin(time * 2 + n.pulse) * 0.6;
        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(107, 143, 255, 0.45)";
        ctx.fill();
      });

      // Draw data packets
      packets.forEach((p) => {
        p.t += p.speed;
        if (p.t >= 1) {
          p.fromIdx = p.toIdx;
          p.toIdx = Math.floor(Math.random() * nodes.length);
          p.t = 0;
        }
        const from = nodes[p.fromIdx];
        const to = nodes[p.toIdx];
        const px = from.x + (to.x - from.x) * p.t;
        const py = from.y + (to.y - from.y) * p.t;
        ctx.beginPath();
        ctx.arc(px, py, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(136, 71, 232, 0.7)";
        ctx.fill();
      });
    };

    animId = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, [shouldReduce]);

  if (shouldReduce) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        opacity: 0.5,
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
