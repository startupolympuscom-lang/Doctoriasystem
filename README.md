# DoctorIA Medical Solutions

Marketing site for DoctorIA, an AI-powered clinical intelligence platform
covering the full cycle of care (prevention, diagnosis, treatment) across
oncology, sports medicine, and dentistry — plus a working interactive
prototype of the SnanIA dental simulation product.

Frontend: React + TypeScript + Vite + Tailwind CSS v4 + React Router.
Backend: Express + PostgreSQL (Neon), on-device face landmark detection
(MediaPipe), and Gemini for AI image editing.

## Setup

```bash
npm install
cp .env.example .env   # fill in DATABASE_URL and GEMINI_API_KEY
npm run migrate         # creates the simulations table
```

## Development

Runs the Vite dev server and the API together (Vite proxies `/api` to it):

```bash
npm run dev:all
```

Or separately: `npm run dev` (frontend) and `npm run server` (API).

## Build

```bash
npm run build
npm run preview
```

For a production deploy, run `node server/index.js` (serves the API; put a
static host or reverse proxy in front of `dist/` for the frontend, or extend
`server/index.js` to serve `dist/` itself). SPA fallback config is included
for Netlify (`public/_redirects`) and Vercel (`vercel.json`).

## Project structure

- `src/pages/Home.tsx` — the marketing landing page (all the section components under `src/components/`)
- `src/pages/Snania.tsx` — the SnanIA product marketing page
- `src/pages/SnaniaTry.tsx` — the interactive SnanIA tool: upload a photo, on-device face detection, AI-generated before/after preview, treatment-intelligence estimate, save to a Postgres-backed demo gallery
- `src/lib/faceLandmarks.ts` — MediaPipe FaceLandmarker wrapper (WASM + model are self-hosted under `public/mediapipe/`, no runtime CDN dependency)
- `src/lib/procedureEffects.ts` — the per-procedure data (illustrative % impact figures, duration, and the AI prompt hint used to generate the preview)
- `server/` — Express API: `POST /api/generate-preview` (Gemini image edit), `POST /api/simulations` + `GET /api/simulations` (Postgres persistence)

## Important notes on the SnanIA tool

- The "after" photo comes from a **general-purpose AI image model** (Gemini),
  not a dental-trained one. It's an illustrative preview, not a clinical
  prediction — the UI says so explicitly, and this should stay true if the
  model or prompt changes.
- The demo gallery has no auth and is not private — don't point it at real
  patient data.
- `GEMINI_API_KEY` needs image-generation quota enabled on its Google Cloud
  project (the free tier alone returned 429s during testing here).
