const fs=require('fs'),path=require('path'),root=path.join(__dirname,'..');
const server=fs.readFileSync(path.join(root,'server.js'),'utf8');
const client=fs.readFileSync(path.join(root,'index.html'),'utf8');
const serverChecks=['precisely synchronised audio','visible cause','realistic loudness, direction','music is not explicitly requested, generate no music','narration','unrelated subjects, sounds'];
const clientChecks=['video with synchronised sound','Movement, camera and sound','Exact spoken dialogue','strict cast/face continuity'];
const missing=[...serverChecks.filter(x=>!server.includes(x)),...clientChecks.filter(x=>!client.includes(x))];
if(missing.length){console.error('V151 accurate-video-audio verification failed:',missing);process.exit(1)}
console.log('V151 accurate video-audio guidance checks passed.');
