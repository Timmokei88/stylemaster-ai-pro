const fs=require('fs'),path=require('path'),vm=require('vm');
const html=fs.readFileSync(path.join(__dirname,'..','index.html'),'utf8');
const checks=[
 [html.includes('id="technicalObjectTypeSelect"'),'object-type selector'],
 [html.includes('Boat / marine craft'),'boat measurement option'],
 [html.includes('Automatic — estimate from description'),'explicit automatic measurement option'],
 [html.includes('Manual — use only my measurements'),'manual measurements retained'],
 [html.includes('Proportions only — no numbers'),'non-numerical option'],
 [html.includes('function detectTechnicalObjectType'),'automatic object detection'],
 [html.includes('/speedboat|boat|yacht|ship|marine|watercraft|hull/'),'speedboat and marine detection'],
 [html.includes('overall length, beam, overall height, hull depth, estimated draft'),'marine dimension profile'],
 [html.includes('generate a complete, mutually consistent measurement set'),'automatic measurement prompt'],
 [html.includes('Every generated number must be visibly prefixed or suffixed with'),'estimate labels required'],
 [html.includes('User constraints that the estimates must follow'),'optional constraints retained in automatic mode'],
 [html.includes('updateTechnicalMeasurementStatus'),'live explanation of selected measurement mode'],
 [html.includes('not verified specifications'),'visible accuracy disclaimer'],
];
for(const [ok,name] of checks){if(!ok)throw Error(`FAILED: ${name}`);console.log(`PASS: ${name}`)}
let parsed=0;for(const match of html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)){const source=match[1];if(!source.trim()||/application\/ld\+json/.test(match[0]))continue;new vm.Script(source,{filename:`inline-${++parsed}.js`});}
console.log(`PASS: ${parsed} inline scripts parse`);

