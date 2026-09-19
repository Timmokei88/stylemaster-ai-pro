const fs=require('fs');
const server=fs.readFileSync('server.js','utf8');
const html=fs.readFileSync('index.html','utf8');
function assert(condition,message){if(!condition)throw new Error(message)}
assert(server.includes('const REFERENCE_PERSON_IDENTITY_RULE='),'server identity-lock rule is missing');
assert(server.includes('if(images.length&&!finalText.includes("MANDATORY REFERENCE-PERSON IDENTITY LOCK:"))'),'identity lock is not applied to every generation with references');
for(const phrase of ['facial geometry','Do not substitute a lookalike','change only the specifically requested trait','multiple people'])assert(server.includes(phrase),`identity rule is missing: ${phrase}`);
assert(html.includes('mixo-reference-identity-v128'),'reference identity notice is missing');
assert(html.includes('People are identity-locked by default'),'customer identity-lock explanation is missing');
assert(html.includes('A referenced person keeps the same recognisable face by default'),'tutorial identity-lock narration is missing');
assert(html.includes('Generative models can still vary, so an identical result cannot be guaranteed.'),'honest model limitation is missing');
console.log('PASS V128: server-enforced reference-person identity lock and customer guidance verified');
