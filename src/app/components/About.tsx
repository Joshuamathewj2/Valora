import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-black border-y border-[#00FFFF]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 border-2 border-[#00FFFF]/30 rounded-lg transform translate-x-4 translate-y-4 -z-10" />
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1573878410167-308f26bc1e33" 
                alt="Our Mission" 
                className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-[#00FFFF]/10 mix-blend-overlay rounded-lg" />
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
              WHY <span className="text-[#00FFFF]">VALORA</span>?
            </h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Founded on the belief that disability is a strength, Valora (formerly Disability Talent) has pioneered a new approach to inclusion. We don't just fill roles; we build bridges.
              </p>
              <p>
                Our global network of professionals with disabilities brings unique perspectives, problem-solving skills, and resilience to the world's most innovative companies.
              </p>
              <div className="pt-6 grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-black text-[#00FFFF] mb-2">500+</div>
                  <div className="text-sm font-bold uppercase tracking-widest">Global Partners</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-[#00FFFF] mb-2">10k+</div>
                  <div className="text-sm font-bold uppercase tracking-widest">Talent Network</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
