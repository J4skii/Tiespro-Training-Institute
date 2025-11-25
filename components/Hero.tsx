import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  CheckCircle, 
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

      <div className="container mx-auto px-4 relative z-10 h-full py-12 pb-40 flex flex-col items-center justify-center">
        
        {/* --- BRAND LOGO RECONSTRUCTION START --- */}
        {/* Changed to bg-white so the Blue text in the logo is visible against the Blue Hero background */}
        <div className="w-full max-w-3xl bg-white rounded-2xl p-6 md:p-10 mb-10 text-center shadow-2xl relative overflow-hidden">
            
            {/* 1. Cap Icon */}
            <div className="relative inline-block mb-1">
                <GraduationCap className="w-12 h-12 md:w-16 md:h-16 text-tiespro-navy" />
            </div>

            {/* 2. Main Text */}
            <h1 className="text-4xl md:text-6xl font-sung font-bold text-tiespro-gold tracking-wider mb-0 drop-shadow-sm leading-none">
                TIESPRO
            </h1>

            {/* 3. Subtitle */}
            <h2 className="text-sm md:text-xl font-display font-bold text-tiespro-gold uppercase tracking-[0.2em] mb-4 inline-block pb-2">
                TRAINING INSTITUTE
            </h2>

            {/* 4. Slogan Bar */}
            <div className="w-full max-w-lg mx-auto flex items-center gap-4 mb-4 opacity-100">
                <div className="h-[2px] bg-tiespro-navy flex-grow"></div>
                <span className="text-tiespro-navy px-2 text-[10px] md:text-xs font-bold font-serif italic whitespace-nowrap">
                    Journey of excellence since 2005
                </span>
                <div className="h-[2px] bg-tiespro-navy flex-grow"></div>
            </div>

            {/* 5. Icon Strip */}
            <div className="flex flex-wrap justify-center items-center gap-3 md:gap-5 text-tiespro-gold mb-4">
                <Car className="w-5 h-5 md:w-6 md:h-6" />
                <Briefcase className="w-5 h-5 md:w-6 md:h-6" />
                <Truck className="w-5 h-5 md:w-6 md:h-6" />
                <Landmark className="w-5 h-5 md:w-6 md:h-6" />
                <TrainFront className="w-5 h-5 md:w-6 md:h-6" />
                <Tractor className="w-5 h-5 md:w-6 md:h-6" />
                <GraduationCap className="w-5 h-5 md:w-6 md:h-6" />
                <Bus className="w-5 h-5 md:w-6 md:h-6" />
                <BookOpen className="w-5 h-5 md:w-6 md:h-6" />
                <Plane className="w-5 h-5 md:w-6 md:h-6" />
            </div>

            {/* 6. Tagline under icons */}
            <p className="text-tiespro-navy font-bold font-serif text-sm md:text-lg">
                Equipping The Nation Through Education
            </p>
        </div>
        {/* --- BRAND LOGO RECONSTRUCTION END --- */}

        
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
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
        
      </div>

      {/* Stats Bar - Bottom of Hero */}
      <div className="absolute bottom-0 left-0 w-full bg-tiespro-navy/95 backdrop-blur-md border-t border-tiespro-gold/30 z-20">
          <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-700/50">
                  <div className="py-6 px-4 text-center md:text-left flex flex-col justify-center">
                      <p className="text-3xl md:text-4xl font-display font-bold text-tiespro-gold mb-1">
                          <Counter end={10} suffix="+" />
                      </p>
                      <p className="text-white text-[10px] md:text-xs font-bold uppercase tracking-widest">Number of Facilitators</p>
                  </div>
                  <div className="py-6 px-4 text-center md:text-left flex flex-col justify-center">
                      <p className="text-3xl md:text-4xl font-display font-bold text-tiespro-gold mb-1">
                          <Counter end={800} suffix="+" />
                      </p>
                      <p className="text-white text-[10px] md:text-xs font-bold uppercase tracking-widest">Learners Trained</p>
                  </div>
                  <div className="py-6 px-4 text-center md:text-left flex flex-col justify-center">
                      <p className="text-3xl md:text-4xl font-display font-bold text-tiespro-gold mb-1">
                          <Counter end={9} suffix="+" />
                      </p>
                      <p className="text-white text-[10px] md:text-xs font-bold uppercase tracking-widest">Accredited Qualifications</p>
                  </div>
                  <div className="py-6 px-4 text-center md:text-left flex flex-col justify-center">
                      <p className="text-3xl md:text-4xl font-display font-bold text-tiespro-gold mb-1">
                          <Counter end={98} suffix="%" />
                      </p>
                      <p className="text-white text-[10px] md:text-xs font-bold uppercase tracking-widest">Pass Rate</p>
                  </div>
              </div>
          </div>
      </div>
    </section>
  );
};