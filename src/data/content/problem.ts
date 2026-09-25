export const problemContent = {
  sectionLabel: "Problem",
  headline: "Three disconnected blind spots cost retailers sales before stock issues are even detected.",
  description: "Traditional retail operations rely on disjointed tools and manual floor audits. Inventory systems only show what has been scanned at point of sale, ignoring shelf availability, customer dwell interest, and register bottlenecks until revenue is already lost.",
  stats: [
    {
      value: "30%",
      caption: "of customers walk out when an item is missing on the shelf, even while replacement stock sits untouched in the back storage room.",
      tone: "rust" as const,
    },
    {
      value: "73%",
      caption: "of shoppers abandon their carts entirely and leave if checkout queues exceed a five-minute wait time.",
      tone: "rust" as const,
    },
    {
      value: "2-3 hrs",
      caption: "wasted daily by store staff manually auditing aisles, verifying shelf drift, and reconciling stock gaps.",
      tone: "default" as const,
    }
  ],
  painPoints: [
    {
      title: "Blind stock replenishment",
      description: "Store managers guess why a product is underperforming and discount blindly, unable to distinguish poor demand from an empty shelf."
    },
    {
      title: "Reactive register management",
      description: "Checkout queues are handled only after lines have already backed up into aisles and customer complaints have started."
    },
    {
      title: "Siloed operational data",
      description: "Zero connection between shelf vision, live inventory balances, and floor staff allocation creates chronic inefficiencies."
    }
  ]
};
