"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GlassCard from "@/components/ui/GlassCard";
import Icon from "@/components/ui/Icon";
import { contactLinks, references } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left */}
          <div>
            <ScrollReveal>
              <p className="text-xs uppercase tracking-[0.3em] text-dim mb-3">
                Connect
              </p>
              <h2 className="text-4xl md:text-5xl font-serif mb-6">
                Let&apos;s Build{" "}
                <span className="italic text-silver">Something.</span>
              </h2>
              <p className="text-silver2/50 font-light leading-relaxed mb-10 max-w-md">
                I&apos;m always open to discussing new projects, opportunities,
                and ideas. Reach out and let&apos;s create something remarkable
                together.
              </p>
            </ScrollReveal>

            {/* Contact Links */}
            <div className="space-y-3">
              {contactLinks.map((link, i) => (
                <ScrollReveal key={link.label} delay={0.1 + i * 0.07}>
                  <motion.a
                    href={link.href}
                    target={
                      link.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-center gap-4 p-4 bg-panel/65 backdrop-blur-xl border border-white/[0.07] rounded-2xl group"
                    whileHover={{ x: 8 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                  >
                    <motion.div
                      className="w-11 h-11 bg-lift flex items-center justify-center rounded-xl border border-white/[0.07] text-silver group-hover:text-white transition-colors shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 15,
                      }}
                    >
                      <Icon name={link.icon} size={20} strokeWidth={1.5} />
                    </motion.div>
                    <div>
                      <p className="text-xs text-dim uppercase tracking-wider">
                        {link.label}
                      </p>
                      <p className="text-sm text-silver group-hover:text-white transition-colors">
                        {link.value}
                      </p>
                    </div>
                  </motion.a>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-6">
            <ScrollReveal delay={0.2}>
              <GlassCard className="p-8" hover={false}>
                <h3 className="font-serif text-2xl text-white mb-4">
                  Let&apos;s Talk
                </h3>
                <p className="text-sm text-silver2/50 font-light leading-relaxed mb-6">
                  Whether you have a project in mind, a question about my work,
                  or just want to say hello — I&apos;d love to hear from you.
                </p>
                <a
                  href="mailto:ahnaf000hassan@gmail.com"
                  className="block w-full text-center px-7 py-3.5 bg-white text-black text-sm font-medium rounded-full hover:bg-silver transition-colors duration-200"
                >
                  Send a Message
                </a>

                {/* Divider */}
                <div className="border-t border-white/[0.07] my-6" />

                {/* References */}
                <h4 className="text-xs uppercase tracking-[0.2em] text-dim mb-4">
                  References
                </h4>
                <div className="space-y-4">
                  {references.map((ref) => (
                    <div key={ref.name}>
                      <p className="text-sm text-silver font-medium">
                        {ref.name}
                      </p>
                      <p className="text-xs text-dim">{ref.title}</p>
                      <p className="text-xs text-dim">{ref.institution}</p>
                      {ref.email && (
                        <p className="text-xs text-silver2/50 mt-1">
                          {ref.email}
                        </p>
                      )}
                      {ref.phone && (
                        <p className="text-xs text-silver2/50 mt-1">
                          {ref.phone}
                        </p>
                      )}
                    </div>
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
