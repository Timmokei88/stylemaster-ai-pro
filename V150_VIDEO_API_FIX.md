# MixoLabs V150 — Video API Fix

The image-to-video request now uses Gemini Omni Flash's supported Interactions API.

## Corrected

- Removed the unsupported `generationConfig.videoConfig` payload that caused the live error.
- Sends the selected image and motion instruction through `/v1beta/interactions`.
- Requests MP4 video at 720p in either 16:9 or 9:16.
- Preserves the existing owner switch, owner-set credit prices, idempotency protection and automatic refund on failure.
- Accepts both inline video bytes and provider-hosted video output.

No image or video was generated while preparing or verifying this release.
