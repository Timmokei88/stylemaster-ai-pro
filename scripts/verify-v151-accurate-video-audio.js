const fs=require('fs'),path=require('path'),root=path.join(__dirname,'..');
const server=fs.readFileSync(path.join(root,'server.js'),'utf8');
const client=fs.readFileSync(path.join(root,'index.html'),'utf8');
const serverChecks=['precisely synchronised audio','exact moment its visible cause occurs','realistic loudness, direction, reverberation','If the prompt does not explicitly request music, generate no music','Do not add narration','audio discontinuities'];
const clientChecks=['short 720p video with synchronised sound','Describe the movement and any exact sound you want','If you do not request music or speech, neither will be added','Natural wind ambience only; no music or speech'];
const missing=[...serverChecks.filter(x=>!server.includes(x)),...clientChecks.filter(x=>!client.includes(x))];
if(missing.length){console.error('V151 accurate-video-audio verification failed:',missing);process.exit(1)}
console.log('V151 accurate video-audio guidance checks passed.');
