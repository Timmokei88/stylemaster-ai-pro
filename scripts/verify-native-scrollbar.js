const fs=require('fs'),path=require('path'),vm=require('vm');
const html=fs.readFileSync(path.join(__dirname,'..','index.html'),'utf8');
const checks=[
 [html.includes('mixo-native-scrollbar-v93-style'), 'V93 native scrollbar replacement is installed'],
 [html.includes('.mixo-fine-scroll{display:none!important}'), 'faulty floating custom scrollbar is removed from view'],
 [html.includes('scrollbar-width:auto!important'), 'stable native scrollbar is restored'],
 [html.includes('::-webkit-scrollbar{display:block!important'), 'Chrome scrollbar is explicitly restored'],
 [html.includes('scrollbar-button:single-button:vertical:decrement'), 'permanent native up button is styled'],
 [html.includes('scrollbar-button:single-button:vertical:increment'), 'permanent native down button is styled'],
 [html.includes("d='M10 4 3 14h14z'"), 'up-arrow icon is embedded'],
 [html.includes("d='m3 6 7 10 7-10z'"), 'down-arrow icon is embedded'],
 [html.indexOf('mixo-native-scrollbar-v93-style')>html.indexOf('mixo-arrow-scroll-v92-style'), 'native replacement overrides all older custom scrollbar CSS'],
];
for(const [ok,name] of checks){if(!ok)throw Error(`FAILED: ${name}`);console.log(`PASS: ${name}`)}
let parsed=0;for(const match of html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)){const source=match[1];if(!source.trim()||/application\/ld\+json/.test(match[0]))continue;new vm.Script(source,{filename:`inline-${++parsed}.js`})}console.log(`PASS: ${parsed} inline scripts parse`);
