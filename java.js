let Usuario =0;
let modelo;
let gola;
let tecido;
let objeto = {};
function iniciarPagina(){
   // Usuario = prompt("Qual o seu nome ?")

}

function selectionModelo(elemento){
    const itemSelecionado = document.querySelector('.Modelo .selecionado');

    if(itemSelecionado!==null){
        itemSelecionado.classList.remove('selecionado');      
    }
    elemento.classList.add('selecionado');
    modelo = elemento.querySelector('.escondido').innerHTML;
}   

function selectionGola(elemento){
    const itemSelecionado = document.querySelector('.Gola .selecionado');

    if(itemSelecionado!==null){
        itemSelecionado.classList.remove('selecionado');
    }
    elemento.classList.add('selecionado');
    gola = elemento.querySelector('.escondido').innerHTML;
    
}

function selectionTecido(elemento){
    const itemSelecionado = document.querySelector('.Tecido .selecionado');

    if(itemSelecionado!==null){
        itemSelecionado.classList.remove('selecionado');
    }
    elemento.classList.add('selecionado');
    tecido = elemento.querySelector('.escondido').innerHTML;
  
}


//const meuInterval = setInterval(teste,1000);
function ativarBotao(){
    verifica();

    
}

function verifica(){
    objeto["model"]=0;
    if(modelo==="t-shirt"){
        objeto.model=modelo;
    }
    if(modelo==="long"){
        objeto.model=modelo;
    }
    if(modelo==="top-tank"){
        objeto.model=modelo;
    }    

    objeto["neck"]=0;
    if(gola==="v-neck"){
        objeto.neck=gola;
    }
    if(gola==="round"){
        objeto.neck=gola;
    }
    if(gola==="polo"){
        objeto.neck=gola;
    } 

    objeto["material"]=0;
    if(tecido==="silk"){
        objeto.material=tecido;
    }
    if(tecido==="cotton"){
        objeto.material=tecido;
    }
    if(tecido==="polyester"){
        objeto.material=tecido;
    } 

    //validarURL();
    //objeto["image"]=0;
    //if(url!===null){
    //objeto.image=url;}



    console.log(objeto);

}

function validarURL(url) {
    const regra = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;
    return regra.test(url);
  }

iniciarPagina();