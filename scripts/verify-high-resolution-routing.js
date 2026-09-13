"use strict";
const fs=require("fs"),path=require("path"),source=fs.readFileSync(path.join(__dirname,"..","server.js"),"utf8");
const checks=[
 [source.includes('const HIGH_RES_IMAGE_MODEL="gemini-3.1-flash-image"'),"full image model configured for high resolution"],
 [source.includes('size==="2K"||size==="4K"?HIGH_RES_IMAGE_MODEL:GEMINI_IMAGE_MODEL'),"2K and 4K route to full model"],
 [source.includes('model:generationModel,moderated:true'),"credit ledger records routed model"],
 [source.includes('encodeURIComponent(generationModel)'),"provider call uses routed model"],
 [source.includes('model:generationModel,stored:'),"completion log records routed model"],
 [source.includes('const COSTS={"1K":1,"2K":2,"4K":3}'),"existing credit costs retained"],
 [source.includes('Your credits were returned.'),"provider errors remain refundable"]
];
for(const [ok,label] of checks){if(!ok)throw Error(`FAIL ${label}`);console.log(`PASS ${label}`)}
console.log("\nHigh-resolution routing checks passed.");
