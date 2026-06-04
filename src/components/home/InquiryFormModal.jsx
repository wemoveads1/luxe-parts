import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Camera, Loader2, CheckCircle, ArrowRight } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { base44 } from '@/api/base44Client';

const brands = ["Mercedes-Benz", "BMW", "Audi", "Porsche", "Bentley", "Rolls-Royce", "Maserati", "Jaguar", "Land Rover", "Lexus", "Other"];
const partCategories = ["Engine", "Transmission", "Suspension", "Brakes", "Electrical", "Interior", "Exterior", "Wheels & Tires", "Exhaust", "Other"];

const inputCls = "bg-white/[0.04] border-white/10 focus:border-gold/50 focus:ring-gold/10 text-white placeholder:text-white/20 font-body rounded-none h-11";
const labelCls = "text-white/40 font-body text-[11px] font-medium tracking-[0.15em] uppercase mb-1.5 block";

export default function InquiryFormModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    full_name: '', email: '', phone: '', brand: '', model: '', year: '',
    part_needed: '', part_category: '', additional_notes: '', photo_url: ''
  });
  const [uploading, setUploading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const set = (k, v) => setForm(p => ({ ...p, [k]: v }));

  const handlePhoto = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    const { file_url } = await base44.integrations.Core.UploadFile({ file });
    set('photo_url', file_url);
    setUploading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await base44.entities.PartInquiry.create(form);
    setSubmitting(false);
    setSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setForm({ full_name: '', email: '', phone: '', brand: '', model: '', year: '', part_needed: '', part_category: '', additional_notes: '', photo_url: '' });
    }, 400);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/75 backdrop-blur-md"
            onClick={handleClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto bg-[#0e0e0e] border border-white/[0.08] shadow-[0_40px_120px_rgba(0,0,0,0.8)]"
          >
            {/* Gold top bar */}
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-gold to-transparent" />

            {/* Header */}
            <div className="flex items-start justify-between px-8 pt-8 pb-6">
              <div>
                <h2 className="font-heading text-2xl md:text-3xl text-white font-bold">Find Your Part</h2>
                <p className="text-white/35 font-body text-xs mt-2 tracking-wide">
                  Fill in the details — we'll respond within 2 hours.
                </p>
              </div>
              <button
                onClick={handleClose}
                className="mt-1 w-8 h-8 flex items-center justify-center border border-white/10 hover:border-white/30 text-white/40 hover:text-white transition-all duration-300"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="px-8 pb-16 pt-8 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 border border-gold/30 bg-gold/[0.06] mb-6">
                  <CheckCircle className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white">Inquiry Received</h3>
                <p className="text-white/40 font-body text-sm mt-3 max-w-sm mx-auto leading-relaxed">
                  Our specialists are on it. Expect a detailed quote within 2 hours.
                </p>
                <button
                  onClick={handleClose}
                  className="mt-8 bg-gold hover:bg-gold-light text-black font-body font-bold text-xs tracking-[0.2em] uppercase px-8 py-3.5 transition-all duration-300"
                >
                  Close
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="px-8 pb-8 space-y-8">

                {/* Section: You */}
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-gold font-body text-[10px] font-bold tracking-[0.3em] uppercase">01 — Your Details</span>
                    <div className="flex-1 h-px bg-white/[0.05]" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label className={labelCls}>Full Name *</Label>
                      <Input value={form.full_name} onChange={e => set('full_name', e.target.value)} required placeholder="John Doe" className={inputCls} />
                    </div>
                    <div>
                      <Label className={labelCls}>Email *</Label>
                      <Input type="email" value={form.email} onChange={e => set('email', e.target.value)} required placeholder="john@example.com" className={inputCls} />
                    </div>
                    <div className="md:col-span-2">
                      <Label className={labelCls}>Phone</Label>
                      <Input value={form.phone} onChange={e => set('phone', e.target.value)} placeholder="+1 (555) 000-0000" className={inputCls} />
                    </div>
                  </div>
                </div>

                {/* Section: Vehicle */}
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-gold font-body text-[10px] font-bold tracking-[0.3em] uppercase">02 — Vehicle</span>
                    <div className="flex-1 h-px bg-white/[0.05]" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label className={labelCls}>Brand *</Label>
                      <Select value={form.brand} onValueChange={v => set('brand', v)}>
                        <SelectTrigger className={inputCls}>
                          <SelectValue placeholder="Select brand" />
                        </SelectTrigger>
                        <SelectContent>
                          {brands.map(b => <SelectItem key={b} value={b}>{b}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className={labelCls}>Model</Label>
                      <Input value={form.model} onChange={e => set('model', e.target.value)} placeholder="e.g. E63 AMG" className={inputCls} />
                    </div>
                    <div>
                      <Label className={labelCls}>Year</Label>
                      <Input value={form.year} onChange={e => set('year', e.target.value)} placeholder="e.g. 2019" className={inputCls} />
                    </div>
                  </div>
                </div>

                {/* Section: Part */}
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-gold font-body text-[10px] font-bold tracking-[0.3em] uppercase">03 — Part Details</span>
                    <div className="flex-1 h-px bg-white/[0.05]" />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <Label className={labelCls}>Category</Label>
                      <Select value={form.part_category} onValueChange={v => set('part_category', v)}>
                        <SelectTrigger className={inputCls}>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {partCategories.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className={labelCls}>What part do you need? *</Label>
                      <Textarea
                        value={form.part_needed}
                        onChange={e => set('part_needed', e.target.value)}
                        required
                        placeholder="Describe the part — include OEM number if known..."
                        rows={3}
                        className="bg-white/[0.04] border-white/10 focus:border-gold/50 focus:ring-gold/10 text-white placeholder:text-white/20 font-body rounded-none resize-none text-sm"
                      />
                    </div>
                    <div>
                      <Label className={labelCls}>Additional Notes</Label>
                      <Textarea
                        value={form.additional_notes}
                        onChange={e => set('additional_notes', e.target.value)}
                        placeholder="Condition preference, urgency, budget..."
                        rows={2}
                        className="bg-white/[0.04] border-white/10 focus:border-gold/50 focus:ring-gold/10 text-white placeholder:text-white/20 font-body rounded-none resize-none text-sm"
                      />
                    </div>

                    {/* Photo */}
                    <div>
                      <Label className={labelCls}>Photo of the Part</Label>
                      {form.photo_url ? (
                        <div className="relative group">
                          <img src={form.photo_url} alt="Part" className="w-full h-44 object-cover border border-white/10" />
                          <button
                            type="button"
                            onClick={() => set('photo_url', '')}
                            className="absolute top-3 right-3 w-7 h-7 bg-black/70 border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ) : (
                        <label className="flex flex-col items-center justify-center w-full h-28 border border-dashed border-white/10 hover:border-gold/25 bg-white/[0.02] hover:bg-gold/[0.02] transition-all duration-300 cursor-pointer group">
                          {uploading ? (
                            <Loader2 className="w-5 h-5 text-gold animate-spin" />
                          ) : (
                            <>
                              <Camera className="w-5 h-5 text-white/20 group-hover:text-gold/50 mb-2 transition-colors duration-300" />
                              <span className="text-white/25 font-body text-xs group-hover:text-white/40 transition-colors duration-300">
                                Upload a photo
                              </span>
                              <span className="text-white/10 font-body text-[10px] mt-1">
                                Helps us find the exact match
                              </span>
                            </>
                          )}
                          <input type="file" accept="image/*" onChange={handlePhoto} className="hidden" />
                        </label>
                      )}
                    </div>
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-3 bg-gold hover:bg-gold-light disabled:opacity-50 text-black font-body font-bold text-sm tracking-[0.15em] uppercase py-4 transition-all duration-300 glow-gold"
                >
                  {submitting ? (
                    <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</>
                  ) : (
                    <>Submit Inquiry <ArrowRight className="w-4 h-4" /></>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}