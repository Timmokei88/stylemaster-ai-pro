# V133 clean 1K label and free 2K enhancement

- Removes the customer-facing provider/model wording from the 1K selector, credit preview and explanatory copy.
- Displays the generation choice simply as **1K** at one credit per image.
- Keeps the free post-generation enhancer and accurately identifies its output as a 2048-pixel-long-edge JPEG.
- The enhancer uses Lanczos enlargement, controlled sharpening, contrast and colour finishing, plus 300 DPI metadata.
- Enhancement makes no additional Gemini image-generation request and deducts no additional MixoLabs generation credit.
- Upscaling improves pixel dimensions and presentation but cannot reconstruct genuine subject detail absent from the source.
