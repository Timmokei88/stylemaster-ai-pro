const fs=require('fs');
const html=fs.readFileSync('index.html','utf8');
function assert(value,message){if(!value)throw Error(message)}
for(const phrase of ['decodeAudioData','crypto.subtle.digest','analyseMusic(file','existingMusicTitles','Suggest Another Title','analyses the actual audio'])assert(html.includes(phrase),`audio title feature is missing: ${phrase}`);
assert(html.includes("form.elements.audio.onchange=()=>"),'automatic analysis on file selection is missing');
assert(html.includes("if(!used.has(candidate.toLowerCase()))"),'existing-title collision protection is missing');
assert(html.includes('titleVariant++'),'alternate title generation is missing');
assert(html.includes('You can edit it or suggest another'),'editable-title guidance is missing');
console.log('V134 audio analysis and unique title checks passed.');
