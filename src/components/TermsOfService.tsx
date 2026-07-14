import React from 'react';
import { FileText, AlertCircle } from 'lucide-react';

const TermsOfService: React.FC = () => {
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6">
      {/* Visual Notice Header */}
      <div className="flex items-start gap-4 p-5 bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/50 rounded-2xl mb-12 animate-fade-in">
        <AlertCircle className="h-6 w-6 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
        <div className="space-y-1.5">
          <h4 className="text-sm font-bold text-slate-900 dark:text-white">Development Environment Notice</h4>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
            This is a placeholder legal page for ORI Agent. The final approved legal terms of service text will be drafted by our legal team and integrated separately before the public launch.
          </p>
        </div>
      </div>

      {/* Main Text Content */}
      <article className="space-y-8 select-none">
        <div className="space-y-3 border-b border-slate-200 dark:border-slate-800 pb-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 tracking-wider uppercase">
            <FileText className="h-4.5 w-4.5" />
            <span>Service Terms</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Terms of Service
          </h1>
          <p className="text-xs text-slate-400 dark:text-slate-500 font-mono font-semibold uppercase">
            LAST MODIFIED: JULY 14, 2026
          </p>
        </div>

        <section className="space-y-4">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">1. Service Subscription</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            [Placeholder Content] This section will cover terms for user workspaces, active agent definitions, conversation limits, API rates, and billing cycles.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">2. Acceptable Use Policy</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            [Placeholder Content] Details regarding appropriate applications of autonomous customer specialist agents, prohibiting toxic model prompts, scraping activities, or security bypass.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">3. System Limitations</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            [Placeholder Content] Disclaimer of guarantees for model reasoning or third-party API downtimes, specifying that development features are subject to change.
          </p>
        </section>
      </article>
    </div>
  );
};

export default TermsOfService;
