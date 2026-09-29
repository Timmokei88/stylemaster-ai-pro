StyleMaster AI Pro V4

V137 — CUSTOMER ONBOARDING AND CLEAR-TO-TOP
- Adds a narrated five-step Quick Start while preserving the complete platform tutorial.
- Corrects outdated quality instructions: generation is 1K for one credit and the selected result can be enhanced to 2K without another generation credit.
- Reassures new customers that short prompts work and marks Advanced Options as optional.
- Makes the pricing shortcut explicit and visually separates the secondary Advanced Options generation button.
- Clear now empties the prompt, recalculates the prompt layout, immediately returns the page to the top and focuses the prompt without causing another scroll jump.

V138 — ORIGINAL NATURAL NARRATORS RESTORED
- Quick Start now uses the same original MixoLabs natural female or male narrator selected in the complete tutorial.
- The Quick Start no longer invokes a separate basic browser voice.
- Existing voice selection and narration volume continue to control all tutorial narration.

V121 — IDENTITY, REALISM AND OWNER PRICING
- Front/back, turnaround and model-sheet prompts automatically receive a strict same-design identity lock for every subject.
- Photorealism and hyperrealism prompts automatically receive true-camera realism requirements.
- The configured owner can open Settings > Owner Pricing Controls and change the base one-time credits and monthly bonus without editing code.
- Example: £1.99, 30 base credits and a 20% monthly bonus gives 30 one-time credits or 36 monthly credits.
- Pricing changes apply to new purchases and newly changed subscriptions. Existing subscriptions retain their recorded allowance until the customer changes plan or an intentional migration is performed.
- MODERATOR_EMAILS must contain the owner's login email for these controls to appear.

AI generation is probabilistic. The identity lock improves multi-view consistency but cannot guarantee pixel-identical geometry; exact production turnarounds require a dedicated 3D/CAD workflow.

V122 — SIMPLIFIED GLOBAL PRICING
- The owner now edits one visible value: one-time credits provided for the fixed £1.99 baseline.
- Press Enter or Save & Update All Offers to apply it.
- Monthly credits are always calculated at 20% above the equivalent one-time offer.
- Every manual amount and slider amount is recalculated proportionally and refreshed without a redeployment.
- Owner inputs use a dark, high-contrast style so their values remain readable.

PRIVATE MODEL COMPARISON TEST:
- Set MODEL_TESTER_EMAILS to the email address used by your MixoLabs owner account. Separate multiple addresses with commas.
- After deployment, log in with that account and use the Private Model Test button at the lower-left of the generator.
- Each comparison creates two billable 1K images but deducts no MixoLabs credits.
- Results are randomly placed as A/B. Model names appear only after voting.
- Aggregate votes are stored in PostgreSQL. The comparison prompt is represented only by a one-way hash and is not stored as readable text.

NEW:
- The dedicated angle-sheet workflow has been retired because generative image models cannot guarantee correct view geometry every time.
- Users can still describe a multi-panel or multi-view composition in the normal prompt box; it is treated and charged as one ordinary image generation.
- Live community MVP: image uploads, prompt sharing, likes, live feed, and one-click Use Prompt.
- The existing 200-shade colour system is retained.

LOCAL SERVER:
1. Install Node.js 18+.
2. Run npm install.
3. Run START-WINDOWS.bat.
4. Open http://localhost:3000.

The production service includes authenticated accounts, PostgreSQL records, private Cloudflare R2 image storage, Stripe credit accounting, moderation and reporting, rate limiting, durable generation records, failure refunds, operational status endpoints, and privacy/terms controls. Hosting-level database backups and alert delivery must remain enabled in the production accounts.


NEW IN V5 — CREATIVE SAFETY + ORIGINALITY GUARD
- Allows fictional zombie apocalypse, horror, monsters, cinematic action, explosions, battlefield chaos, parody/war satire, and non-graphic blood.
- Blocks explicit realistic gore such as graphic decapitation/dismemberment and exposed organs.
- Blocks instructional drug-lab, weapon-building and explosive-construction requests.
- Named franchise characters are automatically remixed into original archetypes instead of copied exactly.
- The remixer removes direct franchise logos, exact costumes, emblems and signature identifiers where possible.

IMPORTANT:
This browser-side preflight is a user-experience guard, not a complete production safety system.
For a public commercial service, enforce the same rules on your secure backend and keep the image provider's own safety controls enabled.


NEW IN V6 — NEVER-REPEAT RANDOM DESCRIPTION ENGINE
- Blank description + Random = a completely fresh concept.
- Existing description + Random = keeps the user's core subject and creatively randomises the scene around it.
- Example: "zombie DJ DJing in a club" remains a zombie DJ club concept, but the setting details, mood, camera, lighting, composition, props and storytelling twist change on every click.
- Stores fingerprints of previous random ideas in browser localStorage and rejects duplicates.
- Uses a very large combinatorial idea space plus a unique variation seed.

NOTE:
No finite software can mathematically promise that two ideas will never be semantically similar forever, but this build prevents exact stored repeats and makes repeated descriptions extremely unlikely.


CURRENT MULTI-VIEW POSITION
- The dedicated angle-sheet and 3D-model workflows are retired and cannot charge credits.
- Customers may request multi-view artwork through the ordinary prompt box for the normal displayed image cost.
- Multi-view output is artistic and may omit, reverse, duplicate or mislabel views; it is not a CAD or engineering service.
