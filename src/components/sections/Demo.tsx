import React, { useState, useEffect } from 'react';
import { StatusChip } from '../ui/StatusChip';
import { Button } from '../ui/Button';
import { HairlineDivider } from '../ui/HairlineDivider';

export const Demo: React.FC = () => {
  // Simulated telemetry state (client-side only, clearly declared)
  const [footfall, setFootfall] = useState<number>(318);
  const [dwellAverage, setDwellAverage] = useState<number>(54);
  const [queueShoppers, setQueueShoppers] = useState<number>(3);
  const [activeCounters, setActiveCounters] = useState<number>(2);
  const [congestionAlert, setCongestionAlert] = useState<boolean>(false);
  const [activeShelfTab, setActiveShelfTab] = useState<'all' | 'alerts'>('alerts');

  const [stockAlerts, setStockAlerts] = useState([
    {
      id: "alert-1",
      aisle: "Aisle 4 — Packaged Foods",
      item: "Sunflower Cooking Oil (1L)",
      shelfUnits: 2,
      posUnits: 28,
      status: "Restock from Backroom Dispatched",
      severity: "urgent" as const,
      timestamp: "Just now"
    },
    {
      id: "alert-2",
      aisle: "Aisle 2 — Personal Care",
      item: "Herbal Shampoo (400ml)",
      shelfUnits: 1,
      posUnits: 0,
      status: "Supplier Purchase Order Triggered",
      severity: "warning" as const,
      timestamp: "4 mins ago"
    },
    {
      id: "alert-3",
      aisle: "Aisle 7 — Dairy & Chilled",
      item: "Greek Yogurt Cups",
      shelfUnits: 4,
      posUnits: 36,
      status: "Staff Task Assigned: Bay 03",
      severity: "urgent" as const,
      timestamp: "9 mins ago"
    }
  ]);

  // Subtle real-time simulation tick
  useEffect(() => {
    const timer = setInterval(() => {
      setFootfall(prev => prev + (Math.random() > 0.4 ? 1 : 0));
      setDwellAverage(prev => Math.min(85, Math.max(35, prev + (Math.random() > 0.5 ? 1 : -1))));
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const handleSimulateQueueRush = () => {
    setQueueShoppers(prev => prev + 3);
    setCongestionAlert(true);
  };

  const handleOpenCounter = () => {
    setActiveCounters(prev => Math.min(5, prev + 1));
    setQueueShoppers(prev => Math.max(1, prev - 2));
    setCongestionAlert(false);
  };

  return (
    <section id="demo" className="bg-paper py-20 lg:py-28 relative scroll-mt-16">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-[4px] bg-teal-700/10 border border-teal-700/30 text-teal-700 font-heading text-lg sm:text-xl font-bold tracking-wider uppercase shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-700"></span>
            Demo
          </span>
        </div>

        {/* Headline & Transparency Disclaimer */}
        <div className="max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-ink leading-tight">
            Interactive telemetry and live alert console simulation.
          </h2>
          <p className="mt-4 font-body text-base text-slate leading-relaxed">
            Experience how the on-premises edge dashboard processes shopper dwell, forecasts register delays, and validates shelf restock alerts against live POS balances.
          </p>
          <div className="mt-4 p-3 bg-teal-300/20 border border-teal-300 rounded-[4px] text-xs font-body text-ink">
            <strong>Demonstration notice:</strong> This console runs mock presentational telemetry in your browser to simulate edge node behavior. It does not connect to live camera hardware.
          </div>
        </div>

        {/* Live Simulation Console */}
        <div className="mt-12 bg-white border border-teal-300 rounded-[4px] shadow-sm overflow-hidden">
          
          {/* Header Bar */}
          <div className="p-4 sm:p-6 bg-ink text-paper border-b border-teal-300/30 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <StatusChip label="Edge Node Live" variant="teal" pulse />
              <span className="font-body text-xs text-slate font-medium">
                Host: Dragonwing-IQ-9075
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-body text-xs text-teal-300 font-medium">
                Local DB: <span className="font-mono text-teal-300 font-semibold">2,419</span> events logged today
              </span>
              <button
                onClick={handleSimulateQueueRush}
                className="px-3 py-1.5 bg-teal-700 hover:bg-[#084843] text-paper text-xs font-body rounded-[4px] transition-colors"
              >
                Simulate sudden rush
              </button>
            </div>
          </div>

          {/* Metric KPI Gauges (using IBM Plex Mono) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-b border-teal-300 divide-y sm:divide-y-0 sm:divide-x divide-teal-300">
            
            {/* Footfall */}
            <div className="p-6">
              <span className="font-body text-xs text-slate block mb-1">
                Store Footfall (Today)
              </span>
              <div className="font-mono text-3xl font-semibold text-ink">
                {footfall}
              </div>
              <span className="font-mono text-xs text-teal-700 mt-2 block">
                +14 in last 15 min
              </span>
            </div>

            {/* Dwell Attention */}
            <div className="p-6">
              <span className="font-body text-xs text-slate block mb-1">
                Average Qualified Dwell
              </span>
              <div className="font-mono text-3xl font-semibold text-ink">
                {dwellAverage}s
              </div>
              <span className="font-body text-xs text-slate mt-2 block">
                Filter: &gt;7s within 1.5m
              </span>
            </div>

            {/* Queue Length & Forecast */}
            <div className={`p-6 transition-colors ${congestionAlert ? 'bg-rust/10' : ''}`}>
              <div className="flex items-center justify-between mb-1">
                <span className="font-body text-xs text-slate">
                  Active Checkout Queue
                </span>
                {congestionAlert && (
                  <span className="font-body text-[10px] text-rust font-bold animate-pulse">
                    ALERT
                  </span>
                )}
              </div>
              <div className="font-mono text-3xl font-semibold text-ink">
                {queueShoppers} shoppers
              </div>
              <span className={`font-body text-xs mt-2 block ${congestionAlert ? 'text-rust font-semibold' : 'text-slate'}`}>
                {congestionAlert ? "Congestion projected in 5 min" : "Wait time: 2.1 mins (Normal)"}
              </span>
            </div>

            {/* Counter Management */}
            <div className="p-6 flex flex-col justify-between">
              <div>
                <span className="font-body text-xs text-slate block mb-1">
                  Active Billing Counters
                </span>
                <div className="font-mono text-3xl font-semibold text-ink">
                  {activeCounters} / 5
                </div>
              </div>
              {congestionAlert && (
                <button
                  onClick={handleOpenCounter}
                  className="mt-3 w-full py-1.5 px-2 bg-rust hover:bg-[#a53f1f] text-paper text-xs font-body rounded-[4px] transition-colors"
                >
                  Dispatch cashier: Counter {activeCounters + 1}
                </button>
              )}
            </div>

          </div>

          {/* Shelf Restock Anomaly Feed */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <h3 className="font-heading text-lg font-semibold text-ink">
                  Automated shelf replenishment monitor
                </h3>
                <span className="font-body text-xs text-slate">
                  15-min optical scan cycle
                </span>
              </div>
              <div className="flex items-center gap-1 border border-teal-300 rounded-[4px] p-0.5 text-xs">
                <button
                  onClick={() => setActiveShelfTab('alerts')}
                  className={`px-3 py-1 rounded-[2px] transition-colors ${
                    activeShelfTab === 'alerts' ? 'bg-teal-700 text-paper' : 'text-slate'
                  }`}
                >
                  Active alerts ({stockAlerts.length})
                </button>
                <button
                  onClick={() => setActiveShelfTab('all')}
                  className={`px-3 py-1 rounded-[2px] transition-colors ${
                    activeShelfTab === 'all' ? 'bg-teal-700 text-paper' : 'text-slate'
                  }`}
                >
                  All 16 shelves
                </button>
              </div>
            </div>

            <div className="space-y-3 font-body text-xs">
              {stockAlerts.map((alert) => (
                <div
                  key={alert.id}
                  className="p-4 border border-teal-300/70 rounded-[4px] bg-paper flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${alert.severity === 'urgent' ? 'bg-rust animate-pulse' : 'bg-teal-700'}`} />
                      <span className="font-heading font-semibold text-sm text-ink font-sans">
                        {alert.item}
                      </span>
                      <span className="text-slate text-[11px]">
                        ({alert.aisle})
                      </span>
                    </div>
                    <div className="text-slate font-sans text-xs">
                      Shelf count: <strong className="text-rust font-mono">{alert.shelfUnits} units</strong> | Backroom POS inventory: <strong className="text-ink font-mono">{alert.posUnits} units</strong>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span className="px-2.5 py-1 rounded-[4px] bg-teal-300/30 text-teal-700 text-[11px] font-medium font-sans">
                      {alert.status}
                    </span>
                    <span className="text-slate text-[11px]">
                      {alert.timestamp}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reserved walkthrough video slot */}
          <div className="p-6 bg-paper border-t border-teal-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="font-heading font-medium text-sm text-ink block">
                Official video walkthrough
              </span>
              <span className="font-body text-xs text-slate">
                Recorded on-site demonstration showcasing hardware enclosure, camera setup, and cashier alerts.
              </span>
            </div>
            <Button
              as="a"
              href="#research"
              variant="outline"
              className="text-xs shrink-0"
            >
              Check research notes
            </Button>
          </div>

        </div>

      </div>
      <HairlineDivider className="mt-20" />
    </section>
  );
};
