# V171 — Visible previews and bounded accuracy review

The screenshot shows V170's post-generation accuracy rejection, not a provider failure. V170 hid a completed generated clip whenever a sampled-frame review failed or was uncertain. Two additional analysis calls could each wait 90 seconds. The screenshot reports that credits were returned; no live ledger was inspected in this task.

V171 changes:

- Reference analysis and final review each have a 20-second timeout.
- Review uses up to five chronological frames across the clip rather than up to 60 frames. This reduces request volume, but reduces review coverage.
- A failed, uncertain or unavailable review now returns generation credits and makes the generated result available as a clearly labelled unverified preview. It is not labelled as an accuracy pass. The review reason is shown.
- A reference-analysis service error falls back to explicit preservation instructions, followed by a refunded unverified preview. A genuinely unusable reference still stops before paid generation.
- Success price uses actual returned cost. Refunded previews report zero credits used, including recovered requests.
- No automatic paid retries. Empty sequences no longer show combine/download controls.

This supersedes V170's behaviour of withholding all rejected results. Facial/background preservation is still requested and analysed, but not guaranteed. Review happens after provider generation and cannot eliminate provider latency. The timeout is for AI analysis calls; provider generation, rendering, extraction, storage and refunds have their own timing.

Tests: server/client syntax; existing project verification; actual clip extraction yielding up to five review images; review-reason propagation; refund-before-preview, zero-cost reporting, timeout and empty-sequence guards. Live provider calls, account ledger, object storage and browser end-to-end generation were not tested. No live deployment was performed.
