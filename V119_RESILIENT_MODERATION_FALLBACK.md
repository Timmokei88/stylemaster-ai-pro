# V119 — Resilient private-generation moderation

The message “Safety screening is temporarily unavailable” was an availability
failure in the separate moderation-model request, not a judgement that the
customer's prompt was unsafe.

V119 changes private image generation and reference-image uploads so that an
external moderation outage no longer rejects a request that has passed the
local prohibited-content rules. The local rules continue to block explicit
sexual content, sexual content involving minors, abusive depictions of
identifiable real people, serious criminal facilitation, terrorist recruitment
or propaganda, and targeted bullying or humiliation.

The fallback does not apply to public/community publication paths. Those retain
the stronger external review requirement because content is being shown to
other people.

The image provider still applies its own independent safety policy. MixoLabs
cannot disable or override that provider-controlled layer. Failed provider
generations continue to return credits automatically.
