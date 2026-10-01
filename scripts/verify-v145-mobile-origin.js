const fs=require('fs'),path=require('path'),assert=require('assert');
const server=fs.readFileSync(path.join(__dirname,'..','server.js'),'utf8');
for(const marker of [
  'function effectiveRequestHost(req)',
  'originHost===requestHost',
  'if(PROD&&parsed.protocol!=="https:")return false',
  'return new URL(supplied).origin',
  'This page address does not match the secure MixoLabs checkout address'
])assert(server.includes(marker),`Missing secure mobile-origin marker: ${marker}`);
assert(!server.includes('originHost===appHost&&(!requestHost||requestHost===appHost)'), 'Obsolete three-way mobile host comparison is still active');
console.log('V145 secure same-site mobile checkout-origin checks passed.');
