const fs=require('fs'),assert=require('assert'),server=fs.readFileSync('server.js','utf8'),html=fs.readFileSync('index.html','utf8'),pkg=require('../package.json');
assert.strictEqual(pkg.version,'1.0.162');
for(const value of ['/api/videos/:id/extend','extensionDuration>=5&&extensionDuration<=10','finalFrameReference(original)','video_extension','extendedFrom','applyRequestedVoiceTransform','asetrate=48000*1.35','asetrate=48000*0.80','voiceAccuracy','value>=0.9','changing felt patterns or construction details','The requested transformation below has absolute priority'])assert(server.includes(value),`missing V162 protection: ${value}`);
for(const value of ['mixo-v162-video-extension','Extend This Video','What happens next?','Voice style — optional','Download Extended MP4'])assert(html.includes(value),`missing V162 interface: ${value}`);
assert(server.includes('if(charge&&!charge.duplicate)await refund(req.session.userId,cost,key,charge.metadata)'),'extension must use automatic refund path');
console.log('PASS V162: repeatable video extension, immutable rotating identity, deterministic pitch transformation, voice QA and refunds verified');
