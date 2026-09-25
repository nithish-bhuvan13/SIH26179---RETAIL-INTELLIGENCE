import React from 'react';
import { feasibilityContent } from '../../data/content/feasibility';
import { HairlineDivider } from '../ui/HairlineDivider';

export const Feasibility: React.FC = () => {
  return (
    <section id="feasibility" className="bg-paper py-20 lg:py-28 relative scroll-mt-16">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-[4px] bg-teal-700/10 border border-teal-700/30 text-teal-700 font-heading text-lg sm:text-xl font-bold tracking-wider uppercase shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-700"></span>
            {feasibilityContent.sectionLabel}
          </span>
        </div>

        {/* Headline */}
        <div className="max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-ink leading-tight">
            {feasibilityContent.headline}
          </h2>
          <p className="mt-4 font-body text-base text-slate leading-relaxed">
            {feasibilityContent.subhead}
          </p>
        </div>

        {/* 1. Feasibility Pillars */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {feasibilityContent.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 bg-white border border-teal-300 rounded-[4px] shadow-sm flex flex-col justify-between"
            >
              <div>
                <h3 className="font-heading font-semibold text-base text-ink mb-2">
                  {pillar.label}
                </h3>
                <p className="font-body text-xs text-slate leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 2. Business Logic Chain (Investment -> Value -> ROI -> Expansion -> Scale) */}
        <div className="mt-16 p-8 bg-white border border-teal-300 rounded-[4px] shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-teal-300 gap-2">
            <div>
              <h3 className="font-heading text-xl font-semibold text-ink">
                Economic value chain & capital velocity
              </h3>
              <p className="font-body text-xs text-slate mt-0.5">
                From baseline CCTV retrofitting to multi-store chain replication.
              </p>
            </div>
            <span className="font-heading font-semibold text-sm text-teal-700">
              Rapid Payback & Turnkey Setup
            </span>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {feasibilityContent.businessFlow.map((node, idx) => (
              <div key={idx} className="p-4 bg-paper border border-teal-300/60 rounded-[4px] flex flex-col justify-between">
                <div>
                  <span className="font-body text-xs text-teal-700 font-semibold block mb-1">
                    Step {idx + 1}: {node.step}
                  </span>
                  <p className="font-body text-xs text-ink/90 leading-snug">
                    {node.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Development Phase Timeline (Genuine sequence 01 - 04) */}
        <div className="mt-16">
          <h3 className="font-heading text-xl font-semibold text-ink mb-6">
            Four-stage rollout roadmap
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {feasibilityContent.developmentTimeline.map((phase) => (
              <div
                key={phase.phaseNumber}
                className="p-6 bg-white border border-teal-300 rounded-[4px] shadow-sm"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-body text-sm font-semibold text-teal-700">
                    Phase {phase.phaseNumber}
                  </span>
                  <span className="font-heading text-xs font-medium text-slate uppercase">
                    {phase.phaseName}
                  </span>
                </div>
                <h4 className="font-heading text-sm font-semibold text-ink mb-2">
                  {phase.scope}
                </h4>
                <p className="font-body text-xs text-slate leading-relaxed">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Limitations and Strategies Table */}
        <div className="mt-16">
          <h3 className="font-heading text-xl font-semibold text-ink mb-6">
            Technical limitations & mitigation strategies
          </h3>
          <div className="border border-teal-300 rounded-[4px] overflow-hidden bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-body divide-y divide-teal-300">
                <thead className="bg-[#eef5f3] font-heading font-semibold text-ink">
                  <tr>
                    <th scope="col" className="px-6 py-4 w-1/2">Operational Challenge / Edge Limit</th>
                    <th scope="col" className="px-6 py-4 w-1/2">Architectural Mitigation Strategy</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-teal-300/40">
                  {feasibilityContent.limitations.map((row, idx) => (
                    <tr key={idx} className="hover:bg-paper/50 transition-colors">
                      <td className="px-6 py-4 font-medium text-ink align-top">
                        {row.limitation}
                      </td>
                      <td className="px-6 py-4 text-slate align-top">
                        {row.strategy}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 5. SOAR Analysis Matrix */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {feasibilityContent.soar.map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#071310] border border-teal-300/30 text-paper rounded-[4px]"
            >
              <span className="font-body text-xs font-semibold text-teal-300 uppercase tracking-wider block mb-1">
                {item.label}
              </span>
              <h4 className="font-heading text-base font-semibold text-paper mb-2">
                {item.title}
              </h4>
              <p className="font-body text-xs text-slate leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>

      </div>
      <HairlineDivider className="mt-20" />
    </section>
  );
};
