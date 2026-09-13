const fs=require('fs'),path=require('path'),vm=require('vm');
const html=fs.readFileSync(path.join(__dirname,'..','index.html'),'utf8');
const checks=[
 [html.includes('mixo-maker-tutorial-v82'), 'maker tutorial system'],
 [html.includes('Resin 3D printing'), 'resin workflow'],
 [html.includes('Filament 3D printing'), 'filament workflow'],
 [html.includes('Digital sculpting'), 'digital sculpting workflow'],
 [html.includes('Hand clay sculpting'), 'clay sculpting workflow'],
 [html.includes('costs no generation credits'), 'zero-credit written guide disclosure'],
 [html.includes("fetch('/api/narration'"), 'existing natural narrator integration'],
 [html.includes('manufacturer’s profile'), 'machine-specific verification'],
 [html.includes('cannot be printed directly'), 'image versus printable mesh distinction'],
 [html.includes('small test'), 'calibration test guidance'],
 [html.includes('functional or safety-critical'), 'professional verification boundary'],
];
for(const [ok,name] of checks){if(!ok)throw Error(`FAILED: ${name}`);console.log(`PASS: ${name}`)}
let parsed=0;for(const match of html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)){const source=match[1];if(!source.trim()||/application\/ld\+json/.test(match[0]))continue;new vm.Script(source,{filename:`inline-${++parsed}.js`});}
console.log(`PASS: ${parsed} inline scripts parse`);
