import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const categories = [
  { name: "Engine", tag: "01", desc: "Blocks, turbos, cams & more", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80" },
  { name: "Transmission", tag: "02", desc: "Gearboxes & drivetrain", image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80" },
  { name: "Electrical", tag: "03", desc: "ECUs, sensors & modules", image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80" },
  { name: "Interior", tag: "04", desc: "Seats, trim & panels", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80" },
  { name: "Exterior", tag: "05", desc: "Body panels & lighting", image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80" },
  { name: "Suspension", tag: "06", desc: "Shocks, arms & subframes", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80" },
];

export default function PartsCategories({ onOpenInquiry }) {
  return (
    <section id="categories" className="bg-obsidian-mid py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-gold text-xs font-body font-semibold tracking-[0.35em] uppercase mb-4">Shop by Category</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="font-heading text-4xl md:text-6xl text-white">
              What Are You<br />Looking For?
            </h2>
            <button
              onClick={onOpenInquiry}
              className="inline-flex items-center gap-2 border border-white/10 hover:border-gold/40 text-white/50 hover:text-gold font-body text-xs tracking-[0.2em] uppercase px-6 py-3 transition-all duration-300 self-start md:self-auto"
            >
              Can't find it? Ask us
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>

        {/* 6-card grid: 2 large + 4 small */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              onClick={onOpenInquiry}
              className={`group relative overflow-hidden cursor-pointer ${i < 2 ? 'md:col-span-1 aspect-[4/3]' : 'aspect-[4/3]'}`}
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                style={{ filter: 'brightness(0.25) saturate(0.6)' }}
              />
              {/* Bottom gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />

              {/* Top-right tag */}
              <div className="absolute top-4 right-4 font-body text-[10px] text-white/20 tracking-widest font-medium">
                {cat.tag}
              </div>

              {/* Hover border */}
              <div className="absolute inset-0 border border-white/0 group-hover:border-gold/20 transition-colors duration-500" />

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="font-heading text-white text-2xl font-bold group-hover:text-gold-light transition-colors duration-500">
                      {cat.name}
                    </h3>
                    <p className="text-white/40 font-body text-xs mt-1 group-hover:text-white/60 transition-colors duration-500">
                      {cat.desc}
                    </p>
                  </div>
                  <div className="w-8 h-8 border border-white/0 group-hover:border-gold/40 flex items-center justify-center transition-all duration-500 translate-x-2 group-hover:translate-x-0">
                    <ArrowUpRight className="w-4 h-4 text-white/0 group-hover:text-gold transition-all duration-500" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}