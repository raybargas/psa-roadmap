// Feature data with categories, migration status, and descriptions
const features = [
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
        status: "Available"
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
        status: "Available"
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
        status: "Available"
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
        status: "Coming GA"
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
        status: "Coming GA"
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
        status: "Coming GA"
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
        status: "Available"
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
        status: "Coming GA"
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
        status: "Coming GA"
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
        status: "On Roadmap"
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
        status: "On Roadmap"
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
        status: "Coming GA"
    },
    { 
        name: "Rev.io Community", 
        category: "core",
        revPSA: "cross", 
        revBilling: "check", 
        tigerpaw: "check", 
        linked: false,
        migration: "not-applicable",
        portal: "cross",
        status: "Coming GA"
    },
    // New In Development items
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
        status: "Coming GA"
    },
    // New On Roadmap items
    { 
        name: "Client Knowledge Base", 
        category: "core",
        revPSA: "cross", 
        revBilling: "cross", 
        tigerpaw: "check", 
        linked: false,
        migration: "not-applicable",
        portal: "cross",
        status: "On Roadmap"
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
        status: "On Roadmap"
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
        status: "On Roadmap"
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
        status: "On Roadmap"
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
        status: "On Roadmap"
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
        status: "On Roadmap"
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
        status: "On Roadmap"
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
        status: "On Roadmap"
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
        status: "On Roadmap"
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
        description: "Multi-language support for global operations (currently English and Spanish)"
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
        description: "Communication platform integration for notifications and team collaboration"
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
        description: "Data sync integration for product and customer management"
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
        status: "On Roadmap"
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
        description: "Advanced AI-powered conversation interface for intelligent assistance"
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
        description: "Predictive analytics and intelligent recommendations powered by AI"
    }
];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Set last updated date
    const today = new Date();
    document.getElementById('lastUpdated').textContent = today.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
    
    // Render the table
    renderTable(features);
    
    // Set up event listeners
    setupEventListeners();
    
    // Update migration lists
    updateMigrationLists();
});

// Render the comparison table
function renderTable(data, highlightMode = false) {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';
    
    if (data.length === 0) {
        // Show a message when no features match the filter
        const messageRow = document.createElement('tr');
        messageRow.innerHTML = `
            <td colspan="7" style="text-align: center; padding: 2rem; color: #666;">
                No features match the selected filter criteria.
            </td>
        `;
        tableBody.appendChild(messageRow);
        return;
    }
    
    // Group features by category
    const grouped = groupByCategory(data);
    
    // Only show categories that have features in the filtered data
    const allCategories = ['core', 'financial', 'service', 'inventory', 'integrations', 'ai'];
    
    allCategories.forEach(category => {
        // Only add category header if there are features in this category
        if (grouped[category] && grouped[category].length > 0) {
            // Add category header row
            const headerRow = document.createElement('tr');
            headerRow.className = 'feature-group';
            headerRow.innerHTML = `
                <td colspan="7">${getCategoryName(category)}</td>
            `;
            tableBody.appendChild(headerRow);
            
            // Add feature rows for this category
            grouped[category].forEach(feature => {
                const row = document.createElement('tr');
                row.dataset.category = feature.category;
                row.classList.add('feature-row');
                if (feature.description) {
                    row.classList.add('has-details');
                }
                // Highlight PSA advantages in Tigerpaw migration mode
                if (highlightMode) {
                    // Only highlight features that PSA has (or is developing) but TigerPaw doesn't
                    if (feature.tigerpaw === 'cross' && 
                        (feature.revPSA === 'check' || feature.status === 'Coming GA')) {
                        row.classList.add('psa-exclusive');
                    }
                }
                row.innerHTML = `
                    <td>
                        <div class="feature-name">
                            ${feature.description ? '<i class="fas fa-chevron-right expand-icon"></i>' : ''}
                            ${feature.name}
                            ${feature.linked ? '<span class="linked-badge">🔗 LINKED</span>' : ''}
                        </div>
                    </td>
                    <td class="status-icon">${getStatusIcon(feature.revPSA, feature.status, 'psa')}</td>
                    <td class="status-icon">${getStatusIcon(feature.revBilling, feature.status, 'billing')}</td>
                    <td class="status-icon">${getStatusIcon(feature.tigerpaw, feature.status, 'tigerpaw')}</td>
                    <td class="status-icon">${getStatusIcon(feature.portal || 'cross', feature.status, 'portal')}</td>
                    <td class="migration-col">${getMigrationBadge(feature.migration)}</td>
                    <td class="status-col">${getStatusBadge(feature.status)}</td>
                `;
                tableBody.appendChild(row);
                
                // Add detail row if description exists
                if (feature.description) {
                    const detailRow = document.createElement('tr');
                    detailRow.className = 'detail-row';
                    detailRow.style.display = 'none';
                    detailRow.innerHTML = `
                        <td colspan="7">
                            <div class="detail-content">
                                <div class="detail-description">
                                    <i class="fas fa-lightbulb"></i>
                                    <span>${feature.description}</span>
                                </div>
                            </div>
                        </td>
                    `;
                    tableBody.appendChild(detailRow);
                    
                    // Add click handler
                    row.addEventListener('click', function() {
                        toggleDetailRow(row, detailRow);
                    });
                }
            });
        }
    });
}

