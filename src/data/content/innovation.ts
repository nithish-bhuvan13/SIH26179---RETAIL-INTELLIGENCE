export const innovationContent = {
  sectionLabel: "Innovation",
  headline: "Five distinct architectural advantages that separate IntelliSales from conventional computer vision.",
  items: [
    {
      id: "dwell-heatmaps",
      title: "Interaction-qualified dwell mapping",
      badge: "Vision Precision",
      highlight: "Interaction time vs simple presence",
      description: "Standard heatmaps highlight where people walk, which mostly reflects aisle geometry rather than genuine consumer interest. IntelliSales filters for intentional shopper pauses (minimum 7 seconds within a 0.7-1.5m shelf envelope) and applies homography transformation to generate actionable planogram heatmaps.",
      layoutStyle: "wide-banner"
    },
    {
      id: "queue-forecast",
      title: "Five-minute queue congestion foresight",
      badge: "Predictive Analytics",
      highlight: "Early notification before queues form",
      description: "Instead of alarming staff after a queue has formed, the DBSCAN clustering engine monitors incoming footfall velocity and current checkout duration to project line overflow five minutes ahead, allowing staff to open an adjacent register ahead of congestion.",
      layoutStyle: "split-accent"
    },
    {
      id: "pos-crosscheck",
      title: "POS-corroborated replenishment alerts",
      badge: "False-Alert Suppression",
      highlight: "Visual shelf gap + Live inventory validation",
      description: "A missing box on a shelf does not necessarily indicate a backroom restock need. IntelliSales' ARS rule engine reconciles YOLOv11 shelf observations with live inventory levels from the POS. If warehouse stock is zero, it flags a supplier re-order; if stock exists in backroom, it notifies floor staff with the exact aisle coordinate.",
      layoutStyle: "split-metric"
    },
    {
      id: "non-biometric-reid",
      title: "Appearance vector re-identification without face capture",
      badge: "DPDP & GDPR Compliance",
      highlight: "Zero facial biometric storage",
      description: "Shoppers moving between overlapping camera angles are tracked using lightweight OSNet appearance feature vectors (clothing tones, geometric silhouettes, trajectory vectors). No face recognition models are initialized, ensuring privacy compliance.",
      layoutStyle: "technical-compact"
    },
    {
      id: "edge-sovereignty",
      title: "Local inference with opportunistic sync",
      badge: "Zero Latency & Fault Tolerance",
      highlight: "100% operational offline",
      description: "All inference executes locally on the Qualcomm Dragonwing processor. The store remains fully monitored with real-time audio/app alerts even when broadband links fail. Cloud bandwidth is conserved by transmitting lightweight JSON events rather than video streams.",
      layoutStyle: "hardware-stat"
    }
  ]
};
