# V114 Free 8K Enhancer

- Adds explicit 2K, 4K, and 8K enhancement targets.
- Keeps enhancement local, with no extra Gemini request or MixoLabs credit.
- Uses neural detail passes before final resolution-aware rendering.
- Uses smaller patches for 8K processing to reduce memory pressure.
- Builds large output in 512-pixel strips and yields between strips so the interface can repaint.
- Preserves the fixed comparison window, independent zoom, drag-to-pan, and downloads.
- Requires confirmation for the heavier 4K and 8K operations.
- Clearly explains that upscaling improves presentation and clarity but cannot reproduce genuine source detail that never existed.
