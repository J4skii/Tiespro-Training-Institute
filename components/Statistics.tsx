import React from 'react';
import { STATS } from '../constants';
import { Award } from 'lucide-react';

export const Statistics: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white relative z-20 border-b border-slate-200">
      <div className="container mx-auto px-4">
        
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
            <div>
                <h2 className="text-tiespro-orange font-bold tracking-widest uppercase text-sm mb-2">About Tiespro</h2>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-tiespro-navy mb-6">Empowering the Transport Industry</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                    Tiespro Training Institute is a premier Skills Development Provider dedicated to the Transport Sector. 
                    Established in June 2005, we aim to promote individuals and organizations through the strategic development of staff and management.
                </p>
                <p className="text-slate-600 leading-relaxed">
                   Our Quality Management System (QMS) is based on the <span className="font-semibold text-tiespro-navy">Investors in People</span> and <span className="font-semibold text-tiespro-navy">ISO 9000:2000</span> systems, ensuring that every training intervention delivers measurable results.
                </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
                {STATS.map((stat) => (
                    <div key={stat.id} className="bg-slate-50 p-6 rounded border-l-4 border-tiespro-orange shadow-sm">
                        <h4 className="text-3xl font-bold text-tiespro-navy font-display">{stat.value}</h4>
                        <p className="text-slate-800 font-bold text-sm uppercase mt-1">{stat.label}</p>
                        {stat.subLabel && <p className="text-slate-500 text-xs mt-1">{stat.subLabel}</p>}
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};