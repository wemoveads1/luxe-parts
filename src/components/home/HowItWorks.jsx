import React from 'react';
import { motion } from 'framer-motion';
import { Search, MessageSquare, PackageCheck, Truck } from 'lucide-react';

const steps = [
  { icon: Search, title: "Submit Inquiry", desc: "Tell us what part you need — include photos if you have them." },
  { icon: MessageSquare, title: "Get a Quote", desc: "Our specialists locate the part and send you a detailed quote." },
  { icon: PackageCheck, title: "Inspection", desc: "Every part is thoroughly inspected and quality-verified." },
  { icon: Truck, title: "Delivery", desc: "Fast, insured shipping straight to your door or workshop." },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#0a0a0a] py-28 md:py-36 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-[1px] w-12 bg-[#c9a84c]" />
            <span className="text-[#c9a84c] text-sm font-medium tracking-[0.3em] uppercase">Process</span>
            <div className="h-[1px] w-12 bg-[#c9a84c]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            How It Works
          </h2>
          <p className="text-white/40 mt-4 text-lg max-w-lg mx-auto">
            From inquiry to delivery — a seamless, transparent process
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-[1px] bg-gradient-to-r from-[#c9a84c]/20 via-[#c9a84c]/40 to-[#c9a84c]/20]" />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center relative"
            >
              <div className="relative inline-flex items-center justify-center w-24 h-24 border border-[#c9a84c]/20 bg-[#c9a84c]/[0.05] mb-8">
                <step.icon className="w-8 h-8 text-[#c9a84c]" />
                <span className="absolute -top-3 -right-3 w-7 h-7 bg-[#c9a84c] text-black text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
              </div>
              <h3 className="text-white font-semibold text-lg">{step.title}</h3>
              <p className="text-white/40 text-sm mt-2 max-w-[200px] mx-auto leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}