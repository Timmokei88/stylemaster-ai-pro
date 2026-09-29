# V140 — Public signup landing page

This release adds a dedicated first screen for logged-out visitors without changing image generation, enhancement, pricing, Stripe checkout or existing customer sessions.

## Visitor journey

1. A logged-out visitor sees the MixoLabs value proposition immediately.
2. The primary button states **Create Account — Claim 10 Welcome Credits**.
3. The page explicitly states that the credits are awarded once, that no card is needed to claim them, and that continued generation requires a pay-as-you-go pack or monthly plan after they are used.
4. The button opens the existing secure Create Account form.
5. When invitation-only mode is off, the existing server creates the account and awards exactly ten starter credits.
6. Successful registration closes the landing page and confirms that the ten credits are ready.

## Campaign attribution

The browser retains `utm_source`, `utm_campaign`, and `utm_content` (or compatible source/campaign/ad parameters) for the registration session. New user records store the corresponding source, campaign and ad fields. Owner webhook alerts include them as well.

## Owner action required before public advertising

In **Settings → Owner Early Access & Customer Credits**, switch **Invitation only** off and save. Test the complete registration journey in a private browser window before restarting an advertisement.
