import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Partners } from './components/Footer';
import { Services } from './components/Services';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { PartnerFlow } from './components/PartnerFlow';
import { TalentFlow } from './components/TalentFlow';
import { AnimatePresence } from 'motion/react';

function App() {
  const [activeFlow, setActiveFlow] = useState<'partner' | 'talent' | null>(null);

  return (
    <div className="min-h-screen bg-black selection:bg-[#00FFFF] selection:text-black">
      <Header onJoinClick={() => setActiveFlow('talent')} />
      <main>
        <Hero 
          onPartnerClick={() => setActiveFlow('partner')} 
          onTalentClick={() => setActiveFlow('talent')} 
        />
        <Partners />
        <Services />
        <About />
        
        {/* Call to Action Section */}
        <section className="py-24 bg-black relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00FFFF]/30 to-transparent" />
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8">READY TO <span className="text-[#00FFFF]">TRANSFORM</span> YOUR ORGANIZATION?</h2>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              Join the movement towards a more inclusive and innovative future. Our experts are ready to help you navigate the journey.
            </p>
            <button 
              onClick={() => setActiveFlow('partner')}
              className="bg-[#00FFFF] text-black px-12 py-6 font-black text-xl hover:bg-cyan-400 transition-all duration-300 shadow-[0_0_30px_rgba(0,255,255,0.2)] hover:shadow-[0_0_50px_rgba(0,255,255,0.4)]"
            >
              GET STARTED NOW
            </button>
          </div>
        </section>
      </main>
      <Footer />

      <AnimatePresence>
        {activeFlow === 'partner' && (
          <PartnerFlow onClose={() => setActiveFlow(null)} />
        )}
        {activeFlow === 'talent' && (
          <TalentFlow onClose={() => setActiveFlow(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
