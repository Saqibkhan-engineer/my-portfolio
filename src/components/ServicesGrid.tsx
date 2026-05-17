'use client';

import { motion } from 'framer-motion';
import { 
  BarChart3, 
  LineChart, 
  Bot, 
  Database, 
  Target, 
  Presentation 
} from 'lucide-react';

export default function ServicesGrid() {
  const services = [
    {
      title: "Data Analytics",
      description: "Finding trends in raw data.",
      icon: <BarChart3 className="w-8 h-8 text-[#ff6b35]" />
    },
    {
      title: "Business Intelligence",
      description: "Creating interactive live dashboards.",
      icon: <LineChart className="w-8 h-8 text-[#ff6b35]" />
    },
    {
      title: "AI Automation",
      description: "Building smart automated workflows.",
      icon: <Bot className="w-8 h-8 text-[#ff6b35]" />
    },
    {
      title: "Database Management",
      description: "Writing optimized SQL queries.",
      icon: <Database className="w-8 h-8 text-[#ff6b35]" />
    },
    {
      title: "Gap Analysis",
      description: "Identifying business growth opportunities.",
      icon: <Target className="w-8 h-8 text-[#ff6b35]" />
    },
    {
      title: "Executive Reporting",
      description: "Presenting clear data insights.",
      icon: <Presentation className="w-8 h-8 text-[#ff6b35]" />
    }
  ];

  return (
    <section className="bg-[#0d0d0d] py-24 md:py-32 px-6 md:px-12 lg:px-24 relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col gap-4 text-center md:text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-[-0.03em] text-white"
          >
            Core Expertise
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl"
          >
            Transforming raw data into actionable business intelligence through advanced analytics and automation.
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
              className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:border-white/30 hover:-translate-y-1 flex flex-col gap-6"
            >
              <div className="p-4 bg-white/5 rounded-xl w-fit">
                {service.icon}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-bold text-white tracking-[-0.03em]">{service.title}</h3>
                <p className="text-gray-400 font-light">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
