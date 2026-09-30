const fs=require('fs'),assert=require('assert');
const server=fs.readFileSync(require('path').join(__dirname,'..','server.js'),'utf8');
const html=fs.readFileSync(require('path').join(__dirname,'..','index.html'),'utf8');
for(const text of [
 'CREATE TABLE IF NOT EXISTS password_reset_tokens',
 'app.post("/api/auth/forgot-password"',
 'app.post("/api/auth/reset-password"',
 'crypto.randomBytes(32).toString("base64url")',
 'crypto.createHash("sha256").update(token)',
 "NOW()+INTERVAL '30 minutes'",
 'used_at IS NULL AND expires_at>NOW()',
 'bcrypt.hash(password,12)',
 'DELETE FROM user_sessions',
 'password_recovery_configured'
])assert(server.includes(text),`Missing secure recovery server feature: ${text}`);
for(const text of [
 'id="mixoForgotPasswordButton"',
 'id="mixoForgotPasswordForm"',
 'id="mixoResetPasswordForm"',
 'Forgot which email you used?',
 'new URLSearchParams(location.search).get("reset")',
 'history.replaceState',
 'The two passwords do not match.',
 '/api/auth/forgot-password',
 '/api/auth/reset-password'
])assert(html.includes(text),`Missing recovery interface feature: ${text}`);
assert(!html.includes('Forgot username?'),'The product uses email login and must not suggest a nonexistent username credential.');
console.log('V140 account recovery verification passed.');
