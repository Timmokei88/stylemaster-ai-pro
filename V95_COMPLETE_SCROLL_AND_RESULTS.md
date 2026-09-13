# V95 — Complete Scrolling and Full Image Results

- Restored the visible desktop workspace scrollbar so the right-hand creation area can be reached from top to bottom.
- Removed sticky positioning from the creation column, preventing large results and the Generate button from becoming trapped below the viewport.
- Removed generated-image height caps so result cards and the Active Masterpiece show the complete image at its natural aspect ratio.
- Restored full-distance native wheel scrolling in the settings panel so its bottom Generate button is always reachable.
- Preserved the responsive single-column mobile layout.

Verification: `node scripts/verify-complete-scroll-and-results.js`
