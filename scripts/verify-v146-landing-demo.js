const fs=require('fs'),path=require('path'),assert=require('assert');
const root=path.join(__dirname,'..'),html=fs.readFileSync(path.join(root,'index.html'),'utf8'),server=fs.readFileSync(path.join(root,'server.js'),'utf8');
for(const marker of ['mixoLandingDemo','autoplay muted loop playsinline controls','SHORT PROMPTS WORK','EXACT WORDS','FREE 2K ENHANCEMENT','Try It Free — Get 20 Credits','IntersectionObserver'])assert(html.includes(marker),`Missing landing demo marker: ${marker}`);
for(const file of ['mixolabs-landing-demo.mp4','mixolabs-landing-demo-poster.jpg']){const full=path.join(root,file);assert(fs.existsSync(full),`Missing ${file}`);assert(fs.statSync(full).size>50000,`${file} is unexpectedly small`);assert(server.includes(`/\"${file}`)||server.includes(`\"/${file}\"`),`${file} is not served publicly`)}
console.log('V146 real-result landing demonstration checks passed.');
