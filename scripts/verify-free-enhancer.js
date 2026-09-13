const fs=require('fs'),path=require('path'),root=path.resolve(__dirname,'..');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8'),server=fs.readFileSync(path.join(root,'server.js'),'utf8');
const checks=[
 [server.includes('const COSTS={"1K":1}'), 'server accepts only the one-credit 1K tier'],
 [server.includes('GENERATION_MODEL="gemini-3.1-flash-lite-image"'), 'generation is pinned to Flash Lite'],
 [!server.includes('HIGH_RES_IMAGE_MODEL='), 'unsupported high-resolution provider route removed'],
 [html.includes("sizeSelect.innerHTML='<option value=\"1K\" selected>1K — Flash Lite • 1 credit/image</option>'"), 'quality selector is reduced to 1K at runtime'],
 [html.includes('mixo-free-enhancer-v106'), 'free enhancer is installed'],
 [html.includes('clipPath')&&html.includes('mixo-enhance-divider'), 'before/after split comparison is present'],
 [html.includes('detailPass')&&html.includes('prepareSource')&&html.includes('getImageData'), 'multi-pass pixel-level detail enhancement is present'],
 [html.includes('setTimeout(enhance,80)')&&html.includes("onchange=()=>{clearTimeout(enhanceTimer)"), 'enhancement runs automatically on open and option changes'],
 [html.includes('Inspect at 200%'), 'magnified quality inspection is present'],
 [html.includes("a.download='mixolabs-enhanced.png'"), 'enhanced PNG download is present'],
 [html.includes("a.download='mixolabs-enhanced-300dpi.jpg'"), '300 DPI print download is present'],
 [html.includes('cast-shadow direction, length, softness, contact shadows'), 'lighting consistency instruction is permanent'],
];
let failed=0;for(const [ok,label] of checks){console.log(`${ok?'PASS':'FAIL'} ${label}`);if(!ok)failed++}if(failed)process.exit(1);
