'use client';

import { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

function Counter({ from, to, duration, suffix = '' }: { from: number; to: number; duration: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (inView) {
      let startTime: number;
      let animationFrame: number;

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * (to - from) + from));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(step);
        }
      };

      animationFrame = requestAnimationFrame(step);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [inView, from, to, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function AboutMeSplit() {
  return (
    <section className="bg-[#0d0d0d] py-24 md:py-32 relative z-20 px-6 md:px-12 lg:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        {/* LEFT: Stats */}
        <div className="w-full lg:w-[40%] grid grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-12">
          {[
            { value: 50, suffix: "+", label: "BI Dashboards Built", duration: 2 },
            { value: 5, suffix: "+", label: "Years in Tech", duration: 1.5 },
            { value: 10, suffix: "M+", label: "Data Rows Processed", duration: 2 },
            { value: 100, suffix: "+", label: "Automated Workflows", duration: 2.5 }
          ].map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col gap-1 sm:gap-2"
            >
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
                <Counter from={0} to={stat.value} duration={stat.duration} suffix={stat.suffix} />
              </h3>
              <p className="text-sm sm:text-base text-gray-400 font-medium leading-tight">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* RIGHT: Story */}
        <div className="w-full lg:w-[60%] flex flex-col gap-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold tracking-[-0.03em] leading-tight text-white"
          >
            My story
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 leading-relaxed font-light"
          >
            I am a business intelligence analyst dedicated to helping companies make data-driven decisions. I have a strong background in data analytics, where I focus on processing raw data, identifying trends, and building insightful reports and dashboards. I focus on delivering practical data solutions that improve business processes and support growth.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
