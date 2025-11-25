import React, { useState } from 'react';
import { Sparkles, Send, Loader2, Search } from 'lucide-react';
import { getTrainingRecommendations } from '../services/geminiService';
import { LoadingState } from '../types';

export const GeminiAdvisor: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setStatus(LoadingState.LOADING);
    setResponse(null);

    const result = await getTrainingRecommendations(query);
    setResponse(result);
    setStatus(LoadingState.SUCCESS);
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
      {/* Header */}
      <div className="bg-tiespro-navy p-6 border-b border-white/5 flex items-center gap-3">
        <div className="p-2 bg-tiespro-gold/20 rounded-lg">
          <Search className="w-6 h-6 text-tiespro-gold" />
        </div>
        <div>
          <h3 className="text-white font-bold text-lg">Tiespro Course Advisor</h3>
          <p className="text-slate-400 text-sm">Search our accredited qualification database</p>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 min-h-[300px] flex flex-col gap-6 bg-slate-900/50">
        
        {status === LoadingState.IDLE && (
          <div className="flex flex-col items-center justify-center h-full text-slate-400 py-12">
            <Sparkles className="w-12 h-12 mb-4 text-tiespro-gold opacity-50" />
            <p className="text-center max-w-md">
              Enter keywords to find courses (e.g., "Truck Driver", "Supply Chain", or "Freight Handling").
            </p>
          </div>
        )}

        {status === LoadingState.LOADING && (
          <div className="flex flex-col items-center justify-center py-12">
            <Loader2 className="w-10 h-10 text-tiespro-gold animate-spin mb-4" />
            <p className="text-slate-300 animate-pulse">Searching catalogue...</p>
          </div>
        )}

        {status === LoadingState.SUCCESS && response && (
          <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-slate-200 leading-relaxed shadow-inner">
            <div className="prose prose-invert max-w-none">
               {response.split('\n').map((line, i) => (
                 <p key={i} className="mb-2 min-h-[1rem]">{line}</p>
               ))}
            </div>
          </div>
        )}

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="mt-auto relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for qualifications..."
            className="w-full bg-slate-800/50 border border-slate-600 text-white placeholder-slate-400 rounded-xl py-4 pl-4 pr-14 focus:outline-none focus:ring-2 focus:ring-tiespro-gold transition-all"
          />
          <button
            type="submit"
            disabled={status === LoadingState.LOADING || !query.trim()}
            className="absolute right-2 top-2 bottom-2 p-2 bg-tiespro-gold text-tiespro-navy rounded-lg hover:bg-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
};