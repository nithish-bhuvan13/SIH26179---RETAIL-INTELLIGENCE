import React from 'react';
import { researchContent } from '../../data/content/research';
import { HairlineDivider } from '../ui/HairlineDivider';

export const Research: React.FC = () => {
  return (
    <section id="research" className="bg-paper py-20 lg:py-28 relative scroll-mt-16">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-[4px] bg-teal-700/10 border border-teal-700/30 text-teal-700 font-heading text-lg sm:text-xl font-bold tracking-wider uppercase shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-700"></span>
            {researchContent.sectionLabel}
          </span>
        </div>

        {/* Headline */}
        <div className="max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-ink leading-tight">
            {researchContent.headline}
          </h2>
        </div>

        {/* 1. Field Research Case Investigation */}
        <div className="mt-14 p-8 bg-white border border-teal-300 rounded-[4px] shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-teal-300 gap-2">
            <div>
              <span className="font-body text-xs text-teal-700 font-bold uppercase tracking-wider block">
                Empirical Validation Study
              </span>
              <h3 className="font-heading text-xl font-semibold text-ink mt-1">
                Field research: {researchContent.fieldResearch.location}
              </h3>
            </div>
            <span className="font-body text-xs text-slate">
              Primary on-site supermarket audit
            </span>
          </div>

          <p className="mt-4 font-body text-sm text-slate">
            {researchContent.fieldResearch.context}
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {researchContent.fieldResearch.findings.map((f, idx) => (
              <div key={idx} className="p-4 bg-paper border border-teal-300/60 rounded-[4px]">
                <h4 className="font-heading text-sm font-semibold text-ink mb-2">
                  {f.point}
                </h4>
                <p className="font-body text-xs text-slate leading-relaxed">
                  {f.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Academic Literature Citations */}
        <div className="mt-16">
          <h3 className="font-heading text-xl font-semibold text-ink mb-6">
            Cited academic literature & peer-reviewed foundations
          </h3>
          <div className="space-y-4">
            {researchContent.citations.map((cite, idx) => (
              <div
                key={idx}
                className="p-5 bg-white border border-teal-300 rounded-[4px] shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <span className="font-body text-xs text-slate">
                      {cite.authors}
                    </span>
                    <h4 className="font-heading text-sm font-semibold text-ink">
                      "{cite.title}"
                    </h4>
                    <p className="font-body text-xs text-slate">
                      {cite.venue}
                    </p>
                  </div>
                  <span className="font-body text-[11px] font-medium text-teal-700 shrink-0 bg-teal-300/20 px-2 py-1 rounded-[2px] border border-teal-300/40">
                    {cite.doi}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
      <HairlineDivider className="mt-20" />
    </section>
  );
};
