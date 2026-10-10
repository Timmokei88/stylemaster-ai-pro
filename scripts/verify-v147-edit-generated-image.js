const fs=require('fs');
const html=fs.readFileSync('index.html','utf8');
const checks=[
 ['edit panel',html.includes('id="generatedImageEditPrompt"')],
 ['one-credit edit button',html.includes('id="editGeneratedImageBtn"')&&html.includes('Edit Image • Cost: 1 Credit')],
 ['selected image is automatic reference',html.includes('imageSourceToDataURL(parentUrl)')&&html.includes('callGemini(editPrompt,[reference]')],
 ['selective edit lock',html.includes('Change only what the user explicitly requested')&&html.includes('Preserve every unrequested detail')],
 ['background replacement isolation',html.includes('replace only the background and preserve the complete foreground subject')],
 ['original version retained',html.includes('parentUrl')&&html.includes('returnToEditParentBtn')],
 ['edited result retained in result grid',html.includes('addEditedResultCard(url,meta)')],
 ['explicit charge confirmation',html.includes('Create one edited version for 1 credit?')],
 ['edit tutorial',html.includes('Edit This Generated Image')&&html.includes('one-credit cost')],
 ['mobile responsive actions',html.includes('.mixo-edit-image-actions{display:flex')]
];
let failed=0;for(const [name,ok] of checks){console.log(`${ok?'PASS':'FAIL'} ${name}`);if(!ok)failed++}
if(failed)process.exit(1);
