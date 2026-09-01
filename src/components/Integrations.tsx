import React from 'react';
import {
  FileText,
  Link2,
  MessageSquare,
  Database,
  Wrench,
} from 'lucide-react';

/* ==========================================================================
   OFFICIAL BRAND LOGO SVGs (PRESERVING AUTHENTIC COLORS & GEOMETRY)
   ========================================================================== */

const GoogleDriveLogo: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 87.3 78" className={className} aria-label="Google Drive Logo">
    <path d="M6.6 66.85l3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8H0c0 1.55.4 3.1 1.2 4.5z" fill="#0066DA" />
    <path d="M43.65 25L29.9 1.2c-1.35.8-2.5 1.9-3.3 3.3L.7 49.3c-.8 1.4-1.2 2.95-1.2 4.5h27.5z" fill="#00AC47" />
    <path d="M73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5H59.8l5.85 10.15 7.9 13.65z" fill="#EA4335" />
    <path d="M43.65 25L57.4 1.2C56.05.4 54.5 0 52.9 0H34.4c-1.6 0-3.15.4-4.5 1.2z" fill="#00832D" />
    <path d="M59.8 53H27.5L13.75 76.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.4 4.5-1.2z" fill="#2684FC" />
    <path d="M73.4 26.5l-12.7-22C59.9 3.1 58.75 2 57.4 1.2L43.65 25 59.8 53h27.5c0-1.55-.4-3.1-1.2-4.5z" fill="#FFBA00" />
  </svg>
);

const MicrosoftOneDriveLogo: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 32 32" className={className} fill="none" aria-label="Microsoft OneDrive Logo">
    <path d="M22.5 14.5c.3 0 .6.04.9.1A6 6 0 0 1 29 20a6 6 0 0 1-6 6H9.5a6.5 6.5 0 0 1-6.5-6.5c0-3.3 2.5-6 5.8-6.4A8.5 8.5 0 0 1 22.5 14.5z" fill="#0078D4"/>
    <path d="M22.5 14.5c-.7-2.6-3-4.5-5.8-4.5a6 6 0 0 0-5.8 4.2c.4-.1.8-.2 1.2-.2 2.5 0 4.6 1.5 5.5 3.7.8-.5 1.7-.7 2.7-.7 1.1 0 2.1.3 2.9.9-.2-1.2-.4-2.3-.7-3.4z" fill="#1490DF"/>
    <path d="M12.5 7.5A7.5 7.5 0 0 1 20 15c0 .3 0 .5-.05.8-.8-.6-1.8-.9-2.9-.9-1 0-1.9.3-2.7.7-.9-2.2-3-3.7-5.5-3.7-.4 0-.8.05-1.2.14A7.5 7.5 0 0 1 12.5 7.5z" fill="#28A8EA"/>
  </svg>
);

const GoogleCalendarLogo: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 48 48" className={className} aria-label="Google Calendar Logo">
    <rect width="40" height="40" x="4" y="4" fill="#FFFFFF" rx="8" />
    <path fill="#4285F4" d="M36 4H12C7.58 4 4 7.58 4 12v6h40v-6c0-4.42-3.58-8-8-8z" />
    <path fill="#EA4335" d="M36 4h-4v14h12v-6c0-4.42-3.58-8-8-8z" />
    <path fill="#FBBC04" d="M4 12v6h12V4h-4C7.58 4 4 7.58 4 12z" />
    <path fill="#34A853" d="M4 36c0 4.42 3.58 8 8 8h6V32H4v4z" />
    <path fill="#4285F4" d="M12 44h24c4.42 0 8-3.58 8-8v-4H32v12h-8z" />
    <path fill="#1A73E8" d="M32 44h4c4.42 0 8-3.58 8-8v-4H32v12z" />
    <text x="24" y="33" fill="#1967D2" fontSize="15" fontWeight="bold" textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif">31</text>
  </svg>
);

