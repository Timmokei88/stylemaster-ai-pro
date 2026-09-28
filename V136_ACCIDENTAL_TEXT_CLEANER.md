# V136 — Accidental Text Cleaner

V136 adds a free local editor to every selected generation.

## Included

- Automatic detection of text-like regions using the browser text detector where available, with a local compatibility scan as fallback.
- Red removal-mask preview before changes are applied.
- Manual **Mark Unwanted** brush for malformed pseudo-text an OCR system cannot read.
- **Protect / Restore** brush for requested poems, labels, faces and other areas that must remain unchanged.
- Local content-aware repair of marked regions.
- Reversible reset to the untouched original.
- Before/after slider.
- Descriptive `-accidental-text-cleaned.png` downloads.
- Narrated tutorial guidance.
- No additional Gemini generation, MixoLabs credit or external image-processing API.

## Important limitation

Automatic detection is a proposal rather than a guarantee. Complex textures can look like text, and severely malformed pseudo-writing may not be recognised. Customers should inspect the red mask and use the manual brushes before applying the cleanup. Large lettering that overlaps a face or important object may still be better solved by regeneration.
