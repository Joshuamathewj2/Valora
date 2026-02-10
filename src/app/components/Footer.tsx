import React from 'react';
import { motion } from 'motion/react';

const partners = [
  'TechCorp', 'Innova', 'Global Solutions', 'Future Soft', 'Core Link', 'Nexa'
];

export const Partners = () => {
  return (
    <section id="partners" className="py-16 bg-black border-b border-[#00FFFF]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 font-bold uppercase tracking-[0.3em] mb-12">Trusted by the best</p>
        <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
           {partners.map((partner) => (
             <span key={partner} className="text-3xl font-black text-white hover:text-[#00FFFF] cursor-default transition-colors">
               {partner}
             </span>
           ))}
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-[#00FFFF]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <span className="text-3xl font-bold tracking-tighter text-white">
              VAL<span className="text-[#00FFFF]">ORA</span>
            </span>
            <p className="mt-6 text-gray-500 leading-relaxed">
              Global leadership in disability inclusion and recruitment. Redefining what's possible.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Explore</h4>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#" className="hover:text-[#00FFFF] transition-colors">Find Talent</a></li>
              <li><a href="#" className="hover:text-[#00FFFF] transition-colors">Job Board</a></li>
              <li><a href="#" className="hover:text-[#00FFFF] transition-colors">Consulting</a></li>
              <li><a href="#" className="hover:text-[#00FFFF] transition-colors">Training</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#" className="hover:text-[#00FFFF] transition-colors">Insights</a></li>
              <li><a href="#" className="hover:text-[#00FFFF] transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-[#00FFFF] transition-colors">Newsletter</a></li>
              <li><a href="#" className="hover:text-[#00FFFF] transition-colors">Events</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-500">
              <li>hello@valora.org</li>
              <li>+1 (555) VALORA-0</li>
              <li>San Francisco, CA</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © 2026 Valora Inclusion Group. All rights reserved.
          </p>
          <div className="flex gap-6 text-gray-600 text-sm">
            <a href="#" className="hover:text-[#00FFFF]">Privacy Policy</a>
            <a href="#" className="hover:text-[#00FFFF]">Accessibility Statement</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
