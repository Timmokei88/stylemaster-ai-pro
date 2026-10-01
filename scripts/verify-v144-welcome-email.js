const fs=require('fs'),assert=require('assert');
const server=fs.readFileSync('server.js','utf8');
for(const marker of ['async function sendWelcomeEmail','Welcome to MixoLabs','one-time welcome allowance','No card is required to begin','free 2K enhancement','reply_to:PUBLIC_SUPPORT_EMAIL','welcome_email_sent','welcome_email_failed'])assert(server.includes(marker),`Missing welcome-email feature: ${marker}`);
assert(server.includes('sendWelcomeEmail({email,displayName,trialCredits}).catch'),'registration must send the email without making signup depend on delivery');
assert(server.includes('Never share your password or payment-card details by email'),'welcome email must include credential safety guidance');
console.log('V144 transactional welcome-email checks passed.');
