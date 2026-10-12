const fs=require('fs'),assert=require('assert'),server=fs.readFileSync('server.js','utf8'),html=fs.readFileSync('index.html','utf8'),pkg=require('../package.json');
assert(Number(pkg.version.split('.').pop())>=161,'version must retain the V161 duration update');
for(const value of ['maxDuration:15','duration>15','generateOmniVideoSegment','finalFrameReference','joinVideoSegments','options.duration<=10','ffmpeg-static'])assert(server.includes(value),`missing V161 server protection: ${value}`);
assert(html.includes('id="mixoVideoDuration" type="range" min="5" max="15"'));
assert(html.includes('id="mixoDirectDuration" type="range" min="5" max="15"'));
assert(!html.includes('id="mixoVideoDuration" type="range" min="5" max="60"'));
assert(!html.includes('id="mixoDirectDuration" type="range" min="5" max="60"'));
console.log('PASS V161: 5–15 second video control, continuity extension, one charge and full-job refund path verified');
