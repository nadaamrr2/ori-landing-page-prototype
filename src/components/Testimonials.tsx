import React from 'react';
import { Quote, Sparkles } from 'lucide-react';

interface Testimonial {
  id: string;
  partnerType: 'Early Access Partner' | 'Pilot Customer' | 'Partner';
  title: string;
  quote: string;
  initials: string;
}

// CRITICAL PRODUCTION NOTICE:
// These are neutral placeholder labels and quotes for development.
// DO NOT use real company names, logos, customer quotes, or personal identities without approval.
// Replace these with actual approved customer testimonials before production launch.
const testimonialsData: Testimonial[] = [
  {
    id: 'partner-1',
    partnerType: 'Early Access Partner',
    title: 'E-commerce Merchant Pilot',
    quote: 'Customer testimonial coming soon. Our teams are currently wrapping up the early access pilot phase with ORI Agent, testing high-volume chat automation and platform self-correction capabilities.',
    initials: 'EP',
  },
  {
    id: 'partner-2',
    partnerType: 'Pilot Customer',
    title: 'SaaS Platform Team',
    quote: 'Customer testimonial coming soon. Currently evaluating automated workflows, contextual CRM synchronization, and conversational memory triggers in a multi-tenant test environment.',
    initials: 'PC',
  },
  {
    id: 'partner-3',
    partnerType: 'Early Access Partner',
    title: 'Digital Agency Director',
    quote: 'Customer testimonial coming soon. Early stage integrations on website chat widgets and messaging channels have shown promising initial feedback on speed, accuracy, and ease of deployment.',
    initials: 'AP',
  },
];

const Testimonials: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
          Trusted by Early Adopters
        </h2>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
          See how companies are preparing to transform their workflows and customer services with ORI’s advanced agentic automation.
        </p>
      </div>

      {/* Testimonial Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonialsData.map((item) => (
          <div
            key={item.id}
            id={`testimonial-card-${item.id}`}
            className="glass-panel border border-slate-200 dark:border-slate-800/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-blue-500/35 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
          >
            {/* Top background accent */}
            <div className="absolute top-0 right-0 h-20 w-20 bg-blue-500/5 blur-xl rounded-full" />

            <div>
              {/* Quote Icon */}
              <div className="text-blue-600 dark:text-blue-400 mb-6 flex items-center justify-between">
                <Quote className="h-8 w-8 opacity-40 fill-current" />
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-100/30 dark:border-blue-900/10">
                  <Sparkles className="h-3 w-3" />
                  {item.partnerType}
                </span>
              </div>

              {/* Quote Content */}
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed italic mb-8 relative z-10">
                "{item.quote}"
              </p>
            </div>

            {/* Profile Footer */}
            <div className="flex items-center gap-4 border-t border-slate-100 dark:border-slate-800/60 pt-4 mt-auto">
              <div className="h-10 w-10 rounded-full bg-blue-600/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400 font-bold text-sm flex items-center justify-center border border-blue-200/20 dark:border-blue-800/20 shadow-inner">
                {item.initials}
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white tracking-tight">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-400 dark:text-slate-500 font-medium">
                  {item.partnerType}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
