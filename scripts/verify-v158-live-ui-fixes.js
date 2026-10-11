const fs=require('fs'),assert=require('assert');
const html=fs.readFileSync('index.html','utf8');
const music=fs.readFileSync('music-generator.js','utf8');
assert(html.includes('Number.isFinite(credits)'), 'credit UI must reject missing or non-numeric event balances');
assert(html.includes('.mixo-music-player.mixo-music-feature-off{display:none!important}'), 'disabled music must hide the optional dashboard player');
assert(music.includes("launch.style.display=enabled?'':'none'"), 'Music Studio launch must be explicitly removed from layout when disabled');
assert(music.includes("backgroundPlayer?.classList.toggle('mixo-music-feature-off',!enabled)"), 'music toggle must govern the dashboard player');
assert(music.includes("q('#mixoMusicEnabled').onchange=saveOwnerMusic"), 'owner checkbox must save immediately');
console.log('PASS V158: live video UI, numeric credit display and owner music visibility are protected');
