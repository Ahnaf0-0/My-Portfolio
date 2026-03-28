"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import GlassCard from "@/components/ui/GlassCard";
import Chip from "@/components/ui/Chip";
import Icon from "@/components/ui/Icon";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="container-main">
        {/* Header */}
        <ScrollReveal>
          <p className="text-xs uppercase tracking-[0.3em] text-dim mb-3">
            Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-serif mb-16">
            Technical <span className="italic text-silver">Skills</span>
          </h2>
        </ScrollReveal>

        {/* 3×2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, i) => (
            <ScrollReveal key={skill.title} delay={i * 0.07}>
              <GlassCard className="p-6 h-full border-none shadow-none">
                <div className="w-10 h-10 bg-lift/30 flex items-center justify-center rounded-lg border border-white/[0.05] text-silver mb-5">
                  <Icon name={skill.icon} size={18} strokeWidth={1.5} />
                </div>
                <p className="text-xs uppercase tracking-[0.2em] text-dim mb-1">
                  {skill.category}
                </p>
                <h3 className="font-serif text-lg text-white mb-4">
                  {skill.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skill.skills.map((s) => (
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
