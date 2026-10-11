# V158 Live Verification, Credit Display and Music Toggle

The production 10-second video flow was tested against the live MixoLabs account. It completed successfully and returned a downloadable MP4.

V158 fixes the remaining interface defects found during that test:

- credit-change events without a numeric balance can no longer turn the account display into `NaN credits`;
- switching between AI Image and AI Video can no longer make a disabled Music Studio control reappear;
- disabling Music Studio also hides the optional dashboard music player;
- changing the owner Music Studio checkbox saves immediately, while the Save button remains available.

The server still enforces the music setting, so a hidden client control cannot bypass an owner-disabled feature.
