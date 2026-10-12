# V162 video extension, identity and voice

- Every completed MixoLabs video receives an **Extend This Video** control.
- Each extension can add 5–10 seconds and the resulting video can be extended again.
- The original video's exact final frame becomes the continuation reference.
- Face geometry, markings, felt fibres, seams, embroidery, clothing, proportions and silhouette are treated as immutable during turns and rotations.
- A continuation segment must pass 0.90 prompt, anatomy, identity and voice thresholds before it is joined and delivered.
- Recorded voice keeps the authorised speaker's accent/cadence, but an explicitly requested performance has priority over the recording's natural pitch.
- Clear high/chipmunk and deep/zombie/vampire requests receive deterministic server-side pitch processing as well as provider direction.
- The extension price is displayed before confirmation and charges only the added seconds.
- Failure at generation, voice processing, continuity inspection, joining or storage triggers a complete extension-credit refund.
