const fs=require('fs'),path=require('path'),vm=require('vm');
const html=fs.readFileSync(path.join(__dirname,'..','index.html'),'utf8');
const checks=[
 [html.includes('mixo-single-right-scrollbar-v96-style'),'V96 single-scrollbar correction is installed'],
 [html.includes('.mixo-settings{max-height:none!important;overflow:visible!important'),'left settings column expands to full height'],
 [html.includes('.mixo-settings::-webkit-scrollbar{display:none!important'),'left scrollbar is hidden'],
 [html.includes('.mixo-studio{overflow-y:scroll!important'),'far-right workspace scrollbar remains enabled'],
 [html.includes('return; // V96: the settings column now follows the single main scrollbar.'),'settings-only wheel interception is disabled'],
];
for(const [ok,name] of checks){if(!ok)throw Error(`FAILED: ${name}`);console.log(`PASS: ${name}`)}
let parsed=0;for(const match of html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)){const source=match[1];if(!source.trim()||/application\/ld\+json/.test(match[0]))continue;new vm.Script(source,{filename:`inline-${++parsed}.js`})}console.log(`PASS: ${parsed} inline scripts parse`);
