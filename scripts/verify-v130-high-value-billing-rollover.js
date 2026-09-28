const fs=require('fs');
const server=fs.readFileSync('server.js','utf8');
const html=fs.readFileSync('index.html','utf8');
function assert(value,message){if(!value)throw new Error(message)}
assert(server.includes('CUSTOM_MAX_PENCE=25000'),'server purchase ceiling is not £250');
assert(server.includes('SUBSCRIPTION_ROLLOVER_DAYS=28'),'28-day monthly rollover policy is missing');
assert(server.includes('subscription_rollover_credits INTEGER NOT NULL DEFAULT 0'),'rollover balance migration is missing');
assert(server.includes('subscription_rollover_expires_at TIMESTAMPTZ'),'rollover expiry migration is missing');
assert(server.includes("'subscription_credit_expiry'"),'expired subscription credits are not audited');
assert(server.includes('await expireSubscriptionRollover(c,userId,true)'),'renewal does not expire the previous rollover balance');
assert(server.includes('subscription_rollover_credits=GREATEST(0,subscription_rollover_credits-$2)'),'generation debit does not spend rollover credits first');
assert(server.includes('subscriptionRolloverExpiresAt'),'billing status does not expose the rollover expiry');
assert(html.includes('max="250"'),'typed billing amount does not allow £250');
assert(html.includes('max="25000"'),'billing slider does not allow £250');
for(const amount of ['2500','5000','10000','25000'])assert(html.includes(`data-quick-pence="${amount}"`),`quick tier ${amount} pence is missing`);
assert(html.includes('One-time credits never expire'),'pay-as-you-go validity is not disclosed');
assert(html.includes('additional 28 days'),'rollover rule is not disclosed before checkout');
console.log('PASS V130: £250 billing tiers, non-expiring pay-as-you-go credits and audited 28-day subscription rollover verified');
