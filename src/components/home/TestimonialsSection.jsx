import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "James W.",
    role: "Porsche 911 Turbo Owner",
    text: "Found a rare OEM turbo that no dealer had in stock. Delivered within 3 days. Absolute legends.",
    stars: 5,
    initial: "JW",
  },
  {
    name: "Sarah M.",
    role: "Mercedes S-Class W221",
    text: "Needed an air suspension compressor — sourced in 24 hours. Half the dealer price, works flawlessly.",
    stars: 5,
    initial: "SM",
  },
  {
    name: "David K.",
    role: "BMW M5 E60 Enthusiast",
    text: "The SMG pump was in immaculate condition. Their inspection process gives you real confidence.",
    stars: 5,
    initial: "DK",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="bg-obsidian py-28 md:py-36 relative overflow-hidden">
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <p className="text-gold text-xs font-body font-semibold tracking-[0.35em] uppercase mb-4">Client Stories</p>
            <h2 className="font-heading text-4xl md:text-6xl text-white leading-tight">
              Trusted by<br />Enthusiasts
            </h2>
          </div>
          <div className="flex gap-1 self-start md:self-auto pb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="w-2 h-2 bg-gold/60 rotate-45" />
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-obsidian-light border border-white/[0.05] hover:border-gold/15 p-8 transition-all duration-500 relative overflow-hidden"
            >
              {/* Corner accent glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gold/0 group-hover:bg-gold/[0.04] rounded-full blur-2xl transition-all duration-700" />

              <Quote className="w-6 h-6 text-gold/30 mb-6" />

              <p className="font-body text-white/60 text-sm leading-relaxed group-hover:text-white/75 transition-colors duration-500">
                "{t.text}"
              </p>

              <div className="mt-8 pt-6 border-t border-white/[0.04] flex items-center gap-4">
                <div className="w-10 h-10 bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                  <span className="font-heading text-gold font-bold text-xs">{t.initial}</span>
                </div>
                <div>
                  <p className="text-white font-body font-semibold text-sm">{t.name}</p>
                  <p className="text-white/30 font-body text-xs mt-0.5">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}