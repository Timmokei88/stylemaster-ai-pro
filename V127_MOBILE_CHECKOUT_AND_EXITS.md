# V127 — Mobile Stripe checkout and visible exits

Mobile checkout now accepts the canonical MixoLabs hostname with or without the `www` alias, builds Stripe return links from the validated active origin, explicitly carries the signed-in same-origin session, prevents duplicate checkout taps, validates Stripe redirect URLs, and reports actionable errors instead of a generic failure.

If a stored Stripe customer identifier is stale, deleted, or belongs to an earlier Stripe mode, MixoLabs creates a fresh customer record and continues checkout safely.

On screens up to 980 pixels wide, Account, Profile, Settings, Plans and Credits, Gallery, Favorites, Tutorial, Community, Legal, Full Screen, Appearance, and the Enhancer all place a large fixed close button at the safe top-left edge. The mobile menu panel also places its own close button on the left.
