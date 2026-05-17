'use client';

import { useScroll, useTransform, motion } from 'framer-motion';

export default function Overlay({ heroRef }: { heroRef: React.RefObject<HTMLDivElement> }) {
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end end']
  });

  // PHASE 1: Ghost watermark (0.00-0.28)
  const p1Opacity = useTransform(scrollYProgress, [0, 0.10, 0.18, 0.28], [1, 1, 1, 0]);

  // PHASE 2: Name intro (0.28-0.52)
  const p2Opacity = useTransform(scrollYProgress, [0.28, 0.38, 0.44, 0.52], [0, 1, 1, 0]);
  const p2Y = useTransform(scrollYProgress, [0.28, 0.52], [60, -60]);

  // PHASE 3: Role (0.52-0.78)
  const p3Opacity = useTransform(scrollYProgress, [0.52, 0.62, 0.70, 0.78], [0, 1, 1, 0]);

  // PHASE 4: Headline (0.78-1.00)
  const p4Opacity = useTransform(scrollYProgress, [0.78, 0.88, 0.96, 1.00], [0, 1, 1, 0]);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 flex items-center justify-center">

      {/* PHASE 1 */}
      <motion.div
        style={{ opacity: p1Opacity, willChange: 'opacity, transform' }}
        className="absolute text-center w-full px-4"
      >
        <h1 className="text-[clamp(1.5rem,8vw,14rem)] font-black text-white/10 tracking-tighter whitespace-nowrap">
          Muhammad Saqib.
        </h1>
      </motion.div>

      {/* PHASE 2 */}
      <motion.div
        style={{ opacity: p2Opacity, y: p2Y, willChange: 'opacity, transform' }}
        className="absolute text-center flex flex-col items-center"
      >
        <span className="text-sm md:text-lg text-white/70 uppercase tracking-widest mb-4 font-semibold">
          Data Analyst & Business Intelligence Specialist
        </span>
        <h2 className="text-[clamp(2rem,11vw,9rem)] font-extrabold tracking-[-0.04em] leading-none mb-4 whitespace-nowrap">
          Muhammad Saqib.
        </h2>
        <span className="text-sm md:text-base text-white/50">

        </span>
      </motion.div>

      {/* PHASE 3 */}
      <motion.div
        style={{ opacity: p3Opacity, willChange: 'opacity, transform' }}
        className="absolute text-center"
      >
        <h2 className="text-[clamp(2.5rem,7vw,7rem)] font-bold tracking-[-0.03em] px-4">
          Data Analyst & Business Intelligence Specialist
        </h2>
      </motion.div>

      {/* PHASE 4 */}
      <motion.div
        style={{ opacity: p4Opacity, willChange: 'opacity, transform' }}
        className="absolute text-center flex flex-col items-center px-4"
      >
        <h2 className="text-[clamp(2rem,5.5vw,5.5rem)] font-bold tracking-[-0.03em] leading-tight mb-6 whitespace-pre-wrap">
          {""}
        </h2>
        <span className="text-sm md:text-lg text-white/50">

        </span>
      </motion.div>
    </div>
  );
}
