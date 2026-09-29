const fs=require('fs');
const path=require('path');
const html=fs.readFileSync(path.resolve(__dirname,'..','index.html'),'utf8');
const checks=[
 ['quick-start launch',html.includes('Quick Start — about 60 seconds')],
 ['five quick-start steps',html.includes("title:'Write a simple idea'")&&html.includes("title:'Enhance, compare and download'")],
 ['short-prompt reassurance',html.includes('Short prompts work too. Try:')],
 ['optional advanced guidance',html.includes('Advanced Options — optional')&&html.includes('Your prompt is enough.')],
 ['correct 1K and free 2K tutorial',html.includes('Every image is generated at 1K for one credit')&&html.includes('free 2K enhancer')],
 ['outdated narrated quality copy removed',!html.includes('Choose one to six variations and select 1K Standard, 2K High Quality or 4K Maximum')],
 ['instant clear scroll',html.includes("window.scrollTo({top:0,left:0,behavior:'auto'})")],
 ['prompt refocus without scroll',html.includes("prompt.focus({preventScroll:true})")],
 ['clear input event',html.includes("prompt.dispatchEvent(new Event('input',{bubbles:true}))")],
 ['plans CTA',html.includes("replacement.textContent='View Plans & Credit Packs'")],
 ['secondary generate label',html.includes('Generate with these settings')],
 ['quick narration',html.includes('SpeechSynthesisUtterance')],
 ['quick progress',html.includes('mixo-quick-progress')]
];
const failed=checks.filter(([,ok])=>!ok);if(failed.length){console.error('V137 verification failed:',failed.map(x=>x[0]).join(', '));process.exit(1)}
console.log('V137 onboarding and clear-scroll checks passed.');
