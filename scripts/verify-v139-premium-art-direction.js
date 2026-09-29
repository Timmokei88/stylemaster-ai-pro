const fs=require('fs'),assert=require('assert');
const server=fs.readFileSync('server.js','utf8'),html=fs.readFileSync('index.html','utf8');
const checks=[
 ['accuracy-first art direction',server.includes('MANDATORY ACCURACY-FIRST ART DIRECTION:')],
 ['premium photographic finish',server.includes('PREMIUM PHOTOGRAPHIC FINISH:')],
 ['premium stylised finish',server.includes('PREMIUM STYLISED FINISH:')],
 ['professional graphic finish',server.includes('PROFESSIONAL GRAPHIC FINISH:')],
 ['genre-aware routing',server.includes('function premiumVisualDirection(text)')],
 ['visual direction reaches provider request',server.includes('premiumVisualDirection(text)')&&server.includes('MANDATORY ACCURACY-FIRST ART DIRECTION:')],
 ['settings scroll reset',html.includes("settings?.scrollTo({top:0,left:0,behavior:'auto'})")],
 ['studio scroll reset',html.includes("studio?.scrollTo({top:0,left:0,behavior:'auto'})")],
 ['document scroll reset',html.includes("document.scrollingElement?.scrollTo({top:0,left:0,behavior:'auto'})")],
 ['focus does not undo scroll',html.includes("prompt.focus({preventScroll:true})")]
];
for(const [name,ok] of checks){assert(ok,name);console.log('PASS',name)}
