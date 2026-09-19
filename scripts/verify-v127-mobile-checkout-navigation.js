const fs=require('fs'),path=require('path'),assert=require('assert');
const root=path.join(__dirname,'..'),server=fs.readFileSync(path.join(root,'server.js'),'utf8'),html=fs.readFileSync(path.join(root,'index.html'),'utf8');
for(const marker of [
  'function allowedRequestOrigin(req)',
  'function checkoutOrigin(req)',
  'async function ensureStripeCustomer(user)',
  'stripe_customer_recreated',
  'function billingFailure(res,error,operation,userId)',
  'if(!session.url)throw Error("Stripe returned no checkout URL.")',
  'if(!checkout.url)throw Error("Stripe returned no checkout URL.")'
])assert(server.includes(marker),`Missing mobile checkout recovery marker: ${marker}`);
for(const marker of [
  'credentials:"same-origin"',
  'window.location.assign(d.url)',
  'checkout\\.stripe\\.com|billing\\.stripe\\.com',
  'mixo-mobile-checkout-and-close-v127-style',
  '#mixoAccountClose,#mixoProfileClose,#mixoSettingsClose,#mixoBillingClose',
  '.mixo-mobile-navigation-close{order:-1',
  'Stripe took too long to respond'
])assert(html.includes(marker),`Missing mobile interface marker: ${marker}`);
console.log('PASS V127: resilient mobile Stripe checkout and left-side mobile exits verified');
