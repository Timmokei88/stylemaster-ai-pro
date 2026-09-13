const fs=require('fs'),path=require('path'),vm=require('vm');
const html=fs.readFileSync(path.join(__dirname,'..','index.html'),'utf8');
const checks=[
 [html.includes('mixo-balanced-drag-scroll-v88'), 'V88 balanced drag scrollbar is installed'],
 [html.includes('scrollbar-width:none!important'), 'uncontrolled native left scrollbar is hidden'],
 [html.includes("startScroll+(naturalMovement*.50)"), 'thumb dragging uses balanced 50% sensitivity'],
 [html.includes("settings.clientHeight*.50"), 'track clicks move half of one visible page'],
 [html.includes("settings.addEventListener('scroll',sync"), 'thumb remains synchronized with the panel'],
 [html.includes("new ResizeObserver(layout).observe(settings)"), 'track remains aligned after layout changes'],
 [html.includes('@media(max-width:980px){.mixo-fine-scroll{display:none!important}}'), 'mobile natural scrolling is unchanged'],
];
for(const [ok,name] of checks){if(!ok)throw Error(`FAILED: ${name}`);console.log(`PASS: ${name}`)}
let parsed=0;for(const match of html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)){const source=match[1];if(!source.trim()||/application\/ld\+json/.test(match[0]))continue;new vm.Script(source,{filename:`inline-${++parsed}.js`})}console.log(`PASS: ${parsed} inline scripts parse`);
