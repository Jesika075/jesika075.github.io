// =============================================
// M&A DEAL TRACKER — DATA FILE
// =============================================
// Edit this file to update your tracker.
// Push to GitHub and the site updates automatically.
// =============================================

const DATA = {

  // ── DEALS ──────────────────────────────────
  // Add/edit/remove deals here.
  // Stages: "Term Sheet" | "Due Diligence" | "Documentation" | "Closing" | "Post Closing"
  // Priority: "High" | "Medium" | "Low"

  deals: [
    {
      id: "acme",
      company: "Acme Technologies",
      sector: "SaaS",
      dealSize: "$45M",
      stage: "Due Diligence",
      priority: "High",
      contact: "Sarah Chen",
      startDate: "2026-01-15",
    },
    {
      id: "novabio",
      company: "NovaBio Therapeutics",
      sector: "Biotech",
      dealSize: "$120M",
      stage: "Documentation",
      priority: "High",
      contact: "Raj Mehta",
      startDate: "2025-11-20",
    },
    {
      id: "greengrid",
      company: "GreenGrid Energy",
      sector: "CleanTech",
      dealSize: "$78M",
      stage: "Term Sheet",
      priority: "Medium",
      contact: "Maria Lopez",
      startDate: "2026-03-01",
    },
  ],

  // ── DOCUMENTS ──────────────────────────────
  // Each doc is tied to a deal by dealId.
  // Status: "Pending" | "Received" | "Under Review" | "Approved"
  // Stage: must match one of the deal stages above
  // Category: "Due Diligence" | "Contracts & Legal" | "Compliance" | "Other"
  //
  // To add docs for a new deal, copy a block below
  // and change the dealId to match the deal's id.

  docs: [

    // ── Acme Technologies ──
    // Term Sheet
    { dealId: "acme", stage: "Term Sheet", category: "Contracts & Legal", name: "NDA", status: "Approved" },
    { dealId: "acme", stage: "Term Sheet", category: "Contracts & Legal", name: "Term Sheet", status: "Approved" },
    { dealId: "acme", stage: "Term Sheet", category: "Other", name: "Flash", status: "Approved" },
    { dealId: "acme", stage: "Term Sheet", category: "Other", name: "IR", status: "Approved" },
    // Due Diligence
    { dealId: "acme", stage: "Due Diligence", category: "Due Diligence", name: "Financial Due Diligence", status: "Under Review" },
    { dealId: "acme", stage: "Due Diligence", category: "Due Diligence", name: "Legal Due Diligence", status: "Received" },
    { dealId: "acme", stage: "Due Diligence", category: "Due Diligence", name: "IDD", status: "Pending" },
    { dealId: "acme", stage: "Due Diligence", category: "Due Diligence", name: "Sanction Check", status: "Pending" },
    // Documentation
    { dealId: "acme", stage: "Documentation", category: "Contracts & Legal", name: "Share Purchase Agreement (SPA)", status: "Pending" },
    { dealId: "acme", stage: "Documentation", category: "Contracts & Legal", name: "Share Subscription Agreement (SSA)", status: "Pending" },
    { dealId: "acme", stage: "Documentation", category: "Contracts & Legal", name: "Shareholders Agreement (SHA)", status: "Pending" },
    { dealId: "acme", stage: "Documentation", category: "Contracts & Legal", name: "Disclosure Letter", status: "Pending" },
    { dealId: "acme", stage: "Documentation", category: "Contracts & Legal", name: "Promoter Employment Agreement", status: "Pending" },
    { dealId: "acme", stage: "Documentation", category: "Contracts & Legal", name: "CP Completion Certificate", status: "Pending" },
    { dealId: "acme", stage: "Documentation", category: "Contracts & Legal", name: "Valuation Reports", status: "Pending" },
    { dealId: "acme", stage: "Documentation", category: "Compliance", name: "FCPA Questionnaire", status: "Pending" },
    { dealId: "acme", stage: "Documentation", category: "Compliance", name: "ESG Questionnaire", status: "Pending" },
    { dealId: "acme", stage: "Documentation", category: "Compliance", name: "Management Rights Letter", status: "Pending" },
    { dealId: "acme", stage: "Documentation", category: "Compliance", name: "Director Indemnification Agreement", status: "Pending" },
    { dealId: "acme", stage: "Documentation", category: "Compliance", name: "ABAC Policy", status: "Pending" },
    { dealId: "acme", stage: "Documentation", category: "Compliance", name: "Other BVP Standard Documents", status: "Pending" },
    // Closing
    { dealId: "acme", stage: "Closing", category: "Other", name: "Closing Conditions Checklist", status: "Pending" },
    { dealId: "acme", stage: "Closing", category: "Other", name: "Valuation Report", status: "Pending" },
    // Post Closing
    { dealId: "acme", stage: "Post Closing", category: "Contracts & Legal", name: "Post Closing Checklist", status: "Pending" },

    // ── NovaBio Therapeutics ──
    // Term Sheet
    { dealId: "novabio", stage: "Term Sheet", category: "Contracts & Legal", name: "NDA", status: "Approved" },
    { dealId: "novabio", stage: "Term Sheet", category: "Contracts & Legal", name: "Term Sheet", status: "Approved" },
    { dealId: "novabio", stage: "Term Sheet", category: "Other", name: "Flash", status: "Approved" },
    { dealId: "novabio", stage: "Term Sheet", category: "Other", name: "IR", status: "Approved" },
    // Due Diligence
    { dealId: "novabio", stage: "Due Diligence", category: "Due Diligence", name: "Financial Due Diligence", status: "Approved" },
    { dealId: "novabio", stage: "Due Diligence", category: "Due Diligence", name: "Legal Due Diligence", status: "Approved" },
    { dealId: "novabio", stage: "Due Diligence", category: "Due Diligence", name: "IDD", status: "Approved" },
    { dealId: "novabio", stage: "Due Diligence", category: "Due Diligence", name: "Sanction Check", status: "Approved" },
    // Documentation
    { dealId: "novabio", stage: "Documentation", category: "Contracts & Legal", name: "Share Purchase Agreement (SPA)", status: "Under Review" },
    { dealId: "novabio", stage: "Documentation", category: "Contracts & Legal", name: "Share Subscription Agreement (SSA)", status: "Under Review" },
    { dealId: "novabio", stage: "Documentation", category: "Contracts & Legal", name: "Shareholders Agreement (SHA)", status: "Received" },
    { dealId: "novabio", stage: "Documentation", category: "Contracts & Legal", name: "Disclosure Letter", status: "Pending" },
    { dealId: "novabio", stage: "Documentation", category: "Contracts & Legal", name: "Promoter Employment Agreement", status: "Pending" },
    { dealId: "novabio", stage: "Documentation", category: "Contracts & Legal", name: "CP Completion Certificate", status: "Pending" },
    { dealId: "novabio", stage: "Documentation", category: "Contracts & Legal", name: "Valuation Reports", status: "Pending" },
    { dealId: "novabio", stage: "Documentation", category: "Compliance", name: "FCPA Questionnaire", status: "Received" },
    { dealId: "novabio", stage: "Documentation", category: "Compliance", name: "ESG Questionnaire", status: "Received" },
    { dealId: "novabio", stage: "Documentation", category: "Compliance", name: "Management Rights Letter", status: "Pending" },
    { dealId: "novabio", stage: "Documentation", category: "Compliance", name: "Director Indemnification Agreement", status: "Pending" },
    { dealId: "novabio", stage: "Documentation", category: "Compliance", name: "ABAC Policy", status: "Pending" },
    { dealId: "novabio", stage: "Documentation", category: "Compliance", name: "Other BVP Standard Documents", status: "Pending" },
    // Closing
    { dealId: "novabio", stage: "Closing", category: "Other", name: "Closing Conditions Checklist", status: "Pending" },
    { dealId: "novabio", stage: "Closing", category: "Other", name: "Valuation Report", status: "Pending" },
    // Post Closing
    { dealId: "novabio", stage: "Post Closing", category: "Contracts & Legal", name: "Post Closing Checklist", status: "Pending" },

    // ── GreenGrid Energy ──
    // Term Sheet
    { dealId: "greengrid", stage: "Term Sheet", category: "Contracts & Legal", name: "NDA", status: "Received" },
    { dealId: "greengrid", stage: "Term Sheet", category: "Contracts & Legal", name: "Term Sheet", status: "Pending" },
    { dealId: "greengrid", stage: "Term Sheet", category: "Other", name: "Flash", status: "Pending" },
    { dealId: "greengrid", stage: "Term Sheet", category: "Other", name: "IR", status: "Pending" },
    // Due Diligence
    { dealId: "greengrid", stage: "Due Diligence", category: "Due Diligence", name: "Financial Due Diligence", status: "Pending" },
    { dealId: "greengrid", stage: "Due Diligence", category: "Due Diligence", name: "Legal Due Diligence", status: "Pending" },
    { dealId: "greengrid", stage: "Due Diligence", category: "Due Diligence", name: "IDD", status: "Pending" },
    { dealId: "greengrid", stage: "Due Diligence", category: "Due Diligence", name: "Sanction Check", status: "Pending" },
    // Documentation
    { dealId: "greengrid", stage: "Documentation", category: "Contracts & Legal", name: "Share Purchase Agreement (SPA)", status: "Pending" },
    { dealId: "greengrid", stage: "Documentation", category: "Contracts & Legal", name: "Share Subscription Agreement (SSA)", status: "Pending" },
    { dealId: "greengrid", stage: "Documentation", category: "Contracts & Legal", name: "Shareholders Agreement (SHA)", status: "Pending" },
    { dealId: "greengrid", stage: "Documentation", category: "Contracts & Legal", name: "Disclosure Letter", status: "Pending" },
    { dealId: "greengrid", stage: "Documentation", category: "Contracts & Legal", name: "Promoter Employment Agreement", status: "Pending" },
    { dealId: "greengrid", stage: "Documentation", category: "Contracts & Legal", name: "CP Completion Certificate", status: "Pending" },
    { dealId: "greengrid", stage: "Documentation", category: "Contracts & Legal", name: "Valuation Reports", status: "Pending" },
    { dealId: "greengrid", stage: "Documentation", category: "Compliance", name: "FCPA Questionnaire", status: "Pending" },
    { dealId: "greengrid", stage: "Documentation", category: "Compliance", name: "ESG Questionnaire", status: "Pending" },
    { dealId: "greengrid", stage: "Documentation", category: "Compliance", name: "Management Rights Letter", status: "Pending" },
    { dealId: "greengrid", stage: "Documentation", category: "Compliance", name: "Director Indemnification Agreement", status: "Pending" },
    { dealId: "greengrid", stage: "Documentation", category: "Compliance", name: "ABAC Policy", status: "Pending" },
    { dealId: "greengrid", stage: "Documentation", category: "Compliance", name: "Other BVP Standard Documents", status: "Pending" },
    // Closing
    { dealId: "greengrid", stage: "Closing", category: "Other", name: "Closing Conditions Checklist", status: "Pending" },
    { dealId: "greengrid", stage: "Closing", category: "Other", name: "Valuation Report", status: "Pending" },
    // Post Closing
    { dealId: "greengrid", stage: "Post Closing", category: "Contracts & Legal", name: "Post Closing Checklist", status: "Pending" },
  ],
};