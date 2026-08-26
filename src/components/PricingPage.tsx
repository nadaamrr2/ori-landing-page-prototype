import React, { useEffect } from 'react';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { View } from '../App';

interface PricingPageProps {
  onNavigate: (view: View) => void;
}

interface PlanTier {
  id: string;
  name: string;
  badge?: string;
  description: string;
  statusLabel: string;
  features: string[];
  ctaText: string;
  ctaAction: 'signup' | 'contact';
  isPopular?: boolean;
}

const PricingPage: React.FC<PricingPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'Pricing | ORI Agent';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const plans: PlanTier[] = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'For individuals and small teams getting started with AI agents.',
      statusLabel: 'Pricing details coming soon',
      features: [
        '1 Active AI Agent',
        'Core Knowledge Base (Files, Documents & URLs)',
        'Website Chat Widget integration',
        'Standard AI response speed and execution',
        'Standard email & community support',
      ],
      ctaText: 'Get Started',
      ctaAction: 'signup',
      isPopular: false,
    },
    {
      id: 'pro',
      name: 'Pro',
      badge: 'Recommended',
      description: 'For growing teams that need more agents, integrations, and usage.',
      statusLabel: 'Pricing details coming soon',
      features: [
        'Multiple Active AI Agents',
        'Expanded Knowledge Base volume & syncing',
        'Connected tools (Google Calendar, Shopify, HubSpot CRM)',
        'Custom system instructions, personas & guardrails',
        'Multi-channel deployment (Website, WhatsApp, Slack)',
        'Priority support & faster response turnaround',
      ],
      ctaText: 'Get Started',
      ctaAction: 'signup',
      isPopular: true,
    },
    {
      id: 'business',
      name: 'Business',
      description: 'For organizations requiring advanced capabilities and higher usage.',
      statusLabel: 'Pricing details coming soon',
      features: [
        'Unlimited AI Agents & team workspaces',
        'Custom enterprise knowledge bases & live API tools',
        'Advanced role-based permissions & audit oversight',
        'Custom workflow design & tailored tool connectors',
        'Dedicated onboarding & solutions architecture',
        'Enterprise SLA & dedicated support manager',
      ],
      ctaText: 'Contact Us',
      ctaAction: 'contact',
      isPopular: false,
    },
  ];

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Hero Section */}
      <header className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-3.5 py-1.5 rounded-full border border-blue-200/50 dark:border-blue-900/30 mb-4 shadow-sm">
          <Sparkles className="h-3.5 w-3.5 text-blue-500" />
          <span>Simple, Flexible Pricing</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
          Build the AI agents your business needs.
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
          Start with ORI and choose the plan that fits your team as you grow.
        </p>
      </header>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto mb-16">
        {plans.map((plan) => (
          <div
            key={plan.id}
            id={`pricing-card-${plan.id}`}
            className={`glass-panel border rounded-2xl p-8 flex flex-col justify-between relative transition-all duration-300 ${
              plan.isPopular
                ? 'border-blue-500 ring-2 ring-blue-500/20 shadow-xl dark:shadow-blue-500/5 bg-white/95 dark:bg-[#020617]/90'
                : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white/70 dark:bg-[#020617]/60 hover:shadow-lg'
            }`}
          >
            {/* Popular Badge */}
            {plan.badge && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-blue-600 text-white text-[11px] font-bold uppercase tracking-wider shadow-md">
                {plan.badge}
              </span>
            )}

            <div>
              {/* Header */}
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  {plan.name}
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-sm min-h-[44px] leading-relaxed">
                  {plan.description}
                </p>
              </div>

              {/* Status / Coming Soon Indicator */}
              <div className="mb-8 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                    Plan Status
                  </span>
                  <span className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5 mt-0.5">
                    <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                    {plan.statusLabel}
                  </span>
                </div>
              </div>

              {/* Features List Header */}
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">
                What&apos;s included
              </div>

              {/* Features */}
              <ul className="space-y-3.5 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-sm text-slate-700 dark:text-slate-300">
                    <Check className="h-4.5 w-4.5 text-blue-600 dark:text-blue-400 shrink-0 mr-3 mt-0.5" />
                    <span className="leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => onNavigate(plan.ctaAction)}
              id={`pricing-btn-${plan.id}`}
              className={`w-full py-3.5 px-4 rounded-xl text-sm font-semibold transition-all duration-150 text-center flex items-center justify-center gap-2 cursor-pointer ${
                plan.isPopular
                  ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/10 hover:shadow-blue-500/20'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              <span>{plan.ctaText}</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>

      {/* Bottom Assistance Banner */}
      <div className="max-w-4xl mx-auto rounded-2xl p-8 sm:p-10 glass-panel border border-slate-200 dark:border-slate-800 text-center">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
          Need a customized agent deployment or custom integrations?
        </h3>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto mb-6 leading-relaxed">
          Our team works directly with businesses to configure dedicated AI specialists, connect private knowledge bases, and build bespoke tool integrations.
        </p>
        <button
          onClick={() => onNavigate('contact')}
          id="pricing-contact-banner-btn"
          className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all rounded-xl shadow-sm cursor-pointer"
        >
          Contact Our Solutions Team
        </button>
      </div>
    </div>
  );
};

export default PricingPage;
