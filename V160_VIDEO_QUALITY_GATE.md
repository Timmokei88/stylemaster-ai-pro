# V160 — Strict Video Quality Gate

Every generated video is now inspected before it is stored or delivered. The validator examines the complete clip against the full production brief and, when supplied, the original identity-reference image.

The job is rejected for material failures including displaced or duplicated anatomy, incorrect body-part contact, missing or substituted characters, species changes, subject merging, face or identity drift, severe deformation, incorrect readable text, broken motion, unexplained cuts and major prompt non-compliance.

A result must pass the overall decision with no blocking issues and achieve at least 0.82 for overall quality, prompt compliance, anatomy continuity and identity continuity. If validation fails or cannot run safely, the existing failure path returns the user's charged credits automatically. A rejected video is never stored or presented as successfully completed.

This substantially reduces obvious failures but cannot make a probabilistic generator infallible. Quality inspection also creates a small additional provider cost for MixoLabs.
