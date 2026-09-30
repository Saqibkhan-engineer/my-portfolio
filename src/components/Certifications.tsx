"use client";

import { useRef, useEffect, useState } from "react";
import {
  Award,
  ExternalLink,
  ChevronRight,
  ChevronUp,
  BarChart2,
  TrendingUp,
  Brain,
  Zap,
  Code2,
} from "lucide-react";

interface Cert {
  id: string;
  title: string;
  certType: string;
  issuer: string;
  date: string;
  badgeIcon: React.ReactNode;
  badgeColor: string;
  color: string;
  glowColor: string;
  skills: string[];
  link: string;
}

const certifications: Cert[] = [
  {
    id: "google-advanced-data-analytics",
    title: "Google Advanced Data Analytics",
    certType: "Professional Certificate",
    issuer: "Google / Coursera",
    date: "2026",
    badgeIcon: <BarChart2 size={26} />,
    badgeColor: "#818cf8",
    color: "from-blue-500/20 via-indigo-500/10 to-violet-500/20",
    glowColor: "shadow-[0_8px_40px_rgba(99,102,241,0.25)]",
    skills: ["Python", "Machine Learning", "Tableau", "Statistics", "Regression"],
    link: "https://coursera.org/verify/professional-cert/HF511EU65RNQ",
  },
  {
    id: "google-business-intelligence",
    title: "Google Business Intelligence",
    certType: "Professional Certificate",
    issuer: "Google / Coursera",
    date: "2026",
    badgeIcon: <TrendingUp size={26} />,
    badgeColor: "#22d3ee",
    color: "from-cyan-500/20 via-teal-500/10 to-emerald-500/20",
    glowColor: "shadow-[0_8px_40px_rgba(6,182,212,0.25)]",
    skills: ["BigQuery", "Looker Studio", "Data Modeling", "ETL", "Dashboards"],
    link: "https://coursera.org/verify/professional-cert/PRE4Z6D1QUGN",
  },
  {
    id: "google-ai",
    title: "Google AI",
    certType: "Professional Certificate",
    issuer: "Google / Coursera",
    date: "2026",
    badgeIcon: <Brain size={26} />,
    badgeColor: "#c084fc",
    color: "from-violet-500/20 via-purple-500/10 to-pink-500/20",
    glowColor: "shadow-[0_8px_40px_rgba(139,92,246,0.25)]",
    skills: ["Generative AI", "Prompt Engineering", "LLMs", "AI Tools", "Google AI"],
    link: "https://coursera.org/verify/professional-cert/TEV5NGA28AE7",
  },
  {
    id: "google-ai-essentials",
    title: "Google AI Essentials",
    certType: "Specialization Certificate",
    issuer: "Google / Coursera",
    date: "2026",
    badgeIcon: <Zap size={26} />,
    badgeColor: "#fbbf24",
    color: "from-amber-500/20 via-orange-500/10 to-yellow-500/20",
    glowColor: "shadow-[0_8px_40px_rgba(245,158,11,0.25)]",
    skills: ["AI Fundamentals", "Machine Learning Basics", "AI Ethics", "Automation"],
    link: "https://coursera.org/verify/specialization/3GX2U2ERCST1",
  },
  {
    id: "intro-data-analysis-python",
    title: "Introduction to Data Analysis Using Python",
    certType: "Course Certificate",
    issuer: "Coursera",
    date: "2026",
    badgeIcon: <Code2 size={26} />,
    badgeColor: "#34d399",
    color: "from-green-500/20 via-emerald-500/10 to-teal-500/20",
    glowColor: "shadow-[0_8px_40px_rgba(16,185,129,0.25)]",
    skills: ["Python", "Pandas", "NumPy", "Data Visualization", "EDA"],
    link: "https://coursera.org/verify/FVVU0P0J43H4",
  },
];

function CertCard({ cert, delay }: { cert: Cert; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      id={`cert-card-${cert.id}`}
      className={`relative glass rounded-3xl overflow-hidden border border-white/8 group cursor-default
        transition-all duration-700 hover:-translate-y-2 hover:border-white/15
        ${cert.glowColor} hover:${cert.glowColor}
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Background gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-60 pointer-events-none`}
      />

      {/* Shimmer line top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative z-10 p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            {/* Badge Icon — Lucide icon inside styled square */}
            <div
              className="w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center shadow-card"
              style={{
                background: `${cert.badgeColor}18`,
                color: cert.badgeColor,
              }}
            >
              {cert.badgeIcon}
            </div>
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <Award size={14} className="text-accent-light" />
                <span className="text-xs font-semibold text-accent-light tracking-wide">
                  {cert.certType}
                </span>
              </div>
              <p className="text-text-dim text-xs font-medium">{cert.issuer}</p>
            </div>
          </div>
          <span className="text-xs text-text-dim bg-surface/60 px-2.5 py-1 rounded-full border border-white/8">
            {cert.date}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-text-primary leading-snug mb-5">
          {cert.title}{" "}
          <span className="gradient-text">{cert.certType}</span>
        </h3>

        {/* Divider */}
        <hr className="hr-gradient mb-5" />

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {cert.skills.map((skill) => (
            <span
              key={skill}
              className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-text-muted"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a
          href={cert.link}
          id={`cert-link-${cert.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-light hover:text-white transition-colors group"
        >
          View Certificate
          <ExternalLink
            size={14}
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
          />
        </a>
      </div>
    </div>
  );
}

export default function Certifications() {
  const sectionRef = useRef<HTMLElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [btnVisible, setBtnVisible] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const btnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sObs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setHeaderVisible(true); sObs.disconnect(); } },
      { threshold: 0.1 }
    );
    const bObs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setBtnVisible(true); bObs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (sectionRef.current) sObs.observe(sectionRef.current);
    if (btnRef.current) bObs.observe(btnRef.current);
    return () => { sObs.disconnect(); bObs.disconnect(); };
  }, []);

  const visibleCerts = showAll ? certifications : certifications.slice(0, 2);

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
      aria-label="Certifications section"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/3 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[200px] bg-accent-cyan/5 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div
          className={`text-center mb-10 sm:mb-14 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="section-label">Credentials</p>
          <h2 id="certs-heading" className="section-title mb-3 sm:mb-4">
            My <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-text-muted max-w-xl mx-auto text-sm sm:text-base">
            Holder of{" "}
            <span className="text-accent-light font-semibold">5+ Google Professional Certificates</span>
            {" "}— validated expertise across data analytics, business intelligence, and AI.
          </p>
        </div>

        {/* Cert Cards Grid — 1 col mobile, 2 col tablet+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {visibleCerts.map((cert, i) => (
            <CertCard key={cert.id} cert={cert} delay={i * 120} />
          ))}
        </div>

        {/* See All / Collapse Button */}
        <div
          ref={btnRef}
          className={`flex justify-center mt-12 transition-all duration-700 ${
            btnVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <button
            id="certs-see-all"
            onClick={() => setShowAll((prev) => !prev)}
            className="btn-secondary group gap-2"
          >
            {showAll ? (
              <>
                Show Less
                <ChevronUp
                  size={18}
                  className="group-hover:-translate-y-1 transition-transform"
                />
              </>
            ) : (
              <>
                See All Certifications
                <ChevronRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
