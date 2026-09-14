# MixoLabs V116 — Fast Progressive Enhancer

- Replaced Base64 JSON transfer with direct binary multipart upload.
- Replaced very large, slow lossless preview files with quality-96 4:4:4 JPEG output and 300-DPI metadata.
- 2K, 4K and 8K now apply progressively stronger detail, local contrast and colour finishing.
- Added a visible elapsed-time message while enhancement runs.
- Removed browser-side 8K print recompression; both downloads use the already processed server result.
- Enhancement still uses no Gemini image request and deducts no MixoLabs credits.

Local reference benchmarks using the production processing stages:

- Wide source: 2K 0.26s, 4K 1.02s, 8K 3.32s.
- Difficult square source: 2K 1.21s, 4K 4.53s, 8K 15.10s before network transfer.

Actual production times depend on hosting CPU load, image dimensions and connection speed. The code does not promise a fixed completion time.
