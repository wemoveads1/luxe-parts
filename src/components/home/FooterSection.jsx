import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function FooterSection({ onOpenInquiry }) {
  return (
    <footer className="bg-obsidian">
      {/* CTA Banner */}
      <div className="relative overflow-hidden border-t border-white/[0.05]">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.04] to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div>
            <p className="text-gold text-xs font-body font-semibold tracking-[0.35em] uppercase mb-4">Can't Find It?</p>
            <h2 className="font-heading text-4xl md:text-6xl text-white leading-tight">
              We'll Source<br />Any Part.
            </h2>
            <p className="text-white/30 font-body text-sm mt-4 max-w-sm leading-relaxed">
              Our network spans Europe, the Americas, and beyond. If it exists, we'll track it down.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onOpenInquiry}
            className="group flex items-center gap-4 bg-gold hover:bg-gold-light text-black font-body font-bold text-sm tracking-[0.1em] uppercase px-10 py-5 transition-all duration-300 glow-gold whitespace-nowrap"
          >
            Submit an Inquiry
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </div>
      </div>

      {/* Footer links */}
      <div className="border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 bg-gold flex items-center justify-center">
                  <span className="text-black font-heading font-black text-xs">LP</span>
                </div>
                <span className="text-white font-body font-semibold tracking-[0.15em] text-sm uppercase">Luxe Parts</span>
              </div>
              <p className="text-white/25 font-body text-xs leading-relaxed max-w-xs">
                Premium second-hand OEM parts for the world's most prestigious vehicles.
              </p>
            </div>

            <div>
              <h4 className="text-white font-body font-semibold text-xs tracking-[0.2em] uppercase mb-5">Navigate</h4>
              <div className="space-y-3">
                {["Brands", "Categories", "Process", "Reviews"].map(link => (
                  <button
                    key={link}
                    onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                    className="block text-white/25 hover:text-gold font-body text-xs tracking-wider transition-colors duration-300"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-body font-semibold text-xs tracking-[0.2em] uppercase mb-5">Contact</h4>
              <div className="space-y-3">
                {[
                  { Icon: Mail, text: "info@luxeparts.com" },
                  { Icon: Phone, text: "+1 (555) 987-6543" },
                  { Icon: MapPin, text: "Los Angeles, CA" },
                ].map(({ Icon, text }) => (
                  <div key={text} className="flex items-center gap-3">
                    <Icon className="w-3.5 h-3.5 text-gold/60" />
                    <span className="text-white/25 font-body text-xs">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-white/[0.04] flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-white/15 font-body text-xs">
              © {new Date().getFullYear()} Luxe Parts. All rights reserved.
            </p>
            <div className="flex gap-6">
              {["Privacy", "Terms"].map(l => (
                <button key={l} className="text-white/15 hover:text-white/30 font-body text-xs transition-colors">
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}