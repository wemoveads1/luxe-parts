import React from 'react';
import { motion } from 'framer-motion';

const brands = [
  { name: "Mercedes-Benz", logo: "MB", subtitle: "Since 1926" },
  { name: "BMW", logo: "BMW", subtitle: "Since 1916" },
  { name: "Porsche", logo: "P", subtitle: "Since 1931" },
  { name: "Audi", logo: "AUDI", subtitle: "Since 1909" },
  { name: "Bentley", logo: "B", subtitle: "Since 1919" },
  { name: "Rolls-Royce", logo: "RR", subtitle: "Since 1904" },
  { name: "Maserati", logo: "M", subtitle: "Since 1914" },
  { name: "Jaguar", logo: "JAG", subtitle: "Since 1922" },
  { name: "Land Rover", logo: "LR", subtitle: "Since 1948" },
  { name: "Lexus", logo: "L", subtitle: "Since 1989" },
];

export default function BrandsShowcase() {
  return (
    <section id="brands" className="bg-[#0a0a0a] py-28 md:py-36 relative overflow-hidden">
      {/* Subtle gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-[1px] w-12 bg-[#c9a84c]" />
            <span className="text-[#c9a84c] text-sm font-medium tracking-[0.3em] uppercase">Brands We Cover</span>
            <div className="h-[1px] w-12 bg-[#c9a84c]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            The World's Finest
          </h2>
          <p className="text-white/40 mt-4 text-lg max-w-lg mx-auto">
            We source authentic parts from the most prestigious automotive marques
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative"
            >
              <div className="border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-8 flex flex-col items-center justify-center text-center hover:border-[#c9a84c]/30 hover:bg-[#c9a84c]/[0.03] transition-all duration-500 cursor-pointer aspect-square">
                <span className="text-2xl md:text-3xl font-bold text-white/70 group-hover:text-[#c9a84c] transition-colors duration-500 tracking-wider">
                  {brand.logo}
                </span>
                <span className="mt-3 text-xs text-white/30 group-hover:text-white/60 transition-colors duration-500 tracking-wider uppercase">
                  {brand.name}
                </span>
                <span className="mt-1 text-[10px] text-white/15 group-hover:text-white/30 transition-colors duration-500">
                  {brand.subtitle}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}