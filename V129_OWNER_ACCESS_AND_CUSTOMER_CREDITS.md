# V129 — Owner access and customer credits

The authorised MixoLabs owner now has a protected Settings section for Early Access and customer support.

## Registration control

- Invitation-only registration can be switched on or off without changing Render environment variables.
- The choice is persisted in `platform_settings` and survives restarts and deployments.
- When invitation-only mode is on, signup requires an unused code and offers the waiting list.
- When it is off, invitation and waiting-list controls disappear and anyone can create an account.
- Every successful new account receives 10 starter credits in either mode, with a matching ledger record.

## Customer directory and goodwill credits

- Only an authenticated email listed in `MODERATOR_EMAILS` can access the owner endpoints or controls.
- The owner can search registered accounts by email or display name and see current purchased, subscription and total credits.
- Waiting-list emails appear separately and cannot receive credits until an account exists.
- The owner can grant 1–1,000 goodwill credits with a required reason.
- Every adjustment is idempotent, added to purchased credits, recorded in `credit_ledger` under `owner_goodwill`, confirmed before submission and sent to the owner alert log.

This design avoids direct database editing and keeps individual customer adjustments separate from public pricing and starter-credit rules.

## Deployment security

- The server exposes only the four public browser assets used by the page; source files, deployment notes and local text files are not served.
- The deployment ZIP deliberately excludes `PRIVATE-50-INVITATION-CODES.txt`. Keep active codes only in Render's private `EARLY_ACCESS_CODES` environment variable.
- The saved website switch is authoritative. `EARLY_ACCESS_ENABLED` is used only as the fallback before an owner has saved a choice.
