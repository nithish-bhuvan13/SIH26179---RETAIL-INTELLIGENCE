import React, { useState, useEffect } from 'react';
import { Button } from '../ui/Button';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "How it Works", href: "#architecture" },
  { label: "Innovation", href: "#innovation" },
  { label: "Demo", href: "#demo" },
  { label: "Technical", href: "#technical" },
  { label: "Feasibility", href: "#feasibility" },
  { label: "Impact", href: "#impact" },
  { label: "Research", href: "#research" },
  { label: "Team", href: "#team" },
  { label: "Mentors", href: "#mentors" },
];

export const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = ['hero', ...navItems.map(item => item.href.substring(1))];
      const scrollPosition = window.scrollY + 120;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 border-b ${
        isScrolled
          ? 'bg-paper/95 backdrop-blur border-teal-300 shadow-sm'
          : 'bg-paper border-transparent'
      }`}
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between gap-3 lg:gap-5">
        {/* Brand Lockup: Government Logos + IntelliSales */}
        <a href="#hero" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
          <img
            src="/media/sih-header-logos.png"
            alt="Ministry of Education, AICTE, MoE's Innovation Cell, Smart India Hackathon 2026"
            className="h-7 sm:h-8 md:h-8.5 w-auto max-w-[210px] sm:max-w-[250px] object-contain"
          />
          <div className="h-6 w-[1px] bg-slate/25 hidden sm:block shrink-0" />
          <div className="flex flex-col justify-center shrink-0">
            <span className="font-heading font-semibold text-base sm:text-lg tracking-tight text-ink group-hover:text-teal-700 transition-colors whitespace-nowrap leading-tight">
              IntelliSales
            </span>
            <span className="font-body text-[10px] sm:text-[11px] text-slate whitespace-nowrap">
              Team Unovex · SIH 2026
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-0.5 2xl:gap-1 shrink-0" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative px-1.5 2xl:px-2 py-1 font-body text-[11px] 2xl:text-xs font-medium whitespace-nowrap transition-colors ${
                  isActive ? 'text-teal-700 font-semibold' : 'text-slate hover:text-ink'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1.5 right-1.5 2xl:left-2 2xl:right-2 h-[2px] bg-teal-700 rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center shrink-0">
          <Button as="a" href="#demo" variant="primary" className="text-xs py-1.5 px-3.5 whitespace-nowrap shrink-0">
            Watch the demo
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 text-ink hover:text-teal-700 focus-visible:outline-teal-700"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-b border-teal-300 bg-paper px-4 pt-2 pb-6 space-y-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 text-sm font-medium border-l-2 transition-colors ${
                  isActive
                    ? 'border-teal-700 text-teal-700 bg-teal-300/15'
                    : 'border-transparent text-slate hover:text-ink'
                }`}
              >
                {item.label}
              </a>
            );
          })}
          <div className="pt-3">
            <Button
              as="a"
              href="#demo"
              variant="primary"
              className="w-full text-xs py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Watch the demo
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
