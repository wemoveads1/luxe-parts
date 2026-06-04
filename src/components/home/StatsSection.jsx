import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: "15K+", label: "Parts Sourced", desc: "and counting" },
  { value: "98%", label: "Satisfaction Rate", desc: "from verified clients" },
  { value: "< 2hr", label: "Response Time", desc: "inquiry to quote" },
  { value: "200+", label: "Models Covered", desc: "worldwide fleet" },
];

export default function StatsSection() {
  return (
    <section className="bg-obsidian relative overflow-hidden py-20">
      {/* Gold glow center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[200px] bg-gold/5 blur-[100px]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-white/[0.05]">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center md:px-8 py-4"
            >
              <span className="shimmer-gold font-heading text-5xl md:text-6xl font-bold">{stat.value}</span>
              <p className="text-white font-body font-medium text-sm mt-3 tracking-wide">{stat.label}</p>
              <p className="text-white/25 font-body text-xs mt-1">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}