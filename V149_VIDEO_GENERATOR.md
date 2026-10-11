# MixoLabs V149 — Optional Image-to-Video Generator

## Customer feature

- Animate the currently selected generated or edited image.
- Five-second and eight-second 720p videos.
- Landscape 16:9 and vertical 9:16 formats.
- Movement/camera-direction prompt.
- Exact credit price on the button and in a confirmation before charging.
- No automatic paid retry.
- Automatic credit restoration after a definitive provider failure.
- Private MP4 playback and download.

Default prices are 15 credits for five seconds and 24 credits for eight seconds.

## Owner controls

The owner Settings panel contains an **Owner Video Generator** section. The owner can:

- Switch video generation on or off without redeploying.
- Set the five-second credit cost.
- Set the eight-second credit cost.

When disabled, the customer interface is hidden and the server rejects video requests before charging.

## Deployment

The feature uses the existing `GEMINI_API_KEY` and R2 configuration. It defaults to `gemini-omni-1.1-flash`. Set `GEMINI_VIDEO_MODEL` only if Google assigns a different supported production model ID to the project.

Video generation is disabled by default after first deployment. Sign in with the owner account, open Settings, review the credit prices, and deliberately enable it when the provider account is ready.
