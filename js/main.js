function show(log) {
    console.log(log);
}

const lista = document.getElementById("lista");
const formulario = document.getElementById("novoItem");
const itens = localStorage.getItem("itens") || [];

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nome = evento.target.elements['nome'];
    const quantidade = evento.target.elements['quantidade'];

    criarItem(nome.value, quantidade.value);

    nome.value = "";
    quantidade.value = "";
    
});

function criarItem(nome, quantidade) {
    show(nome);
    show(quantidade);

    const item = document.createElement('li');
    item.classList.add("item");
    
    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = quantidade;

    item.appendChild(numeroItem);
    item.innerHTML += nome;

    lista.appendChild(item);

    const itematual = {
        "nome": nome,
        "quantidade": quantidade
    }

    itens.push(itematual);


    localStorage.setItem("itens", JSON.stringify(itens));
}