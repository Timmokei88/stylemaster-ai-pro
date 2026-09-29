# V137 — Customer onboarding and Clear-to-top

## Customer-facing changes

- A five-stage **Quick Start — about 60 seconds** is now the first tutorial choice.
- The complete narrated platform tutorial remains available separately.
- Quality guidance now consistently explains **1K generation for one credit** and **free 2K enhancement**.
- A short-prompt example appears beneath the main prompt box.
- Advanced Options is explicitly marked as optional.
- The top-right call to action now says **View Plans & Credit Packs**.
- The Advanced Options generation control is visually secondary and labelled **Generate with these settings**.

## Clear-button behaviour

Selecting **Clear** now:

1. empties the prompt;
2. dispatches the normal input event so the responsive textarea recalculates;
3. returns the page immediately to the top;
4. restores keyboard focus to the prompt without causing a second scroll movement.

No generation, image, Gallery item, Favourite or credit is removed.
