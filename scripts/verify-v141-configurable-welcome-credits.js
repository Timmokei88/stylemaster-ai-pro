const fs=require('fs'),assert=require('assert');
const server=fs.readFileSync('server.js','utf8'),html=fs.readFileSync('index.html','utf8');
for(const marker of [
  "VALUES('welcome_credits','{\"credits\":10}'::jsonb)",
  "platform_settings WHERE key='welcome_credits'",
  'const welcomeCredits=()=>welcomeCreditsConfig.credits',
  'await Promise.all([loadEarlyAccessConfig(),loadWelcomeCreditsConfig()])',
  'const trialCredits=welcomeCredits()',
  'if(trialCredits>0)',
  'configuredAllowance:trialCredits',
  'app.put("/api/owner/welcome-credits",requireModerator,billingLimit',
  'Number.isInteger(credits)||credits<0||credits>100',
  'welcome_credits_changed',
  'appliesTo:"future_registrations_only"'
])assert(server.includes(marker),`Missing configurable welcome-credit safeguard: ${marker}`);
for(const marker of [
  'id="mixoOwnerWelcomeCredits"',
  'min="0" max="100" step="1"',
  'Save Welcome Credits',
  "'/api/owner/welcome-credits'",
  'Future new accounts will receive ${d.credits} one-time welcome credits.',
  'Existing balances were not changed.'
])assert(html.includes(marker),`Missing owner welcome-credit control: ${marker}`);
assert(!server.includes('const INVITE_TRIAL_CREDITS='),'signup allowance must not remain hard-coded');
console.log('PASS V141: owner-controlled 0–100 one-time welcome credits apply only to future registrations');
