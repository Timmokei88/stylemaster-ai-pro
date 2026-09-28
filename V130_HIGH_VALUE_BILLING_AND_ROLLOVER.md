# V130 — Higher-value billing and monthly rollover

## Purchase range

- Custom pay-as-you-go packs and custom monthly plans now accept £1.99–£250.
- The slider remains available and the exact amount can still be typed.
- Quick higher-value choices are provided at £25, £50, £100 and £250.
- Credit quantities continue to derive from the owner-controlled £1.99 base allowance. Monthly plans retain the configured 20% bonus.

## Credit validity

- Pay-as-you-go credits never expire.
- Unused monthly credits become rollover credits at renewal and receive one additional 28-day window.
- Rollover credits are consumed before newer monthly credits.
- Any rollover credits still unused at expiry are removed and recorded in the credit ledger as `subscription_credit_expiry`.
- The Plans & Credits balance displays both the rollover quantity and its expiry date.

## Example

A customer receives 200 monthly credits and uses 160. At renewal, the remaining 40 become rollover credits for 28 additional days and the new 200 are added, giving 240. Generations spend the older 40 first. Any portion of those 40 still unused after the rollover deadline expires; the newer 200 remain governed by their own billing period.
