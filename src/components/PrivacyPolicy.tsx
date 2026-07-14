import React from 'react';
import { Shield, AlertCircle } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6">
      {/* Visual Notice Header */}
      <div className="flex items-start gap-4 p-5 bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/50 rounded-2xl mb-12 animate-fade-in">
        <AlertCircle className="h-6 w-6 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
        <div className="space-y-1.5">
          <h4 className="text-sm font-bold text-slate-900 dark:text-white">Development Environment Notice</h4>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
            This is a placeholder legal page for ORI Agent. The final approved legal privacy policy text will be drafted by our legal team and integrated separately before the public launch.
          </p>
        </div>
      </div>

      {/* Main Text Content */}
      <article className="space-y-8 select-none">
        <div className="space-y-3 border-b border-slate-200 dark:border-slate-800 pb-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 tracking-wider uppercase">
            <Shield className="h-4.5 w-4.5" />
            <span>Legal Agreement</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-400 dark:text-slate-500 font-mono font-semibold uppercase">
            LAST MODIFIED: JULY 14, 2026
          </p>
        </div>

        <section className="space-y-4">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">1. Information We Collect</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            [Placeholder Content] This section will cover all personal data, user credentials, conversation transcripts, and system telemetry gathered through the website chat widget, API integrations, and workspace operations.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">2. How We Use Information</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            [Placeholder Content] This section will specify the mechanisms for model fine-tuning, retrieval-augmented generation (RAG) caching, self-correction logs analysis, and CRM tool synchronization.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">3. Third-Party Integrations</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            [Placeholder Content] Details regarding data transmission and sync triggers with platforms such as Shopify, HubSpot, Stripe, and Freshdesk, highlighting user control and security filters.
          </p>
        </section>
      </article>
    </div>
  );
};

export default PrivacyPolicy;
