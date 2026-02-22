import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function FooterSection({ onOpenInquiry }) {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/[0.06]">
      {/* CTA Banner */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Can't Find What You Need?
          </h2>
          <p className="text-white/40 text-lg mb-10 max-w-md mx-auto">
            Our sourcing network spans across Europe and the Americas. If it exists, we'll find it.
          </p>
          <button
            onClick={onOpenInquiry}
            className="inline-flex items-center bg-[#c9a84c] hover:bg-[#b8993e] text-black font-semibold px-10 py-4 text-base transition-all duration-300"
          >
            Submit an Inquiry
          </button>
        </div>
      </div>

      {/* Footer content */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-[#c9a84c] flex items-center justify-center">
                  <span className="text-black font-bold text-sm">LP</span>
                </div>
                <span className="text-white font-semibold tracking-wide">LUXE PARTS</span>
              </div>
              <p className="text-white/30 text-sm leading-relaxed">
                Premium second-hand OEM parts for luxury vehicles. Authenticated, inspected, and guaranteed.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">Quick Links</h4>
              <div className="space-y-2">
                {["Brands", "Categories", "How It Works", "Testimonials"].map(link => (
                  <button
                    key={link}
                    onClick={() => document.getElementById(link.toLowerCase().replace(/\s+/g, '-'))?.scrollIntoView({ behavior: 'smooth' })}
                    className="block text-white/30 hover:text-[#c9a84c] text-sm transition-colors duration-300"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-white/30 text-sm">
                  <Mail className="w-4 h-4 text-[#c9a84c]" />
                  info@luxeparts.com
                </div>
                <div className="flex items-center gap-3 text-white/30 text-sm">
                  <Phone className="w-4 h-4 text-[#c9a84c]" />
                  +1 (555) 987-6543
                </div>
                <div className="flex items-center gap-3 text-white/30 text-sm">
                  <MapPin className="w-4 h-4 text-[#c9a84c]" />
                  Los Angeles, CA
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/[0.04] flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/20 text-xs">
              © {new Date().getFullYear()} Luxe Parts. All rights reserved.
            </p>
            <div className="flex gap-6">
              {["Privacy Policy", "Terms of Service"].map(link => (
                <button key={link} className="text-white/20 hover:text-white/40 text-xs transition-colors">
                  {link}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}