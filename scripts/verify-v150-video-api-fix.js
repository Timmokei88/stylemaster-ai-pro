const fs=require('fs'),path=require('path'),root=path.join(__dirname,'..');
const server=fs.readFileSync(path.join(root,'server.js'),'utf8');
const required=['async function generateOmniImageVideo','/v1beta/interactions?key=','type:"image"','mime_type:mimeType','response_format:{type:"video",aspect_ratio:providerRatio','resolution:"720p"','background:false,store:false,stream:false','data?.steps','generateOmniImageVideo({prompt,dialogue,voiceStyle'];
const forbidden=['responseModalities:["VIDEO"],videoConfig','GEMINI_VIDEO_MODEL)}:generateContent?key='];
const missing=required.filter(value=>!server.includes(value));
const present=forbidden.filter(value=>server.includes(value));
if(missing.length||present.length){console.error('V150 verification failed:',{missing,present});process.exit(1)}
console.log('V150 Gemini Interactions image-to-video request checks passed.');
