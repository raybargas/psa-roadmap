// PSA Roadmap Feature Data
// This file contains all the feature comparison data for the PSA Roadmap

const featureData = [
    // Core Customer Management
    { 
        name: "Customer Management", 
        category: "core",
        revPSA: "check", 
        revBilling: "check", 
        tigerpaw: "check", 
        linked: true,
        migration: "automatic",
        portal: "cross",
        status: "Available",
        description: "Centralized customer records with contact information, service history, and billing details"
    },
    { 
        name: "Contact Management", 
        category: "core",
        revPSA: "check", 
        revBilling: "check", 
        tigerpaw: "check", 
        linked: true,
        migration: "automatic",
        portal: "cross",
        status: "Available",
        description: "Comprehensive contact profiles with communication tracking and customer relationships"
    },
    { 
        name: "Customer Portal", 
        category: "core",
        revPSA: "check", 
        revBilling: "check", 
        tigerpaw: "check", 
        linked: false,
        migration: "manual",
        portal: "cross",
        status: "Available",
        description: "Self-service portal for customers to access tickets, invoices, and account information"
    },
    { 
        name: "Customer Notes/Journal", 
        category: "core",
        revPSA: "check", 
        revBilling: "check", 
        tigerpaw: "check", 
        linked: false,
        migration: "manual",
        portal: "cross",
        status: "Available",
        description: "Communication tracking system for customer interactions and internal notes"
    },
    
    // Financial Management
    { 
        name: "Invoices", 
        category: "financial",
        revPSA: "check", 
        revBilling: "check", 
        tigerpaw: "check", 
        linked: true,
        migration: "automatic",
        portal: "cross",
        status: "Available",
        description: "Invoice management with email delivery and automated billing workflows"
    },
    { 
        name: "Payments", 
        category: "financial",
        revPSA: "check", 
        revBilling: "check", 
        tigerpaw: "check", 
        linked: true,
        migration: "automatic",
        portal: "check",
        status: "Available",
        description: "Payment processing with credit card and ACH support, accessible via customer portal"
    },
    { 
        name: "Billing Profiles", 
        category: "financial",
        revPSA: "check", 
        revBilling: "check", 
        tigerpaw: "cross", 
        linked: true,
        migration: "automatic",
        portal: "cross",
        status: "Available",
        description: "Advanced billing profile management for complex billing scenarios"
    },
    { 
        name: "Charges", 
        category: "financial",
        revPSA: "check", 
        revBilling: "check", 
        tigerpaw: "cross", 
        linked: true,
        migration: "automatic",
        portal: "check",
        status: "Available",
        description: "Comprehensive charge tracking system with automated billing workflows"
    },
    { 
        name: "Payment History", 
        category: "financial",
        revPSA: "check", 
        revBilling: "check", 
        tigerpaw: "check", 
        linked: true,
        migration: "automatic",
        portal: "check",
        status: "Available",
        description: "Complete payment history and transaction records"
    },
    { 
        name: "Accounting Periods", 
        category: "financial",
        revPSA: "cross", 
        revBilling: "check", 
        tigerpaw: "cross", 
        linked: true,
        migration: "automatic",
        portal: "cross",
        status: "Coming GA",
        description: "Financial period management for advanced accounting workflows"
    },
    
    // Service Management
    { 
        name: "Tickets/Service Orders", 
        category: "service",
        revPSA: "check", 
        revBilling: "check", 
        tigerpaw: "check", 
        linked: false,
        migration: "manual",
        portal: "check",
        status: "Available",
        description: "Service ticket management with customer portal access for ticket submission and tracking"
    },
    { 
        name: "Time Tracking", 
        category: "service",
        revPSA: "check", 
        revBilling: "check", 
        tigerpaw: "check", 
        linked: false,
        migration: "manual",
        portal: "cross",
        status: "Available",
        description: "Timesheet management with billable vs. actual time tracking for technicians"
    },
    { 
        name: "Parts & Labor", 
        category: "service",
        revPSA: "check", 
        revBilling: "check", 
        tigerpaw: "check", 
        linked: true,
        migration: "automatic",
        portal: "cross",
        status: "Available",
        description: "Parts and labor tracking for service tickets with cost and pricing management"
    },
    { 
        name: "Calendar Events", 
        category: "service",
        revPSA: "check", 
        revBilling: "check", 
        tigerpaw: "check", 
        linked: false,
        migration: "manual",
        portal: "cross",
        status: "Available",
        description: "Calendar system for scheduling appointments, tasks, and resource management"
    },
    { 
        name: "Scheduling", 
        category: "service",
        revPSA: "check", 
        revBilling: "check", 
        tigerpaw: "check", 
        linked: false,
        migration: "manual",
        portal: "cross",
        status: "Available",
        description: "Scheduling system with business hours configuration and technician availability"
    },
    { 
        name: "Contracts", 
        category: "service",
        revPSA: "check", 
        revBilling: "check", 
        tigerpaw: "check", 
        linked: true,
        migration: "automatic",
        portal: "cross",
        status: "Available",
        description: "Contract management with rates, billing parameters, and documentation tracking"
    },
    { 
        name: "Recurring Service Agreements", 
        category: "service",
        revPSA: "check", 
        revBilling: "check", 
        tigerpaw: "check", 
        linked: true,
        migration: "automatic",
        portal: "cross",
        status: "Available",
        description: "Managed service agreements with MRR/ARR tracking and automated billing"
    },
    { 
        name: "SLA Management", 
        category: "service",
        revPSA: "cross", 
        revBilling: "check", 
        tigerpaw: "check", 
        linked: false,
        migration: "manual",
        portal: "cross",
        status: "Coming GA",
        description: "Service Level Agreement management with automated tracking and reporting"
    },
    
    // Inventory & Assets
    { 
        name: "Assets", 
        category: "inventory",
        revPSA: "check", 
        revBilling: "check", 
        tigerpaw: "check", 
        linked: false,
        migration: "manual",
        portal: "cross",
        status: "Available",
        description: "Asset management and tracking for customer equipment and configurations"
    },
    { 
        name: "Product Catalog", 
        category: "inventory",
        revPSA: "check", 
        revBilling: "check", 
        tigerpaw: "check", 
        linked: true,
        migration: "automatic",
        portal: "cross",
        status: "Available",
        description: "Comprehensive product catalog with pricing, cost tracking, and provider management"
    },
    { 
        name: "Purchase Orders", 
        category: "inventory",
        revPSA: "cross", 
        revBilling: "cross", 
        tigerpaw: "check", 
        linked: false,
        migration: "manual",
        portal: "cross",
        status: "Coming GA",
        description: "Purchase order system for vendor management and inventory procurement"
    },
    { 
        name: "Inventory Management", 
        category: "inventory",
        revPSA: "cross", 
        revBilling: "check", 
        tigerpaw: "check", 
        linked: false,
        migration: "manual",
        portal: "cross",
        status: "Coming GA",
        description: "Real-time inventory tracking with stock levels and reorder management"
    },
    
    // Quotes & Proposals
    { 
        name: "Quotes", 
        category: "financial",
        revPSA: "check", 
        revBilling: "check", 
        tigerpaw: "check", 
        linked: false,
        migration: "manual",
        portal: "cross",
        status: "Available",
        description: "Quote generation and management system for customer proposals"
    },
    { 
        name: "Quote Templates", 
        category: "financial",
        revPSA: "check", 
        revBilling: "check", 
        tigerpaw: "check", 
        linked: false,
        migration: "manual",
        portal: "cross",
        status: "Available",
        description: "Reusable quote templates for standardized pricing and proposals"
    },
    
    // Reporting & Analytics
    { 
        name: "Dashboards", 
        category: "core",
        revPSA: "check", 
        revBilling: "check", 
        tigerpaw: "check", 
        linked: false,
        migration: "manual",
        portal: "cross",
        status: "Available",
        description: "Configurable analytics dashboard with business intelligence and performance metrics"
    },
    { 
        name: "Analytics", 
        category: "core",
        revPSA: "check", 
        revBilling: "check", 
        tigerpaw: "cross", 
        linked: false,
        migration: "manual",
        portal: "cross",
        status: "Available",
        description: "Advanced analytics with OpenTelemetry instrumentation for monitoring and insights"
    },
    
    // System Configuration
    { 
        name: "User Management", 
        category: "core",
        revPSA: "check", 
        revBilling: "check", 
        tigerpaw: "check", 
        linked: true,
        migration: "automatic",
        portal: "cross",
        status: "Available",
        description: "User account management with groups and API key management for developers"
    },
    { 
        name: "Role-Based Permissions", 
        category: "core",
        revPSA: "check", 
        revBilling: "check", 
        tigerpaw: "check", 
        linked: false,
        migration: "manual",
        portal: "cross",
        status: "Available",
        description: "Role-based access control (RBAC) system for granular permission management"
    },
    { 
        name: "Workflows/Automation", 
        category: "core",
        revPSA: "cross", 
        revBilling: "check", 
        tigerpaw: "check", 
        linked: false,
        migration: "manual",
        portal: "cross",
        status: "Coming GA",
        description: "Workflow engine for business process automation with SMS and notification capabilities"
    },
    { 
        name: "Developer Portal", 
        category: "core",
        revPSA: "cross", 
        revBilling: "check", 
        tigerpaw: "check", 
        linked: false,
        migration: "not-applicable",
        portal: "cross",
        status: "Coming GA",
        description: "Developer resources with API documentation and integration guides"
    },
    { 
        name: "Custom Fields", 
        category: "core",
        revPSA: "cross", 
        revBilling: "check", 
        tigerpaw: "check", 
        linked: false,
        migration: "manual",
        portal: "cross",
        status: "Coming GA",
        description: "Custom fields manager for extending system objects with configurable data fields"
    },
    
    // Communication
    { 
        name: "SMS/Text Messaging", 
        category: "core",
        revPSA: "cross", 
        revBilling: "check", 
        tigerpaw: "cross", 
        linked: false,
        migration: "not-applicable",
        portal: "cross",
        status: "Coming GA",
        description: "Built-in SMS capabilities for customer notifications and two-way communication"
    },
    { 
        name: "Mobile App", 
        category: "core",
        revPSA: "cross", 
        revBilling: "cross", 
        tigerpaw: "check", 
        linked: false,
        migration: "not-applicable",
        portal: "cross",
        status: "On Roadmap",
        description: "Native mobile applications for iOS and Android with offline capabilities"
    },
    { 
        name: "Project Management", 
        category: "service",
        revPSA: "cross", 
        revBilling: "cross", 
        tigerpaw: "check", 
        linked: false,
        migration: "not-applicable",
        portal: "cross",
        status: "On Roadmap",
        description: "Full project management suite with Gantt charts and resource planning"
    },
    { 
        name: "Commerce Hub", 
        category: "financial",
        revPSA: "cross", 
        revBilling: "cross", 
        tigerpaw: "cross", 
        linked: false,
        migration: "not-applicable",
        portal: "cross",
        status: "Coming GA",
        description: "E-commerce platform for online ordering and customer self-service"
    },
    { 
        name: "Rev.io Community", 
        category: "core",
        revPSA: "cross", 
        revBilling: "check", 
        tigerpaw: "cross", 
        linked: false,
        migration: "not-applicable",
        portal: "cross",
        status: "Coming GA",
        description: "Community platform for user collaboration and knowledge sharing"
    },
    
    // Additional In Development items
    { 
        name: "Audit Logging", 
        category: "core",
        revPSA: "cross", 
        revBilling: "check", 
        tigerpaw: "check", 
        linked: false,
        migration: "not-applicable",
        portal: "cross",
        status: "Coming GA",
        description: "Comprehensive audit trail for security, compliance, and activity tracking"
    },
    { 
        name: "Dispatch Board", 
        category: "service",
        revPSA: "cross", 
        revBilling: "cross", 
        tigerpaw: "check", 
        linked: false,
        migration: "not-applicable",
        portal: "cross",
        status: "Coming GA",
        description: "Visual dispatch board for technician management and resource allocation"
    },
    { 
        name: "Tax", 
        category: "financial",
        revPSA: "cross", 
        revBilling: "check", 
        tigerpaw: "check", 
        linked: true,
        migration: "automatic",
        portal: "cross",
        status: "Coming GA",
        description: "Automated tax calculation and compliance management"
    },
    
    // On Roadmap items
    { 
        name: "Client Knowledge Base", 
        category: "core",
        revPSA: "cross", 
        revBilling: "cross", 
        tigerpaw: "check", 
        linked: false,
        migration: "not-applicable",
        portal: "cross",
        status: "On Roadmap",
        description: "Customer-facing knowledge base for self-service support"
    },
    { 
        name: "Agents & Commissions", 
        category: "financial",
        revPSA: "cross", 
        revBilling: "cross", 
        tigerpaw: "check", 
        linked: false,
        migration: "not-applicable",
        portal: "cross",
        status: "On Roadmap",
        description: "Commission tracking and management for sales agents"
    },
    { 
        name: "Sales Pipeline Management", 
        category: "financial",
        revPSA: "cross", 
        revBilling: "cross", 
        tigerpaw: "check", 
        linked: false,
        migration: "not-applicable",
        portal: "cross",
        status: "On Roadmap",
        description: "CRM-style sales pipeline with opportunity tracking"
    },
    { 
        name: "Collections", 
        category: "financial",
        revPSA: "cross", 
        revBilling: "check", 
        tigerpaw: "cross", 
        linked: false,
        migration: "not-applicable",
        portal: "cross",
        status: "On Roadmap",
        description: "Automated collections workflows with aging reports and dunning processes"
    },
    { 
        name: "Communications Billing", 
        category: "financial",
        revPSA: "cross", 
        revBilling: "check", 
        tigerpaw: "cross", 
        linked: false,
        migration: "not-applicable",
        portal: "cross",
        status: "On Roadmap",
        description: "Advanced telecommunications billing including VoIP, SMS, and data services"
    },
    { 
        name: "Package Quantities", 
        category: "inventory",
        revPSA: "cross", 
        revBilling: "check", 
        tigerpaw: "check", 
        linked: true,
        migration: "automatic",
        portal: "cross",
        status: "On Roadmap",
        description: "Bundle and package management with quantity-based pricing"
    },
    { 
        name: "Orders", 
        category: "financial",
        revPSA: "cross", 
        revBilling: "check", 
        tigerpaw: "check", 
        linked: false,
        migration: "manual",
        portal: "cross",
        status: "On Roadmap",
        description: "Order management system for product fulfillment"
    },
    { 
        name: "Reseller Model", 
        category: "financial",
        revPSA: "cross", 
        revBilling: "check", 
        tigerpaw: "cross", 
        linked: false,
        migration: "not-applicable",
        portal: "cross",
        status: "On Roadmap",
        description: "Multi-tier reseller management with margin control and white-label capabilities"
    },
    { 
        name: "Global Search", 
        category: "core",
        revPSA: "cross", 
        revBilling: "check", 
        tigerpaw: "check", 
        linked: false,
        migration: "not-applicable",
        portal: "cross",
        status: "On Roadmap",
        description: "Unified search across all system objects and data"
    },
    { 
        name: "Marketing", 
        category: "core",
        revPSA: "cross", 
        revBilling: "cross", 
        tigerpaw: "check", 
        linked: false,
        migration: "not-applicable",
        portal: "cross",
        status: "On Roadmap",
        description: "Marketing automation with campaign management and lead tracking"
    },
    { 
        name: "Internationalization", 
        category: "core",
        revPSA: "cross", 
        revBilling: "cross", 
        tigerpaw: "cross", 
        linked: false,
        migration: "not-applicable",
        portal: "cross",
        status: "On Roadmap",
        description: "Multi-language support for global operations (English and Spanish initially)"
    },
    { 
        name: "Slack/Teams Integration", 
        category: "integrations",
        revPSA: "cross", 
        revBilling: "cross", 
        tigerpaw: "cross", 
        linked: false,
        migration: "not-applicable",
        portal: "cross",
        status: "Coming GA",
        description: "Native integrations with Slack and Microsoft Teams for notifications and collaboration"
    },
    
    // Integrations Category
    { 
        name: "Microsoft Outlook", 
        category: "integrations",
        revPSA: "check", 
        revBilling: "check", 
        tigerpaw: "check", 
        linked: false,
        migration: "manual",
        portal: "cross",
        status: "Available",
        description: "Email integration for ticket creation and customer communication tracking"
    },
    { 
        name: "Google Integration", 
        category: "integrations",
        revPSA: "check", 
        revBilling: "check", 
        tigerpaw: "cross", 
        linked: false,
        migration: "not-applicable",
        portal: "cross",
        status: "Available",
        description: "Google Calendar and productivity tools integration for scheduling and collaboration"
    },
    { 
        name: "PAX8 Integration", 
        category: "integrations",
        revPSA: "check", 
        revBilling: "cross", 
        tigerpaw: "cross", 
        linked: false,
        migration: "not-applicable",
        portal: "cross",
        status: "Available",
        description: "Direct integration with PAX8 marketplace for automated provisioning and management"
    },
    { 
        name: "QuickBooks Online", 
        category: "integrations",
        revPSA: "cross", 
        revBilling: "check", 
        tigerpaw: "check", 
        linked: false,
        migration: "not-applicable",
        portal: "cross",
        status: "Coming GA",
        description: "Accounting software integration for financial data synchronization"
    },
    { 
        name: "Acronis RMM Integration", 
        category: "integrations",
        revPSA: "cross", 
        revBilling: "cross", 
        tigerpaw: "cross", 
        linked: false,
        migration: "not-applicable",
        portal: "cross",
        status: "On Roadmap",
        description: "Remote monitoring and management integration for proactive service delivery"
    },
    
    // AI & Automation Category
    { 
        name: "Rev.ii AI Assistant", 
        category: "ai",
        revPSA: "check", 
        revBilling: "check", 
        tigerpaw: "cross", 
        linked: false,
        migration: "not-applicable",
        portal: "cross",
        status: "Available",
        description: "Conversational AI assistant with context-aware prompts for automated PSA tasks"
    },
    { 
        name: "Talk to Rev.ii", 
        category: "ai",
        revPSA: "cross", 
        revBilling: "cross", 
        tigerpaw: "cross", 
        linked: false,
        migration: "not-applicable",
        portal: "cross",
        status: "Coming GA",
        description: "Advanced conversational AI interface for natural language PSA operations"
    },
    { 
        name: "AI-Powered Insights", 
        category: "ai",
        revPSA: "cross", 
        revBilling: "cross", 
        tigerpaw: "cross", 
        linked: false,
        migration: "not-applicable",
        portal: "cross",
        status: "On Roadmap",
        description: "Predictive analytics and intelligent recommendations powered by machine learning"
    }
];

