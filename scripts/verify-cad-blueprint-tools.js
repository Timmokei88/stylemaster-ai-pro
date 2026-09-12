const fs=require("fs"),path=require("path"),vm=require("vm");
const html=fs.readFileSync(path.join(__dirname,"..","index.html"),"utf8");
const checks=[
 [html.includes('"CAD & Technical Design"'),"CAD and technical category"],
 [html.includes('id="technicalModeSelect"'),"technical output selector"],
 [html.includes('id="technicalDimensions"'),"measurement and assembly input"],
 [html.includes('Use only my measurements'),"strict supplied-measurement mode"],
 [html.includes('Allow conceptual estimates'),"clearly labelled conceptual-estimate mode"],
 [html.includes('function detectTechnicalMode'),"prompt-based technical mode detection"],
 [html.includes('if(/blueprint|schematic|technical drawing/.test(text))'),"blueprint keyword detection"],
 [html.includes('Reproduce these values exactly. Do not alter them or invent any missing measurement'),"no invented dimensions when specifications are supplied"],
 [html.includes('CONCEPT ONLY — NOT FOR FABRICATION'),"conceptual estimate warning"],
 [html.includes('DIMENSIONS REQUIRED — CONCEPT ONLY'),"missing-dimensions warning"],
 [html.includes('Do not claim structural validation, regulatory compliance, seaworthiness'),"engineering safety boundary"],
 [html.includes('Can MixoLabs create CAD models, blueprints or measured assembly drawings?'),"customer FAQ guidance"],
];
for(const [ok,name] of checks){if(!ok)throw Error(`FAILED: ${name}`);console.log(`PASS: ${name}`)}
let parsed=0;for(const match of html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)){const source=match[1];if(!source.trim()||/application\/ld\+json/.test(match[0]))continue;new vm.Script(source,{filename:`inline-${++parsed}.js`});}
console.log(`PASS: ${parsed} inline scripts parse`);

