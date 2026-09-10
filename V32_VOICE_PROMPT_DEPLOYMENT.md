# MixoLabs V32 — voice prompt deployment and test

## Deploy

1. Extract the V32 ZIP.
2. Open the GitHub repository connected to the MixoLabs Render service.
3. Use **Add file**, then **Upload files**.
4. Upload everything inside the extracted `MixoLabs-V32-production` folder to the repository root.
5. Allow GitHub to replace existing files.
6. Enter `Deploy V32 voice prompt dictation` as the commit message.
7. Commit the changes.
8. Open the `stylemaster-ai-pro` service in Render and wait for **Deploy succeeded**.

## Test in Chrome

1. Open `https://mixolabs.art` and press **Ctrl + Shift + R**.
2. Locate **Prompt / Idea** in Generator Settings.
3. Select **Dictate**.
4. When Chrome asks for microphone permission, select **Allow while visiting the site** or **Allow**.
5. Speak a short image description.
6. Confirm the spoken words appear in the prompt box while you speak.
7. Select **Stop**.
8. Correct any words that were misheard.
9. Do not press Generate during this test unless you deliberately want to spend credits.

The browser or device speech-recognition service may process audio to produce the transcript. MixoLabs does not intentionally store the original voice recording through this feature.
