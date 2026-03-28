"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import GlassCard from "@/components/ui/GlassCard";

export default function VideoIntro() {
  return (
    <section id="video-intro" className="py-24 relative z-10">
      <div className="container-main">
        {/* Header */}
        <ScrollReveal>
          <p className="text-xs uppercase tracking-[0.3em] text-dim mb-3">
            Introduction
          </p>
          <h2 className="text-4xl md:text-5xl font-serif mb-12">
            Meet <span className="italic text-silver">Ahnaf</span>
          </h2>
        </ScrollReveal>

        {/* Video Container */}
        <ScrollReveal delay={0.2}>
          <GlassCard className="p-2 md:p-4 hover:border-white/[0.15] transition-colors duration-500">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black/50 border border-white/[0.05]">
              {/* 
                // TODO: REPLACE THIS URL WITH YOUR UNLISTED YOUTUBE VIDEO EMBED URL
                // Example: src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=0&rel=0"
              */}
              <iframe
                src="https://www.youtube.com/embed/KSfpjQfa8tU" // <-- Add your unlisted link here
                title="Ahnaf Introduction Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>

              {/* Optional overlay screen effect for a more premium look before play */}
              <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_50px_rgba(0,0,0,0.5)]"></div>
            </div>
          </GlassCard>
        </ScrollReveal>
      </div>
    </section>
  );
}
