const fs = require("fs");
const html = fs.readFileSync(require("path").join(__dirname, "..", "index.html"), "utf8");

const checks = [
  [html.includes("V77: independently scrollable desktop settings column"), "V77 desktop settings styles are present"],
  [html.includes("@media(min-width:981px)"), "independent scrolling is desktop-only"],
  [html.includes("overflow-y:auto;overscroll-behavior:contain;scrollbar-gutter:stable"), "left panel has contained scrolling and a stable gutter"],
  [html.includes("@media(max-width:980px){.mixo-settings{max-height:none;overflow:visible"), "mobile keeps natural page scrolling"],
  [html.includes('settingsPanel.appendChild(settingsGenerate)'), "settings Generate button is moved below all left-side controls"],
  [html.includes('["generateBtn","generateAdvancedBtn"]'), "both Generate labels remain synchronized"],
  [html.includes('document.getElementById("generateAdvancedBtn")?.addEventListener("click",()=>document.getElementById("generateBtn")?.click())'), "left Generate button uses the established generation workflow"],
];

for (const [ok, message] of checks) {
  if (!ok) throw new Error(`FAILED: ${message}`);
  console.log(`PASS: ${message}`);
}

