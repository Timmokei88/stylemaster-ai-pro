# V74 — Balanced fictional-character moderation

## Corrected behaviour

- Explicitly permits benign generic descriptions including celebrity-style, movie actor, fictional celebrity, superhero, caricature, rock star, television presenter and chef character.
- Tells the classifier not to infer a named person such as Gordon Ramsay from a generic chef or celebrity description.
- Uses a structured response schema to reduce malformed or empty moderation responses.
- Adds a narrow fallback when a harmless, text-only generic-character prompt receives an inconclusive or identity-only result.

## Safeguards retained

- The fallback does not apply to reference-image uploads or public publishing.
- It does not apply when the prompt contains an explicit identity/imitation cue.
- It does not apply to sexual content, deceptive endorsement, terrorism, murder, torture, hate, fraud, malware or comparable high-risk context.
- Local blocking rules, owner moderation, provider safety checks and failed-generation credit protection remain active.
