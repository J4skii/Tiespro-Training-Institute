import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { GeminiAdvisor } from './components/GeminiAdvisor';
import { Statistics } from './components/Statistics';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [showAdvisor, setShowAdvisor] = useState(false);

  const toggleAdvisor = () => {
    setShowAdvisor(!showAdvisor);
    // Scroll to advisor if opening
    if (!showAdvisor) {
        setTimeout(() => {
            document.getElementById('ai-advisor')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans antialiased overflow-x-hidden">
      <Header onOpenAdvisor={toggleAdvisor} />
      
      <main className="flex-grow">
        <Hero onCtaClick={toggleAdvisor} />
        <Statistics />
        <Services />
        
        {/* AI Section Break */}
        <section id="ai-advisor" className="py-20 bg-tiespro-navy text-white relative overflow-hidden border-t border-slate-800">
          <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="container mx-auto px-4 relative z-10">
             <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                  <span className="text-tiespro-gold">Training Needs</span> Analysis
                </h2>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                  Not sure which accredited course fits your employees? Use our AI-powered consultant to find the perfect curriculum based on your operational requirements.
                </p>
             </div>
             <GeminiAdvisor />
          </div>
        </section>

        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;