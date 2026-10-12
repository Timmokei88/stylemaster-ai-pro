# V161 video duration and cost

- Customer-selectable duration is now 5–15 seconds.
- The provider's single-generation ceiling remains 10 seconds.
- An 11–15 second request is produced as a 10-second opening plus a 1–5 second continuity segment.
- The last frame of part one becomes the identity and composition reference for part two.
- FFmpeg joins the two MP4 segments into one downloadable video.
- The completed joined video must pass the V160 whole-video quality gate before delivery.
- One customer charge is made at the displayed price. If either generation, joining or final QA fails, the complete MixoLabs credit charge is refunded.
- Owner pricing remains configurable per started five seconds. At the default 15 credits per five seconds: 5s = 15, 10s = 30 and 15s = 45 credits.
