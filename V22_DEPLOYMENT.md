# MixoLabs V22 deployment

This release adds production legal/support wording, a qualified refund policy, a required digital-supply acknowledgement before Stripe Checkout, a draggable/resizable narrated tutorial, specific narration for every help icon, exact typed purchase amounts and Lite-adjusted credit estimates.

Add these public business details to Render Environment before deployment:

- `PUBLIC_LEGAL_NAME`: the sole trader's full legal name followed by `trading as MixoLabs`
- `PUBLIC_LEGAL_ADDRESS`: the geographic business/service address that will be published in the legal pages
- `PUBLIC_SUPPORT_EMAIL`: the working customer-support and privacy email address

These values are public by design and appear in Terms, Privacy and Support. Do not use secrets in them.

Lite pricing is calculated conservatively at a default internal cost allowance of £0.04 per credit. The £1.99 one-time option therefore shows 30 estimated credits and the monthly option 32. The amount entered by a customer can include pence (for example £2.49), and the server recalculates the allocation at checkout. Review the allowance against actual Google invoices periodically before changing the optional `CREDIT_COST_GBP` environment value.

The refund wording does not remove statutory rights. Used credits for successfully delivered, on-demand generations are described as non-refundable for change of mind or subjective dissatisfaction. Detected failed generations restore credits. Obtain advice from a qualified UK solicitor before accepting public payments, especially if selling outside the UK.
