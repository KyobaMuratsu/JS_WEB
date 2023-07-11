function show(log) {
    console.log(log);
}

const lista = document.getElementById("lista");
const formulario = document.getElementById("novoItem");
const itens = JSON.parse(localStorage.getItem("itens")) || [];

itens.forEach((params) => {
    criarItem(params)
})

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nome = evento.target.elements['nome'];
    const quantidade = evento.target.elements['quantidade'];

    const existe = itens.find( item  => item.nome === nome.value);

    const itematual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    }

    if(existe){
        itematual.id = existe.id;

        atualizarItem(itematual);

        itens[itens.findIndex(elemento => elemento.id === existe.id)] = itematual
    }else{
        itematual.id = itens[itens.length - 1] ? (itens[itens.length-1]).id + 1 : 0;

        criarItem(itematual);

        itens.push(itematual);

    }

    localStorage.setItem("itens", JSON.stringify(itens));

    nome.value = "";
    quantidade.value = "";
    
});

function criarItem(item) {
    const novoitem = document.createElement('li');
    novoitem.classList.add("item");
    
    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = item.quantidade;
    numeroItem.dataset.id = item.id;
    novoitem.appendChild(numeroItem);

    novoitem.innerHTML += item.nome;

    novoitem.appendChild(deletarItem(item.id));

    lista.appendChild(novoitem);

}

function atualizarItem(item) {
    document.querySelector("[data-id='" + item.id + "']").innerHTML = item.quantidade;
}

function deletarItem(id) {
    const botao = document.createElement("button")
    botao.innerText = "X";

    botao.addEventListener("click", function() {
        deletaElemento(this.parentNode, id);
    });
    return botao;
}

function deletaElemento(tag, id) {
    tag.remove();

    itens.splice(itens.findIndex(elemento => elemento.id === id), 1);

    localStorage.setItem("itens", JSON.stringify(itens));
}