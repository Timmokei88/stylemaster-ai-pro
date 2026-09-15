const fs=require('fs');const server=fs.readFileSync('server.js','utf8');
const checks=[
 [server.includes('/monthly spending cap|project[- ]spend[- ]caps|spend cap/i'),'provider spend-cap detection'],
 [server.includes('errorCode=spendCap?"PROVIDER_SPEND_CAP":"PROVIDER_ERROR"'),'dedicated capacity error code'],
 [server.includes('generation_provider_spend_cap'),'owner capacity alert'],
 [server.includes('Image generation is temporarily paused while MixoLabs updates its provider capacity.'),'customer-safe explanation'],
 [server.includes('Your credit was automatically returned.'),'automatic refund confirmation'],
];
for(const [ok,name] of checks){if(!ok)throw Error('FAIL '+name);console.log('PASS',name)}
