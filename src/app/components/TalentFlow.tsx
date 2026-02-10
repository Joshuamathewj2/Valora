import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronRight, ChevronLeft, CheckCircle2, Upload, Link } from 'lucide-react';
import { useForm } from 'react-hook-form';

interface TalentFlowProps {
  onClose: () => void;
}

export const TalentFlow = ({ onClose }: TalentFlowProps) => {
  const [step, setStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);
  const { register, handleSubmit, formState: { errors }, watch } = useForm();

  const onSubmit = (data: any) => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      console.log('Talent Data:', data);
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
          <h2 className="text-3xl font-black text-white mb-4">SUCCESS!</h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            Your profile has been submitted. Valora will match you with relevant opportunities and reach out soon.
          </p>
          <button 
            onClick={onClose}
            className="w-full bg-[#00FFFF] text-black py-4 font-black text-lg hover:bg-cyan-400 transition-all"
          >
            EXPLORE VALORA
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
                  <h1 className="text-3xl font-black text-white mb-2 uppercase tracking-tighter">Apply for Opportunities</h1>
                  <p className="text-gray-400 mb-8">Let's get to know you</p>
                </div>
                
                <div className="space-y-4">
                  <div className="group">
                    <label className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-2 group-focus-within:text-[#00FFFF] transition-colors">Full Name</label>
                    <input 
                      {...register('fullName', { required: true })}
                      placeholder="Enter your full name"
                      className="w-full bg-black/50 border border-gray-800 p-4 text-white focus:border-[#00FFFF] outline-none transition-all placeholder:text-gray-700"
                    />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Email Address</label>
                    <input 
                      type="email"
                      {...register('email', { required: true })}
                      placeholder="you@example.com"
                      className="w-full bg-black/50 border border-gray-800 p-4 text-white focus:border-[#00FFFF] outline-none"
                    />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Country / City</label>
                    <input 
                      {...register('location', { required: true })}
                      placeholder="e.g. London, UK"
                      className="w-full bg-black/50 border border-gray-800 p-4 text-white focus:border-[#00FFFF] outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="group">
                      <label className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Highest Qualification</label>
                      <input 
                        {...register('qualification', { required: true })}
                        placeholder="e.g. Bachelor's Degree"
                        className="w-full bg-black/50 border border-gray-800 p-4 text-white focus:border-[#00FFFF] outline-none"
                      />
                    </div>
                    <div className="group">
                      <label className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Field of Interest</label>
                      <input 
                        {...register('interest', { required: true })}
                        placeholder="e.g. Data Science"
                        className="w-full bg-black/50 border border-gray-800 p-4 text-white focus:border-[#00FFFF] outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-black text-white mb-2 uppercase tracking-tighter">Skills & Preferences</h1>
                  <p className="text-gray-400 mb-8">What are you looking for?</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Primary Skills</label>
                    <input 
                      {...register('skills')}
                      placeholder="e.g. React, Python, UI Design"
                      className="w-full bg-black/50 border border-gray-800 p-4 text-white focus:border-[#00FFFF] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Experience Level</label>
                    <div className="grid grid-cols-3 gap-2">
                      {['Student', 'Fresher', 'Experienced'].map((lvl) => (
                        <label key={lvl} className="relative">
                          <input type="radio" {...register('experience')} value={lvl} className="peer sr-only" />
                          <div className="text-center p-3 border border-gray-800 cursor-pointer peer-checked:bg-[#00FFFF] peer-checked:text-black peer-checked:border-[#00FFFF] text-gray-500 text-xs font-black uppercase transition-all">
                            {lvl}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Opportunity Type</label>
                      <select 
                        {...register('opportunityType')}
                        className="w-full bg-black/50 border border-gray-800 p-4 text-white focus:border-[#00FFFF] outline-none"
                      >
                        <option value="internship">Internship</option>
                        <option value="full-time">Full-Time</option>
                        <option value="contract">Contract</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Preferred Mode</label>
                      <select 
                        {...register('workMode')}
                        className="w-full bg-black/50 border border-gray-800 p-4 text-white focus:border-[#00FFFF] outline-none"
                      >
                        <option value="remote">Remote</option>
                        <option value="hybrid">Hybrid</option>
                        <option value="onsite">Onsite</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-black text-white mb-2 uppercase tracking-tighter">Accessibility & Final Submission</h1>
                  <p className="text-gray-400 mb-8">We prioritize your specific needs.</p>
                </div>

                <div className="space-y-4">
                  <div className="group">
                    <label className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Disability Type (Optional)</label>
                    <input 
                      {...register('disabilityType')}
                      placeholder="e.g. Visual Impairment, Mobility"
                      className="w-full bg-black/50 border border-gray-800 p-4 text-white focus:border-[#00FFFF] outline-none"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Workplace Accommodations</label>
                    <textarea 
                      {...register('accommodations')}
                      placeholder="Screen readers, accessible desk, flexible hours, etc."
                      rows={3}
                      className="w-full bg-black/50 border border-gray-800 p-4 text-white focus:border-[#00FFFF] outline-none resize-none"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Resume Upload</label>
                    <div className="border-2 border-dashed border-gray-800 p-8 text-center hover:border-[#00FFFF]/50 transition-colors cursor-pointer bg-black/30">
                      <Upload className="mx-auto text-[#00FFFF] mb-2" size={32} />
                      <p className="text-gray-400 text-sm">Drop your resume here or <span className="text-[#00FFFF]">browse</span></p>
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">LinkedIn / Portfolio URL (Optional)</label>
                    <div className="relative">
                      <Link className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-700" size={18} />
                      <input 
                        {...register('portfolio')}
                        placeholder="https://linkedin.com/in/..."
                        className="w-full bg-black/50 border border-gray-800 p-4 pl-12 text-white focus:border-[#00FFFF] outline-none"
                      />
                    </div>
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
                {step === 3 ? 'SUBMIT APPLICATION' : 'CONTINUE'}
                {step < 3 && <ChevronRight size={20} />}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};
