import React from 'react';
import { motion } from 'framer-motion';

// Inline SVG brand marks — no external deps, always renders
const BrandLogo = ({ name }) => {
  const logos = {
    "Mercedes-Benz": (
      <svg viewBox="0 0 100 100" className="w-12 h-12">
        <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="3"/>
        <line x1="50" y1="4" x2="50" y2="50" stroke="currentColor" strokeWidth="3"/>
        <line x1="50" y1="50" x2="9" y2="73" stroke="currentColor" strokeWidth="3"/>
        <line x1="50" y1="50" x2="91" y2="73" stroke="currentColor" strokeWidth="3"/>
      </svg>
    ),
    "BMW": (
      <svg viewBox="0 0 100 100" className="w-12 h-12">
        <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="3"/>
        <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="2"/>
        <path d="M50 20 A30 30 0 0 1 80 50 L50 50Z" fill="currentColor" opacity="0.6"/>
        <path d="M50 80 A30 30 0 0 1 20 50 L50 50Z" fill="currentColor" opacity="0.6"/>
        <text x="50" y="55" textAnchor="middle" fontSize="14" fontWeight="bold" fontFamily="serif" fill="currentColor">BMW</text>
      </svg>
    ),
    "Porsche": (
      <svg viewBox="0 0 100 100" className="w-12 h-12">
        <rect x="5" y="5" width="90" height="90" fill="none" stroke="currentColor" strokeWidth="2"/>
        <rect x="5" y="5" width="45" height="45" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <text x="50" y="56" textAnchor="middle" fontSize="13" fontWeight="900" fontFamily="sans-serif" fill="currentColor" letterSpacing="1">PORSCHE</text>
        <line x1="5" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    "Audi": (
      <svg viewBox="0 0 140 50" className="w-20 h-8">
        {[20, 53, 87, 120].map((cx, i) => (
          <circle key={i} cx={cx} cy="25" r="20" fill="none" stroke="currentColor" strokeWidth="3"/>
        ))}
      </svg>
    ),
    "Bentley": (
      <svg viewBox="0 0 100 100" className="w-12 h-12">
        <ellipse cx="50" cy="50" rx="46" ry="46" fill="none" stroke="currentColor" strokeWidth="2"/>
        <text x="50" y="45" textAnchor="middle" fontSize="36" fontWeight="900" fontFamily="serif" fill="currentColor">B</text>
        <text x="50" y="70" textAnchor="middle" fontSize="8" fontWeight="600" fontFamily="sans-serif" fill="currentColor" letterSpacing="2">BENTLEY</text>
      </svg>
    ),
    "Rolls-Royce": (
      <svg viewBox="0 0 100 100" className="w-12 h-12">
        <text x="50" y="48" textAnchor="middle" fontSize="28" fontWeight="900" fontFamily="serif" fill="currentColor">RR</text>
        <line x1="15" y1="58" x2="85" y2="58" stroke="currentColor" strokeWidth="1.5"/>
        <text x="50" y="74" textAnchor="middle" fontSize="7" fontWeight="500" fontFamily="sans-serif" fill="currentColor" letterSpacing="3">ROLLS-ROYCE</text>
      </svg>
    ),
    "Maserati": (
      <svg viewBox="0 0 60 100" className="w-8 h-12">
        <polyline points="30,5 5,50 30,50 30,95" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round"/>
        <polyline points="30,5 55,50 30,50" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round"/>
      </svg>
    ),
    "Jaguar": (
      <svg viewBox="0 0 100 60" className="w-20 h-12">
        <text x="50" y="42" textAnchor="middle" fontSize="20" fontWeight="900" fontFamily="serif" fill="currentColor" letterSpacing="4">JAGUAR</text>
        <path d="M15 48 Q50 56 85 48" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    "Land Rover": (
      <svg viewBox="0 0 120 60" className="w-20 h-10">
        <rect x="5" y="10" width="110" height="40" fill="none" stroke="currentColor" strokeWidth="2"/>
        <text x="60" y="36" textAnchor="middle" fontSize="11" fontWeight="700" fontFamily="sans-serif" fill="currentColor" letterSpacing="2">LAND ROVER</text>
      </svg>
    ),
    "Lexus": (
      <svg viewBox="0 0 100 100" className="w-12 h-12">
        <ellipse cx="50" cy="50" rx="46" ry="46" fill="none" stroke="currentColor" strokeWidth="2"/>
        <text x="50" y="58" textAnchor="middle" fontSize="32" fontWeight="300" fontFamily="serif" fill="currentColor" letterSpacing="2">L</text>
      </svg>
    ),
  };
  return logos[name] || null;
};

const brands = [
  "Mercedes-Benz", "BMW", "Porsche", "Audi", "Bentley",
  "Rolls-Royce", "Maserati", "Jaguar", "Land Rover", "Lexus"
];

export default function BrandsShowcase() {
  return (
    <section id="brands" className="bg-obsidian py-28 md:py-36 relative overflow-hidden">
      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}
      />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <p className="text-gold text-xs font-body font-semibold tracking-[0.35em] uppercase mb-4">Marques We Cover</p>
            <h2 className="font-heading text-4xl md:text-6xl text-white leading-tight">
              The World's<br />Finest Brands
            </h2>
          </div>
          <p className="text-white/30 font-body text-sm max-w-xs leading-relaxed">
            Authentic OEM components from the most revered automotive manufacturers on the planet.
          </p>
        </motion.div>

        {/* Brand grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-px bg-white/[0.04]">
          {brands.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group bg-obsidian hover:bg-gold/[0.04] transition-all duration-500 cursor-pointer p-8 flex flex-col items-center justify-center aspect-square relative overflow-hidden"
            >
              {/* Hover corner accents */}
              <div className="absolute top-0 left-0 w-0 h-0 border-t-[2px] border-l-[2px] border-gold/0 group-hover:border-gold/60 group-hover:w-6 group-hover:h-6 transition-all duration-500" />
              <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[2px] border-r-[2px] border-gold/0 group-hover:border-gold/60 group-hover:w-6 group-hover:h-6 transition-all duration-500" />

              <div className="text-white/25 group-hover:text-gold/70 transition-colors duration-500 flex items-center justify-center h-14">
                <BrandLogo name={name} />
              </div>
              <span className="font-body text-[10px] text-white/20 group-hover:text-white/50 transition-colors duration-500 tracking-[0.2em] uppercase mt-4 text-center">
                {name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}