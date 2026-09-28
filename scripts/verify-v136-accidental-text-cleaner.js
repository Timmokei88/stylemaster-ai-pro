const fs=require('fs');
const path=require('path');
const html=fs.readFileSync(path.resolve(__dirname,'..','index.html'),'utf8');
const checks=[
 ['free text-cleaner launch',html.includes('Clean Accidental Text — Free')],
 ['local automatic detector',html.includes('function heuristicScan()')&&html.includes("'TextDetector' in window")],
 ['manual unwanted-text brush',html.includes('Mark Unwanted')],
 ['intentional-text protection brush',html.includes('Protect / Restore')],
 ['local repair',html.includes('function repair()')&&html.includes('expandedMask()')],
 ['reversible reset',html.includes('Original restored. Nothing has been permanently changed.')],
 ['before and after comparison',html.includes('mixo-text-cleaner-reveal')],
 ['descriptive cleaned filename',html.includes("descriptiveDownloadName('cleaned','png')")],
 ['no external image request',!html.includes('/api/images/text-clean')],
 ['narrated tutorial entry',html.includes('Accidental Text Cleaner')&&html.includes('Automatic scan proposes text-like regions')]
];
const failed=checks.filter(([,ok])=>!ok);if(failed.length){console.error('V136 verification failed:',failed.map(x=>x[0]).join(', '));process.exit(1)}
console.log('V136 accidental-text-cleaner checks passed.');
