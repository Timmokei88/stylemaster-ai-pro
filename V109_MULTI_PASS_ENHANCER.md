# MixoLabs V109 — Multi-Pass Detail Enhancer

- Replaces the previous single sharpening pass with adaptive multi-pass detail enhancement.
- Applies controlled local contrast and colour recovery before enlargement.
- Uses a thresholded detail pass to sharpen real edges while gently smoothing flat pixel noise.
- Performs a second detail pass after the first 2× upscale, then uses high-quality progressive resampling for 4× output.
- Automatically switches the comparison to a magnified inspection view when processing finishes.
- Enhancement remains free and entirely separate from image generation and credit billing.
- No server generation, billing, moderation, account or scrolling behaviour was changed in this release.
