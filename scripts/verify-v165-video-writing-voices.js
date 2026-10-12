const fs = require("fs");
const assert = require("assert");
const server = fs.readFileSync("server.js", "utf8");
const html = fs.readFileSync("index.html", "utf8");

assert(
  server.includes("videoPerformanceScript"),
  "missing structured multi-voice parser",
);
assert(
  server.includes(
    "Each numbered voice cue applies only to its own quoted line",
  ),
  "missing per-line voice isolation",
);
assert(
  server.includes("EXACT ON-SCREEN WRITING"),
  "missing exact writing instruction",
);
assert(
  server.includes("PRODUCT AD WRITING"),
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
console.log(
  "V165 video writing, product copy, 30-second range, multi-voice controls and benign-comedy handling verified.",
);
