# MixoLabs V30 — missed-refund recovery

The Stripe webhook is already active and listening to six events. Do not create another destination, change its URL, reveal its signing secret or alter its selected events.

## Upload and deploy V30

1. Download and extract the V30 ZIP.
2. Open the same GitHub repository currently connected to the MixoLabs Render service.
3. Open the repository's main file list. This is the page containing `server.js`, `index.html` and `package.json`.
4. Select **Add file**, then **Upload files**.
5. Open the extracted `MixoLabs-V30-production` folder on your computer.
6. Select all files and folders inside `MixoLabs-V30-production`. Upload those contents, not the outer folder itself.
7. Allow GitHub to replace files with the same names.
8. In GitHub's commit box, enter `Deploy V30 missed refund recovery`.
9. Select **Commit changes**.
10. Open Render and select the `stylemaster-ai-pro` web service.
11. Open **Events** or **Deploys**.
12. Wait until the deployment triggered by the GitHub commit says **Deploy succeeded** or **Live**. Do not test while it still says building or deploying.

## Correct the historical 29-credit balance

1. Open `https://mixolabs.art`.
2. Press **Ctrl + Shift + R** once to load V30 rather than a cached copy.
3. Log in to the same MixoLabs account that bought the £1.99 pack and currently shows 29 credits.
4. Click the account/credits control in the top navigation.
5. Open **Plans & Credits**.
6. Wait several seconds. Opening this window makes MixoLabs securely check refunds belonging only to that signed-in account.
7. The credit display should change from **29 available** to **0 available**.
8. Close Plans & Credits and confirm the top navigation also shows **0 credits**. Refresh once if the top navigation has not repainted yet.

This recovery check does not issue a refund, charge a card or reveal payment details. It only reconciles completed Stripe refunds against MixoLabs credit-pack records. Repeating the check cannot remove the same credits twice.
