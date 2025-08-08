const variaveis = {
    a: "Primeira aula de HTML",
    b: "Segunda aula de HTML",
    c: "Terceira aula de HTML",
    d: "Quarta aula de HTML",
    e: "Quinta aula de HTML",
    f: "Sexta aula de HTML",
}

const str = 'Olá mundo!'
const num = 10;
const bool = true;

const arr = [1, 2, 3, 4, 5]
arr.forEach(function (item) {
})

const newList = arr.map(function (item) {
    return item * 2;
})

const filterList = arr.filter(function (item) {
    return item % 2 === 0;
})

const div = document.querySelector('div');

div.addEventListener('click', function () {
    console.log('Clicou na div')
})

const divs = document.querySelectorAll('div');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const h3 = document.querySelector('h3');
const h4 = document.querySelector('h4');
const h5 = document.querySelector('h5');
const h6 = document.querySelector('h6');