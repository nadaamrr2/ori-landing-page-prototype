import React, { useState } from 'react';
import { View } from '../App';
import { ArrowLeft, ArrowRight, Sparkles, Check, Bot, FileText, Link2, Eye, ShieldAlert } from 'lucide-react';

interface OnboardingProps {
  onNavigate: (view: View) => void;
  isDarkMode: boolean;
}

const Onboarding: React.FC<OnboardingProps> = ({ onNavigate, isDarkMode }) => {
  const [step, setStep] = useState(1);
  const [agentName, setAgentName] = useState('ORI Specialist');
  const [agentTone, setAgentTone] = useState('Professional & Helpful');
  const [connectedTools, setConnectedTools] = useState<string[]>([]);
  const [kbUploaded, setKbUploaded] = useState(false);

  const toggleTool = (tool: string) => {
    if (connectedTools.includes(tool)) {
      setConnectedTools((prev) => prev.filter((t) => t !== tool));
    } else {
      setConnectedTools((prev) => [...prev, tool]);
    }
  };

  const handleNextStep = () => {
    if (step < 3) {
      setStep((prev) => prev + 1);
    } else {
      onNavigate('dashboard');
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between py-12 sm:px-6 lg:px-8 bg-white dark:bg-[#020617] relative transition-colors duration-300">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />

      {/* Header Info */}
      <div className="sm:mx-auto sm:w-full sm:max-w-xl text-center relative z-10 px-4 sm:px-0">
        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Configure Your AI Agent
        </h2>
        
        {/* Step Progress Bar */}
        <div className="flex items-center justify-center space-x-4 mt-6">
          <div className="flex items-center">
            <span className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold ${
              step >= 1 ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400'
            }`}>
              {step > 1 ? <Check className="h-4 w-4" /> : '1'}
            </span>
            <span className="text-xs font-bold text-slate-900 dark:text-white ml-2">Define Agent</span>
          </div>
          <div className="h-0.5 w-8 bg-slate-200 dark:bg-slate-800" />
          <div className="flex items-center">
            <span className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold ${
              step >= 2 ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400'
            }`}>
              {step > 2 ? <Check className="h-4 w-4" /> : '2'}
            </span>
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300 ml-2">Knowledge Base</span>
          </div>
          <div className="h-0.5 w-8 bg-slate-200 dark:bg-slate-800" />
          <div className="flex items-center">
            <span className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold ${
              step >= 3 ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400'
            }`}>
              3
            </span>
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300 ml-2">Integrations</span>
          </div>
        </div>
      </div>

      {/* Step Panels */}
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-xl relative z-10 px-4 sm:px-0 flex-1 flex items-center justify-center">
        <div className="glass-panel border border-slate-200 dark:border-slate-800/80 rounded-2xl p-6 sm:p-10 shadow-2xl w-full">
          {step === 1 && (
            <div className="space-y-6 animate-fade-in" id="onboarding-step-1">
              <div className="flex items-center space-x-3 mb-6">
                <Bot className="h-6 w-6 text-blue-500" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Step 1: Agent Identity</h3>
              </div>

              {/* Agent Name */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Agent Name
                </label>
                <input
                  type="text"
                  value={agentName}
                  onChange={(e) => setAgentName(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-[#020617]/50 border border-slate-200 dark:border-slate-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 rounded-xl px-4 py-3 text-sm focus:outline-none text-slate-900 dark:text-white"
                />
              </div>

              {/* Agent Tone */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Conversation Tone
                </label>
                <select
                  value={agentTone}
                  onChange={(e) => setAgentTone(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-[#020617]/50 border border-slate-200 dark:border-slate-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 rounded-xl px-4 py-3 text-sm focus:outline-none text-slate-900 dark:text-white"
                >
                  <option>Professional & Helpful</option>
                  <option>Friendly & Conversational</option>
                  <option>Highly Technical & Precise</option>
                  <option>Bold & Playful</option>
                </select>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 animate-fade-in" id="onboarding-step-2">
              <div className="flex items-center space-x-3 mb-6">
                <FileText className="h-6 w-6 text-blue-500" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Step 2: Add Knowledge Base</h3>
              </div>

              <div className="border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-2xl p-8 text-center bg-slate-50/50 dark:bg-slate-950/20">
                <FileText className="h-10 w-10 text-slate-400 mx-auto mb-4" />
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Upload PDF, DOCX, TXT, or JSON
                </p>
                <p className="text-xs text-slate-400 dark:text-slate-500 mb-6">
                  Add FAQ files, refund conditions, or product specifications.
                </p>

                {kbUploaded ? (
                  <div className="inline-flex items-center gap-1.5 bg-green-50 dark:bg-green-950/40 text-green-700 dark:text-green-400 border border-green-100 dark:border-green-900/30 px-4 py-2 rounded-lg text-xs font-bold animate-fade-in">
                    <Check className="h-4 w-4" />
                    <span>knowledge_base_v1.pdf Uploaded Successfully</span>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => setKbUploaded(true)}
                    className="px-4 py-2 text-xs font-semibold text-blue-600 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 hover:border-blue-300 dark:border-blue-900 rounded-lg transition-all cursor-pointer"
                  >
                    Select File to Upload
                  </button>
                )}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 animate-fade-in" id="onboarding-step-3">
              <div className="flex items-center space-x-3 mb-6">
                <Link2 className="h-6 w-6 text-blue-500" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Step 3: Connect Tools</h3>
              </div>

              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                Select integrations for your AI agent to direct-connect. They will be linked in development-sandbox mode.
              </p>

              <div className="space-y-3">
                {[
                  { id: 'shopify', name: 'Shopify Store Connection', desc: 'Allows order tracking and processing refunds.' },
                  { id: 'hubspot', name: 'HubSpot CRM Account', desc: 'Sync customer chats with contacts.' },
                ].map((tool) => {
                  const isChecked = connectedTools.includes(tool.id);
                  return (
                    <div
                      key={tool.id}
                      onClick={() => toggleTool(tool.id)}
                      className={`border rounded-xl p-4 flex items-start gap-4 cursor-pointer transition-all ${
                        isChecked
                          ? 'border-blue-500 bg-blue-50/20 dark:bg-blue-950/10'
                          : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900/50'
                      }`}
                    >
                      <div className={`h-5 w-5 rounded border flex items-center justify-center shrink-0 mt-0.5 ${
                        isChecked ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-300'
                      }`}>
                        {isChecked && <Check className="h-3 w-3" />}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white">{tool.name}</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400">{tool.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Wizard Actions */}
          <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800/60 pt-6 mt-8">
            <button
              onClick={handlePrevStep}
              disabled={step === 1}
              className="inline-flex items-center px-4 py-2 text-sm font-semibold text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              <span>Back</span>
            </button>

            <button
              onClick={handleNextStep}
              className="inline-flex items-center px-5 py-2.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all shadow shadow-blue-500/10 hover:shadow-blue-500/25 cursor-pointer"
            >
              <span>{step === 3 ? 'Go to Dashboard' : 'Continue'}</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="sm:mx-auto sm:w-full sm:max-w-xl text-center relative z-10 text-xs text-slate-400 dark:text-slate-500">
        Workspace configuration status: Ready for initial sync.
      </div>
    </div>
  );
};

export default Onboarding;
