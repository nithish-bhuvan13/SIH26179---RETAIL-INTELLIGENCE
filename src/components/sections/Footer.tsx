import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050e0c] text-paper border-t border-teal-300/20 py-12 sm:py-16">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand & Project Info */}
          <div className="md:col-span-6 space-y-3">
            <span className="font-heading font-semibold text-xl text-paper tracking-tight">
              IntelliSales
            </span>
            <p className="font-body text-xs text-slate max-w-md leading-relaxed">
              On-device AI retail intelligence platform designed for shelf visibility, automated replenishment cross-checking, and predictive queue management.
            </p>
            <div className="pt-2 text-xs font-body text-teal-300 font-medium">
              Team Unovex (Team ID 139162) · Problem Statement SIH26179
            </div>
          </div>

          {/* Quick Anchor Links */}
          <div className="md:col-span-3 space-y-2">
            <span className="font-heading font-semibold text-xs text-paper uppercase tracking-wider block mb-3">
              Site Navigation
            </span>
            <ul className="space-y-1.5 text-xs font-body text-slate">
              <li><a href="#problem" className="hover:text-teal-300 transition-colors">Problem</a></li>
              <li><a href="#solution" className="hover:text-teal-300 transition-colors">Solution</a></li>
              <li><a href="#architecture" className="hover:text-teal-300 transition-colors">How it Works</a></li>
              <li><a href="#innovation" className="hover:text-teal-300 transition-colors">Innovation</a></li>
              <li><a href="#demo" className="hover:text-teal-300 transition-colors">Demo</a></li>
              <li><a href="#technical" className="hover:text-teal-300 transition-colors">Technical</a></li>
            </ul>
          </div>

          {/* Compliance & Standards */}
          <div className="md:col-span-3 space-y-2">
            <span className="font-heading font-semibold text-xs text-paper uppercase tracking-wider block mb-3">
              Compliance & Governance
            </span>
            <p className="font-body text-xs text-slate">
              Privacy Architecture: Designed in alignment with DPDP 2023 & GDPR principles. Zero facial biometrics stored.
            </p>
            <p className="font-body text-xs text-slate pt-2">
              Smart India Hackathon 2026 · Problem Statement SIH26179
            </p>
          </div>

        </div>

        <div className="mt-12 pt-6 border-t border-teal-300/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate gap-4">
          <span>Smart India Hackathon 2026 Prototype Concept</span>
        </div>
      </div>
    </footer>
  );
};
