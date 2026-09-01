import React from 'react';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { View } from '../App';

interface PricingProps {
  onNavigate: (view: View) => void;
  isDarkMode: boolean;
}

const Pricing: React.FC<PricingProps> = ({ onNavigate }) => {
  const tiers = [
    {
      id: 'starter',
      name: 'Starter',
      price: '20',
      description: 'For individuals and small teams getting started with AI agents.',
      features: [
        '1 Active AI Agent',
        'Core Knowledge Base (Files, Documents & URLs)',
        'Website Chat Widget integration',
        'Standard AI response speed and execution',
        'Standard email & community support',
      ],
      cta: 'Get Started',
      action: 'signup' as const,
      popular: false,
    },
    {
      id: 'growth',
      name: 'Growth',
      price: '40',
      description: 'For growing teams that need more agents, integrations, and usage.',
      features: [
        'Multiple Active AI Agents',
        'Expanded Knowledge Base volume & syncing',
        'Connected tools (Google Calendar, Shopify, HubSpot CRM)',
        'Custom system instructions, personas & guardrails',
        'Multi-channel deployment (Website, WhatsApp, Slack)',
        'Priority support & faster response turnaround',
      ],
      cta: 'Get Started',
      action: 'signup' as const,
      popular: true,
    },
    {
      id: 'pro',
      name: 'Pro',
      price: '60',
      description: 'For organizations that need advanced capabilities, more flexibility, and higher usage.',
      features: [
        'Unlimited AI Agents & team workspaces',
        'Custom enterprise knowledge bases & live API tools',
        'Advanced role-based permissions & audit oversight',
        'Custom workflow design & tailored tool connectors',
        'Dedicated onboarding & solutions architecture',
        'Enterprise SLA & dedicated support manager',
      ],
      cta: 'Get Started',
      action: 'signup' as const,
      popular: false,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-3.5 py-1.5 rounded-full border border-blue-200/50 dark:border-blue-900/30 mb-4 shadow-sm">
          <Sparkles className="h-3.5 w-3.5 text-blue-500" />
          <span>Simple, Flexible Pricing</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
          Build the AI agents your business needs.
        </h2>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
          Start with ORI and choose the plan that fits your team as you grow.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto mb-12">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            id={`pricing-card-${tier.id}`}
            className={`glass-panel border rounded-2xl p-8 flex flex-col justify-between relative transition-all duration-300 ${
              tier.popular
                ? 'border-blue-500 ring-2 ring-blue-500/20 shadow-xl dark:shadow-blue-500/5 bg-white/95 dark:bg-[#020617]/90'
                : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white/70 dark:bg-[#020617]/60 hover:shadow-lg'
            }`}
          >
            {/* Popular Badge */}
            {tier.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-blue-600 text-white text-[11px] font-bold uppercase tracking-wider shadow-md">
                Recommended
              </span>
            )}

            <div>
              {/* Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{tier.name}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm min-h-[44px] leading-relaxed mb-4">{tier.description}</p>
                
                {/* Price Display */}
                <div className="flex items-baseline gap-1.5 pb-2">
                  <span className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">${tier.price}</span>
                  <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">/ month</span>
                </div>
              </div>

              {/* Features List Header */}
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                What&apos;s included
              </div>

              {/* Features */}
              <ul className="space-y-3.5 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-sm text-slate-700 dark:text-slate-300">
                    <Check className="h-4.5 w-4.5 text-blue-600 dark:text-blue-400 shrink-0 mr-3 mt-0.5" />
                    <span className="leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <button
              onClick={() => onNavigate(tier.action)}
              id={`pricing-cta-${tier.id}`}
              className={`w-full py-3.5 px-4 rounded-xl text-sm font-semibold transition-all duration-150 text-center flex items-center justify-center gap-2 cursor-pointer ${
                tier.popular
                  ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/10 hover:shadow-blue-500/20'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              <span>{tier.cta}</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
