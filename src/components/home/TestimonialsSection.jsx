import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "James W.",
    car: "Porsche 911 (997)",
    text: "Found a rare OEM turbo that no dealer had in stock. Delivered within 3 days. Exceptional service from start to finish.",
    stars: 5,
  },
  {
    name: "Sarah M.",
    car: "Mercedes-Benz S-Class W221",
    text: "Needed an air suspension compressor — they sourced it in 24 hours. Half the price of a new one, works flawlessly.",
    stars: 5,
  },
  {
    name: "David K.",
    car: "BMW M5 E60",
    text: "The SMG pump I ordered was in perfect condition. Their inspection process gives you real confidence in the parts.",
    stars: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-[#0f0f0f] py-28 md:py-36 relative">
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
            <span className="text-[#c9a84c] text-sm font-medium tracking-[0.3em] uppercase">Testimonials</span>
            <div className="h-[1px] w-12 bg-[#c9a84c]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Trusted by Enthusiasts
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-white/[0.06] bg-white/[0.02] p-8 hover:border-[#c9a84c]/20 transition-all duration-500"
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-[#c9a84c] text-[#c9a84c]" />
                ))}
              </div>
              <p className="text-white/70 leading-relaxed text-sm">&ldquo;{t.text}&rdquo;</p>
              <div className="mt-8 pt-6 border-t border-white/[0.06]">
                <p className="text-white font-semibold">{t.name}</p>
                <p className="text-white/30 text-sm mt-1">{t.car}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}