const ShopifyLogo: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 109.5 124.5" className={className} aria-label="Shopify Logo">
    <path d="M74.7 14.8c-.2-.1-.5-.1-.8 0l-12.2 3.6c-2.4-6.8-6.9-12.7-13.6-16.1C44.7-.6 39.8-.7 36 2.3c-4.4 3.4-6.4 8.9-5.5 15.1l-11.8 3.5c-2.4.7-2.5 1-2.7 3.5L8.4 97.4l49.5 9.4 33.7-7.4-16.9-84.6z" fill="#95BF47"/>
    <path d="M61.7 18.4L49.5 22c.9-6.2-1.1-11.7-5.5-15.1-3.8-3-8.7-2.9-12.1 0-6.7 3.4-11.2 9.3-13.6 16.1l-6.1 1.8L8.4 97.4l49.5 9.4V0l3.8 18.4z" fill="#5E8E3E"/>
    <path d="M48.2 26.4c-4.4 1.3-9.1 2.7-13.5 4-1.2.4-1.3.4-1.4 1.5-.6 4.9-1.2 9.8-1.8 14.7-.1.9.4 1.3 1.2 1.5 2.5.6 5.1 1.2 7.6 1.8.8.2 1.3-.1 1.6-.9 1.1-2.9 2.2-5.7 3.3-8.6.2-.5.5-.7 1-.6 1.4.3 2.7.5 4.1.8 1.1.2 1.5.8 1.2 1.9-1.2 4.3-2.5 8.6-3.7 12.9-.2.8-.8 1.1-1.6.9-2.9-.7-5.7-1.4-8.6-2.1-1.6-.4-2.8.2-3.5 1.7-2.2 4.8-4.4 9.6-6.6 14.4-.6 1.3-.1 2.3 1.2 2.7 4.1 1.2 8.2 2.4 12.3 3.6 1.1.3 1.6.9 1.3 2.1-1.4 5.3-2.7 10.5-4.1 15.8-.2.8-.7 1.2-1.5 1-4.8-1.2-9.6-2.4-14.4-3.6-.8-.2-1.3.1-1.5.9-.9 3.2-1.8 6.5-2.6 9.7-.3 1.1.1 1.9 1.2 2.2 9.6 2.6 19.3 5.3 28.9 7.9 1.3.4 2.3-.2 2.6-1.5 4.3-17.5 8.6-34.9 12.9-52.4.2-.8-.1-1.3-.8-1.5-5.3-1.6-10.7-3.1-16-4.7-.8-.2-1.2.1-1.4.9-.7 2.7-1.5 5.3-2.2 8-.2.7-.6.9-1.3.7-1.4-.4-2.8-.8-4.2-1.1-.9-.3-1.3-1-.9-1.9 1.4-4 2.8-8.1 4.2-12.1.3-.8.9-1.2 1.7-1 3.5.9 7 1.9 10.5 2.8 1.4.4 2.7-.2 3.3-1.6 1.6-3.8 3.2-7.5 4.8-11.3.6-1.4.1-2.4-1.2-2.8-3.7-1.1-7.5-2.2-11.2-3.3-1.1-.3-1.6-.9-1.3-2.1 1.3-4.8 2.6-9.5 3.9-14.3.2-.8-.2-1.3-.9-1.5z" fill="#FFFFFF"/>
    <path d="M43.6 7.3c2.4-2.1 5.8-2.2 8.5-.2 2.7 2 4.4 5.7 4.6 9.8l-17.4 5.2c.4-5.8 1.9-12.7 4.3-14.8z" fill="#004C3F"/>
  </svg>
);

const HubSpotLogo: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="#FF7A59" aria-label="HubSpot Logo">
    <path d="M18.8 8.4V5.7c.6-.3 1.1-.9 1.1-1.7 0-1.1-.9-2-2-2s-2 .9-2 2c0 .8.5 1.4 1.1 1.7v2.7c-1.1.3-2.1.8-2.9 1.5L8.5 6.2c.1-.3.1-.5.1-.8 0-1.4-1.1-2.5-2.5-2.5S3.6 4 3.6 5.4c0 1.4 1.1 2.5 2.5 2.5.5 0 1-.1 1.4-.4l5.4 4.1c-.4.8-.6 1.7-.6 2.7 0 1.1.3 2.1.9 3l-2.4 2.4c-.3-.1-.6-.2-.9-.2-1.3 0-2.4 1.1-2.4 2.4s1.1 2.4 2.4 2.4 2.4-1.1 2.4-2.4c0-.3-.1-.6-.2-.9l2.4-2.4c.8.5 1.8.9 2.8.9 3.1 0 5.6-2.5 5.6-5.6-.1-2.6-1.8-4.7-4.1-5.3zm-2 6.6c-1.3 0-2.4-1.1-2.4-2.4s1.1-2.4 2.4-2.4 2.4 1.1 2.4 2.4-1.1 2.4-2.4 2.4z"/>
  </svg>
);

