const imagens = document.querySelectorAll(".galeria img");
const btnEsquerda = document.getElementById("btnEsquerda");
const btnDireita = document.getElementById("btnDireita");

let indiceAtual = 0;

function atualizarSelecao(novoIndice) {
    imagens[indiceAtual].classList.remove("selecionada");
    indiceAtual = novoIndice;
    imagens[indiceAtual].classList.add("selecionada");
}

btnEsquerda.addEventListener("click", () => {
    if (indiceAtual > 0) {
        atualizarSelecao(indiceAtual - 1);
    }
});

btnDireita.addEventListener("click", () => {
    if (indiceAtual < 2) {
        atualizarSelecao(indiceAtual + 1);
    }
});