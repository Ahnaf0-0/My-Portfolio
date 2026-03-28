"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import GlassCard from "@/components/ui/GlassCard";
import MetricBar from "@/components/ui/MetricBar";
import Chip from "@/components/ui/Chip";
import { projects } from "@/lib/data";

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24">
      <div className="container-main">
        {/* Header */}
        <ScrollReveal>
          <p className="text-xs uppercase tracking-[0.3em] text-dim mb-3">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-serif mb-16">
            Selected <span className="italic text-silver">Projects</span>
          </h2>
        </ScrollReveal>

        {/* Featured Project */}
        {featured && (
          <ScrollReveal className="mb-8">
            <GlassCard className="p-0 overflow-hidden" hover={false}>
              <div className="p-8 lg:p-10 flex flex-col justify-center relative">
                {/* Orb decoration for featured card */}
                <div
                  className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-[0.03] pointer-events-none"
                  style={{
                    background: "radial-gradient(circle, #00e5ff, transparent 70%)",
                  }}
                />
                
                <div className="inline-flex mb-4">
                  <span className="text-[10px] uppercase tracking-widest text-[#00e5ff] px-3 py-1 bg-[#00e5ff]/5 rounded-full border border-[#00e5ff]/20">
                    Featured
                  </span>
                </div>
                <p className="text-xs uppercase tracking-[0.2em] text-dim mb-2 relative z-10">
                  {featured.type}
                </p>
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-4 relative z-10">
                  {featured.title}
                </h3>
                <p className="text-sm text-silver2/60 font-light leading-relaxed mb-6 max-w-2xl relative z-10">
                  {featured.description}
                </p>
                <div className="flex flex-wrap gap-2 relative z-10">
                  {featured.stack.map((s) => (
                    <Chip key={s} label={s} />
                  ))}
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>
        )}

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {rest.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 0.07}>
              <GlassCard className="p-6 h-full relative">
                {/* Orb decoration */}
                <div
                  className="absolute -top-10 -right-10 w-24 h-24 rounded-full opacity-[0.04] orb-float"
                  style={{
                    background:
                      "radial-gradient(circle, #c8c8c8, transparent 70%)",
                    animationDelay: `${i * 0.5}s`,
                  }}
                />

                <p className="text-xs uppercase tracking-[0.2em] text-dim mb-2 relative">
                  {project.type}
                </p>
                <h3 className="font-serif text-xl text-white mb-3 relative">
                  {project.title}
                </h3>
                <p className="text-sm text-silver2/50 font-light leading-relaxed mb-5 relative">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 relative">
                  {project.stack.map((s) => (
                    <Chip key={s} label={s} />
                  ))}
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
