import React, { useState } from 'react';
import { View } from '../App';
import { LogOut, Bot, Settings, Users, Link2, BarChart3, Radio, RefreshCw, Layers, ShieldCheck, Cpu, Play } from 'lucide-react';

interface DashboardProps {
  onNavigate: (view: View) => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate, isDarkMode, onToggleTheme }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'Conversations Resolved', value: '4,891', change: '+12.4%', up: true },
    { label: 'Autonomy rate', value: '92.4%', change: '+4.1%', up: true },
    { label: 'Avg Resolution Time', value: '1m 24s', change: '-18%', up: true },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] flex transition-colors duration-300">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-white dark:bg-[#020617] border-r border-slate-200 dark:border-slate-800 flex flex-col justify-between p-6 shrink-0">
        <div className="space-y-8">
          {/* Brand Logo */}
          <div className="flex items-center space-x-2">
            <div className="h-9 w-9 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-sm">
              O
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              ORI<span className="text-blue-600">.</span>
            </span>
            <span className="text-[10px] font-bold text-blue-600 bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/20 px-2 py-0.5 rounded uppercase">
              Dev
            </span>
          </div>

          {/* Nav Tabs */}
          <nav className="space-y-1">
            <button
              onClick={() => setActiveTab('overview')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'overview'
                  ? 'bg-blue-50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900/50'
              }`}
            >
              <BarChart3 className="h-4.5 w-4.5" />
              <span>Overview</span>
            </button>
            <button
              onClick={() => setActiveTab('agents')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'agents'
                  ? 'bg-blue-50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900/50'
              }`}
            >
              <Bot className="h-4.5 w-4.5" />
              <span>Active Agents</span>
            </button>
            <button
              onClick={() => setActiveTab('integrations')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'integrations'
                  ? 'bg-blue-50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900/50'
              }`}
            >
              <Link2 className="h-4.5 w-4.5" />
              <span>Integrations</span>
            </button>
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="space-y-4 pt-6 border-t border-slate-100 dark:border-slate-800">
          <button
            onClick={onToggleTheme}
            className="w-full text-left text-xs font-semibold text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300 py-1"
          >
            Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
          </button>
          <button
            onClick={() => onNavigate('landing')}
            id="dashboard-logout-btn"
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-bold text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20 transition-all cursor-pointer"
          >
            <LogOut className="h-4.5 w-4.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Panel Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {/* Top Header */}
        <header className="flex justify-between items-center mb-10 pb-5 border-b border-slate-200 dark:border-slate-800">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Workspace Dashboard</h1>
            <p className="text-xs text-slate-400 dark:text-slate-500 font-semibold font-mono uppercase mt-1">
              CONNECTED WORKSPACE: ORIGIN-ME_SANDBOX
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <span className="flex items-center space-x-1.5 bg-green-50 dark:bg-green-950/40 border border-green-100 dark:border-green-900/20 px-3 py-1 rounded-full text-[10px] font-bold text-green-700 dark:text-green-400 uppercase font-mono">
              <Radio className="h-3 w-3 animate-pulse text-green-500" />
              <span>Production Live</span>
            </span>
          </div>
        </header>

        {activeTab === 'overview' && (
          <div className="space-y-8 animate-fade-in" id="tab-overview-content">
            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="glass-panel border border-slate-200 dark:border-slate-800 p-6 rounded-2xl">
                  <span className="text-xs text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">{stat.label}</span>
                  <div className="flex items-baseline justify-between mt-3">
                    <span className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">{stat.value}</span>
                    <span className="text-xs font-bold text-green-500 bg-green-50 dark:bg-green-950/40 px-2 py-0.5 rounded">
                      {stat.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Live Preview Banner */}
            <div className="glass-panel border border-slate-200 dark:border-slate-800 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-tr from-blue-500/5 to-purple-500/5">
              <div className="space-y-1.5 text-center md:text-left">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Need to refine your agent's behavior?</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl">
                  Test conversational loops, cognitive steps, self-correction logs, and custom Shopify inventory queries inside the live playground.
                </p>
              </div>
              <button
                onClick={() => onNavigate('landing')}
                className="inline-flex items-center justify-center px-5 py-3 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all shadow shadow-blue-500/10 cursor-pointer"
              >
                <Play className="h-4 w-4 mr-2 fill-current" />
                <span>Launch Landing Playpen</span>
              </button>
            </div>
          </div>
        )}

        {activeTab === 'agents' && (
          <div className="space-y-6 animate-fade-in" id="tab-agents-content">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Active Agents</h3>
            
            <div className="glass-panel border border-slate-200 dark:border-slate-800 p-6 rounded-2xl max-w-2xl">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 border border-blue-100 dark:border-blue-900/20">
                  <Bot className="h-6 w-6" />
                </div>
                <div className="space-y-2 flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">ORI Specialist Agent</h4>
                    <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Active, cognitive-layer model connected to Shopify stores and helpdesk integrations.
                  </p>
                  <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
                    <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded">Tone: Professional</span>
                    <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded">KB Size: 142 KB</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'integrations' && (
          <div className="space-y-6 animate-fade-in" id="tab-integrations-content">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Connected Integrations</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
              {[
                { name: 'Shopify Store Connection', status: 'Connected', desc: 'Direct order queries active.' },
                { name: 'HubSpot Contact Sync', status: 'Connected', desc: 'Ticket pipeline automation active.' },
              ].map((tool, i) => (
                <div key={i} className="glass-panel border border-slate-200 dark:border-slate-800 p-6 rounded-2xl flex items-center justify-between">
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">{tool.name}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{tool.desc}</p>
                  </div>
                  <span className="px-3 py-1 bg-green-50 dark:bg-green-950/40 text-green-700 dark:text-green-400 border border-green-100 dark:border-green-900/30 rounded-full text-[10px] font-bold uppercase font-mono">
                    {tool.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
