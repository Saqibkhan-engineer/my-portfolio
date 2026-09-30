"use client";

import { useState, useEffect } from "react";
import { Menu, X, Download, Code2 } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          {/* Sleek icon mark */}
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-accent to-accent-cyan flex items-center justify-center shadow-glow-sm group-hover:shadow-glow transition-shadow duration-300">
            <Code2 size={16} className="text-white" strokeWidth={2.5} />
          </div>
          <span className="font-bold text-text-primary group-hover:text-accent-light transition-colors">
            Muhammad Saqib
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-text-muted hover:text-text-primary text-sm font-medium transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-accent-cyan group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA — Download Resume */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/saqib.pdf"
            id="navbar-cta"
            download="Muhammad_Saqib_Resume.pdf"
            className="btn-primary text-sm py-2 px-5 group"
          >
            <Download size={15} className="group-hover:-translate-y-0.5 transition-transform" />
            Download Resume
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          id="mobile-menu-toggle"
          className="md:hidden text-text-muted hover:text-text-primary transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden glass border-t border-white/5 px-4 sm:px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-text-muted hover:text-text-primary text-sm font-medium transition-colors block"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            {/* Resume download in mobile menu */}
            <li className="pt-2 border-t border-white/8">
              <a
                href="/saqib.pdf"
                download="Muhammad_Saqib_Resume.pdf"
                className="btn-primary text-sm py-2 px-5 w-full justify-center group"
                onClick={() => setMobileOpen(false)}
              >
                <Download size={15} className="group-hover:-translate-y-0.5 transition-transform" />
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
