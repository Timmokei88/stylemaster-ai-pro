# MixoLabs Secure Accounts Deployment

This build replaces browser-only login with real accounts, PostgreSQL sessions, a server-side credit ledger, and server-enforced image-generation charges.

## Render setup

1. Create a Render PostgreSQL database in the same region as the web service.
2. Add its internal connection string as the web service environment variable `DATABASE_URL`.
3. Add `SESSION_SECRET` using a randomly generated value of at least 32 characters.
4. Set `NODE_ENV` to `production`.
5. Set `APP_ORIGIN` to the exact public origin, with no trailing slash, for example `https://mixolab.art`.
6. Keep `GEMINI_API_KEY` and `MESHY_API_KEY` in Render environment variables only.
7. Set `STARTER_CREDITS` to `0` until the free-trial policy is approved.
8. Deploy, then confirm `/api/health` reports `ok: true` and `database: true`.

The database schema is created automatically when the service starts. A failed database connection prevents the server from accepting traffic.

## Behaviour now enforced

- Passwords are hashed with bcrypt and never returned to the browser.
- Sessions are stored in PostgreSQL using an HTTP-only, secure, same-site cookie.
- Login and generation routes are rate limited.
- Each image request has a unique idempotency key.
- Credit costs are derived server-side: 512 and 1K cost 1 credit, 2K costs 2, and 4K costs 3.
- Credits are locked and deducted in a database transaction before Gemini is called.
- Failed Gemini requests restore the exact credit buckets that were charged.
- Community posts and messages are stored in PostgreSQL and require login to create.

## Still deliberately disabled

Stripe payments and subscriptions are not enabled in this build. Product quantities and margins must be approved first. Do not grant paid credits from browser code or local storage. The next backend milestone should add Stripe Checkout, webhook idempotency, renewal grants, cancellation handling, and the customer portal against this ledger.

Community image files still use the web service filesystem. Move them to durable object storage before relying on community uploads in production.
