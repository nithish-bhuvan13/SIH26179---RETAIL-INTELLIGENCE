import React from 'react';
import { innovationContent } from '../../data/content/innovation';
import { HairlineDivider } from '../ui/HairlineDivider';

export const Innovation: React.FC = () => {
  return (
    <section id="innovation" className="bg-ink text-paper py-20 lg:py-28 relative scroll-mt-16">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-[4px] bg-teal-300/15 border border-teal-300/35 text-teal-300 font-heading text-lg sm:text-xl font-bold tracking-wider uppercase shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-300"></span>
            {innovationContent.sectionLabel}
          </span>
        </div>

        {/* Headline */}
        <div className="max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-paper leading-tight">
            {innovationContent.headline}
          </h2>
        </div>

        {/* 5 Distinct Visual Treatments */}
        <div className="mt-14 space-y-8">
          
          {/* 1. Wide Banner Treatment: Interaction Heatmaps */}
          <div className="p-8 border border-teal-300/30 bg-[#071310] rounded-[4px]">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <span className="font-body text-xs font-semibold text-teal-300 uppercase tracking-wider px-2.5 py-1 bg-teal-700/20 border border-teal-300/30 rounded-[4px]">
                {innovationContent.items[0].badge}
              </span>
              <span className="font-heading text-xs text-paper/80">
                {innovationContent.items[0].highlight}
              </span>
            </div>
            <h3 className="font-heading text-2xl font-semibold text-paper">
              {innovationContent.items[0].title}
            </h3>
            <p className="mt-3 font-body text-sm sm:text-base text-slate max-w-3xl leading-relaxed">
              {innovationContent.items[0].description}
            </p>
            <div className="mt-6 pt-4 border-t border-teal-300/20 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-body">
              <div className="p-3 bg-ink/80 border border-teal-300/10 rounded-[4px]">
                <span className="text-slate block mb-1">Standard Vision Solution:</span>
                <span className="text-paper">Records simple aisle crossing as high interest (False Positive)</span>
              </div>
              <div className="p-3 bg-ink/80 border border-teal-300/30 rounded-[4px]">
                <span className="text-teal-300 block mb-1">IntelliSales Qualified Filter:</span>
                <span className="text-paper">Requires 0.7-1.5m shelf radius + &gt;7s sustained dwell</span>
              </div>
            </div>
          </div>

          {/* 2 & 3: Asymmetrical Pair: Queue Forecast & POS Re-order */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* 2. Queue Foresight (7 cols) */}
            <div className="lg:col-span-7 p-7 border-l-4 border-l-teal-300 border-t border-r border-b border-teal-300/30 bg-[#0a1815] rounded-r-[4px]">
              <span className="font-body text-xs font-semibold text-teal-300 uppercase tracking-wider block mb-2">
                {innovationContent.items[1].badge}
              </span>
              <h3 className="font-heading text-xl font-semibold text-paper">
                {innovationContent.items[1].title}
              </h3>
              <p className="mt-3 font-body text-sm text-slate leading-relaxed">
                {innovationContent.items[1].description}
              </p>
              <div className="mt-6 flex items-center gap-3 p-3 bg-ink border border-teal-300/20 rounded-[4px]">
                <span className="font-mono text-2xl font-bold text-teal-300">
                  -5 min
                </span>
                <span className="font-body text-xs text-slate">
                  Early warning threshold before register line exceeds 4 shoppers.
                </span>
              </div>
            </div>

            {/* 3. POS Crosscheck (5 cols) */}
            <div className="lg:col-span-5 p-7 border-l-4 border-l-rust border-t border-r border-b border-rust/40 bg-rust/5 rounded-r-[4px]">
              <span className="font-body text-xs font-semibold text-rust uppercase tracking-wider block mb-2">
                {innovationContent.items[2].badge}
              </span>
              <h3 className="font-heading text-xl font-semibold text-paper">
                {innovationContent.items[2].title}
              </h3>
              <p className="mt-3 font-body text-sm text-slate leading-relaxed">
                {innovationContent.items[2].description}
              </p>
              <div className="mt-6 p-3 bg-ink border border-rust/30 rounded-[4px] text-xs font-body font-medium text-rust">
                ARS Rule: Visual Depletion AND Backroom Inventory &gt; 0 = Floor Alert
              </div>
            </div>

          </div>

          {/* 4 & 5: Horizontal Grid: Privacy vs Edge Sovereignty */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* 4. Appearance Vector Re-ID */}
            <div className="p-7 border border-teal-300/20 bg-ink rounded-[4px]">
              <span className="font-body text-xs font-semibold text-teal-300 uppercase tracking-wider block mb-2">
                {innovationContent.items[3].badge}
              </span>
              <h3 className="font-heading text-lg font-semibold text-paper">
                {innovationContent.items[3].title}
              </h3>
              <p className="mt-3 font-body text-sm text-slate leading-relaxed">
                {innovationContent.items[3].description}
              </p>
              <div className="mt-4 pt-3 border-t border-teal-300/10 text-xs text-slate">
                Zero biometrics. Safe from privacy lawsuits and compliance overhead.
              </div>
            </div>

            {/* 5. Sovereign Edge Inference */}
            <div className="p-7 border border-teal-300/20 bg-ink rounded-[4px]">
              <span className="font-body text-xs font-semibold text-teal-300 uppercase tracking-wider block mb-2">
                {innovationContent.items[4].badge}
              </span>
              <h3 className="font-heading text-lg font-semibold text-paper">
                {innovationContent.items[4].title}
              </h3>
              <p className="mt-3 font-body text-sm text-slate leading-relaxed">
                {innovationContent.items[4].description}
              </p>
              <div className="mt-4 pt-3 border-t border-teal-300/10 text-xs text-slate">
                Operates without interruption during ISP failures in Tier-2/3 Indian cities.
              </div>
            </div>

          </div>

        </div>
      </div>
      <HairlineDivider className="mt-20 opacity-30" />
    </section>
  );
};
