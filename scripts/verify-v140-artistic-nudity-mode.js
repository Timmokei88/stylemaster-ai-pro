const fs=require('fs');
const assert=require('assert');
const server=fs.readFileSync('server.js','utf8');
const page=fs.readFileSync('index.html','utf8');

for(const marker of [
  'X-MixoLabs-Artistic-Nudity',
  'ARTISTIC_NUDITY_RULE',
  'VISIBLE_GENITAL_DETAIL',
  'SEXUAL_ACT',
  'Artistic Nudity Mode is limited to text-to-image fictional adults',
  'providerPayloadBase'
])assert(server.includes(marker),`Missing server protection: ${marker}`);

for(const marker of [
  '18+ Artistic Nudity Mode',
  'artisticNudityModeToggle',
  'Text-to-image fictional adults only',
  'cannot be used with uploaded reference images',
  'rejected generations automatically refund credits',
  'Visible genital detail, sexual acts, minors'
])assert(page.includes(marker),`Missing interface/policy marker: ${marker}`);

assert(server.includes('Your credits were automatically returned.'),'Provider-refusal credit refund path must remain present.');
assert(server.includes('No credits were used.'),'Pre-charge block response must remain present.');
console.log('V140 artistic nudity mode verification passed.');
