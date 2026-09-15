# MixoLabs V121 deployment

1. Back up the currently deployed project and database.
2. Upload this V121 project to the same hosting service or repository used by the live MixoLabs site.
3. Keep the existing environment variables, especially `DATABASE_URL`, `SESSION_SECRET`, `APP_ORIGIN`, Gemini, Stripe and R2 values.
4. Ensure `MODERATOR_EMAILS` contains the exact email used for the MixoLabs owner account.
5. Deploy. Startup creates the new `platform_settings` table automatically and preserves existing users, credits and purchases.
6. Open `/api/health` and confirm it returns `ok: true`.
7. Log in as the owner, open **Settings → Owner Pricing Controls**, enter the base price, one-time credits and monthly bonus, then press **Save Pricing**.
8. Open Plans & Credits and confirm the preview. For £1.99, 30 base credits and a 20% bonus, it must show 30 one-time and 36 monthly.
9. Before taking live payments, use Stripe test mode to complete one one-time checkout and one subscription checkout and confirm the credited amounts.
10. Test these prompts:
   - `Front and back view of the same funny caricature cast-resin dragon and knight fighting, identical characters, armour, weapons, pose, colours and display base in both views.`
   - `Hyperrealistic candid photograph of a fantasy fairy walking through a wet woodland at sunrise, as if captured by an everyday full-frame camera.`

Pricing is calculated again on the server during checkout. A customer cannot alter the credit amount through browser controls.
