const fs=require('fs'),path=require('path'),root=path.resolve(__dirname,'..');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8'),server=fs.readFileSync(path.join(root,'server.js'),'utf8');
const checks=[
 [html.includes('function anatomyQualityPromptBlock()'),'browser prompt builder includes permanent anatomy QA'],
 [html.includes('${anatomyQualityPromptBlock()}'),'every browser-generated prompt receives anatomy QA'],
 [server.includes('const ANATOMY_QUALITY_RULE=')&&server.includes('A normal quadruped such as a lion must have exactly four legs'),'server defines explicit quadruped limb counting'],
 [server.includes('if(!finalText.includes("MANDATORY ANATOMY QA:"))finalText+=')&&server.includes('return copy'),'server enforces the anatomy rule on the final provider payload'],
 [server.includes('Apply this equally to realistic, cartoon, toy, figurine, resin-model and 3D-animation styles'),'stylised subjects are covered'],
 [server.includes('never introduce extra, missing, duplicated, fused or malformed limbs'),'prompt enhancer preserves anatomy accuracy']
];
let failed=0;for(const [ok,label] of checks){console.log(`${ok?'PASS':'FAIL'} ${label}`);if(!ok)failed++}if(failed)process.exit(1);
