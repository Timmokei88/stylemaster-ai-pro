# MixoLabs Secure Accounts and Production Deployment

This build replaces browser-only login with real accounts, PostgreSQL sessions, a server-side credit ledger, and server-enforced image-generation charges.

## Render setup

1. Create a Render PostgreSQL database in the same region as the web service.
2. Add its internal connection string as the web service environment variable `DATABASE_URL`.
3. Add `SESSION_SECRET` using a randomly generated value of at least 32 characters.
4. Set `NODE_ENV` to `production`.
5. Set `APP_ORIGIN` to the exact public origin, with no trailing slash: `https://mixolabs.art`.
6. Keep `GEMINI_API_KEY`, Stripe, R2 and email-provider secrets in Render environment variables only.
7. New accounts always start at 0 credits. Remove any obsolete `STARTER_CREDITS` environment variable from Render.
8. Deploy, then confirm `/api/health` reports `ok: true` and every required configuration flag is `true`.

The database schema is created automatically when the service starts. A failed database connection prevents the server from accepting traffic.

## Behaviour now enforced

- Passwords are hashed with bcrypt and never returned to the browser.
- Sessions are stored in PostgreSQL using an HTTP-only, secure, same-site cookie.
- Login and generation routes are rate limited.
- Each image request has a unique idempotency key.
- Credit costs are derived server-side: 1K costs 1 credit, 2K costs 2, and 4K costs 3.
- Credits are locked and deducted in a database transaction before Gemini is called.
- Failed Gemini requests restore the exact credit buckets that were charged.
- Community posts and messages are stored in PostgreSQL and require login to create.

## Stripe setup

MixoLabs creates custom GBP prices securely at checkout, so fixed Stripe Price IDs are not required for custom plans. Customers can choose £1.99–£1,000 as either a one-time pack or a monthly subscription. The credit-cost assumption is controlled by `CREDIT_COST_GBP`; margins still need periodic review against real provider, hosting, tax, dispute and support costs.

Create the webhook endpoint at `https://mixolabs.art/api/stripe/webhook`, subscribe to `checkout.session.completed`, `checkout.session.async_payment_succeeded`, `invoice.paid`, `customer.subscription.updated`, `customer.subscription.deleted`, and `charge.refunded`, then add its live signing secret to Render as `STRIPE_WEBHOOK_SECRET`.

Never paste keys into source files, GitHub, screenshots, or chat. Use Render's secret environment-value fields.

Use Stripe test mode for rehearsals and live mode only for production. Complete an end-to-end purchase, refund, cancellation and portal test after changing modes.

## Durable storage and recovery

Community, gallery and recovered generation images use Cloudflare R2. Generation states and the credit ledger use PostgreSQL. Keep Render database recovery enabled and configure the alert webhook described in `PRODUCTION_LAUNCH_RUNBOOK.md`.
