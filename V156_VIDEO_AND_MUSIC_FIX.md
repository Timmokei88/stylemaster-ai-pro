# V156 Video and Music Fix

- Video requests now send the selected duration to the provider.
- Queued and in-progress provider interactions are polled until completion instead of being treated as immediate failures.
- Provider failure states continue through the existing automatic credit-refund path.
- A safe fallback prevents a cached voice-control script from blocking the video request.
- The Music Studio button starts hidden and is shown only after the server confirms that owner music generation is enabled.
- Disabling music closes an open Music Studio and hides its dashboard button.
