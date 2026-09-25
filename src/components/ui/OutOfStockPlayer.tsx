import React, { useMemo, useState } from 'react';
import { outOfStockClips } from '../../data/outOfStockClips';

export const OutOfStockPlayer: React.FC = () => {
  const [videoError, setVideoError] = useState(false);

  const src = useMemo(
    () => outOfStockClips[Math.floor(Math.random() * outOfStockClips.length)],
    []
  );

  return (
    <div className="relative w-full aspect-video border border-teal-300/40 bg-ink rounded-[4px] overflow-hidden group">
      {!videoError ? (
        <video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          onError={() => setVideoError(true)}
          className="w-full h-full object-cover"
          aria-label="Recorded visual evidence of an out-of-stock supermarket shelf"
        />
      ) : (
        /* Dynamic SVG playback simulation if MP4 binary is not yet uploaded */
        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#071310] relative">
          <svg className="w-16 h-16 text-rust mb-3 opacity-90 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <div className="font-heading font-medium text-paper text-sm mb-1">
            Simulated Shelf Optical Feed
          </div>
          <p className="font-body text-xs text-slate max-w-xs">
            Visual anomaly detected: Shelf slot 04-B below 10% threshold. POS balance indicates 14 units in backroom storage.
          </p>
          <div className="mt-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-rust animate-ping" />
            <span className="font-body text-[11px] text-rust font-semibold">REPLENISHMENT DISPATCHED</span>
          </div>
        </div>
      )}

      {/* Persistent live telemetry overlay */}
      <div className="absolute top-3 left-3 bg-ink/90 border border-rust/40 px-2.5 py-1 rounded-[4px] flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-rust animate-pulse" />
        <span className="font-body text-[11px] text-paper font-semibold tracking-wide">
          ALERT: SHELF DEPLETION
        </span>
      </div>

      <div className="absolute bottom-3 right-3 bg-ink/90 border border-teal-300/30 px-2.5 py-1 rounded-[4px] text-[10px] font-body text-teal-300 font-medium">
        15-min automated cycle
      </div>
    </div>
  );
};
