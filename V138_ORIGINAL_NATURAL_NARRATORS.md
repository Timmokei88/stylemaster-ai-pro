# V138 — Original natural narrators restored

The V137 Quick Start originally had its own basic browser speech call. V138 removes that separate path.

Every Quick Start **Hear this step** action now routes through the existing MixoLabs narration controller and `/api/narration`, preserving:

- the original natural female narrator;
- the original natural male narrator;
- the narrator selector;
- the chosen voice volume;
- the existing fluent audio and browser fallback behaviour.

No image-generation, credit, enhancement, pricing or Clear-button behaviour was changed.
