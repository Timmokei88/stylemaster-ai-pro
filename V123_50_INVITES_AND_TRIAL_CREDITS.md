# V124 — 50 invitations, ten trial credits and a live low-balance offer

## Recommendation implemented

Each valid invitation grants ten one-time trial credits. Ten credits let each invited tester try ten standard 1K generations. At the configured allowance of £0.05 per credit, the maximum internal allowance for 50 fully redeemed invitations is £25.00.

When a non-owner customer has two credits or fewer, the generator now displays a friendly low-balance offer. Its price and credit quantity are read from the live Owner Pricing Controls, so changing the £1.99 base offer from 25 credits to 30, 35 or another value updates the message automatically without another code deployment.

The £1.99 minimum paid pack remains unchanged. Trial credits are held in the purchased-credit bucket, consumed normally, recorded in `credit_ledger`, and never renewed.

## Production settings

1. Keep `EARLY_ACCESS_ENABLED=true`.
2. Replace the production `EARLY_ACCESS_CODES` value with the complete comma-separated line in `PRIVATE-50-INVITATION-CODES.txt`.
3. Set `INVITE_TRIAL_CREDITS=10`.
4. Deploy this V124 build.
5. Open `/api/health` while logged out and confirm `early_access_codes_configured` is `50`.
6. Open `/api/early-access/status` and confirm `remaining` is `50` before distributing codes.
7. Redeem one code in a fresh account. Confirm the account shows ten credits and the status falls to 49.
8. Set an invited test account to two credits and confirm the low-balance message uses the currently saved Owner Pricing Controls quantity.

On startup, the server retains previously used invitation records for auditing, inserts the current 50 codes, and removes obsolete unused codes. This makes the available invitation pool match the current environment list without reactivating already-used codes.

Keep `PRIVATE-50-INVITATION-CODES.txt` private. Never publish it with website assets or commit it to a public repository.
