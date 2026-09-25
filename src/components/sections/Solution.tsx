import React, { useState } from 'react';
import { solutionContent } from '../../data/content/solution';
import { HairlineDivider } from '../ui/HairlineDivider';

export const Solution: React.FC = () => {
  const [activePipeline, setActivePipeline] = useState<number>(0);

  return (
    <section id="solution" className="bg-ink text-paper py-20 lg:py-28 relative scroll-mt-16">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-[4px] bg-teal-300/15 border border-teal-300/35 text-teal-300 font-heading text-lg sm:text-xl font-bold tracking-wider uppercase shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-300"></span>
            {solutionContent.sectionLabel}
          </span>
        </div>

        {/* Section Heading & Subhead */}
        <div className="max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-paper leading-tight">
            {solutionContent.headline}
          </h2>
          <p className="mt-4 font-body text-base text-slate leading-relaxed">
            {solutionContent.subhead}
          </p>
        </div>

        {/* Interactive Three-Pipeline Architecture Flow Diagram */}
        <div className="mt-14 p-6 sm:p-8 border border-teal-300/30 bg-[#071310] rounded-[4px]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-teal-300/20 gap-4">
            <div>
              <h3 className="font-heading text-lg font-semibold text-paper">
                Interactive edge pipeline orchestration
              </h3>
              <p className="font-body text-xs text-slate mt-1">
                Select a stage to inspect its optical triggers, computer vision models, and local event generation.
              </p>
            </div>
            <span className="font-body text-xs text-teal-300 font-semibold bg-teal-700/20 px-3 py-1 rounded-[4px] border border-teal-300/30 self-start sm:self-auto">
              Real-time asynchronous processing
            </span>
          </div>

          {/* Pipeline Interactive Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-6">
            {solutionContent.pipelineSteps.map((step, idx) => {
              const isSelected = activePipeline === idx;
              return (
                <button
                  key={step.id}
                  onClick={() => setActivePipeline(idx)}
                  className={`text-left p-4 rounded-[4px] border transition-all ${
                    isSelected
                      ? 'border-teal-300 bg-teal-700/25 text-paper'
                      : 'border-teal-300/20 bg-ink/50 text-slate hover:text-paper hover:border-teal-300/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-body text-xs font-semibold text-teal-300">
                      Phase 0{idx + 1}
                    </span>
                    {isSelected && (
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-300" />
                    )}
                  </div>
                  <div className="font-heading text-sm font-medium leading-snug">
                    {step.name}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Pipeline Detail Box */}
          <div className="mt-6 p-6 border border-teal-300/30 bg-ink/80 rounded-[4px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="font-heading font-semibold text-lg text-paper">
                    {solutionContent.pipelineSteps[activePipeline].name}
                  </span>
                  <span className="font-body text-xs px-2.5 py-0.5 rounded-[4px] bg-teal-700/30 text-teal-300 border border-teal-300/30 font-medium">
                    Trigger: {solutionContent.pipelineSteps[activePipeline].trigger}
                  </span>
                </div>
                <p className="font-body text-sm text-paper/90 leading-relaxed">
                  {solutionContent.pipelineSteps[activePipeline].description}
                </p>
              </div>

              <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-teal-300/20 pt-4 lg:pt-0 lg:pl-6">
                <span className="font-body text-xs text-slate uppercase tracking-wider block mb-1">
                  Structured Edge Output
                </span>
                <span className="font-body text-xs text-teal-300 font-medium">
                  {solutionContent.pipelineSteps[activePipeline].output}
                </span>
              </div>
            </div>
          </div>

          {/* Local-to-Cloud Convergent Bridge Note */}
          <div className="mt-6 pt-4 border-t border-teal-300/20 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate gap-2">
            <span>Local edge persistence: PostgreSQL running offline on Dragonwing NVMe</span>
            <span className="text-teal-300">Syncs to Unified Web Dashboard when network is available</span>
          </div>
        </div>

        {/* Six Structural Pillars */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutionContent.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 border border-teal-300/20 bg-[#0a1815] rounded-[4px] flex flex-col justify-between"
            >
              <div>
                <h4 className="font-heading text-base font-semibold text-paper">
                  {pillar.title}
                </h4>
                <p className="mt-3 font-body text-sm text-slate leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
      <HairlineDivider className="mt-20 opacity-30" />
    </section>
  );
};
