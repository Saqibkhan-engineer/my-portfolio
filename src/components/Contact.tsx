"use client";

import { useRef, useEffect, useState } from "react";
import { Mail, ArrowRight, Sparkles } from "lucide-react";

// Brand icons not available in this lucide-react version
function LinkedinIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}
function GithubIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}
function WhatsAppIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
    </svg>
  );
}

const contactLinks = [
  {
    id: "contact-email",
    icon: <Mail size={22} />,
    label: "Email",
    value: "saqib.khan.at.work@gmail.com",
    href: "mailto:saqib.khan.at.work@gmail.com",
    description: "Drop me a message anytime",
    color: "from-violet-500/20 to-purple-600/10",
    borderColor: "border-violet-500/20 hover:border-violet-500/50",
    iconColor: "text-accent-light",
    bgColor: "bg-accent/10",
  },
  {
    id: "contact-linkedin",
    icon: <LinkedinIcon size={22} />,
    label: "LinkedIn",
    value: "muhammadsaqibkhanengineer",
    href: "https://linkedin.com/in/muhammadsaqibkhanengineer",
    description: "Connect professionally",
    color: "from-blue-500/20 to-cyan-600/10",
    borderColor: "border-blue-500/20 hover:border-blue-500/50",
    iconColor: "text-blue-400",
    bgColor: "bg-blue-500/10",
  },
  {
    id: "contact-github",
    icon: <GithubIcon size={22} />,
    label: "GitHub",
    value: "Saqibkhan-engineer",
    href: "https://github.com/Saqibkhan-engineer",
    description: "Explore my code",
    color: "from-slate-500/20 to-gray-600/10",
    borderColor: "border-slate-500/20 hover:border-slate-500/50",
    iconColor: "text-slate-300",
    bgColor: "bg-slate-500/10",
  },
  {
    id: "contact-whatsapp",
    icon: <WhatsAppIcon size={22} />,
    label: "WhatsApp",
    value: "+92 335 9429571",
    href: "https://wa.me/923359429571",
    description: "Chat directly on WhatsApp",
    color: "from-green-500/20 to-emerald-600/10",
    borderColor: "border-green-500/20 hover:border-green-500/50",
    iconColor: "text-green-400",
    bgColor: "bg-green-500/10",
  },
];

function ContactCard({
  link,
  delay,
}: {
  link: (typeof contactLinks)[0];
  delay: number;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      ref={ref}
      href={link.href}
      id={link.id}
      target={link.href.startsWith("http") ? "_blank" : undefined}
      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={`glass rounded-2xl p-6 border ${link.borderColor} group
        transition-all duration-500 hover:-translate-y-2 hover:shadow-card-hover
        bg-gradient-to-br ${link.color}
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        flex items-center gap-5 no-underline
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Icon */}
      <div
        className={`w-12 h-12 rounded-xl ${link.bgColor} border border-white/10 flex items-center justify-center flex-shrink-0 ${link.iconColor} group-hover:scale-110 transition-transform duration-300`}
      >
        {link.icon}
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <p className="text-xs font-semibold text-text-dim tracking-widest uppercase mb-0.5">
          {link.label}
        </p>
        <p className="font-semibold text-text-primary text-sm truncate">
          {link.value}
        </p>
        <p className="text-xs text-text-muted mt-0.5">{link.description}</p>
      </div>

      {/* Arrow */}
      <ArrowRight
        size={18}
        className="text-text-dim group-hover:text-text-primary group-hover:translate-x-1 transition-all duration-200 flex-shrink-0"
      />
    </a>
  );
}

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
      aria-label="Contact section"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-surface/50 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-accent/4 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div
          className={`text-center mb-10 sm:mb-14 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="section-label">Get In Touch</p>
          <h2 id="contact-heading" className="section-title mb-3 sm:mb-4">
            Connect <span className="gradient-text">With Me</span>
          </h2>
          <p className="text-text-muted max-w-lg mx-auto text-sm sm:text-base">
            Whether you have a project in mind, a collaboration idea, or just want
            to say hello — my inbox is always open.
          </p>
        </div>

        {/* CTA Banner — responsive padding */}
        <div
          className={`relative glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12 text-center border border-accent/15 overflow-hidden max-w-3xl mx-auto
            transition-all duration-700
            ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
          style={{ transitionDelay: "200ms" }}
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/8 via-transparent to-accent-cyan/8 pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-accent/10 border border-accent/20 text-accent-light text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Sparkles size={13} />
              Open to opportunities
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-text-primary mb-2 sm:mb-3">
              Let&apos;s build something{" "}
              <span className="gradient-text">remarkable</span> together
            </h3>
            <p className="text-text-muted text-sm sm:text-base mb-6 sm:mb-8 max-w-md mx-auto">
              I&apos;m currently open to freelance projects, full-time roles, and
              interesting collaborations in data, AI, and software engineering.
            </p>
            <a
              href="mailto:saqib.khan.at.work@gmail.com"
              id="contact-main-cta"
              className="btn-primary text-sm sm:text-base py-2.5 sm:py-3 px-6 sm:px-8 group"
            >
              <Mail size={16} />
              Send Me an Email
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>
        </div>

        {/* Contact Links Grid — 1 col mobile, 2 col tablet, 4 col wide */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
          {contactLinks.map((link, i) => (
            <ContactCard key={link.id} link={link} delay={400 + i * 100} />
          ))}
        </div>
      </div>

      {/* ─── Footer ─────────────────────────────────────────────── */}
      <footer className="relative z-10 mt-12 sm:mt-20 pt-6 sm:pt-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center gap-4 md:flex-row md:justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-accent to-accent-cyan flex items-center justify-center text-white font-black text-xs">
              MS
            </span>
            <span className="text-text-muted text-sm font-medium">
              Muhammad Saqib
            </span>
          </div>

          {/* Copyright */}
          <p className="text-text-dim text-xs text-center order-last md:order-none">
            © {new Date().getFullYear()} Muhammad Saqib. Built with Next.js &
            Tailwind CSS.
          </p>

          {/* Social quick links */}
          <div className="flex items-center gap-3">
            {[
              { href: "mailto:saqib.khan.at.work@gmail.com", icon: <Mail size={16} />, label: "Email" },
              { href: "https://linkedin.com/in/muhammadsaqibkhanengineer", icon: <LinkedinIcon size={16} />, label: "LinkedIn" },
              { href: "https://github.com/Saqibkhan-engineer", icon: <GithubIcon size={16} />, label: "GitHub" },
              { href: "https://wa.me/923359429571", icon: <WhatsAppIcon size={16} />, label: "WhatsApp" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                id={`footer-${s.label.toLowerCase()}`}
                aria-label={s.label}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="w-8 h-8 rounded-lg glass border border-white/8 flex items-center justify-center text-text-dim hover:text-text-primary hover:border-accent/30 transition-all duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </section>
  );
}
