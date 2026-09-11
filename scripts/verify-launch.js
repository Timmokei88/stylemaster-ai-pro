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
