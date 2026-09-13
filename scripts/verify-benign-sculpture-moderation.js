const fs=require('fs'),path=require('path');
const server=fs.readFileSync(path.join(__dirname,'..','server.js'),'utf8');
const BENIGN_SCULPTURE_ART=/\b(?:cast[- ]resin|resin (?:sculpture|model|figurine|collectible)|physical resin|sculpted (?:figure|figurine|model)|display (?:plinth|base)|product photography)\b/i;
const SCULPTURE_OVERRIDE_RISK=/\b(?:nude|naked|sex|sexual|porn|rape|decapitat(?:e|ed|ion)|behead(?:ed|ing)?|dismember(?:ed|ment)?|torture|murder|kill(?:ed|ing)?|execution|gore|gory|graphic blood|terrorist|terrorism|hate crime|racial abuse|dehumanis(?:e|ing|ation)|humiliat(?:e|ed|ing|ion)|degrad(?:e|ed|ing|ation)|bully(?:ing)?|fraud|malware|blackmail)\b/i;
const suppliedPrompt='A physical cast-resin sculpture of a regal fantasy sovereign, meticulously crafted as a rare botanical specimen. The figure features intricate sculpted details where flowing garments merge seamlessly with delicate ivy, blooming peonies, and gilded thorns. The surface has a premium matte resin finish with subtle pearlescent highlights. Presented on a polished display plinth inside a grand, sun-drenched enchanted castle chamber with ancient stone architecture. Soft, gentle overcast natural light filters through arched windows, illuminating floating atmospheric dust motes. High-end product photography composition, sharp focus on tactile textures, whimsical and imaginative aesthetic, cinematic depth of field, professional studio lighting, 8k resolution, elegant, ethereal, and ornate craftsmanship.';
const checks=[
 [BENIGN_SCULPTURE_ART.test(suppliedPrompt), 'the reported resin prompt is recognised as benign sculpture art'],
 [!SCULPTURE_OVERRIDE_RISK.test(suppliedPrompt), 'the reported prompt contains no prohibited-risk wording'],
 [server.includes('function safeBenignSculptureOverride'), 'narrow sculpture false-positive override exists'],
 [server.includes('category:"benign_sculpture_art"'), 'safe sculpture override returns allow'],
 [server.indexOf('safeBenignSculptureOverride')<server.indexOf('safeGenericRoleOverride(text,supplied,stage,ai)'), 'sculpture override runs before generic-role handling'],
 [server.includes('SCULPTURE_OVERRIDE_RISK.test(value)'), 'unsafe sculpture prompts cannot use the override'],
];
for(const [ok,name] of checks){if(!ok)throw Error(`FAILED: ${name}`);console.log(`PASS: ${name}`)}
