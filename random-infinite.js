(() => {
"use strict";
const subjects=["a tiny fantasy creature","a mysterious forest guardian","an original robot companion","a luxury perfume bottle","an exotic concept vehicle","a whimsical woodland character","a dramatic wild animal","an original collectible figure","an enchanted cottage","a surreal botanical sculpture","a premium sneaker concept","a mythical sea creature","an ancient mechanical artifact","a futuristic explorer","a magical household object","an alien plant species","a miniature fantasy village","an elaborate ceremonial mask","a fantastical bird species","an unusual underwater character","a futuristic fashion accessory","an enchanted musical instrument","a bizarre friendly monster","a celestial animal","a mysterious desert creature","an original superhero character","a steampunk invention","a futuristic piece of furniture","a magical food creation","an impossible architectural structure","a fantasy royal character","an unusual insect creature","a cosmic explorer","a living crystal creature","an imaginative toy design","a forgotten ancient machine","a supernatural guardian","an original cartoon mascot","a futuristic racing machine","a fantasy merchant character","a strange deep-sea organism","an enchanted piece of jewellery","a tiny mechanical civilization","an original dragon species","a luxury watch concept","a futuristic helmet design","a magical floating island","an imaginative pet creature"];
const traits=["covered in intricate engraved details","made from translucent crystal and polished metal","with expressive oversized features","constructed from weathered natural materials","decorated with glowing geometric patterns","featuring delicate handcrafted ornamentation","with unusual asymmetrical proportions","combining organic and mechanical anatomy","with elaborate layered textures","featuring elegant minimalist geometry","with tiny functional-looking mechanisms","decorated with botanical motifs","with iridescent surfaces","featuring dramatic sculptural forms","with intricate woven details","covered in mysterious ancient symbols","with soft tactile materials","featuring polished luxury finishes","with unusual translucent elements","with extraordinary miniature details","with bold aerodynamic shapes","with delicate luminous markings","with unexpected playful proportions","with sophisticated futuristic detailing"];
const actions=["standing confidently","caught in a quiet contemplative moment","midway through an adventurous journey","interacting with its environment","displayed as a prized discovery","emerging dramatically from the scene","resting peacefully","moving dynamically through the environment","posed like a premium collector piece","discovering something unexpected","looking directly toward the viewer","shown in a natural candid moment","surrounded by subtle movement","presented as an extraordinary rare specimen","caught at the peak of an expressive action","carefully examining a mysterious object"];
const environments=["inside an ancient overgrown temple","in a misty enchanted forest","on a distant alien planet","inside a pristine luxury studio","among enormous glowing mushrooms","on a windswept mountain ridge","inside a futuristic city at night","within a forgotten underground chamber","beside a tranquil crystal lake","inside an eccentric inventor's workshop","on a dramatic black volcanic landscape","among floating islands above the clouds","inside an elegant futuristic interior","within a colourful miniature world","on an untouched tropical shoreline","inside an enormous abandoned greenhouse","beneath a spectacular star-filled sky","within an atmospheric medieval street","inside a surreal endless library","on a frozen otherworldly landscape","within a bioluminescent jungle","inside an extravagant museum display","among gigantic wildflowers","inside a retro-futuristic space station","within an atmospheric rain-soaked city","on a vast golden desert","inside an enchanted castle chamber","within a strange underwater landscape","on a peaceful countryside morning","inside an impossible geometric environment"];
const lighting=["soft cinematic sunrise lighting","dramatic moonlight","warm golden-hour illumination","moody volumetric lighting","clean premium studio lighting","ethereal glowing ambient light","high-contrast cinematic lighting","soft diffused window light","colourful reflected neon light","mysterious rim lighting","gentle overcast natural light","dramatic shafts of sunlight","subtle bioluminescent illumination","luxurious editorial lighting","atmospheric candlelight","crisp bright commercial lighting"];
const cameras=["cinematic eye-level composition","dramatic low-angle perspective","intimate close-up composition","wide environmental composition","premium product-photography composition","carefully balanced editorial framing","dynamic three-quarter perspective","shallow-depth-of-field portrait composition","high-detail macro perspective","symmetrical centred composition","documentary-style candid framing","epic wide-angle composition"];
const moods=["mysterious and captivating","joyful and charming","majestic and powerful","peaceful and dreamlike","luxurious and sophisticated","adventurous and cinematic","strange and fascinating","warm and nostalgic","playful and imaginative","darkly atmospheric","elegant and serene","bold and energetic","magical and uplifting","otherworldly and awe-inspiring","quirky and lovable","timeless and refined"];
const details=["tiny realistic surface imperfections","extremely fine material texture","subtle signs of age and history","precise handcrafted detailing","convincing reflections and surface response","rich tactile material definition","beautiful micro-details visible on close inspection","carefully designed functional details","subtle atmospheric particles","exceptionally refined edges and forms","natural variation throughout every surface","intricate secondary details that reward close viewing"];
const pick=a=>{const v=new Uint32Array(1);crypto.getRandomValues(v);return a[v[0]%a.length]};
const historyKey="mixolabs_context_random_ideas_v1";
const getHistory=()=>{try{return new Set(JSON.parse(localStorage.getItem(historyKey)||"[]"))}catch{return new Set()}};
const saveHistory=h=>{try{localStorage.setItem(historyKey,JSON.stringify([...h].slice(-10000)))}catch{}};

function createIdea(base,category,style,theme){
 const history=getHistory();
 for(let attempt=0;attempt<1000;attempt++){
   const core=base || pick(subjects);
   const parts=[
     core,
     category?`category direction: ${category}`:"",
     style?`visual style: ${style}`:"",
     theme?`theme and atmosphere: ${theme}`:"",
     pick(traits),pick(actions),pick(environments),pick(lighting),pick(cameras),pick(moods),pick(details)
   ].filter(Boolean);
   const fingerprint=parts.join("|").toLowerCase();
   if(!history.has(fingerprint)){
     history.add(fingerprint);saveHistory(history);
     const lead=base?`Keep "${base}" as the core subject and action. Creatively expand it without replacing or contradicting it.`:"Create this original concept.";
     return `${lead} ${parts.join(", ")}, distinctive original composition, imaginative professional design`;
   }
 }
 return `${base||pick(subjects)}, ${category||""} ${style||""} ${theme||""}, ${pick(environments)}, ${pick(lighting)}, fresh original interpretation`;
}

window.addEventListener("load",()=>{
 const oldButton=document.getElementById("randomBtn"), prompt=document.getElementById("prompt");
 if(!oldButton||!prompt)return;
 const newButton=oldButton.cloneNode(true);oldButton.parentNode.replaceChild(newButton,oldButton);
 newButton.addEventListener("click",()=>{
   const base=prompt.value.trim();
   const category=document.getElementById("categorySelect")?.value||"";
   const style=document.getElementById("styleSelect")?.value||"";
   const theme=document.getElementById("themeSelect")?.value||"";
   prompt.value=createIdea(base,category,style,theme);
   prompt.dispatchEvent(new Event("input",{bubbles:true}));
 });
});

window.addEventListener("load",()=>{
 const angleButton=document.getElementById("generateChosenAnglesBtn");
 if(angleButton)angleButton.closest("div[style*='margin-top:13px']")?.remove();
 document.getElementById("angleArea")?.remove();
 document.querySelectorAll(".credit-rate").forEach(item=>{if(/angle sheet/i.test(item.textContent))item.remove()});
 const scrub=()=>{
  document.querySelectorAll("[data-support-question]").forEach(item=>{if(/angle[ -]?sheet/i.test(item.textContent+" "+item.dataset.supportQuestion))item.remove()});
  document.querySelectorAll(".mixo-faq-item").forEach(item=>{const summary=item.querySelector("summary");if(/angle[ -]?sheet/i.test(summary?.textContent||""))item.remove();else if(/angle[ -]?sheet/i.test(item.textContent)){const body=item.querySelector("div");if(body)body.textContent="Select the image you want from the results. MixoLabs opens the larger Active Masterpiece view with download, fullscreen, gallery and favourite controls."}});
  document.querySelectorAll(".mixo-support-box").forEach(item=>{if(/angle[ -]?sheet/i.test(item.textContent)){const copy=item.querySelector("span");if(copy)copy.textContent="Help with prompts, reference images, output quality and variations."}});
  document.querySelectorAll(".mixo-tutorial-chapter").forEach(item=>{if(/Results & Angle Sheets/i.test(item.textContent)){const title=item.querySelector("b"),copy=item.querySelector("small");if(title)title.textContent="5. Results & Downloads";if(copy)copy.textContent="Select, download, view fullscreen, save and favourite your creations."}});
  document.querySelectorAll(".mixo-tutorial-card").forEach(item=>{if(/angle[ -]?sheet/i.test(item.textContent))item.remove()});
  const tourTitle=document.getElementById("mixoTourTitle"),tourText=document.getElementById("mixoTourText");
  if(/angle[ -]?sheet/i.test((tourTitle?.textContent||"")+" "+(tourText?.textContent||""))){if(tourTitle)tourTitle.textContent="Results & Downloads";if(tourText)tourText.textContent="Select a result to download it, view it fullscreen, save it to your gallery or add it to favourites."}
 };
 scrub();new MutationObserver(scrub).observe(document.body,{childList:true,subtree:true});
});
})();
