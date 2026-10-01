# V140 — 18+ Artistic Nudity Mode

This release adds an optional, off-by-default mode for non-explicit fine-art nudity involving unmistakably adult fictional subjects.

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
