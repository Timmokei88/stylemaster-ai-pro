# V83 — Flash-Lite prompt enhancer

- Adds an **Enhance My Prompt** button for customers who begin with a short idea.
- Uses `GEMINI_PROMPT_MODEL`, defaulting to `gemini-3.1-flash-lite`.
- Does not debit MixoLabs image credits and does not automatically generate an image.
- Lets customers review and edit the enhanced description before generation.
- Preserves category, style and theme selections as enhancement context.
- Requires authentication and limits each account/IP route to ten enhancement requests per minute.
- Retains the normal generation moderation checks after enhancement.