const FreshdeskLogo: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 32 32" className={className} fill="none" aria-label="Freshdesk Logo">
    <path d="M16 4C9.373 4 4 9.373 4 16c0 3.313 1.343 6.313 3.515 8.485L16 16V4z" fill="#03A89E" />
    <path d="M16 4v12l8.485 8.485C26.657 22.313 28 19.313 28 16c0-6.627-5.373-12-12-12z" fill="#00D084" />
    <path d="M16 16l-8.485 8.485A11.937 11.937 0 0 0 16 28V16z" fill="#028476" />
    <path d="M16 16v12c3.313 0 6.313-1.343 8.485-3.515L16 16z" fill="#07B39B" />
  </svg>
);

const InstagramLogo: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} aria-label="Instagram Logo">
    <defs>
      <radialGradient id="ig-grad-integrations" r="150%" cx="30%" cy="107%">
        <stop stopColor="#fdf497" offset="0%" />
        <stop stopColor="#fdf497" offset="5%" />
        <stop stopColor="#fd5949" offset="45%" />
        <stop stopColor="#d6249f" offset="60%" />
        <stop stopColor="#285AEB" offset="90%" />
      </radialGradient>
    </defs>
    <rect width="20" height="20" x="2" y="2" rx="5.5" fill="url(#ig-grad-integrations)" />
    <circle cx="12" cy="12" r="4.2" fill="none" stroke="#FFFFFF" strokeWidth="1.8" />
    <circle cx="17.2" cy="6.8" r="1.1" fill="#FFFFFF" />
    <rect width="16" height="16" x="4" y="4" rx="4" fill="none" stroke="#FFFFFF" strokeWidth="1.6" />
  </svg>
);

const WhatsAppLogo: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" aria-label="WhatsApp Logo">
    <path fill="#25D366" d="M12 2C6.48 2 2 6.48 2 12c0 1.84.5 3.56 1.37 5.04L2 22l5.12-1.34A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
    <path fill="#FFFFFF" d="M17.5 14.5c-.25-.13-1.48-.73-1.71-.81-.23-.08-.4-.13-.57.13-.17.25-.65.81-.8 1-.15.19-.3.21-.55.08-.25-.13-1.07-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.57-1.38-.78-1.89-.2-.49-.42-.43-.57-.43h-.49c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.42 1.44.54.61.19 1.16.17 1.6.1.49-.07 1.48-.61 1.69-1.19.21-.59.21-1.09.15-1.19-.06-.11-.23-.17-.48-.3z"/>
  </svg>
);

/* ==========================================================================
   DATA STRUCTURES
   ========================================================================== */

const knowledgeSources = [
  {
    name: 'Google Drive',
    label: 'KNOWLEDGE BASE',
    description: "Add selected Drive files to your agent's knowledge.",
    icon: GoogleDriveLogo,
    isCustomLogo: true,
  },
  {
    name: 'Microsoft OneDrive',
    label: 'KNOWLEDGE BASE',
    description: "Add selected OneDrive files to your agent's knowledge.",
    icon: MicrosoftOneDriveLogo,
    isCustomLogo: true,
  },
  {
    name: 'Files',
    label: 'KNOWLEDGE BASE',
    description: 'Upload documents, spreadsheets, PDFs, and text files.',
    icon: FileText,
    isCustomLogo: false,
  },
  {
    name: 'Links',
    label: 'KNOWLEDGE BASE',
    description: 'Connect websites, documentation, and web resources.',
    icon: Link2,
    isCustomLogo: false,
  },
];

