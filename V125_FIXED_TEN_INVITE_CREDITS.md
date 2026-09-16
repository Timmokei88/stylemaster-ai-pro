# V125 — fixed ten-credit invitation trials

Every account created with a valid, unused Early Access invitation receives exactly ten purchased-bucket trial credits. The allowance is enforced by the server and can no longer be reduced to zero by a missing, stale or incorrect deployment environment variable.

Deployment runs an idempotent repair for previously invited accounts whose credit ledger shows fewer than ten total starter credits. It grants only the missing difference. Accounts that already received ten starter credits receive nothing extra, including accounts that legitimately spent their original ten.

Keep `EARLY_ACCESS_ENABLED=true` and retain the current comma-separated `EARLY_ACCESS_CODES` value. `INVITE_TRIAL_CREDITS` is no longer required and may be removed from the hosting environment.
