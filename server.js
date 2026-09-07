require("dotenv").config();
const express=require("express"), cors=require("cors"), path=require("path"), fs=require("fs"), crypto=require("crypto"), multer=require("multer"), http=require("http");
const {Server}=require("socket.io");
const app=express(), server=http.createServer(app), PORT=Number(process.env.PORT||3000), MESHY_API_KEY=process.env.MESHY_API_KEY;const GEMINI_API_KEY=process.env.GEMINI_API_KEY;
app.post("/api/gemini/generate",async(req,res)=>{if(!GEMINI_API_KEY)return res.status(500).json({error:"Gemini API key is not configured."});try{const r=await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-image:generateContent?key="+encodeURIComponent(GEMINI_API_KEY),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(req.body)});const data=await r.json();return res.status(r.status).json(data);}catch(e){return res.status(500).json({error:e.message||"Gemini request failed."});}});
app.use(cors({origin:true})); app.use(express.json({limit:"50mb"})); app.use("/uploads",express.static(path.join(__dirname,"uploads"))); app.use(express.static(__dirname));
const io=new Server(server,{cors:{origin:"*"}});
const db=path.join(__dirname,"data","community-posts.json");
const read=()=>{try{return JSON.parse(fs.readFileSync(db,"utf8"))}catch{return[]}};
const write=p=>fs.writeFileSync(db,JSON.stringify(p.slice(0,500),null,2));
const chatDb=path.join(__dirname,"data","community-chat.json");
const readChat=()=>{try{return JSON.parse(fs.readFileSync(chatDb,"utf8"))}catch{return[]}};
const writeChat=m=>fs.writeFileSync(chatDb,JSON.stringify(m.slice(-1000),null,2));
const storage=multer.diskStorage({destination:(_,__,cb)=>cb(null,path.join(__dirname,"uploads")),filename:(_,f,cb)=>cb(null,Date.now()+"-"+crypto.randomBytes(5).toString("hex")+path.extname(f.originalname||".jpg"))});
const upload=multer({storage,limits:{fileSize:10*1024*1024},fileFilter:(_,f,cb)=>/^image\//.test(f.mimetype)?cb(null,true):cb(new Error("Images only"))});
app.get("/api/community/posts",(_,res)=>res.json({posts:read().sort((a,b)=>b.ts-a.ts)}));
app.post("/api/community/posts",upload.single("image"),(req,res)=>{
 const name=String(req.body.name||"").trim().slice(0,40), prompt=String(req.body.prompt||"").trim().slice(0,1200);
 if(!name)return res.status(400).json({error:"Display name required."});
 if(!prompt&&!req.file)return res.status(400).json({error:"Add an image or prompt."});
 const p={id:crypto.randomUUID(),name,prompt,imageUrl:req.file?"/uploads/"+req.file.filename:null,likes:0,ts:Date.now(),createdAt:new Date().toLocaleString("en-GB")};
 const posts=read(); posts.unshift(p); write(posts); io.emit("community:new-post",p); res.json({post:p});
});
app.post("/api/community/posts/:id/like",(req,res)=>{const posts=read(),p=posts.find(x=>x.id===req.params.id);if(!p)return res.status(404).json({error:"Not found"});p.likes=(p.likes||0)+1;write(posts);io.emit("community:updated",p);res.json({post:p})});

app.get("/api/community/chat",(_,res)=>res.json({messages:readChat().slice(-200)}));

io.on("connection",(socket)=>{
  io.emit("community:online",io.engine.clientsCount);
  socket.on("community:chat-send",(payload={})=>{
    const name=String(payload.name||"").trim().slice(0,40);
    const message=String(payload.message||"").trim().slice(0,800);
    if(!name||!message)return;
    const item={
      id:crypto.randomUUID(),
      name,
      message,
      ts:Date.now(),
      createdAt:new Date().toLocaleString("en-GB")
    };
    const history=readChat(); history.push(item); writeChat(history);
    io.emit("community:chat-message",item);
  });
  socket.on("disconnect",()=>setTimeout(()=>io.emit("community:online",io.engine.clientsCount),50));
});
function key(req,res,next){if(!MESHY_API_KEY)return res.status(500).json({error:"MESHY_API_KEY is not configured."});next()}
async function meshy(p,o={}){const r=await fetch("https://api.meshy.ai"+p,{...o,headers:{Authorization:"Bearer "+MESHY_API_KEY,"Content-Type":"application/json",...(o.headers||{})}});const d=await r.json().catch(()=>({}));if(!r.ok)throw Object.assign(new Error(d.message||d.error?.message||d.error||"Meshy error"),{status:r.status});return d}
const fail=(res,e)=>res.status(e.status||500).json({error:e.message});

app.post("/api/3d/from-image",key,async(req,res)=>{
  try{
    const image_url=req.body.image_url;
    if(!image_url)return res.status(400).json({error:"image_url is required."});
    const d=await meshy("/openapi/v1/image-to-3d",{
      method:"POST",
      body:JSON.stringify({
        image_url,
        ai_model:"latest",
        ultra_mode:req.body.ultra_mode !== false,
        should_texture:true,
        enable_pbr:req.body.enable_pbr !== false,
        texture_resolution:"2k",
        should_remesh:false,
        image_enhancement:false,
        moderation:true,
        target_formats:["glb","obj","fbx","stl","usdz","3mf"],
        auto_size:true,
        multi_view_thumbnails:true,
        origin_at:"bottom"
      })
    });
    res.json({id:d.result});
  }catch(e){fail(res,e)}
});

app.get("/api/3d/from-image/status/:id",key,async(req,res)=>{
  try{
    res.json(await meshy("/openapi/v1/image-to-3d/"+encodeURIComponent(req.params.id)));
  }catch(e){fail(res,e)}
});

app.post("/api/3d/create",key,async(req,res)=>{try{const images=(req.body.images||[]).slice(0,4);const d=await meshy("/openapi/v1/multi-image-to-3d",{method:"POST",body:JSON.stringify({image_urls:images,ai_model:"latest",ultra_mode:!!req.body.ultra_mode,should_texture:true,enable_pbr:!!req.body.enable_pbr,should_remesh:true,target_formats:["glb","obj","fbx","stl","usdz","3mf"],origin_at:"bottom"})});res.json({id:d.result})}catch(e){fail(res,e)}});
app.get("/api/3d/status/:id",key,async(req,res)=>{try{res.json(await meshy("/openapi/v1/multi-image-to-3d/"+encodeURIComponent(req.params.id)))}catch(e){fail(res,e)}});
app.post("/api/3d/resize",key,async(req,res)=>{try{const d=await meshy("/openapi/v1/resize",{method:"POST",body:JSON.stringify({input_task_id:req.body.input_task_id,resize_height:Number(req.body.height_mm)/1000,origin_at:"bottom"})});res.json({id:d.result})}catch(e){fail(res,e)}});
app.get("/api/3d/resize-status/:id",key,async(req,res)=>{try{res.json(await meshy("/openapi/v1/resize/"+encodeURIComponent(req.params.id)))}catch(e){fail(res,e)}});
app.post("/api/3d/convert",key,async(req,res)=>{try{const d=await meshy("/openapi/v1/convert",{method:"POST",body:JSON.stringify({model_url:req.body.model_url,target_formats:["glb","obj","fbx","stl","usdz","3mf"]})});res.json({id:d.result})}catch(e){fail(res,e)}});
app.get("/api/3d/convert-status/:id",key,async(req,res)=>{try{res.json(await meshy("/openapi/v1/convert/"+encodeURIComponent(req.params.id)))}catch(e){fail(res,e)}});
app.get("/api/health",(_,res)=>res.json({ok:true,community:true,meshy_key_configured:!!MESHY_API_KEY}));
app.get("*",(_,res)=>res.sendFile(path.join(__dirname,"index.html")));
server.listen(PORT,()=>console.log(`StyleMaster V4 running at http://localhost:${PORT}`));
