# V153 — video aspect ratios and exact optional dialogue

- Adds 16:9, 9:16, 1:1, 4:5, 5:4, 3:2, 2:3 and 21:9 video framing controls.
- Adds a dedicated optional spoken-dialogue box with a 300-character maximum.
- Exact dialogue is separated from movement and sound direction, moderated on the server and included in the saved job record.
- Empty dialogue explicitly requests a speech-free result with no narration, subtitles or implied talking.
- Spoken results request natural pronunciation, one performance only and synchronised mouth movement, breathing, expression and pauses.
- The chosen format asks the model to recompose or extend the environment without stretching or cutting through the primary subject.
- Existing video pricing, owner switch, private storage, idempotency, no-paid-retry rule and automatic failure refund remain unchanged.

Generative video providers can vary. The software sends strict instructions but must not advertise guaranteed perfect lip-sync or perfect verbatim speech until the delivered file has been checked.
