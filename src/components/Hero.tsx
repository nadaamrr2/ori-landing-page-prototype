import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { View } from '../App';

interface HeroProps {
  onNavigate: (view: View) => void;
  isDarkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ onNavigate, isDarkMode }) => {
  return (
    <div className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial glow */}
      <div className="hero-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Subtle Accent Badge */}
          <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/50 rounded-full px-3.5 py-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 mb-8 animate-fade-in">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Next-Generation AI Agent Platform</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6">
            AI agents built around <br className="hidden sm:inline" />
            what you know and what <br className="hidden sm:inline" />
            you <span className="gradient-text">need them to do.</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Create specialized AI agents grounded in your knowledge, guided by your instructions, and connected to the tools they need to get work done.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
            <button
              onClick={() => onNavigate('signup')}
              id="hero-cta-signup"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 group cursor-pointer"
            >
              <span>Get Started Free</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                const demoElement = document.getElementById('demo');
                if (demoElement) {
                  demoElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              id="hero-cta-demo"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-all cursor-pointer"
            >
              <span>See ORI in Action</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
