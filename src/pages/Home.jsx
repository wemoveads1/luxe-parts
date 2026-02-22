import React, { useState } from 'react';
import HeroSection from '../components/home/HeroSection';
import BrandsShowcase from '../components/home/BrandsShowcase';
import PartsCategories from '../components/home/PartsCategories';
import StatsSection from '../components/home/StatsSection';
import HowItWorks from '../components/home/HowItWorks';
import TestimonialsSection from '../components/home/TestimonialsSection';
import FooterSection from '../components/home/FooterSection';
import InquiryFormModal from '../components/home/InquiryFormModal';

export default function Home() {
  const [inquiryOpen, setInquiryOpen] = useState(false);

  const openInquiry = () => setInquiryOpen(true);
  const closeInquiry = () => setInquiryOpen(false);

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <HeroSection onOpenInquiry={openInquiry} />
      <BrandsShowcase />
      <PartsCategories onOpenInquiry={openInquiry} />
      <StatsSection />
      <HowItWorks />
      <TestimonialsSection />
      <FooterSection onOpenInquiry={openInquiry} />
      <InquiryFormModal isOpen={inquiryOpen} onClose={closeInquiry} />
    </div>
  );
}