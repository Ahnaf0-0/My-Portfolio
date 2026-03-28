"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface MetricBarProps {
  label: string;
  value: number;
}

export default function MetricBar({ label, value }: MetricBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm text-silver2">{label}</span>
        <span className="text-sm text-dim font-mono">{value}%</span>
      </div>
      <div className="h-1.5 bg-lift rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-dim to-silver rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${value}%` } : { width: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.2,
          }}
        />
      </div>
    </div>
  );
}
