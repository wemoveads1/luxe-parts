import React from 'react';
import { motion } from 'framer-motion';

const brandLogos = {
  "Mercedes-Benz": "https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg",
  "BMW": "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg",
  "Porsche": "https://upload.wikimedia.org/wikipedia/commons/4/44/Porsche_hood_emblem.png",
  "Audi": "https://upload.wikimedia.org/wikipedia/en/a/a3/Audi_Logo.svg",
  "Bentley": "https://upload.wikimedia.org/wikipedia/de/thumb/6/6c/Bentley_logo.svg/1280px-Bentley_logo.svg.png",
  "Rolls-Royce": "https://upload.wikimedia.org/wikipedia/commons/5/52/Rolls-Royce_Motor_Cars_logo.svg",
  "Maserati": "https://upload.wikimedia.org/wikipedia/de/6/64/Maserati_logo.svg",
  "Jaguar": "https://upload.wikimedia.org/wikipedia/en/7/78/Jaguar_logo_2021.svg",
  "Land Rover": "https://upload.wikimedia.org/wikipedia/en/9/9f/Land_Rover_logo_black.svg",
  "Lexus": "https://upload.wikimedia.org/wikipedia/commons/4/42/Lexus-cars-logo-emblem.jpg",
};

const BrandLogo = ({ name }) => {
  const src = brandLogos[name];
  if (!src) return null;
  const isWhite = ["Rolls-Royce", "Jaguar", "Land Rover", "Lexus"].includes(name);
  return (
    <img
      src={src}
      alt={name}
      className="w-14 h-14 object-contain group-hover:scale-110 transition-transform duration-500"
      style={isWhite ? { filter: 'brightness(0) invert(1)' } : undefined}
    />
  );
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

              <div className="flex items-center justify-center h-14 mb-4">
                <BrandLogo name={name} />
              </div>
              <span className="font-heading text-sm text-white/40 group-hover:text-gold transition-colors duration-500 tracking-wider text-center">
                {name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}