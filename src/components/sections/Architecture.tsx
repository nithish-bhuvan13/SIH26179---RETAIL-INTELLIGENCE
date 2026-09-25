import React from 'react';
import { architectureContent } from '../../data/content/architecture';
import { HairlineDivider } from '../ui/HairlineDivider';

export const Architecture: React.FC = () => {
  return (
    <section id="architecture" className="bg-paper py-20 lg:py-28 relative scroll-mt-16">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-[4px] bg-teal-700/10 border border-teal-700/30 text-teal-700 font-heading text-lg sm:text-xl font-bold tracking-wider uppercase shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-700"></span>
            {architectureContent.sectionLabel}
          </span>
        </div>

        {/* Headline & Summary */}
        <div className="max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-ink leading-tight">
            {architectureContent.headline}
          </h2>
          <p className="mt-4 font-body text-base text-slate leading-relaxed">
            {architectureContent.summary}
          </p>
        </div>

        {/* 5-Stage Architecture Topology Stack */}
        <div className="mt-14 space-y-4">
          {architectureContent.nodes.map((node, idx) => (
            <div
              key={idx}
              className="p-6 bg-white border border-teal-300 rounded-[4px] shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="flex items-start gap-4">
                <span className="font-heading font-semibold text-xl text-teal-700 w-8 shrink-0">
                  0{idx + 1}
                </span>
                <div>
                  <h3 className="font-heading text-base font-semibold text-ink">
                    {node.stage}
                  </h3>
                  <p className="mt-1 font-body text-sm text-slate">
                    {node.detail}
                  </p>
                </div>
              </div>

              <div className="md:text-right shrink-0 border-t md:border-t-0 pt-3 md:pt-0 border-teal-300/30">
                <span className="font-body text-[11px] text-slate uppercase tracking-wider block">
                  Hardware / Protocol
                </span>
                <span className="font-heading font-medium text-xs text-teal-700">
                  {node.tech}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* DPDP Compliance & Privacy Note */}
        <div className="mt-12 p-6 border-l-4 border-teal-700 bg-teal-300/10 rounded-r-[4px]">
          <h4 className="font-heading text-sm font-semibold text-ink">
            Non-biometric tracking & DPDP compliance assurance
          </h4>
          <p className="mt-2 font-body text-sm text-slate leading-relaxed">
            {architectureContent.privacyPledge}
          </p>
        </div>

      </div>
      <HairlineDivider className="mt-20" />
    </section>
  );
};
