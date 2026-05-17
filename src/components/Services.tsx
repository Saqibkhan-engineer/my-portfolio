'use client';

import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      title: "Data Analytics & Insights",
      badge: "Featured",
      tech: "Python / Pandas"
    },
    {
      title: "Interactive BI Dashboards",
      badge: "Most Popular",
      tech: "Power BI / Tableau"
    },
    {
      title: "Database Management",
      badge: "Top Rated",
      tech: "SQL / PostgreSQL"
    },
    {
      title: "AI Workflows & Automation",
      badge: "Featured",
      tech: "n8n / OpenAI"
    },
    {
      title: "Business & Gap Analysis",
      badge: "Highest Rated",
      tech: "Advanced Excel"
    },
    {
      title: "Executive Reporting",
      badge: "Top Rated",
      tech: "Looker Studio"
    }
  ];

  return (
    <section className="bg-[#0d0d0d] py-24 md:py-32 px-6 md:px-12 lg:px-24 relative z-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col gap-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-[-0.03em] text-white"
          >
            Specialized Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Delivering high-impact data solutions tailored for modern businesses.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#111111] border border-white/10 rounded-2xl p-8 hover:bg-[#1a1a1a] transition-colors duration-300 flex flex-col justify-between min-h-[200px]"
            >
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#ff6b35] bg-[#ff6b35]/10 px-3 py-1 rounded-full">
                    {service.badge}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white tracking-[-0.03em] leading-tight">
                  {service.title}
                </h3>
              </div>
              <div className="mt-8">
                <span className="text-sm font-medium text-gray-300 border border-white/20 px-4 py-2 rounded-full inline-block">
                  {service.tech}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
