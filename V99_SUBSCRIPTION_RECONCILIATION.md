# V99 — Subscription Change Reconciliation

- Corrected PostgreSQL conversion of Stripe billing-period timestamps.
- Prevented a successful Stripe plan change from being misreported as a Stripe failure when the local account update fails afterward.
- Added automatic reconciliation: if Stripe is already set to the requested amount, MixoLabs repairs the displayed plan and allowance without creating another price or subscription.
- Retained next-renewal pricing with no surprise same-day charge.
