# V152 — MixoLabs Music Studio

## Included

- Free-text genre and production-style direction rather than a restrictive style list.
- Tempo slider and typed BPM control from 40 to 240 BPM.
- Target duration from 30 seconds to 5 minutes, including values such as 2:45.
- Instrumental or vocal mode, optional exact lyrics, mood, key and arrangement controls.
- Lyria 3 Pro generation through Google Vertex AI, private R2 storage, in-browser playback and MP3 download.
- Owner-only live switch and owner-set credit price per started 30 seconds.
- Idempotent charging and automatic credit return after provider, authentication or storage failure.
- No automatic paid retry.

## Deployment settings

Add these secret environment variables in Render:

- `GOOGLE_CLOUD_PROJECT_ID`: the Google Cloud project with Vertex AI and Lyria access enabled.
- `GOOGLE_CLOUD_SERVICE_ACCOUNT_JSON`: the complete service-account JSON stored as one secret value. Never expose it in browser code.
- `LYRIA_MUSIC_MODEL`: optional; defaults to `lyria-3-pro-preview`.

Keep the owner switch off until the Google Cloud account, billing limit and a real generation test are confirmed.

## Accuracy note

The selected BPM, genre and target length are compiled into a detailed production brief. The current Lyria API documentation does not expose a structured exact-duration parameter, so the interface calls this a target rather than claiming guaranteed sample-accurate length. The generated file should be measured before publishing an exact duration claim.
