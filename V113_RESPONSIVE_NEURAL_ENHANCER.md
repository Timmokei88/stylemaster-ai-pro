# V113 Responsive Neural Enhancer

- Opens the enhancer without automatically starting costly neural work.
- Keeps zoom, split comparison, drag-to-pan, and option controls available before processing.
- Starts enhancement only when **Run Neural Enhancement** is clicked.
- Prevents duplicate enhancement jobs and accidental reruns after option changes.
- Uses smaller neural patches and yields to the browser between stages.
- Requires confirmation before the heavier 4× two-pass operation.
- Removes full-frame pixel loops from the active output and fallback paths to avoid UI lockups.
- Preserves free on-device 2×/4× enhancement, downloads, fixed comparison viewport, and the 1K generation tier.
