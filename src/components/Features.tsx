import React from 'react';
import { Target, FileText, Cpu, ShieldCheck } from 'lucide-react';

interface FeaturesProps {
  isDarkMode: boolean;
}

const Features: React.FC<FeaturesProps> = ({ isDarkMode }) => {
  const featureList = [
    {
      id: 'feature-purpose',
      icon: Target,
      title: 'Define Its Purpose',
      description: "Set the agent's primary goal, instructions, tone, rules, and scope around the job you want it to perform.",
      badge: 'PURPOSE'
    },
    {
      id: 'feature-knowledge',
      icon: FileText,
      title: 'Ground It in Your Knowledge',
      description: 'Give the agent context using uploaded files, links, Google Drive, and Microsoft OneDrive.',
      badge: 'KNOWLEDGE'
    },
    {
      id: 'feature-tools',
      icon: Cpu,
      title: 'Connect Tools & Take Action',
      description: 'Connect supported tools such as Google Calendar, Shopify, HubSpot, and Freshdesk so the agent can retrieve information and perform actions when needed.',
      badge: 'TOOLS'
    },
    {
      id: 'feature-oversight',
      icon: ShieldCheck,
      title: 'Keep You in Control',
      description: 'Define the boundaries the agent operates within and involve a human whenever judgment, approval, or intervention is required.',
      badge: 'OVERSIGHT'
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4 animate-fade-in">
          Built Around Your Purpose
        </h2>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
          Configure each ORI agent around what it needs to know, how it should behave, and what tools it can use.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {featureList.map((feature) => {
          const IconComponent = feature.icon;
          return (
            <div
              key={feature.id}
              id={feature.id}
              className="glass-panel border border-slate-200 dark:border-slate-800/80 rounded-2xl p-6 sm:p-8 hover:border-blue-500/30 dark:hover:border-blue-500/30 hover:shadow-xl dark:hover:shadow-blue-500/5 transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                {/* Icon Container */}
                <div className="h-12 w-12 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 border border-blue-100/30 dark:border-blue-900/10 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                  <IconComponent className="h-6 w-6" />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                      {feature.title}
                    </h3>
                    <span className="inline-block text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-100/30 dark:border-blue-900/10">
                      {feature.badge}
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
