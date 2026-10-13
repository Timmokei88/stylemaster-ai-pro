(() => {
  const workspace=document.querySelector('.mixo-workspace');
  const toolbar=document.createElement('div');toolbar.className='studio-toolbar';
  toolbar.innerHTML='<strong>Your creative studio</strong><button type="button" data-expand>Full-screen workspace</button><button type="button" data-background>Change background</button><button type="button" data-tour>▶ Narrated tutorial</button>';
  workspace.before(toolbar);
  toolbar.querySelector('[data-expand]').onclick=()=>{const on=document.body.classList.toggle('studio-expanded');toolbar.querySelector('[data-expand]').textContent=on?'Exit full screen':'Full-screen workspace';};
  toolbar.querySelector('[data-background]').onclick=()=>document.getElementById('skinButton').click();
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){document.body.classList.remove('studio-expanded');toolbar.querySelector('[data-expand]').textContent='Full-screen workspace';}});
  const help=document.createElement('dialog');help.className='studio-help';help.innerHTML='<h2></h2><p></p><button type="button" data-listen>▶ Listen to narrator</button><button type="button" data-stop>Stop narration</button><button type="button" data-close>Close</button>';document.body.append(help);
  let activeControl=null;
  function explain(title,copy,control){activeControl=control;help.querySelector('h2').textContent=title;help.querySelector('p').textContent=copy;help.showModal();}
  help.querySelector('[data-close]').onclick=()=>help.close();
  help.addEventListener('close',()=>window.speechSynthesis?.cancel());
  help.querySelector('[data-stop]').onclick=()=>window.speechSynthesis?.cancel();
  help.querySelector('[data-listen]').onclick=()=>{if(window.mixoTutorialLaunchContext){const title=help.querySelector('h2').textContent,copy=help.querySelector('p').textContent;help.close();window.mixoTutorialLaunchContext(title,copy,activeControl?.id?'#'+activeControl.id:'.mixo-workspace');}else if(window.speechSynthesis){speechSynthesis.cancel();speechSynthesis.speak(new SpeechSynthesisUtterance(help.querySelector('p').textContent));}else help.querySelector('p').textContent+=' Audio narration is unavailable in this browser. You can read the instructions here.';};
  const tips={prompt:'Describe the subject, setting, action and mood. Choose AI Image or AI Video before generating.',mixoDirectDialogue:'Write [warm, calm British voice] followed by the words to say. Bracketed directions guide the voice and are never included as spoken dialogue. Put different speakers on separate lines.',mixoVideoDialogue:'Write [deep, excited voice] Hello there! Only Hello there is spoken. Leave blank for no dialogue.',generateBtn:'Review the credit cost, then generate. Progress appears in Your Creation. Videos can take several minutes. Keep this page open.',mixoVideoGenerate:'Animate the selected image. Set movement, dialogue, duration and aspect ratio, then review the credit cost.',mixoDirectDuration:'Choose 5–30 seconds per clip. Longer clips cost more credits. Extend a finished clip to continue the story.',mixoVideoDuration:'Choose 5–30 seconds per clip. Extensions use the last frame of the previous clip.',mixoDirectRatio:'Choose landscape for YouTube or vertical for mobile. Every extension keeps the same shape.',mixoVideoRatio:'Choose the output shape. Clips in one complete video must share this shape.'};
  // One contextual icon per meaningful video setting; existing image help is retained.
  const helpFields = new Set([
    'mixoVideoPrompt','mixoVideoDialogue','mixoDirectDialogue',
    'mixoVideoDuration','mixoDirectDuration','mixoVideoRatio','mixoDirectRatio',
    'mixoVoiceStyle-image','mixoVoiceStyle-direct',
    'mixoVoiceConsent-image','mixoVoiceConsent-direct',
    'mixoOnScreenText-image','mixoOnScreenText-direct',
    'mixoAutoProductCopy-image','mixoAutoProductCopy-direct',
    'mixoProductName-image','mixoProductName-direct',
    'mixoVoiceScript-image','mixoVoiceScript-direct'
  ]);
  function installHelp(){
    workspace.querySelectorAll('input[id],select[id],textarea[id]').forEach(control=>{
      if(!helpFields.has(control.id)||control.dataset.studioHelp)return;
      const label=control.closest('label');if(!label)return;
      if(label.querySelector('.mixo-help-btn,.studio-question'))return;
      control.dataset.studioHelp='1';
      const name=Array.from(label.childNodes).filter(n=>n.nodeType===3).map(n=>n.textContent.trim()).join(' ').trim()||control.placeholder||'Video setting';
      const q=document.createElement('button');q.type='button';q.className='studio-question';q.textContent='?';q.setAttribute('aria-label','Help: '+name);
      q.onclick=e=>{e.preventDefault();e.stopPropagation();let copy=tips[control.id];
        if(!copy&&control.id.startsWith('mixoVoiceScript'))copy='Write one spoken line per row. Put voice directions in square brackets before the words: [deep, excited voice] Hello there! Directions guide performance and are not spoken.';
        if(!copy&&control.id.startsWith('mixoVoiceStyle'))copy='Describe the voice, pitch, accent, emotion and delivery. This is a performance direction, not spoken dialogue.';
        if(!copy&&control.id.startsWith('mixoVoiceConsent'))copy='Enable only when the recorded voice is yours or you have permission from its speaker. A voice sample requires this confirmation.';
        if(!copy&&control.id.startsWith('mixoOnScreenText'))copy='Enter the exact words to display inside the video. This controls visible writing, separately from spoken dialogue.';
        if(!copy&&control.id.startsWith('mixoAutoProductCopy'))copy='Enable to request a short advertising headline for the product. Review the generated wording before publishing.';
        if(!copy&&control.id.startsWith('mixoProductName'))copy='Enter the product or brand name to guide the optional advertising headline.';
        if(!copy)copy=control.placeholder||'Describe the movement, camera and sounds you want, in the order they should happen.';
        explain(name,copy,control);
      };
      label.insertBefore(q,control);
    });
  }
  toolbar.querySelector('[data-tour]').onclick=()=>{const button=document.getElementById('mixoQuickStartLaunch')||document.getElementById('mixoTutorialButton');if(button)button.click();else explain('Create, extend and download','Choose AI Image or AI Video. Describe your idea, adjust the settings, and generate. Watch progress in Your Creation. For speech, use brackets for voice directions and write the spoken words after them. After a video finishes, choose Extend, describe what happens next, and generate again. Select clips in order and choose Complete video to download one joined MP4.',workspace);};
  setTimeout(installHelp,100);new MutationObserver(installHelp).observe(workspace,{childList:true,subtree:true});
  const creation=document.querySelector('.creation');
  // Both generators share the visible preview, beside the description.
  const preview=document.createElement('section');preview.id='studioVideoPreview';preview.setAttribute('aria-label','Generated video');creation.prepend(preview);
  for(const id of ['mixoDirectVideoOutput','mixoVideoOutput']) {
    const output=document.getElementById(id);if(output){const status=document.getElementById(id==='mixoDirectVideoOutput'?'mixoDirectVideoStatus':'mixoVideoStatus');if(status)preview.append(status);preview.append(output);}
  }
  const empty=document.querySelector('#placeholder');if(empty){const copy=empty.children[1];if(copy)copy.textContent='Your generated image or video will appear here.';}
  function showVideoPreview(){
    for(const id of ['placeholder','grid','activeArea','angleArea'])document.getElementById(id)?.classList.add('hidden');
    preview.classList.remove('hidden');
  }
  document.querySelectorAll('[data-mode]').forEach(button=>button.addEventListener('click',()=>{
    preview.classList.toggle('hidden',button.dataset.mode!=='video');
    if(button.dataset.mode==='video'){
      document.getElementById('grid')?.classList.add('hidden');document.getElementById('activeArea')?.classList.add('hidden');
      empty?.classList.toggle('hidden',!!preview.querySelector('video'));
    }
  }));
  const busy=document.createElement('div');busy.className='studio-progress hidden';busy.setAttribute('role','status');busy.setAttribute('aria-live','polite');busy.innerHTML='<span class="studio-spinner"></span><h3>Creating your video…</h3><p>Generating your video, followed by a brief visual review. Reference analysis and review each have a 20-second limit. Video generation itself can still take several minutes.</p><small>No extra paid retry will be started automatically.</small>';creation.prepend(busy);
  const sequences={direct:[],image:[]},pending={direct:null,image:null};let requestBusy=false;
  function renderSequence(kind){if(!sequences[kind].length)return;const output=document.getElementById(kind==='direct'?'mixoDirectVideoOutput':'mixoVideoOutput');output.querySelector('.studio-sequence')?.remove();const box=document.createElement('section');box.className='studio-sequence';const h=document.createElement('h3');h.textContent='Your video sequence';box.append(h);
    sequences[kind].forEach((clip,i)=>{const row=document.createElement('div'),check=document.createElement('input');check.type='checkbox';check.checked=true;check.value=clip.id;const label=document.createElement('label');label.append(check,document.createTextNode(` Clip ${i+1} `));const a=document.createElement('a');a.href=clip.url;a.download=`mixolabs-clip-${i+1}.mp4`;a.textContent='Download clip';const extend=document.createElement('button');extend.type='button';extend.textContent='Extend / edit next scene';extend.onclick=()=>{pending[kind]=clip;document.getElementById(kind==='direct'?'mixoDirectRatio':'mixoVideoRatio').value=clip.aspectRatio;const prompt=document.getElementById(kind==='direct'?'prompt':'mixoVideoPrompt');prompt.value='';prompt.placeholder=`Continue from clip ${i+1}: describe what happens next…`;prompt.focus();h.textContent=`Extending clip ${i+1}. Describe the next scene, then Generate. The original clip stays unchanged.`;};row.append(label,a,extend);box.append(row);});
    const reset=document.createElement('button');reset.type='button';reset.textContent='Start a new sequence';reset.onclick=()=>{pending[kind]=null;sequences[kind]=[];box.remove();};
    const complete=document.createElement('button');complete.type='button';complete.textContent='Complete video — join selected clips';complete.onclick=async()=>{const videoIds=Array.from(box.querySelectorAll('input:checked')).map(x=>x.value);if(videoIds.length<2){h.textContent='Select at least two clips to combine.';return;}complete.disabled=true;h.textContent='Joining your selected clips…';try{const r=await originalFetch('/api/videos/complete',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({videoIds})});if(!r.ok)throw Error((await r.json()).error||'Could not combine clips.');const url=URL.createObjectURL(await r.blob()),a=document.createElement('a');a.href=url;a.download='mixolabs-complete-video.mp4';a.textContent='Download complete video';box.append(a);a.click();setTimeout(()=>URL.revokeObjectURL(url),60000);h.textContent='Complete video ready. Clips are joined in the displayed order.';}catch(e){h.textContent=e.message;}finally{complete.disabled=false;}};box.append(complete,reset);output.append(box);}
  const originalFetch=window.fetch.bind(window);
  window.fetch=async(input,init)=>{if(input!=='/api/videos/generate')return originalFetch(input,init);if(requestBusy)throw Error('A video is already generating. Please wait for it to finish.');const payload=JSON.parse(init.body),kind=document.querySelector('[data-mode="video"].active')?'direct':'image';
    if(pending[kind]){payload.continuationId=pending[kind].id;payload.prompt='Continue naturally from this exact final frame, preserving cast, camera position and scene continuity. '+payload.prompt;}
    if(/\[/.test(payload.dialogue||'')){payload.voiceScript=payload.voiceScript||payload.dialogue;payload.dialogue=payload.dialogue.replace(/\[[^\]]*\]/g,'').trim();}
    requestBusy=true;showVideoPreview();for(const id of ['mixoDirectVideoOutput','mixoDirectVideoStatus','mixoVideoOutput','mixoVideoStatus']){const isDirect=id.startsWith('mixoDirect');document.getElementById(id)?.classList.toggle('hidden',isDirect !== (kind==='direct'));}busy.classList.remove('hidden');creation.setAttribute('aria-busy','true');document.getElementById('loading')?.classList.add('hidden');busy.scrollIntoView({behavior:'smooth',block:'center'});
    try{const response=await originalFetch(input,{...init,body:JSON.stringify(payload)});if(response.ok){const data=await response.clone().json();if(data.video.accuracyWarning||data.video.refunded){setTimeout(()=>{const status=document.getElementById(kind==='direct'?'mixoDirectVideoStatus':'mixoVideoStatus');status.textContent='Preview — accuracy not confirmed. '+(data.video.accuracyWarning||'The visual check did not pass.')+(data.video.refunded?' Generation credits returned.':'');status.setAttribute('role','status');},0);}sequences[kind].push({...data.video,aspectRatio:payload.aspectRatio});pending[kind]=null;setTimeout(()=>{renderSequence(kind);showVideoPreview();preview.scrollIntoView({behavior:'smooth',block:'start'});},0);}else setTimeout(()=>renderSequence(kind),0);return response;}catch(e){setTimeout(()=>renderSequence(kind),0);throw e;}finally{requestBusy=false;busy.classList.add('hidden');creation.removeAttribute('aria-busy');}};
})();
