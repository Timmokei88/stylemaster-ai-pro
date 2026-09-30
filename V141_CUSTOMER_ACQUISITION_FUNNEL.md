# MixoLabs V141 — Customer Acquisition Funnel

V141 keeps the existing one-time 10-credit welcome offer and adds owner-only measurement so advertising decisions are based on real conversion data.

## What is measured

- Landing-page visitors
- Signup CTA clicks and form submissions
- Accounts created
- First successful image generations
- Pricing views and checkout clicks
- Successful Stripe returns
- Results grouped by UTM traffic source

The browser uses a random anonymous visitor ID. Analytics metadata explicitly removes email addresses, passwords and invitation codes. The reporting endpoint and dashboard require an authorised owner account.

## Owner workflow

1. Open **Settings** while logged into the authorised owner account.
2. Find **Customer Acquisition Funnel**.
3. Select the last 7, 30 or 90 days.
4. Compare each stage before changing the advert or free-credit allowance.

If visits are high but signup clicks are low, improve the landing message. If signup submissions are high but completed accounts are low, test registration. If accounts are created but first images are low, improve onboarding. If customers generate but do not open pricing, improve the upgrade message. Do not raise advertising spend until the broken stage is known.

## Deployment note

Deploy the complete V141 folder to the same Render service. The database table and indexes are created automatically at startup. Keep the advert paused until an incognito test reaches account creation and one successful generation.
