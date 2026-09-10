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
- Existing Angle Lock V3, 200-shade colour system and True 360 3D builder are retained.

LOCAL COMMUNITY / 3D SERVER:
1. Install Node.js 18+.
2. Run npm install.
3. For 3D, copy .env.example to .env and add your Meshy API key.
4. Run START-WINDOWS.bat.
5. Open http://localhost:3000.

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

V9 TRUE 3D FIXED-CAMERA ANGLES
- Left/right/front/back are no longer generated independently by Gemini.
- The selected master image is reconstructed once as a 3D model using Meshy Image-to-3D.
- Meshy's true cardinal 3D thumbnails are used for Front, Right, Back and Left.
- Top and Bottom are captured from the same GLB using fixed model-viewer camera positions.
- Users still select any 1–6 desired views before generation.
- Only selected views are displayed/rendered.
- The same GLB is reused by the 360° model viewer/download workflow.
- Re-generate buttons now re-render the same 3D geometry instead of asking Gemini to invent another side.

V10 ANGLE PROGRESS COUNTER
- The loading panel now always shows selected-angle progress as X of N.
- Examples: 1 of 2, 2 of 2; 1 of 4, 2 of 4, 3 of 4, 4 of 4.
- During the shared 3D reconstruction stage it still keeps "1 of N" visible and adds the 3D build percentage.
- Each selected view then advances the counter as its fixed camera render is completed.


V11 SERVER PREFLIGHT FIX
- Accurate angle generation now checks the backend before showing the long loading state.
- If the Node server is not running, the UI says "3D angle server not connected" instead of looking frozen.
- If the Meshy key is missing, the UI says so explicitly.
- Network requests now have timeouts and clearer errors.
- Gemini Canvas can preview the HTML, but it cannot run the included Node.js backend. For the true-3D angle feature, run the FULL PACKAGE server.


V12 CANVAS-SAFE STATUS FIX
- Gemini Canvas now treats the missing Node/Meshy backend as a preview limitation, not a code failure.
- The accurate-angle button remains disabled until the backend health check passes.
- Selecting angle checkboxes can no longer accidentally re-enable the button while the backend is offline.
- Canvas shows an amber message explaining that the Full Package server is required.
- Public/hosted builds show green when connected and red only when the production backend is genuinely offline.
