"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import GlassCard from "@/components/ui/GlassCard";
import StatBox from "@/components/ui/StatBox";
import Chip from "@/components/ui/Chip";
import { personalInfo, stats, topSkills } from "@/lib/data";

const stagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 pb-16"
    >
      <div className="container-main w-full">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-[1fr_390px] gap-12 items-center"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          {/* Left Column */}
          <div className="space-y-6">
            {/* Badge */}
            <motion.div variants={fadeUp}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-panel/65 backdrop-blur-xl border border-white/[0.07] rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-silver opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-silver" />
                </span>
                <span className="text-sm text-silver2">
                  {personalInfo.tagline}
                </span>
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-7xl font-serif leading-[1.1] tracking-tight"
            >
              {personalInfo.firstName}{" "}
              <span className="italic text-silver">
                {personalInfo.lastName}
              </span>
            </motion.h1>

            {/* Role */}
            <motion.p
              variants={fadeUp}
              className="text-xs uppercase tracking-[0.3em] text-dim font-medium"
            >
              {personalInfo.role}
            </motion.p>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="text-base text-silver2/50 font-light max-w-lg leading-relaxed"
            >
              {personalInfo.summary}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex gap-4 pt-2">
              <a
                href="#projects"
                className="px-7 py-3 bg-white text-black text-sm font-medium rounded-full hover:bg-silver transition-colors duration-200"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-7 py-3 border border-white/[0.15] text-white text-sm rounded-full hover:bg-white/[0.05] transition-colors duration-200"
              >
                Contact Me
              </a>
            </motion.div>
          </div>

          {/* Right Column — Card */}
          <motion.div variants={fadeUp}>
            <GlassCard className="p-6" hover={false}>
              {/* Avatar */}
              <div className="w-full aspect-square bg-[#020617]/50 rounded-xl mb-5 relative overflow-hidden border border-white/[0.07] shadow-lg">
                <Image
                  src="/mehedi.png"
                  alt={personalInfo.firstName}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                {stats.map((s) => (
                  <StatBox key={s.label} label={s.label} value={s.value} />
                ))}
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {topSkills.map((skill) => (
                  <Chip key={skill} label={skill} />
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