// Group features by category
function groupByCategory(data) {
    return data.reduce((acc, feature) => {
        if (!acc[feature.category]) {
            acc[feature.category] = [];
        }
        acc[feature.category].push(feature);
        return acc;
    }, {});
}

// Get category display name
function getCategoryName(category) {
    const names = {
        'core': 'Core Functionality',
        'financial': 'Financial Management',
        'service': 'Service Management',
        'inventory': 'Inventory & Assets',
        'integrations': 'Integrations & Connectivity',
        'ai': 'AI & Automation'
    };
    return names[category] || category;
}

// Get status icon HTML
function getStatusIcon(status, featureStatus, columnName) {
    // Only show development icons for PSA column, never for Tigerpaw
    if (columnName === 'psa' && status === 'cross' && featureStatus) {
        if (featureStatus === 'Coming GA') {
            return '<i class="fas fa-tools in-dev" title="In Development - Coming GA"></i>';
        } else if (featureStatus === 'On Roadmap') {
            return '<i class="fas fa-road roadmap" title="On Roadmap"></i>';
        } else if (featureStatus === 'Coming 2026') {
            return '<i class="fas fa-clock roadmap" title="On Roadmap - Coming 2026"></i>';
        }
    }
    
    const icons = {
        'check': '<i class="fas fa-check-circle check"></i>',
        'cross': '<i class="fas fa-times cross"></i>'
    };
    return icons[status] || '';
}

// Get migration badge HTML
function getMigrationBadge(migration) {
    const badges = {
        'automatic': '<span class="migration-badge automatic">Automatic</span>',
        'manual': '<span class="migration-badge manual">Manual</span>',
        'not-applicable': '<span class="migration-badge not-applicable">N/A</span>'
    };
    return badges[migration] || '';
}

// Get status badge HTML
function getStatusBadge(status) {
    if (status === 'Coming GA') {
        return '<span class="status-badge in-dev"><i class="fas fa-tools"></i> In Development</span>';
    } else if (status === 'Coming 2026') {
        return '<span class="status-badge roadmap"><i class="fas fa-calendar-alt"></i> 2026 Roadmap</span>';
    } else if (status === 'On Roadmap') {
        return '<span class="status-badge roadmap"><i class="fas fa-road"></i> On Roadmap</span>';
    } else if (status === 'Available') {
        return '<span class="status-badge available"><i class="fas fa-check"></i> Available</span>';
    }
    return status;
}

