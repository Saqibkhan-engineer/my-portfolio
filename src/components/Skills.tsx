"use client";

import { useRef, useEffect, useState } from "react";
import {
  Brain,
  BarChart2,
  Database,
  Server,
  Monitor,
  GitBranch,
} from "lucide-react";

interface SkillCategory {
  id: string;
  icon: React.ReactNode;
  label: string;
  color: string;
  borderColor: string;
  tools: string[];
}

const categories: SkillCategory[] = [
  {
    id: "data-science",
    icon: <Brain size={22} />,
    label: "Data Science, ML & AI",
    color: "from-violet-500/20 to-purple-600/10",
    borderColor: "border-violet-500/20 hover:border-violet-500/50",
    tools: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "TensorFlow",
      "PyTorch",
      "Hugging Face",
    ],
  },
  {
    id: "business-intelligence",
    icon: <BarChart2 size={22} />,
    label: "Business Intelligence & Analytics",
    color: "from-cyan-500/20 to-blue-600/10",
    borderColor: "border-cyan-500/20 hover:border-cyan-500/50",
    tools: ["Power BI", "DAX", "Tableau", "Excel"],
  },
  {
    id: "databases",
    icon: <Database size={22} />,
    label: "Databases & Data Warehousing",
    color: "from-emerald-500/20 to-teal-600/10",
    borderColor: "border-emerald-500/20 hover:border-emerald-500/50",
    tools: ["PostgreSQL", "Google BigQuery", "Supabase"],
  },
  {
    id: "backend-cloud",
    icon: <Server size={22} />,
    label: "Backend, APIs & Cloud",
    color: "from-orange-500/20 to-amber-600/10",
    borderColor: "border-orange-500/20 hover:border-orange-500/50",
    tools: ["FastAPI", "Node.js", "Vercel", "AWS"],
  },
  {
    id: "frontend",
    icon: <Monitor size={22} />,
    label: "Frontend & Core Languages",
    color: "from-pink-500/20 to-rose-600/10",
    borderColor: "border-pink-500/20 hover:border-pink-500/50",
    tools: ["Next.js", "React", "Tailwind CSS", "TypeScript", "C++"],
  },
  {
    id: "devops",
    icon: <GitBranch size={22} />,
    label: "DevOps, Version Control & Tools",
    color: "from-indigo-500/20 to-blue-700/10",
    borderColor: "border-indigo-500/20 hover:border-indigo-500/50",
    tools: ["n8n", "LangChain", "Docker", "Git", "GitHub Actions"],
  },
];

function SkillCard({ cat, delay }: { cat: SkillCategory; delay: number }) {
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
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      id={`skill-card-${cat.id}`}
      className={`glass rounded-2xl p-6 border ${cat.borderColor} transition-all duration-500 cursor-default group
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
      style={{
        transitionDelay: `${delay}ms`,
        background: `linear-gradient(135deg, ${cat.color.includes("violet") ? "rgba(124,58,237,0.06)" : cat.color.includes("cyan") ? "rgba(6,182,212,0.06)" : cat.color.includes("emerald") ? "rgba(16,185,129,0.06)" : cat.color.includes("orange") ? "rgba(249,115,22,0.06)" : cat.color.includes("pink") ? "rgba(236,72,153,0.06)" : "rgba(99,102,241,0.06)"}, rgba(17,17,24,0.7))`,
      }}
    >
      {/* Card Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-text-primary group-hover:scale-110 transition-transform duration-300`}>
          {cat.icon}
        </div>
        <h3 className="font-bold text-text-primary text-sm leading-tight">
          {cat.label}
        </h3>
      </div>

      {/* Divider */}
      <hr className="hr-gradient mb-5" />

      {/* Skills pills */}
      <div className="flex flex-wrap gap-2">
        {cat.tools.map((tool) => (
          <span key={tool} className="skill-pill">
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
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
      id="skills"
      ref={sectionRef}
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
      aria-label="Skills section"
    >
      {/* Background accent */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/5 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div
          className={`text-center mb-10 sm:mb-14 lg:mb-16 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="section-label">What I Work With</p>
          <h2 id="skills-heading" className="section-title mb-3 sm:mb-4">
            Technical Skills &{" "}
            <span className="gradient-text">Tools</span>
          </h2>
          <p className="text-text-muted max-w-xl mx-auto text-sm sm:text-base">
            A curated toolkit spanning data science, BI analytics, cloud infrastructure,
            and modern web development.
          </p>
        </div>

        {/* Skills Grid — 1 col mobile, 2 tablet, 3 desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((cat, i) => (
            <SkillCard key={cat.id} cat={cat} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
