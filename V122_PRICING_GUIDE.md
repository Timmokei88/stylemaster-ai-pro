# V122 owner pricing

1. Log in with the owner email configured in `MODERATOR_EMAILS`.
2. Open **Settings → Owner Pricing Controls**.
3. In **Credits for £1.99**, enter the one-time credit amount, such as `30`.
4. Press Enter or **Save & Update All Offers**.
5. Click **One-time pack** to confirm: `£1.99 one-time pack = 30 credits`.
6. Click **Monthly +20%** to confirm: `£1.99 monthly = 36 credits each month`.
7. Open **View Plans & Credits**. Both the typed amount and slider now calculate from that same rate.

The server—not the browser—calculates the final checkout allowance. Existing active Stripe subscriptions retain the allowance recorded in their subscription until the customer changes plan; changing past customer contracts silently is intentionally avoided.
