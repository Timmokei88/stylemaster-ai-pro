const fs=require('fs');
const path=require('path');
const root=path.resolve(__dirname,'..');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const server=fs.readFileSync(path.join(root,'server.js'),'utf8');
const required=[
 ['prompt-derived filename helper',html.includes('function descriptiveDownloadName')],
 ['original descriptive download',html.includes("descriptiveDownloadName('original','png')")],
 ['enhanced descriptive download',html.includes("descriptiveDownloadName('enhanced','jpg')")],
 ['print descriptive download',html.includes("descriptiveDownloadName('print','jpg')")],
 ['per-generation prompt metadata',html.includes('generatedImageMeta.set(url')],
 ['no accidental lettering prompt',html.includes('No visible writing: do not generate letters')],
 ['exact text isolation prompt',html.includes('Do not add any other letters, words, numbers')],
 ['enhancer text rule',server.includes('require a text-free scene with no letters')]
];
const failed=required.filter(([,ok])=>!ok);
if(failed.length){console.error('V135 verification failed:',failed.map(([name])=>name).join(', '));process.exit(1)}
console.log('V135 text-control and descriptive-filename checks passed.');
