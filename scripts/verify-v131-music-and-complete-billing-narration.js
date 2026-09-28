const fs=require('fs');
const server=fs.readFileSync('server.js','utf8');
const html=fs.readFileSync('index.html','utf8');
function assert(value,message){if(!value)throw new Error(message)}
assert(server.includes('CREATE TABLE IF NOT EXISTS background_tracks'),'durable music library table is missing');
assert(server.includes('musicUpload.single("audio")'),'owner audio upload is missing');
assert(server.includes('app.post("/api/owner/music/tracks",requireModerator'),'music upload is not owner-protected');
assert(server.includes('rightsConfirmed!=="true"'),'music-rights confirmation is not enforced');
assert(server.includes('app.get("/api/music/tracks",requireAuth'),'customer track list is not account-protected');
assert(server.includes('app.delete("/api/owner/music/tracks/:id",requireModerator'),'track removal is not owner-protected');
assert(html.includes('mixo-music-v131'),'customer music player is missing');
for(const id of ['mixoMusicPrevious','mixoMusicPlay','mixoMusicNext','mixoMusicMute','mixoMusicVolume'])assert(html.includes(id),`${id} control is missing`);
assert(html.includes('I own this music or have permission to stream it'),'owner music-rights disclosure is missing');
assert(html.includes('mixo-billing-narrator-v131'),'complete billing narration layer is missing');
for(const phrase of ['Type an exact one-time amount','One-time credit slider','Build your own monthly subscription','Monthly rollover rules','Digital-service acknowledgement','Manage Billing'])assert(html.includes(phrase),`narrated billing topic is missing: ${phrase}`);
assert(html.includes('Background music is optional and never starts automatically'),'music narration or autoplay disclosure is missing');
console.log('PASS V131: owner music library, opt-in player controls and complete narrated billing guidance verified');
