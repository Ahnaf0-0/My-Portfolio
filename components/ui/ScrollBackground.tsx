"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";

// Dynamically import GlassBlobs to avoid SSR issues with Three.js
const GlassBlobs = dynamic(() => import("./3d/GlassBlobs"), { ssr: false });

export default function ScrollBackground() {
  const { scrollY } = useScroll();
  
  // Parallax mappings for 3D objects
  // Slightly moving the entire canvas container provides a nice deep parallax effect
  const yParallax = useTransform(scrollY, [0, 5000], [0, -200]); // Reduced parallax distance
  const opacity = useTransform(scrollY, [0, 500], [0.6, 1]);
  
  return (
    <div className="fixed inset-0 z-[-1] bg-[#020617] pointer-events-none overflow-hidden">
      
      {/* ── 3D Glass Blobs Layer ── */}
      <motion.div 
        style={{ y: yParallax, opacity }} 
        className="absolute inset-0 h-[100vh] transition-opacity duration-1000 will-change-transform" // Reduced height from 150vh, added will-change
      >
        <GlassBlobs />
      </motion.div>
      
      {/* ── Subtle Technical Texture (Optimized) ── */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle at center, #94a3b8 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      
      {/* Premium Vignette & Atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#020617_90%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617] opacity-80" />
      
      {/* Lightweight CSS Noise (Instead of SVG filter) */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
    </div>
  );
}
