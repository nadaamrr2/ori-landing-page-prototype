import React from 'react';
import { Bot, FileText, Wrench, Sliders, Send } from 'lucide-react';

interface Step {
  number: string;
  badge: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

const steps: Step[] = [
  {
    number: '01',
    badge: 'PURPOSE',
    title: 'Create Your Agent',
    description: "Define the agent's purpose, primary goal, and personality.",
    icon: Bot,
  },
  {
    number: '02',
    badge: 'KNOWLEDGE',
    title: 'Build Its Knowledge',
    description: 'Upload files, add links, or connect Google Drive and OneDrive.',
    icon: FileText,
  },
  {
    number: '03',
    badge: 'TOOLS',
    title: 'Connect Its Tools',
    description: 'Connect the systems the agent needs for actions, such as Google Calendar, Shopify, HubSpot, or Freshdesk.',
    icon: Wrench,
  },
  {
    number: '04',
    badge: 'CONTROL',
    title: 'Set Its Instructions',
    description: 'Define tone, rules, behavior, scope, and use-case instructions.',
    icon: Sliders,
  },
  {
    number: '05',
    badge: 'DEPLOY',
    title: 'Deploy & Improve',
    description: 'Make the agent available through supported channels, review conversations, and refine its configuration.',
    icon: Send,
  },
];

const HowItWorks: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
          How It Works
        </h2>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
          Build a specialized AI agent in a few steps — no need to build the underlying AI infrastructure yourself.
        </p>
      </div>

      {/* Steps Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative">
        {/* Connection line for Desktop (only visible on large screens) */}
        <div className="hidden lg:block absolute top-[44px] left-[8%] right-[8%] h-0.5 bg-dashed bg-slate-200 dark:bg-slate-800 pointer-events-none z-0" />

        {steps.map((step) => {
          const IconComponent = step.icon;
          return (
            <div
              key={step.number}
              id={`step-${step.number}`}
              className="flex flex-col items-center text-center relative z-10 group"
            >
              {/* Step Icon circle */}
              <div className="h-16 w-16 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/50 flex items-center justify-center mb-4 relative group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                <IconComponent className="h-7 w-7" />
                
                {/* Number Badge */}
                <div className="absolute -top-1 -right-1 h-6 w-6 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white dark:border-[#020617] shadow">
                  {step.number}
                </div>
              </div>

              {/* Badge */}
              <span className="inline-block text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-100/30 dark:border-blue-900/10 mb-2">
                {step.badge}
              </span>

              {/* Step info */}
              <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {step.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed px-1">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HowItWorks;
