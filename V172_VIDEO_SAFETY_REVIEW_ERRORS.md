# V172 — Video safety-review reliability

The supplied screenshot says: “Automated safety review was inconclusive. No credits were used.” This is the pre-generation safety screen, distinct from the post-generation accuracy review. The screenshot does not identify the provider's exact reason or prove a content violation.

Changes:
- Existing benign family-reference policy also applies to video requests with a reference image. Explicit clarification covers fully clothed children in fictional superhero costumes and non-graphic fantasy racing/flying, preserving age and faces.
- Structured safety-response token budget increased from 900 to 1800 to reduce truncation risk.
- Video safety calls have a 15-second timeout. One additional safety review is permitted only for unreadable or generically inconclusive results, before debit or video generation. No paid generation retry occurs.
- Persistent uncertainty or service failure remains stopped, with a clear checker-failure message. Explicit safety blocks remain blocked. No new local allow override or disabled safety screening.

Checks: syntax, existing project verification, mocked re-review success, repeated uncertainty, explicit-block preservation and reference-policy application. No provider calls or live deployment. These changes improve failure handling but cannot guarantee an allow decision. The original source photograph was not provided in this conversation, so its content was not assessed here.
