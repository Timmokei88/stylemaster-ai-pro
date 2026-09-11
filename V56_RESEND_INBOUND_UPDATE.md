# V56 — Resend inbound email update

This release keeps the V55 generator, billing, moderation and credit behaviour unchanged and updates the automated support-email endpoint for Resend.

## Included

- Native handling of Resend `email.received` events.
- Cryptographic verification of the raw webhook request using the Resend `whsec_` signing secret.
- Five-minute timestamp tolerance to reject stale replay attempts.
- Retrieval of the complete plain-text or HTML email body through the Resend Receiving API.
- Duplicate-message protection through the existing PostgreSQL support-ticket record.
- Automated-reply, bulk-message, mailer-daemon and no-reply loop prevention.
- Correct parsing of senders formatted as `Name <address@example.com>`.
- Threading headers on support replies.
- Existing human escalation for billing, refunds, accounts, privacy, legal, IP and safety matters.

## Required Resend configuration

The `RESEND_API_KEY` must have **Full access**, because MixoLabs must both retrieve received messages and send replies.

Create a Resend webhook for `email.received` using:

`https://mixolabs.art/api/support/email/inbound`

Copy that webhook's signing secret (beginning `whsec_`) into Render as `SUPPORT_EMAIL_WEBHOOK_SECRET`, replacing the temporary random value used during initial setup.

Do not expose either secret in screenshots, source control or support messages.
