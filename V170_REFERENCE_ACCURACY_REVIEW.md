# V170 — Reference analysis and video accuracy review

## Behaviour

Reference-based video requests now receive a visual analysis before the credit debit and paid generation. This describes visible faces and original subject positions, the existing background, explicit requested changes and the required action. Unusable references or unavailable analysis stop before the generation charge.

The resulting plan accompanies the original reference image in the video request. Costume changes must not replace faces or existing scenery. Superhero races are explicitly described as superhuman movement rather than ordinary running. The plan honours explicitly requested location changes while preserving the original environment by default.

After generation and exact-ratio formatting, FFmpeg extracts chronological frames twice per second (up to 60 frames for 30 seconds). A separate visual review compares them to the source and checks observable facial consistency, face verifiability, cast, background and requested action. A result must explicitly pass every relevant check. Failed, missing, unreadable or uncertain review does not pass. Review happens before object storage and completion status.

A rejected or unavailable review invokes the existing credit-return transaction. The failure message and job refund status now reflect whether that transaction actually succeeded. If it fails, the owner is alerted and the customer receives the request ID for support. There is no automatic paid retry.

The analysis is scoped to the request. It creates no face embeddings, identity database or persistent reference-analysis file. Reference images and sampled generated frames are sent to the existing configured Gemini service for these checks. Account charging stays at the displayed video price; extra analysis service usage is an operator cost.

## Validation

- Server/client JavaScript syntax and existing V165 verification pass.
- Accuracy-gate tests reject individual failed or missing checks, uncertainty and empty results.
- Order checks confirm reference analysis precedes charging and final review precedes saving.
- Actual supplied five-second clip successfully produces ten chronological review frames through the new extractor.

No live provider calls, paid generation, database refund transaction or end-to-end browser generation were exercised in this environment. Deploy the complete folder and test against configured services before release.

## Limits

This is an AI visual consistency assessment of sampled frames, not a biometric identity guarantee or exhaustive frame-by-frame certification. It can have false passes and false rejections. Small, obscured, masked or blurred faces may be rejected as unverifiable. Action review uses still frames and does not verify spoken audio. Text-only videos without reference images do not run this reference-comparison gate. The additional review increases latency and provider usage. It cannot reconstruct genuinely unseen parts of the original woods with certainty.

The original source photograph of the children was not supplied in this conversation, so no source-to-video face comparison was performed here. The live website and existing credits were not modified by this task.
