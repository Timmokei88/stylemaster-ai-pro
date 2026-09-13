const fs=require('fs'),path=require('path'),source=fs.readFileSync(path.resolve(__dirname,'..','server.js'),'utf8');
const match=source.match(/const BENIGN_CHILD_HISTORY=(\/.*?\/[a-z]*);/);
if(!match)throw Error('BENIGN_CHILD_HISTORY is missing');
const pattern=Function(`return ${match[1]}`)();
const allowed=['1920s kid','make my son look like a 1920s child','Victorian portrait of my daughter','historical family photograph'];
const unrelated=['nude child','terrorist attack','graphic murder'];
for(const prompt of allowed){if(!pattern.test(prompt))throw Error(`expected historical match: ${prompt}`);pattern.lastIndex=0}
for(const prompt of unrelated){if(pattern.test(prompt))throw Error(`unexpected historical match: ${prompt}`);pattern.lastIndex=0}
if(!source.includes('historically accurate, wholesome period portrait'))throw Error('provider-safe historical wording is missing');
if(!source.includes('Keep the child fully clothed in age-appropriate period clothing'))throw Error('age-appropriate clothing instruction is missing');
if(!source.includes('stage==="generation"||stage==="reference_upload"&&inconclusive'))throw Error('benign generation override is missing');
console.log('PASS benign historical child prompts are recognised and safely normalised');
