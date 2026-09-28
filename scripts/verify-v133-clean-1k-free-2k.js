const fs=require('fs');
const page=fs.readFileSync('index.html','utf8');
const server=fs.readFileSync('server.js','utf8');
function assert(value,message){if(!value)throw Error(message)}
assert(!/Flash Lite/i.test(page),'customer interface still exposes the provider model name');
assert(page.includes('1K • 1 credit/image'),'clean 1K quality label is missing');
assert(page.includes('genuine 2048-pixel-long-edge download'),'accurate free 2K guidance is missing');
assert(server.includes('targetEdge=2048'),'enhancer does not enforce a 2048-pixel long edge');
assert(server.includes('sharp.kernel.lanczos3'),'high-quality Lanczos enlargement is missing');
assert(server.includes('withMetadata({density:300})'),'300 DPI enhanced download metadata is missing');
assert(page.includes("fetch('/api/images/enhance'"),'free enhancement action is missing');
console.log('V133 clean 1K labels and free 2K output checks passed.');
