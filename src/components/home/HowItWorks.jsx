import React from 'react';
import { motion } from 'framer-motion';
import { FileText, MessageCircle, BadgeCheck, Package } from 'lucide-react';

const steps = [
  {
    num: "01",
    icon: FileText,
    title: "Submit Inquiry",
    desc: "Tell us exactly what part you need. Include photos, part numbers, or any details that help."
  },
  {
    num: "02",
    icon: MessageCircle,
    title: "Receive Quote",
    desc: "Our team locates the part within hours and sends you a competitive, transparent quote."
  },
  {
    num: "03",
    icon: BadgeCheck,
    title: "Part Verified",
    desc: "Every component goes through our rigorous inspection protocol before it leaves us."
  },
  {
    num: "04",
    icon: Package,
    title: "Shipped to You",
    desc: "Fully insured express delivery to your door or workshop, anywhere in the world."
  },
];

export default function HowItWorks() {
  return (
    <section id="process" className="bg-obsidian-mid py-28 md:py-36 relative overflow-hidden">
      {/* Background large text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-heading text-[20vw] font-black text-white/[0.015] whitespace-nowrap pointer-events-none select-none">
        PROCESS
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-gold text-xs font-body font-semibold tracking-[0.35em] uppercase mb-4">How It Works</p>
          <h2 className="font-heading text-4xl md:text-6xl text-white">
            Simple. Fast.<br />Reliable.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative"
            >
              {/* Connector line */}
              {i < 3 && (
                <div className="hidden md:block absolute top-12 left-[calc(50%+3rem)] right-0 h-px bg-gradient-to-r from-gold/20 to-transparent z-0" />
              )}

              <div className="relative z-10 bg-obsidian border border-white/[0.05] group-hover:border-gold/20 p-8 transition-all duration-500">
                {/* Number */}
                <div className="flex items-start justify-between mb-8">
                  <span className="font-heading text-5xl font-black text-white/[0.06] group-hover:text-gold/10 transition-colors duration-500 leading-none">
                    {step.num}
                  </span>
                  <div className="w-10 h-10 border border-white/10 group-hover:border-gold/30 flex items-center justify-center transition-all duration-500">
                    <step.icon className="w-4 h-4 text-white/40 group-hover:text-gold transition-colors duration-500" />
                  </div>
                </div>

                <h3 className="font-heading text-white text-xl font-bold mb-3 group-hover:text-gold-light transition-colors duration-500">
                  {step.title}
                </h3>
                <p className="font-body text-white/35 text-sm leading-relaxed group-hover:text-white/55 transition-colors duration-500">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}