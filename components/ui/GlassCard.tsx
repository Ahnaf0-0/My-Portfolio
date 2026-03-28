"use client";

import { motion } from "framer-motion";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  hover = true,
}: GlassCardProps) {
  return (
    <motion.div
      className={`relative bg-panel/65 backdrop-blur-2xl border border-white/[0.07] rounded-2xl overflow-hidden glass-shine ${className}`}
      style={{ WebkitBackdropFilter: "blur(40px) saturate(150%)", backdropFilter: "blur(40px) saturate(150%)" }}
      whileHover={
        hover
          ? { y: -6, scale: 1.01 }
          : undefined
      }
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}