// Category definitions
const categories = {
    'core': {
        name: 'Core Functionality',
        description: 'Essential platform features and system configuration',
        icon: 'fas fa-cog'
    },
    'financial': {
        name: 'Financial Management',
        description: 'Billing, invoicing, payments, and financial operations',
        icon: 'fas fa-dollar-sign'
    },
    'service': {
        name: 'Service Management',
        description: 'Ticketing, scheduling, and service delivery',
        icon: 'fas fa-wrench'
    },
    'inventory': {
        name: 'Inventory & Assets',
        description: 'Product catalog, inventory, and asset management',
        icon: 'fas fa-boxes'
    },
    'integrations': {
        name: 'Integrations & Connectivity',
        description: 'Third-party integrations and external system connections',
        icon: 'fas fa-plug'
    },
    'ai': {
        name: 'AI & Automation',
        description: 'Artificial intelligence and automation capabilities',
        icon: 'fas fa-robot'
    }
};

// Status definitions
const statusDefinitions = {
    'Available': {
        label: 'Available',
        icon: 'fas fa-check',
        color: '#10b981',
        description: 'Currently available in production'
    },
    'Coming GA': {
        label: 'In Development',
        icon: 'fas fa-tools',
        color: '#f59e0b',
        description: 'In active development, coming soon to general availability'
    },
    'On Roadmap': {
        label: 'On Roadmap',
        icon: 'fas fa-road',
        color: '#6366f1',
        description: 'Planned for future development'
    }
};

// Migration type definitions
const migrationTypes = {
    'automatic': {
        label: 'Automatic',
        color: '#10b981',
        description: 'Data automatically synced from Rev.io Billing'
    },
    'manual': {
        label: 'Manual',
        color: '#f59e0b',
        description: 'Requires manual data migration'
    },
    'not-applicable': {
        label: 'N/A',
        color: '#6b7280',
        description: 'Not applicable for migration'
    }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        featureData,
        categories,
        statusDefinitions,
        migrationTypes
    };
}