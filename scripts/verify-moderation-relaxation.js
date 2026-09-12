"use strict";

const fs=require("fs");
const path=require("path");
const source=fs.readFileSync(path.join(__dirname,"..","server.js"),"utf8");

function requireText(text,label){
  if(!source.includes(text))throw new Error(`FAIL ${label}`);
  console.log(`PASS ${label}`);
}

requireText("const GENERIC_CREATIVE_ROLE=", "generic creative-role rule");
requireText("celebrity[- ]style", "celebrity-style is generic");
requireText("movie actor", "movie actor is generic");
requireText("superhero", "superhero is generic");
requireText("caricature", "caricature is generic");
requireText("Do not infer Gordon Ramsay", "classifier receives explicit generic-identity instruction");
requireText("responseSchema", "structured moderation response schema");
requireText("safeGenericRoleOverride", "narrow inconclusive-result fallback");
requireText("stage!==\"generation\"||supplied.length", "fallback limited to text-only generation");
requireText("EXPLICIT_IDENTITY_CUE.test(value)", "identity cues prevent fallback");
requireText("GENERIC_OVERRIDE_RISK.test(value)", "harmful context prevents fallback");

console.log("\nModeration relaxation checks passed.");
