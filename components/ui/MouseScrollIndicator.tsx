"use client";

import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";

export default function MouseScrollIndicator() {
  const { scrollY } = useScroll();
  const [isScrolling, setIsScrolling] = useState(false);
  const [direction, setDirection] = useState<"up" | "down">("down");

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    // Instantly perfectly track direction using frame-by-frame delta
    const unsubscribeScroll = scrollY.on("change", (latest) => {
      const prev = scrollY.getPrevious() ?? 0;
      
      // Exact accuracy condition:
      if (latest > prev) {
        setDirection("down");
      } else if (latest < prev) {
        setDirection("up");
      }

      setIsScrolling(true);
      
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsScrolling(false);
      }, 400); // Snappier hide
    });

    return () => {
      unsubscribeScroll();
      clearTimeout(timeoutId);
    };
  }, [scrollY]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      animate={{ 
        opacity: isScrolling ? 1 : 0,
        scale: isScrolling ? 1 : 0.8,
        y: isScrolling ? 0 : 10
      }}
      transition={{ 
        duration: 0.3, 
        ease: "easeOut" 
      }}
      className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[60] flex items-center justify-center pointer-events-none hidden md:flex"
    >
      {/* Pill shape, not completely round */}
      <div className="w-[42px] h-[64px] rounded-full bg-black/50 backdrop-blur-xl border border-white/[0.08] flex items-center justify-center shadow-[0_4px_30px_rgba(0,0,0,0.5)] overflow-hidden relative">
        
        {/* UP Arrow */}
        <motion.div
          animate={{
            opacity: direction === "up" ? 1 : 0,
            y: direction === "up" ? 0 : 15,
          }}
          transition={{ duration: 0.25 }}
          className="absolute"
        >
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="text-white/80"
          >
            <line x1="12" y1="19" x2="12" y2="5"></line>
            <polyline points="5 12 12 5 19 12"></polyline>
          </svg>
        </motion.div>

        {/* DOWN Arrow */}
        <motion.div
          animate={{
            opacity: direction === "down" ? 1 : 0,
            y: direction === "down" ? 0 : -15,
          }}
          transition={{ duration: 0.25 }}
          className="absolute"
        >
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="text-white/80"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
        </motion.div>

      </div>
    </motion.div>
  );
}
