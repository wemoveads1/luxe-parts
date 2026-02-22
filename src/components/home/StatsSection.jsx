import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: "15K+", label: "Parts Sourced", sublabel: "and counting" },
  { value: "98%", label: "Client Satisfaction", sublabel: "verified reviews" },
  { value: "48hr", label: "Average Turnaround", sublabel: "from inquiry to quote" },
  { value: "200+", label: "Vehicle Models", sublabel: "covered worldwide" },
];

export default function StatsSection() {
  return (
    <section className="relative bg-[#0a0a0a] py-24 overflow-hidden">
      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center md:border-r last:border-r-0 border-white/[0.06]"
            >
              <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#c9a84c] to-[#8a6d2b]">
                {stat.value}
              </span>
              <p className="text-white font-medium mt-3 text-sm md:text-base">{stat.label}</p>
              <p className="text-white/30 text-xs mt-1">{stat.sublabel}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}