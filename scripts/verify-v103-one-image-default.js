"use strict";
const fs=require("fs"),path=require("path"),html=fs.readFileSync(path.join(__dirname,"..","index.html"),"utf8");
const checks=[
 ["one is selected in source",html.includes('<option value="1" selected>1 Image</option>')],
 ["six is not selected in source",!html.includes('<option value="6" selected>6 Images</option>')],
 ["credit preview starts at one",html.includes('id="creditTotal">1K Standard • 1 image = 1 credit')],
 ["main button starts at one",html.includes('id="generateBtn" type="button">✨ &nbsp; Generate 1 Image • Cost: 1 Credit')],
 ["advanced button starts at one",html.includes('id="generateAdvancedBtn" type="button">✨ &nbsp; Generate 1 Image • Cost: 1 Credit')],
 ["browser restoration is disabled",html.includes('id="variationCountSelect" autocomplete="off"')],
 ["startup explicitly applies one",html.includes("const applyDefault=()=>{variations.value='1'")],
 ["back-forward cache reapplies one",html.includes("if(event.persisted)applyDefault()")]
];
let failed=0;for(const [name,ok] of checks){console.log(`${ok?"PASS":"FAIL"} ${name}`);if(!ok)failed++}if(failed)process.exit(1);console.log("\nV103 one-image-default checks passed.");
