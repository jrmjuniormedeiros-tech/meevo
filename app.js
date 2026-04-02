
function toggleGroup(group, single=true){
let buttons=document.querySelectorAll('#'+group+' button')
buttons.forEach(b=>{
b.onclick=()=>{
if(single){
buttons.forEach(x=>x.classList.remove('active'))
b.classList.add('active')
}else{
b.classList.toggle('active')
}
if(group==='hidratacao'){
document.getElementById('desidratacao_grau').classList.toggle('hidden', b.innerText!=='Desidratado')
}
if(group==='consciencia'){
document.getElementById('glasgow').classList.toggle('hidden', b.innerText==='Sedado')
}
}
})
}

['estado','hidratacao','consciencia','g_ao','g_rv','g_rm'].forEach(g=>toggleGroup(g))

function gerar(){
let texto=""

let estado=document.querySelector('#estado .active')?.innerText||""
let hidr=document.querySelector('#hidratacao .active')?.innerText||""
let grau=document.querySelector('#desidratacao_grau .active')?.innerText||""

if(hidr==="Desidratado" && grau){
hidr+=` (${grau}/4+)`
}

texto+="GERAL: "+[estado,hidr].filter(Boolean).join(", ")+".\n"

let consc=document.querySelector('#consciencia .active')?.innerText||""

let ao=document.querySelector('#g_ao .active')?.innerText||0
let rv=document.querySelector('#g_rv .active')?.innerText||0
let rm=document.querySelector('#g_rm .active')?.innerText||0

let soma=Number(ao)+Number(rv)+Number(rm)

if(consc && consc!=="Sedado"){
texto+="AN: "+consc+". ECG "+soma+" (AO "+ao+" RV "+rv+" RM "+rm+")."
}else{
texto+="AN: "+consc+"."
}

document.getElementById('saida').innerText=texto
}
