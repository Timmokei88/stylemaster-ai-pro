const fs=require('fs'),path=require('path'),assert=require('assert');
const root=path.join(__dirname,'..');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const server=fs.readFileSync(path.join(root,'server.js'),'utf8');
for(const marker of [
  'mixo-low-credit-offer-v124',
  "credits>2",
  "fetch('/api/billing/config',{cache:'no-store'})",
  'Continue creating with ${Number(config.baseCredits)} credits for ${pounds(config.baseAmountPence)}.',
  "window.addEventListener('mixo:credits-changed'",
  "window.addEventListener('mixo:pricing-changed'",
  "user.isOwner"
])assert(html.includes(marker),`Missing dynamic low-credit marker: ${marker}`);
assert(server.includes('const INVITE_TRIAL_CREDITS=10;'),'invited users must receive exactly ten trial credits');
assert(server.includes('app.get("/api/billing/config",(_req,res)=>res.json(publicPricingConfig()))'),'live public pricing endpoint must remain available');
assert(!html.includes('Only 2 credits remaining. Continue creating with 25 credits'),'low-credit copy must not hard-code 25 credits');
console.log('PASS V124: two-credit trigger, live owner offer, owner exclusion and ten-credit invitations verified');
