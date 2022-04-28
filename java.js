let Usuario =0;
function iniciarPagina(){
   // Usuario = prompt("Qual o seu nome ?")

}

function selection(elemento){
    const itemSelecionado = document.querySelector('.Linha .selecionado');

    if(itemSelecionado!==null){
        itemSelecionado.classList.remove('selecionado');
    }

    elemento.classList.add('selecionado');

}

iniciarPagina();