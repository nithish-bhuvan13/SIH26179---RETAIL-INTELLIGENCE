# UNOVEX / IntelliSales — Master Build Prompt

**What this file is:** a single reusable prompt for building the Unovex team's SIH 2026 prototype website. It is written to be handed, in full, to a sequence of coding agents (Claude Code, Cursor, v0, Windsurf, ChatGPT, whatever is available in a given session). Each agent picks up exactly where the last one stopped, using the handoff file described in Part C as the shared memory between sessions and platforms.

**How to use it:**
1. Put this whole document at `/docs/MASTER_PROMPT.md` in the repo, on day one, before any code exists.
2. Create `/docs/HANDOFF.md` from the template in Part C.
3. Every agent, at the start of every session, is told: *"Read `/docs/MASTER_PROMPT.md` and `/docs/HANDOFF.md` in full before writing any code."*
4. Give the agent the specific Phase Prompt for the phase you're on (Part B). Each phase prompt is self-contained and copy-pasteable.
5. Before the agent's session ends, it fills in a new dated entry in `/docs/HANDOFF.md` (template in Part C) and updates the "Current State" block at the top of that file.

---

## Phase Map

| # | Phase | Builds | Done when |
|---|---|---|---|
| 1 | Foundation & Design System | Repo scaffold, design tokens, layout shell, nav | App runs, hero renders, all section anchors exist as empty stubs |
| 2 | Problem, Solution, Innovation | The narrative front half of the site | Those three sections are final, responsive, content-complete |
| 3 | Technical, Feasibility, Impact, Research | The evidence/back half of the site | Those four sections are final, responsive, content-complete |
| 4 | Demo & Media System | Background video, out-of-stock video widget, live-simulation demo panel | Demo section works end to end with mock data; media system is reusable |
| 5 | Team & Mentors | Roster data model, cards, click-through to LinkedIn | Both grids render from data files; click behavior works; photo folders wired |
| 6 | Polish, Accessibility, QA | Final pass | Every item in the Part D checklist is checked off |

Phases run in order. A phase should not start until the previous phase's handoff entry says "Complete."

---

# PART A — Shared Brief (every agent reads this before touching code)

## A1. Project identity

- Team **Unovex**, Team ID **139162**, Smart India Hackathon 2026, Problem Statement ID **SIH26179**, PS Category **Hardware**, Theme **Miscellaneous**.
- Problem statement: build an AI-powered retail intelligence platform delivering real-time shopper analytics, automated inventory visibility, and proactive queue management through on-device AI — cutting stock-outs, improving customer experience, optimizing staffing, and reducing cloud dependency.
- Product codename: **IntelliSales**.
- **What this website is:** an idea-presentation and interactive concept-demo site for the hackathon — it explains the system and lets a visitor *feel* how the dashboard would behave, using realistic mock data.
- **What this website is not:** it is not the production camera pipeline, it does not connect to real hardware, and it is not a copy — visually or structurally — of any other team's site.

## A2. Non-negotiable constraints

**Never do any of the following, anywhere on the site:**

