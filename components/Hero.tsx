import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  CheckCircle, 
  Shield, 
  GraduationCap, 
  Car, 
  Truck, 
  Landmark, 
  TrainFront, 
  Tractor, 
  Bus, 
  BookOpen, 
  Plane, 
  Briefcase
} from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

const Counter = ({ end, duration = 2000, suffix = '' }: { end: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = currentTime - startTime;
      
      // Ease out quart function for smooth animation
      const easeOutQuart = (x: number): number => 1 - Math.pow(1 - x, 4);
      
      const percentage = Math.min(progress / duration, 1);
      const easedProgress = easeOutQuart(percentage);
      
      setCount(Math.floor(easedProgress * end));

      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
};

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-tiespro-navy">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Placeholder for High Impact Logistics/Truck Image */}
        <img
          src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Professional Truck Driver and Logistics Fleet"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-tiespro-navy via-tiespro-navy/90 to-tiespro-navy/80"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 h-full py-12 flex flex-col items-center justify-center">
        
        {/* --- BRAND LOGO RECONSTRUCTION START --- */}
        {/* Changed to bg-white so the Blue text in the logo is visible against the Blue Hero background */}
        <div className="w-full max-w-4xl bg-white rounded-2xl p-8 md:p-12 mb-12 text-center shadow-2xl relative overflow-hidden">
            
            {/* 1. Cap Icon */}
            <div className="relative inline-block mb-2">
                <GraduationCap className="w-16 h-16 md:w-20 md:h-20 text-tiespro-navy" />
            </div>

            {/* 2. Main Text */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-tiespro-gold tracking-wider mb-0 drop-shadow-sm leading-none">
                TIESPRO
            </h1>

            {/* 3. Subtitle */}
            <h2 className="text-xl md:text-3xl font-display font-bold text-tiespro-gold uppercase tracking-[0.2em] mb-6 inline-block pb-2">
                TRAINING INSTITUTE
            </h2>

            {/* 4. Slogan Bar */}
            <div className="w-full max-w-2xl mx-auto flex items-center gap-4 mb-6 opacity-100">
                <div className="h-[3px] bg-tiespro-navy flex-grow"></div>
                <span className="text-tiespro-navy px-2 text-xs md:text-sm font-bold font-serif italic whitespace-nowrap">
                    Journey of excellence since 2005
                </span>
                <div className="h-[3px] bg-tiespro-navy flex-grow"></div>
            </div>

            {/* 5. Icon Strip */}
            <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6 text-tiespro-gold mb-6">
                <Car className="w-6 h-6 md:w-8 md:h-8" />
                <Briefcase className="w-6 h-6 md:w-8 md:h-8" />
                <Truck className="w-6 h-6 md:w-8 md:h-8" />
                <Landmark className="w-6 h-6 md:w-8 md:h-8" />
                <TrainFront className="w-6 h-6 md:w-8 md:h-8" />
                <Tractor className="w-6 h-6 md:w-8 md:h-8" />
                <GraduationCap className="w-6 h-6 md:w-8 md:h-8" />
                <Bus className="w-6 h-6 md:w-8 md:h-8" />
                <BookOpen className="w-6 h-6 md:w-8 md:h-8" />
                <Plane className="w-6 h-6 md:w-8 md:h-8" />
            </div>

            {/* 6. Tagline under icons */}
            <p className="text-tiespro-navy font-bold font-serif text-lg md:text-2xl">
                Equipping The Nation Through Education
            </p>
        </div>
        {/* --- BRAND LOGO RECONSTRUCTION END --- */}

        
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a href="#qualifications" className="px-8 py-4 bg-tiespro-gold text-tiespro-navy font-bold rounded hover:bg-yellow-600 hover:text-white transition-all flex items-center justify-center gap-2 group shadow-lg shadow-yellow-900/20 uppercase tracking-wide text-sm">
              Explore Qualifications
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button 
              onClick={onCtaClick}
              className="px-8 py-4 border-2 border-tiespro-gold text-tiespro-gold font-bold rounded hover:bg-tiespro-gold/10 transition-all uppercase tracking-wide text-sm"
            >
              Consult AI Advisor
            </button>
        </div>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-slate-300 text-sm font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-tiespro-green" />
              <span>100% Black Owned</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-tiespro-green" />
              <span>ISO 9000:2000 Aligned</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-tiespro-green" />
              <span>Investors in People</span>
            </div>
        </div>
        
        {/* 
          STATS BLOCK - COMMENTED OUT AS REQUESTED 
          (Ready for re-activation with corrected Gold styling)
        */}
        {/* 
        <div className="absolute bottom-0 right-0 z-20 bg-tiespro-navy/95 backdrop-blur-md border border-slate-700 p-6 md:p-8 rounded-tl-3xl shadow-2xl w-full max-w-[600px]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="space-y-1 text-center md:text-left">
                        <p className="text-tiespro-gold font-display font-bold text-3xl md:text-4xl">
                        <Counter end={12} suffix="+" />
                        </p>
                        <p className="text-white font-bold uppercase text-[10px] tracking-widest">Expert Facilitators</p>
                        <p className="text-slate-500 text-[10px]">Accredited</p>
                </div>
                <div className="space-y-1 text-center md:text-left">
                        <p className="text-tiespro-gold font-display font-bold text-3xl md:text-4xl">
                        <Counter end={15} suffix="k+" />
                        </p>
                        <p className="text-white font-bold uppercase text-[10px] tracking-widest">Learners Trained</p>
                        <p className="text-slate-500 text-[10px]">SADC Region</p>
                </div>
                <div className="space-y-1 text-center md:text-left">
                        <p className="text-tiespro-gold font-display font-bold text-3xl md:text-4xl">
                        <Counter end={20} suffix="+" />
                        </p>
                        <p className="text-white font-bold uppercase text-[10px] tracking-widest">Accredited Courses</p>
                        <p className="text-slate-500 text-[10px]">TETA & QCTO</p>
                </div>
                <div className="space-y-1 text-center md:text-left">
                        <p className="text-tiespro-gold font-display font-bold text-3xl md:text-4xl">
                        <Counter end={98} suffix="%" />
                        </p>
                        <p className="text-white font-bold uppercase text-[10px] tracking-widest">Pass Rate</p>
                        <p className="text-slate-500 text-[10px]">Excellence</p>
                </div>
            </div>
        </div> 
        */}
        
      </div>
    </section>
  );
};