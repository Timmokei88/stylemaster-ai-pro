# V104 — Private fantasy reference reliability

- Fixes benign private reference generations being blocked when the automated classifier returns malformed, zero-confidence or otherwise inconclusive output.
- Applies the correction to both reference-upload screening and the subsequent generation-prompt screening.
- Explicitly permits benign realism fairies, magical fantasy portraits, upscaling and higher-resolution remakes of previously generated fantasy images.
- Retains deterministic blocks for explicit sexual content, sexual content involving minors, non-consensual imagery, severe real-person abuse, bullying, hateful degradation, fraud, malware and other prohibited content.
- Keeps the downstream image provider's safety controls and automatic failed-generation credit refunds enabled.
