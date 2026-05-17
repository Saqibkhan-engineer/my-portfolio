'use client';
import { useRef } from 'react';
import ScrollyCanvas from '@/components/ScrollyCanvas';
import Overlay from '@/components/Overlay';
import TagScroll from '@/components/TagScroll';
import AboutMeSplit from '@/components/AboutMeSplit';
import ServicesGrid from '@/components/ServicesGrid';
import JourneyTimeline from '@/components/JourneyTimeline';
import Services from '@/components/Services';
import Footer from '@/components/Footer';

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <main className="bg-[#0d0d0d] text-white min-h-screen font-sans">
      <div ref={heroRef} style={{ position: 'relative', height: '500vh' }}>
        <ScrollyCanvas heroRef={heroRef} />
        <Overlay heroRef={heroRef} />
      </div>
      <TagScroll />
      <AboutMeSplit />
      <ServicesGrid />
      <JourneyTimeline />
      <Services />
      <Footer />
    </main>
  );
}
