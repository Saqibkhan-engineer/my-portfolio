import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-bg">
      {/* ─── Navigation ─────────────────────────────────── */}
      <Navbar />

      {/* ─── Phase 1: Hero ──────────────────────────────── */}
      <Hero />

      {/* ─── Divider ────────────────────────────────────── */}
      <hr className="hr-gradient max-w-7xl mx-auto" />

      {/* ─── Phase 2: Skills ────────────────────────────── */}
      <Skills />

      {/* ─── Divider ────────────────────────────────────── */}
      <hr className="hr-gradient max-w-7xl mx-auto" />

      {/* ─── Phase 3: Certifications ────────────────────── */}
      <Certifications />

      {/* ─── Divider ────────────────────────────────────── */}
      <hr className="hr-gradient max-w-7xl mx-auto" />

      {/* ─── Phase 4: Projects ──────────────────────────── */}
      <Projects />

      {/* ─── Divider ────────────────────────────────────── */}
      <hr className="hr-gradient max-w-7xl mx-auto" />

      {/* ─── Phase 5: Contact + Footer ──────────────────── */}
      <Contact />
    </main>
  );
}
