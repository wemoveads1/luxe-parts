import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload, Loader2, CheckCircle, Camera } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { base44 } from '@/api/base44Client';

const brands = ["Mercedes-Benz", "BMW", "Audi", "Porsche", "Bentley", "Rolls-Royce", "Maserati", "Jaguar", "Land Rover", "Lexus", "Other"];
const partCategories = ["Engine", "Transmission", "Suspension", "Brakes", "Electrical", "Interior", "Exterior", "Wheels & Tires", "Exhaust", "Other"];

export default function InquiryFormModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    full_name: '', email: '', phone: '', brand: '', model: '', year: '',
    part_needed: '', part_category: '', additional_notes: '', photo_url: ''
  });
  const [uploading, setUploading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field, value) => setForm(prev => ({ ...prev, [field]: value }));

  const handlePhotoUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    const { file_url } = await base44.integrations.Core.UploadFile({ file });
    handleChange('photo_url', file_url);
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
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#111] border border-white/10 shadow-2xl"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 bg-[#111] border-b border-white/[0.06] px-8 py-6 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">Find Your Part</h2>
                <p className="text-white/40 text-sm mt-1">Tell us what you need — we'll handle the rest</p>
              </div>
              <button onClick={handleClose} className="text-white/40 hover:text-white transition-colors p-2">
                <X className="w-5 h-5" />
              </button>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-12 text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-[#c9a84c]/10 border border-[#c9a84c]/20 mb-6">
                  <CheckCircle className="w-10 h-10 text-[#c9a84c]" />
                </div>
                <h3 className="text-2xl font-bold text-white">Inquiry Submitted</h3>
                <p className="text-white/50 mt-3 max-w-sm mx-auto">
                  Our team will review your request and get back to you within 2 hours with a quote.
                </p>
                <Button
                  onClick={handleClose}
                  className="mt-8 bg-[#c9a84c] hover:bg-[#b8993e] text-black font-semibold px-8 py-3 rounded-none"
                >
                  Close
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8 space-y-8">
                {/* Personal Info */}
                <div>
                  <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4 flex items-center gap-2">
                    <div className="h-[1px] w-4 bg-[#c9a84c]" />
                    Your Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-white/60 text-xs mb-2 block">Full Name *</Label>
                      <Input
                        value={form.full_name}
                        onChange={e => handleChange('full_name', e.target.value)}
                        required
                        placeholder="John Doe"
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-none focus:border-[#c9a84c] focus:ring-[#c9a84c]/20"
                      />
                    </div>
                    <div>
                      <Label className="text-white/60 text-xs mb-2 block">Email *</Label>
                      <Input
                        type="email"
                        value={form.email}
                        onChange={e => handleChange('email', e.target.value)}
                        required
                        placeholder="john@example.com"
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-none focus:border-[#c9a84c] focus:ring-[#c9a84c]/20"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label className="text-white/60 text-xs mb-2 block">Phone</Label>
                      <Input
                        value={form.phone}
                        onChange={e => handleChange('phone', e.target.value)}
                        placeholder="+1 (555) 000-0000"
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-none focus:border-[#c9a84c] focus:ring-[#c9a84c]/20"
                      />
                    </div>
                  </div>
                </div>

                {/* Vehicle Info */}
                <div>
                  <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4 flex items-center gap-2">
                    <div className="h-[1px] w-4 bg-[#c9a84c]" />
                    Vehicle Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label className="text-white/60 text-xs mb-2 block">Brand *</Label>
                      <Select value={form.brand} onValueChange={v => handleChange('brand', v)}>
                        <SelectTrigger className="bg-white/5 border-white/10 text-white rounded-none focus:border-[#c9a84c] focus:ring-[#c9a84c]/20">
                          <SelectValue placeholder="Select brand" />
                        </SelectTrigger>
                        <SelectContent>
                          {brands.map(b => <SelectItem key={b} value={b}>{b}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-white/60 text-xs mb-2 block">Model</Label>
                      <Input
                        value={form.model}
                        onChange={e => handleChange('model', e.target.value)}
                        placeholder="e.g. E63 AMG"
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-none focus:border-[#c9a84c] focus:ring-[#c9a84c]/20"
                      />
                    </div>
                    <div>
                      <Label className="text-white/60 text-xs mb-2 block">Year</Label>
                      <Input
                        value={form.year}
                        onChange={e => handleChange('year', e.target.value)}
                        placeholder="e.g. 2018"
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-none focus:border-[#c9a84c] focus:ring-[#c9a84c]/20"
                      />
                    </div>
                  </div>
                </div>

                {/* Part Info */}
                <div>
                  <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4 flex items-center gap-2">
                    <div className="h-[1px] w-4 bg-[#c9a84c]" />
                    Part Details
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <Label className="text-white/60 text-xs mb-2 block">Part Category</Label>
                      <Select value={form.part_category} onValueChange={v => handleChange('part_category', v)}>
                        <SelectTrigger className="bg-white/5 border-white/10 text-white rounded-none focus:border-[#c9a84c] focus:ring-[#c9a84c]/20">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {partCategories.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-white/60 text-xs mb-2 block">What Part Do You Need? *</Label>
                      <Textarea
                        value={form.part_needed}
                        onChange={e => handleChange('part_needed', e.target.value)}
                        required
                        placeholder="Describe the part you're looking for — include part numbers if you have them..."
                        rows={3}
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-none focus:border-[#c9a84c] focus:ring-[#c9a84c]/20 resize-none"
                      />
                    </div>
                    <div>
                      <Label className="text-white/60 text-xs mb-2 block">Additional Notes</Label>
                      <Textarea
                        value={form.additional_notes}
                        onChange={e => handleChange('additional_notes', e.target.value)}
                        placeholder="Any other details that might help us find the right part..."
                        rows={2}
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-none focus:border-[#c9a84c] focus:ring-[#c9a84c]/20 resize-none"
                      />
                    </div>

                    {/* Photo Upload */}
                    <div>
                      <Label className="text-white/60 text-xs mb-2 block">Photo of the Part</Label>
                      {form.photo_url ? (
                        <div className="relative group">
                          <img src={form.photo_url} alt="Part" className="w-full h-48 object-cover border border-white/10" />
                          <button
                            type="button"
                            onClick={() => handleChange('photo_url', '')}
                            className="absolute top-2 right-2 p-1 bg-black/60 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ) : (
                        <label className="flex flex-col items-center justify-center w-full h-32 border border-dashed border-white/10 hover:border-[#c9a84c]/30 bg-white/[0.02] hover:bg-[#c9a84c]/[0.02] transition-all duration-300 cursor-pointer">
                          {uploading ? (
                            <Loader2 className="w-6 h-6 text-[#c9a84c] animate-spin" />
                          ) : (
                            <>
                              <Camera className="w-6 h-6 text-white/30 mb-2" />
                              <span className="text-white/30 text-sm">Click to upload a photo</span>
                              <span className="text-white/15 text-xs mt-1">Helps us identify the exact part</span>
                            </>
                          )}
                          <input type="file" accept="image/*" onChange={handlePhotoUpload} className="hidden" />
                        </label>
                      )}
                    </div>
                  </div>
                </div>

                {/* Submit */}
                <div className="pt-4 border-t border-white/[0.06]">
                  <Button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-[#c9a84c] hover:bg-[#b8993e] text-black font-semibold py-6 rounded-none text-base transition-all duration-300"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      'Submit Inquiry'
                    )}
                  </Button>
                  <p className="text-white/20 text-xs text-center mt-4">
                    We'll get back to you within 2 hours with a quote.
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}