- No emoji, anywhere — not in headings, body copy, buttons, alerts, or code comments that render as UI text.
- No AI buzzwords. Banned words/phrases: *leverage, seamless, cutting-edge, next-gen, revolutionize/revolutionary, empower, unlock, game-changing, state-of-the-art, robust, disrupt/disruptive, synergy, supercharge, unparalleled, AI-powered* (used more than once — say it once in the hero, then talk about what it actually does). Say what the feature does in plain words instead.
- No stock "AI" iconography — no brain/circuit-board graphics, no glowing neural-net meshes, no robot mascots. The SIH bulb-brain logo is used once, small, as an official credit mark only — never as a repeating design motif.
- No visual reuse of any reference SIH site — no blue hairline card borders on a pale-blue/white background, no reused logo treatment, no copied section layouts. Those sites are a reference for *what sections exist*, never for how they look.
- No generated-page tells (these are the actual, current tells to avoid, not guesses):
  - A single word or phrase in a headline picked out in italic, bold, or a different color.
  - ALL-CAPS labels above sections ("PROBLEM STATEMENT", "OUR SOLUTION").
  - Meta strings joined with middle dots (`Hardware · Team ID 139162 · 2026`).
  - Labels built as "WORD — fragment" with a spaced em dash.
  - Numbered markers (01 / 02 / 03) on content that isn't actually a sequence. (They're fine on the Technical pipeline and the Development-phase timeline, because those genuinely are sequences. Not fine as decoration elsewhere.)
  - Identical rounded cards everywhere with the same soft grey drop-shadow and a gradient wash behind them.
  - A monospace font used for every small data label out of habit.
  - Arrows appended to link/button text ("Learn More →"). Buttons say what happens: "Watch the demo," not "Learn More."
  - A warm cream page background paired with a terracotta/clay accent, or a near-black page with a single neon accent. (See A4 — this site is teal-and-white, deliberately, because of what's below.)
- Do not fabricate features, numbers, or claims that aren't in Part A7. Everything on the site should trace back to the content blueprint or to the mock-data spec in A8/Phase 4.

**The bar:** this should read like a funded product company's site, built by people who use retail software every day — not like a hackathon template with the team's name swapped in.

## A3. Sitemap

Single-page site, anchor navigation, sticky top bar:

```
Problem · Solution · How it Works · Innovation · Demo · Technical · Feasibility · Impact · Research · Team · Mentors
```

Anchors: `#problem #solution #architecture #innovation #demo #technical #feasibility #impact #research #team #mentors`

## A4. Design system

This palette and type system exist *because of the content*: the product is hardware-adjacent, edge-computing, and about trust (privacy, compliance, real stock/queue numbers) — so the system should read precise and grounded, not decorative.

**Color — six named tokens, nothing else:**

| Token | Hex | Use |
|---|---|---|
| `--paper` | `#F5F8F7` | Base page background — cool off-white, never cream |
| `--ink` | `#0D1F1B` | Body text; background of dark sections (a teal-tinted near-black, not a generic gray-black) |
| `--teal-700` | `#0B5F58` | Primary brand color — nav underline, primary buttons, key numerals |
| `--teal-300` | `#9FDCD1` | Tints, hairline dividers, hover backgrounds, chart fills |
| `--rust` | `#C1502B` | The *only* warm color on the site. Reserved for stock-out alerts and urgent states. Never used decoratively, never as a page background. |
| `--slate` | `#4E5F5B` | Secondary/muted text, captions, timestamps |

Rules: no other hues. No gradients except a single dark-to-transparent scrim over background video, for text legibility. Backgrounds alternate `--paper` and `--ink` section-to-section for rhythm — do not shadow-box every content block instead.

**Type — three families, each with one job:**

| Role | Family | Notes |
|---|---|---|
| Display / headings | Space Grotesk (500/600) | Confident, engineered character. Set a real type scale, not just "make it bigger." |
| Body | IBM Plex Sans (400/500) | Legible at small sizes, quietly technical |
| Live data readouts (Demo section *only*) | IBM Plex Mono (500) | Used exactly once, for the simulated dashboard numbers in Phase 4 — because that content is genuinely telemetry-shaped. Not used as a general label font. |

Line length under 80 characters for body copy. No small-caps eyebrow labels; use sentence case for section labels (e.g. "The problem," not "THE PROBLEM").

**Layout:**

- Left-aligned, editorial, 12-column grid, max content width ~1200px.
- Alternate asymmetric two-column sections (roughly 60/40) rather than centering everything — copy on one side, diagram/visual/stat on the other, flipping side by section for rhythm.
- Dividers between sections are a single 1px `--teal-300` hairline, not a shadow or a card boundary.
- Buttons: rectangular, 4px radius max, 1px border by default, solid `--teal-700` fill for the one primary CTA per section. No pill shapes.
- Stat callouts (30%, 73%, ₹2.65 lakh, etc.) are large Space Grotesk numerals with a small caption underneath — not boxed into identical icon-cards.
- Motion: one deliberate, orchestrated hero moment on load. Beyond that, motion answers what the user does (hover, click, scroll into view once) rather than auto-animating every element. Respect `prefers-reduced-motion` everywhere — see Part D.

**Design-phase requirement (Phase 1 agent, do this before writing component code):** write a short `/docs/DESIGN_PLAN.md` — the six colors above with your specific application per section, the ASCII layout for the hero and one two-column section, and one paragraph on how this palette/type choice is justified by the *retail-hardware* subject matter, not by default habit. Then re-read the A2 don't-list against your own plan before building.

## A5. Tech stack for the site itself

(This is the stack for the *marketing/demo site*, not the real camera product — the real product's stack, per the SIH submission, is documented in A7 Technical.)

- **Vite + React + TypeScript**
- **Tailwind CSS** configured with the exact tokens from A4 (no default Tailwind palette left in place)
- **Framer Motion** for the one orchestrated hero sequence and scroll-triggered reveals
- **Recharts** for the deployment-cost bar and TAM/SAM/SOM visuals in Impact
- Single-page app, anchor-based navigation (matches A3) — no router needed
- Deploy target: Render (static site) or Vercel/Netlify — either works, pick one and note it in `/docs/HANDOFF.md`
- Optional, later, non-blocking: React Three Fiber for a lightly stylized 3D hero scene (see A8) — do not let this block the MVP timeline

## A6. Folder structure

```
/docs/
  MASTER_PROMPT.md          ← this document
  HANDOFF.md                ← continuity log, Part C
  DESIGN_PLAN.md            ← written in Phase 1
/public/
  media/
    bg/                     ← ambient retail background video loops
    out-of-stock/           ← the random-autoplay OOS clip pool (Phase 4)
    team/                   ← team member photos, one file per person
    mentors/                ← mentor photos, kept separate from team/
/src/
  data/
    team.ts                 ← team roster (Phase 5)
    mentors.ts               ← mentor roster (Phase 5)
    content/                 ← one file per section, exporting the copy from A7
  components/
    sections/                ← one component per nav anchor
    ui/                       ← shared atoms (Button, StatNumber, Divider, Chip)
  App.tsx
```

## A7. Content blueprint

This is the actual copy/data for each section, condensed from the team's SIH submission into web-ready form. Agents should use this rather than re-deriving content, and should paraphrase into full sentences where the source was a slide fragment — this is going on a website, not a slide.

### Problem
- 30% of customers walk out of a store because an item is out of stock on the shelf even though it's sitting in the back inventory.
- Store managers currently guess why a product isn't selling and test blindly, instead of knowing the real reason.
- 73% of shoppers abandon their cart and leave if they wait more than 5 minutes at billing.
- There is no single system connecting shelf analytics, inventory, and staff allocation — three separate problems, three separate blind spots.
- *Pair this section with the out-of-stock video widget (A8) — an empty shelf is a stronger opener than a stat card alone.*

### Solution — IntelliSales
- A camera checks stock levels on the shelf every 15 minutes; an automated replenishment system cross-checks that against live POS data, so a gap on the shelf is confirmed against what's actually still in inventory before anyone is alerted.
- Queue congestion at billing is predicted about 5 minutes before it actually forms, not just detected once it exists.
- Shopper interest is measured by interaction time near a shelf, not simple presence — someone walking past isn't "interested," someone lingering is.
- Built to run in low-connectivity Tier-2/3 towns: the system keeps working locally and is not cloud-dependent to function day to day.
- No personally identifiable information is stored — anonymous session IDs only. Built with DPDP and GDPR compliance in mind.
- One dashboard replaces the separate tools stores currently run side by side for inventory, footfall, and queue management.
- **The three-pipeline flow to diagram (recreate as an actual interactive/animated diagram, not a screenshot of the slide):**
  1. **Shopper activity detection** → a shopper inside a 0.7–1.5m interaction boundary of a shelf, for more than 7 seconds, counts as engaged dwell time; fast aisle pass-throughs are ignored → feeds footfall count and heatmap generation.
  2. **In-store stock detection** → shelf-facing cameras check stock level every 15 minutes → feeds an alert manager that flags what needs replenishing.
  3. **Queue detection at billing** → live queue length is watched at checkout → feeds congestion prediction and an alert to open another counter.
  4. All three feed **local storage**, which works offline, and sync to the cloud only when a connection is available, into one **unified dashboard**.

### How it works / Architecture
- Edge-first: an edge AI node handles person detection, non-identifiable tracking, person re-identification (via appearance vectors, not face data), and zone mapping locally.
- Cross-camera re-identification means a shopper can be tracked from one camera's view to the next without ever storing anything that identifies them personally.
- Everything the cameras see is converted into structured events (JSON) — footfall and dwell time by zone, queue-congestion predictions, shelf stock level, and heatmaps generated via homography — before it ever reaches a dashboard.
- The system is designed to degrade gracefully: if the network drops, the store doesn't stop being monitored, it just stops syncing until connectivity returns.

### Innovation (from the submission's "Uniqueness" points — give each its own distinct treatment, not a repeated card)
- Heatmaps are built from interaction time, not simple presence — a meaningfully more accurate signal of real shopper interest.
- Queue congestion is predicted roughly 5 minutes ahead, rather than only reported once a line has formed.
- Shelf stock alerts are automatically cross-checked against live POS data before they reach a manager, cutting false alerts.
- Re-identifying a shopper across cameras uses appearance vectors only — zero face data is ever stored.
- Inference runs on the edge device itself; the cloud is used only when it's actually needed for heavier real-time processing, not as the default path.

### Demo
See A8 and Phase 4 — a live-feeling simulated dashboard panel (footfall counter, queue gauge, rotating stock alerts) plus the randomly-selected out-of-stock video, plus a slot reserved for a real walkthrough video once one exists.

### Technical
**Hardware**
- IP cameras: 15–30 FPS, 1080p/4MP, up to 120° wide-angle, positioned to cover aisles, shelves, and the billing counter.
- PoE switch (15.4–90W per port) feeding an NVR, which routes video into the edge node.
- Edge compute: Qualcomm Dragonwing IQ-9075 — up to 100 TOPS, handles up to 16 camera feeds.
- Local storage: PostgreSQL, works fully offline, stores dwell logs and queue insights; only past-report retrieval requires an internet connection.

**AI model workflow**
- YOLOv11 — shopper detection and shelf stock-level detection
- ByteTrack — multi-person tracking
- OSNet — cross-camera re-identification
- MediaPipe — shopper pose estimation
- DBSCAN — queue clustering
- OpenCV — homography-based heatmap generation

**Software stack**
- Backend: Python (edge analytics + REST API), MQTT for lightweight device communication
- Frontend: React.js dashboard with Chart.js for KPI visualization, plus a staff-facing mobile app
- Intelligence layer: an ARS rule engine (replenishment decision support), an event engine (converts video into structured events), and a sync daemon (handles offline-to-cloud sync)

### Feasibility & Viability
**Feasibility**
- Infrastructure: works with a store's existing CCTV, no camera network replacement needed.
- Operational: adds intelligence without disrupting existing POS or staff workflow.
- Data & compliance: anonymous session IDs only, no facial or biometric storage — avoids the privacy-law exposure that camera-based systems usually carry.
- Economic: starts on cameras the store already has, so upfront cost is low.

**Viability**
- Revenue model: one-time deployment revenue from edge hardware, installation, and store calibration.
- Reference investment: ₹2.65 lakh for a 10,000 sq ft store.
- Scales from one store to departments, zones, and multiple stores without rebuilding the system.

**Business logic (Investment → Value → ROI → Expansion → Scale):** ₹2.65L on existing cameras → real-time alerts and dwell data → fewer stock-outs and less manual audit time → ₹40K shelf-camera upgrade unlocks planogram checks → same template rolls to the next store.

**Development phases:** Calibrate (zone the existing 14 cameras, connect POS) → Integrate (link POS data *before* testing begins, not after) → Pilot (run footfall + queue alerts, prove ROI) → Expand (add 16 shelf cameras, unlock planogram checks).

**Limitations and how they're addressed**
| Limitation | Strategy |
|---|---|
| Heavy rush causes occlusion and under-counting | Use overhead cameras in long shelf zones |
| A blocked camera can stop reliable zone analytics | Run camera-health and obstruction checks; flag the zone and alert staff |
| Queue prediction can fail during sudden demand shifts | Combine arrival rate, queue length, service rate and open-counter count; fall back to live queue detection when confidence drops |
| Camera tilt/movement invalidates a calibrated zone | Map shelf zones independently; recalibrate only the affected shelf after a layout change |
| Heavily occluded shoppers can be under-counted even with weighting | Aggregate occupancy across zones instead of forcing an exact count |

**Strengths, opportunities, aspiration, result**
- Strength: replenishment alerts point to the exact aisle, cutting search time; automatic planogram checks limit shelf drift.
- Opportunity: Tier-2/3 stores need this kind of intelligence but can't justify enterprise pricing; lightweight events keep cloud-sync costs down.
- Aspiration: shelf-attention data can shape how brands pitch products; one dashboard replaces three separate store systems.
- Result: staff spend more time actually helping shoppers, which lifts conversion and loyalty; a billing counter opens before a queue forms, not after complaints.

### Impact & Benefits
**Reference deployment cost — 10,000 sq ft store, 8 shelves, 14 existing cameras**

| Component | Qty | Unit cost | Total |
|---|---|---|---|
| Shelf camera | 16 | ₹2,500 | ₹40,000 |
| Qualcomm Dragonwing IQ-9075 | 2 | ₹95,500 | ₹1,91,000 |
| Camera mounts | 16 | ₹250 | ₹4,000 |
| Cat6 + connectors | — | — | ₹8,000 |
| Edge enclosure + cooling/PSU | 2 | ₹5,000 | ₹10,000 |
| Installation + calibration | — | — | ₹12,000 |
| **Total** | | | **≈ ₹2.65 lakh** |

**Market:** TAM ₹2,400 Cr (India retail) → SAM ₹300 Cr (organized retail) → SOM ₹3–5 lakh (Year 1 initial target). Render this as the nested-arc/funnel chart, with Recharts or hand-built SVG — not a screenshot.

**Impacts:** continuous, proactive monitoring instead of manual shelf checks; fewer unnecessary customer waits from faster counter-opening decisions; fragmented data turned into one clear picture for faster store decisions; the same system configuration adapts from a small store to a large chain; each level of a store's hierarchy (staff, department manager, store manager, cluster manager) sees the view relevant to their responsibility; the store keeps monitoring itself even when the cloud is unreachable.

**Benefits**
- Social: staff spend more time with shoppers instead of on routine monitoring; managers and executives get a true picture of what's actually happening store-wide.
- Economic: connecting shopper, shelf, and sales data reveals what actually drives sales; staffing is optimized against real-time footfall and service patterns.
- Environmental: local edge processing cuts operational costs versus constant cloud video processing; replenishment is targeted to actual shelf need rather than blanket restocking.

**SDGs referenced:** 8 (Decent Work & Economic Growth), 9 (Industry, Innovation & Infrastructure), 11 (Sustainable Cities & Communities), 12 (Responsible Consumption & Production).

### Research & References
**Field research:** the team visited a retail store in Coimbatore, Tamil Nadu, to validate the problem on the ground. Three findings from that visit shaped the design:
1. Product sales decisions are largely guesswork — underperforming products are discounted, then relocated, only once poor sales are already obvious.
2. Staffing struggles to react to sudden demand surges from promotions, offers, or external events.
3. Daily stock checks eat 2–3 hours of staff time manually tracking product movement, shelf drift, and stock levels.

**Cited literature**
1. T. Logapriya, S. Thangamayan, R. H. Devi, S. Girija, R. Premalatha, S. Krishnamoorthy — "Real-Time Retail Customer Intelligence Using Edge Computing and Artificial Intelligence," 2nd ICSCAI, Greater Noida, 2026, pp. 547–552. DOI: 10.1109/ICSCAI68849.2026.11648847
2. N. Tiwari, S. K. Prasad — "Agentic AI-Driven Optimizing Demand Forecasting in Retail Systems with AI-Based Predictive Analytics," AIMV, Gandhinagar, 2025, pp. 1–5. DOI: 10.1109/AIMV66517.2025.11203602
3. F. Omar, M. R. Hassan, S. Nashwan, A. Al-Qerem, A. M. Ali — "Artificial Intelligence Innovations and Strategic Insights for a Smart Retail Transformation," 12th ICIT, Amman, 2025, pp. 477–483. DOI: 10.1109/ICIT64950.2025.11049217
4. "Systematic analysis of Intelligent retail system structure and its optimization" — ResearchGate publication 383100289. Relevant contribution: splits processing into an edge CV tier and a local aggregation tier, and derives average billing time from exit-timestamps rather than assuming it.

**Resource links (placeholders — fill in once you have the real URLs, same pattern as the LinkedIn placeholders in A9):**
- `RESEARCH_DRIVE_URL` — Drive folder of supporting research/photos
- `DEMO_VIDEO_URL` — YouTube or hosted walkthrough video
- `PROTOTYPE_URL` — a live/working prototype link, if one exists

---

## A8. Media requirements

**Background video (hero + optional section dividers)**
- Full-bleed `<video autoplay muted loop playsInline>`, `object-fit: cover`, positioned behind content, with a single `--ink`-to-transparent gradient scrim over it for text legibility.
- "3D" feel comes from a subtle depth effect, not a literal 3D render: wrap the foreground content panel in a mousemove-driven `transform: perspective(1000px) rotateX() rotateY()` tilt (small angles, a few degrees), so it reads as floating above the video. Disable this transform under `prefers-reduced-motion`.
- Optional, later, non-blocking stretch: a React Three Fiber scene (a stylized low-poly aisle/shelf, slow camera orbit) as a true-3D hero centerpiece. Don't let this hold up the rest of the build — it's a nice-to-have, not the MVP.
- Compress clips to H.264 MP4, keep each under ~5MB, always ship a poster frame, pause playback via `IntersectionObserver` when the section is off-screen.
- Source clips either by filming short store-aisle/shelf/checkout footage directly (most authentic, avoids licensing questions entirely) or from a free-license stock library (e.g. Pexels, Pixabay, Coverr) — confirm the license permits commercial/public use before publishing.

**Out-of-stock video widget**
- A manifest-driven pool of short clips in `/public/media/out-of-stock/` (empty-shelf pans, a restock-alert moment, etc.).
- On mount, pick one at random and autoplay it muted/looped in a framed panel — best placed in the Problem section, next to the "30% walk out" stat, since it makes that number visible rather than abstract.
- Example implementation pattern:

```tsx
// data/outOfStockClips.ts
export const outOfStockClips = [
  "/media/out-of-stock/empty-shelf-01.mp4",
  "/media/out-of-stock/empty-shelf-02.mp4",
  "/media/out-of-stock/restock-alert-01.mp4",
];

// components/ui/OutOfStockPlayer.tsx
import { useMemo } from "react";
import { outOfStockClips } from "../../data/outOfStockClips";

export function OutOfStockPlayer() {
  const src = useMemo(
    () => outOfStockClips[Math.floor(Math.random() * outOfStockClips.length)],
    []
  );
  return (
    <video
      src={src}
      autoPlay
      muted
      loop
      playsInline
      className="oos-player"
      aria-label="Recorded example of an out-of-stock shelf"
    />
  );
}
```

## A9. Team & mentor data model, click-to-LinkedIn

- Roles and LinkedIn URLs must live in one place, editable without touching component code — no team name, role, or link should be hardcoded into JSX.
- Primary source of truth: `src/data/team.ts` / `src/data/mentors.ts` (typed arrays, shape below).
- Because roles and LinkedIn links will change after launch, both fields support an optional environment-variable override that falls back to the data-file default when unset, e.g. `VITE_TEAM_NITHISH_ROLE`, `VITE_TEAM_NITHISH_LINKEDIN`. Document whichever exact variable names you use in `/docs/HANDOFF.md` so the next person editing them doesn't have to read the source to find them.
- Clicking a team or mentor card opens `linkedin` in a new tab (`target="_blank" rel="noopener noreferrer"`). If `linkedin` is empty (true for every team member until real URLs are added), the card is not clickable and shows a quiet "Link coming soon" state instead of a dead link.

```ts
// src/data/team.ts
export type TeamMember = {
  id: string;
  name: string;
  department: string;
  year?: string;
  regNo?: string;
  role: string;       // editable default — override via VITE_TEAM_<ID>_ROLE
  photo: string;       // path under /media/team/
  linkedin: string;    // "" until the real URL is supplied
};

export const team: TeamMember[] = [
  { id: "nithish",  name: "Nithish Bhuvan K", department: "IT",           role: "Team Lead",  photo: "/media/team/nithish-bhuvan-k.jpg", linkedin: "" },
  { id: "prakash",  name: "Prakash S",        department: "ECE",         role: "Team Member", photo: "/media/team/prakash-s.jpg",         linkedin: "" },
  { id: "rajinsam", name: "Rajin Sam A",      department: "IT",          role: "Team Member", photo: "/media/team/rajin-sam-a.jpg",        linkedin: "" },
  { id: "mohana",   name: "Mohana Chandra",   department: "ECE",  year: "3rd yr BE", regNo: "24107026", role: "Team Member", photo: "/media/team/mohana-chandra.jpg", linkedin: "" },
  { id: "suvitha",  name: "Suvitha D",        department: "Cybersecurity — Section B", year: "3rd yr BE", regNo: "24111106", role: "Team Member", photo: "/media/team/suvitha-d.jpg", linkedin: "" },
  { id: "arulkumar",name: "Arulkumar P",      department: "Cybersecurity", year: "3rd yr BE", role: "Team Member", photo: "/media/team/arulkumar-p.jpg", linkedin: "" },
];
```

```ts
// src/data/mentors.ts
export type Mentor = { id: string; name: string; title: string; campus: string; photo: string; linkedin: string };

export const mentors: Mentor[] = [
  { id: "muthusamy", name: "Mr. K. Muthusamy", title: "Head - Technical Competitions and Hackathons", campus: "", photo: "/media/mentors/muthusamy.jpg", linkedin: "https://www.linkedin.com/in/muthusamy-k-a7ba161b6/" },
  { id: "gajendran", name: "Er. Gajendran Parthasarathi", title: "Head - School of Design and Innovation", campus: "", photo: "/media/mentors/gajendran.jpg", linkedin: "https://www.linkedin.com/in/er-gajendran-parthasarathi-9689a2109/" },
];
```

- Mentor headshots: crop from the reference image supplied for this build (or request fresh high-res originals) — square crop, centered on the face, minimum 400×400px, saved into `/public/media/mentors/`.
- Team photos: same crop spec, saved into `/public/media/team/`, one file per person, named to match the `photo` path above. Kept in a folder separate from mentors, as specified.

---

# PART B — Phase Prompts (copy-paste one block per agent session)

## Phase 1 — Foundation & Design System
...
## Phase 2 — Problem, Solution, Innovation
...
## Phase 3 — Technical, Feasibility, Impact, Research
...
## Phase 4 — Demo & Media System
...
## Phase 5 — Team & Mentors
...
## Phase 6 — Polish, Accessibility, QA
...

---

# PART C — `/docs/HANDOFF.md` template
...
# PART D — Definition of done
...
# PART E — Things you still need to supply
...
