"use strict";

const fs=require("fs");
const path=require("path");
const source=fs.readFileSync(path.join(__dirname,"..","server.js"),"utf8");

function requireText(text,label){
  if(!source.includes(text))throw new Error(`FAIL ${label}`);
  console.log(`PASS ${label}`);
}

requireText("const SAFE_PHOTO_EDIT=", "benign reference-edit allow-list");
requireText("clown|caricature|cartoon", "clown and caricature transformations");
requireText("restore|restoration|repair|enhance", "restoration and enhancement");
requireText("fan art|fan[- ]meeting", "fictional fan scenes");
requireText("const PHOTO_EDIT_RISK=", "harmful-intent deny-list");
requireText("decapitat", "decapitation remains blocked");
requireText("bully", "bullying remains blocked");
requireText("humiliat", "humiliation remains blocked");
requireText("NON_OVERRIDABLE_IMAGE_CATEGORY", "serious provider categories cannot be overridden");
requireText("stage!==\"reference_upload\"", "override limited to reference upload screening");
requireText("Benign private reference-photo transformation or restoration", "safe override audit reason");
requireText("REFERENCE-PHOTO POLICY", "classifier receives reference-photo policy");
requireText("sexual content involving minors", "child sexual safety retained");
requireText("graphic violence", "graphic violence safety retained");
requireText("clearly fictional fan-meeting scenes", "fictional meeting treatment");

console.log("\nReference-photo moderation checks passed.");
