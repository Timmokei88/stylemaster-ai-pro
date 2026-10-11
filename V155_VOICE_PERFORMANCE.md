# V155 Voice Performance

Video creation now supports two independent voice controls:

1. **Voice performance description** — describes character, pitch, emotion, delivery and environment. Examples include a comic high-pitched underwater panic, an aged witch whisper, or a gravelly zombie voice.
2. **Use My Voice** — records a short microphone sample and uses its vocal qualities while speaking completely new exact dialogue.

Recordings have an 8 MB server limit, can be previewed or removed before generation, and require an explicit confirmation that the recording belongs to the user or is used with permission.

The generation brief explicitly requests understandable environmental treatment and prevents creature voices from falling back to a generic clean human voice.

## Provider limitation

MixoLabs sends both the direction and permitted voice reference to the configured video provider. Final acoustic fidelity still depends on whether that provider/model accepts audio-conditioning and how strongly it follows it. The interface does not claim guaranteed forensic voice cloning.
