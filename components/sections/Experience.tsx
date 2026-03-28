"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GlassCard from "@/components/ui/GlassCard";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container-main">
        {/* Header */}
        <ScrollReveal>
          <p className="text-xs uppercase tracking-[0.3em] text-dim mb-3">
            Career
          </p>
          <h2 className="text-4xl md:text-5xl font-serif mb-16">
            Professional{" "}
            <span className="italic text-silver">Experience</span>
          </h2>
        </ScrollReveal>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experience.map((exp, i) => (
            <ScrollReveal key={exp.company} delay={i * 0.1}>
              <motion.div
                whileHover={{ x: 6 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              >
                <GlassCard className="p-0" hover={false}>
                  <div className="grid grid-cols-1 md:grid-cols-[190px_1fr]">
                    {/* Left — Date & Company */}
                    <div className="p-6 md:p-8 md:border-r border-b md:border-b-0 border-white/[0.07] flex flex-col justify-center">
                      <span className="text-xs text-dim font-mono">
                        {exp.period}
                      </span>
                      {exp.url ? (
                        <a
                          href={exp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group text-sm text-[#00e5ff] mt-1 font-medium hover:text-white transition-colors duration-300 inline-flex items-center gap-[6px] w-fit"
                        >
                          {exp.company}
                          <svg className="w-3 h-3 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      ) : (
                        <span className="text-sm text-silver mt-1 font-medium">
                          {exp.company}
                        </span>
                      )}
                      <span className="text-xs text-dim mt-0.5">
                        {exp.location}
                      </span>
                    </div>

                    {/* Right — Role & Points */}
                    <div className="p-6 md:p-8">
                      <div className="inline-flex mb-4">
                        <span className="text-xs px-3 py-1 bg-lift rounded-full text-silver2 border border-white/[0.07]">
                          {exp.role}
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {exp.points.map((point, j) => (
                          <li
                            key={j}
                            className="text-sm text-silver2/60 font-light leading-relaxed flex"
                          >
                            <span className="text-dim mr-3 flex-shrink-0">
                              —
                            </span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
