import { AgentInfo, ConversationItem, ActivityItem, ShopifyStoreSession } from '../types/shopify';

/**
 * ============================================================================
 * [ENGINEERING INTEGRATION POINT 1: Shopify Session & Store Data]
 * In production, retrieve shopDomain, shopName, and currency from:
 * - Shopify App Bridge session context (appBridge.getState())
 * - Or server-authenticated session token (JWT via /api/shopify/session)
 * ============================================================================
 */
export const mockShopifyStore: ShopifyStoreSession = {
  shopDomain: 'cairo-threads.myshopify.com',
  shopName: 'Cairo Threads',
  currency: 'EGP',
  plan: 'Shopify Plus',
  merchantEmail: 'merchant@cairothreads.com',
};

/**
 * ============================================================================
 * [ENGINEERING INTEGRATION POINT 5: Existing Agent Retrieval]
 * In production, fetch agents associated with the logged-in ORI user/workspace
 * via GET /api/ori/workspaces/:workspaceId/agents
 * ============================================================================
 */
export const mockExistingAgents: AgentInfo[] = [
  {
    id: 'agent_support_1',
    name: 'Customer Support Agent',
    description: 'Handles customer questions, order status lookups, and support requests',
    status: 'Active',
    tone: 'Friendly',
    capabilities: ['product_questions', 'order_tracking', 'store_questions', 'order_actions'],
    connectedData: ['Products', 'Inventory', 'Orders', 'Customers'],
    storeName: 'Cairo Threads',
  },
  {
    id: 'agent_sales_2',
    name: 'Sales Assistant',
    description: 'Helps customers discover products, compare variants, and choose sizing',
    status: 'Active',
    tone: 'Professional',
    capabilities: ['product_questions', 'product_recommendations', 'discount_actions'],
    connectedData: ['Products', 'Inventory'],
    storeName: 'Cairo Threads',
  },
];

export const defaultNewAgent: AgentInfo = {
  id: 'agent_shopify_assistant',
  name: 'Shopify Assistant',
  description: 'Helping customers with products, orders and store questions.',
  status: 'Active',
  tone: 'Friendly',
  capabilities: [
    'product_questions',
    'product_recommendations',
    'order_tracking',
    'order_actions',
    'customer_info',
    'discount_actions',
  ],
  connectedData: ['Products', 'Inventory', 'Orders', 'Customers'],
  storeName: 'Cairo Threads',
};

/**
 * ============================================================================
 * [ENGINEERING INTEGRATION POINT 8: Agent Metrics]
 * In production, query realtime metrics from GET /api/ori/analytics/shopify-today
 * ============================================================================
 */
export const mockDashboardMetrics = {
  conversationsToday: 34,
  handledByOri: 29,
  needsAttention: 5,
  satisfactionRate: '98%',
  avgResponseTime: '1.2s',
};

/**
 * ============================================================================
 * [ENGINEERING INTEGRATION POINT 7: Conversation Data]
 * In production, stream or fetch live conversation feeds from:
 * GET /api/ori/conversations?storeId=cairo-threads
 * ============================================================================
 */
