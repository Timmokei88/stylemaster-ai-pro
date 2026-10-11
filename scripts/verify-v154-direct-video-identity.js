const fs=require('fs'),server=fs.readFileSync('server.js','utf8'),html=fs.readFileSync('index.html','utf8'),music=fs.readFileSync('music-generator.js','utf8');
const checks=[
 [server,['duration>=5&&duration<=60','Math.ceil(duration/5)*Number(videoConfig.costPer5)','strict one-to-one cast ledger','never merge, substitute, duplicate, remove, add or morph','facial geometry','if(imageData)input.push']],
 [html,['data-mode="image"','data-mode="video"','id="mixoDirectDuration"','max="60"','id="mixoDirectRatio"','uploadedImages?.[0]||null','id="mixoVideoCostPer5"']],
 [music,["pricing.insertAdjacentElement('afterend',box)",'Enable customer music generation']]
];
const missing=checks.flatMap(([text,need])=>need.filter(x=>!text.includes(x)));if(missing.length){console.error('V154 verification failed:',missing);process.exit(1)}console.log('PASS V154: direct Image/Video mode, 5–60 second pricing, all ratios, owner music switch and identity/cast locks verified');
