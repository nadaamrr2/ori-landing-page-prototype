import React, { useState } from 'react';
import { AgentInfo } from '../../types/shopify';
import { mockExistingAgents } from '../../data/mockShopifyData';
import { Bot, Plus, Check, ArrowLeft, Sparkles, Shield, ArrowRight } from 'lucide-react';

interface ExistingUserAgentPickerProps {
  onConnectAgent: (selectedAgent: AgentInfo | 'new') => void;
  onBack: () => void;
  storeName?: string;
}

/**
 * ============================================================================
 * [SCREEN 3A: EXISTING ORI USER AGENT PICKER]
 * ============================================================================
 * [ENGINEERING INTEGRATION POINT 3: ORI Workspace Lookup]
 * [ENGINEERING INTEGRATION POINT 5: Existing Agent Retrieval]
 * In production, query GET /api/ori/agents?workspaceId=... to populate this list.
 * ============================================================================
 */
export const ExistingUserAgentPicker: React.FC<ExistingUserAgentPickerProps> = ({
  onConnectAgent,
  onBack,
  storeName = 'Cairo Threads',
}) => {
  const [selectedAgentId, setSelectedAgentId] = useState<string | null>(null);
  const [isCreatingNew, setIsCreatingNew] = useState(false);

  const handleSelect = (id: string) => {
    setSelectedAgentId(id);
    setIsCreatingNew(false);
  };

  const handleSelectCreateNew = () => {
    setIsCreatingNew(true);
    setSelectedAgentId('create_new');
  };

  const handleConnect = () => {
    if (isCreatingNew) {
      onConnectAgent('new');
    } else {
      const agent = mockExistingAgents.find((a) => a.id === selectedAgentId);
      if (agent) {
        onConnectAgent(agent);
      }
    }
  };

  const isButtonDisabled = !selectedAgentId;

  return (
    <div className="min-h-full flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-lg w-full mx-auto space-y-6">
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
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8 space-y-6">
          <div className="space-y-1.5 text-center">
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Which agent should use this store?
            </h1>
            <p className="text-xs sm:text-sm text-slate-600">
              Choose an existing agent or create a new one for Shopify.
            </p>
          </div>

          {/* List of Selectable Agent Cards */}
          <div className="space-y-3">
            {mockExistingAgents.map((agent) => {
              const isSelected = selectedAgentId === agent.id;
              return (
                <div
                  key={agent.id}
                  onClick={() => handleSelect(agent.id)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start justify-between gap-3 ${
                    isSelected
                      ? 'bg-blue-50/70 border-blue-500 ring-2 ring-blue-500/20 shadow-xs'
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-slate-900">{agent.name}</span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        <span>{agent.status}</span>
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {agent.description}
                    </p>
                  </div>

                  {/* Radio / Check Circle */}
                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                      isSelected
                        ? 'bg-blue-600 border-blue-600 text-white'
                        : 'border-slate-300 bg-white'
                    }`}
                  >
                    {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                </div>
              );
            })}

            {/* "+ Create a new agent" Card */}
            <div
              onClick={handleSelectCreateNew}
              className={`p-4 rounded-xl border border-dashed transition-all cursor-pointer flex items-center justify-between gap-3 ${
                isCreatingNew
                  ? 'bg-blue-50/70 border-blue-500 ring-2 ring-blue-500/20'
                  : 'bg-slate-50/60 border-slate-300 hover:bg-slate-100/60 hover:border-slate-400'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                  <Plus className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900">
                    Create a new agent
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Set up a dedicated AI assistant customized for {storeName}
                  </div>
                </div>
              </div>

              <div
                className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                  isCreatingNew
                    ? 'bg-blue-600 border-blue-600 text-white'
                    : 'border-slate-300 bg-white'
                }`}
              >
                {isCreatingNew && <Check className="w-3 h-3 stroke-[3]" />}
              </div>
            </div>
          </div>

          {/* Primary Action */}
          <div className="pt-2">
            <button
              type="button"
              disabled={isButtonDisabled}
              onClick={handleConnect}
              className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed text-white rounded-lg text-sm font-semibold shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{isCreatingNew ? 'Create & set up agent' : 'Connect agent'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <p className="text-center text-[11px] text-slate-400">
          You can switch or customize connected agents anytime in the Agent tab.
        </p>
      </div>
    </div>
  );
};
