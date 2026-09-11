StyleMaster AI Pro V4

PRIVATE MODEL COMPARISON TEST:
- Set MODEL_TESTER_EMAILS to the email address used by your MixoLabs owner account. Separate multiple addresses with commas.
- After deployment, log in with that account and use the Private Model Test button at the lower-left of the generator.
- Each comparison creates two billable 1K images but deducts no MixoLabs credits.
- Results are randomly placed as A/B. Model names appear only after voting.
- Aggregate votes are stored in PostgreSQL. The comparison prompt is represented only by a one-way hash and is not stored as readable text.

NEW:
- Select exactly which of Front / Left / Right / Back / Top / Bottom you want.
- Only selected angles generate, reducing unnecessary image-generation usage.
- Live community MVP: image uploads, prompt sharing, likes, live feed, and one-click Use Prompt.
- Existing angle-sheet workflow and 200-shade colour system are retained.

LOCAL SERVER:
1. Install Node.js 18+.
2. Run npm install.
3. Run START-WINDOWS.bat.
4. Open http://localhost:3000.

For a real public community launch, add authentication, a proper database/cloud image storage, moderation/reporting, anti-spam/rate limiting, backups, HTTPS, and privacy/terms controls.


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


V7 FIXES
- The old "6 Strict 3D Angle Views" button is removed from the selected-image screen.
- Users now choose Front / Left / Right / Back / Top / Bottom BEFORE any angle API calls happen.
- Any combination from 1 to 6 angles is supported.
- No hidden helper angle generations are made, so selected angle count equals angle-generation count.
- Left/right prompts now explicitly enforce exact ±90° orthographic yaw and physical side orientation.
- Unselected angle cards stay hidden.
- Community now includes both the inspiration feed and a real Socket.IO live chat.
- Chat messages are persisted in data/community-chat.json for this MVP.

ACCURACY NOTE
AI image models can still occasionally fail perfect geometric consistency. V7 makes the prompts and cross-view references substantially stricter, but it cannot mathematically guarantee CAD-grade orthographic accuracy from a generative image model.


V8: Generated and angle images can now be clicked to open a full-screen zoomable viewer. Press Escape to close.

CURRENT ANGLE-SHEET WORKFLOW
- Users select any combination of Front, Left, Right, Back, Top and Bottom.
- The selected views are generated together as one Gemini angle-sheet image.
- No 3D-generation service or 3D-model charge is included.

V10 ANGLE PROGRESS COUNTER
- The loading panel now always shows selected-angle progress as X of N.
- Examples: 1 of 2, 2 of 2; 1 of 4, 2 of 4, 3 of 4, 4 of 4.
- The selected views are produced together in the angle sheet.

