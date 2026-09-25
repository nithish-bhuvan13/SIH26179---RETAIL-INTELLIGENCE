export const solutionContent = {
  sectionLabel: "Solution",
  headline: "An on-device edge intelligence layer linking shelves, checkout queues, and floor staff in real time.",
  subhead: "IntelliSales replaces fragmented retail utilities with local computer vision processing that operates continuously without cloud dependency.",
  pillars: [
    {
      title: "Stock verification every 15 minutes",
      description: "Shelf-facing cameras audit inventory levels automatically. The automated replenishment system cross-references visual gaps against live POS inventory before alerting floor staff, eliminating false restocking calls."
    },
    {
      title: "Predictive queue management",
      description: "Rather than waiting for checkout counters to overflow, queue congestion is anticipated approximately five minutes ahead using arrival and service velocity models, prompting early counter openings."
    },
    {
      title: "Real dwell measurement",
      description: "Shopper attention is measured by true interaction time (shoppers staying within 0.7 to 1.5 meters for more than 7 seconds), filtering out casual transit through aisles."
    },
    {
      title: "Tier-2 and Tier-3 store resilience",
      description: "Inference, database logging, and alerting run entirely on the local edge node. Full analytics continue even during network outages, syncing to cloud reporting once restored."
    },
    {
      title: "Privacy by design",
      description: "No facial or biometric identifiers are stored. Shoppers are tracked across camera transitions using anonymous appearance feature vectors and ephemeral session IDs, compliant with DPDP and GDPR."
    },
    {
      title: "Unified command dashboard",
      description: "One operational console consolidates real-time shelf warnings, dwell heatmaps, and staffing recommendations, eliminating the need to manage multiple disparate platforms."
    }
  ],
  pipelineSteps: [
    {
      id: "shopper-activity",
      name: "Shopper activity detection",
      trigger: "0.7-1.5m zone, >7s dwell",
      description: "Tracks shoppers inside interaction boundaries. Fast pass-throughs are ignored; sustained dwell generates footfall counts and homography-based shelf heatmaps.",
      output: "Interaction JSON & zone heatmaps"
    },
    {
      id: "stock-detection",
      name: "In-store stock detection",
      trigger: "15-minute interval cycle",
      description: "Shelf-facing cameras evaluate product presence and depth. The replenishment rule engine cross-checks visual depletion against POS data.",
      output: "Verified replenishment alert"
    },
    {
      id: "queue-detection",
      name: "Queue detection at billing",
      trigger: "Live arrival rate & counter status",
      description: "Monitors checkout headcounts and service durations to forecast congestion five minutes prior to threshold breach.",
      output: "Proactive counter dispatch signal"
    },
    {
      id: "local-aggregation",
      name: "Local storage & unified sync",
      trigger: "Offline-first PostgreSQL database",
      description: "Aggregates edge telemetry events locally. Synchronizes to central servers when external uplink is healthy, serving real-time KPIs to the web dashboard and staff app.",
      output: "Unified dashboard visualization"
    }
  ]
};
