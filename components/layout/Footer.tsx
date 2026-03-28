import { personalInfo, contactLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07] py-12 bg-black">
      <div className="container-main">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="font-serif text-xl text-white">
            {personalInfo.firstName}
            <sup className="text-[10px] text-dim ml-0.5">
              {personalInfo.initials}
            </sup>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="text-sm text-dim hover:text-silver transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs text-dim">
            &copy; {new Date().getFullYear()} {personalInfo.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
