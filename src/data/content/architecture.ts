export const architectureContent = {
  sectionLabel: "How it Works",
  headline: "An edge-first topology converting raw optical streams into lightweight structured events.",
  summary: "Raw video never leaves the premises unless requested for explicit forensic retrieval. The edge node processes feeds locally, generating structured JSON payloads for heatmaps, queue forecasts, and stock levels.",
  nodes: [
    {
      stage: "Optical ingestion tier",
      tech: "1080p / 4MP IP Cameras over PoE (15-30 FPS)",
      detail: "Wide-angle ceiling and shelf-directed optics cover entrance zones, main aisles, targeted end-caps, and checkout lanes."
    },
    {
      stage: "Edge inference node",
      tech: "Qualcomm Dragonwing IQ-9075 (Up to 100 TOPS)",
      detail: "Executes simultaneous detection, spatial mapping, trajectory projection, and non-biometric vector association across up to 16 camera streams."
    },
    {
      stage: "Structured event engine",
      tech: "Python Event Pipeline & MQTT Broker",
      detail: "Extracts micro-events: interaction boundaries entered, sustained dwell timestamps, stock grid fill ratios, and checkout line counts."
    },
    {
      stage: "Autonomous local persistence",
      tech: "On-device PostgreSQL instance",
      detail: "Maintains full operational logs, historical baselines, and active alerts locally. Outages cause zero downtime or loss of monitoring."
    },
    {
      stage: "Synchronization daemon & presentation",
      tech: "Secure lightweight JSON sync to React Dashboard & Staff Mobile App",
      detail: "Transmits compressed analytics packets when connectivity is confirmed, updating central dashboards and alerting on-duty floor staff."
    }
  ],
  privacyPledge: "Under no circumstance are facial embeddings, biometric records, or video streams archived to remote cloud infrastructure. Dwell tracking relies exclusively on temporary appearance bounding vectors that expire automatically upon store exit."
};
