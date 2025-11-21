import React from 'react';
import { QUALIFICATIONS, SPECIALIZED_TRAINING } from '../constants';
import { FileText, CheckCircle2, ArrowRight } from 'lucide-react';

export const Services: React.FC = () => {
  // Group qualifications
  const legacy = QUALIFICATIONS.filter(q => q.category === 'Legacy SAQA');
  const qcto = QUALIFICATIONS.filter(q => q.category === 'QCTO Occupational');

  return (
    <section id="qualifications" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-tiespro-orange font-bold tracking-widest uppercase text-sm mb-2">Accredited Courses</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-tiespro-navy mb-6">Core Qualifications</h3>
          <p className="text-slate-600">
            Fully accredited interventions designed to close skills gaps and ensure compliance in the Transport & Logistics sector.
          </p>
        </div>

        {/* QCTO Section */}
        <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
                <div className="h-px bg-slate-300 flex-grow"></div>
                <h4 className="text-2xl font-display font-bold text-tiespro-navy px-4 py-2 bg-white border border-slate-200 rounded shadow-sm">
                    QCTO Occupational Certificates
                </h4>
                <div className="h-px bg-slate-300 flex-grow"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {qcto.map((course) => (
                    <div key={course.id} className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all border-t-4 border-tiespro-blue group">
                        <div className="flex justify-between items-start mb-4">
                            <span className="bg-tiespro-navy text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide">
                                SAQA {course.saqaId}
                            </span>
                            <span className="bg-tiespro-green/10 text-tiespro-green text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide">
                                NQF {course.nqfLevel}
                            </span>
                        </div>
                        <h5 className="text-lg font-bold text-tiespro-navy mb-3 group-hover:text-tiespro-orange transition-colors">
                            {course.title}
                        </h5>
                        <p className="text-slate-600 text-sm leading-relaxed mb-4">
                            {course.description}
                        </p>
                        
                    </div>
                ))}
            </div>
        </div>

        {/* Legacy Section */}
        <div className="mb-20">
            <div className="flex items-center gap-4 mb-8">
                <div className="h-px bg-slate-300 flex-grow"></div>
                <h4 className="text-2xl font-display font-bold text-tiespro-navy px-4 py-2 bg-white border border-slate-200 rounded shadow-sm">
                    Legacy SAQA Qualifications
                </h4>
                <div className="h-px bg-slate-300 flex-grow"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
                {legacy.map((course) => (
                    <div key={course.id} className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all border-l-4 border-slate-400 flex flex-col sm:flex-row gap-4 items-start">
                        <div className="p-3 bg-slate-100 rounded text-slate-500">
                            <FileText className="w-6 h-6" />
                        </div>
                        <div>
                             <div className="flex gap-2 mb-1">
                                <span className="text-xs font-bold text-slate-500">SAQA {course.saqaId}</span>
                                <span className="text-xs font-bold text-slate-300">•</span>
                                <span className="text-xs font-bold text-slate-500">NQF {course.nqfLevel}</span>
                            </div>
                            <h5 className="text-lg font-bold text-tiespro-navy mb-2">
                                {course.title}
                            </h5>
                            <p className="text-slate-600 text-sm">
                                {course.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Specialized Training Section */}
        <div id="specialized" className="bg-tiespro-navy rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-tiespro-orange opacity-10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
            <div className="relative z-10">
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-display font-bold mb-4">Specialized Training & Services</h3>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Beyond our core qualifications, we offer targeted skills programs and legislative training to ensure total workforce compliance.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {SPECIALIZED_TRAINING.map((category) => (
                        <div key={category.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                            <div className="mb-4 p-3 bg-tiespro-orange/20 rounded-lg inline-block">
                                {category.icon}
                            </div>
                            <h4 className="text-xl font-bold mb-4 text-tiespro-orange">{category.title}</h4>
                            <ul className="space-y-3">
                                {category.items.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                                        <CheckCircle2 className="w-4 h-4 text-tiespro-green mt-0.5 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};