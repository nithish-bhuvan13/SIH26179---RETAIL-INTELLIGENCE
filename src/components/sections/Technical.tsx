import React from 'react';
import { technicalContent } from '../../data/content/technical';
import { HairlineDivider } from '../ui/HairlineDivider';

export const Technical: React.FC = () => {
  return (
    <section id="technical" className="bg-ink text-paper py-20 lg:py-28 relative scroll-mt-16">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-[4px] bg-teal-300/15 border border-teal-300/35 text-teal-300 font-heading text-lg sm:text-xl font-bold tracking-wider uppercase shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-300"></span>
            {technicalContent.sectionLabel}
          </span>
        </div>

        {/* Headline */}
        <div className="max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-paper leading-tight">
            {technicalContent.headline}
          </h2>
          <p className="mt-4 font-body text-base text-slate leading-relaxed">
            {technicalContent.subhead}
          </p>
        </div>

        {/* 1. Hardware Specifications Breakdown */}
        <div className="mt-14">
          <h3 className="font-heading text-xl font-semibold text-paper mb-6">
            Physical deployment hardware tier
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalContent.hardware.map((item, idx) => (
              <div
                key={idx}
                className="p-6 border border-teal-300/30 bg-[#071310] rounded-[4px] flex flex-col justify-between"
              >
                <div>
                  <span className="font-body text-xs text-slate uppercase tracking-wider block mb-1">
                    {item.component}
                  </span>
                  <div className="font-heading font-semibold text-base text-teal-300 mb-3">
                    {item.spec}
                  </div>
                </div>
                <p className="font-body text-xs text-paper/80 leading-relaxed border-t border-teal-300/10 pt-3">
                  {item.purpose}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 2. AI Model Pipeline Sequence (01 to 06 permitted here) */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-heading text-xl font-semibold text-paper">
              Sequential neural pipeline workflow
            </h3>
            <span className="font-body text-xs text-teal-300 font-semibold">
              Parallel edge inference pipeline
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalContent.aiPipeline.map((step) => (
              <div
                key={step.step}
                className="p-6 border border-teal-300/20 bg-[#0a1815] rounded-[4px] relative"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-sm font-semibold text-teal-300">
                    0{step.step}
                  </span>
                  <span className="font-body text-xs px-2 py-0.5 rounded-[2px] bg-teal-700/30 text-teal-300 border border-teal-300/20 font-medium">
                    {step.model}
                  </span>
                </div>
                <h4 className="font-heading text-base font-semibold text-paper mb-2">
                  {step.task}
                </h4>
                <p className="font-body text-xs text-slate leading-relaxed">
                  {step.details}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Software Architecture & Intelligence Layer */}
        <div className="mt-16 p-8 border border-teal-300/30 bg-[#071310] rounded-[4px]">
          <h3 className="font-heading text-xl font-semibold text-paper mb-6">
            Software stack & orchestration engines
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border-l-2 border-teal-700 pl-4">
              <span className="font-body text-xs text-slate uppercase tracking-wider block mb-1">
                Backend Services
              </span>
              <p className="font-body text-xs text-paper/90 leading-relaxed">
                {technicalContent.softwareStack.backend}
              </p>
            </div>

            <div className="border-l-2 border-teal-700 pl-4">
              <span className="font-body text-xs text-slate uppercase tracking-wider block mb-1">
                Presentation Layer
              </span>
              <p className="font-body text-xs text-paper/90 leading-relaxed">
                {technicalContent.softwareStack.frontend}
              </p>
            </div>

            <div className="border-l-2 border-teal-700 pl-4">
              <span className="font-body text-xs text-slate uppercase tracking-wider block mb-1">
                Intelligence Engine
              </span>
              <p className="font-body text-xs text-paper/90 leading-relaxed">
                {technicalContent.softwareStack.intelligence}
              </p>
            </div>
          </div>
        </div>

      </div>
      <HairlineDivider className="mt-20 opacity-30" />
    </section>
  );
};
