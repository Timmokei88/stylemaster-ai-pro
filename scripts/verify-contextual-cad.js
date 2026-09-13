const fs=require('fs'),path=require('path'),vm=require('vm');
const html=fs.readFileSync(path.join(__dirname,'..','index.html'),'utf8');
const checks=[
 [html.includes('mixo-contextual-cad-v84'), 'V84 contextual CAD system'],
 [html.includes('mixo-cad-tools mixo-cad-hidden'), 'CAD tools start hidden'],
 [html.includes('advancedBody.insertBefore(cadTools'), 'CAD controls live inside Advanced Options'],
 [html.includes("category.value==='CAD & Technical Design'"), 'visibility requires CAD genre'],
 [html.includes("cad.classList.toggle('mixo-cad-hidden',!active)"), 'other genres hide CAD controls'],
 [html.includes('cad.open=active'), 'CAD opens only when selected'],
 [html.includes('if(categorySelect.value!=="CAD & Technical Design")return ""'), 'CAD instructions cannot leak into other genres'],
 [!html.includes('if(detectTechnicalMode($("prompt").value))cadTools.open=true'), 'prompt text cannot expose CAD in another genre'],
 [html.includes("categoryLabel.textContent='Genre'"), 'Category is labelled Genre'],
 [html.includes("styleLabel.textContent='Sub-genre / Style'"), 'Style is labelled Sub-genre'],
 [html.includes('difference*.10'), 'linked scrolling uses gentler easing'],
];
for(const [ok,name] of checks){if(!ok)throw Error(`FAILED: ${name}`);console.log(`PASS: ${name}`)}
let parsed=0;for(const match of html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)){const source=match[1];if(!source.trim()||/application\/ld\+json/.test(match[0]))continue;new vm.Script(source,{filename:`inline-${++parsed}.js`});}console.log(`PASS: ${parsed} inline scripts parse`);
