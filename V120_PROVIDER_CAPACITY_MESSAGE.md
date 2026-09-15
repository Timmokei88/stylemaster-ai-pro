# V120 — Provider spending-cap handling

The Google Gemini project can refuse new generations when its configured
monthly spending cap has been reached. This is an account/billing capacity
condition, not a safety decision and not a problem with the customer's prompt.

V120 recognises that provider response, returns the customer's generation
credit, records a dedicated `PROVIDER_SPEND_CAP` failure, alerts the owner, and
shows customers a concise MixoLabs service-capacity message instead of exposing
Google's internal project and billing text.

Generation cannot resume until the owner raises the project's spending cap in
Google AI Studio or the relevant billing period resets. Application code cannot
bypass an account-level provider limit.
