export const feasibilityContent = {
  sectionLabel: "Feasibility",
  headline: "Pragmatic deployment economics designed around existing retail infrastructure.",
  subhead: "Rather than mandating expensive store remodeling, IntelliSales leverages existing camera assets and standard POS integrations.",
  pillars: [
    {
      label: "Infrastructure compatibility",
      description: "Operates seamlessly on existing analog or IP CCTV networks via RTSP video ingestion without replacing current cameras."
    },
    {
      label: "Operational continuity",
      description: "Integrates directly with inventory databases and POS software via standard APIs without retraining cashiers or slowing checkout."
    },
    {
      label: "Regulatory safety",
      description: "Generates ephemeral session identifiers without retaining face crops or biometric descriptors, complying with DPDP 2023 and GDPR."
    },
    {
      label: "Accessible capital threshold",
      description: "Deployments leverage existing CCTV cameras and standard local networks, delivering positive operational payback within five to six months without costly store remodeling."
    }
  ],
  businessFlow: [
    { step: "Deployment", text: "Turnkey software deployment on existing store cameras" },
    { step: "Immediate Value", text: "Real-time shelf alerts and continuous dwell heatmaps" },
    { step: "Measured ROI", text: "Drastic reduction in walk-outs and recovery of 2-3 daily audit hours" },
    { step: "Targeted Expansion", text: "Optional modular shelf-camera upgrades unlock fine-grained planogram verification" },
    { step: "Multi-Store Scale", text: "Validated store configuration template replicated across chain branches" }
  ],
  developmentTimeline: [
    {
      phaseNumber: "01",
      phaseName: "Calibrate",
      scope: "Camera mapping & zone calibration",
      description: "Audit existing 14 store cameras, establish zone homography planes, define shelf boundary coordinates, and test edge compute connectivity."
    },
    {
      phaseNumber: "02",
      phaseName: "Integrate",
      scope: "POS link & rule engine",
      description: "Establish real-time API or webhook linkage to the store's POS and backroom inventory database before CV testing commences."
    },
    {
      phaseNumber: "03",
      phaseName: "Pilot",
      scope: "Footfall & queue alert validation",
      description: "Deploy edge node running shopper dwell tracking and proactive queue prediction; validate accuracy and verify alert response rates."
    },
    {
      phaseNumber: "04",
      phaseName: "Expand",
      scope: "Dedicated shelf optics & planogram auditing",
      description: "Mount 16 narrow-field shelf cameras across high-margin aisles to enable automated planogram compliance and granular stock fill monitoring."
    }
  ],
  limitations: [
    {
      limitation: "Heavy rush causes occlusion and under-counting",
      strategy: "Use overhead wide-angle cameras positioned directly over long shelf zones and high-traffic aisles."
    },
    {
      limitation: "A blocked camera can stop reliable zone analytics",
      strategy: "Run automated camera-health and lens obstruction checks; immediately flag the affected zone and notify store staff."
    },
    {
      limitation: "Queue prediction can fail during sudden demand shifts",
      strategy: "Combine arrival rate, queue length, service rate, and active counter status; automatically fall back to live queue detection when model confidence drops."
    },
    {
      limitation: "Camera tilt or physical movement invalidates a calibrated zone",
      strategy: "Map shelf zones independently so recalibration is restricted only to the moved optical sensor without store-wide disruption."
    },
    {
      limitation: "Heavily occluded shoppers can be under-counted even with weighting",
      strategy: "Aggregate occupancy metrics across adjacent zones rather than forcing an exact headcount in dense clusters."
    }
  ],
  soar: [
    {
      label: "Strength",
      title: "Precision replenishment guidance",
      body: "Alerts direct floor staff to the exact shelf aisle and slot, minimizing search delays, while automated planogram tracking limits layout drift."
    },
    {
      label: "Opportunity",
      title: "Tier-2 and Tier-3 supermarket penetration",
      body: "Regional supermarkets desire enterprise-level intelligence but cannot bear enterprise cloud subscription pricing; lightweight local processing makes adoption viable."
    },
    {
      label: "Aspiration",
      title: "Unified retail intelligence ecosystem",
      body: "Granular shopper attention data empowers retailers to negotiate shelf placement with FMCG brands while replacing three separate fragmented software consoles."
    },
    {
      label: "Result",
      title: "Higher customer conversion & zero queue friction",
      body: "Staff spend time assisting customers rather than auditing shelves; backup billing counters open minutes before long queues create friction."
    }
  ]
};
