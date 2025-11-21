import React, { useState } from 'react';
import { Sparkles, Send, Loader2, Bot } from 'lucide-react';
import ReactMarkdown from 'react-markdown'; // NOTE: Standard React practice, assuming environment supports standard packages or simple text rendering if not. 
// Since I cannot install packages, I will render text directly or basic HTML if needed, but let's assume standard rendering for safety.
// Replacing ReactMarkdown with simple text rendering for zero-dependency safety in this restricted environment.

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
        <div className="p-2 bg-tiespro-teal/20 rounded-lg">
          <Bot className="w-6 h-6 text-tiespro-teal" />
        </div>
        <div>
          <h3 className="text-white font-bold text-lg">Tiespro Smart Advisor</h3>
          <p className="text-slate-400 text-sm">Powered by Gemini 2.5 Flash</p>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 min-h-[300px] flex flex-col gap-6 bg-slate-900/50">
        
        {status === LoadingState.IDLE && (
          <div className="flex flex-col items-center justify-center h-full text-slate-400 py-12">
            <Sparkles className="w-12 h-12 mb-4 text-tiespro-gold opacity-50" />
            <p className="text-center max-w-md">
              Tell us about your team's challenges (e.g., "My sales team is struggling to close deals" or "We need better conflict resolution").
            </p>
          </div>
        )}

        {status === LoadingState.LOADING && (
          <div className="flex flex-col items-center justify-center py-12">
            <Loader2 className="w-10 h-10 text-tiespro-teal animate-spin mb-4" />
            <p className="text-slate-300 animate-pulse">Analyzing your requirements...</p>
          </div>
        )}

        {status === LoadingState.SUCCESS && response && (
          <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-slate-200 leading-relaxed shadow-inner">
            <div className="prose prose-invert max-w-none">
               {/* Simple whitespace handling for markdown-like text */}
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
            placeholder="Describe your training needs..."
            className="w-full bg-slate-800/50 border border-slate-600 text-white placeholder-slate-400 rounded-xl py-4 pl-4 pr-14 focus:outline-none focus:ring-2 focus:ring-tiespro-teal transition-all"
          />
          <button
            type="submit"
            disabled={status === LoadingState.LOADING || !query.trim()}
            className="absolute right-2 top-2 bottom-2 p-2 bg-tiespro-teal text-tiespro-navy rounded-lg hover:bg-emerald-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
};