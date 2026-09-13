const fs=require('fs'),path=require('path');
const html=fs.readFileSync(path.join(__dirname,'..','index.html'),'utf8');
const server=fs.readFileSync(path.join(__dirname,'..','server.js'),'utf8');
const checks=[
 [html.includes('function selectedMediumPromptBlock()'), 'final prompt has deterministic medium enforcement'],
 [html.includes('styleSelect.value==="Resin Model"'), 'resin enforcement is scoped to Resin Model'],
 [html.includes('MANDATORY RESIN MODEL MEDIUM'), 'resin requirement is explicit'],
 [html.includes('not as a living person'), 'ordinary portrait output is explicitly rejected'],
 [html.includes('Use ${colour} as the dominant resin material colour'), 'selected resin colour is mandatory'],
 [html.includes('${selectedMediumPromptBlock()}'), 'medium enforcement is included in every final generation prompt'],
 [html.includes("color:document.getElementById('selectedColor')?.textContent||''"), 'selected colour is sent to prompt enhancement'],
 [server.includes('color=String(req.body?.color||"")'), 'server accepts selected colour'],
 [server.includes('Category, style, theme and colour selections are mandatory visual constraints'), 'enhancer preserves all selected controls'],
 [server.includes('When style is Resin Model'), 'enhancer has resin-specific instructions'],
 [server.includes('Selected colour: ${color}'), 'enhancer receives colour context'],
];
for(const [ok,name] of checks){if(!ok)throw Error(`FAILED: ${name}`);console.log(`PASS: ${name}`)}
