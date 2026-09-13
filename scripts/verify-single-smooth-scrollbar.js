const fs=require('fs'),path=require('path'),vm=require('vm');
const html=fs.readFileSync(path.join(__dirname,'..','index.html'),'utf8');
const checks=[
 [html.includes('mixo-single-scrollbar-v81-style'), 'V81 single-scrollbar styles are present'],
 [html.includes('.mixo-studio{overflow-y:auto!important'), 'main workspace remains scrollable'],
 [html.includes('scrollbar-width:none!important'), 'main scrollbar is hidden in Firefox'],
 [html.includes('.mixo-studio::-webkit-scrollbar{display:none!important'), 'main scrollbar is hidden in Chromium and Safari'],
 [html.includes('.mixo-settings::-webkit-scrollbar'), 'left settings scrollbar remains styled and visible'],
 [html.includes('connect(studio,settings);connect(settings,studio)'), 'scrolling either panel drives the other'],
 [html.includes('difference*.10'), 'movement uses gentler eased gliding'],
 [html.includes('requestAnimationFrame(step)'), 'gliding runs at display refresh rate'],
 [html.includes("matchMedia('(prefers-reduced-motion: reduce)')"), 'reduced-motion users get immediate movement'],
 [!html.includes("addEventListener('wheel'"), 'native wheel and trackpad scrolling are not intercepted'],
];
for(const [ok,name] of checks){if(!ok)throw Error(`FAILED: ${name}`);console.log(`PASS: ${name}`)}
let parsed=0;for(const match of html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)){const source=match[1];if(!source.trim()||/application\/ld\+json/.test(match[0]))continue;new vm.Script(source,{filename:`inline-${++parsed}.js`});}
console.log(`PASS: ${parsed} inline scripts parse`);
