import React, { useState } from 'react';
import { ShopifyAppScreen, DashboardTab, AgentInfo, AgentTone } from '../../types/shopify';
import { defaultNewAgent, mockShopifyStore, mockExistingAgents } from '../../data/mockShopifyData';
import { ShopifyAdminShell } from './ShopifyAdminShell';
import { DevStateSwitcher } from './DevStateSwitcher';
import { FirstInstallScreen } from './FirstInstallScreen';
import { ConnectAccountScreen } from './ConnectAccountScreen';
import { ExistingUserAgentPicker } from './ExistingUserAgentPicker';
import { NewUserAgentReady } from './NewUserAgentReady';
import { AgentSetupScreen } from './AgentSetupScreen';
import { ShopifyEmbeddedDashboard } from './ShopifyEmbeddedDashboard';
import { ActionConfirmationModal } from './ActionConfirmationModal';
import { StoreChatSetupModal } from './StoreChatSetupModal';

interface ShopifyAppContainerProps {
  onNavigateToWebsite?: () => void;
}

/**
 * ============================================================================
 * [SHOPIFY EMBEDDED APP CONTAINER]
 * Main prototype controller orchestrating screens 1-5, dev switcher, and modals.
 * ============================================================================
 */
export const ShopifyAppContainer: React.FC<ShopifyAppContainerProps> = ({
  onNavigateToWebsite,
}) => {
  // Screen & Navigation state
  const [currentScreen, setCurrentScreen] = useState<ShopifyAppScreen>('dashboard');
  const [activeTab, setActiveTab] = useState<DashboardTab>('overview');
  
  // App feature state
  const [storeChatEnabled, setStoreChatEnabled] = useState<boolean>(false);
  const [showAdminShell, setShowAdminShell] = useState<boolean>(true);
  const [currentAgent, setCurrentAgent] = useState<AgentInfo>(defaultNewAgent);
  
  // Modals state
  const [isActionModalOpen, setIsActionModalOpen] = useState<boolean>(false);
  const [isChatSetupModalOpen, setIsChatSetupModalOpen] = useState<boolean>(false);

  // Screen 1: First install -> Continue goes to Screen 2
  const handleInstallContinue = () => {
    setCurrentScreen('connect-account');
  };

  // Screen 1: Already use ORI? Sign in
  const handleInstallSignIn = () => {
    setCurrentScreen('connect-account');
  };

  // Screen 2: Login Success -> Route to 3A (existing user) or 3B (new user)
  const handleLoginSuccess = (isExistingUser: boolean) => {
    if (isExistingUser) {
      setCurrentScreen('select-agent');
    } else {
      setCurrentScreen('agent-ready');
    }
  };

  // Screen 3A: Existing user picks an agent
  const handleConnectExistingAgent = (agentOrNew: AgentInfo | 'new') => {
    if (agentOrNew === 'new') {
      setCurrentScreen('agent-setup');
    } else {
      setCurrentAgent(agentOrNew);
      setCurrentScreen('dashboard');
      setActiveTab('overview');
    }
  };

  // Screen 3B: New user clicks "Set up my agent"
  const handleSetupAgentFromReady = () => {
    setCurrentScreen('agent-setup');
  };

  // Screen 4: Finish setup -> goes to Screen 5 (Dashboard)
  const handleFinishSetup = (capabilities: string[], tone: AgentTone) => {
    setCurrentAgent((prev) => ({
      ...prev,
      capabilities,
      tone,
    }));
    setCurrentScreen('dashboard');
    setActiveTab('overview');
  };

  // Reset to screen 1
  const handleResetFlow = () => {
    setCurrentScreen('install');
    setActiveTab('overview');
    setStoreChatEnabled(false);
  };

  // Screen content renderer
  const renderScreen = () => {
    switch (currentScreen) {
      case 'install':
        return (
          <FirstInstallScreen
            onContinue={handleInstallContinue}
            onSignInExisting={handleInstallSignIn}
            storeName={mockShopifyStore.shopName}
          />
        );

      case 'connect-account':
        return (
          <ConnectAccountScreen
            onLoginSuccess={handleLoginSuccess}
            onBack={() => setCurrentScreen('install')}
            storeName={mockShopifyStore.shopName}
          />
        );

      case 'select-agent':
        return (
          <ExistingUserAgentPicker
            onConnectAgent={handleConnectExistingAgent}
            onBack={() => setCurrentScreen('connect-account')}
            storeName={mockShopifyStore.shopName}
          />
        );

      case 'agent-ready':
        return (
          <NewUserAgentReady
            onSetupAgent={handleSetupAgentFromReady}
            storeName={mockShopifyStore.shopName}
          />
        );

      case 'agent-setup':
        return (
          <AgentSetupScreen
            onFinishSetup={handleFinishSetup}
            onBack={() => setCurrentScreen('select-agent')}
            storeName={mockShopifyStore.shopName}
          />
        );

      case 'dashboard':
      default:
        return (
          <ShopifyEmbeddedDashboard
            agent={currentAgent}
            activeTab={activeTab}
            storeChatEnabled={storeChatEnabled}
            onTabChange={setActiveTab}
            onCustomizeAgent={() => setActiveTab('agent')}
            onViewConversations={() => setActiveTab('conversations')}
            onOpenFullOri={() => {
              if (onNavigateToWebsite) {
                onNavigateToWebsite();
              }
            }}
            onEnableStoreChat={() => setIsChatSetupModalOpen(true)}
            onOpenActionModal={() => setIsActionModalOpen(true)}
            onUpdateTone={(tone) => setCurrentAgent((prev) => ({ ...prev, tone }))}
            storeName={mockShopifyStore.shopName}
          />
        );
    }
  };

  const content = renderScreen();

  return (
    <div className="relative min-h-screen bg-[#f6f6f7]">
      {showAdminShell ? (
        <ShopifyAdminShell
          storeName={mockShopifyStore.shopName}
          onNavigateToStorefront={onNavigateToWebsite}
        >
          {content}
        </ShopifyAdminShell>
      ) : (
        <div className="min-h-screen">{content}</div>
      )}

      {/* Developer State Switcher (Sticky at bottom-right) */}
      <DevStateSwitcher
        currentScreen={currentScreen}
        activeTab={activeTab}
        storeChatEnabled={storeChatEnabled}
        showAdminShell={showAdminShell}
        onScreenChange={setCurrentScreen}
        onTabChange={setActiveTab}
        onToggleStoreChat={setStoreChatEnabled}
        onToggleAdminShell={setShowAdminShell}
        onTriggerActionModal={() => setIsActionModalOpen(true)}
        onTriggerChatSetupModal={() => setIsChatSetupModalOpen(true)}
        onResetFlow={handleResetFlow}
      />

      {/* Sensitive Action Modal (Order #1053 Cancellation) */}
      <ActionConfirmationModal
        isOpen={isActionModalOpen}
        onClose={() => setIsActionModalOpen(false)}
        onConfirm={() => {
          setIsActionModalOpen(false);
        }}
      />

      {/* Storefront Theme Extension Setup Modal */}
      <StoreChatSetupModal
        isOpen={isChatSetupModalOpen}
        onClose={() => setIsChatSetupModalOpen(false)}
        onConfirm={() => {
          setStoreChatEnabled(true);
        }}
      />
    </div>
  );
};
