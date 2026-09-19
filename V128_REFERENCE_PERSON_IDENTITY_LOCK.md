# V128 — Reference-person identity lock

When one or more reference images are attached, the final server-side generation request now adds a mandatory person-identity instruction after all browser prompt building and prompt enhancement.

The rule preserves a referenced person’s recognisable facial structure, features, skin tone, apparent age, hairline and distinguishing marks by default. Requested changes to clothing, setting, pose, camera, lighting, era or artistic style remain allowed. If a prompt explicitly asks for a particular facial change, only that requested trait should change; other identity traits remain locked. Multiple people are mapped one-to-one so their identities are not merged.

The generator, narrated tutorial and FAQ explain this default clearly. They also state the honest limitation: generative image models may still vary, so pixel-identical identity cannot be guaranteed.
