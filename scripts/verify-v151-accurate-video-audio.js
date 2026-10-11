const fs=require('fs'),path=require('path'),root=path.join(__dirname,'..');
const server=fs.readFileSync(path.join(root,'server.js'),'utf8');
const client=fs.readFileSync(path.join(root,'index.html'),'utf8');
const serverChecks=['precisely synchronised audio','exact moment its visible cause occurs','realistic loudness, direction, reverberation','If the prompt does not explicitly request music, generate no music','narration','audio discontinuities'];
const clientChecks=['short 720p video with synchronised sound','Movement, camera and sound','Leave dialogue blank for a speech-free video','Natural wind ambience only; no music'];
const missing=[...serverChecks.filter(x=>!server.includes(x)),...clientChecks.filter(x=>!client.includes(x))];
if(missing.length){console.error('V151 accurate-video-audio verification failed:',missing);process.exit(1)}
console.log('V151 accurate video-audio guidance checks passed.');
