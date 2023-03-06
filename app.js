var titulo = document.getElementById("titulo")
var categoria = document.getElementById("categoria")
var conteudo=document.getElementById("conteudo")
var cadastro=document.getElementById("cadastro")
var conteiner=document.getElementById("conteiner")
var msg = document.getElementById("msg")
var tit=''
var categ=''
var conteud=''
var procura=''
var tit_menu=''
var categ_menu=''
var conteud_menu=''
var procura_menu=''
var vet_titulo=[]
var vet_categ=[] 
var vet_cont=[]
   var cont=0
var aux=-1
var menu_conf= document.getElementById('menu-conf')

function cadastrar (){
menu_conf.style.display='none'
conteiner.innerHTML=""
 cadastro.style.display="block"
 msg.style.display="none"
}
function finalizar(){

if(titulo.value.length== 0 ||categoria.value.length==0||conteudo.value.length==0){
    alert("Preencha todos os campos!!")

}
else{
    cont ++;
    aux++;
    alert("noticia cadastrada!!")

    for (let r =aux ; r<cont; r++){
        vet_titulo[r]=titulo.value
        
        vet_categ[r]=categoria.value
        
        vet_cont[r]=conteudo.value
    
    }
    
    conteudo.focus()
    categoria.focus()
    titulo.focus()
    titulo.value=''
    
    categoria.value=''
    
    conteudo.value=''
}    

}
function exibir   (){
menu_conf.style.display='none'
cadastro.style.display="none"
conteiner.style.display='block'
conteiner.innerHTML=''
if(vet_titulo.length==0||vet_categ.length==0||vet_cont.length==0){
    alert("Não podemos exibir pois ainda não existem noticias cadastradas")
}
else{
for (let r = 0;r<cont;r++) {
var div = document.createElement("div")
div.class='not'
div.innerHTML=`<h1> ${vet_titulo[r]}</h1> <p id='categ'>${vet_categ[r]}</p><p>${vet_cont[r]}</p>`
conteiner.appendChild(div) 
}
}
 
}
conteiner.style.display='block'
conteiner.innerHTML=""
function press(event) {
procura= document.querySelector("#busca").value

if(event.key=='Enter'){    
cadastro.style.display='none'
   
if(procura.length==0){
    alert('Digite algo para procurar !!')
}else{
    conteiner.innerHTML=""
procura=procura.toLocaleUpperCase()
var fixa=0  // Variavel responsavel por pegar em qual posição do vetor foi encontrada certa semelhança entre o que o usuário procura e o que tem nas divs 
for(let r = 0 ;r< vet_titulo.length;r++ ){
    tit=vet_titulo[r]
    tit=tit.toLocaleUpperCase()
    categ=vet_categ[r]
    categ=categ.toLocaleUpperCase()
    conteud=vet_cont[r]
    conteud=conteud.toLocaleUpperCase()
    if(tit.includes(procura)||categ.includes(procura)||conteud.includes(procura)){
        fixa=r
        
        var div = document.createElement("div")
        div.class='not'
        div.innerHTML=`<h1> ${vet_titulo[fixa]}</h1> <p id='categ'>${vet_categ[fixa]}</p><p>${vet_cont[fixa]}</p>`
        conteiner.appendChild(div)
    }
    
}

}
}
}

function press_menu(event) {
procura_menu= document.querySelector("#busca-menu").value
if(event.key=='Enter'){  
menu_conf.style.display='none'
cadastro.style.display='none'
 
   if(procura_menu.length==0){
    alert('Digite algo para procurar !!')
}
else{
    conteiner.style.display='block'
    conteiner.innerHTML=""
procura_menu=procura_menu.toLocaleUpperCase()
var fixa=0  // Variavel responsavel por pegar em qual posição do vetor foi encontrada certa semelhança entre o que o usuário procura e o que tem nas divs 
for(let r = 0 ;r< vet_titulo.length;r++ ){
    tit_menu=vet_titulo[r]
    tit_menu=tit_menu.toLocaleUpperCase()
   
    categ_menu=vet_categ[r]
    categ_menu=categ_menu.toLocaleUpperCase()
    conteud_menu=vet_cont[r]
    conteud_menu=conteud_menu.toLocaleUpperCase()


    if(tit_menu.includes(procura_menu)||categ_menu.includes(procura_menu)||conteud_menu.includes(procura_menu)){
        fixa=r
        var div = document.createElement("div")
        div.class='not'
        div.innerHTML=`<h1> ${vet_titulo[fixa]}</h1> <p id='categ'>${vet_categ[fixa]}</p><p>${vet_cont[fixa]}</p>`
        conteiner.appendChild(div)
    }
    
}
}
}
}
menu_conf.style.display='none'
function menu(){
if(menu_conf.style.display==="none"){
    menu_conf.style.display='block'
    cadastro.style.display='none'
    conteiner.style.display='none'
}
else{
    menu_conf.style.display="none"
}
}
