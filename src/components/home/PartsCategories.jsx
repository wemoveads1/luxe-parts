import React from 'react';
import { motion } from 'framer-motion';
import { Cog, Gauge, CircuitBoard, Armchair, Car, Disc3, Flame, Wrench } from 'lucide-react';

const categories = [
  { name: "Engine", icon: Cog, desc: "Blocks, heads, turbos & more", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&q=80" },
  { name: "Transmission", icon: Gauge, desc: "Gearboxes, clutches & drivetrain", image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600&q=80" },
  { name: "Electrical", icon: CircuitBoard, desc: "ECUs, sensors & wiring", image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80" },
  { name: "Interior", icon: Armchair, desc: "Seats, trim & dashboard", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80" },
  { name: "Exterior", icon: Car, desc: "Panels, lights & bumpers", image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&q=80" },
  { name: "Brakes", icon: Disc3, desc: "Calipers, rotors & pads", image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&q=80" },
  { name: "Exhaust", icon: Flame, desc: "Headers, cats & mufflers", image: "https://images.unsplash.com/photo-1611821064430-0d40291d0f0b?w=600&q=80" },
  { name: "Suspension", icon: Wrench, desc: "Shocks, springs & arms", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=80" },
];

export default function PartsCategories({ onOpenInquiry }) {
  return (
    <section className="bg-[#0f0f0f] py-28 md:py-36 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-12 bg-[#c9a84c]" />
            <span className="text-[#c9a84c] text-sm font-medium tracking-[0.3em] uppercase">Categories</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              What Are You<br />Looking For?
            </h2>
            <p className="text-white/40 text-lg max-w-md">
              Select a category or submit an inquiry — we'll track down exactly what you need.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              onClick={onOpenInquiry}
              className="group relative overflow-hidden cursor-pointer aspect-[4/3]"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute inset-0 border border-white/[0.06] group-hover:border-[#c9a84c]/30 transition-colors duration-500" />
              
              <div className="relative h-full flex flex-col justify-end p-6">
                <cat.icon className="w-8 h-8 text-[#c9a84c] mb-3 group-hover:scale-110 transition-transform duration-500" />
                <h3 className="text-white font-semibold text-xl">{cat.name}</h3>
                <p className="text-white/40 text-sm mt-1 group-hover:text-white/60 transition-colors duration-500">
                  {cat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}