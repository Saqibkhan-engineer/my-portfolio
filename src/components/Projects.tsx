"use client";

import { useRef, useEffect, useState } from "react";
import {
  ArrowRight,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  GraduationCap,
  LineChart,
  Sparkles,
  Activity,
} from "lucide-react";

// Inline SVG brand icons
function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}

interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  tag: string;
  tagColor: string;
  description: string;
  highlights: string[];
  stack: string[];
  color: string;
  accentColor: string;
  icon: React.ReactNode;
  iconColor: string;
  github: string | null;
  demo: string | null;
}

const projects: Project[] = [
  {
    id: "fyp-management",
    number: "01",
    title: "FYP Management System",
    subtitle: "Academic Management Portal",
    tag: "Web + NLP",
    tagColor: "#a78bfa",
    description:
      "A comprehensive academic management portal designed to streamline Final Year Project workflows. Features intelligent text matching and recommendation using NLP embeddings and cosine similarity to connect students with suitable supervisors and topics.",
    highlights: [
      "NLP Embeddings for intelligent text analysis",
      "Cosine Similarity for smart matching engine",
      "Role-based access control (Admin / Supervisor / Student)",
      "Real-time project tracking & milestone management",
    ],
    stack: ["React", "Vite", "Python", "FastAPI", "PostgreSQL", "Scikit-learn"],
    color: "from-violet-600/15 via-purple-700/8 to-indigo-800/10",
    accentColor: "#a78bfa",
    icon: <GraduationCap size={26} />,
    iconColor: "#a78bfa",
    github: "https://github.com/Saqibkhan-engineer/Final-year-project-management-system-frontend-",
    demo: null,
  },
  {
    id: "google-fiber-analytics",
    number: "02",
    title: "Google Fiber Data Deep Dive",
    subtitle: "End-to-End BI Solution",
    tag: "Business Intelligence",
    tagColor: "#67e8f9",
    description:
      "An enterprise-grade Business Intelligence solution built for telecom analytics. Implements complex ETL pipelines from PostgreSQL into a star-schema data warehouse, with advanced DAX modeling for executive-level insights.",
    highlights: [
      "PostgreSQL ETL pipeline with star-schema DW",
      "Advanced DAX: MoM growth, Pareto analysis",
      "What-If parameters for scenario modeling",
      "Interactive Power BI dashboard with drill-through",
    ],
    stack: ["Power BI", "DAX", "PostgreSQL", "Google BigQuery", "Python", "SQL"],
    color: "from-cyan-600/15 via-teal-700/8 to-blue-800/10",
    accentColor: "#67e8f9",
    icon: <LineChart size={26} />,
    iconColor: "#67e8f9",
    github: "https://github.com/Saqibkhan-engineer/Google-fiber-data-deep-dive",
    demo: null,
  },
  {
    id: "ethereal-luxury",
    number: "03",
    title: "Ethereal – Luxury Curated Objects",
    subtitle: "Premium E-Commerce Platform",
    tag: "Web + AI assisted coding",
    tagColor: "#f9a8d4",
    description:
      "A premium e-commerce platform for luxury objects. Crafted with an exquisite aesthetic, delivering a high-end shopping experience with AI-assisted development for rapid, polished feature delivery.",
    highlights: [
      "Premium luxury e-commerce UI & UX",
      "AI-assisted rapid development workflow",
      "Curated product catalog & filtering",
      "Seamless checkout & payment integration",
    ],
    stack: ["Next.js", "React", "Tailwind CSS", "TypeScript", "AI Tools"],
    color: "from-pink-600/15 via-rose-700/8 to-fuchsia-800/10",
    accentColor: "#f9a8d4",
    icon: <Sparkles size={26} />,
    iconColor: "#f9a8d4",
    github: null,
    demo: "https://etherealbeauty.me",
  },
  {
    id: "intern-performance",
    number: "04",
    title: "Intern Performance Predictive Analysis",
    subtitle: "Machine Learning Model",
    tag: "ML",
    tagColor: "#6ee7b7",
    description:
      "An XGBoost machine learning model to predict intern performance based on behavioural and academic features. Deployed on Hugging Face Spaces for interactive real-time prediction via a Gradio interface.",
    highlights: [
      "XGBoost classifier for performance prediction",
      "Feature engineering from academic & behavioural data",
      "Deployed on Hugging Face Spaces with Gradio UI",
      "Model evaluation: accuracy, precision, recall, F1",
    ],
    stack: ["Python", "XGBoost", "Scikit-learn", "Pandas", "Gradio", "Hugging Face"],
    color: "from-emerald-600/15 via-green-700/8 to-teal-800/10",
    accentColor: "#6ee7b7",
    icon: <Activity size={26} />,
    iconColor: "#6ee7b7",
    github: null,
    demo: "https://huggingface.co/spaces/saqibkhanathuggingface/intern-performance",
  },
];

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

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
      id={`project-card-${project.id}`}
      className={`relative glass rounded-3xl overflow-hidden border border-white/8 group
        transition-all duration-700 cursor-default
        ${hovered ? "border-white/20 -translate-y-2 shadow-[0_16px_60px_rgba(0,0,0,0.5)]" : ""}
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
      `}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} transition-opacity duration-500`} />

      {/* Top shimmer */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5 transition-opacity duration-300"
        style={{
          background: `linear-gradient(90deg, transparent, ${project.accentColor}80, transparent)`,
          opacity: hovered ? 1 : 0.3,
        }}
      />

      <div className="relative z-10 p-8">
        {/* Top Row: Icon + Number + Tag + Action Buttons */}
        <div className="flex items-start justify-between mb-5">
          <div className="flex items-center gap-4">
            {/* Icon */}
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center border border-white/10 shadow-card transition-transform duration-300 group-hover:scale-110 flex-shrink-0"
              style={{
                background: `${project.iconColor}15`,
                color: project.iconColor,
              }}
            >
              {project.icon}
            </div>
            {/* Number */}
            <span
              className="text-5xl font-black opacity-15 leading-none"
              style={{ color: project.accentColor }}
            >
              {project.number}
            </span>
          </div>

          {/* Action Buttons: GitHub (always if exists) + Live Link (if exists) */}
          <div className="flex gap-2 flex-shrink-0">
            {project.github && (
              <a
                href={project.github}
                id={`project-github-${project.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl glass border border-white/10 flex items-center justify-center text-text-muted hover:text-text-primary hover:border-white/25 transition-all duration-200"
                title="View Source on GitHub"
              >
                <GithubIcon size={16} />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                id={`project-demo-${project.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl glass border border-white/10 flex items-center justify-center text-text-muted hover:text-text-primary hover:border-white/25 transition-all duration-200"
                title="View Live Project"
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>

        {/* Category Tag pill */}
        <div className="mb-3">
          <span
            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border"
            style={{
              color: project.accentColor,
              borderColor: `${project.accentColor}40`,
              background: `${project.accentColor}12`,
            }}
          >
            {project.tag}
          </span>
        </div>

        {/* Title & Subtitle */}
        <div className="mb-4">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-1"
            style={{ color: project.accentColor }}
          >
            {project.subtitle}
          </p>
          <h3 className="text-xl md:text-2xl font-bold text-text-primary leading-snug">
            {project.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-text-muted text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Highlights */}
        <div className="mb-6 space-y-2">
          {project.highlights.map((h) => (
            <div key={h} className="flex items-start gap-2">
              <div
                className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                style={{ backgroundColor: project.accentColor }}
              />
              <span className="text-xs text-text-muted">{h}</span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <hr className="hr-gradient mb-5" />

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1 rounded-full border transition-all duration-200"
              style={{
                borderColor: `${project.accentColor}30`,
                color: project.accentColor,
                background: `${project.accentColor}10`,
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
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

  const visibleProjects = showAll ? projects : projects.slice(0, 2);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
      aria-label="Projects section"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 right-0 w-[500px] h-[300px] bg-accent/5 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[250px] bg-accent-cyan/5 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div
          className={`text-center mb-10 sm:mb-14 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="section-label">What I&apos;ve Built</p>
          <h2 id="projects-heading" className="section-title mb-3 sm:mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-text-muted max-w-lg mx-auto text-sm sm:text-base">
            Real-world systems combining software engineering, data intelligence,
            and AI to solve complex problems.
          </p>
        </div>

        {/* Project Cards Grid — 1 col mobile, 2 col desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-8 max-w-5xl mx-auto">
          {visibleProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 150} />
          ))}
        </div>

        {/* Buttons Row */}
        <div
          ref={btnRef}
          className={`flex flex-wrap justify-center gap-3 sm:gap-4 mt-10 sm:mt-14 transition-all duration-700 ${
            btnVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          {!showAll ? (
            /* ── Collapsed: single "See More" button ── */
            <button
              id="projects-see-more"
              onClick={() => setShowAll(true)}
              className="btn-primary group text-base py-3 px-8"
            >
              See More
              <ChevronDown
                size={20}
                className="group-hover:translate-y-0.5 transition-transform"
              />
            </button>
          ) : (
            /* ── Expanded: "Show Less" + "View More Projects" ── */
            <>
              <button
                id="projects-show-less"
                onClick={() => setShowAll(false)}
                className="btn-secondary group text-base py-3 px-8"
              >
                <ChevronUp
                  size={20}
                  className="group-hover:-translate-y-0.5 transition-transform"
                />
                Show Less
              </button>
              <a
                href="https://github.com/Saqibkhan-engineer"
                id="projects-view-more"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group text-base py-3 px-8"
              >
                View More Projects
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
