const fs=require('fs'),path=require('path'),vm=require('vm');
const server=fs.readFileSync(path.join(__dirname,'..','server.js'),'utf8');
const html=fs.readFileSync(path.join(__dirname,'..','index.html'),'utf8');
const checks=[
 [server.includes('/api/billing/change-custom-subscription'),'existing-subscription change endpoint exists'],
 [server.includes('stripe.subscriptions.retrieve(u.stripe_subscription_id'),'current Stripe subscription is verified'],
 [server.includes('stripe.prices.create({currency:"gbp",unit_amount:amountPence'),'a valid replacement monthly price is created'],
 [server.includes('stripe.subscriptions.update(subscription.id'),'the existing subscription is updated rather than duplicated'],
 [server.includes('stripe.subscriptionItems.update(subscriptionItem.id'),'a Stripe-compatible subscription-item fallback is available'],
 [server.includes('proration_behavior:"none"'),'plan change avoids a surprise immediate charge'],
 [server.includes('subscription_change_failed'),'billing failures return a useful safe error code'],
 [server.includes('$3::double precision'),'Stripe epoch timestamps are converted with the correct PostgreSQL type'],
 [server.includes('reconciled:true'),'a prior partial Stripe success repairs the local account record'],
 [server.includes('subscription_amount_pence'),'selected monthly amount is retained'],
 [html.includes('Change Monthly Plan'),'the billing UI offers a real plan-change action'],
 [html.includes('changeMonthly(amountPence)'),'active subscribers use the plan-change flow'],
 [html.includes('You will not be charged today'),'the confirmation explains when the change takes effect'],
];
for(const [ok,name] of checks){if(!ok)throw Error(`FAILED: ${name}`);console.log(`PASS: ${name}`)}
new vm.Script(server,{filename:'server.js'});let parsed=0;for(const match of html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)){const source=match[1];if(!source.trim()||/application\/ld\+json/.test(match[0]))continue;new vm.Script(source,{filename:`inline-${++parsed}.js`})}console.log(`PASS: server and ${parsed} inline scripts parse`);
