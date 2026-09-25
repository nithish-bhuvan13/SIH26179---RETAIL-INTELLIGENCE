import React from 'react';
import { problemContent } from '../../data/content/problem';
import { StatNumber } from '../ui/StatNumber';
import { OutOfStockPlayer } from '../ui/OutOfStockPlayer';
import { HairlineDivider } from '../ui/HairlineDivider';

export const Problem: React.FC = () => {
  return (
    <section id="problem" className="bg-paper py-20 lg:py-28 relative scroll-mt-16">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-[4px] bg-teal-700/10 border border-teal-700/30 text-teal-700 font-heading text-lg sm:text-xl font-bold tracking-wider uppercase shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-700"></span>
            {problemContent.sectionLabel}
          </span>
        </div>

        {/* 60/40 Asymmetric Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (60% / 7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-ink leading-tight">
              {problemContent.headline}
            </h2>

            <p className="mt-6 font-body text-base text-slate leading-relaxed">
              {problemContent.description}
            </p>

            {/* Unboxed large stat callouts with Space Grotesk numerals */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-teal-300">
              {problemContent.stats.map((stat, idx) => (
                <StatNumber
                  key={idx}
                  value={stat.value}
                  caption={stat.caption}
                  tone={stat.tone}
                />
              ))}
            </div>

            {/* Core Operational Disconnects */}
            <div className="mt-12 space-y-6">
              {problemContent.painPoints.map((pain, idx) => (
                <div key={idx} className="border-l-2 border-teal-700 pl-4 py-1">
                  <h3 className="font-heading font-semibold text-base text-ink">
                    {pain.title}
                  </h3>
                  <p className="mt-1 font-body text-sm text-slate">
                    {pain.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (40% / 5 cols) — Out of Stock Evidence Frame */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="bg-white p-4 border border-teal-300 shadow-sm rounded-[4px]">
              <div className="mb-3 flex items-center justify-between">
                <span className="font-heading font-medium text-xs text-ink">
                  Shelf visual telemetry
                </span>
                <span className="font-body text-[11px] text-slate">
                  Optical feed
                </span>
              </div>
              <OutOfStockPlayer />
              <div className="mt-3 pt-3 border-t border-teal-300/40 text-xs text-slate font-body">
                An empty shelf directly triggers walk-outs. IntelliSales links camera verification directly to the stockroom inventory.
              </div>
            </div>

            {/* Operational Context note */}
            <div className="p-5 border border-rust/30 bg-rust/5 rounded-[4px]">
              <h4 className="font-heading text-sm font-semibold text-rust">
                The costly reality of shelf drift
              </h4>
              <p className="mt-2 font-body text-xs text-ink/80 leading-relaxed">
                When items sit misplaced in secondary aisles or deplete during rush hours, sales drop silently. Manual clipboard audits cannot keep pace with real-time customer carts.
              </p>
            </div>
          </div>

        </div>
      </div>
      <HairlineDivider className="mt-20" />
    </section>
  );
};
