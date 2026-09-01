export type ShopifyAppScreen = 
  | 'install'           // Screen 1: First install / welcome
  | 'connect-account'   // Screen 2: Sign in / link ORI account
  | 'select-agent'      // Screen 3A: Existing ORI user agent picker
  | 'agent-ready'       // Screen 3B: New ORI user agent ready
  | 'agent-setup'       // Screen 4: Simple agent setup (capabilities & tone)
  | 'dashboard';        // Screen 5: Main Shopify embedded app home

export type DashboardTab = 'overview' | 'conversations' | 'agent';

export type AgentTone = 'Friendly' | 'Professional' | 'Casual' | 'Custom';

export interface AgentCapabilityItem {
  id: string;
  title: string;
  description: string;
  active: boolean;
}

export interface AgentInfo {
  id: string;
  name: string;
  description: string;
  status: 'Active' | 'Draft' | 'Paused';
  tone: AgentTone;
  capabilities: string[];
  connectedData: string[];
  storeName: string;
}

export interface ConversationMessage {
  id: string;
  sender: 'customer' | 'agent' | 'system';
  text: string;
  timestamp: string;
  actionTaken?: string;
}

export interface ConversationItem {
  id: string;
  customerName: string;
  customerEmail: string;
  orderNumber?: string;
  lastMessage: string;
  timestamp: string;
  status: 'handled_by_ori' | 'needs_attention' | 'resolved';
  channel: 'Storefront Chat' | 'Email' | 'WhatsApp';
  messages: ConversationMessage[];
  intent: string;
}

export interface ActivityItem {
  id: string;
  title: string;
  description?: string;
  timestamp: string;
  type: 'product_query' | 'order_lookup' | 'recommendation' | 'approval_needed' | 'policy_query';
  requiresApproval?: boolean;
  orderId?: string;
  customerName?: string;
  orderTotal?: string;
}

export interface ShopifyStoreSession {
  shopDomain: string;
  shopName: string;
  currency: string;
  plan: string;
  merchantEmail: string;
}
