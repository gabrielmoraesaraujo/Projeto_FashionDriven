let Usuario =0;
function iniciarPagina(){
   // Usuario = prompt("Qual o seu nome ?")

}

function selectionModelo(elemento){
    const itemSelecionado = document.querySelector('.Modelo .selecionado');

    if(itemSelecionado!==null){
        itemSelecionado.classList.remove('selecionado');
    }
    elemento.classList.add('selecionado');
}

function selectionGola(elemento){
    const itemSelecionado = document.querySelector('.Gola .selecionado');

    if(itemSelecionado!==null){
        itemSelecionado.classList.remove('selecionado');
    }
    elemento.classList.add('selecionado');
}

function selectionTecido(elemento){
    const itemSelecionado = document.querySelector('.Tecido .selecionado');

    if(itemSelecionado!==null){
        itemSelecionado.classList.remove('selecionado');
    }
    elemento.classList.add('selecionado');
}

iniciarPagina();