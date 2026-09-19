const fs=require('fs'),path=require('path'),assert=require('assert');
const html=fs.readFileSync(path.join(__dirname,'..','index.html'),'utf8');
for(const marker of [
  'One-Time Credit Pack',
  'Custom Monthly Plan',
  'Free 2K Image Enhancer',
  'Before and After Scale',
  'Zoom, Pan and Reset',
  'Enhanced Downloads',
  'mixo-complete-feature-tutorial-v126',
  'One-time amount and scale',
  'Monthly amount and scale',
  'Owner pricing controls',
  'Tutorial demonstration only — no credits are being used'
])assert(html.includes(marker),`Missing V126 tutorial marker: ${marker}`);
assert(html.includes("enhancer.classList.remove('hidden')"),'enhancer tutorial must reveal the real enhancer interface');
assert(html.includes("before.src='/mixolabs-promo-art.jpg'"),'enhancer tutorial must use a safe demonstration image');
assert(html.includes(".mixo-watch-panel.mixo-guided-active{z-index:200700!important}"),'narrator panel must remain visible above the enhancer');
console.log('PASS V126: narrated pricing, enhancement, comparison, zoom and owner-control tutorials verified');
