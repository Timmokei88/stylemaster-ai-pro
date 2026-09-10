# MixoLabs V18 production deployment

## Image generator

The public generator now defaults to `gemini-3.1-flash-lite-image`.

The private two-model comparison interface and its API routes have been removed from this production build. Historical comparison rows are left untouched in PostgreSQL so deploying this version does not delete data.

In Render, add or update:

`GEMINI_IMAGE_MODEL=gemini-3.1-flash-lite-image`

The code also defaults to Lite if this variable is absent. Save, rebuild and deploy.

After deployment, open `/api/health`. The response should contain:

`"gemini_image_model":"gemini-3.1-flash-lite-image"`

## Natural tutorial narration

The site uses ElevenLabs when all three values below are present. Otherwise it deliberately falls back to the browser voice, which can sound robotic.

Add these Render environment variables:

- `ELEVENLABS_API_KEY` — the secret API key from ElevenLabs.
- `NARRATOR_MALE_VOICE_ID` — the voice ID created from the owner's authorised recording.
- `NARRATOR_FEMALE_VOICE_ID` — a separate natural feminine voice ID that the account is authorised to use.
- `ELEVENLABS_MODEL_ID=eleven_multilingual_v2`

Do not paste an API key into GitHub or `index.html`. Store it only in Render's Environment section.

After deployment, `/api/health` should contain:

`"natural_narration_configured":true`

Voice cloning requires clear recordings and confirmation that the speaker has authorised their use. Creating the feminine voice by merely pitch-shifting the male audio is not recommended because it usually sounds artificial; use a separately designed or authorised feminine voice profile.

## Privacy and terms

The in-app drafts now disclose Google Gemini image processing, optional ElevenLabs narration, Render hosting/database services and Stripe payments. They also explain successful-generation credit consumption and automatic restoration for detected failures.

Before accepting live payments, replace the remaining draft placeholders with the legal operator's name, postal address, support/privacy email, retention periods, eligibility age, cancellation rules and jurisdiction-specific consumer wording. Obtain qualified legal review for the countries where the service will be sold.
