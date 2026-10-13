# V167 — Friendly creative studio

- Wider responsive workspace, full-screen focus mode, background shortcut and narrated help.
- Question-mark help on generator controls, including dynamically created video settings.
- Video loading feedback inside Your Creation, with a spinner, accessible status and duplicate-request protection.
- Bracketed voice directions in either dialogue field become a performance script. Bracketed text is removed from the spoken dialogue on the server as well.
- Completed clips remain available in a session sequence. Extend/edit next scene uses the owned previous clip's final frame as the next reference; describe the next scene and review normal generation credits.
- Download clips separately or select 2–10 clips to join in displayed order into one MP4. Joining uses the existing FFmpeg export implementation, without extra generation charges. This is a sequential join, not a crossfade.
- Server enforces ownership, completed status, consistent aspect ratios and a 250 MB sequence limit.

## Verification and deployment

JavaScript syntax checks and the existing V165 verification pass. Live provider generation, microphone narration and browser interaction were not exercised here. Deploy the entire updated folder to the existing Node host; retain your environment settings. No website was deployed from this task.

Sequences are kept in the current page session; download before reloading. Extension is final-frame guided generation, so AI motion and audio continuity can vary. Editing means describing the next scene; it does not rewrite an existing clip. Combined MP4 export requires the host's FFmpeg and configured object storage. Test two paid clips, extension, individual downloads and combined export with your configured service before public release.
