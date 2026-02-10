import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Users, Lightbulb, TrendingUp } from 'lucide-react';

const services = [
  {
    title: 'Executive Search',
    description: 'We specialize in placing high-level disabled talent in leadership roles across global industries.',
    icon: Briefcase
  },
  {
    title: 'Consulting & Strategy',
    description: 'Helping organizations build robust, inclusive cultures through strategic disability inclusion planning.',
    icon: Lightbulb
  },
  {
    title: 'Workforce Solutions',
    description: 'End-to-end recruitment solutions designed to diversify your workforce with skilled professionals.',
    icon: Users
  },
  {
    title: 'Growth Advisory',
    description: 'Training and development programs to empower your teams and scale inclusion initiatives.',
    icon: TrendingUp
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">OUR <span className="text-[#00FFFF]">SERVICES</span></h2>
          <div className="h-1 w-20 bg-[#00FFFF] mx-auto mb-8" />
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We bridge the gap between extraordinary talent and inclusive organizations through specialized services tailored for impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 border border-[#00FFFF]/10 bg-gray-900/30 hover:border-[#00FFFF]/50 transition-all duration-300 group"
            >
              <div className="mb-6 p-4 rounded-full border border-[#00FFFF]/20 w-fit group-hover:bg-[#00FFFF] group-hover:text-black transition-all duration-300">
                <service.icon size={32} className="text-[#00FFFF] group-hover:text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
