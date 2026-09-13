const fs=require('fs'),path=require('path'),vm=require('vm');
const html=fs.readFileSync(path.join(__dirname,'..','index.html'),'utf8');
const checks=[
 [html.includes('mixo-controlled-scroll-v85'), 'V85 controlled-scroll system'],
 [html.includes("addEventListener('wheel'"), 'actual wheel input is controlled'],
 [html.includes('{passive:false}'), 'wheel control can slow native movement'],
 [html.includes('event.preventDefault()'), 'native jump is replaced'],
 [html.includes('raw*.22'), 'wheel distance is reduced to 22 percent'],
 [html.includes('Math.min(42'), 'large wheel jumps are capped'],
 [html.includes('difference*.11'), 'movement is smoothly animated'],
 [html.includes("element===studio&&event.target.closest('.mixo-settings')"), 'nested settings wheel is not handled twice'],
 [html.includes("matchMedia('(min-width:981px)')"), 'controlled scrolling is desktop-only'],
 [html.includes("variations.value='1'"), 'one image is the initial default'],
 [html.includes("dispatchEvent(new Event('change'"), 'credit preview refreshes immediately'],
 [html.includes('<option value="2">2 Images</option>')&&html.includes('<option value="6" selected>6 Images</option>'), 'all manual variation choices remain available'],
];
for(const [ok,name] of checks){if(!ok)throw Error(`FAILED: ${name}`);console.log(`PASS: ${name}`)}
let parsed=0;for(const match of html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)){const source=match[1];if(!source.trim()||/application\/ld\+json/.test(match[0]))continue;new vm.Script(source,{filename:`inline-${++parsed}.js`});}console.log(`PASS: ${parsed} inline scripts parse`);
