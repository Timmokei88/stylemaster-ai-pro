# MixoLabs production launch runbook

## Deploy

1. Upload this build to the connected GitHub repository and wait for Render to finish deploying.
2. Open `https://mixolabs.art/api/health`. It must return `"ok": true` and every required configuration flag must be `true`.
3. Log in with an owner account and open `/api/ops/status` to confirm generation, support and moderation counts are available.

## Required Render configuration

Use `.env.example` as the authoritative key list. Production requires the application origin, PostgreSQL, session secret, Gemini, Stripe webhook, Cloudflare R2, legal identity, support address and moderator address values. Never put secret values in GitHub or browser code.

## Stripe verification

The production webhook URL is `https://mixolabs.art/api/stripe/webhook`. Enable these events:

- `checkout.session.completed`
- `checkout.session.async_payment_succeeded`
- `invoice.paid`
- `customer.subscription.updated`
- `customer.subscription.deleted`
- `charge.refunded`

Run one smallest live purchase, confirm credits are added once, issue a refund in Stripe and confirm the corresponding unused purchased credits are removed once. Confirm Manage Billing opens the Stripe customer portal.

## Automated support email

The on-site AI support assistant works with the Gemini key. Automated email replies additionally require a verified `support@mixolabs.art` sender, a full-access `RESEND_API_KEY`, and the Resend webhook signing secret (beginning `whsec_`) in `SUPPORT_EMAIL_WEBHOOK_SECRET`.

Create a Resend webhook for the `email.received` event at `https://mixolabs.art/api/support/email/inbound`. The endpoint verifies Resend's signature from the untouched request body, rejects stale or forged requests, retrieves the full message through the Receiving API, ignores automated replies, and prevents duplicate responses.

Ordinary product questions may receive an AI response. Billing disputes, refunds, missing credits, account access, privacy requests, legal/IP issues and safety cases are acknowledged and marked for human review. The bot cannot alter accounts, credits, payments or legal decisions.

## Generation reliability

Each request now has a durable PostgreSQL job record. Successful first images are stored privately in R2 for recovery after refresh. Provider failures and empty responses restore credits. Pending or processing requests left behind by a server interruption are reconciled and refunded after five minutes. Reusing a completed request ID returns its recovered image instead of charging twice.

## Monitoring and backups

- Configure `ALERT_WEBHOOK_URL` for failed provider calls, failed recovery refunds, storage failures and escalated support tickets.
- Keep Render PostgreSQL recovery/backups enabled and test restoration according to the Render plan.
- Monitor Render logs for JSON events including `generation_started`, `generation_completed`, `generation_provider_failed`, `stale_generation_refunded` and `support_ticket_escalated`.
- Keep the Gemini monthly spend cap and Stripe dispute notifications enabled in their provider dashboards.

## Final smoke test

- Create a new account, log out and log back in.
- Complete the smallest live Stripe purchase and confirm the credit balance.
- Generate one permitted 1K image and confirm one credit is used.
- Refresh the page and confirm the recent creation is restored.
- Trigger a harmless provider failure in a non-production test environment and confirm the job is marked failed and credits are restored.
- Upload a permitted reference image; confirm prohibited or uncertain real-person misuse is blocked without charge.
- Save to Gallery, add to Favourites, download, publish, unpublish and remove the image.
- Send a Community message, report content and resolve the case through owner moderation.
- Ask the on-site support bot a general question and send an inbound test email.
- Test the primary flow in current Chrome, Edge, Firefox and Safari at desktop and mobile widths.

## Legal and customer-care check

The product contains the current multi-view limitation, reference-image rules, prohibited real-person misuse rules, credit/refund terms and privacy disclosures. Before a large public marketing campaign, have a qualified UK professional review the final public wording and the actual business practices. Keep the ICO registration and customer-support contact details current.
