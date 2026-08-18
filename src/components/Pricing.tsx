import React from 'react';
import { Check } from 'lucide-react';
import { View } from '../App';

interface PricingProps {
  onNavigate: (view: View) => void;
  isDarkMode: boolean;
}

const Pricing: React.FC<PricingProps> = ({ onNavigate, isDarkMode }) => {
  const tiers = [
    {
      name: 'Starter',
      price: '$49',
      period: 'per month',
      description: 'Ideal for individuals, professionals, or anyone building and testing their first AI agent.',
      features: [
        '1 Active AI Agent',
        '1,000 Conversations / mo',
        'Web Links & File Uploads (up to 50MB)',
        'Website Chat Widget',
        'Standard Email Support',
      ],
      cta: 'Start with Starter',
      popular: false,
    },
    {
      name: 'Pro',
      price: '$149',
      period: 'per month',
      description: 'For professionals and growing teams running multiple agents or more advanced workflows.',
      features: [
        '3 Active AI Agents',
        '10,000 Conversations / mo',
        'Google Drive & OneDrive Knowledge',
        'Google Calendar, Shopify & HubSpot Tools',
        'Website Chat, Instagram & WhatsApp Channels',
        'Knowledge Base (up to 1GB)',
        'Priority Support',
      ],
      cta: 'Go Pro Today',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'tailored pricing',
      description: 'For organizations requiring larger-scale deployments, advanced integrations, governance, or custom requirements.',
      features: [
        'Unlimited AI Agents',
        'Custom Conversations Volume',
        'All Knowledge Sources & Tools',
        'Advanced Guardrails & Oversight',
        'Dedicated Solutions Architect',
        'Custom Knowledge Bases & APIs',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
          Plans That Scale With Your Agents
        </h2>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
          Start with one agent, then expand as your needs grow. Simple plans for individuals, professionals, teams, and organizations.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-12">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            id={`pricing-card-${tier.name.toLowerCase()}`}
            className={`glass-panel border rounded-2xl p-8 flex flex-col justify-between relative transition-all duration-300 ${
              tier.popular
                ? 'border-blue-500 ring-2 ring-blue-500/20 shadow-xl dark:shadow-blue-500/5'
                : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-lg'
            }`}
          >
            {/* Popular Badge */}
            {tier.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-blue-600 text-white text-[11px] font-bold uppercase tracking-wider shadow-md">
                Most Popular
              </span>
            )}

            <div>
              {/* Header */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{tier.name}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm min-h-[40px]">{tier.description}</p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <span className="text-4xl font-extrabold text-slate-900 dark:text-white">{tier.price}</span>
                <span className="text-slate-500 dark:text-slate-400 text-sm font-medium ml-2">/ {tier.period}</span>
              </div>

              {/* Divider */}
              <div className="h-px bg-slate-100 dark:bg-slate-800 mb-8" />

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-sm text-slate-600 dark:text-slate-300">
                    <Check className="h-5 w-5 text-blue-500 shrink-0 mr-3" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <button
              onClick={() => {
                if (tier.name === 'Enterprise') {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                } else {
                  onNavigate('signup');
                }
              }}
              id={`pricing-cta-${tier.name.toLowerCase()}`}
              className={`w-full py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-150 text-center cursor-pointer ${
                tier.popular
                  ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/10 hover:shadow-blue-500/20'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {tier.cta}
            </button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Pricing;
