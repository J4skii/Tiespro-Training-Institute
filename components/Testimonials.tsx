import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
           <h2 className="text-tiespro-teal font-bold tracking-widest uppercase text-sm mb-2">Success Stories</h2>
           <h3 className="text-3xl md:text-4xl font-bold text-tiespro-navy">Trusted by Industry Leaders</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div key={item.id} className="bg-slate-50 p-8 rounded-2xl relative hover:-translate-y-1 transition-transform duration-300">
              <Quote className="absolute top-6 right-6 w-10 h-10 text-tiespro-teal/20" />
              <p className="text-slate-600 italic mb-8 relative z-10">"{item.content}"</p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-tiespro-teal/30"
                />
                <div>
                  <h4 className="font-bold text-tiespro-navy text-sm">{item.name}</h4>
                  <p className="text-xs text-slate-500">{item.role}, {item.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Client Logos Strip (Simulated) */}
        <div className="mt-20 pt-10 border-t border-slate-100 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
                <span className="text-xl font-bold text-slate-400">Google</span>
                <span className="text-xl font-bold text-slate-400">Amazon</span>
                <span className="text-xl font-bold text-slate-400">Microsoft</span>
                <span className="text-xl font-bold text-slate-400">Deloitte</span>
                <span className="text-xl font-bold text-slate-400">Siemens</span>
            </div>
        </div>
      </div>
    </section>
  );
};