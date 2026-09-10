# MixoLabs V29 deployment and refund setup

## What this version changes

- A Stripe refund removes the corresponding unused one-time-pack credits.
- Used credits do not make the customer's balance negative.
- Credits from a later purchase are not taken to recover credits already used before a refund.
- Partial refunds remove a proportional number of credits.
- Repeated Stripe events cannot deduct credits twice.
- Plans & Credits no longer displays the obsolete test-launch sentence.
- A searchable FAQ is available from Settings and the footer.

## 1. Deploy the code

1. Extract the V29 ZIP on your computer.
2. Open the GitHub repository used by the MixoLabs Render service.
3. Upload the contents of the extracted folder to the repository root, replacing the previous application files when GitHub asks.
4. Commit the upload to the branch that Render deploys.
5. Open Render and select the `stylemaster-ai-pro` web service.
6. Open **Events** or **Deploys** and wait for the new deployment to show **Live** or **Deploy succeeded**.
7. Open `https://mixolabs.art` in a new tab and perform a hard refresh with **Ctrl + Shift + R**.

Do not change or reveal `STRIPE_SECRET_KEY` or `STRIPE_WEBHOOK_SECRET` for this deployment.

## 2. Add the Stripe refund event

1. Sign in to the Stripe Dashboard and make sure **Test mode is off**.
2. Open **Developers**, then **Workbench**, then **Webhooks**.
3. Open the active destination whose endpoint is `https://mixolabs.art/api/stripe/webhook`.
4. Select **Edit destination**.
5. Find the event-selection section and choose the option to edit or select events.
6. Search for `charge.refunded`.
7. Tick **charge.refunded**. Keep the five existing events selected:
   - `checkout.session.completed`
   - `checkout.session.async_payment_succeeded`
   - `invoice.paid`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
8. Save the destination. It should now show that it listens to **6 events**.

Do not create another webhook endpoint and do not replace its signing secret. This is an edit to the existing live destination.

## 3. Apply the already-issued test refund

The £1.99 refund happened before the destination listened for `charge.refunded`, so its event may need to be resent.

1. In Stripe Workbench, open **Events**.
2. Search for `charge.refunded` and open the event belonging to the £1.99 test purchase.
3. Confirm that the event is for the correct customer and £1.99 charge.
4. Use **Resend** or **Send to webhook**, and select `https://mixolabs.art/api/stripe/webhook` if Stripe asks for a destination.
5. Open the delivery attempt and confirm the response is **200 OK**.
6. Return to MixoLabs and press **Ctrl + Shift + R**.
7. The test account should change from **29 credits** to **0 credits**: 29 unused credits are removed and the one credit already spent is not recovered from another purchase.

If Stripe does not offer a resend action, do not issue another refund or make another purchase yet. The new code can instead be verified with a later controlled transaction.

## 4. Final visual checks

1. Open **Plans & Credits** and confirm the billing status says **Live**.
2. Confirm the heading text says secure Stripe Checkout for one-time packs and monthly plans, without the old test-launch sentence.
3. Close billing, scroll to the footer and select **FAQ**.
4. Search for `refund` and confirm the matching questions remain visible.
5. Open **Settings**, then **Help & Support**, and confirm both **Open FAQ** and **Contact Support** work.

## Refund policy behaviour

A customer cannot trigger this credit removal by merely asking for a refund. It runs only after an actual refund is issued in Stripe. Review each request before using Stripe's refund control. Successfully delivered generations are not normally refundable for change of mind, while duplicate charges, undelivered credits, faulty service and mandatory statutory remedies should be investigated.
