const fs=require("fs"),path=require("path"),root=path.resolve(__dirname,"..");
const read=name=>fs.readFileSync(path.join(root,name),"utf8"),server=read("server.js"),html=read("index.html"),pkg=JSON.parse(read("package.json"));
const checks=[
 ["server entry point",pkg.scripts?.start==="node server.js"],
 ["durable generation jobs",server.includes("CREATE TABLE IF NOT EXISTS generation_jobs")],
 ["stale-job refunds",server.includes("reconcileStaleGenerationJobs")],
 ["generation recovery API",server.includes('/api/generations/recent')],
 ["Stripe webhook verification",server.includes("constructEvent(req.body")],
 ["private R2 generation recovery",server.includes("generations/${userId}/${key}")],
 ["AI support chat",server.includes('/api/support/chat')],
 ["automated support email",server.includes('/api/support/email/inbound')],
 ["support escalation",server.includes("support_ticket_escalated")],
 ["operations status",server.includes('/api/ops/status')],
 ["health endpoint",server.includes('/api/health')],
 ["reference-image moderation",server.includes('stage:"reference_upload"')],
 ["benign child toy transformations",server.includes("turn my son into a toy")&&server.includes("toy|toy figure|toy character")],
 ["benign historical child portraits",server.includes("BENIGN_CHILD_HISTORY")&&server.includes("historically accurate, wholesome period portrait")],
 ["benign generation default allow",server.includes('stage==="generation"||stage==="reference_upload"&&inconclusive')],
 ["provider safety refunds",server.includes('providerSafety?"PROVIDER_SAFETY"')&&server.includes("credits were automatically returned")],
 ["one-credit Flash Lite generation",server.includes('const COSTS={"1K":1}')&&server.includes('GENERATION_MODEL="gemini-3.1-flash-lite-image"')&&!server.includes('HIGH_RES_IMAGE_MODEL=')],
 ["responsive image enhancer",html.includes('mixo-free-enhancer-v106')&&html.includes("fetch('/api/images/enhance'")&&server.includes('sharp(image.buffer')&&html.includes('<b>2K Enhance</b>Free')&&html.includes('300 DPI')],
 ["lighting and shadow coherence",html.includes('cast-shadow direction, length, softness, contact shadows')],
 ["protected prompt normalization",server.includes("providerCompatiblePrompt")&&server.includes("cinematic 3D family-animation toy")],
 ["obsolete scroll controllers disabled",html.includes("V102: obsolete synchronised animation disabled")&&html.includes("V102: obsolete wheel interception caused slow and jumping")],
 ["one-image source default",html.includes('<option value="1" selected>1 Image</option>')&&!html.includes('<option value="6" selected>6 Images</option>')],
 ["one-image startup default",html.includes('mixo-one-image-default-v103')&&html.includes("variations.value='1'")],
 ["retired angle API blocked",server.includes("Angle sheets have been retired")],
 ["3D provider removed",!server.includes("MESHY_API_KEY")&&!html.includes("Create 3D Model")],
 ["terms include multi-view limitation",html.includes("does not guarantee that front, back, left, right")],
 ["ordinary generation still available",html.includes('id="generateBtn"')&&html.includes('/api/gemini/generate')],
 ["stale angle control removed",!html.includes('id="generateChosenAnglesBtn"')],
 ["support address templated",html.includes("{{SUPPORT_EMAIL}}")],
];
let failed=0;for(const [name,ok] of checks){console.log(`${ok?"PASS":"FAIL"} ${name}`);if(!ok)failed++}
if(failed){console.error(`\n${failed} launch verification check(s) failed.`);process.exit(1)}
console.log(`\nAll ${checks.length} launch verification checks passed.`);