// Update migration lists
function updateMigrationLists() {
    // Automatic migration list
    const autoList = document.getElementById('autoMigrateList');
    const autoFeatures = features.filter(f => f.linked).map(f => f.name);
    autoList.innerHTML = autoFeatures.slice(0, 5).map(f => `<li>${f}</li>`).join('');
    if (autoFeatures.length > 5) {
        autoList.innerHTML += `<li><em>...and ${autoFeatures.length - 5} more linked features</em></li>`;
    }
    
    // Manual migration list
    const manualList = document.getElementById('manualMigrateList');
    const manualFeatures = features.filter(f => f.migration === 'manual' && !f.linked).map(f => f.name);
    manualList.innerHTML = manualFeatures.slice(0, 5).map(f => `<li>${f}</li>`).join('');
    if (manualFeatures.length > 5) {
        manualList.innerHTML += `<li><em>...and ${manualFeatures.length - 5} more features</em></li>`;
    }
    
    // Feature gaps list
    const gapsList = document.getElementById('featureGapsList');
    const gapFeatures = features.filter(f => f.status.includes('Coming')).map(f => `${f.name} (${f.status})`);
    gapsList.innerHTML = gapFeatures.map(f => `<li>${f}</li>`).join('');
}

// Show Tigerpaw migration value proposition
function showTigerpawMigrationValue() {
    // Find or create the migration value section
    let valueSection = document.getElementById('migrationValue');
    if (!valueSection) {
        valueSection = document.createElement('section');
        valueSection.id = 'migrationValue';
        valueSection.className = 'migration-value-section';
        
        // Get exclusive PSA features not in TigerPaw
        const exclusiveFeatures = features.filter(f => f.revPSA === 'check' && f.tigerpaw === 'cross');
        const exclusiveList = exclusiveFeatures.map(f => `<li>${f.name}</li>`).join('');
        
        valueSection.innerHTML = `
            <div class="container">
                <div class="migration-value-card">
                    <h3><i class="fas fa-paw"></i> <i class="fas fa-arrow-right"></i> Exclusive Rev.io PSA Advantages</h3>
                    <div class="value-grid">
                        <div class="value-item">
                            <i class="fas fa-cloud"></i>
                            <h4>Modern Cloud Architecture</h4>
                            <p>Built on Azure with modern React/TypeScript stack vs legacy desktop application</p>
                        </div>
                        <div class="value-item">
                            <i class="fas fa-link"></i>
                            <h4>Seamless Billing Integration</h4>
                            <p>${features.filter(f => f.linked).length} linked features with Rev.io Billing for unified operations</p>
                        </div>
                        <div class="value-item">
                            <i class="fas fa-robot"></i>
                            <h4>AI-Powered Assistant</h4>
                            <p>Rev.ii AI Assistant for intelligent automation and assistance</p>
                        </div>
                        <div class="value-item">
                            <i class="fas fa-chart-line"></i>
                            <h4>Advanced Analytics</h4>
                            <p>Modern dashboards with real-time insights and reporting</p>
                        </div>
                    </div>
                    
                    <div class="exclusive-features-section">
                        <h4><i class="fas fa-star"></i> Features You'll Gain with Rev.io PSA</h4>
                        <p class="subtitle">Exclusive capabilities not available in Tigerpaw:</p>
                        <ul class="exclusive-features-list">
                            ${exclusiveList}
                        </ul>
                    </div>
                    
                    <div class="migration-stats">
                        <div class="stat">
                            <span class="stat-number">${exclusiveFeatures.length}</span>
                            <span class="stat-label">Exclusive PSA Features</span>
                        </div>
                        <div class="stat">
                            <span class="stat-number">${features.filter(f => f.status === 'Coming GA').length}</span>
                            <span class="stat-label">Features In Development</span>
                        </div>
                        <div class="stat">
                            <span class="stat-number">${features.filter(f => f.linked).length}</span>
                            <span class="stat-label">Linked Billing Features</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        // Insert after executive summary
        const execSummary = document.getElementById('executiveSummary');
        execSummary.parentNode.insertBefore(valueSection, execSummary.nextSibling);
    }
    valueSection.style.display = 'block';
    valueSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Hide migration value section
function hideMigrationValue() {
    const valueSection = document.getElementById('migrationValue');
    if (valueSection) {
        valueSection.style.display = 'none';
    }
}

// Toggle detail row expansion
function toggleDetailRow(row, detailRow) {
    const expandIcon = row.querySelector('.expand-icon');
    const isExpanded = detailRow.style.display !== 'none';
    
    if (isExpanded) {
        detailRow.style.display = 'none';
        row.classList.remove('expanded');
        if (expandIcon) {
            expandIcon.classList.remove('fa-chevron-down');
            expandIcon.classList.add('fa-chevron-right');
        }
    } else {
        // Close other expanded rows in the same category
        const allDetailRows = document.querySelectorAll('.detail-row');
        const allFeatureRows = document.querySelectorAll('.feature-row');
        allDetailRows.forEach(r => r.style.display = 'none');
        allFeatureRows.forEach(r => {
            r.classList.remove('expanded');
            const icon = r.querySelector('.expand-icon');
            if (icon) {
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-right');
            }
        });
        
        // Expand this row
        detailRow.style.display = 'table-row';
        row.classList.add('expanded');
        if (expandIcon) {
            expandIcon.classList.remove('fa-chevron-right');
            expandIcon.classList.add('fa-chevron-down');
        }
    }
}

// Set up event listeners
function setupEventListeners() {
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', function(e) {
        filterTable(e.target.value.toLowerCase());
    });
    
    // Filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn:not(.disabled)');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Skip if button is disabled
            if (this.disabled || this.classList.contains('disabled')) {
                return;
            }
            
            // Update active state (only for non-disabled buttons)
            document.querySelectorAll('.filter-btn:not(.disabled)').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Get filter type
            const filter = this.dataset.filter;
            
            // Hide migration value section for non-tigerpaw filters
            if (filter !== 'tigerpaw-advantage') {
                hideMigrationValue();
            }
            let filtered;
            
            switch(filter) {
                case 'all':
                    renderTable(features, false);
                    break;
                case 'available':
                    // Show only features with status "Available"
                    filtered = features.filter(f => f.status === 'Available');
                    renderTable(filtered, false);
                    break;
                case 'in-development':
                    // Show only features with status "Coming GA" (in development)
                    filtered = features.filter(f => f.status === 'Coming GA');
                    renderTable(filtered, false);
                    break;
                case 'on-roadmap':
                    // Show only features with status "On Roadmap"
                    filtered = features.filter(f => f.status === 'On Roadmap');
                    renderTable(filtered, false);
                    break;
                case 'linked':
                    // Show only linked features
                    filtered = features.filter(f => f.linked);
                    renderTable(filtered, false);
                    break;
                case 'tigerpaw-advantage':
                    // Show ALL features, but highlight where PSA has advantage
                    renderTable(features, true); // true = highlight mode
                    showTigerpawMigrationValue();
                    // Scroll to the value section
                    setTimeout(() => {
                        const valueSection = document.getElementById('migrationValue');
                        if (valueSection) {
                            valueSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                    }, 100);
                    break;
                default:
                    renderTable(features);
            }
        });
    });
}

// Filter table by search term
function filterTable(searchTerm) {
    if (!searchTerm) {
        renderTable(features);
        return;
    }
    
    const filtered = features.filter(feature => 
        feature.name.toLowerCase().includes(searchTerm) ||
        feature.category.toLowerCase().includes(searchTerm) ||
        feature.status.toLowerCase().includes(searchTerm)
    );
    
    renderTable(filtered);
}

// Export functionality (for future use)
function exportToCSV() {
    const headers = ['Feature', 'Rev.io PSA', 'Rev.io Billing', 'Tigerpaw', 'Linked', 'Migration', 'Status'];
    const rows = features.map(f => [
        f.name,
        f.revPSA === 'check' ? 'Yes' : 'No',
        f.revBilling === 'check' ? 'Yes' : 'No',
        f.tigerpaw === 'check' ? 'Yes' : 'No',
        f.linked ? 'Yes' : 'No',
        f.migration,
        f.status
    ]);
    
    const csvContent = [headers, ...rows]
        .map(row => row.join(','))
        .join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'revio-feature-comparison.csv';
    a.click();
}