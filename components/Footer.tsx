import React from 'react';
import { Truck, Linkedin, Facebook, Mail } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-tiespro-navy text-slate-400 py-16 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Truck className="w-8 h-8 text-tiespro-orange" />
              <span className="text-2xl font-display font-bold text-white uppercase">Tiespro</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Tiespro Training Institute is a 100% Black Owned, accredited skills development provider for the Transport and Logistics industry.
            </p>
            <div className="text-xs text-slate-500 space-y-1">
                <p>TETA: TETA06-157</p>
                <p>QCTO: 05-QCTO/AC-TTC250124162532</p>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-6">Qualifications</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#qualifications" className="hover:text-tiespro-orange transition-colors">Professional Driving</a></li>
              <li><a href="#qualifications" className="hover:text-tiespro-orange transition-colors">Freight Handling</a></li>
              <li><a href="#qualifications" className="hover:text-tiespro-orange transition-colors">Supply Chain</a></li>
              <li><a href="#qualifications" className="hover:text-tiespro-orange transition-colors">Transport Clerk</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-6">Specialized</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#specialized" className="hover:text-tiespro-orange transition-colors">Dangerous Goods</a></li>
              <li><a href="#specialized" className="hover:text-tiespro-orange transition-colors">First Aid & Fire</a></li>
              <li><a href="#specialized" className="hover:text-tiespro-orange transition-colors">Assessor Training</a></li>
              <li><a href="#specialized" className="hover:text-tiespro-orange transition-colors">Technical Trades</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                  <span className="text-white font-bold">T:</span>
                  <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-tiespro-orange transition-colors">{CONTACT_INFO.phone}</a>
              </li>
              <li className="flex items-start gap-3">
                  <span className="text-white font-bold">E:</span>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-tiespro-orange transition-colors">{CONTACT_INFO.email}</a>
              </li>
              <li className="text-slate-500 text-xs leading-relaxed">
                  {CONTACT_INFO.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs gap-4">
          <p>&copy; {new Date().getFullYear()} Tiespro Training Institute. All rights reserved.</p>
          <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">PAIA Manual</a>
          </div>
        </div>
      </div>
    </footer>
  );
};