import React, { useState } from 'react';
import { AgentTone } from '../../types/shopify';
import { Bot, Check, ArrowRight, ArrowLeft, Volume2, Sparkles, MessageCircle, HelpCircle, Package, Truck, RefreshCw } from 'lucide-react';

interface AgentSetupScreenProps {
  onFinishSetup: (selectedCapabilities: string[], tone: AgentTone) => void;
  onBack: () => void;
  storeName?: string;
}

interface CapabilityOption {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

/**
 * ============================================================================
 * [SCREEN 4: SIMPLE AGENT SETUP]
 * Non-technical simplified onboarding flow for merchant.
 * ============================================================================
 * [ENGINEERING INTEGRATION POINT 6: Shopify-to-ORI Connection & Initial Config]
 * In production, save configured goals & tone via:
 * PATCH /api/ori/agents/:agentId/config { capabilities: [...], tone: ... }
 * ============================================================================
 */
export const AgentSetupScreen: React.FC<AgentSetupScreenProps> = ({
  onFinishSetup,
  onBack,
  storeName = 'Cairo Threads',
}) => {
  const capabilityOptions: CapabilityOption[] = [
    {
      id: 'product_questions',
      title: 'Answer product questions',
      description: 'Help customers learn about products, prices and variants.',
      icon: <HelpCircle className="w-4 h-4 text-blue-600" />,
    },
    {
      id: 'product_recommendations',
      title: 'Recommend products',
      description: 'Help shoppers find products that match what they need.',
      icon: <Sparkles className="w-4 h-4 text-purple-600" />,
    },
    {
      id: 'order_tracking',
      title: 'Track orders',
      description: 'Answer questions about existing orders.',
      icon: <Truck className="w-4 h-4 text-emerald-600" />,
    },
    {
      id: 'order_actions',
      title: 'Handle order requests',
      description: 'Help with supported changes and actions on orders.',
      icon: <RefreshCw className="w-4 h-4 text-amber-600" />,
    },
    {
      id: 'store_questions',
      title: 'Answer store questions',
      description: 'Shipping, returns, policies and common questions.',
      icon: <MessageCircle className="w-4 h-4 text-indigo-600" />,
    },
  ];

  // Selected capabilities (defaults to all active for a great initial experience)
  const [selectedCapabilities, setSelectedCapabilities] = useState<string[]>([
    'product_questions',
    'product_recommendations',
    'order_tracking',
    'order_actions',
    'store_questions',
  ]);

  // Tone options
  const toneOptions: { id: AgentTone; label: string; sample: string }[] = [
    { id: 'Friendly', label: 'Friendly', sample: 'Warm, welcoming and helpful' },
    { id: 'Professional', label: 'Professional', sample: 'Direct, clear and polite' },
    { id: 'Casual', label: 'Casual', sample: 'Relaxed, modern and approachable' },
    { id: 'Custom', label: 'Custom', sample: 'Configured in full ORI workspace' },
  ];

  const [selectedTone, setSelectedTone] = useState<AgentTone>('Friendly');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleCapability = (id: string) => {
    setSelectedCapabilities((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleFinish = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onFinishSetup(selectedCapabilities, selectedTone);
    }, 400);
  };

  return (
    <div className="min-h-full flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-xl w-full mx-auto space-y-6">
        {/* Top Header */}
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={onBack}
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back</span>
          </button>
          
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white">
              <Bot className="w-4 h-4" />
            </div>
            <span className="text-base font-bold text-slate-900 tracking-tight">ORI</span>
          </div>

          <div className="w-12"></div>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8 space-y-8">
          {/* SECTION 1: Capabilities */}
          <div className="space-y-4">
            <div className="space-y-1 text-left">
              <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                What should ORI help with?
              </h1>
              <p className="text-xs sm:text-sm text-slate-600">
                Choose the main tasks you want your AI agent to handle for {storeName}.
              </p>
            </div>

            <div className="space-y-2.5">
              {capabilityOptions.map((option) => {
                const isChecked = selectedCapabilities.includes(option.id);
                return (
                  <div
                    key={option.id}
                    onClick={() => toggleCapability(option.id)}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                      isChecked
                        ? 'bg-blue-50/50 border-blue-400 ring-1 ring-blue-400/30'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {/* Custom Checkbox */}
                    <div
                      className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                        isChecked
                          ? 'bg-blue-600 border-blue-600 text-white'
                          : 'border-slate-300 bg-white'
                      }`}
                    >
                      {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>

                    <div className="space-y-0.5 flex-1">
                      <div className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                        <span>{option.title}</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-normal">
                        {option.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* SECTION 2: Tone */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <div className="space-y-1 text-left">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                How should ORI sound?
              </h2>
              <p className="text-xs text-slate-600">
                Select your brand voice tone when responding to customers.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {toneOptions.map((tone) => {
                const isSelected = selectedTone === tone.id;
                return (
                  <button
                    key={tone.id}
                    type="button"
                    onClick={() => setSelectedTone(tone.id)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-slate-900 border-slate-900 text-white shadow-sm'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300'
                    }`}
                  >
                    <div className="font-bold text-xs sm:text-sm">{tone.label}</div>
                    <div className={`text-[10px] mt-1 leading-tight ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                      {tone.sample}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <button
              type="button"
              disabled={selectedCapabilities.length === 0 || isSubmitting}
              onClick={handleFinish}
              className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed text-white rounded-lg text-sm font-semibold shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-slate-400 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>
                  <span>Finish setup</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </>
              )}
            </button>
          </div>
        </div>

        <p className="text-center text-[11px] text-slate-400">
          Everything can be fine-tuned or customized in the Agent tab.
        </p>
      </div>
    </div>
  );
};
