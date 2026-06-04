import React from 'react';
import { motion } from 'framer-motion';

const brands = [
  { name: "Mercedes-Benz", short: "MB" },
  { name: "BMW", short: "BMW" },
  { name: "Porsche", short: "P" },
  { name: "Audi", short: "AUDI" },
  { name: "Bentley", short: "B" },
  { name: "Rolls-Royce", short: "RR" },
  { name: "Maserati", short: "M" },
  { name: "Jaguar", short: "JAG" },
  { name: "Land Rover", short: "LR" },
  { name: "Lexus", short: "LS" },
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
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group bg-obsidian hover:bg-gold/[0.04] transition-all duration-500 cursor-pointer p-8 flex flex-col items-center justify-center aspect-square relative overflow-hidden"
            >
              {/* Hover corner accent */}
              <div className="absolute top-0 left-0 w-0 h-0 border-t-[2px] border-l-[2px] border-gold/0 group-hover:border-gold/60 group-hover:w-6 group-hover:h-6 transition-all duration-500" />
              <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[2px] border-r-[2px] border-gold/0 group-hover:border-gold/60 group-hover:w-6 group-hover:h-6 transition-all duration-500" />

              <span className="font-heading text-2xl font-bold text-white/25 group-hover:text-gold/80 transition-colors duration-500">
                {brand.short}
              </span>
              <span className="font-body text-[10px] text-white/20 group-hover:text-white/50 transition-colors duration-500 tracking-[0.2em] uppercase mt-3 text-center">
                {brand.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}