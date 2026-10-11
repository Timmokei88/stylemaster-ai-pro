const fs=require('fs'),server=fs.readFileSync('server.js','utf8');
const required=['delivery:"uri"','store:true','["queued","in_progress"]','Your credits were automatically returned'];
const forbidden=['delivery:"uri"},background:false,store:false'];
const missing=required.filter(v=>!server.includes(v)),present=forbidden.filter(v=>server.includes(v));if(missing.length||present.length){console.error('V157 verification failed:',{missing,present});process.exit(1)}console.log('PASS V157: URI video delivery uses required persistent provider interaction and retains polling/refunds');
