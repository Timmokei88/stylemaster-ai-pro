# MixoLabs V66 — Early Access and Safe Pricing

## What this release changes

- Limits new registration to ten single-use Early Access invitations.
- Existing accounts continue to log in normally.
- Adds a waiting list and Discord alerts for new waiting-list entries, new invited accounts, and invitation capacity at 5, 2 and 0 places remaining.
- Limits both adjustable purchase types to £1.99–£15 during Early Access.
- Uses a conservative 5p internal allowance per 1K image when calculating sale credits.
- Gives monthly plans 20% more credits, rounded up.

## Render environment variables

Add or update these three variables in the live Render web service:

```text
CREDIT_COST_GBP=0.05
EARLY_ACCESS_ENABLED=true
EARLY_ACCESS_CODES=MIXO-D25D9-F426A,MIXO-D1CF8-BDC9B,MIXO-1701E-B9F24,MIXO-9BDD7-9C06D,MIXO-87AF4-69233,MIXO-51055-3ACCD,MIXO-6894B-89261,MIXO-C96E9-80518,MIXO-E9D55-0D913,MIXO-3444E-1C044
```

Keep the invitation-code line private. Give each tester only one code. Each code becomes unusable immediately after one successful registration. Codes are stored in PostgreSQL only as SHA-256 hashes.

## Deploy

1. Upload this release over the current project while keeping all existing secret environment variables.
2. Add the three variables above in Render.
3. deploy the latest commit and wait for the service to report Live.
4. Open `https://mixolabs.art/api/health` and confirm:
   - `ok` is `true`
   - `early_access_enabled` is `true`
   - `early_access_codes_configured` is `10`
5. In a private/incognito window, open Create Account. Confirm that an invitation-code box and Join Waiting List button appear.
6. Confirm Plans & Credits only accepts £1.99–£15 and initially shows 24 one-time credits or 29 monthly credits at £1.99.

## Invitation handling

Record who receives each code. Do not post the full list publicly. Existing accounts do not need a code. If all invitations have been used, new visitors can join the waiting list and you will receive a Discord alert.

To stop issuing places, keep any remaining codes private and direct visitors to the waiting list. To reopen unrestricted registration later, set `EARLY_ACCESS_ENABLED=false` and redeploy.

## Expected credit examples

| Payment | One-time credits | Monthly credits |
|---:|---:|---:|
| £1.99 | 24 | 29 |
| £3.50 | 45 | 54 |
| £5.00 | 66 | 80 |
| £7.00 | 94 | 113 |
| £10.00 | 137 | 165 |
| £15.00 | 207 | 249 |

These figures use the existing reserve formula for Stripe costs, a 28% operating/profit reserve, and a conservative 5p internal image-cost allowance. Actual provider charges can vary, so keep Google billing alerts and a hard spending limit in place.
