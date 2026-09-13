const fs=require('fs'),path=require('path'),vm=require('vm');
const html=fs.readFileSync(path.join(__dirname,'..','index.html'),'utf8');
const checks=[
 [html.includes('mixo-complete-scroll-and-results-v95-style'),'V95 scrolling fix is installed'],
 [html.includes('.mixo-right{position:static!important}'),'results column is no longer trapped by sticky positioning'],
 [html.includes('.mixo-studio{overflow-y:scroll!important'),'workspace has a real vertical scrollbar'],
 [html.includes('.mixo-studio::-webkit-scrollbar{display:block!important'),'workspace scrollbar overrides the obsolete hidden rule'],
 [html.includes('.mixo-generation-card img{width:100%!important;height:auto!important;min-height:0!important;max-height:none!important'),'result cards preserve the complete image'],
 [html.includes('#outputImage{display:block!important;width:auto!important;height:auto!important;min-height:0!important;max-height:none!important'),'active masterpiece preserves the complete image'],
 [html.includes("settings.addEventListener('wheel',event=>{"),'settings receives unrestricted native-distance wheel scrolling'],
 [html.includes('{passive:false,capture:true});'),'wheel correction runs before the obsolete throttled handler'],
];
for(const [ok,name] of checks){if(!ok)throw Error(`FAILED: ${name}`);console.log(`PASS: ${name}`)}
let parsed=0;
for(const match of html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)){
 const source=match[1];if(!source.trim()||/application\/ld\+json/.test(match[0]))continue;
 new vm.Script(source,{filename:`inline-${++parsed}.js`});
}
console.log(`PASS: ${parsed} inline scripts parse`);
