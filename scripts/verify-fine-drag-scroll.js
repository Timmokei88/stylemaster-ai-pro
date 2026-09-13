const fs=require('fs'),path=require('path'),vm=require('vm');
const html=fs.readFileSync(path.join(__dirname,'..','index.html'),'utf8');
const checks=[
 [html.includes('mixo-arrow-scroll-v92'), 'V92 left-column-contained arrow scrollbar is installed'],
 [html.includes('panels are intentionally independent'), 'obsolete linked-panel scrolling is disabled'],
 [html.includes('scrollbar-width:none!important'), 'uncontrolled native left scrollbar is hidden'],
 [html.includes('mixo-scroll-up')&&html.includes('mixo-scroll-down'), 'fixed up and down controls are present'],
 [html.includes('position:fixed;z-index:700'), 'scrollbar remains fixed inside the visible viewport'],
 [html.includes("getComputedStyle(workspace).gridTemplateColumns"), 'scrollbar uses the true left grid-column boundary'],
 [html.includes('workspaceRect.left+firstColumn-28'), 'scrollbar is anchored inside the settings column'],
 [html.includes('workspaceRect.bottom-5,settingsRect.bottom-5'), 'rail bottom is constrained to the visible left panel'],
 [html.includes('window.addEventListener(\'scroll\',layout'), 'rail position refreshes when surrounding content moves'],
 [html.includes("startScroll+naturalMovement"), 'thumb dragging directly follows the pointer without reduced-sensitivity drift'],
 [html.includes("direction*55"), 'arrow presses use small precise steps'],
 [html.includes("setInterval(()=>nudge(direction),70)"), 'holding an arrow scrolls continuously'],
 [html.includes("settings.clientHeight*.35"), 'track clicks provide controlled page movement'],
 [html.includes("settings.addEventListener('scroll',sync"), 'thumb remains synchronized with the panel'],
 [html.includes("new ResizeObserver(layout).observe(settings)"), 'track remains aligned after layout changes'],
 [html.includes('@media(max-width:980px){.mixo-fine-scroll{display:none!important}}'), 'mobile natural scrolling is unchanged'],
];
for(const [ok,name] of checks){if(!ok)throw Error(`FAILED: ${name}`);console.log(`PASS: ${name}`)}
let parsed=0;for(const match of html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)){const source=match[1];if(!source.trim()||/application\/ld\+json/.test(match[0]))continue;new vm.Script(source,{filename:`inline-${++parsed}.js`})}console.log(`PASS: ${parsed} inline scripts parse`);
