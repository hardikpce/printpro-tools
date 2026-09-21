const modal=document.getElementById('toolModal');
const content=document.getElementById('modalContent');

function toggleMenu(){document.getElementById('mobileMenu').classList.toggle('show')}
function closeModal(){modal.classList.remove('show')}
modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});

function useTool(name){
  let extra='';
  if(name==='Resume Maker' || name==='Biodata Maker'){
    extra=`<div class="form"><label>Your name</label><input placeholder="Full name"><label>Phone</label><input placeholder="Phone number"><label>Email</label><input placeholder="Email address"><button class="primary" onclick="alert('Template editor can be connected here.')">Create ${name}</button></div>`;
  } else {
    extra=`<div class="upload"><div style="font-size:42px">📁</div><h3>Select your file</h3><p>Choose an image or document from your device.</p><input type="file" id="fileInput" accept="image/*,.pdf" onchange="previewFile(event)"><div id="preview"></div></div><p class="muted" style="margin-top:14px">This starter version provides the interface. Connect the actual processing module for ${name} next.</p>`;
  }
  content.innerHTML=`<h2>${name}</h2>${extra}`;
  modal.classList.add('show');
}
function previewFile(e){
  const f=e.target.files[0]; if(!f)return;
  const box=document.getElementById('preview');
  if(f.type.startsWith('image/')){
    const r=new FileReader(); r.onload=()=>box.innerHTML=`<img class="preview" src="${r.result}" alt="Preview">`; r.readAsDataURL(f);
  }else box.innerHTML=`<div style="margin-top:15px;padding:14px;background:#f4f6fa;border-radius:10px">Selected: <b>${f.name}</b></div>`;
}
function openUpload(){useTool('Photo Resize')}
function openLogin(){content.innerHTML=`<h2>Login</h2><div class="form"><input placeholder="Email"><input type="password" placeholder="Password"><button class="primary" onclick="alert('Connect authentication here.')">Login</button></div>`;modal.classList.add('show')}
function openJoin(){content.innerHTML=`<h2>Create your free account</h2><div class="form"><input placeholder="Full name"><input placeholder="Email"><input type="password" placeholder="Password"><button class="primary" onclick="alert('Connect authentication/database here.')">Create Account</button></div>`;modal.classList.add('show')}
function filterTools(){
  const q=document.getElementById('search').value.toLowerCase().trim();
  let count=0;
  document.querySelectorAll('.tool').forEach(t=>{const ok=!q||t.dataset.name.includes(q);t.style.display=ok?'block':'none';if(ok)count++});
  document.getElementById('toolCount').textContent=count+' tools';
}
document.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();document.getElementById('search').focus()}});