const toolsAndChannels = [
  {
    name: 'Google Calendar',
    label: 'CALENDAR',
    icon: GoogleCalendarLogo,
    isCustomLogo: true,
  },
  {
    name: 'Shopify',
    label: 'COMMERCE',
    icon: ShopifyLogo,
    isCustomLogo: true,
  },
  {
    name: 'HubSpot',
    label: 'CRM',
    icon: HubSpotLogo,
    isCustomLogo: true,
  },
  {
    name: 'Freshdesk',
    label: 'TICKETING',
    icon: FreshdeskLogo,
    isCustomLogo: true,
  },
  {
    name: 'Instagram',
    label: 'CHANNEL',
    icon: InstagramLogo,
    isCustomLogo: true,
  },
  {
    name: 'WhatsApp',
    label: 'CHANNEL',
    icon: WhatsAppLogo,
    isCustomLogo: true,
  },
  {
    name: 'Website Chat',
    label: 'CHANNEL',
    icon: MessageSquare,
    isCustomLogo: false,
  },
];

interface IntegrationsProps {
  onNavigate?: (view: any) => void;
}

const Integrations: React.FC<IntegrationsProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4 animate-fade-in">
          Give Your Agent Knowledge. Connect Its Tools.
        </h2>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
          Bring together the information your agent needs to understand context and the tools it needs to take action.
        </p>
      </div>

      <div className="space-y-12 max-w-5xl mx-auto">
        {/* GROUP 1: KNOWLEDGE SOURCES */}
        <div className="space-y-6">
          <div className="flex items-center gap-2.5 border-b border-slate-200 dark:border-slate-800 pb-3">
            <Database className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <span className="text-xs font-bold text-slate-900 dark:text-slate-200 tracking-wider uppercase">
              KNOWLEDGE SOURCES
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-normal">
              — Context & Grounding
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {knowledgeSources.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="glass-panel border border-slate-200 dark:border-slate-800/80 rounded-2xl p-5 hover:border-blue-500/30 dark:hover:border-blue-500/30 hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3.5 mb-3.5">
                      <div className="h-12 w-12 rounded-xl flex items-center justify-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shrink-0 transition-transform duration-300 group-hover:scale-105 shadow-sm">
                        {item.isCustomLogo ? (
                          <IconComponent className="h-6 w-6" />
                        ) : (
                          <IconComponent className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-900 dark:text-white tracking-tight">
                          {item.name}
                        </h3>
                        <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                          {item.label}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* GROUP 2: TOOLS & CHANNELS */}
        <div className="space-y-6">
          <div className="flex items-center gap-2.5 border-b border-slate-200 dark:border-slate-800 pb-3">
            <Wrench className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <span className="text-xs font-bold text-slate-900 dark:text-slate-200 tracking-wider uppercase">
              TOOLS & CHANNELS
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-normal">
              — Actions, Integrations & Platforms
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {toolsAndChannels.map((item, index) => {
              const IconComponent = item.icon;
              const isShopify = item.name === 'Shopify';
              return (
                <div
                  key={index}
                  onClick={() => {
                    if (isShopify && onNavigate) {
                      onNavigate('shopify');
                    }
                  }}
                  className={`flex flex-col items-center justify-center p-4 rounded-2xl glass-panel border border-slate-200 dark:border-slate-800/80 hover:border-blue-500/30 dark:hover:border-blue-500/30 hover:shadow-md transition-all duration-300 group text-center ${
                    isShopify ? 'cursor-pointer ring-1 ring-blue-500/20 hover:ring-blue-500' : ''
                  }`}
                >
                  <div className="h-12 w-12 rounded-xl flex items-center justify-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-transform duration-300 group-hover:scale-110 shadow-sm mb-3">
                    {item.isCustomLogo ? (
                      <IconComponent className="h-6 w-6" />
                    ) : (
                      <IconComponent className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    )}
                  </div>
                  <h3 className="text-xs font-bold text-slate-900 dark:text-white tracking-tight leading-snug flex items-center gap-1">
                    <span>{item.name}</span>
                    {isShopify && (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    )}
                  </h3>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold tracking-wider uppercase mt-1">
                    {isShopify ? 'App Prototype' : item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integrations;
