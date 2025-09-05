const input = document.querySelector("input");
const botao = document.querySelector("button");
const lista = document.querySelector("ul");

botao.addEventListener("click", () => {
    const valor = input.value;
    const novoItem = document.createElement("li");
    novoItem.textContent = valor;

    lista.appendChild(novoItem);
});