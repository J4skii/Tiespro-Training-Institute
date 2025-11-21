import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <div className="space-y-8">
            <div>
              <h2 className="text-tiespro-gold font-bold tracking-widest uppercase text-sm mb-2">Contact Us</h2>
              <h3 className="text-4xl font-display font-bold text-tiespro-navy mb-6">Get in Touch</h3>
              <p className="text-slate-600 text-lg">
                Ready to upskill your workforce? Contact our accreditation specialists to discuss TETA compliant training plans.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100 hover:border-tiespro-gold/50 transition-colors">
                <div className="p-3 bg-tiespro-navy text-white rounded-lg">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-tiespro-navy">Phone</h4>
                  <p className="text-slate-600 font-mono">{CONTACT_INFO.phone}</p>
                  <p className="text-slate-500 text-sm">Cell: {CONTACT_INFO.cell}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100 hover:border-tiespro-gold/50 transition-colors">
                <div className="p-3 bg-tiespro-navy text-white rounded-lg">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-tiespro-navy">Email</h4>
                  <p className="text-slate-600">{CONTACT_INFO.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100 hover:border-tiespro-gold/50 transition-colors">
                <div className="p-3 bg-tiespro-navy text-white rounded-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-tiespro-navy">Head Office</h4>
                  <p className="text-slate-600 max-w-xs">{CONTACT_INFO.address}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-tiespro-navy p-8 md:p-10 rounded-2xl text-white shadow-2xl">
             <h4 className="text-2xl font-bold mb-6 border-b border-slate-700 pb-4">Send us a message</h4>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded bg-slate-800 border border-slate-700 focus:border-tiespro-gold focus:ring-1 focus:ring-tiespro-gold outline-none transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase">Phone</label>
                  <input type="tel" className="w-full px-4 py-3 rounded bg-slate-800 border border-slate-700 focus:border-tiespro-gold focus:ring-1 focus:ring-tiespro-gold outline-none transition-all" placeholder="082 123 4567" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded bg-slate-800 border border-slate-700 focus:border-tiespro-gold focus:ring-1 focus:ring-tiespro-gold outline-none transition-all" placeholder="john@company.co.za" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase">Training Interest</label>
                <select className="w-full px-4 py-3 rounded bg-slate-800 border border-slate-700 focus:border-tiespro-gold focus:ring-1 focus:ring-tiespro-gold outline-none transition-all text-slate-300">
                  <option>Professional Driving</option>
                  <option>Freight Handling & Logistics</option>
                  <option>Supply Chain Management</option>
                  <option>Legislative (First Aid/Fire)</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded bg-slate-800 border border-slate-700 focus:border-tiespro-gold focus:ring-1 focus:ring-tiespro-gold outline-none transition-all" placeholder="Tell us about your training requirements..."></textarea>
              </div>

              <button className="w-full py-4 bg-tiespro-gold text-tiespro-navy font-bold rounded hover:bg-yellow-600 hover:text-white transition-colors shadow-lg uppercase tracking-wide">
                Submit Enquiry
              </button>
            </form>
          </div>

        </div>
        
        {/* Map Placeholder */}
        <div className="mt-16 h-80 bg-slate-100 rounded-xl overflow-hidden relative border border-slate-200">
             <div className="absolute inset-0 flex items-center justify-center bg-slate-200/50">
                 <div className="text-center">
                     <MapPin className="w-10 h-10 text-tiespro-navy mx-auto mb-2" />
                     <p className="text-slate-500 font-bold">Google Map Embed Placeholder</p>
                     <p className="text-slate-400 text-sm">1 Mirka, 63 Eighth Avenue, Windermere, Durban</p>
                 </div>
             </div>
             {/* 
                Note for Developer: 
                Embed Google Map iframe here pointing to: 1 Mirka, 63 Eighth Avenue, Windermere, Durban, 4001
             */}
        </div>
      </div>
    </section>
  );
};