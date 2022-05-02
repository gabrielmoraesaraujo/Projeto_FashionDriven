let Usuario;
let modelo;
let gola;
let tecido;
let objeto = {};
let modelos;
const API = 'https://mock-api.driven.com.br/api/v4/shirts-api/shirts'
function iniciarPagina(){
   Usuario = prompt("Qual o seu nome ?")
   modelosEnviados();
   objeto["owner"]=Usuario;
   objeto["author"]=Usuario;

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

const meuInterval = setInterval(verifica,100);

function ativarBotao(){
    let envio = axios.post("https://mock-api.driven.com.br/api/v4/shirts-api/shirts", objeto);
    alert('confirmando a encomenda')
    
    envio.then(TratarSucesso);
    envio.catch(TratarErro);
}

function TratarSucesso(){
    alert("encomenda confirmada")
    modelosEnviados();
}

function TratarErro(){
    alert("Ops, não conseguimos processar sua encomenda")
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

    objeto["image"]=document.querySelector(".url").value;
   
     if(validarURL(objeto.image)===true){

        if(objeto.model!==0 && objeto.neck!==0 && objeto.material!==0){
            let ativa = document.querySelector('.botao');       
            ativa.innerHTML = `
            <button class="buttonAtivado" onclick="ativarBotao()">Confirmar pedido</button>
            `  
            clearInterval(meuInterval);  
        }

        }else{
            let ativa = document.querySelector('.botao');       
            ativa.innerHTML = `
            <button class="buttonDesativado">Confirmar pedido</button>
            `  
            }    
    }

function validarURL(url) {
    const regra = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;
    return regra.test(url);
  }

function modelosEnviados(){
    
    modelos = axios.get(API)

    modelos.then(temModelos);
    modelos.catch(requisicaoErro);   
}

function temModelos(entrada){
    
    const novasEncomendas = document.querySelector(".novasEncomendas");
    novasEncomendas.innerHTML="";
    
    for(i=0; i< entrada.data.length; i++){
        novasEncomendas.innerHTML+= `
        <li class="caixaSelecao" onclick="pedidoTerceiro(this)">
                        <img  src="${entrada.data[i].image}" alt="">
                        <h6>Criador:${entrada.data[i].owner}</h6>  
                        <div class="model escondido">${entrada.data[i].model}</div>
                        <div class="neck escondido">${entrada.data[i].neck}</div>
                        <div class="material escondido">${entrada.data[i].material}</div>
                        <div class="image escondido">${entrada.data[i].image}</div>
                        <div class="owner escondido">${entrada.data[i].owner}</div>
                    </li>
        `
    }
}

function requisicaoErro(){
    alert("Não possuem modelos de outros usuarios")
}

function pedidoTerceiro(elemento){
    
    objeto["model"]= 0;
    objeto["neck"]= 0;
    objeto["material"]= 0;
    objeto["image"]= 0;
    objeto["owner"]= 0;

    objeto.model= elemento.querySelector(".model").innerHTML;
    objeto.neck= elemento.querySelector(".neck").innerHTML;
    objeto.material= elemento.querySelector(".material").innerHTML;
    objeto.image= elemento.querySelector(".image").innerHTML;
    objeto.owner= elemento.querySelector(".owner").innerHTML;

    if(confirm("Você tem certeza que deseja fazer essa encomenda ?")===true){
        ativarBotao();
    }
}

iniciarPagina();