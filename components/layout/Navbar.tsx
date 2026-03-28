"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { personalInfo } from "@/lib/data";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id, index) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(index);
          }
        },
        { threshold: 0.35, rootMargin: "-80px 0px -40% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleClick = (href: string, index: number) => {
    setActive(index);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[1px] bg-silver/50 origin-left z-[60]"
        style={{ scaleX }}
      />

      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-black/[0.78] border-b border-white/[0.07]">
        <div className="container-main flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group"
            onClick={() => setActive(0)}
          >
            <div className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md overflow-hidden group-hover:border-white/[0.15] transition-colors shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-50" />
              <span className="font-serif text-[15px] leading-none text-white font-medium select-none tracking-[-0.05em] translate-y-[1px]">
                A<span className="italic text-silver">H</span>
              </span>
              {/* Subtle glass reflection shimmer */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.08] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
            </div>
          </a>

          {/* Nav Pills */}
          <div className="hidden md:flex items-center gap-1 bg-lift/50 rounded-full px-1.5 py-1.5 border border-white/[0.07]">
            {navLinks.map((link, i) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href, i)}
                className="relative px-4 py-1.5 text-sm transition-colors duration-200"
              >
                {active === i && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-panel rounded-full border border-white/[0.07]"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
                <span
                  className={`relative z-10 ${active === i ? "text-white" : "text-dim"
                    }`}
                >
                  {link.label}
                </span>
              </button>
            ))}
          </div>

          {/* CTA */}
          <a
            href="/Ahnaf_Hasan.pdf"
            download="Ahnaf_Hasan.pdf"
            className="hidden md:block px-5 py-2 text-sm bg-silver text-black rounded-full font-medium hover:bg-white transition-colors duration-200"
          >
            Download CV
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-silver"
            onClick={() => {
              const nav = document.getElementById("mobile-nav");
              nav?.classList.toggle("hidden");
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        <div
          id="mobile-nav"
          className="hidden md:hidden border-t border-white/[0.07] pb-4"
        >
          {navLinks.map((link, i) => (
            <button
              key={link.href}
              onClick={() => {
                handleClick(link.href, i);
                document
                  .getElementById("mobile-nav")
                  ?.classList.add("hidden");
              }}
              className={`block w-full text-left px-6 py-3 text-sm ${active === i ? "text-white" : "text-dim"
                }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </nav>
    </>
  );
}
