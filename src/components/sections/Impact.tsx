import React from 'react';
import { impactContent } from '../../data/content/impact';
import { HairlineDivider } from '../ui/HairlineDivider';

export const Impact: React.FC = () => {
  return (
    <section id="impact" className="bg-ink text-paper py-20 lg:py-28 relative scroll-mt-16">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-[4px] bg-teal-300/15 border border-teal-300/35 text-teal-300 font-heading text-lg sm:text-xl font-bold tracking-wider uppercase shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-300"></span>
            {impactContent.sectionLabel}
          </span>
        </div>

        {/* Headline */}
        <div className="max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-paper leading-tight">
            {impactContent.headline}
          </h2>
          <p className="mt-4 font-body text-base text-slate leading-relaxed">
            {impactContent.subhead}
          </p>
        </div>

        {/* 1. Market Sizing TAM / SAM / SOM Grid */}
        <div className="mt-14 border border-teal-300/30 bg-[#071310] rounded-[4px] p-6 lg:p-8">
          <div className="max-w-3xl mb-8">
            <h3 className="font-heading text-xl sm:text-2xl font-semibold text-paper">
              Market sizing & addressable opportunity
            </h3>
            <p className="font-body text-xs sm:text-sm text-slate mt-1.5 leading-relaxed">
              Commercial viability and target trajectory across the organized Indian retail ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* TAM */}
            <div className="p-6 border-l-4 border-l-teal-300/40 bg-ink/70 border border-teal-300/20 rounded-[4px] flex flex-col justify-between">
              <div>
                <span className="font-body text-xs text-slate font-semibold uppercase tracking-wider block mb-2">
                  Total Addressable Market (TAM)
                </span>
                <span className="font-heading text-2xl sm:text-3xl font-bold text-paper block">
                  {impactContent.marketSizing.tam.value}
                </span>
                <p className="font-body text-xs text-slate mt-3 leading-relaxed">
                  {impactContent.marketSizing.tam.description}
                </p>
              </div>
            </div>

            {/* SAM */}
            <div className="p-6 border-l-4 border-l-teal-700 bg-teal-700/15 border border-teal-700/40 rounded-[4px] flex flex-col justify-between">
              <div>
                <span className="font-body text-xs text-teal-300 font-semibold uppercase tracking-wider block mb-2">
                  Serviceable Addressable Market (SAM)
                </span>
                <span className="font-heading text-2xl sm:text-3xl font-bold text-teal-300 block">
                  {impactContent.marketSizing.sam.value}
                </span>
                <p className="font-body text-xs text-slate mt-3 leading-relaxed">
                  {impactContent.marketSizing.sam.description}
                </p>
              </div>
            </div>

            {/* SOM */}
            <div className="p-6 border-l-4 border-l-teal-300 bg-teal-300/10 border border-teal-300/30 rounded-[4px] flex flex-col justify-between">
              <div>
                <span className="font-body text-xs text-paper font-semibold uppercase tracking-wider block mb-2">
                  Serviceable Obtainable Market (SOM)
                </span>
                <span className="font-heading text-2xl sm:text-3xl font-bold text-paper block">
                  {impactContent.marketSizing.som.value}
                </span>
                <p className="font-body text-xs text-slate mt-3 leading-relaxed">
                  {impactContent.marketSizing.som.description}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-teal-300/15 text-xs text-slate font-body flex items-center justify-between flex-wrap gap-2">
            <span>Targeted focus on regional Tier-2 and Tier-3 supermarkets where heavy cloud subscriptions are prohibitive.</span>
            <span className="text-teal-300 font-medium">Scalable edge deployment model</span>
          </div>
        </div>

        {/* 2. Triad Benefits: Social, Economic, Environmental */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {impactContent.benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="p-6 border border-teal-300/20 bg-[#0a1815] rounded-[4px]"
            >
              <span className="font-body text-xs text-teal-300 uppercase tracking-wider block mb-2 font-semibold">
                {benefit.category}
              </span>
              <h4 className="font-heading text-lg font-semibold text-paper mb-2">
                {benefit.title}
              </h4>
              <p className="font-body text-xs text-slate leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* 3. Sustainable Development Goals (SDGs 8, 9, 11, 12) */}
        <div className="mt-16">
          <h3 className="font-heading text-lg font-semibold text-paper mb-6">
            Alignment with UN Sustainable Development Goals
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactContent.sdgs.map((sdg) => (
              <div
                key={sdg.number}
                className="p-5 border border-teal-300/20 bg-[#071310] rounded-[6px] flex flex-col justify-between hover:border-teal-300/40 transition-colors group"
              >
                <div>
                  {/* Official UN SDG Logo Box */}
                  <div className="w-full aspect-square max-w-[150px] mx-auto mb-4 rounded-[6px] overflow-hidden shadow-md group-hover:scale-105 transition-transform duration-200">
                    <img
                      src={sdg.logo}
                      alt={`UN SDG ${sdg.number}: ${sdg.title}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-heading text-sm font-semibold text-paper mb-2 text-center sm:text-left">
                    {sdg.title}
                  </h4>
                  <p className="font-body text-xs text-slate leading-relaxed text-center sm:text-left">
                    {sdg.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
      <HairlineDivider className="mt-20 opacity-30" />
    </section>
  );
};
