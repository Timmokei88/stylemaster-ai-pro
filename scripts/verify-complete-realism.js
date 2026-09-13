const fs=require('fs'),path=require('path'),html=fs.readFileSync(path.resolve(__dirname,'..','index.html'),'utf8');
const checks=[
 [html.includes('function realismPromptBlock(promptText)'), 'realism rule exists'],
 [html.includes('hyper[- ]?real')&&html.includes('photo[- ]?real'), 'hyperrealism and photorealism triggers exist'],
 [html.includes('MANDATORY COMPLETE REALISM / LIVE-ACTION MODE'), 'realism instruction is mandatory'],
 [html.includes('It must not look animated, illustrated, painted, cartoon-like'), 'animated and illustrated output is explicitly suppressed'],
 [html.includes('natural skin with pores and fine texture'), 'real material and skin detail are required'],
 [html.includes('credible as a frame from a professionally shot live-action film'), 'live-action film target is required'],
 [html.includes('${realismPromptBlock(p)}'), 'realism block is included in every built prompt'],
];
let failed=0;for(const [ok,label] of checks){console.log(`${ok?'PASS':'FAIL'} ${label}`);if(!ok)failed++}if(failed)process.exit(1);
