"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const springX = useSpring(0, { stiffness: 150, damping: 15 });
  const springY = useSpring(0, { stiffness: 150, damping: 15 });

  const onMove = useCallback(
    (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      springX.set(e.clientX);
      springY.set(e.clientY);
      if (!visible) setVisible(true);
    },
    [springX, springY, visible]
  );

  useEffect(() => {
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [onMove]);

  useEffect(() => {
    const onEnter = () => setHovered(true);
    const onLeave = () => setHovered(false);

    const interactives = document.querySelectorAll(
      "a, button, [data-hover]"
    );
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  // Reattach listeners when DOM changes  
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const onEnter = () => setHovered(true);
      const onLeave = () => setHovered(false);
      
      document.querySelectorAll("a, button, [data-hover]").forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Dot */}
      <div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: pos.x - (hovered ? 6 : 4),
          top: pos.y - (hovered ? 6 : 4),
          width: hovered ? 12 : 8,
          height: hovered ? 12 : 8,
          backgroundColor: "#f0f0f0",
          borderRadius: "50%",
          opacity: visible ? 1 : 0,
          transition: "width 0.2s, height 0.2s, opacity 0.3s",
        }}
      />

      {/* Ring */}
      <motion.div
        className="fixed pointer-events-none z-[9998] mix-blend-difference"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          width: hovered ? 56 : 32,
          height: hovered ? 56 : 32,
          border: `1.5px solid rgba(240,240,240,${hovered ? 0.6 : 0.4})`,
          borderRadius: "50%",
          opacity: visible ? 1 : 0,
          transition: "width 0.3s, height 0.3s, opacity 0.3s, border 0.3s",
        }}
      />
    </>
  );
}
