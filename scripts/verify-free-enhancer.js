const fs=require('fs'),path=require('path'),root=path.resolve(__dirname,'..');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8'),server=fs.readFileSync(path.join(root,'server.js'),'utf8');
const checks=[
 [server.includes('const COSTS={"1K":1}'), 'server accepts only the one-credit 1K tier'],
 [server.includes('GENERATION_MODEL="gemini-3.1-flash-lite-image"'), 'generation is pinned to Flash Lite'],
 [!server.includes('HIGH_RES_IMAGE_MODEL='), 'unsupported high-resolution provider route removed'],
 [html.includes("sizeSelect.innerHTML='<option value=\"1K\" selected>1K — Flash Lite • 1 credit/image</option>'"), 'quality selector is reduced to 1K at runtime'],
 [html.includes('mixo-free-enhancer-v106'), 'free enhancer is installed'],
 [html.includes('clipPath')&&html.includes('mixo-enhance-divider'), 'before/after split comparison is present'],
 [html.includes('detailPass')&&html.includes('prepareSource'), 'legacy fallback helpers remain available without auto-running'],
 [html.includes('@tensorflow/tfjs@latest')&&html.includes('DefaultUpscalerJSModel'), 'browser neural runtime and model loader are present'],
 [html.includes('upscaler.upscale')&&html.includes('patchSize:32')&&html.includes('padding:2'), 'responsive small-patch neural super-resolution is present'],
 [html.includes('passes=scale===4?2:1'), '4x output uses two neural 2x passes'],
 [html.includes('mixo-enhancer-v111-fixed-viewport-style')&&html.includes('height:min(58vh,560px)'), 'comparison viewport remains fixed while zooming'],
 [html.includes('mixoEnhanceZoom')&&html.includes('max="400"'), 'independent 100 to 400 percent zoom is present'],
 [html.includes("compare.addEventListener('pointermove'")&&html.includes('--mixo-pan-x'), 'drag-to-pan works inside the fixed viewport'],
 [html.includes('enhancementRunning')&&html.includes('if(enhancementRunning)return'), 'duplicate enhancement runs are prevented'],
 [html.includes('no MixoLabs credit or image API request was used'), 'zero-credit neural processing is disclosed'],
 [!html.includes('setTimeout(enhance,80)')&&!html.includes('enhanceTimer=setTimeout(enhance'), 'enhancement never auto-starts on open or option changes'],
 [html.includes('requestAnimationFrame(()=>requestAnimationFrame(resolve))'), 'the modal receives two paint frames before heavy work'],
 [html.includes("scale===4&&!window.confirm"), '4x work requires explicit confirmation'],
 [html.includes("zoomRange.value='200'"), 'enhanced result opens at a useful inspection zoom'],
 [html.includes("a.download='mixolabs-enhanced.png'"), 'enhanced PNG download is present'],
 [html.includes("a.download='mixolabs-enhanced-300dpi.jpg'"), '300 DPI print download is present'],
 [html.includes('cast-shadow direction, length, softness, contact shadows'), 'lighting consistency instruction is permanent'],
];
let failed=0;for(const [ok,label] of checks){console.log(`${ok?'PASS':'FAIL'} ${label}`);if(!ok)failed++}if(failed)process.exit(1);
