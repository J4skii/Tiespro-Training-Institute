import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle, Loader2, ExternalLink, AlertCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    interest: 'Professional Driving',
    message: ''
  });
  const [status, setStatus] = useState<'IDLE' | 'LOADING' | 'SUCCESS' | 'ERROR'>('IDLE');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('LOADING');
    setErrorMessage('');
    
    try {
      if (db) {
        // Real Firebase Submission
        await addDoc(collection(db, 'enquiries'), {
          ...formState,
          createdAt: serverTimestamp(),
          source: 'web_app',
          status: 'new'
        });
      } else {
        // Fallback Simulation (If Firebase keys aren't set yet)
        console.log("Simulating submission (Firebase not configured):", formState);
        await new Promise(resolve => setTimeout(resolve, 1500));
      }

      setStatus('SUCCESS');
      setFormState({ name: '', phone: '', email: '', interest: 'Professional Driving', message: '' });
    } catch (error) {
      console.error("Error submitting enquiry: ", error);
      setStatus('ERROR');
      setErrorMessage('Failed to connect to the database. Please verify your internet connection or call us directly.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT_INFO.address)}`;

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
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-slate-600 hover:text-tiespro-gold transition-colors">{CONTACT_INFO.email}</a>
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

          <div className="bg-tiespro-navy p-8 md:p-10 rounded-2xl text-white shadow-2xl relative overflow-hidden">
             {status === 'SUCCESS' ? (
                <div className="absolute inset-0 z-10 bg-tiespro-navy flex flex-col items-center justify-center text-center p-8 animate-in fade-in duration-500">
                    <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-green-900/20">
                        <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold font-display text-white mb-2">Message Sent!</h3>
                    <p className="text-slate-300 max-w-xs mx-auto mb-8">
                        Thank you for your enquiry. One of our training consultants will contact you shortly.
                    </p>
                    <button 
                        onClick={() => setStatus('IDLE')}
                        className="px-6 py-2 border border-tiespro-gold text-tiespro-gold rounded hover:bg-tiespro-gold hover:text-tiespro-navy transition-colors font-bold uppercase text-sm"
                    >
                        Send Another Message
                    </button>
                </div>
             ) : (
                <>
                <h4 className="text-2xl font-bold mb-6 border-b border-slate-700 pb-4">Send us a message</h4>
                
                {status === 'ERROR' && (
                    <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                        <p className="text-sm text-red-200">{errorMessage}</p>
                    </div>
                )}

                <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase">Full Name</label>
                    <input 
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        type="text" 
                        className="w-full px-4 py-3 rounded bg-slate-800 border border-slate-700 focus:border-tiespro-gold focus:ring-1 focus:ring-tiespro-gold outline-none transition-all" 
                        placeholder="John Doe" 
                    />
                    </div>
                    <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase">Phone</label>
                    <input 
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        required
                        type="tel" 
                        className="w-full px-4 py-3 rounded bg-slate-800 border border-slate-700 focus:border-tiespro-gold focus:ring-1 focus:ring-tiespro-gold outline-none transition-all" 
                        placeholder="082 123 4567" 
                    />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase">Email Address</label>
                    <input 
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        type="email" 
                        className="w-full px-4 py-3 rounded bg-slate-800 border border-slate-700 focus:border-tiespro-gold focus:ring-1 focus:ring-tiespro-gold outline-none transition-all" 
                        placeholder="john@company.co.za" 
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase">Training Interest</label>
                    <select 
                        name="interest"
                        value={formState.interest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded bg-slate-800 border border-slate-700 focus:border-tiespro-gold focus:ring-1 focus:ring-tiespro-gold outline-none transition-all text-slate-300"
                    >
                    <option>Professional Driving</option>
                    <option>Freight Handling & Logistics</option>
                    <option>Supply Chain Management</option>
                    <option>Legislative (First Aid/Fire)</option>
                    <option>Other</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase">Message</label>
                    <textarea 
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={4} 
                        className="w-full px-4 py-3 rounded bg-slate-800 border border-slate-700 focus:border-tiespro-gold focus:ring-1 focus:ring-tiespro-gold outline-none transition-all" 
                        placeholder="Tell us about your training requirements..."
                    ></textarea>
                </div>

                <button 
                    type="submit"
                    disabled={status === 'LOADING'}
                    className="w-full py-4 bg-tiespro-gold text-tiespro-navy font-bold rounded hover:bg-yellow-600 hover:text-white transition-colors shadow-lg uppercase tracking-wide flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {status === 'LOADING' ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Processing...
                        </>
                    ) : (
                        'Submit Enquiry'
                    )}
                </button>
                </form>
                </>
             )}
          </div>

        </div>
        
        {/* Map Placeholder */}
        <a 
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-16 h-80 bg-slate-100 rounded-xl overflow-hidden relative border border-slate-200 group cursor-pointer"
        >
             {/* Map Background Pattern */}
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1774&q=80')] bg-cover bg-center opacity-40 group-hover:opacity-50 transition-opacity"></div>
             <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/5 transition-colors"></div>
             
             <div className="absolute inset-0 flex items-center justify-center">
                 <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-slate-200 text-center transform group-hover:scale-105 transition-transform">
                     <div className="w-12 h-12 bg-tiespro-navy rounded-full flex items-center justify-center mx-auto mb-3 text-white">
                        <MapPin className="w-6 h-6" />
                     </div>
                     <p className="text-tiespro-navy font-bold text-lg mb-1">Visit our Durban Office</p>
                     <p className="text-slate-600 text-sm mb-3">{CONTACT_INFO.address}</p>
                     <span className="inline-flex items-center gap-2 text-xs font-bold text-tiespro-gold uppercase tracking-wider">
                        Open in Google Maps <ExternalLink className="w-3 h-3" />
                     </span>
                 </div>
             </div>
        </a>
      </div>
    </section>
  );
};