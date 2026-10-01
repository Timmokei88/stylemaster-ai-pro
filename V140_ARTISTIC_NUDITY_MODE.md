# V140 — 18+ Artistic Nudity Mode

This release adds an optional, off-by-default mode for non-explicit fine-art nudity involving unmistakably adult fictional subjects.

Short prompts such as “nude lady” are expanded server-side into an adult (age 25+), fictional, gallery-style request. Tasteful genital anatomy can be requested only when expressly described as incidental and non-detailed; close-ups, explicit anatomical detail and sexual activity remain blocked. In this mode only, the Gemini sexually-explicit safety category uses Google's documented `BLOCK_ONLY_HIGH` threshold. MixoLabs' stricter server-side boundaries continue to run before the provider call. A secondary moderation result that is merely inconclusive no longer overrides a request that already passed these boundaries.

## Allowed scope

- Text-to-image fictional adults only.
- Respectful fine-art, editorial or classical nudity.
- Bare breasts may be requested where the configured image provider permits them.

## Enforced boundaries

- No visible genital detail.
- No sexual acts or pornographic framing.
- No minors, youthful-looking subjects or ambiguous age.
- No identifiable real people or celebrities.
- No uploaded reference images while the mode is enabled.
- The upstream image provider retains its own safety rules and can refuse a request.

Requests blocked by MixoLabs are rejected before charging. If the provider refuses or returns no usable image after charging, the existing automatic credit-refund path remains active.

## Deployment

Deploy this folder as the next website release using the same environment variables and database as V139. No database migration is required.