export const mockConversations: ConversationItem[] = [
  {
    id: 'conv_101',
    customerName: 'Sarah Ahmed',
    customerEmail: 'sarah.ahmed@example.com',
    orderNumber: '#1053',
    lastMessage: 'Customer requested order cancellation before dispatch.',
    timestamp: '18 min ago',
    status: 'needs_attention',
    channel: 'Storefront Chat',
    intent: 'Order Cancellation Request',
    messages: [
      {
        id: 'm1',
        sender: 'customer',
        text: 'Hi, I just placed order #1053 about 20 minutes ago but accidentally ordered the wrong size (Medium instead of Large). Can I cancel it so I can reorder?',
        timestamp: '10:42 AM',
      },
      {
        id: 'm2',
        sender: 'agent',
        text: 'Hello Sarah! I see your order #1053 (Oversized Linen Shirt in Sand, EGP 1,250) placed at 10:22 AM. It has not been dispatched yet. Because cancelling an order requires merchant authorization, I have flagged this for approval right away.',
        timestamp: '10:43 AM',
        actionTaken: 'Verified Order Status: Unfulfilled & eligible for cancellation',
      },
    ],
  },
  {
    id: 'conv_102',
    customerName: 'Omar Farouk',
    customerEmail: 'omar.f@example.com',
    orderNumber: '#1048',
    lastMessage: 'ORI provided live tracking link and estimated delivery for tomorrow.',
    timestamp: '8 min ago',
    status: 'handled_by_ori',
    channel: 'Storefront Chat',
    intent: 'Order Tracking',
    messages: [
      {
        id: 'm3',
        sender: 'customer',
        text: 'Where is my order #1048? When is it arriving in Zamalek?',
        timestamp: '10:52 AM',
      },
      {
        id: 'm4',
        sender: 'agent',
        text: 'Hi Omar! Order #1048 was dispatched yesterday via Bosta Courier (Tracking: BST-892110). It is out for delivery in Zamalek and estimated to arrive tomorrow between 1:00 PM and 5:00 PM.',
        timestamp: '10:52 AM',
        actionTaken: 'Retrieved Shopify Fulfillment & Courier status',
      },
      {
        id: 'm5',
        sender: 'customer',
        text: 'Awesome, thank you so much!',
        timestamp: '10:53 AM',
      },
    ],
  },
  {
    id: 'conv_103',
    customerName: 'Nour El-Din',
    customerEmail: 'nour.eldin@example.com',
    lastMessage: 'ORI answered Egyptian cotton fabric care & washing instructions.',
    timestamp: '2 min ago',
    status: 'handled_by_ori',
    channel: 'Storefront Chat',
    intent: 'Product Question',
    messages: [
      {
        id: 'm6',
        sender: 'customer',
        text: 'Are your White Premium Cotton Tees machine washable with warm water?',
        timestamp: '11:01 AM',
      },
      {
        id: 'm7',
        sender: 'agent',
        text: 'Yes Nour! Our Premium Cotton Tees are made with 100% long-staple Egyptian cotton. We recommend machine washing on cold or gentle warm (up to 30°C) with similar colors to preserve the softness and prevent shrinkage.',
        timestamp: '11:01 AM',
        actionTaken: 'Queried Shopify Product Specifications & Care Guide',
      },
    ],
  },
  {
    id: 'conv_104',
    customerName: 'Yasmine Mansour',
    customerEmail: 'yasmine.m@example.com',
    lastMessage: 'ORI recommended 3 matching autumn scarves based on coat color.',
    timestamp: '12 min ago',
    status: 'handled_by_ori',
    channel: 'Storefront Chat',
    intent: 'Product Recommendation',
    messages: [
      {
        id: 'm8',
        sender: 'customer',
        text: 'I love the Olive Wool Trench Coat. What scarf would go best with it?',
        timestamp: '10:48 AM',
      },
      {
        id: 'm9',
        sender: 'agent',
        text: 'The Olive Trench is a great choice! Customers frequently pair it with our Beige Cashmere Blend Scarf (EGP 450), the Rust Merino Fringe Scarf (EGP 520), or the Monochrome Houndstooth Wrap (EGP 480). All three are currently in stock in Cairo warehouse.',
        timestamp: '10:48 AM',
        actionTaken: 'Queried matching accessories from Catalog & Inventory',
      },
    ],
  },
  {
    id: 'conv_105',
    customerName: 'Tarek Zaki',
    customerEmail: 'tarek.z@example.com',
    orderNumber: '#1039',
    lastMessage: 'Customer requested address change after shipment left warehouse.',
    timestamp: '45 min ago',
    status: 'needs_attention',
    channel: 'Storefront Chat',
    intent: 'Shipping Address Modification',
    messages: [
      {
        id: 'm10',
        sender: 'customer',
        text: 'Can I change my delivery address for #1039 to Maadi instead of New Cairo?',
        timestamp: '10:15 AM',
      },
      {
        id: 'm11',
        sender: 'agent',
        text: 'Order #1039 has already been picked up by the courier. I cannot update the address directly while in transit, so I have alerted the fulfillment team to contact the courier dispatcher for a reroute request.',
        timestamp: '10:16 AM',
        actionTaken: 'Flagged for courier reroute team',
      },
    ],
  },
];

/**
 * ============================================================================
 * [ENGINEERING INTEGRATION POINT 10: Shopify Actions Activity Feed]
 * Realtime log of agent executions and pending approvals
 * ============================================================================
 */
export const mockActivityFeed: ActivityItem[] = [
  {
    id: 'act_1',
    title: 'Answered a product availability question',
    description: 'Confirmed Medium size in Olive Trench Coat is in stock (3 units remaining)',
    timestamp: '2 min ago',
    type: 'product_query',
  },
  {
    id: 'act_2',
    title: 'Checked order #1048',
    description: 'Provided Bosta live tracking link to Omar Farouk',
    timestamp: '8 min ago',
    type: 'order_lookup',
  },
  {
    id: 'act_3',
    title: 'Recommended 3 products',
    description: 'Suggested matching scarves for Olive Wool Trench Coat to Yasmine M.',
    timestamp: '12 min ago',
    type: 'recommendation',
  },
  {
    id: 'act_4',
    title: 'Order change needs approval',
    description: 'Customer Sarah Ahmed requested cancellation of Order #1053 (EGP 1,250)',
    timestamp: '18 min ago',
    type: 'approval_needed',
    requiresApproval: true,
    orderId: '#1053',
    customerName: 'Sarah Ahmed',
    orderTotal: 'EGP 1,250',
  },
  {
    id: 'act_5',
    title: 'Answered store policy question',
    description: 'Explained 14-day exchange and store credit policy to new customer',
    timestamp: '35 min ago',
    type: 'policy_query',
  },
];
