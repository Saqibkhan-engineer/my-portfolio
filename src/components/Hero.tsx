"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowRight, Mail, Sparkles, GraduationCap, Code2, BarChart2 } from "lucide-react";

const roles = [
  "Software Engineer",
  "Data Analyst",
  "Business Intelligence",
  "Machine Learning",
  "AI Automation",
];

function useTypewriter(words: string[], speed = 80, pause = 1800) {
  const [displayed, setDisplayed] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setWordIdx((w) => (w + 1) % words.length);
    }

    setDisplayed(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return displayed;
}

function Particle({ index }: { index: number }) {
  const style = {
    left: `${(index * 17.3 + 5) % 95}%`,
    top: `${(index * 23.7 + 10) % 85}%`,
    width: `${(index % 3) + 2}px`,
    height: `${(index % 3) + 2}px`,
    animationDelay: `${(index * 0.7) % 6}s`,
    animationDuration: `${4 + (index % 4)}s`,
  };
  return (
    <div
      className="absolute rounded-full bg-accent/20 animate-float"
      style={style}
    />
  );
}

export default function Hero() {
  const role = useTypewriter(roles);
  const heroRef = useRef<HTMLElement>(null);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden grid-bg"
      aria-label="Hero section"
    >
      {/* Background Orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* Floating Particles — fewer on small screens via CSS */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 18 }).map((_, i) => (
          <Particle key={i} index={i} />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-12 w-full">
        {/*
          Mobile:  column-reverse so image appears on top, text below
          lg+:     row with text left, image right
        */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-8">

          {/* ─── Left: Text Content ─────────────────────────────── */}
          <div className="flex-1 max-w-2xl w-full text-center lg:text-left">

            {/* Available badge */}
            <div
              id="hero-badge"
              className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full glass border border-accent/20 text-accent-light text-xs sm:text-sm font-medium mb-6 sm:mb-8 animate-fade-up"
            >
              <Sparkles size={13} className="text-accent-cyan" />
              Available for opportunities
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            </div>

            {/* Headline */}
            <h1
              id="hero-headline"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-text-primary leading-tight mb-3 sm:mb-4 animate-fade-up delay-100"
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text">Muhammad Saqib.</span>
            </h1>

            {/* Dynamic Sub-headline */}
            <div
              id="hero-subheadline"
              className="flex items-center justify-center lg:justify-start gap-2 mb-5 sm:mb-6 animate-fade-up delay-200"
            >
              <span className="text-base sm:text-xl md:text-2xl font-semibold text-text-muted min-h-[1.5rem]">
                {role}
              </span>
              <span className="w-0.5 h-5 sm:h-7 bg-accent-light animate-blink rounded-full" />
            </div>

            {/* Description */}
            <p
              id="hero-description"
              className="text-text-muted text-sm sm:text-base lg:text-lg leading-relaxed mb-8 sm:mb-10 max-w-xl mx-auto lg:mx-0 animate-fade-up delay-300"
            >
              Empowering businesses through data. I specialize in advanced Data Analytics,
              comprehensive BI reporting, Machine Learning models,
              and building intelligent AI agents for automation.
            </p>

            {/* CTA Buttons */}
            <div
              id="hero-ctas"
              className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 animate-fade-up delay-400"
            >
              <a href="#projects" id="cta-view-work" className="btn-primary group text-sm sm:text-base">
                View My Work
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a href="#contact" id="cta-contact" className="btn-secondary group text-sm sm:text-base">
                <Mail size={16} />
                Contact Me
              </a>
            </div>

            {/* Stats Row */}
            <div
              id="hero-stats"
              className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 mt-8 sm:mt-12 animate-fade-up delay-500"
            >
              {[
                { value: "2+", label: "Years Experience" },
                { value: "10+", label: "Projects Built" },
                { value: "5+", label: "Google Certifications" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl sm:text-3xl font-black gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-xs text-text-dim font-medium mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ─── Right: Profile Image ────────────────────────────── */}
          <div
            id="hero-profile"
            className="flex-shrink-0 animate-fade-up delay-300"
          >
            <div className="relative animate-float">
              {/* Outer glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent via-accent-cyan to-accent opacity-30 blur-2xl scale-110" />

              {/* Spinning gradient ring — responsive sizes */}
              <div className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent to-accent-cyan p-1 animate-spin-slow">
                  <div className="w-full h-full rounded-full bg-bg" />
                </div>

                {/* Profile image */}
                <div className="absolute inset-2 rounded-full overflow-hidden glass flex items-center justify-center">
                  <img
                    src="/profile.jpg"
                    alt="Muhammad Saqib"
                    className="w-full h-full object-cover object-center rounded-full"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = "none";
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = "flex";
                    }}
                  />
                  {/* Fallback */}
                  <div
                    className="w-full h-full rounded-full bg-gradient-to-br from-surface-3 via-accent/20 to-accent-cyan/10 flex-col items-center justify-center gap-3"
                    style={{ display: "none" }}
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-accent/40 to-accent-cyan/40 flex items-center justify-center">
                      <span className="text-2xl sm:text-4xl font-black gradient-text">MS</span>
                    </div>
                    <span className="text-xs text-text-dim font-medium tracking-widest uppercase">
                      Profile Photo
                    </span>
                  </div>
                </div>

                {/* ── Badge 1: Top-left — CGPA / Degree */}
                <div className="hidden sm:flex absolute -top-4 -left-5 lg:-top-5 lg:-left-8 items-center gap-2 glass rounded-xl px-3 py-2.5 border border-accent-cyan/30 shadow-[0_4px_20px_rgba(6,182,212,0.15)] backdrop-blur-md">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(6,182,212,0.15)" }}>
                    <GraduationCap size={15} className="text-accent-cyan" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-text-primary leading-tight">3.29 CGPA</div>
                    <div className="text-[10px] text-text-dim leading-tight">BS Software Eng.</div>
                  </div>
                </div>

                {/* ── Badge 2: Right-middle — Clean Code */}
                <div className="hidden sm:flex absolute -right-5 lg:-right-8 top-1/2 -translate-y-1/2 items-center gap-2 glass rounded-xl px-3 py-2.5 border border-accent/30 shadow-[0_4px_20px_rgba(124,58,237,0.15)] backdrop-blur-md">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(124,58,237,0.15)" }}>
                    <Code2 size={15} className="text-accent-light" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-text-primary leading-tight">Clean Code</div>
                    <div className="text-[10px] text-text-dim leading-tight">Scalable ETL</div>
                  </div>
                </div>

                {/* ── Badge 3: Bottom-right — Power BI & Python */}
                <div className="hidden sm:flex absolute -bottom-5 -right-3 lg:-bottom-6 lg:-right-5 items-center gap-2 glass rounded-xl px-3 py-2.5 border border-accent-cyan/30 shadow-[0_4px_20px_rgba(6,182,212,0.15)] backdrop-blur-md">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(6,182,212,0.15)" }}>
                    <BarChart2 size={15} className="text-accent-cyan" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-text-primary leading-tight">Power BI & Python</div>
                    <div className="text-[10px] text-text-dim leading-tight">Google Adv. Analytics</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent pointer-events-none" />
    </section>
  );
}
