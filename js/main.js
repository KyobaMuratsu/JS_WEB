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

    const itematual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    }

    criarItem(itematual);

    itens.push(itematual);

    localStorage.setItem("itens", JSON.stringify(itens));

    nome.value = "";
    quantidade.value = "";
    
});

function criarItem(item) {
    const novoitem = document.createElement('li');
    novoitem.classList.add("item");
    
    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = item.quantidade;
    novoitem.appendChild(numeroItem);

    novoitem.innerHTML += item.nome;

    lista.appendChild(novoitem);

}