import React from 'react';
import { ShoppingBag, Instagram, HelpCircle, Workflow, MessageSquare } from 'lucide-react';

const integrationsData = [
  {
    name: 'Shopify',
    icon: ShoppingBag,
    label: 'Shopify Integration',
    color: 'text-emerald-600 dark:text-emerald-400',
    bgColor: 'bg-emerald-50 dark:bg-emerald-950/20 border-emerald-100 dark:border-emerald-900/40'
  },
  {
    name: 'Instagram',
    icon: Instagram,
    label: 'Instagram Integration',
    color: 'text-pink-600 dark:text-pink-400',
    bgColor: 'bg-pink-50 dark:bg-pink-950/20 border-pink-100 dark:border-pink-900/40'
  },
  {
    name: 'HubSpot',
    icon: Workflow,
    label: 'HubSpot Integration',
    color: 'text-orange-600 dark:text-orange-400',
    bgColor: 'bg-orange-50 dark:bg-orange-950/20 border-orange-100 dark:border-orange-900/40'
  },
  {
    name: 'Freshdesk',
    icon: HelpCircle,
    label: 'Freshdesk Integration',
    color: 'text-teal-600 dark:text-teal-400',
    bgColor: 'bg-teal-50 dark:bg-teal-950/20 border-teal-100 dark:border-teal-900/40'
  },
  {
    name: 'Website Chat Widget',
    icon: MessageSquare,
    label: 'Website Chat Widget Integration',
    color: 'text-blue-600 dark:text-blue-400',
    bgColor: 'bg-blue-50 dark:bg-blue-950/20 border-blue-100 dark:border-blue-900/40'
  },
];

const Integrations: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4 animate-fade-in">
          Connect ORI to Your Business Tools
        </h2>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
          Connect your agents to the platforms where your business data, workflows, and conversations already live.
        </p>
      </div>

      {/* Simplified Compact Row/Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-4xl mx-auto justify-items-center items-center">
        {integrationsData.map((integration, index) => {
          const IconComponent = integration.icon;
          return (
            <div
              key={index}
              aria-label={integration.label}
              className="w-full max-w-[160px] flex flex-col items-center justify-center p-5 rounded-2xl glass-panel border border-slate-200 dark:border-slate-800/80 hover:border-blue-500/30 dark:hover:border-blue-500/30 hover:shadow-md transition-all duration-300 group"
            >
              <div className={`h-14 w-14 rounded-2xl flex items-center justify-center border ${integration.bgColor} transition-transform duration-300 group-hover:scale-110 shadow-sm mb-3.5`}>
                <IconComponent className={`h-7 w-7 ${integration.color}`} />
              </div>
              <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 text-center tracking-tight">
                {integration.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Integrations;
