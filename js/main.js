function show(log) {
    console.log(log);
}

const lista = document.getElementById("lista");
const formulario = document.getElementById("novoItem");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    criarItem(evento.target.elements['nome'].value, evento.target.elements['quantidade'].value);
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

    show(item)
}