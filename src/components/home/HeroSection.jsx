import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';

export default function HeroSection({ onOpenInquiry }) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-obsidian">
      {/* Full-bleed background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1920&q=90"
          alt="Luxury car"
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.22) saturate(0.8)' }}
        />
        {/* Layered gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/60" />
        {/* Gold radial glow bottom-left */}
        <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-gold/10 blur-[120px] rounded-full" />
      </div>

      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 md:px-12 py-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3"
        >
          <div className="w-9 h-9 bg-gold flex items-center justify-center glow-gold">
            <span className="text-black font-heading font-black text-sm tracking-tight">LP</span>
          </div>
          <span className="text-white font-body font-semibold tracking-[0.15em] text-sm uppercase">Luxe Parts</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden md:flex items-center gap-8"
        >
          {["Brands", "Categories", "Process", "Reviews"].map(item => (
            <button
              key={item}
              onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
              className="text-white/50 hover:text-gold text-xs font-body font-medium tracking-[0.15em] uppercase transition-colors duration-300"
            >
              {item}
            </button>
          ))}
        </motion.div>

        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onClick={onOpenInquiry}
          className="border border-gold/40 hover:border-gold hover:bg-gold/10 text-gold text-xs font-body font-semibold tracking-[0.2em] uppercase px-5 py-2.5 transition-all duration-300"
        >
          Get a Quote
        </motion.button>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-32 pb-20">
        <div className="max-w-4xl">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 px-4 py-2 mb-10"
          >
            <Zap className="w-3 h-3 text-gold" />
            <span className="text-gold text-xs font-body font-semibold tracking-[0.25em] uppercase">Premium OEM Salvage Parts</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-[clamp(3.5rem,10vw,8rem)] leading-[0.88] tracking-tight text-white"
          >
            Source <em className="not-italic shimmer-gold">Rare</em>
            <br />
            Luxury Parts.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 text-white/50 font-body text-base md:text-lg max-w-lg leading-relaxed"
          >
            Authenticated OEM parts from the world's most prestigious marques — 
            inspected, verified, delivered fast.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <button
              onClick={onOpenInquiry}
              className="group flex items-center gap-3 bg-gold hover:bg-gold-light text-black font-body font-bold text-sm tracking-[0.1em] uppercase px-8 py-4 transition-all duration-300 glow-gold"
            >
              Find Your Part
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button
              onClick={() => document.getElementById('brands')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 text-white/50 hover:text-white font-body font-medium text-sm tracking-wider transition-colors duration-300 group"
            >
              <span className="w-8 h-[1px] bg-white/30 group-hover:bg-white/60 group-hover:w-12 transition-all duration-300" />
              Explore Brands
            </button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-20 flex flex-wrap gap-x-12 gap-y-6 border-t border-white/[0.06] pt-10"
          >
            {[
              { value: "15K+", label: "Parts Sourced" },
              { value: "< 2hr", label: "Response Time" },
              { value: "98%", label: "Satisfaction" },
              { value: "200+", label: "Models Covered" },
            ].map((s, i) => (
              <div key={i}>
                <p className="font-heading text-3xl md:text-4xl font-bold text-white">{s.value}</p>
                <p className="font-body text-xs text-white/30 mt-1 tracking-widest uppercase">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Vertical text right side */}
      <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col items-center gap-4 z-10">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent to-white/20" />
        <span className="text-white/20 text-[10px] tracking-[0.4em] uppercase font-body rotate-90 whitespace-nowrap">
          Est. 2019 — Melbourne, Australia
        </span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/20 to-transparent" />
      </div>
    </section>
  );
}