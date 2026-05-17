'use client';

import { motion } from 'framer-motion';

export default function JourneyTimeline() {
  const milestones = [
    { year: "2021", title: "Started Tech Journey", desc: "Explored basic computer science concepts." },
    { year: "2022", title: "Joined COMSATS University", desc: "Began formal software engineering education." },
    { year: "2023", title: "Discovered Data Analytics", desc: "Mastered SQL and Python foundations." },
    { year: "2024", title: "Built First BI Dashboards", desc: "Visualized complex business data patterns." },
    { year: "2025", title: "Integrated AI & Automation", desc: "Developed smart automated data workflows." },
    { year: "2026", title: "Full-Scale BI Analyst", desc: "Delivering practical data-driven business solutions." },
  ];

  // Duplicate milestones to create a seamless infinite loop
  const duplicatedMilestones = [...milestones, ...milestones];

  return (
    <section className="bg-[#0d0d0d] py-24 md:py-32 px-6 md:px-12 lg:px-24 relative z-20">
      <div className="max-w-5xl mx-auto flex flex-col gap-16">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] text-white mb-4">
            The Journey
          </h2>
          <p className="text-gray-400 text-lg md:text-xl">
            A timeline of continuous learning and growth.
          </p>
        </div>

        <div 
          className="relative h-[600px] overflow-hidden"
          style={{ WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)', maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)' }}
        >
          {/* Centered Line - Static */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 md:-translate-x-1/2 rounded-full"></div>

          {/* Scrolling Container */}
          <motion.div 
            className="flex flex-col gap-16 pt-8 pb-16"
            animate={{ y: [0, "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 20, // Adjust this value to control speed (lower is faster)
            }}
          >
            {duplicatedMilestones.map((item, idx) => {
              // We want alternating left/right layout based on original index
              const originalIdx = idx % milestones.length;
              const isEven = originalIdx % 2 === 0;
              return (
                <div 
                  key={idx}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[20px] md:left-1/2 w-4 h-4 bg-[#ff6b35] rounded-full -translate-x-[7px] md:-translate-x-1/2 top-1.5 md:top-auto ring-4 ring-[#0d0d0d]"></div>
                  
                  {/* Content Box */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                    <div className="flex flex-col gap-2">
                      <span className="text-[#ff6b35] font-bold text-xl tracking-wide">{item.year}</span>
                      <h3 className="text-2xl font-bold text-white tracking-[-0.03em]">{item.title}</h3>
                      <p className="text-gray-400 font-light">{item.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
