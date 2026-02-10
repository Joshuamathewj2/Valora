import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';

export const Hero = ({ onPartnerClick, onTalentClick }: { onPartnerClick: () => void, onTalentClick: () => void }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-black">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1762278804729-13d330fad71a" 
          alt="Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-8xl font-black text-white leading-tight tracking-tighter mb-6">
            EMPOWERING <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] to-cyan-400">DISABILITY</span> TALENT.
          </h1>
          <p className="max-w-2xl mx-auto text-xl md:text-2xl text-gray-400 mb-10 leading-relaxed">
            Valora is the leading global advisory and recruitment firm dedicated to connecting world-class disability talent with forward-thinking organizations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={onPartnerClick}
              className="bg-[#00FFFF] text-black px-10 py-5 font-bold text-lg hover:bg-cyan-400 transition-all duration-300 flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(0,255,255,0.3)]"
            >
              Partner with Us
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={onTalentClick}
              className="border-2 border-[#00FFFF] text-[#00FFFF] px-10 py-5 font-bold text-lg hover:bg-[#00FFFF]/10 transition-all duration-300"
            >
              Find Opportunities
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative lines */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00FFFF]/50 to-transparent" />
    </section>
  );
};
