import React from 'react';
import { Bot, FileText, Link2, Send } from 'lucide-react';

interface Step {
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Create your agent',
    description: 'Define the agent’s purpose, instructions, and communication tone.',
    icon: Bot,
  },
  {
    number: '02',
    title: 'Add your knowledge base',
    description: 'Upload business information, documents, support policies, and product data.',
    icon: FileText,
  },
  {
    number: '03',
    title: 'Connect your tools',
    description: 'Connect platforms such as Shopify, HubSpot, Freshdesk, Instagram, and more.',
    icon: Link2,
  },
  {
    number: '04',
    title: 'Deploy your agent',
    description: 'Publish the agent through your website chat widget or active communications.',
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
          Build and go live with a production-ready AI agent in just a few minutes using our intuitive, step-by-step setup workflow.
        </p>
      </div>

      {/* Steps Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {/* Connection line for Desktop (only visible on large screens) */}
        <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-0.5 bg-dashed bg-slate-200 dark:bg-slate-800 pointer-events-none z-0" />

        {steps.map((step, index) => {
          const IconComponent = step.icon;
          return (
            <div
              key={step.number}
              id={`step-${step.number}`}
              className="flex flex-col items-center text-center relative z-10 group"
            >
              {/* Step Icon circle */}
              <div className="h-16 w-16 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/50 flex items-center justify-center mb-6 relative group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                <IconComponent className="h-7 w-7" />
                
                {/* Number Badge */}
                <div className="absolute -top-1 -right-1 h-6 w-6 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white dark:border-[#020617] shadow">
                  {step.number}
                </div>
              </div>

              {/* Step info */}
              <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {step.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed px-2">
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
