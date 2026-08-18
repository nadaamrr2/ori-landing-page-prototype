import React from 'react';
import {
  GraduationCap,
  FileSearch,
  Briefcase,
  Building2,
  Users,
  Layers,
  Sparkles,
} from 'lucide-react';

interface AudienceCard {
  id: string;
  title: string;
  descriptor: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bgColor: string;
}

interface SectorGroup {
  id: string;
  categoryLabel: string;
  heading: string;
  supportingCopy: string;
  cards: AudienceCard[];
}

const sectors: SectorGroup[] = [
  {
    id: 'education-research',
    categoryLabel: 'EDUCATION & RESEARCH',
    heading: 'Turn knowledge into an interactive resource.',
    supportingCopy: 'Build agents around learning materials, research documents, sources, and specialized knowledge.',
    cards: [
      {
        id: 'educators',
        title: 'Educators',
        descriptor: 'COURSES · MATERIALS · QUESTIONS',
        description: 'Create an agent grounded in lessons, notes, course materials, and learning resources so information is easier to access and explore.',
        icon: GraduationCap,
        color: 'text-indigo-600 dark:text-indigo-400',
        bgColor: 'bg-indigo-50 dark:bg-indigo-950/30 border-indigo-200 dark:border-indigo-900/40',
      },
      {
        id: 'researchers',
        title: 'Researchers',
        descriptor: 'SOURCES · DOCUMENTS · RETRIEVAL',
        description: 'Create an agent that helps navigate, retrieve, and understand information from a defined collection of research documents and sources.',
        icon: FileSearch,
        color: 'text-amber-600 dark:text-amber-400',
        bgColor: 'bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-900/40',
      },
    ],
  },
  {
    id: 'professional-healthcare',
    categoryLabel: 'PROFESSIONAL SERVICES & HEALTHCARE',
    heading: 'Build agents around specialized expertise.',
    supportingCopy: 'Turn professional knowledge, documents, resources, and scheduling workflows into specialized AI experiences.',
    cards: [
      {
        id: 'professionals',
        title: 'Professionals & Consultants',
        descriptor: 'KNOWLEDGE · CLIENTS · RESOURCES',
        description: 'Build an agent grounded in professional knowledge, reports, documents, resources, and repeatable processes.',
        icon: Briefcase,
        color: 'text-blue-600 dark:text-blue-400',
        bgColor: 'bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-900/40',
      },
      {
        id: 'clinics',
        title: 'Clinics & Practices',
        descriptor: 'INFORMATION · POLICIES · SCHEDULING',
        description: 'Create an informational agent grounded in approved resources, clinic information, policies, and scheduling workflows.',
        icon: Building2,
        color: 'text-teal-600 dark:text-teal-400',
        bgColor: 'bg-teal-50 dark:bg-teal-950/30 border-teal-200 dark:border-teal-900/40',
      },
    ],
  },
  {
    id: 'business-commerce',
    categoryLabel: 'BUSINESS & COMMERCE',
    heading: 'Connect agents to the systems where work happens.',
    supportingCopy: 'Create specialized agents that combine company knowledge with CRM, commerce, support, and operational tools.',
    cards: [
      {
        id: 'sales-support',
        title: 'Sales & Support Teams',
        descriptor: 'CRM · LEADS · CUSTOMER REQUESTS',
        description: 'Build agents for lead qualification, CRM workflows, customer questions, support requests, and follow-up processes.',
        icon: Users,
        color: 'text-emerald-600 dark:text-emerald-400',
        bgColor: 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-900/40',
      },
      {
        id: 'commerce-ops',
        title: 'Commerce & Operations',
        descriptor: 'ORDERS · PRODUCTS · WORKFLOWS',
        description: 'Connect agents to commerce and operational systems to retrieve information and support repeatable workflows.',
        icon: Layers,
        color: 'text-purple-600 dark:text-purple-400',
        bgColor: 'bg-purple-50 dark:bg-purple-950/30 border-purple-200 dark:border-purple-900/40',
      },
    ],
  },
];

const UseCases: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Main Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4 animate-fade-in">
          One Platform. Many Kinds of Agents.
        </h2>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          ORI adapts to different industries, professions, and workflows — depending on the knowledge, tools, and purpose you give each agent.
        </p>
      </div>

      {/* Structured Sectors (3 Distinct Groups) */}
      <div className="space-y-16 max-w-5xl mx-auto">
        {sectors.map((sector, index) => (
          <div key={sector.id} className="relative">
            {/* Sector Intro */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[11px] font-extrabold tracking-widest uppercase text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-1 rounded-md border border-blue-200/50 dark:border-blue-900/30">
                  {sector.categoryLabel}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-1.5">
                {sector.heading}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {sector.supportingCopy}
              </p>
            </div>

            {/* 2 Audience Cards Side-by-Side on Desktop, Stacked on Mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sector.cards.map((card) => {
                const IconComponent = card.icon;
                return (
                  <div
                    key={card.id}
                    id={`usecase-card-${card.id}`}
                    className="glass-panel border border-slate-200 dark:border-slate-800/80 rounded-2xl p-6 sm:p-7 hover:border-blue-500/30 dark:hover:border-blue-500/30 hover:shadow-xl dark:hover:shadow-blue-500/5 transition-all duration-300 group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className={`h-12 w-12 rounded-xl flex items-center justify-center border ${card.bgColor} shrink-0 transition-transform duration-300 group-hover:scale-105 shadow-sm`}
                        >
                          <IconComponent className={`h-6 w-6 ${card.color}`} />
                        </div>
                        <div>
                          <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                            {card.title}
                          </h4>
                          <span className="text-[10px] font-bold font-mono text-blue-600 dark:text-blue-400 tracking-wider">
                            {card.descriptor}
                          </span>
                        </div>
                      </div>

                      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Subtle Divider between sectors (except after the last one) */}
            {index < sectors.length - 1 && (
              <div className="mt-16 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />
            )}
          </div>
        ))}
      </div>

      {/* Tagline Underneath */}
      <div className="text-center mt-16 flex items-center justify-center gap-2">
        <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />
        <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
          Different agents. Same ORI platform.
        </span>
      </div>
    </div>
  );
};

export default UseCases;
