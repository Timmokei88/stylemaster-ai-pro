const fs=require('fs');
const html=fs.readFileSync('index.html','utf8');
const checks=[
 ['writing-request detector',html.includes('const VISIBLE_WRITING_REQUEST=')],
 ['writing requests avoid no-writing conflict',html.includes('if(VISIBLE_WRITING_REQUEST.test(prompt))')],
 ['word-count writing direction',html.includes('Honour any requested subject, tone and word count')],
 ['ordinary images retain text protection',html.includes("return letteringPromptBlock('')")],
 ['music close control',html.includes('id="mixoMusicClose"')],
 ['music close pauses playback',html.includes("function closeMusic(){audio.pause()")],
 ['music dismissal lasts for session',html.includes("sessionStorage.setItem('mixolabs.music.dismissed','1')")],
 ['responsive close sizing',html.includes('.mixo-music-close{width:42px;height:42px')]
];
let failed=0;for(const [name,ok] of checks){console.log(`${ok?'PASS':'FAIL'} ${name}`);if(!ok)failed++}
if(failed)process.exit(1);
