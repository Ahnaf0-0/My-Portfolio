"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import GlassCard from "@/components/ui/GlassCard";
import Chip from "@/components/ui/Chip";
import {
  personalInfo,
  education,
  awards,
  languages,
  keyInfo,
} from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="container-main">
        {/* Header */}
        <ScrollReveal>
          <p className="text-xs uppercase tracking-[0.3em] text-dim mb-3">
            About
          </p>
          <h2 className="text-4xl md:text-5xl font-serif mb-16">
            Get to know <span className="italic text-silver">me</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left — Bio & Info */}
          <div className="space-y-8">
            <ScrollReveal delay={0.1}>
              <div className="space-y-4">
                {personalInfo.bio.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-silver2/70 font-light leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </ScrollReveal>

            {/* Key Info List */}
            <ScrollReveal delay={0.2}>
              <div className="space-y-0">
                {keyInfo.map((item) => (
                  <div
                    key={item.label}
                    className="flex justify-between py-3 border-b border-white/[0.07]"
                  >
                    <span className="text-sm text-dim">{item.label}</span>
                    <span className="text-sm text-silver">{item.value}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Awards */}
            <ScrollReveal delay={0.3}>
              <div className="flex flex-wrap gap-2 pt-2">
                {awards.map((award) => (
                  <Chip key={award} label={award} />
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right — Education & Languages */}
          <div className="space-y-6">
            {education.map((edu, i) => (
              <ScrollReveal key={edu.degree} delay={0.1 + i * 0.1}>
                <GlassCard className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-xs text-dim font-mono">
                      {edu.year}
                    </span>
                    <span className="text-xs px-2.5 py-1 bg-lift rounded-full text-silver border border-white/[0.07]">
                      GPA {edu.gpa}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg text-white mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-dim">{edu.institution}</p>
                </GlassCard>
              </ScrollReveal>
            ))}

            {/* Languages */}
            <ScrollReveal delay={0.35}>
              <GlassCard className="p-6" hover={false}>
                <h4 className="text-xs uppercase tracking-[0.2em] text-dim mb-4">
                  Languages
                </h4>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <Chip key={lang} label={lang} />
                  ))}
                </div>
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
