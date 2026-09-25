
export const technicalContent = {
  sectionLabel: "Technical",
  headline: "Engineered for harsh retail environments and strict edge compute budgets.",
  subhead: "An integrated hardware-software architecture built to run directly on-premises with real-time throughput.",
  hardware: [
    {
      component: "Optical Sensor Network",
      spec: "1080p / 4MP IP Cameras (15-30 FPS)",
      purpose: "Wide-angle (up to 120°) fixed-lens cameras covering aisles, shelf displays, and register zones."
    },
    {
      component: "Switching & Ingestion",
      spec: "Managed PoE+ Switch (15.4-90W/port) + NVR",
      purpose: "Power-over-Ethernet cabling isolates video network traffic and aggregates feeds directly to edge node."
    },
    {
      component: "Edge Compute Engine",
      spec: "Qualcomm Dragonwing IQ-9075",
      purpose: "Up to 100 TOPS dedicated neural processing power, running up to 16 concurrent full-rate camera feeds."
    },
    {
      component: "Local Datastore",
      spec: "PostgreSQL on local NVMe SSD",
      purpose: "Stores real-time dwell logs, trajectory events, and shelf audit records with offline data retention."
    }
  ],
  aiPipeline: [
    {
      step: 1,
      model: "YOLOv11",
      task: "Shopper & shelf detection",
      details: "Performs simultaneous real-time person detection and multi-class item depletion grading across shelf slots."
    },
    {
      step: 2,
      model: "ByteTrack",
      task: "Multi-person tracking",
      details: "Associates detections across consecutive video frames, managing brief visual occlusions without ID loss."
    },
    {
      step: 3,
      model: "OSNet",
      task: "Cross-camera re-identification",
      details: "Extracts appearance feature embeddings to link shopper paths across distinct camera views without biometrics."
    },
    {
      step: 4,
      model: "MediaPipe",
      task: "Shopper pose estimation",
      details: "Analyzes upper-body orientation and hand reach vectors to classify passive gazing versus active product engagement."
    },
    {
      step: 5,
      model: "DBSCAN",
      task: "Queue spatial clustering",
      details: "Clusters shoppers near checkout lanes by proximity and orientation, measuring real line depth and wait times."
    },
    {
      step: 6,
      model: "OpenCV",
      task: "Homography-based heatmap mapping",
      details: "Projects camera coordinate points onto calibrated 2D store blueprints for accurate spatial dwell visualization."
    }
  ],
  softwareStack: {
    backend: "Python 3.11 with edge inference bindings, AsyncIO REST service, and MQTT message broker",
    frontend: "React.js management dashboard with real-time telemetry streaming and staff mobile notification app",
    intelligence: "ARS rule engine (inventory validation), Event engine (CV-to-JSON parsing), and Sync daemon (intermittent cloud replication)"
  }
};
