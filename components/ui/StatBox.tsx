"use client";

import { motion } from "framer-motion";

interface StatBoxProps {
  label: string;
  value: string;
}

export default function StatBox({ label, value }: StatBoxProps) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center p-4 bg-lift/50 rounded-xl border border-white/[0.07]"
      whileHover={{ y: -4, scale: 1.04 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <span className="text-2xl font-serif text-white font-normal">
        {value}
      </span>
      <span className="text-xs text-dim uppercase tracking-widest mt-1">
        {label}
      </span>
    </motion.div>
  );
}
