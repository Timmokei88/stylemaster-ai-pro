# MixoLabs Secure Accounts and Stripe Test Deployment

This build replaces browser-only login with real accounts, PostgreSQL sessions, a server-side credit ledger, and server-enforced image-generation charges.

## Render setup

1. Create a Render PostgreSQL database in the same region as the web service.
2. Add its internal connection string as the web service environment variable `DATABASE_URL`.
3. Add `SESSION_SECRET` using a randomly generated value of at least 32 characters.
4. Set `NODE_ENV` to `production`.
5. Set `APP_ORIGIN` to the exact public origin, with no trailing slash, for example `https://mixolab.art`.
6. Keep `GEMINI_API_KEY` and `MESHY_API_KEY` in Render environment variables only.
7. New accounts always start at 0 credits. Remove any obsolete `STARTER_CREDITS` environment variable from Render.
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

## Stripe test-mode setup

Keep Stripe in test mode. MixoLabs creates custom GBP prices securely at checkout, so fixed Stripe Price IDs are not required. Customers can choose £1.99–£1,000 as either a repeatable one-time pack or a monthly subscription. Using the current 6p-per-credit cost assumption, one-time allowances target approximately a 28% contribution margin and monthly allowances target approximately 22% so subscribers receive more credits. These figures exclude hosting, tax, disputes and support costs.

Add `STRIPE_SECRET_KEY` using the test secret key. In Stripe Workbench, create a webhook endpoint at `https://stylemaster-ai-pro.onrender.com/api/stripe/webhook`, subscribe to `checkout.session.completed`, `checkout.session.async_payment_succeeded`, `invoice.paid`, `customer.subscription.updated`, and `customer.subscription.deleted`, then add its test signing secret to Render as `STRIPE_WEBHOOK_SECRET`.

Never paste keys into source files, GitHub, screenshots, or chat. Use Render's secret environment-value fields.

Before live mode, repeat the setup with live products, live price IDs, a live secret key, and a separate live webhook signing secret. Complete the published refund/cancellation terms, business identity, support contact, VAT/tax review, end-to-end purchase/refund/cancellation tests, and upgrade the sleeping Render web service.

## Still deliberately deferred

Community image files still use the web service filesystem. Move them to durable object storage before relying on community uploads in production.
