"use strict";
const fs=require("fs"),path=require("path"),root=path.resolve(__dirname,".."),server=fs.readFileSync(path.join(root,"server.js"),"utf8"),html=fs.readFileSync(path.join(root,"index.html"),"utf8");
const checks=[
 ["Toy Story recognised as protected wording",server.includes("pixar|toy story|star wars")],
 ["benign family-photo prompts are normalised",server.includes("function providerPayload(body,text)")],
 ["provider receives the compatible payload",server.includes("JSON.stringify(providerPayload(req.body,text))")],
 ["identity preservation remains requested",server.includes("preserve their recognisable facial features")],
 ["unsafe reference edits are never normalised",server.includes("!PHOTO_EDIT_RISK.test(text)")],
 ["failed provider deliveries remain refunded",server.includes("await refund(req.session.userId,cost,key,charge.metadata)")],
 ["old synchronised scroller is disabled",html.includes("V102: obsolete synchronised animation disabled")],
 ["old wheel interceptor is disabled",html.includes("V102: obsolete wheel interception caused slow and jumping")],
 ["single right native scrollbar remains",html.includes("mixo-single-right-scrollbar-v96-style")&&html.includes("mixo-complete-scroll-and-results-v95-style")]
];
let failed=0;for(const [name,ok] of checks){console.log(`${ok?"PASS":"FAIL"} ${name}`);if(!ok)failed++}if(failed)process.exit(1);console.log("\nV102 scroll and provider-compatibility checks passed.");
