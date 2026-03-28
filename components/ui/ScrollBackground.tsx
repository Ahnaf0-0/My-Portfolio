"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";

// Dynamically import GlassBlobs to avoid SSR issues with Three.js
const GlassBlobs = dynamic(() => import("./3d/GlassBlobs"), { ssr: false });

export default function ScrollBackground() {
  const { scrollY } = useScroll();
  
  // Parallax mappings for 3D objects
  // Slightly moving the entire canvas container provides a nice deep parallax effect
  const yParallax = useTransform(scrollY, [0, 5000], [0, -400]);
  const opacity = useTransform(scrollY, [0, 500], [0.6, 1]);
  
  return (
    <div className="fixed inset-0 z-[-1] bg-[#020617] pointer-events-none overflow-hidden">
      
      {/* ── 3D Glass Blobs Layer ── */}
      <motion.div 
        style={{ y: yParallax, opacity }} 
        className="absolute inset-0 h-[150vh] transition-opacity duration-1000"
      >
        <GlassBlobs />
      </motion.div>
      
      {/* ── Subtle Technical Texture ── */}
      <motion.div 
        className="absolute inset-[-100%] opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle at center, #94a3b8 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          y: useTransform(scrollY, [0, 5000], [0, -100]),
        }}
        animate={{ backgroundPosition: ["0px 0px", "60px 60px"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Premium Vignette & Atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#020617_90%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617] opacity-80" />
      
      {/* Grain / Noise Overlay for "Professional" Texture */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay">
        <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>
    </div>
  );
}
