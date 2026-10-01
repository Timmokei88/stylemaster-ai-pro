const fs=require('fs'),path=require('path'),assert=require('assert');
const root=path.join(__dirname,'..'),html=fs.readFileSync(path.join(root,'index.html'),'utf8'),builder=fs.readFileSync(path.join(root,'scripts','build-v146-landing-demo.js'),'utf8');
for(const marker of ['six real images','Watch six short prompts','felt craft','wood-resin DIY','business logo','product photography'])assert(html.includes(marker),`Missing six-image landing copy: ${marker}`);
for(const marker of ['landing-felt.jpg','landing-resin.jpg','landing-logo.jpg','landing-watch.jpg','FELT CRAFT','WOOD & RESIN','BUSINESS LOGO','PRODUCT PHOTOGRAPHY'])assert(builder.includes(marker),`Missing six-image video marker: ${marker}`);
for(const file of ['landing-felt.jpg','landing-resin.jpg','landing-logo.jpg','landing-watch.jpg'])assert(fs.statSync(path.join(root,file)).size>500000,`${file} is missing or too small`);
console.log('V147 six-image 74-second landing demonstration checks passed.');
