# MixoLabs V40 — age notice and legal identity setup

## What changed

- The separate registration checkbox has been removed.
- The registration screen now shows a short 18+ notice explaining that lawful AI results may include mature, frightening or graphic themes.
- The notice confirms that explicit sexual content remains prohibited.
- Terms and Privacy links are available directly beside Create Account.
- A new account records the acceptance time and the applicable Terms, Privacy and age-policy versions automatically.
- The FAQ and Privacy wording now explain the reason for the 18+ policy.
- The health endpoint reports whether public legal name, address and support email settings have been configured.

## Render environment variables required for the next launch stage

Add these only after confirming the correct public business information:

- `PUBLIC_LEGAL_NAME` — the proprietor's legal name or the registered company name, as applicable.
- `PUBLIC_LEGAL_ADDRESS` — the lawful address to display to customers. Do not expose a private home address without first deciding that it is the correct lawful business contact address.
- `PUBLIC_SUPPORT_EMAIL` — the monitored customer-support email address.

After deployment, open `https://mixolabs.art/api/health` and confirm:

- `public_legal_name_configured: true`
- `public_legal_address_configured: true`
- `public_support_email_configured: true`

The health endpoint reveals only status booleans and does not reveal the configured values.
