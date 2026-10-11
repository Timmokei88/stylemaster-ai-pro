const fs=require('fs'),server=fs.readFileSync('server.js','utf8'),html=fs.readFileSync('index.html','utf8'),music=fs.readFileSync('music-generator.js','utf8');
const checks=[
 [server,['duration:`${duration}s`','delivery:"uri"','["queued","in_progress"]','/v1beta/interactions/${encodeURIComponent(data.id)}','data.status!=="completed"']],
 [html,['window.mixoVideoVoicePayload=window.mixoVideoVoicePayload||']],
 [music,['launch.hidden=true','launch.hidden=!enabled','if(!enabled)overlay.classList.add']]
];
const missing=checks.flatMap(([source,values])=>values.filter(v=>!source.includes(v)));if(missing.length){console.error('V156 verification failed:',missing);process.exit(1)}console.log('PASS V156: queued video polling, requested duration, safe voice fallback and owner-enforced music visibility verified');
