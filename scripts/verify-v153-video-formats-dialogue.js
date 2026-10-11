const fs=require('fs'),path=require('path'),root=path.join(__dirname,'..'),server=fs.readFileSync(path.join(root,'server.js'),'utf8'),html=fs.readFileSync(path.join(root,'index.html'),'utf8');
for(const value of ['"1:1"','"4:5"','"5:4"','"3:2"','"2:3"','"21:9"','speechDirection','exact words once','No character may speak','dialogue.length>300','hasDialogue'])if(!server.includes(value))throw Error(`Missing video server feature: ${value}`);
for(const value of ['mixoVideoDialogue','Exact spoken dialogue','1:1 Square','4:5 Portrait Feed','21:9 Cinematic Ultra-wide','No spoken dialogue will be requested'])if(!html.includes(value))throw Error(`Missing video interface feature: ${value}`);
console.log('PASS V153: expanded video framing and exact optional dialogue verified');
