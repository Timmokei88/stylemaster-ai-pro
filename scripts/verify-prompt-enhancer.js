const fs=require('fs'),path=require('path'),vm=require('vm');
const html=fs.readFileSync(path.join(__dirname,'..','index.html'),'utf8'),server=fs.readFileSync(path.join(__dirname,'..','server.js'),'utf8'),env=fs.readFileSync(path.join(__dirname,'..','.env.example'),'utf8');
const checks=[
 [html.includes('mixo-prompt-enhancer-v83'), 'prompt enhancer interface'],
 [html.includes('✨ Enhance My Prompt'), 'clear enhancement button'],
 [html.includes("fetch('/api/prompts/enhance'"), 'frontend enhancement request'],
 [html.includes("category:document.getElementById('categorySelect')"), 'category context'],
 [html.includes("prompt.dispatchEvent(new Event('input'"), 'auto-growing prompt refresh'],
 [server.includes('GEMINI_PROMPT_MODEL'), 'configurable text model'],
 [env.includes('GEMINI_PROMPT_MODEL=gemini-3.1-flash-lite'), 'documented default model'],
 [server.includes('app.post("/api/prompts/enhance",requireAuth,enhanceLimit'), 'authenticated rate-limited endpoint'],
 [server.includes('creditsUsed:0'), 'no image-credit debit'],
 [server.includes("Preserve the user's subject and intent"), 'intent preservation instruction'],
 [server.includes('Do not turn a benign prompt into a risky one'), 'safe enhancement instruction'],
];
for(const [ok,name] of checks){if(!ok)throw Error(`FAILED: ${name}`);console.log(`PASS: ${name}`)}
new vm.Script(server,{filename:'server.js'});let parsed=0;for(const match of html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)){const source=match[1];if(!source.trim()||/application\/ld\+json/.test(match[0]))continue;new vm.Script(source,{filename:`inline-${++parsed}.js`});}console.log(`PASS: server and ${parsed} inline scripts parse`);
