import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronRight, ChevronLeft, CheckCircle2, Upload } from 'lucide-react';
import { useForm } from 'react-hook-form';

interface PartnerFlowProps {
  onClose: () => void;
}

export const PartnerFlow = ({ onClose }: PartnerFlowProps) => {
  const [step, setStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);
  const { register, handleSubmit, formState: { errors }, watch } = useForm();

  const onSubmit = (data: any) => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      console.log('Partner Data:', data);
      setIsSuccess(true);
    }
  };

  const prevStep = () => setStep(step - 1);

  const StepIndicator = ({ current }: { current: number }) => (
    <div className="flex items-center justify-center space-x-4 mb-8">
      {[1, 2, 3].map((s) => (
        <div key={s} className="flex items-center">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
            s === current 
              ? 'bg-[#00FFFF] text-black shadow-[0_0_15px_rgba(0,255,255,0.5)]' 
              : s < current 
                ? 'bg-cyan-900 text-white' 
                : 'bg-gray-800 text-gray-500'
          }`}>
            {s < current ? <CheckCircle2 size={20} /> : s}
          </div>
          {s < 3 && <div className={`w-12 h-1 mx-2 rounded ${s < current ? 'bg-[#00FFFF]' : 'bg-gray-800'}`} />}
        </div>
      ))}
    </div>
  );

  if (isSuccess) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/95 backdrop-blur-xl">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full text-center p-12 border border-[#00FFFF]/30 bg-gray-900/50"
        >
          <div className="w-20 h-20 bg-[#00FFFF] rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(0,255,255,0.4)]">
            <CheckCircle2 size={40} className="text-black" />
          </div>
          <h2 className="text-3xl font-black text-white mb-4">THANK YOU!</h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            Thank you for partnering with Valora. Our team will reach out shortly to discuss how we can build an inclusive future together.
          </p>
          <button 
            onClick={onClose}
            className="w-full bg-[#00FFFF] text-black py-4 font-black text-lg hover:bg-cyan-400 transition-all"
          >
            RETURN TO HOME
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/95 backdrop-blur-xl overflow-y-auto pt-20 pb-10">
      <button 
        onClick={onClose}
        className="absolute top-8 right-8 text-gray-500 hover:text-[#00FFFF] transition-colors p-2"
      >
        <X size={32} />
      </button>

      <div className="max-w-2xl w-full">
        <div className="flex justify-center mb-8">
          <span className="text-2xl font-black tracking-tighter text-white">
            VAL<span className="text-[#00FFFF]">ORA</span>
          </span>
        </div>
        <StepIndicator current={step} />
        
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="bg-gray-900/40 border border-[#00FFFF]/10 p-8 md:p-12 backdrop-blur-md"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-black text-white mb-2 uppercase tracking-tighter">Partner with Valora</h1>
                  <p className="text-gray-400 mb-8">Join us in building an inclusive workforce</p>
                </div>
                
                <div className="space-y-4">
                  <div className="group">
                    <label className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-2 group-focus-within:text-[#00FFFF] transition-colors">Organization Name</label>
                    <input 
                      {...register('orgName', { required: true })}
                      placeholder="Enter company name"
                      className="w-full bg-black/50 border border-gray-800 p-4 text-white focus:border-[#00FFFF] outline-none transition-all placeholder:text-gray-700"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="group">
                      <label className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Organization Type</label>
                      <select 
                        {...register('orgType', { required: true })}
                        className="w-full bg-black/50 border border-gray-800 p-4 text-white focus:border-[#00FFFF] outline-none appearance-none"
                      >
                        <option value="startup">Startup</option>
                        <option value="enterprise">Enterprise</option>
                        <option value="ngo">NGO</option>
                        <option value="govt">Govt</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="group">
                      <label className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Industry</label>
                      <input 
                        {...register('industry', { required: true })}
                        placeholder="e.g. Technology"
                        className="w-full bg-black/50 border border-gray-800 p-4 text-white focus:border-[#00FFFF] outline-none"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Company Website</label>
                    <input 
                      {...register('website')}
                      placeholder="https://"
                      className="w-full bg-black/50 border border-gray-800 p-4 text-white focus:border-[#00FFFF] outline-none"
                    />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Country / Region</label>
                    <input 
                      {...register('country', { required: true })}
                      placeholder="Enter location"
                      className="w-full bg-black/50 border border-gray-800 p-4 text-white focus:border-[#00FFFF] outline-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-black text-white mb-2 uppercase tracking-tighter">Partnership Intent</h1>
                  <p className="text-gray-400 mb-8">How would you like to partner with us?</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Partnership Type</label>
                    <select 
                      {...register('partnershipType', { required: true })}
                      className="w-full bg-black/50 border border-gray-800 p-4 text-white focus:border-[#00FFFF] outline-none"
                    >
                      <option value="hiring">Hiring</option>
                      <option value="advisory">Advisory</option>
                      <option value="consulting">Accessibility Consulting</option>
                      <option value="events">Events</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Estimated Hiring Volume</label>
                      <input 
                        type="number"
                        {...register('hiringVolume')}
                        placeholder="0"
                        className="w-full bg-black/50 border border-gray-800 p-4 text-white focus:border-[#00FFFF] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Roles of Interest</label>
                      <select 
                        {...register('rolesOfInterest')}
                        className="w-full bg-black/50 border border-gray-800 p-4 text-white focus:border-[#00FFFF] outline-none"
                      >
                        <option value="tech">Tech</option>
                        <option value="non-tech">Non-Tech</option>
                        <option value="internships">Internships</option>
                        <option value="leadership">Leadership</option>
                        <option value="mixed">Mixed</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Accessibility Readiness Level</label>
                    <div className="grid grid-cols-3 gap-2">
                      {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
                        <label key={level} className="relative">
                          <input 
                            type="radio" 
                            {...register('readiness')} 
                            value={level} 
                            className="peer sr-only"
                          />
                          <div className="text-center p-3 border border-gray-800 cursor-pointer peer-checked:bg-[#00FFFF] peer-checked:text-black peer-checked:border-[#00FFFF] text-gray-500 text-xs font-black uppercase transition-all">
                            {level}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-black text-white mb-2 uppercase tracking-tighter">Finalize Partnership</h1>
                  <p className="text-gray-400 mb-8">A representative will reach out to you within 24 hours.</p>
                </div>

                <div className="space-y-4">
                  <div className="group">
                    <label className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Contact Person Name</label>
                    <input 
                      {...register('contactName', { required: true })}
                      placeholder="John Doe"
                      className="w-full bg-black/50 border border-gray-800 p-4 text-white focus:border-[#00FFFF] outline-none"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Work Email</label>
                    <input 
                      type="email"
                      {...register('email', { required: true })}
                      placeholder="john@company.com"
                      className="w-full bg-black/50 border border-gray-800 p-4 text-white focus:border-[#00FFFF] outline-none"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Phone Number</label>
                    <input 
                      {...register('phone')}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-black/50 border border-gray-800 p-4 text-white focus:border-[#00FFFF] outline-none"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Message / Notes</label>
                    <textarea 
                      {...register('message')}
                      placeholder="Tell us more about your needs..."
                      rows={4}
                      className="w-full bg-black/50 border border-gray-800 p-4 text-white focus:border-[#00FFFF] outline-none resize-none"
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="mt-12 flex gap-4">
              {step > 1 && (
                <button 
                  type="button"
                  onClick={prevStep}
                  className="flex-1 border-2 border-[#00FFFF] text-[#00FFFF] py-4 font-black flex items-center justify-center gap-2 hover:bg-[#00FFFF]/5 transition-all"
                >
                  <ChevronLeft size={20} />
                  BACK
                </button>
              )}
              <button 
                type="submit"
                className="flex-[2] bg-[#00FFFF] text-black py-4 font-black flex items-center justify-center gap-2 hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(0,255,255,0.2)]"
              >
                {step === 3 ? 'SUBMIT PARTNERSHIP REQUEST' : 'CONTINUE'}
                {step < 3 && <ChevronRight size={20} />}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};
