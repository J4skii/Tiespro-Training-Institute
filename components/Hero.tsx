import React from 'react';
import { ArrowRight, CheckCircle, Shield } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-tiespro-navy">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Placeholder for High Impact Logistics/Truck Image */}
        <img
          src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Professional Truck Driver and Logistics Fleet"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-tiespro-navy via-tiespro-navy/95 to-tiespro-navy/40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-tiespro-green/30 bg-tiespro-green/10 text-tiespro-green text-xs font-bold uppercase tracking-wider">
            <Shield className="w-3 h-3" />
            Est. 2005 | TETA & QCTO Accredited
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[0.95]">
            DRIVING <br />
            <span className="text-tiespro-orange">LOGISTICS</span> <br />
            EXCELLENCE
          </h1>
          
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-xl border-l-4 border-tiespro-orange pl-6">
            Almost two decades of empowering the Transport Industry through world-class skills development. From professional driving to supply chain management.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="#qualifications" className="px-8 py-4 bg-tiespro-orange text-white font-bold rounded hover:bg-orange-600 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-orange-900/20 uppercase tracking-wide text-sm">
              Explore Qualifications
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button 
              onClick={onCtaClick}
              className="px-8 py-4 border border-slate-600 text-slate-300 font-bold rounded hover:bg-white/5 transition-all uppercase tracking-wide text-sm"
            >
              Consult AI Advisor
            </button>
          </div>

          <div className="pt-6 flex flex-wrap gap-x-6 gap-y-2 text-slate-500 text-sm font-medium">
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

        {/* Right Side Graphic - Abstract representation of Logistics/Structure */}
        <div className="hidden lg:block relative h-[600px]">
            <div className="absolute right-0 top-10 w-full max-w-md">
                 <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl border-4 border-white/10">
                    <img 
                        src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80" 
                        alt="Warehouse Operations" 
                        className="w-full h-auto"
                    />
                 </div>
                 <div className="absolute -bottom-12 -left-12 z-20 bg-tiespro-navy border border-slate-700 p-6 rounded-lg shadow-xl max-w-xs">
                    <p className="text-tiespro-orange font-display font-bold text-4xl mb-1">8+</p>
                    <p className="text-white font-bold uppercase text-sm">Registered Assessors</p>
                    <div className="w-12 h-1 bg-tiespro-green mt-4 mb-2"></div>
                    <p className="text-slate-400 text-xs">Industry experienced facilitators ensuring quality outcomes.</p>
                 </div>
            </div>
            {/* Background graphic elements */}
            <div className="absolute top-0 right-12 w-64 h-64 bg-tiespro-orange/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};