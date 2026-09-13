# V100 — Inactive Stripe Product Repair

The production log identified the exact Stripe rejection: the Product attached to the existing custom subscription was inactive.

- Retrieves and checks the subscription's Stripe Product before creating the replacement Price.
- Reactivates an archived Product before changing the monthly amount.
- Creates one new active `MixoLabs Custom Monthly` Product if the old Product was deleted or cannot be reactivated.
- Uses product-aware idempotency so an earlier failed £10 Price cannot be reused under the wrong inactive Product.
- Retains the existing subscription, next-renewal change, credit calculation, and no-surprise-charge behaviour.
