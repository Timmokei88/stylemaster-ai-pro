# MixoLabs V39 — Moderation deployment

## New Render environment variables

Add these under the existing `stylemaster-ai-pro` service in Render → Environment:

- `GEMINI_MODERATION_MODEL` = `gemini-2.5-flash`
- `MODERATOR_EMAILS` = the email address used to sign in to the owner's MixoLabs account

Do not paste a password, Stripe key, Gemini key or Cloudflare credential into either value. Do not delete or change any existing environment variable.

## Safe verification

1. Deploy the V39 archive and wait for Render to report `Deploy succeeded`.
2. Open `https://mixolabs.art/api/health`. Confirm `ok`, `database`, `community`, `permanent_image_storage_configured`, `gemini_key_configured` and `owner_moderation_configured` are all `true`.
3. Sign in to the owner account and hard-refresh once. Confirm `Owner Moderation` appears. Ordinary test accounts must not see it.
4. Enter `Superman felt doll, handmade product photograph` with one 1K variation. Press Generate. Confirm the rights warning appears before any credit debit, then choose Cancel. Confirm the balance is unchanged.
5. Enter `explicit pornographic image` with one 1K variation. Press Generate. Confirm it is refused and expressly says no credits were used. Do not attempt to evade or vary the prohibited request. Confirm the balance is unchanged.
6. Generate one harmless original image only if a paid generation test is desired. Confirm exactly one credit is deducted and the image is delivered.
7. Save the harmless image to Gallery. Publishing it should show `Safety checking…`, then either `Published ✓` or a private review notice. Publishing uses no image credits.
8. If it is quarantined, open Owner Moderation and verify the case can be approved, dismissed or removed. Use Approve only for the harmless test.
9. Sign in with an ordinary test account and confirm Owner Moderation is absent and the moderation API returns an access error.

## Behaviour

- Safety screening happens before credit debit.
- Failed delivery returns generation credits automatically.
- Reference images are safety-screened before generation.
- Public publishing receives a stricter text-and-image check.
- Uncertain content is private until resolved.
- Copyright and privacy complaints are never dismissed conclusively by automation.
- Removing a public moderation item does not delete the creator's private Gallery original.
- Automated classification can make mistakes; Support and owner review remain available.
