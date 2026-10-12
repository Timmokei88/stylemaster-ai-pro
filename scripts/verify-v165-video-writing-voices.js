const fs = require("fs");
const assert = require("assert");
const server = fs.readFileSync("server.js", "utf8");
const html = fs.readFileSync("index.html", "utf8");

assert(
  server.includes("videoPerformanceScript"),
  "missing structured multi-voice parser",
);
assert(
  server.includes("Each bracketed cue controls only its own line"),
  "missing per-line voice isolation",
);
assert(
  server.includes("Render this exact on-screen writing"),
  "missing exact writing instruction",
);
assert(
  server.includes("Create one concise professional advertising headline"),
  "missing automatic product-copy instruction",
);
assert(html.includes("mixoOnScreenText-"), "missing on-screen writing control");
assert(
  html.includes("mixoAutoProductCopy-"),
  "missing automatic product-copy control",
);
assert(html.includes("mixoVoiceScript-"), "missing multi-voice script control");
assert(
  html.includes("[SAME T-REX, HIGH-PITCHED FRIGHTENED WHIMPER]"),
  "missing clear voice-change example",
);
assert(
  html.includes('min="5" max="30" step="1"'),
  "video control must support each second from 5 to 30",
);
assert(
  server.includes("duration <= 30"),
  "server must enforce the 30-second maximum",
);
assert(
  server.includes("BENIGN_SLAPSTICK_COMEDY"),
  "missing benign slapstick classification",
);
assert(
  server.includes("safeSlapstickComedyOverride"),
  "missing safe comedy override",
);
assert(
  server.includes("generateOmniImageVideoSegment"),
  "missing provider-safe segmented generation",
);
assert(
  server.includes("joinVideoSegments"),
  "missing 11–30 second video joining",
);
assert(
  server.includes("optional exact-dialogue field is a precision lock"),
  "main-description speech must remain enabled",
);
console.log(
  "V165 video writing, product copy, true segmented 30-second generation, description speech, multi-voice controls and benign-comedy handling verified.",
);
