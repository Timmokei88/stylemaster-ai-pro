# V168 — Preview, format and action accuracy fixes

Both direct video and image-animation outputs and statuses now live inside the right-hand Your Creation preview. Loading appears there and completed video, sequence controls and download links remain there. The initial placeholder mentions images and videos.

All eight selectable video aspect ratios now pass through an FFmpeg export stage with exact dimensions and square pixels before storage. 1:1 produces 720 × 720. Unsupported provider shapes are fitted into the chosen output canvas with black padding, preserving the entire scene without stretching or cropping. This guarantees file dimensions, not native square composition from the AI provider.

Scene instructions explicitly require chronological cause and effect: approach, visible interaction/contact, then aftermath. The cast-preservation rule now allows user-requested exits, disappearances and transformations. Non-graphic cartoon/slapstick collision instructions call for visible contact before feathers. Longer segmented generations now reference the previous segment's final frame.

Validation: server and client JavaScript syntax checks; existing V165 verification; actual supplied 720 × 1280, ten-second video passed through the new formatter and measured at 720 × 720, square pixels, ten seconds with audio retained.

Live paid AI generation and browser interaction were not tested. AI adherence is improved through instructions but is not guaranteed or automatically visually verified. No automatic paid retry is added. Sequential clip joining remains without crossfades. Session sequences are not persisted across page reloads.

Deploy the complete folder to your existing Node host with its existing settings. This task does not deploy or alter your live server. The sample video itself is unchanged.
