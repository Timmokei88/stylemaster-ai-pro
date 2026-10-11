const fs=require('fs');
const server=fs.readFileSync('server.js','utf8'),html=fs.readFileSync('index.html','utf8');
const serverChecks=['videoConfig={enabled:false,cost5:15,cost8:24}','/api/owner/video-config','/api/video/config','/api/videos/generate','/api/videos/:id/content','/v1beta/interactions?key=','response_format:{type:"video"','Your credits were automatically returned','Video generation is currently switched off'];
const clientChecks=['id="mixo-video-generation-v149"','Owner Video Generator','id="mixoVideoEnabled"','id="mixoVideoCost5"','id="mixoVideoCost8"','Animate This Image','Download MP4','No automatic paid retry'];
const missing=[...serverChecks.filter(x=>!server.includes(x)),...clientChecks.filter(x=>!html.includes(x))];
if(missing.length){console.error('V149 verification failed:',missing);process.exit(1)}
console.log('V149 owner-controlled video generator checks passed.');
