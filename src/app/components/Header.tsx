import React from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { motion } from 'motion/react';

export const Header = ({ onJoinClick }: { onJoinClick: () => void }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-[#00FFFF]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <span className="text-3xl font-bold tracking-tighter text-white">
              VAL<span className="text-[#00FFFF]">ORA</span>
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {['Services', 'Partners', 'Insights', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-[#00FFFF] transition-colors duration-300 px-3 py-2 text-sm font-medium"
                >
                  {item}
                </a>
              ))}
              <button 
                onClick={onJoinClick}
                className="bg-[#00FFFF] text-black px-6 py-2 font-bold hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105"
              >
                Join Us
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#00FFFF] hover:text-white transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black border-b border-[#00FFFF]/20"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['Services', 'Partners', 'Insights', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-[#00FFFF] block px-3 py-4 text-base font-medium border-b border-gray-900"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <button 
              onClick={() => {
                setIsOpen(false);
                onJoinClick();
              }}
              className="w-full mt-4 bg-[#00FFFF] text-black px-6 py-3 font-bold"
            >
              Join Us
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};
