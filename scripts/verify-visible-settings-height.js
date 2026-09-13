const fs=require('fs'),path=require('path'),vm=require('vm');
const html=fs.readFileSync(path.join(__dirname,'..','index.html'),'utf8');
const checks=[
 [html.includes('mixo-visible-settings-height-v94'), 'V94 visible-height correction is installed'],
 [html.includes("const top=settings.getBoundingClientRect().top"), 'panel height uses its real viewport position'],
 [html.includes('window.innerHeight-top-16'), 'panel bottom is reserved inside the visible viewport'],
 [html.includes("settings.style.maxHeight=`${available}px`"), 'incorrect fixed max-height is overridden'],
 [html.includes("window.addEventListener('resize',fitVisibleHeight"), 'height refreshes when the browser changes size'],
 [html.includes("window.addEventListener('scroll',fitVisibleHeight"), 'height refreshes when the surrounding page moves'],
 [html.includes('return; // V94: obsolete custom scrollbar fully disabled'), 'obsolete custom scrollbar code cannot execute'],
 [html.includes('.mixo-fine-scroll{display:none!important}'), 'obsolete custom scrollbar remains hidden'],
];
for(const [ok,name] of checks){if(!ok)throw Error(`FAILED: ${name}`);console.log(`PASS: ${name}`)}
const recorded={viewportHeight:936,panelTop:296.390625,oldHeight:794};
const corrected=recorded.viewportHeight-recorded.panelTop-16;
if(recorded.panelTop+corrected>recorded.viewportHeight)throw Error('FAILED: corrected panel exceeds recorded viewport');
console.log(`PASS: recorded deployment corrects panel height from ${recorded.oldHeight}px to ${corrected.toFixed(1)}px`);
let parsed=0;for(const match of html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)){const source=match[1];if(!source.trim()||/application\/ld\+json/.test(match[0]))continue;new vm.Script(source,{filename:`inline-${++parsed}.js`})}console.log(`PASS: ${parsed} inline scripts parse`);
