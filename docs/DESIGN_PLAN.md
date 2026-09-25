# IntelliSales — Design Plan & Architectural Rationale

## 1. Color System Application by Section

The visual system strictly uses six tokens with intentional semantic weight. Sections alternate between `--paper` (#F5F8F7) and `--ink` (#0D1F1B) to establish an editorial rhythm across the 11 anchors without card-box nesting.

| Token | Hex Value | Section-by-Section Concrete Application |
|---|---|---|
| `--paper` | `#F5F8F7` | Base background for Hero, Solution, Innovation, Feasibility, Research. Cards on dark sections. High-readability canvas. |
| `--ink` | `#0D1F1B` | Base background for Problem, How it Works (Architecture), Technical, Impact, Team/Mentors, and Footer. Primary text color on `--paper`. |
| `--teal-700` | `#0B5F58` | Sticky nav active indicator underline, primary action buttons, pipeline active state, key numerical headings. |
| `--teal-300` | `#9FDCD1` | 1px hairline dividers between sections, hover border states, telemetry chart fills, subtle indicator rings. |
| `--rust` | `#C1502B` | Strictly reserved for alerts and anomalies: stock-out warnings, queue wait threshold (>5 min) breach indicators, out-of-stock live clip badge. Never used as decorative tint. |
| `--slate` | `#4E5F5B` | Captions, secondary metrics, IEEE citation metadata, timestamps, architectural node descriptions. |

---

## 2. Structural ASCII Layouts

### A. Hero Section (Full-bleed media backdrop + Floating Glass/Scrim Surface)

```
+-----------------------------------------------------------------------------------------+
| [STICKY NAV: Team Unovex · Problem | Solution | Architecture | Innovation | Demo ... ]  |
+-----------------------------------------------------------------------------------------+
| [BACKGROUND VIDEO: Ambient retail aisle / 40% ink scrim]                               |
|                                                                                         |
|  12-Column Grid (Max 1200px)                                                            |
|  +--------------------------------------------+  +------------------------------------+ |
|  | [Context Badge] SIH 2026 · Problem SIH26179|  | [Telemetry Telemetry Preview Card] | |
|  |                                            |  |                                    | |
|  | H1: Real-time on-device retail intelligence|  | Footfall: 142/hr  [Dwell: 48s]     | |
|  | for shelf visibility and queue prevention  |  | Queue Wait: 2.1m  [Counters: 3/4]  | |
|  |                                            |  | Active Shelves: 16/16 Healthy      | |
|  | Body: IntelliSales bridges shelf stock,    |  | Qualcomm Dragonwing IQ-9075: 84 TOPS|
|  | footfall dwell time, and billing counters  |  |                                    | |
|  | locally at the edge with zero cloud latency|  +------------------------------------+ |
|  |                                            |                                         |
|  | [CTA: Watch the demo]  [Explore hardware]  |                                         |
|  +--------------------------------------------+                                         |
|                                                                                         |
+-----------------------------------------------------------------------------------------+
```

### B. Two-Column Asymmetric Section (60/40 Asymmetry — e.g., Problem or Solution)

```
+-----------------------------------------------------------------------------------------+
| Hairline Divider: 1px --teal-300                                                        |
+-----------------------------------------------------------------------------------------+
| Section Label: The problem (sentence case, IBM Plex Sans, no all-caps)                  |
|                                                                                         |
|  Col 1 (7 cols / 60%): Editorial Narrative    | Col 2 (5 cols / 40%): Visual Proof      |
|  +------------------------------------------+ | +-------------------------------------+ |
|  | H2: Retail blind spots cost sales before | | | [Out-of-Stock Video Frame]          | |
|  | stores even realize shelves are empty.   | | | Auto-playing loop with rust alert:  | |
|  |                                          | | | "STOCK GAP DETECTED: AISLE 3"       | |
|  | Stat 1: 30%                              | | |                                     | |
|  | Walk out when an item is in back inventory| | | Live shelf video pan                | |
|  |                                          | | |                                     | |
|  | Stat 2: 73%                              | | | Stat 3: 2-3 Hours / Day             | |
|  | Abandon carts if checkout wait > 5 min.  | | | Wasted on manual aisle audits       | |
|  +------------------------------------------+ | +-------------------------------------+ |
+-----------------------------------------------------------------------------------------+
```

---

## 3. Justification of Palette & Typography for Retail-Hardware Subject Matter

Retail enterprise hardware is an industry rooted in operational precision, physical durability, and high customer privacy scrutiny. Most consumer software templates rely on playful purples, neon gradients, or generic blues that signal unverified web concepts. In contrast, IntelliSales pairs **deep ink (`#0D1F1B`)** and **cool paper (`#F5F8F7`)** with **industrial teal (`#0B5F58`)** because teal is the color of precision optics, factory instrumentation, and enterprise reliability. The single warm accent, **rust (`#C1502B`)**, mirrors real physical warehouse and retail alert signals, commanding instant triage attention for inventory gaps without sensory overload. 

Typographically, **Space Grotesk** brings an engineered, mechanical confidence to section headers reminiscent of industrial equipment specifications, while **IBM Plex Sans** provides unambiguous typographic rhythm at small editorial sizes, respecting the hardware and telemetric depth of DPDP-compliant edge computing. **IBM Plex Mono** is strictly quarantined to the simulated live telemetry readouts, preserving the dignity of real telemetry data.

---

## 4. Self-Check Against A2 Don't-List

- [x] No emoji anywhere.
- [x] No banned buzzwords (leverage, seamless, cutting-edge, next-gen, revolutionize, empower, unlock, game-changing, state-of-the-art, robust, disrupt, synergy, supercharge, unparalleled). "AI-powered" appears only once in the hero context.
- [x] No stock AI iconography (no brain meshes, glowing synapses, or robots).
- [x] No visual reuse of generic hackathon templates or blue hairline card-boxes.
- [x] No generated-page tells: sentence-case labels used, no styled isolated words in headlines, no spaced em dashes, no arbitrary numbers on non-sequences, no pill-shaped buttons, no arrows in CTA labels ("Watch the demo", not "Learn More ->").
- [x] Only the six authorized color tokens used; no arbitrary gradients.
- [x] Space Grotesk, IBM Plex Sans, and IBM Plex Mono used strictly per their assigned roles.
