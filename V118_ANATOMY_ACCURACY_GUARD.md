# MixoLabs V118 — Anatomy Accuracy Guard

- Adds a mandatory anatomy-quality block to every browser-built generation prompt.
- Enforces the same rule in the server's final provider payload, including normalised reference-image requests.
- Explicitly requires four legs for normal quadrupeds and separates the tail from the limb count.
- Covers people, animals, realistic work, cartoons, toys, figurines, resin models and 3D animation.
- Rejects extra, missing, duplicated, fused, branching, detached and malformed body parts in the generation instruction.
- The prompt-enhancement service now preserves anatomy requirements as well.
- No extra API call or customer credit is introduced.

This reduces anatomy failures but cannot mathematically guarantee perfect output from a generative model. Automated visual inspection and regeneration would require additional model calls and provider cost.
