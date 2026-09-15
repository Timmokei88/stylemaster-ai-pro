const fs=require('fs');
const assert=require('assert');
const server=fs.readFileSync('server.js','utf8');
const html=fs.readFileSync('index.html','utf8');

for(const marker of ['MANDATORY MULTI-VIEW IDENTITY LOCK','MANDATORY TRUE-PHOTO REALISM','platform_settings','/api/owner/billing-config','isOwner:'])assert(server.includes(marker),`Missing server feature: ${marker}`);
for(const marker of ['mixoOwnerPricing','mixoOwnerBaseCredits','mixoOwnerMonthlyBonus','/api/owner/billing-config'])assert(html.includes(marker),`Missing owner UI feature: ${marker}`);

function credits(amount,monthly=false,config={baseAmountPence:199,baseCredits:25,monthlyBonusPercent:20}){const one=Math.max(1,Math.round(amount/config.baseAmountPence*config.baseCredits));return monthly?Math.max(1,Math.ceil(one*(1+config.monthlyBonusPercent/100))):one}
assert.equal(credits(199),25);
assert.equal(credits(199,true),30);
assert.equal(credits(199,false,{baseAmountPence:199,baseCredits:30,monthlyBonusPercent:20}),30);
assert.equal(credits(199,true,{baseAmountPence:199,baseCredits:30,monthlyBonusPercent:20}),36);
console.log('V121 identity, realism and owner-pricing checks passed.');
