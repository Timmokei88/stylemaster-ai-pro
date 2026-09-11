# StyleMaster V8 — Product & Launch Audit

## Already strong
- Gemini image generation with prompt controls, references, colour families, 1–6 variations and high-resolution options.
- Standard image generation supports free-text requests for composite or multi-view imagery without promising geometric accuracy.
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

## Retired angle-sheet feature
The dedicated angle-sheet workflow was removed because generative image models cannot guarantee accurate left and right geometry. Historical charges are refunded automatically and old angle-sheet API requests are rejected without charge.
