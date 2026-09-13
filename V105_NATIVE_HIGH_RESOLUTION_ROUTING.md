# V105 — Native high-resolution routing

- Fixes `Image size 2K/4K is not supported for this model` failures.
- Keeps economical 1K generation on the configured model.
- Routes 2K and 4K requests to `gemini-3.1-flash-image`, which supports native 1K, 2K and 4K output.
- Records the model actually used in the generation job and credit ledger.
- Preserves automatic refunds for all provider failures.
