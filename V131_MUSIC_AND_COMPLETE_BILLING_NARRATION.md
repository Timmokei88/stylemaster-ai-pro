# V131 — Background music and complete billing narration

## Owner music library

- Only an authorised `MODERATOR_EMAILS` owner can upload or remove tracks.
- Accepted formats are MP3, M4A, OGG and WAV, with a 25 MB limit per file.
- Upload requires an explicit confirmation that the owner owns or is licensed to stream the music.
- Track files are stored privately in the configured R2 bucket and streamed only to signed-in creators.

## Customer player

- Music never starts automatically.
- Signed-in creators can play, pause, skip backwards, skip forwards, mute and change volume.
- A finished song advances to the next available track.
- Volume is remembered locally on that browser.
- Narrated contextual help explains every music control.

## Billing narration

Narrated help now separately explains:

- exact one-time amount entry;
- the £1.99–£250 pay-as-you-go slider;
- quick amount buttons and the live estimate;
- one-time checkout and non-expiring credits;
- exact monthly amount entry;
- the £1.99–£250 monthly slider;
- the 20% monthly credit bonus;
- 28-day rollover, oldest-credit-first use and expiry;
- digital-service acknowledgement;
- starting or changing a monthly plan; and
- secure Stripe billing management.
