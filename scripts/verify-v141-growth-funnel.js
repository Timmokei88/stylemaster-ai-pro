const fs=require('fs'),path=require('path');
const root=path.join(__dirname,'..'),server=fs.readFileSync(path.join(root,'server.js'),'utf8'),html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const checks=[
 ['analytics database table',server.includes('CREATE TABLE IF NOT EXISTS acquisition_events')],
 ['public event endpoint',server.includes('app.post("/api/analytics/event"')],
 ['owner-only funnel endpoint',server.includes('app.get("/api/owner/acquisition-funnel",requireModerator')],
 ['analytics rate limiting',server.includes('analyticsLimit')],
 ['sensitive metadata removal',server.includes('["email","password","inviteCode"].includes(key)')],
 ['landing tracking',html.includes("track('landing_view')")],
 ['signup tracking',html.includes("track('signup_completed'")],
 ['first image tracking',html.includes("track('first_generation')")],
 ['checkout tracking',html.includes("track('checkout_clicked')")],
 ['owner funnel dashboard',html.includes('Customer Acquisition Funnel')],
 ['ten-credit offer retained',html.includes('Claim 10 Welcome Credits')&&html.includes('10 one-time welcome credits')]
];
const failed=checks.filter(([,ok])=>!ok);if(failed.length){console.error('V141 verification failed:',failed.map(([name])=>name).join(', '));process.exit(1)}
console.log('V141 growth funnel verified: '+checks.length+' checks passed.');
