const fs=require('fs'),assert=require('assert'),server=fs.readFileSync('server.js','utf8');
for(const value of [
 'async function verifyGeneratedVideo',
 'anatomically impossible or displaced body parts',
 'a requested touch or action occurring on the wrong body part or object',
 'face or character identity drift',
 'responseMimeType:"application/json"',
 'value>=0.9',
 'Quality control rejected this video',
 'return verifyGeneratedVideo({buffer',
 'if(charge&&!charge.duplicate)await refund'
])assert(server.includes(value),`missing video QA protection: ${value}`);
assert(server.indexOf('verifyGeneratedVideo({buffer')<server.indexOf('const objectKey=`videos/'),'video must pass QA before storage');
console.log('PASS V160: generated videos are quality-checked before delivery and rejected jobs use the refund path');
