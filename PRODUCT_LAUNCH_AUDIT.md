# StyleMaster V8 — Product & Launch Audit

## Already strong
- Gemini image generation with prompt controls, references, colour families, 1–6 variations and high-resolution options.
- Pre-selected 1–6 orthographic angle workflow with stricter left/right side locking.
- Selectable Gemini angle-sheet workflow.
- Never-repeat random prompt engine.
- Creative safety/originality guard.
- Community inspiration feed, prompt reuse, likes and real-time chat.
- Full-screen click-to-enlarge image viewer.

## Critical before a public paid launch
1. Move Gemini image-generation API calls behind the secure server. Browser-side API credentials must never be exposed.
2. Add authentication/user accounts.
3. Replace local JSON/community uploads with a production database + cloud object storage/CDN.
4. Add server-side credit accounting, subscriptions and idempotent billing logic.
5. Add server-side moderation, report/block tools, upload scanning, rate limiting and anti-spam.
6. Add durable generation jobs: retry, timeout handling, status polling, cancellation and recovery after refresh.
7. Add monitoring: structured logs, crash/error reporting, API cost tracking and abuse alerts.
8. Add Terms, Privacy, community rules, copyright/IP reporting and deletion/export controls.

## Highest-value growth features
1. Remix attribution: every public creation gets a Remix button and keeps a link back to the original creator.
2. Public share pages: one-tap share links for creations and prompts with attractive social preview cards.
3. Creator profiles + Follow + Following feed.
4. Trending feed ranked by a blend of likes, remixes and freshness.
5. Weekly creative challenges with featured winners/badges.
6. Personal style profiles / moodboards and reusable style presets.
7. Project history, folders/collections and cloud sync.
8. Branch/version tree so users can fork any generation and see its creative lineage.
9. Prompt recipe cards showing prompt + aspect ratio + quality + colours + references + settings.
10. Private-by-default option for generations; explicit opt-in before community publishing.

## Important truth about angle accuracy
The current V7/V8 prompt locking substantially constrains left/right views, but generative image models cannot guarantee CAD-grade projection. If exact engineering orthographic geometry becomes a core selling point, generate/reconstruct a true 3D model first and render the six views from the 3D camera. That is the reliable architecture for exact angles.


## V9 angle architecture correction
The current angle system generates the selected views together in one Gemini angle-sheet image. This keeps the workflow simple and avoids a separate 3D service, although generative views cannot guarantee CAD-grade geometric consistency.
