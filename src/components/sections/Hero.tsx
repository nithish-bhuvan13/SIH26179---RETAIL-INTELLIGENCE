import React, { useRef, useState, useEffect } from 'react';
import { Button } from '../ui/Button';
import { StatusChip } from '../ui/StatusChip';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  useEffect(() => {
    // Intersection observer to pause video when offscreen
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) return;
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const xPos = (e.clientX - rect.left) / rect.width - 0.5;
    const yPos = (e.clientY - rect.top) / rect.height - 0.5;

    setTilt({
      x: yPos * -6, // subtle degrees tilt
      y: xPos * 6,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[92vh] flex items-center overflow-hidden bg-ink"
      aria-label="Overview & Mission Statement"
    >
      {/* Background ambient media element with fallback gradient canvas */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <video
          ref={videoRef}
          src="/media/bg/retail-ambient.mp4"
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1200 800'%3E%3Crect fill='%230D1F1B' width='1200' height='800'/%3E%3Cpath d='M0 400 Q 300 350, 600 400 T 1200 400' stroke='%230B5F58' stroke-width='2' fill='none' opacity='0.2'/%3E%3C/svg%3E"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-35 filter brightness-75"
          aria-label="Ambient retail store floor background video"
        />
        {/* Single dark-to-transparent scrim over background video */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-transparent" 
          aria-hidden="true" 
        />
      </div>

      <div className="relative z-10 max-w-[1240px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Editorial Column */}
          <div
            style={
              prefersReducedMotion
                ? {}
                : {
                    transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                    transition: 'transform 0.15s ease-out',
                  }
            }
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Meta Context Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="font-body text-xs font-medium text-teal-300 border border-teal-300/30 px-2.5 py-1 rounded-[4px] bg-teal-700/20">
                Team Unovex
              </span>
              <span className="font-body text-xs text-slate border border-slate/30 px-2.5 py-1 rounded-[4px] bg-ink/60">
                Team ID 139162
              </span>
              <span className="font-body text-xs text-slate border border-slate/30 px-2.5 py-1 rounded-[4px] bg-ink/60">
                Smart India Hackathon 2026
              </span>
              <span className="font-body text-xs text-teal-300 border border-teal-300/30 px-2.5 py-1 rounded-[4px] bg-teal-700/20">
                Problem SIH26179 · Hardware
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold text-paper leading-[1.12] tracking-tight">
              Real-time on-device retail intelligence for shelf visibility and proactive queue prevention.
            </h1>

            {/* Body */}
            <p className="mt-6 font-body text-base sm:text-lg text-slate leading-relaxed max-w-2xl">
              IntelliSales is an AI-powered retail intelligence platform running computer vision directly on edge hardware. We eliminate shelf stock-outs, forecast checkout congestion five minutes ahead, and quantify true customer dwell time with zero facial biometric storage.
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button as="a" href="#demo" variant="primary">
                Watch the demo
              </Button>
              <Button as="a" href="#architecture" variant="outline-light">
                Explore architecture
              </Button>
            </div>

            {/* Official Credit Mark */}
            <div className="mt-12 pt-6 border-t border-teal-300/20 w-full flex items-center justify-between text-xs text-slate">
              <div className="flex items-center gap-3">
                {/* Official SIH bulb-brain credit mark used once */}
                <svg className="w-5 h-5 text-teal-300 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a7 7 0 00-7 7c0 2.38 1.19 4.47 3 5.74V17a2 2 0 002 2h4a2 2 0 002-2v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 00-7-7z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 21h6" />
                </svg>
                <span>Smart India Hackathon 2026 Hardware Category</span>
              </div>
              <span>Team Unovex</span>
            </div>
          </div>

          {/* Telemetry Snapshot Preview Card */}
          <div className="lg:col-span-5">
            <div className="border border-teal-300/30 bg-[#071310]/90 p-6 rounded-[4px] shadow-2xl backdrop-blur">
              <div className="flex items-center justify-between pb-4 border-b border-teal-300/20">
                <div className="flex items-center gap-2">
                  <StatusChip label="Edge node online" variant="teal" pulse />
                </div>
                <span className="font-body text-xs text-teal-300 font-medium">
                  Node: IQ-9075-01
                </span>
              </div>

              {/* Hardware Telemetry metrics: numbers strictly in IBM Plex Mono */}
              <div className="mt-5 space-y-4 font-body text-xs text-paper">
                <div className="p-3 bg-ink/70 border border-teal-300/10 rounded-[4px] flex justify-between items-center">
                  <span className="text-slate font-body text-xs">Edge compute utilization</span>
                  <span className="text-teal-300 font-mono font-medium">84.2 TOPS / 100 TOPS</span>
                </div>

                <div className="p-3 bg-ink/70 border border-teal-300/10 rounded-[4px] flex justify-between items-center">
                  <span className="text-slate font-body text-xs">Concurrent IP streams</span>
                  <span className="text-paper font-mono font-medium">16 / 16 feeds active (30 FPS)</span>
                </div>

                <div className="p-3 bg-ink/70 border border-teal-300/10 rounded-[4px] flex justify-between items-center">
                  <span className="text-slate font-body text-xs">Active checkout wait</span>
                  <span className="text-teal-300 font-mono font-medium">2.1 min (Forecast: Stable)</span>
                </div>

                <div className="p-3 bg-ink/70 border border-rust/30 rounded-[4px] flex justify-between items-center bg-rust/5">
                  <span className="text-slate font-body text-xs">Shelf restocking alert</span>
                  <span className="text-rust font-body font-medium">Aisle 3 · Oil (POS Verified)</span>
                </div>

                <div className="p-3 bg-ink/70 border border-teal-300/10 rounded-[4px] flex justify-between items-center">
                  <span className="text-slate font-body text-xs">Data residency & privacy</span>
                  <span className="text-paper font-body font-medium">DPDP compliant · 0 faces stored</span>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-teal-300/10 flex items-center justify-between text-[11px] text-slate font-body">
                <span>Autonomous offline mode active</span>
                <span className="text-teal-300 font-body font-medium">PostgreSQL local</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
