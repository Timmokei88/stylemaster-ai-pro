const fs=require('fs');
const html=fs.readFileSync('index.html','utf8');
const required=[
 'id="editAspectRatioSelect"','value="16:9">16:9 Widescreen','id="editCategorySelect"',
 'id="editStyleSelect"','id="editThemeSelect"','id="editBackgroundSelect"',
 'REFORMAT / OUTPAINT','Never stretch or squash the image','options.ratio,"1K","image-edit"',
 'category:options.category||parentMeta.category','background:options.background==="keep"'
];
const missing=required.filter(item=>!html.includes(item));
if(missing.length){console.error('V148 advanced image editing verification failed:',missing);process.exit(1)}
console.log('V148 advanced image editing verification passed.');
