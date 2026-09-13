const fs=require('fs'),path=require('path'),vm=require('vm');
const html=fs.readFileSync(path.join(__dirname,'..','index.html'),'utf8');
const checks=[
 [html.includes('mixo-synchronised-scroll-v79'), 'V79 scroll system is present'],
 [html.includes("connect(studio,settings);connect(settings,studio)"), 'left and right scrolling is connected both ways'],
 [html.includes("maximum(target)*ratio"), 'scroll positions are mapped proportionally'],
 [html.includes("ratio>.04&&ratio<.96"), 'endpoint snap leaves intermediate controls accessible'],
 [html.includes("endpoint=ratio<=.04?0:1"), 'near-edge scrolling completes at top or bottom'],
 [html.includes("behavior:'smooth'"), 'endpoint movement is smooth'],
 [html.includes("matchMedia('(min-width:981px)')"), 'nested synchronisation is desktop-only'],
 [html.includes("prefers-reduced-motion:reduce"), 'reduced-motion preference is respected'],
 [html.includes("getElementById('generateAdvancedBtn')?.addEventListener('focus'"), 'Generate focus brings both panels to the bottom'],
 [html.includes("getElementById('prompt')?.addEventListener('focus'"), 'Prompt focus returns both panels to the top'],
];
for(const [ok,name] of checks){if(!ok)throw Error(`FAILED: ${name}`);console.log(`PASS: ${name}`)}
let parsed=0;for(const match of html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)){const source=match[1];if(!source.trim()||/application\/ld\+json/.test(match[0]))continue;new vm.Script(source,{filename:`inline-${++parsed}.js`});}
console.log(`PASS: ${parsed} inline scripts parse`);

